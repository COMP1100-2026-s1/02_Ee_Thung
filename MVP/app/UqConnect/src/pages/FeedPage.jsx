import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Bell } from 'lucide-react';
import ActivityCard from '../components/ActivityCard';
import { useAppContext } from '../context/AppContext';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

const categories = ['All', 'Sports', 'IT & Tech', 'Arts', 'Low Price'];

export default function FeedPage() {
  const { activities, joinActivity } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = activities.filter(a => {
    const matchCat = activeCategory === 'All' || a.vibes.some(v => v.toLowerCase().includes(activeCategory.toLowerCase().replace(' & ', ' ')));
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-14 md:pt-24 px-5 max-w-5xl mx-auto"
    >
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">What's on?</h1>
          <p className="text-gray-500 text-sm font-medium">Find your people, right now.</p>
        </div>
        <button className="relative p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-600">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </header>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search activities..."
            className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple transition-all"
          />
        </div>
        <button className="bg-white border border-gray-200 p-3 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
          <Filter size={18} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
              activeCategory === cat
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-bold text-gray-700 mb-1">No activities found</h3>
          <p className="text-sm text-gray-400">Try a different search or filter.</p>
        </div>
      ) : (
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(activity => (
            <motion.div key={activity.id} variants={itemVariants}>
              <ActivityCard activity={activity} onJoin={() => joinActivity(activity)} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
