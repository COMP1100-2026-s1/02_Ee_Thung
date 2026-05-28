import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Bell, X, CreditCard, MessageCircle, MapPin, Clock, Users, DollarSign, ChevronRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

const tierGradients = {
  Hobbyist:    'from-blue-500 to-indigo-600',
  Newbie:      'from-emerald-500 to-teal-600',
  Competitive: 'from-rose-500 to-pink-600',
};

const vibeEmoji = {
  Sports: '⚽', Active: '🏃', Outdoors: '🌿', Indoor: '🏠',
  Academic: '📚', Tech: '💻', Creative: '🎨', Chill: '😌',
};

export default function FeedPage() {
  const navigate = useNavigate();
  const { activities, joinActivity, joinedActivityIds, loading, userName } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [modalView, setModalView] = useState('details'); // 'details' | 'booking'
  const [buyerName, setBuyerName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const filtered = activities.filter(a => {
    const matchCat = activeCategory === 'All' || a.vibes?.some(v =>
      v.toLowerCase().includes(activeCategory.toLowerCase().replace(' & ', ' '))
    );
    const matchSearch = a.title?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalView('details');
    setPaymentSuccess(false);
    setBuyerName(userName || '');
    setStudentNumber('');
    setPhoneNumber('');
  };

  const closeModal = () => setSelectedActivity(null);

  const isJoined = (activity) => joinedActivityIds?.includes(activity.id);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!buyerName || !phoneNumber || submitting) return;
    setSubmitting(true);
    await joinActivity(selectedActivity, buyerName);
    setPaymentSuccess(true);
    setSubmitting(false);
    setTimeout(() => {
      setPaymentSuccess(false);
      setModalView('details');
    }, 2000);
  };

  const gradient = selectedActivity
    ? (tierGradients[selectedActivity.tier] || 'from-violet-500 to-purple-700')
    : 'from-violet-500 to-purple-700';

  const modal = (
    <AnimatePresence>
      {selectedActivity && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !paymentSuccess && !submitting && closeModal()}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', zIndex: 9998 }}
          />

          {/* Static centering wrapper — framer-motion must NOT touch this transform */}
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '32rem',
              maxHeight: '90vh',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Only animate scale/opacity — no translate, so centering is never overridden */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              style={{ width: '100%', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
            {/* === SUCCESS STATE === */}
            {paymentSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center flex flex-col items-center justify-center flex-1"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="text-green-500" size={40} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">You're In! 🎉</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Successfully joined <span className="font-bold text-gray-800">{selectedActivity.title}</span>.<br />See you there!
                </p>
              </motion.div>
            ) : modalView === 'details' ? (
              /* === DETAILS VIEW === */
              <div className="flex flex-col overflow-y-auto flex-1">
                {/* Gradient Header */}
                <div className={`bg-gradient-to-br ${gradient} px-6 pt-4 pb-8 text-white relative shrink-0`}>
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-4 bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-colors backdrop-blur-sm"
                  >
                    <X size={18} />
                  </button>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {selectedActivity.tier}
                    </span>
                    {selectedActivity.price && (
                      <span className="bg-yellow-400/90 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <DollarSign size={10} /> ${selectedActivity.price}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-black leading-tight mb-3">{selectedActivity.title}</h2>
                  <div className="flex flex-col gap-1.5 text-white/90 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="shrink-0" />
                      <span>{selectedActivity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="shrink-0" />
                      <span>{selectedActivity.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} className="shrink-0" />
                      <span>{selectedActivity.attendees}/{selectedActivity.maxAttendees} going · by {selectedActivity.organizer}</span>
                    </div>
                  </div>
                  {/* Vibe tags */}
                  <div className="flex gap-2 flex-wrap mt-3">
                    {selectedActivity.vibes?.map((v, i) => (
                      <span key={i} className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        {vibeEmoji[v] || '•'} {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex flex-col gap-5">
                  {/* Description */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">About</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedActivity.description || 'Join us for this exciting event!'}
                    </p>
                  </div>

                  {/* Attendees */}
                  {selectedActivity.attendeesList?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Who's going ({selectedActivity.attendees}/{selectedActivity.maxAttendees})
                      </h4>
                      <div className="flex items-center gap-2 flex-wrap">
                        {selectedActivity.attendeesList.slice(0, 8).map((name, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1">
                            <div
                              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-sm"
                              style={{ background: `hsl(${(idx * 47 + 200) % 360}, 65%, 55%)` }}
                            >
                              {name.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-[10px] text-gray-500 font-medium max-w-[44px] truncate text-center">{name}</span>
                          </div>
                        ))}
                        {selectedActivity.attendeesList.length > 8 && (
                          <div className="w-11 h-11 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">
                            +{selectedActivity.attendeesList.length - 8}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sticky Footer CTA */}
                <div className="px-6 pb-8 pt-3 border-t border-gray-100 shrink-0 bg-white">
                  {isJoined(selectedActivity) ? (
                    <button
                      onClick={() => navigate(`/chat/${selectedActivity.id}`)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl py-4 font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 text-base"
                    >
                      <MessageCircle size={20} /> Enter Chat Room
                    </button>
                  ) : selectedActivity.attendees >= selectedActivity.maxAttendees ? (
                    <button disabled className="w-full bg-gray-100 text-gray-400 rounded-2xl py-4 font-bold cursor-not-allowed text-base">
                      Event is Full
                    </button>
                  ) : (
                    <button
                      onClick={() => setModalView('booking')}
                      className={`w-full bg-gradient-to-r ${gradient} text-white rounded-2xl py-4 font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 text-base`}
                    >
                      Join Activity <ChevronRight size={20} />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* === BOOKING FORM VIEW === */
              <div className="flex flex-col overflow-y-auto flex-1">
                <div className="px-6 pt-4 pb-5 border-b border-gray-100 shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setModalView('details')}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <X size={18} className="text-gray-500" />
                  </button>
                  <div>
                    <h2 className="text-lg font-black text-gray-900">Join Activity</h2>
                    <p className="text-xs text-gray-500 truncate max-w-[220px]">{selectedActivity.title}</p>
                  </div>
                </div>

                <div className="px-6 py-5 overflow-y-auto">
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        type="text" required value={buyerName}
                        onChange={e => setBuyerName(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 focus:bg-white outline-none transition-all"
                        placeholder="e.g. Reino"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Student Number <span className="normal-case font-normal">(optional)</span></label>
                      <input
                        type="text" value={studentNumber}
                        onChange={e => setStudentNumber(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 focus:bg-white outline-none transition-all"
                        placeholder="s4123456"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                      <input
                        type="tel" required value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 focus:bg-white outline-none transition-all"
                        placeholder="0412 345 678"
                      />
                    </div>

                    {selectedActivity.price && (
                      <div className="rounded-2xl bg-violet-50 border border-violet-100 p-4">
                        <h4 className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3">
                          Payment · ${selectedActivity.price}
                        </h4>
                        <div className="relative mb-3">
                          <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                          <input type="text" required
                            className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 outline-none transition-all"
                            placeholder="Card number"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input type="text" required
                            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 outline-none transition-all"
                            placeholder="MM / YY"
                          />
                          <input type="text" required
                            className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-violet-300 focus:border-violet-400 outline-none transition-all"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    )}

                    <div className="pt-2 pb-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`w-full bg-gradient-to-r ${gradient} text-white rounded-2xl py-4 font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg text-base ${submitting ? 'opacity-70 cursor-wait' : ''}`}
                      >
                        {submitting ? 'Processing...' : selectedActivity.price ? `Pay $${selectedActivity.price} & Join` : 'Confirm & Join'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
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
              type="text" value={search}
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
            <button key={i} onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                activeCategory === cat ? 'bg-gray-900 text-white shadow-sm' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-8 h-8 rounded-full border-4 border-uqPurple/20 border-t-uqPurple animate-spin" />
            <p className="text-sm text-gray-400 font-medium">Loading activities...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-bold text-gray-700 mb-1">No activities found</h3>
            <p className="text-sm text-gray-400">Try a different search or filter.</p>
          </div>
        ) : (
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(activity => (
              <motion.div key={activity.id} variants={itemVariants}>
                <ActivityCard
                  activity={activity}
                  isJoined={isJoined(activity)}
                  onClick={() => openModal(activity)}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {ReactDOM.createPortal(modal, document.body)}
    </>
  );
}
