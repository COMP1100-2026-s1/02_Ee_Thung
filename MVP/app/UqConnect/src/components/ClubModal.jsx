import React from 'react';
import { motion } from 'framer-motion';
import { X, Camera, MessageSquare, CheckCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function ClubModal({ club, onClose, isMember, onJoinToggle }) {
  if (!club) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4 bg-black/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-900">Club Details</h2>
          <button onClick={onClose} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl shadow-inner shrink-0">
              {club.logo}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{club.name}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold text-uqPurple bg-uqPurple/10 px-2 py-1 rounded-md">
                  {club.category}
                </span>
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-md">
                  {club.price} / year
                </span>
                {isMember && (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle size={11} /> Member
                  </span>
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">{club.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {club.tags.map((tag, i) => (
              <span key={i} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">{tag}</span>
            ))}
          </div>

          {/* Memories */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Memories</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {club.memories.map((memory, i) => (
                <div key={i} className="min-w-[120px] h-[120px] bg-gray-100 rounded-2xl flex items-end p-3 relative overflow-hidden group shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="relative text-white text-xs font-medium z-10 leading-tight">{memory}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 mb-3">Connect</h3>
            <div className="flex gap-2">
              {club.social?.ig && (
                <button className="flex-1 flex items-center justify-center gap-2 bg-pink-50 text-pink-600 py-3 rounded-xl font-semibold text-sm hover:bg-pink-100 transition">
                  <Camera size={18} /> Instagram
                </button>
              )}
              {club.social?.discord && (
                <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-100 transition">
                  <MessageSquare size={18} /> Discord
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => { onJoinToggle(); onClose(); }}
            className={`w-full py-4 rounded-xl font-bold shadow-md transition active:scale-[0.98] ${
              isMember
                ? 'bg-red-50 text-red-600 hover:bg-red-100 shadow-none'
                : 'bg-uqPurple text-white shadow-uqPurple/20 hover:bg-uqPurple/90'
            }`}
          >
            {isMember ? 'Leave Club' : `Join Club — ${club.price}`}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
