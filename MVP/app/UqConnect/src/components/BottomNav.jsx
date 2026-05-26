import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, PlusCircle, Compass, User, History, MessageCircle } from 'lucide-react';

export default function BottomNav({ userName }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: '/feed', label: 'Live', icon: Home },
    { path: '/chats', label: 'Chats', icon: MessageCircle },
    { path: '/clubs', label: 'Clubs', icon: Users },
    { path: '/host', label: 'Host', icon: PlusCircle },
    { path: '/pathfinder', label: 'Guide', icon: Compass },
    { path: '/history', label: 'History', icon: History },
    { path: '/account', label: userName || 'Account', icon: User, isAccount: true },
  ];

  const initial = userName ? userName.charAt(0).toUpperCase() : null;

  return (
    <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-100 pb-safe pt-1 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center max-w-md mx-auto h-14 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentPath === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center flex-1 transition-colors duration-200 ${
                isActive ? 'text-uqPurple' : 'text-gray-400'
              }`}
            >
              {tab.isAccount && initial ? (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isActive ? 'bg-uqPurple text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {initial}
                </div>
              ) : (
                <div className={`p-1 rounded-xl transition-all duration-300 ${isActive ? 'bg-purple-50' : ''}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
              )}
              <span className={`text-[9px] mt-0.5 font-medium truncate max-w-[40px] text-center ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
