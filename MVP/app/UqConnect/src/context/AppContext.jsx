import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const API = 'http://localhost:3001';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [messages, setMessages] = useState([]);
  const [joinedActivityIds, setJoinedActivityIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('joinedActivityIds') || '[]'); } catch { return []; }
  });
  const [joinedClubs, setJoinedClubs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('joinedClubs') || '[1,11]'); } catch { return [1, 11]; }
  });
  const [bookedMentorIds, setBookedMentorIds] = useState(() => {
    const user = localStorage.getItem('userName') || 'guest';
    try { return JSON.parse(localStorage.getItem(`bookedMentorIds_${user}`) || '[]'); } catch { return []; }
  });
  const [endedMentorIds, setEndedMentorIds] = useState(() => {
    const user = localStorage.getItem('userName') || 'guest';
    try { return JSON.parse(localStorage.getItem(`endedMentorIds_${user}`) || '[]'); } catch { return []; }
  });
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')); } catch { return null; }
  });
  const [userName, setUserName] = useState(() => localStorage.getItem('userName') || '');
  const [loading, setLoading] = useState(true);

  // Fetch activities + messages from json-server, poll every 4s for live updates
  const fetchData = useCallback(async () => {
    try {
      const [actRes, msgRes] = await Promise.all([
        fetch(`${API}/activities`),
        fetch(`${API}/messages`),
      ]);
      const acts = await actRes.json();
      const msgs = await msgRes.json();
      setActivities(acts);
      setMessages(msgs);
    } catch (err) {
      console.warn('json-server not reachable, using empty data', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 4000);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Persist joined IDs to localStorage so they survive refresh
  useEffect(() => {
    localStorage.setItem('joinedActivityIds', JSON.stringify(joinedActivityIds));
  }, [joinedActivityIds]);

  useEffect(() => {
    localStorage.setItem('joinedClubs', JSON.stringify(joinedClubs));
  }, [joinedClubs]);

  useEffect(() => {
    const user = localStorage.getItem('userName') || 'guest';
    localStorage.setItem(`bookedMentorIds_${user}`, JSON.stringify(bookedMentorIds));
  }, [bookedMentorIds]);

  useEffect(() => {
    const user = localStorage.getItem('userName') || 'guest';
    localStorage.setItem(`endedMentorIds_${user}`, JSON.stringify(endedMentorIds));
  }, [endedMentorIds]);

  // Derived: joined activities are full activity objects matching joinedActivityIds
  const joinedActivities = activities.filter(a => joinedActivityIds.map(String).includes(String(a.id)));

  // Chats: group messages by activityId
  const chats = messages.reduce((acc, msg) => {
    const key = msg.activityId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(msg);
    return acc;
  }, {});

  const addActivity = async (activity) => {
    const newActivity = {
      ...activity,
      attendees: 1,
      maxAttendees: activity.maxAttendees || 8,
      organizer: userName || 'You',
      attendeesList: [userName || 'You'],
    };
    try {
      const res = await fetch(`${API}/activities`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newActivity),
      });
      const created = await res.json();
      setActivities(prev => [created, ...prev]);
      setJoinedActivityIds(prev => [...new Set([...prev, created.id])]);
    } catch {
      // Fallback: local only
      const local = { ...newActivity, id: Date.now() };
      setActivities(prev => [local, ...prev]);
      setJoinedActivityIds(prev => [...new Set([...prev, local.id])]);
    }
  };

  const joinActivity = async (activity, attendeeName) => {
    if (joinedActivityIds.includes(activity.id)) return;
    setJoinedActivityIds(prev => [...new Set([...prev, activity.id])]);
    const updatedAttendees = Math.min((activity.attendees || 0) + 1, activity.maxAttendees);
    const updatedList = [...(activity.attendeesList || []), attendeeName || userName || 'You'];
    try {
      await fetch(`${API}/activities/${activity.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attendees: updatedAttendees, attendeesList: updatedList }),
      });
      await fetchData();
    } catch {
      setActivities(prev =>
        prev.map(a => a.id === activity.id
          ? { ...a, attendees: updatedAttendees, attendeesList: updatedList }
          : a)
      );
    }
  };

  const joinClub = (clubId) => {
    setJoinedClubs(prev => prev.includes(clubId) ? prev.filter(id => id !== clubId) : [...prev, clubId]);
  };

  const bookMentor = (mentorId) => {
    setBookedMentorIds(prev => [...new Set([...prev, mentorId])]);
  };

  const endMentorSession = (mentorId) => {
    setBookedMentorIds(prev => prev.filter(id => id !== mentorId));
    setEndedMentorIds(prev => [...new Set([...prev, mentorId])]);
  };

  const updateUser = async (updates) => {
    if (!user || !user.id) return;
    try {
      const res = await fetch(`${API}/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      const updatedUser = await res.json();
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      // Keep legacy userName synced
      if (updates.name) {
        setUserName(updates.name);
        localStorage.setItem('userName', updates.name);
      }
      return true;
    } catch (err) {
      console.warn('Failed to update user', err);
      return false;
    }
  };

  const sendMessage = async (activityId, message) => {
    const newMsg = { activityId, ...message };
    // Optimistically add to local state
    setMessages(prev => [...prev, { ...newMsg, id: Date.now() }]);
    try {
      await fetch(`${API}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMsg),
      });
    } catch {
      // local optimistic update already done above
    }
  };

  return (
    <AppContext.Provider value={{
      activities,
      loading,
      addActivity,
      joinedClubs,
      joinClub,
      joinedActivities,
      joinedActivityIds,
      joinActivity,
      bookedMentorIds,
      bookMentor,
      endMentorSession,
      endedMentorIds,
      chats,
      sendMessage,
      userName,
      setUserName,
      user,
      setUser,
      updateUser
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
