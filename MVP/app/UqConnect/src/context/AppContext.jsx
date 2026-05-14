import React, { createContext, useContext, useState } from 'react';
import { activities as initialActivities } from '../data/mockData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [activities, setActivities] = useState(initialActivities);
  const [joinedClubs, setJoinedClubs] = useState([1, 11]); // user is already member of UQCS + UQ Tennis
  const [joinedActivities, setJoinedActivities] = useState([
    { id: 101, title: 'UQCS Study Night', location: 'Advanced Engineering Building', time: 'Last Tuesday', tier: 'Newbie', vibes: ['Academic', 'Tech'], attendees: 6, maxAttendees: 8, organizer: 'Sarah T.' },
    { id: 102, title: 'Social Tennis Hit', location: 'UQ Tennis Courts', time: 'Last Sunday', tier: 'Hobbyist', vibes: ['Outdoors', 'Chill'], attendees: 4, maxAttendees: 4, organizer: 'Alex M.' },
  ]);

  const addActivity = (activity) => {
    setActivities(prev => [{ ...activity, id: Date.now(), attendees: 1, maxAttendees: activity.maxAttendees || 8, organizer: 'You' }, ...prev]);
  };

  const joinActivity = (activity) => {
    setJoinedActivities(prev => {
      if (prev.find(a => a.id === activity.id)) return prev;
      return [{ ...activity, time: 'Just now' }, ...prev];
    });
    setActivities(prev =>
      prev.map(a => a.id === activity.id ? { ...a, attendees: Math.min(a.attendees + 1, a.maxAttendees) } : a)
    );
  };

  const joinClub = (clubId) => {
    setJoinedClubs(prev => prev.includes(clubId) ? prev.filter(id => id !== clubId) : [...prev, clubId]);
  };

  return (
    <AppContext.Provider value={{ activities, addActivity, joinedClubs, joinClub, joinedActivities, joinActivity }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
