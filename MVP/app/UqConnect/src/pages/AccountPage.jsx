import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, LogOut, Heart, Award } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { clubs } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function AccountPage({ onLogout }) {
  const navigate = useNavigate();
  const { joinedClubs, joinClub } = useAppContext();
  const [activeTier, setActiveTier] = useState('Newbie');

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const myClubs = clubs.filter(c => joinedClubs.includes(c.id));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-20 px-5 md:pt-28 max-w-4xl mx-auto min-h-screen"
    >
      <header className="mb-8">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Your Account</h1>
        <p className="text-gray-500 text-sm font-medium">Manage your profile and preferences.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Profile Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-uqPurple/10 rounded-full flex items-center justify-center mb-4">
              <User size={40} className="text-uqPurple" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Alex Student</h2>
            <p className="text-gray-500 text-sm">s41234567</p>
            <p className="text-xs text-gray-400 mt-1">Bachelor of Computer Science</p>
            <div className="mt-4 w-full border-t border-gray-100 pt-4">
              <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 text-red-600 font-medium hover:bg-red-50 py-2 rounded-lg transition">
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings size={18} /> Settings
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors">Edit Profile</button>
              <button className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors">Notifications</button>
              <button className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors">Privacy</button>
            </div>
          </div>
        </div>

        {/* Right: Main Content */}
        <div className="md:col-span-2 space-y-6">

          {/* Club Memberships */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <Award size={18} /> My Club Memberships
              </h3>
              <Link to="/clubs" className="text-xs font-semibold text-uqPurple hover:underline">Browse Clubs</Link>
            </div>

            {myClubs.length === 0 ? (
              <div className="flex flex-col items-center py-8 text-center text-gray-400">
                <div className="text-4xl mb-2">🏛️</div>
                <p className="text-sm font-medium">No club memberships yet.</p>
                <Link to="/clubs" className="text-uqPurple text-sm font-bold mt-2 hover:underline">Browse clubs →</Link>
              </div>
            ) : (
              <div className="space-y-3">
                {myClubs.map(club => (
                  <motion.div
                    key={club.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm">{club.logo}</div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{club.name}</p>
                        <p className="text-xs text-gray-500">{club.category} · {club.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => joinClub(club.id)}
                      className="text-xs text-red-500 hover:text-red-600 font-medium hover:bg-red-50 px-2 py-1 rounded-lg transition"
                    >
                      Leave
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Skill Level */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Your Skill Level</h3>
            <p className="text-sm text-gray-500 mb-4">Set your default skill level to help match you with the right events.</p>
            <div className="grid grid-cols-3 gap-3">
              {['Newbie', 'Hobbyist', 'Competitive'].map(tier => (
                <button
                  key={tier}
                  onClick={() => setActiveTier(tier)}
                  className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                    activeTier === tier
                      ? 'border-uqPurple bg-uqPurple/5 text-uqPurple'
                      : 'border-gray-100 text-gray-500 hover:border-gray-200'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white rounded-3xl p-6 shadow-soft border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Heart size={18} /> Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Tech', 'Tennis', 'Board Games', 'Baking', 'Coffee'].map(interest => (
                <span key={interest} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {interest}
                </span>
              ))}
              <button className="bg-white border border-dashed border-gray-300 text-gray-500 hover:text-uqPurple hover:border-uqPurple px-3 py-1.5 rounded-lg text-sm font-medium transition">
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
