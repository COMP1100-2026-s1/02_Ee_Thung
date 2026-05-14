import React from 'react';
import { Calendar } from 'lucide-react';

export default function MentorCard({ mentor }) {
  return (
    <div className="bg-white rounded-2xl p-5 mb-4 shadow-soft border border-gray-100 flex gap-4 items-center">
      <div className="w-16 h-16 bg-uqPurple/5 rounded-2xl flex items-center justify-center text-3xl shrink-0">
        {mentor.avatar}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900 leading-tight mb-1">{mentor.name}</h3>
        <p className="text-xs text-gray-500 font-medium mb-1">{mentor.role}</p>
        <span className="text-[11px] font-semibold text-uqPurple bg-uqPurple/10 px-2 py-1 rounded-md inline-block mb-3">
          {mentor.specialty}
        </span>
        <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition active:scale-[0.98]">
          <Calendar size={14} /> Book 15m Chat
        </button>
      </div>
    </div>
  );
}
