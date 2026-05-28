import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Send, Users, Hash, Smile } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// Fallback mock messages per activity ID
const MOCK_MESSAGES = {
  1: [
    { id: 'm1', sender: 'Alex M.', text: 'Hey everyone! Court 5 is booked.', time: '10:00 AM' },
    { id: 'm2', sender: 'Jordan', text: "Awesome, I'm bringing an extra racket if anyone needs.", time: '10:05 AM' },
    { id: 'm3', sender: 'Sam', text: 'On my way! 5 mins late sorry 😅', time: '10:12 AM' },
  ],
  2: [
    { id: 'm1', sender: 'Sarah T.', text: 'I managed to grab the large table at the back!', time: '9:00 AM' },
    { id: 'm2', sender: 'David', text: 'Are we doing Blind 75 today?', time: '9:15 AM' },
    { id: 'm3', sender: 'Sarah T.', text: 'Yes, starting with Arrays & Hashing.', time: '9:20 AM' },
    { id: 'm4', sender: 'Michael', text: "I'll bring my laptop charger, who needs one?", time: '9:22 AM' },
  ],
  3: [
    { id: 'm1', sender: 'Jake P.', text: "I'll be wearing a red UQ climbing shirt.", time: '4:00 PM' },
    { id: 'm2', sender: 'Chris', text: 'Perfect, see you at the entrance at 6!', time: '4:10 PM' },
  ],
  4: [
    { id: 'm1', sender: 'Emma W.', text: 'Fingers crossed for good weather tomorrow!', time: '7:00 PM' },
    { id: 'm2', sender: 'Liam', text: 'Checked the forecast — looks clear! ☀️', time: '7:15 PM' },
    { id: 'm3', sender: 'Olivia', text: 'Should we meet at the main gate?', time: '7:20 PM' },
    { id: 'm4', sender: 'Emma W.', text: 'Yes! Main gate at 9am sharp 📸', time: '7:22 PM' },
  ],
  5: [
    { id: 'm1', sender: 'UQ Data Science', text: 'Please make sure you have Jupyter Notebook installed prior to the workshop.', time: 'Mon 10:00 AM' },
    { id: 'm2', sender: 'Student1', text: 'Do we need to install any specific Python version?', time: 'Mon 11:00 AM' },
    { id: 'm3', sender: 'UQ Data Science', text: "Python 3.10+ works great. We'll help you set up on the day too!", time: 'Mon 11:30 AM' },
  ],
  6: [
    { id: 'm1', sender: 'Dan K.', text: "We need 4 more people to make it 11v11!", time: 'Wed 2:00 PM' },
    { id: 'm2', sender: 'Player1', text: "I'll bring my mate, that's +2", time: 'Wed 2:10 PM' },
    { id: 'm3', sender: 'Dan K.', text: 'Legend! Just need 2 more now 🙌', time: 'Wed 2:12 PM' },
  ],
};

// Avatar colour based on name (deterministic)
function avatarColor(name = '') {
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return `hsl(${hue}, 60%, 52%)`;
}

