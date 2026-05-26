import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { AppProvider } from './context/AppContext';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeedPage from './pages/FeedPage';
import ClubsPage from './pages/ClubsPage';
import HostPage from './pages/HostPage';
import PathfinderPage from './pages/PathfinderPage';
import AccountPage from './pages/AccountPage';
import HistoryPage from './pages/HistoryPage';
import ChatsPage from './pages/ChatsPage';
import ChatRoomPage from './pages/ChatRoomPage';

function AnimatedRoutes({ isAuthenticated, handleLogin, handleLogout }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/host" element={<HostPage />} />
            <Route path="/pathfinder" element={<PathfinderPage />} />
            <Route path="/account" element={<AccountPage onLogout={handleLogout} />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/chats" element={<ChatsPage />} />
            <Route path="/chat/:id" element={<ChatRoomPage />} />
            <Route path="*" element={<Navigate to="/feed" replace />} />
          </>
        )}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name = 'Student') => {
    setIsAuthenticated(true);
    setUserName(name);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen bg-[#F9FAFB] relative font-sans">
          {isAuthenticated && <TopNav userName={userName} />}

          <main className="min-h-screen overflow-y-auto no-scrollbar">
            <AnimatedRoutes
              isAuthenticated={isAuthenticated}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
            />
          </main>

          {isAuthenticated && <BottomNav userName={userName} />}
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
