import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ChatsPage() {
  const { joinedActivities, chats } = useAppContext();
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-14 md:pt-24 px-5 max-w-3xl mx-auto min-h-screen"
    >
      <header className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Chats</h1>
        <p className="text-gray-500 text-sm font-medium">Connect with people in your activities.</p>
      </header>

      {joinedActivities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-5xl mb-4 text-gray-300">
            <MessageCircle size={64} strokeWidth={1.5} />
          </div>
          <h3 className="font-bold text-gray-700 mb-1 text-lg">No chats yet</h3>
          <p className="text-sm text-gray-400">Join an activity to start chatting.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {joinedActivities.map((activity, i) => {
            const messages = chats[activity.id] || [];
            const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;

            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => navigate(`/chat/${activity.id}`)}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
              >
                <div className="w-14 h-14 rounded-2xl bg-uqPurple/10 text-uqPurple flex items-center justify-center shrink-0">
                  <span className="text-xl font-black">{activity.title.charAt(0)}</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 truncate pr-2">{activity.title}</h3>
                    {lastMessage && (
                      <span className="text-[10px] font-medium text-gray-400 shrink-0">{lastMessage.time}</span>
                    )}
                  </div>
                  
                  {lastMessage ? (
                    <p className="text-sm text-gray-500 truncate">
                      <span className="font-medium text-gray-700">{lastMessage.sender}:</span> {lastMessage.text}
                    </p>
                  ) : (
                    <p className="text-sm text-gray-400 italic">No messages yet. Say hi!</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
