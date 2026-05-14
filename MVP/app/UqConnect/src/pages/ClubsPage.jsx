import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import ClubCard from '../components/ClubCard';
import ClubModal from '../components/ClubModal';
import { clubs } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function ClubsPage() {
  const { joinedClubs, joinClub } = useAppContext();
  const [selectedClub, setSelectedClub] = useState(null);
  const [activeTab, setActiveTab] = useState('Academic');
  const [search, setSearch] = useState('');

  const filteredClubs = clubs.filter(c => {
    const matchesCategory = c.category === activeTab;
    const matchesSearch = search.trim() === '' || c.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-14 md:pt-24 px-5 min-h-screen max-w-6xl mx-auto"
    >
      <header className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Clubs & Societies</h1>
        <p className="text-gray-500 text-sm font-medium">Find your community on campus.</p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search clubs by name..."
          className="w-full bg-white shadow-soft border border-gray-100 rounded-2xl py-3.5 pl-11 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all"
        />
        {search && (
          <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="bg-gray-100/80 p-1 rounded-xl flex mb-6">
        {['Academic', 'Non-Academic'].map(tab => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setSearch(''); }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Results count */}
      {search && (
        <p className="text-sm text-gray-500 mb-4">
          {filteredClubs.length} result{filteredClubs.length !== 1 ? 's' : ''} for "<span className="font-semibold text-gray-700">{search}</span>"
        </p>
      )}

      {/* Club Grid */}
      {filteredClubs.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredClubs.map((club, i) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (i % 10) * 0.05 }}
            >
              <ClubCard club={club} onClick={setSelectedClub} isMember={joinedClubs.includes(club.id)} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="font-bold text-gray-700 mb-1">No clubs found</h3>
          <p className="text-sm text-gray-400">Try a different search term.</p>
        </div>
      )}

      <AnimatePresence>
        {selectedClub && (
          <ClubModal
            club={selectedClub}
            onClose={() => setSelectedClub(null)}
            isMember={joinedClubs.includes(selectedClub.id)}
            onJoinToggle={() => joinClub(selectedClub.id)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
