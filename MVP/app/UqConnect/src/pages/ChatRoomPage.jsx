import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Send, Info } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ChatRoomPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { joinedActivities, chats, sendMessage, userName } = useAppContext();
  const displayName = userName || 'You';
  
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const activityId = Number(id);
  const activity = joinedActivities.find(a => a.id === activityId);
  const messages = chats[activityId] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!activity) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>Chat not found. Please join the activity first.</p>
        <button onClick={() => navigate('/chats')} className="text-uqPurple font-bold mt-4">Go Back</button>
      </div>
    );
  }

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    sendMessage(activityId, { sender: displayName, text: inputText, time });
    setInputText('');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 pt-safe">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10 shrink-0">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 min-w-0 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-uqPurple/10 text-uqPurple flex items-center justify-center shrink-0">
            <span className="font-black text-lg">{activity.title.charAt(0)}</span>
          </div>
          <div className="min-w-0">
            <h1 className="font-bold text-gray-900 truncate">{activity.title}</h1>
            <p className="text-xs text-gray-500 truncate">{activity.attendees} members</p>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Info size={22} />
        </button>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-20 no-scrollbar">
        <div className="text-center my-4">
          <span className="bg-gray-200 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full">
            Welcome to the {activity.title} group!
          </span>
        </div>
        
        {messages.map((msg, idx) => {
          const isMe = msg.sender === displayName;
          // Slack/iMessage hybrid style
          return (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'} items-end`}
            >
              {!isMe && (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold shrink-0 mb-1">
                  {msg.sender.charAt(0)}
                </div>
              )}
              <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[75%]`}>
                {!isMe && <span className="text-[11px] text-gray-500 font-medium ml-1 mb-0.5">{msg.sender}</span>}
                <div className={`px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
                  isMe 
                    ? 'bg-uqPurple text-white rounded-br-sm' 
                    : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 mx-1">{msg.time}</span>
              </div>
            </motion.div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-3 pb-safe shrink-0 absolute bottom-0 w-full md:relative">
        <form onSubmit={handleSend} className="max-w-4xl mx-auto relative flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Message group..."
            className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-uqPurple focus:ring-2 focus:ring-uqPurple/20 rounded-full pl-5 pr-12 py-3 text-sm transition-all outline-none"
          />
          <button 
            type="submit" 
            disabled={!inputText.trim()}
            className={`absolute right-1.5 p-2 rounded-full transition-colors ${
              inputText.trim() ? 'bg-uqPurple text-white shadow-sm' : 'text-gray-400'
            }`}
          >
            <Send size={18} className={inputText.trim() ? '-ml-0.5 mt-0.5' : ''} />
          </button>
        </form>
      </div>
    </div>
  );
}
