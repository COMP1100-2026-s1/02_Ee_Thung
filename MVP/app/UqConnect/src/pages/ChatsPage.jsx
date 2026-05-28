import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

// Same mock preview data as ChatRoomPage
const MOCK_LAST = {
  1: { sender: 'Sam',      text: "On my way! 5 mins late sorry 😅",             time: '10:12 AM' },
  2: { sender: 'Michael',  text: "I'll bring my laptop charger, who needs one?", time: '9:22 AM'  },
  3: { sender: 'Chris',    text: 'Perfect, see you at the entrance at 6!',       time: '4:10 PM'  },
  4: { sender: 'Emma W.',  text: 'Yes! Main gate at 9am sharp 📸',               time: '7:22 PM'  },
  5: { sender: 'UQ Data Science', text: "Python 3.10+ works great. We'll help you set up on the day too!", time: 'Mon 11:30 AM' },
  6: { sender: 'Dan K.',   text: 'Legend! Just need 2 more now 🙌',              time: 'Wed 2:12 PM' },
};

function avatarColor(name = '') {
  const hue = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360;
  return `hsl(${hue}, 60%, 52%)`;
}

export default function ChatsPage() {
  const { activities, joinedActivities, chats } = useAppContext();
  const navigate = useNavigate();

  // Show joined activities first, then all others (so the page is always populated)
  const joinedIds = new Set(joinedActivities.map(a => a.id));
  const others = activities.filter(a => !joinedIds.has(a.id));
  const displayList = [...joinedActivities, ...others];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-24 px-5 max-w-3xl mx-auto min-h-screen"
    >
      <header className="mb-5">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Chats</h1>
        <p className="text-gray-500 text-sm font-medium">Group chats for every activity.</p>
      </header>

      {/* Search bar */}
      <div className="relative mb-5">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple transition-all"
        />
      </div>

      {displayList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <MessageCircle size={64} strokeWidth={1.5} className="text-gray-200 mb-4" />
          <h3 className="font-bold text-gray-700 mb-1 text-lg">No chats yet</h3>
          <p className="text-sm text-gray-400">Join an activity to start chatting.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {/* Joined label */}
          {joinedActivities.length > 0 && (
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1 mb-1">
              Your Chats
            </p>
          )}

          {displayList.map((activity, i) => {
            const isJoined = joinedIds.has(activity.id);
            const ctxMessages = chats[activity.id] || [];
            const lastMsg = ctxMessages.length > 0
              ? ctxMessages[ctxMessages.length - 1]
              : MOCK_LAST[activity.id];

            // Separator between joined and others
            const showOthersLabel = !isJoined && i > 0 && joinedIds.has(displayList[i - 1]?.id);

            return (
              <React.Fragment key={activity.id}>
                {showOthersLabel && (
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1 mt-3 mb-1">
                    All Activity Chats
                  </p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => navigate(`/chat/${activity.id}`)}
                  className={`bg-white rounded-2xl p-4 flex items-center gap-3.5 cursor-pointer hover:shadow-md transition-all active:scale-[0.98] border ${
                    isJoined ? 'border-uqPurple/15 shadow-sm' : 'border-gray-100 shadow-sm opacity-80'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className="w-13 h-13 w-[52px] h-[52px] rounded-2xl flex items-center justify-center text-white font-black text-xl shrink-0 shadow-sm"
                    style={{ background: avatarColor(activity.title) }}
                  >
                    {activity.title.charAt(0)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className={`font-bold truncate pr-2 ${isJoined ? 'text-gray-900' : 'text-gray-600'}`}>
                        {activity.title}
                      </h3>
                      {lastMsg && (
                        <span className="text-[10px] font-medium text-gray-400 shrink-0">{lastMsg.time}</span>
                      )}
                    </div>

                    {lastMsg ? (
                      <p className="text-sm text-gray-500 truncate leading-snug">
                        <span className="font-semibold text-gray-700">{lastMsg.sender}:</span>{' '}
                        {lastMsg.text}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No messages yet. Say hi!</p>
                    )}
                  </div>

                  {/* Joined badge */}
                  {isJoined && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0" title="You joined this" />
                  )}
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
