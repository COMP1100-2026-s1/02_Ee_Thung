import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import MentorCard from '../components/MentorCard';
import { mentors } from '../data/mockData';

export default function PathfinderPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-14 md:pt-24 px-5 min-h-screen max-w-4xl mx-auto"
    >
      <header className="mb-6">
        <div className="w-12 h-12 bg-uqPurple/10 rounded-2xl flex items-center justify-center mb-4">
          <Compass className="text-uqPurple" size={24} />
        </div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight mb-2">Pathfinder Hub</h1>
        <p className="text-gray-500 text-sm font-medium leading-relaxed">
          Not sure where to start? Book a free 15-minute chat with an experienced student mentor to find your path at UQ.
        </p>
      </header>

      <div className="bg-gradient-to-br from-uqPurple to-purple-900 rounded-2xl p-5 mb-8 text-white shadow-lg shadow-uqPurple/20 relative overflow-hidden">
        <Sparkles className="absolute top-4 right-4 text-white/20" size={64} />
        <h3 className="font-bold text-lg mb-2 relative z-10">Why use Pathfinder?</h3>
        <ul className="text-sm text-white/90 space-y-2 relative z-10">
          <li className="flex items-center gap-2">• Get personalized club recommendations</li>
          <li className="flex items-center gap-2">• Ask about course workloads</li>
          <li className="flex items-center gap-2">• Career and networking advice</li>
        </ul>
      </div>

      <h2 className="font-bold text-lg text-gray-900 mb-4">Available Mentors</h2>
      <div className="flex flex-col gap-1">
        {mentors.map((mentor, i) => (
          <motion.div 
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <MentorCard mentor={mentor} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
