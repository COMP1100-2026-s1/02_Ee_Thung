import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, PlusCircle, Compass, User, History } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { path: '/feed', label: 'Live', icon: Home },
    { path: '/clubs', label: 'Clubs', icon: Users },
    { path: '/host', label: 'Host', icon: PlusCircle },
    { path: '/pathfinder', label: 'Guide', icon: Compass },
    { path: '/history', label: 'History', icon: History },
    { path: '/account', label: 'Account', icon: User },
  ];

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
              <div className={`p-1 rounded-xl transition-all duration-300 ${isActive ? 'bg-purple-50' : ''}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[9px] mt-0.5 font-medium ${isActive ? 'font-semibold' : ''}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
