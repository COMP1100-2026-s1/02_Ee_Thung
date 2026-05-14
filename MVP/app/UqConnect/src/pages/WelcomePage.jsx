import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Users, Compass, ShieldCheck } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pt-10 md:pt-0 pb-10">
      <div className="flex-1 flex flex-col justify-center items-center max-w-5xl mx-auto px-6 w-full mt-10 md:mt-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-16 mt-8 md:mt-0"
        >
          <div className="inline-block px-4 py-2 bg-uqPurple/10 text-uqPurple font-bold rounded-full text-sm mb-6">
            The New Way to Campus Life
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Find your people at <span className="text-uqPurple">UQ.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
            Move from organization-first to activity-first. Discover what's happening right now, find your skill level, and never attend a social alone again.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Sparkles className="text-uqPurple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Feed</h3>
            <p className="text-gray-500 text-sm">See exactly what's happening on campus right now and join instantly.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <ShieldCheck className="text-uqPurple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Skill Matching</h3>
            <p className="text-gray-500 text-sm">No social anxiety. Join events tagged by skill level (Newbie, Hobbyist, Competitive).</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <Compass className="text-uqPurple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pathfinder</h3>
            <p className="text-gray-500 text-sm">Book 1-on-1 chats with mentors to find clubs and societies that fit you.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
        >
          <Link to="/register" className="flex-1 bg-uqPurple text-white py-4 px-8 rounded-2xl font-bold text-center shadow-lg shadow-uqPurple/20 hover:bg-uqPurple/90 transition text-lg">
            Get Started
          </Link>
          <Link to="/login" className="flex-1 bg-white text-gray-900 border border-gray-200 py-4 px-8 rounded-2xl font-bold text-center hover:bg-gray-50 transition text-lg">
            Log In
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
