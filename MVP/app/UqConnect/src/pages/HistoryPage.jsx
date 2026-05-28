import React from 'react';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import ActivityCard from '../components/ActivityCard';
import { mentors } from '../data/mockData';
import { Calendar } from 'lucide-react';

export default function HistoryPage() {
  const { joinedActivities, bookedMentorIds, endedMentorIds } = useAppContext();
  const allMentorIds = [...new Set([...bookedMentorIds, ...endedMentorIds])];
  const bookedMentors = mentors.filter(m => allMentorIds.includes(m.id));
  const isEmpty = joinedActivities.length === 0 && bookedMentors.length === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-24 px-5 max-w-4xl mx-auto min-h-screen"
    >
      <header className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Activity History</h1>
        <p className="text-gray-500 text-sm font-medium">Activities you've joined, hosted, or booked.</p>
      </header>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="font-bold text-gray-700 mb-1 text-lg">No activities yet</h3>
          <p className="text-sm text-gray-400">Join an activity or book a mentor session to see it here.</p>
        </div>
      ) : (
        <>
          {/* Mentor Bookings */}
          {bookedMentors.length > 0 && (
            <>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1 mb-3">
                Mentor Sessions
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {bookedMentors.map((mentor, i) => (
                  <motion.div
                    key={`mentor-${mentor.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-2xl p-5 border border-uqPurple/15 shadow-sm flex gap-4 items-center"
                  >
                    <div className="w-14 h-14 bg-uqPurple/5 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                      {mentor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 leading-tight mb-0.5">{mentor.name}</h3>
                      <p className="text-xs text-gray-500 mb-1">{mentor.role}</p>
                      {endedMentorIds.includes(mentor.id) ? (
                        <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-md inline-flex items-center gap-1">
                          <Calendar size={10} /> Session Ended
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-uqPurple bg-uqPurple/10 px-2 py-1 rounded-md inline-flex items-center gap-1">
                          <Calendar size={10} /> 15m Chat Booked
                        </span>
                      )}
                    </div>
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${endedMentorIds.includes(mentor.id) ? 'bg-gray-300' : 'bg-green-400'}`} />
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Joined Activities */}
          {joinedActivities.length > 0 && (
            <>
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1 mb-3">
                Joined Activities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {joinedActivities.map((activity, i) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <ActivityCard activity={activity} readOnly />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </motion.div>
  );
}
