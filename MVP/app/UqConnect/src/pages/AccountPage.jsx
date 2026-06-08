import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, LogOut, Heart, Award, X, Edit3, Shield } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { clubs } from '../data/mockData';
import { useAppContext } from '../context/AppContext';

export default function AccountPage({ onLogout }) {
  const navigate = useNavigate();
  const { joinedClubs, joinClub, user, updateUser } = useAppContext();
  
  // Modals state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  // Edit Profile Form state
  const [editName, setEditName] = useState('');
  const [editBio, setEditBio] = useState('');
  
  // Privacy Form state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [privacyError, setPrivacyError] = useState('');
  const [privacySuccess, setPrivacySuccess] = useState('');

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const myClubs = clubs.filter(c => joinedClubs.includes(c.id));
  const activeTier = user?.skillLevel || 'Newbie';

  const handleSkillChange = async (tier) => {
    if (tier !== activeTier) {
      await updateUser({ skillLevel: tier });
    }
  };

  const openEditModal = () => {
    setEditName(user?.name || '');
    setEditBio(user?.bio || '');
    setIsEditModalOpen(true);
  };

  const saveEditProfile = async (e) => {
    e.preventDefault();
    await updateUser({ name: editName, bio: editBio });
    setIsEditModalOpen(false);
  };

  const savePrivacy = async (e) => {
    e.preventDefault();
    setPrivacyError('');
    setPrivacySuccess('');
    
    // Check if current password matches
    if (currentPassword !== user?.password) {
      setPrivacyError('Current password is incorrect.');
      return;
    }
    
    if (newPassword.length < 6) {
      setPrivacyError('New password must be at least 6 characters.');
      return;
    }

    const success = await updateUser({ password: newPassword });
    if (success) {
      setPrivacySuccess('Password changed successfully.');
      setCurrentPassword('');
      setNewPassword('');
      setTimeout(() => setIsPrivacyModalOpen(false), 2000);
    } else {
      setPrivacyError('Failed to change password.');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className="pb-24 pt-24 px-5 md:pt-28 max-w-4xl mx-auto min-h-screen"
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
              <h2 className="text-xl font-bold text-gray-900">{user?.name || 'Unknown User'}</h2>
              <p className="text-gray-500 text-sm">{user?.studentId || 's0000000'}</p>
              <p className="text-xs text-gray-400 mt-1">{user?.major || 'Undeclared'}</p>
              
              {user?.skillLevel && (
                <span className="mt-3 px-3 py-1 bg-uqPurple/10 text-uqPurple font-bold text-xs rounded-full">
                  {user.skillLevel}
                </span>
              )}
              
              {user?.bio && (
                <p className="text-sm text-gray-600 mt-4 italic">"{user.bio}"</p>
              )}

              <div className="mt-6 w-full border-t border-gray-100 pt-4">
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
                <button onClick={openEditModal} className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors flex justify-between items-center">
                  Edit Profile <Edit3 size={14} />
                </button>
                <button className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors flex justify-between items-center">
                  Notifications
                </button>
                <button onClick={() => setIsPrivacyModalOpen(true)} className="w-full text-left text-sm font-medium text-gray-600 hover:text-uqPurple transition-colors flex justify-between items-center">
                  Privacy <Shield size={14} />
                </button>
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
                    onClick={() => handleSkillChange(tier)}
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

      {/* Edit Profile Modal */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditModalOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-md relative z-10 shadow-2xl overflow-hidden">
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Edit Profile</h2>
                <button onClick={() => setIsEditModalOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition"><X size={20}/></button>
              </div>
              <form onSubmit={saveEditProfile} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Name</label>
                  <input type="text" value={editName} onChange={e => setEditName(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-uqPurple/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Bio</label>
                  <textarea value={editBio} onChange={e => setEditBio(e.target.value)} rows="3" placeholder="Tell us about yourself..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-uqPurple/20 outline-none resize-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-uqPurple text-white rounded-xl font-bold shadow-lg shadow-uqPurple/20 hover:bg-uqPurple/90 transition">Save Changes</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsPrivacyModalOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white rounded-3xl w-full max-w-md relative z-10 shadow-2xl overflow-hidden">
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Privacy & Security</h2>
                <button onClick={() => setIsPrivacyModalOpen(false)} className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition"><X size={20}/></button>
              </div>
              <form onSubmit={savePrivacy} className="p-6 space-y-4">
                {privacyError && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 font-medium">{privacyError}</div>}
                {privacySuccess && <div className="p-3 bg-green-50 text-green-600 text-sm rounded-xl border border-green-100 font-medium">{privacySuccess}</div>}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Current Password</label>
                  <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-uqPurple/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">New Password</label>
                  <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-uqPurple/20 outline-none" />
                </div>
                <button type="submit" className="w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold shadow-lg transition hover:bg-gray-800">Change Password</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
