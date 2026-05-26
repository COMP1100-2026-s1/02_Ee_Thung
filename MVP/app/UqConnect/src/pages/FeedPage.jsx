import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Bell, X, CreditCard, MessageCircle, MapPin, Clock } from 'lucide-react';
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

export default function FeedPage() {
  const navigate = useNavigate();
  const { activities, joinActivity, joinedActivities } = useAppContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const [bookingActivity, setBookingActivity] = useState(null);
  const [modalView, setModalView] = useState('details');
  const [buyerName, setBuyerName] = useState('');
  const [studentNumber, setStudentNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const filtered = activities.filter(a => {
    const matchCat = activeCategory === 'All' || a.vibes.some(v => v.toLowerCase().includes(activeCategory.toLowerCase().replace(' & ', ' ')));
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const openModal = (activity) => {
    setBookingActivity(activity);
    setModalView('details');
    setPaymentSuccess(false);
    setBuyerName('');
    setStudentNumber('');
    setPhoneNumber('');
  };

  const closeModal = () => setBookingActivity(null);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!buyerName || !phoneNumber) return;
    joinActivity(bookingActivity);
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setModalView('details');
    }, 1500);
  };

  const isJoined = (activity) => joinedActivities.some(a => a.id === activity.id);

  const modal = (
    <AnimatePresence>
      {bookingActivity && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !paymentSuccess && closeModal()}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(4px)',
              zIndex: 9998
            }}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: '28rem',
              maxHeight: '90vh',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
            }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100 shrink-0">
              <h2 className="text-xl font-bold text-gray-900">
                {paymentSuccess ? 'Booked!' : modalView === 'details' ? 'Event Details' : 'Join Activity'}
              </h2>
              {!paymentSuccess && (
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="overflow-y-auto flex-1">
              {paymentSuccess ? (
                <div className="p-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                  <p className="text-gray-500 text-sm">
                    Successfully joined <span className="font-semibold">{bookingActivity.title}</span>. See you there!
                  </p>
                </div>

              ) : modalView === 'details' ? (
                <div className="p-5 flex flex-col">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{bookingActivity.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-1.5 gap-2">
                    <Clock size={15} className="text-uqPurple shrink-0" />
                    <span>{bookingActivity.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-5 gap-2">
                    <MapPin size={15} className="text-uqPurple shrink-0" />
                    <span>{bookingActivity.location}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-5">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {bookingActivity.description || 'Join us for this exciting event!'}
                    </p>
                    {bookingActivity.price && (
                      <div className="mt-3 font-bold text-uqPurple text-sm bg-uqPurple/10 inline-block px-3 py-1.5 rounded-lg">
                        Price: ${bookingActivity.price}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">
                      Who's going ({bookingActivity.attendees}/{bookingActivity.maxAttendees})
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {(bookingActivity.attendeesList || []).map((attendee, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-uqPurple/60 to-uqPurple border-2 border-white shadow-sm flex items-center justify-center text-white text-sm font-bold">
                            {attendee.charAt(0)}
                          </div>
                          <span className="text-[10px] font-medium text-gray-500 max-w-[40px] truncate text-center">{attendee}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    {isJoined(bookingActivity) ? (
                      <button
                        onClick={() => navigate(`/chat/${bookingActivity.id}`)}
                        className="w-full bg-green-500 text-white rounded-xl py-3.5 font-bold hover:bg-green-600 transition-colors active:scale-95 shadow-sm flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={20} /> Enter Chat Room
                      </button>
                    ) : bookingActivity.attendees >= bookingActivity.maxAttendees ? (
                      <button disabled className="w-full bg-gray-200 text-gray-500 rounded-xl py-3.5 font-bold cursor-not-allowed">
                        Event is Full
                      </button>
                    ) : (
                      <button
                        onClick={() => setModalView('booking')}
                        className="w-full bg-uqPurple text-white rounded-xl py-3.5 font-bold hover:bg-uqPurple/90 transition-colors active:scale-95 shadow-sm"
                      >
                        Join Activity
                      </button>
                    )}
                  </div>
                </div>

              ) : (
                <div className="p-5">
                  <button onClick={() => setModalView('details')} className="text-sm text-uqPurple font-bold mb-4 flex items-center gap-1 hover:underline">
                    ← Back to details
                  </button>
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text" required value={buyerName}
                        onChange={e => setBuyerName(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Student Number (Optional)</label>
                      <input
                        type="text" value={studentNumber}
                        onChange={e => setStudentNumber(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                        placeholder="s4123456"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel" required value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                        placeholder="0412 345 678"
                      />
                    </div>

                    {bookingActivity.price && (
                      <div className="pt-4 border-t border-gray-100">
                        <label className="block text-sm font-bold text-gray-700 mb-2">Payment Details</label>
                        <div className="relative mb-3">
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="text" required
                            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                            placeholder="Card Number"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text" required
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                            placeholder="MM/YY"
                          />
                          <input
                            type="text" required
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-uqPurple/20 focus:border-uqPurple outline-none transition-all"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-uqPurple text-white rounded-xl py-3 font-bold hover:bg-uqPurple/90 transition-colors active:scale-95 shadow-sm"
                      >
                        {bookingActivity.price ? `Pay $${bookingActivity.price} & Join` : 'Confirm & Join'}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
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