export default function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { activities, chats, sendMessage, userName } = useAppContext();
  const displayName = userName || localStorage.getItem('userName') || 'You';

  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const activityId = Number(id);

  // Look up from ALL activities, not just joined ones
  const activity = activities.find(a => String(a.id) === String(activityId));

  // Merge: context messages + mock fallback
  const contextMessages = chats[activityId] || [];
  const allMessages = contextMessages.length > 0
    ? contextMessages
    : (MOCK_MESSAGES[activityId] || []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessages.length]);

  // Loading state while activities fetch
  if (activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <div className="w-8 h-8 rounded-full border-4 border-uqPurple/20 border-t-uqPurple animate-spin" />
        <p className="text-sm text-gray-400">Loading chat...</p>
      </div>
    );
  }

  // Activity not found at all
  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-3">
        <div className="text-4xl">💬</div>
        <p className="text-gray-600 font-semibold">Activity not found.</p>
        <button
          onClick={() => navigate('/chats')}
          className="text-uqPurple font-bold mt-2 hover:underline"
        >
          ← Go to Chats
        </button>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sendMessage(activityId, { sender: displayName, text: inputText.trim(), time });
    setInputText('');
    inputRef.current?.focus();
  };

  // Group consecutive messages from same sender
  const grouped = allMessages.map((msg, i) => ({
    ...msg,
    isFirst: i === 0 || allMessages[i - 1].sender !== msg.sender,
    isLast: i === allMessages.length - 1 || allMessages[i + 1].sender !== msg.sender,
  }));

  return (
    <div className="flex flex-col h-[100dvh] bg-[#F0F2F5]" style={{ paddingTop: '64px' }}>

      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3 shrink-0 shadow-sm">
        <button
          onClick={() => navigate('/chats')}
          className="p-2 -ml-1.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-sm"
          style={{ background: avatarColor(activity.title) }}
        >
          {activity.title.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-gray-900 truncate leading-tight">{activity.title}</h1>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
            <Users size={11} />
            <span>{activity.attendees || 0} members · {activity.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex -space-x-1.5 mr-1">
            {(activity.attendeesList || []).slice(0, 3).map((name, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold"
                style={{ background: avatarColor(name) }}
                title={name}
              >
                {name.charAt(0)}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── Messages ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 no-scrollbar flex flex-col">

        {/* Date divider */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[11px] text-gray-400 font-semibold whitespace-nowrap">Today</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Welcome pill */}
        <div className="flex justify-center mb-5">
          <div className="bg-white border border-gray-100 rounded-full px-4 py-1.5 text-xs text-gray-500 font-medium shadow-sm flex items-center gap-1.5">
            <Hash size={11} />
            Welcome to <span className="font-bold text-gray-700">{activity.title}</span>
          </div>
        </div>

        {/* Message list */}
        <div className="flex flex-col gap-0.5">
          {grouped.map((msg) => {
            const isMe = msg.sender === displayName;
            const color = avatarColor(msg.sender);

            return (
              <AnimatePresence key={msg.id || `${msg.sender}-${msg.time}`}>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex items-end gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'} ${msg.isFirst ? 'mt-3' : 'mt-0.5'}`}
                >
                  {/* Avatar — only shown for others on last message in group */}
                  <div className="w-8 shrink-0">
                    {!isMe && msg.isLast && (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
                        style={{ background: color }}
                      >
                        {msg.sender.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className={`flex flex-col max-w-[72%] ${isMe ? 'items-end' : 'items-start'}`}>
                    {/* Sender name — only on first in group */}
                    {!isMe && msg.isFirst && (
                      <span className="text-[11px] font-semibold ml-3 mb-1" style={{ color }}>
                        {msg.sender}
                      </span>
                    )}

                    {/* Bubble */}
                    <div
                      className={`px-4 py-2.5 text-[14.5px] leading-relaxed shadow-sm ${
                        isMe
                          ? `bg-uqPurple text-white ${msg.isFirst ? 'rounded-t-2xl' : 'rounded-t-lg'} ${msg.isLast ? 'rounded-bl-2xl rounded-br-sm' : 'rounded-l-2xl rounded-r-lg'}`
                          : `bg-white text-gray-800 border border-gray-100 ${msg.isFirst ? 'rounded-t-2xl' : 'rounded-t-lg'} ${msg.isLast ? 'rounded-br-2xl rounded-bl-sm' : 'rounded-r-2xl rounded-l-lg'}`
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Timestamp — only on last in group */}
                    {msg.isLast && (
                      <span className={`text-[10px] text-gray-400 mt-1 ${isMe ? 'mr-1' : 'ml-1'}`}>
                        {msg.time}
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>

        <div ref={messagesEndRef} className="h-2" />
      </div>

      {/* ── Input Bar ── */}
      <div className="bg-white border-t border-gray-100 px-4 py-3 shrink-0 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSend} className="flex items-center gap-2 max-w-3xl mx-auto">
          <button type="button" className="p-2 text-gray-400 hover:text-gray-600 transition-colors shrink-0">
            <Smile size={22} />
          </button>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder={`Message ${activity.title}...`}
              className="w-full bg-gray-100 rounded-2xl px-4 py-2.5 pr-12 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-uqPurple/20 transition-all border border-transparent focus:border-uqPurple/20"
            />
          </div>
          <motion.button
            type="submit"
            disabled={!inputText.trim()}
            whileTap={inputText.trim() ? { scale: 0.9 } : {}}
            className={`p-2.5 rounded-full shrink-0 transition-all ${
              inputText.trim()
                ? 'bg-uqPurple text-white shadow-md shadow-uqPurple/30'
                : 'bg-gray-100 text-gray-300 cursor-not-allowed'
            }`}
          >
            <Send size={18} />
          </motion.button>
        </form>
      </div>
    </div>
  );
}
