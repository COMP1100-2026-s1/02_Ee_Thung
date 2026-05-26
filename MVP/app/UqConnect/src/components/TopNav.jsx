import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, PlusCircle, Compass, History, MessageCircle } from 'lucide-react';

export default function TopNav({ userName }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: '/feed', label: 'Live Feed', icon: Home },
    { path: '/chats', label: 'Chats', icon: MessageCircle },
    { path: '/clubs', label: 'Clubs', icon: Users },
    { path: '/host', label: 'Host Social', icon: PlusCircle },
    { path: '/pathfinder', label: 'Pathfinder', icon: Compass },
    { path: '/history', label: 'History', icon: History },
  ];

  const initial = userName ? userName.charAt(0).toUpperCase() : '?';
  const displayName = userName || 'Account';

  return (
    <nav className="hidden md:flex fixed top-0 w-full bg-white border-b border-gray-100 px-8 h-16 shadow-sm z-50 items-center justify-between">
      <div className="flex items-center gap-8 h-full">
        <Link to="/feed" className="font-black text-xl text-uqPurple tracking-tight whitespace-nowrap">
          UQ-Connect
        </Link>
        <div className="flex items-center gap-1 h-full">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.path;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-1.5 h-full px-3 border-b-2 transition-colors text-sm whitespace-nowrap ${
                  isActive
                    ? 'border-uqPurple text-uqPurple font-bold'
                    : 'border-transparent text-gray-500 hover:text-gray-900'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/account"
          className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors font-medium text-sm ${
            currentPath === '/account' ? 'bg-uqPurple/10 text-uqPurple' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
          }`}
        >
          <div className="w-7 h-7 rounded-full bg-uqPurple text-white flex items-center justify-center text-xs font-bold shrink-0">
            {initial}
          </div>
          <span className="max-w-[100px] truncate">{displayName}</span>
        </Link>
      </div>
    </nav>
  );
}
