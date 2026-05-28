import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import bgImage from '../assets/image.png';

export default function WelcomePage() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('isAuthenticated');

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />

      {/* Content — sits above overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center max-w-5xl mx-auto px-6 w-full py-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full text-sm mb-6"
        >
          ✨ The New Way to Campus Life
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 text-center"
        >
          Find your people <br className="hidden md:block" />
          at <span className="text-violet-300">UQ.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-lg md:text-xl text-white font-medium max-w-2xl mx-auto text-center mb-14 leading-relaxed"
        >
          Move from organisation-first to activity-first. Discover what's happening right now, find your skill level, and never attend a social alone again.
        </motion.p>

        {/* Feature cards — glassmorphism */}
        <div className="grid md:grid-cols-3 gap-4 w-full max-w-4xl mb-14">
          {[
            { icon: Sparkles,    title: 'Live Feed',      desc: 'See exactly what\'s happening on campus right now and join instantly.', delay: 0.2 },
            { icon: ShieldCheck, title: 'Skill Matching', desc: 'No social anxiety. Join events tagged by skill level — Newbie, Hobbyist, Competitive.', delay: 0.25 },
            { icon: Compass,     title: 'Pathfinder',     desc: 'Book 1-on-1 chats with mentors to find clubs and societies that fit you.', delay: 0.3 },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 hover:bg-white/15 transition-all"
            >
              <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="text-white" size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
        >
          {isLoggedIn ? (
            <button
              onClick={() => navigate('/feed')}
              className="flex-1 bg-violet-500 hover:bg-violet-400 text-white py-4 px-8 rounded-2xl font-bold text-center shadow-lg shadow-violet-900/40 transition-all text-lg flex items-center justify-center gap-2 active:scale-95"
            >
              Go to Feed <ArrowRight size={20} />
            </button>
          ) : (
            <>
              <Link
                to="/register"
                className="flex-1 bg-violet-500 hover:bg-violet-400 text-white py-4 px-8 rounded-2xl font-bold text-center shadow-lg shadow-violet-900/40 transition-all text-lg active:scale-95"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="flex-1 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white py-4 px-8 rounded-2xl font-bold text-center transition-all text-lg active:scale-95"
              >
                Log In
              </Link>
            </>
          )}
        </motion.div>

      </div>
    </div>
  );
}
