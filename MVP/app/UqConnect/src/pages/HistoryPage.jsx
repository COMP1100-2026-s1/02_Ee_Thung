import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import ActivityCard from '../components/ActivityCard';

export default function HistoryPage() {
  const { joinedActivities } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-24 px-5 max-w-4xl mx-auto min-h-screen"
    >
      <header className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Activity History</h1>
        <p className="text-gray-500 text-sm font-medium">Activities you've joined or hosted.</p>
      </header>

      {joinedActivities.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="font-bold text-gray-700 mb-1 text-lg">No activities yet</h3>
          <p className="text-sm text-gray-400">Join an activity from the Live Feed to see it here.</p>
        </div>
      ) : (
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
      )}
    </motion.div>
  );
}