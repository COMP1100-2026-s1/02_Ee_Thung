import React from 'react';
import { cn } from '../lib/utils';

export default function ClubCard({ club, onClick, isMember }) {
  return (
    <div
      onClick={() => onClick(club)}
      className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow active:scale-95 duration-200 relative overflow-hidden"
    >
      {isMember && (
        <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" title="Member" />
      )}
      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl mb-3 shadow-inner">
        {club.logo}
      </div>
      <h3 className="font-bold text-gray-900 leading-tight mb-1 text-xs md:text-sm">{club.name}</h3>
      <span className={cn(
        "text-xs font-medium px-2 py-1 rounded-md mt-auto",
        isMember ? "bg-green-100 text-green-700" : "bg-uqPurple/5 text-uqPurple"
      )}>
        {isMember ? '✓ Member' : club.category}
      </span>
    </div>
  );
}
