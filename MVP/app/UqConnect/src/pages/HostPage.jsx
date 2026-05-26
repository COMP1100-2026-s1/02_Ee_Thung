import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Users, DollarSign, CheckCircle, Building2, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { clubs } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function HostPage() {
  const { addActivity, joinedClubs } = useAppContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [location, setLocation] = useState('');
  const [selectedTier, setSelectedTier] = useState('Newbie');
  const [hostType, setHostType] = useState('private'); // 'private' | 'club'
  const [selectedClubId, setSelectedClubId] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const tiers = [
    { id: 'Newbie', label: 'Newbie', desc: 'Learning the ropes. Chill vibes only.', color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'Hobbyist', label: 'Hobbyist', desc: 'Knows the basics. Here for fun.', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { id: 'Competitive', label: 'Competitive', desc: 'High skill level. Playing to win.', color: 'bg-red-100 text-red-700 border-red-200' },
  ];

  const memberClubs = clubs.filter(c => joinedClubs.includes(c.id));
  const selectedClub = clubs.find(c => c.id === Number(selectedClubId));
  const isMemberOfSelected = joinedClubs.includes(Number(selectedClubId));

  // Pricing logic
  const GUEST_FEE = 5; // $5 fee if not a member of the club
  const priceDue = hostType === 'club' && selectedClub && !isMemberOfSelected ? GUEST_FEE : 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !startTime || !endTime || !location) return;

    const dateStr = new Date(date).toLocaleDateString('en-AU', { weekday: 'short', month: 'short', day: 'numeric' });
    const fmtTime = t => new Date(`2000-01-01T${t}`).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit', hour12: true });
    const timeStr = `${fmtTime(startTime)} – ${fmtTime(endTime)}`;

    const newActivity = {
      title,
      location,
      time: `${dateStr} at ${timeStr}`,
      tier: selectedTier,
      vibes: hostType === 'club' && selectedClub ? [selectedClub.category, selectedClub.tags[0]] : ['Social', 'Fun'],
      maxAttendees: parseInt(maxPeople) || 8,
    };

    addActivity(newActivity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/feed');
    }, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24 pt-14 md:pt-24 px-5 max-w-2xl mx-auto min-h-screen"
    >
      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-2 font-semibold"
        >
          <CheckCircle size={18} /> Activity published to Live Feed!
        </motion.div>
      )}

      <header className="mb-6">
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Host an Activity</h1>
        <p className="text-gray-500 text-sm font-medium">Create an open social and find people to join.</p>
      </header>

      <div className="bg-uqPurple/5 border border-uqPurple/10 rounded-2xl p-4 mb-6 flex gap-3">
        <ShieldCheck className="text-uqPurple shrink-0" size={24} />
        <div>
          <h4 className="font-bold text-uqPurple text-sm mb-1">Social Safety First</h4>
          <p className="text-xs text-uqPurple/80 leading-relaxed">
            By setting an accurate skill tier, you help beginners feel comfortable joining and ensure everyone has a good time.
          </p>
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* Activity Name */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-2">Activity Name *</label>
          <input
            type="text"
            placeholder="e.g., Casual Tennis Hit"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all"
          />
        </div>

        {/* Date + Time Range */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Date *</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Start Time *</label>
            <input
              type="time"
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              required
              className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">End Time *</label>
            <input
              type="time"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              min={startTime || undefined}
              required
              className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all text-gray-700"
            />
          </div>
        </div>

        {/* Location + Max People */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Location *</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="e.g., UQ Tennis Centre"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
                className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Max People</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="number"
                placeholder="8"
                min={2}
                max={50}
                value={maxPeople}
                onChange={e => setMaxPeople(e.target.value)}
                className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Host Type: Private vs Club */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Who's hosting?</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => { setHostType('private'); setSelectedClubId(''); }}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                hostType === 'private' ? 'border-uqPurple bg-uqPurple/5 text-uqPurple' : 'border-gray-100 text-gray-500 hover:border-gray-200'
              }`}
            >
              <Lock size={20} />
              <span className="font-bold text-sm">Private</span>
              <span className="text-xs opacity-70 text-center">Just you as organiser</span>
            </button>
            <button
              type="button"
              onClick={() => setHostType('club')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                hostType === 'club' ? 'border-uqPurple bg-uqPurple/5 text-uqPurple' : 'border-gray-100 text-gray-500 hover:border-gray-200'
              }`}
            >
              <Building2 size={20} />
              <span className="font-bold text-sm">Under a Club</span>
              <span className="text-xs opacity-70 text-center">Hosted by a UQ club</span>
            </button>
          </div>
        </div>

        {/* Club Selector */}
        {hostType === 'club' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="block text-sm font-bold text-gray-900 mb-2">Select Club</label>
            <select
              value={selectedClubId}
              onChange={e => setSelectedClubId(e.target.value)}
              className="w-full bg-white shadow-sm border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 transition-all"
            >
              <option value="">-- Choose a club --</option>
              {clubs.map(c => (
                <option key={c.id} value={c.id}>
                  {c.logo} {c.name} {joinedClubs.includes(c.id) ? '✓ Member' : ''}
                </option>
              ))}
            </select>

            {/* Membership / Price info */}
            {selectedClub && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-3 p-4 rounded-xl flex items-start gap-3 ${
                  isMemberOfSelected ? 'bg-green-50 border border-green-100' : 'bg-amber-50 border border-amber-100'
                }`}
              >
                <DollarSign size={18} className={isMemberOfSelected ? 'text-green-600 shrink-0 mt-0.5' : 'text-amber-600 shrink-0 mt-0.5'} />
                <div>
                  {isMemberOfSelected ? (
                    <>
                      <p className="text-sm font-bold text-green-700">Free for members!</p>
                      <p className="text-xs text-green-600">You're already a member of {selectedClub.name}. No hosting fee.</p>
                    </>
                  ) : (
                    <>
                      <p className="text-sm font-bold text-amber-700">Guest hosting fee: ${GUEST_FEE}</p>
                      <p className="text-xs text-amber-600">
                        You're not a member of {selectedClub.name}. A ${GUEST_FEE} fee applies to host under this club.
                        To waive this, join the club first (membership: {selectedClub.price}).
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Skill Tier */}
        <div>
          <label className="block text-sm font-bold text-gray-900 mb-3">Skill Level Needed</label>
          <div className="flex flex-col gap-3">
            {tiers.map(tier => (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTier === tier.id ? tier.color : 'bg-white border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm">{tier.label}</span>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedTier === tier.id ? 'border-current' : 'border-gray-300'}`}>
                    {selectedTier === tier.id && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                </div>
                <p className={`text-xs ${selectedTier === tier.id ? 'opacity-90' : 'text-gray-500'}`}>{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price summary */}
        {priceDue > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Amount Due</span>
              <span className="text-lg font-black text-gray-900">${priceDue}.00</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Guest hosting fee — paid on confirmation.</p>
          </motion.div>
        )}

        <button
          type="submit"
          className="w-full bg-uqPurple text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-uqPurple/20 hover:bg-uqPurple/90 transition active:scale-[0.98]"
        >
          {priceDue > 0 ? `Pay $${priceDue} & Publish Activity` : 'Publish Activity'}
        </button>
      </form>
    </motion.div>
  );
}