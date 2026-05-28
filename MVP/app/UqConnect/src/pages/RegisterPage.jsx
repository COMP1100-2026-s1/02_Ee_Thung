import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage({ onLogin }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (studentId.length !== 8) {
      setError('Student Number must be exactly 8 digits.');
      return;
    }
    if (password.length > 0 && name.length > 0) {
      setLoading(true);
      setError('');
      try {
        // Check if student ID already exists
        const checkRes = await fetch(`http://localhost:3001/users?studentId=s${studentId}`);
        const existingUsers = await checkRes.json();
        if (existingUsers.length > 0) {
          setError('An account with this Student Number already exists.');
          setLoading(false);
          return;
        }

        const newUser = {
          studentId: `s${studentId}`,
          password,
          name,
          major: major || 'Undeclared'
        };

        const res = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        });
        
        const createdUser = await res.json();
        onLogin(createdUser);
        navigate('/feed');
      } catch (err) {
        setError('Failed to connect to the server. Is json-server running?');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-5 pt-20 pb-10 md:py-10">
      <Link to="/" className="absolute top-8 left-8 font-black text-xl text-uqPurple tracking-tight">
        UQ-Connect
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100 w-full max-w-md"
      >
        <h1 className="text-3xl font-black text-gray-900 mb-2">Create Account</h1>
        <p className="text-gray-500 text-sm font-medium mb-8">Join the UQ-Connect community.</p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm font-medium rounded-xl border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Preferred Name</label>
            <input 
              type="text" 
              placeholder="e.g. Alex" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:bg-white transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Student Number</label>
            <input 
              type="text" 
              placeholder="e.g. 41234567" 
              maxLength={8}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value.replace(/\D/g, ''))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:bg-white transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Program / Major (optional)</label>
            <input 
              type="text" 
              placeholder="e.g. Bachelor of Computer Science" 
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="Create a secure password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:bg-white transition-all"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full bg-uqPurple text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-uqPurple/20 transition ${loading ? 'opacity-70 cursor-wait' : 'hover:bg-uqPurple/90 active:scale-[0.98]'}`}
          >
            {loading ? 'Creating...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Already have an account? <Link to="/login" className="text-uqPurple font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
