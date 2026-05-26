import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const tierColors = {
  Newbie: 'bg-green-100 text-green-700',
  Hobbyist: 'bg-blue-100 text-blue-700',
  Competitive: 'bg-red-100 text-red-700',
};

export default function ActivityCard({ activity, onClick, readOnly, isJoined }) {
  const isFull = activity.attendees >= activity.maxAttendees;

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-5 shadow-soft border border-gray-100/50 h-full flex flex-col transition-all ${onClick ? 'cursor-pointer hover:shadow-md hover:border-uqPurple/20 active:scale-[0.98]' : ''}`}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 text-xs font-semibold bg-uqPurple/10 text-uqPurple rounded-lg flex items-center gap-1">
            <Clock size={12} />
            {activity.time}
          </span>
          <span className={cn('px-2.5 py-1 text-xs font-semibold rounded-lg', tierColors[activity.tier] || 'bg-gray-100 text-gray-700')}>
            {activity.tier}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1">{activity.title}</h3>

      <div className="flex items-center text-gray-500 text-sm mb-4">
        <MapPin size={14} className="mr-1 shrink-0" />
        {activity.location}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {activity.vibes?.map((vibe, i) => (
          <span key={i} className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-100 px-2 py-1 rounded-md">
            {vibe}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-gray-50 mt-auto">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(Math.min(activity.attendees || 1, 3))].map((_, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px]">
                👤
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">
            {activity.attendees}/{activity.maxAttendees} going
          </span>
        </div>

        {readOnly ? (
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
            <CheckCircle size={13} /> Joined
          </span>
        ) : isJoined ? (
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
            <CheckCircle size={13} /> Joined!
          </span>
        ) : isFull ? (
          <span className="bg-gray-100 text-gray-500 px-3 py-1.5 rounded-xl text-xs font-semibold">Full</span>
        ) : (
          <div className="bg-uqPurple text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm flex items-center justify-center">
            View Details
          </div>
        )}
      </div>
    </div>
  );
}
