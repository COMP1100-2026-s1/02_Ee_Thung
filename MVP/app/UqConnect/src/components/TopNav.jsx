import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, PlusCircle, Compass, History, MessageCircle } from 'lucide-react';

export default function TopNav({ userName }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isWelcome = currentPath === '/';

  const tabs = [
    { path: '/feed',       label: 'Live Feed',   icon: Home },
    { path: '/chats',      label: 'Chats',       icon: MessageCircle },
    { path: '/clubs',      label: 'Clubs',       icon: Users },
    { path: '/host',       label: 'Host Social', icon: PlusCircle },
    { path: '/pathfinder', label: 'Pathfinder',  icon: Compass },
    { path: '/history',    label: 'History',     icon: History },
  ];

  const initial     = userName ? userName.charAt(0).toUpperCase() : '?';
  const displayName = userName || 'Account';

  return (
    <nav className={`flex fixed top-0 w-full px-4 md:px-8 h-16 z-50 items-center justify-between border-b transition-all duration-300 ${
      isWelcome
        ? 'bg-transparent border-white/10'
        : 'bg-white border-gray-100 shadow-sm'
    }`}>
      <div className="flex items-center gap-8 h-full">
        {/* Logo — always visible */}
        <Link to="/" className={`font-black text-xl tracking-tight whitespace-nowrap ${
          isWelcome ? 'text-white' : 'text-uqPurple'
        }`}>
          UQ-Connect
        </Link>

        {/* Tabs — hidden on welcome page AND hidden on mobile */}
        {!isWelcome && (
          <div className="hidden md:flex items-center gap-1 h-full">
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
        )}
      </div>

      {/* Account pill — always visible */}
      <Link
        to="/account"
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors font-medium text-sm ${
          isWelcome
            ? 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
            : currentPath === '/account'
            ? 'bg-uqPurple/10 text-uqPurple'
            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
        }`}
      >
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
          isWelcome ? 'bg-white/25 text-white' : 'bg-uqPurple text-white'
        }`}>
          {initial}
        </div>
        <span className="max-w-[100px] truncate">{displayName}</span>
      </Link>
    </nav>
  );
}
