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

  // ── Style tokens ─────────────────────────────────────────────────────────
  const navBase = isWelcome
    ? 'bg-white/10 backdrop-blur-md border-white/15'
    : 'bg-white border-gray-100 shadow-sm';

  const logoColor  = isWelcome ? 'text-white'              : 'text-uqPurple';
  const tabDefault = isWelcome ? 'text-white/70 hover:text-white border-transparent'
                               : 'text-gray-500 hover:text-gray-900 border-transparent';
  const tabActive  = isWelcome ? 'text-white border-white font-bold'
                               : 'text-uqPurple border-uqPurple font-bold';

  const avatarBg   = isWelcome ? 'bg-white/20 text-white border border-white/30'
                               : 'bg-uqPurple text-white';
  const accountBtn = isWelcome
    ? `bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm ${currentPath === '/account' ? 'bg-white/20' : ''}`
    : `bg-gray-50 hover:bg-gray-100 text-gray-700 ${currentPath === '/account' ? 'bg-uqPurple/10 text-uqPurple' : ''}`;

  return (
    <nav className={`hidden md:flex fixed top-0 w-full px-8 h-16 z-50 items-center justify-between border-b transition-all duration-300 ${navBase}`}>
      <div className="flex items-center gap-8 h-full">
        {/* Logo */}
        <Link to="/" className={`font-black text-xl tracking-tight whitespace-nowrap transition-colors ${logoColor}`}>
          UQ-Connect
        </Link>

        {/* Tabs */}
        <div className="flex items-center gap-1 h-full">
          {tabs.map((tab) => {
            const isActive = currentPath === tab.path;
            const Icon = tab.icon;
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={`flex items-center gap-1.5 h-full px-3 border-b-2 transition-all text-sm whitespace-nowrap ${
                  isActive ? tabActive : tabDefault
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Account pill */}
      <Link
        to="/account"
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all font-medium text-sm ${accountBtn}`}
      >
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${avatarBg}`}>
          {initial}
        </div>
        <span className="max-w-[100px] truncate">{displayName}</span>
      </Link>
    </nav>
  );
}
