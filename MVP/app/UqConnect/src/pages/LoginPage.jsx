import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentId.length === 8 && password.length > 0) {
      onLogin(`s${studentId}`);
      navigate('/feed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-5">
      <Link to="/" className="absolute top-8 left-8 font-black text-xl text-uqPurple tracking-tight">
        UQ-Connect
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-10 rounded-3xl shadow-soft border border-gray-100 w-full max-w-md"
      >
        <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500 text-sm font-medium mb-8">Sign in with your UQ credentials.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
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
            <label className="block text-sm font-bold text-gray-900 mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-uqPurple/20 focus:bg-white transition-all"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-uqPurple text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-uqPurple/20 hover:bg-uqPurple/90 transition active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm font-medium">
            Don't have an account? <Link to="/register" className="text-uqPurple font-bold hover:underline">Register</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
