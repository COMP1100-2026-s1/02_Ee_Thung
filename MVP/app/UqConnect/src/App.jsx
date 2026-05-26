import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { AppProvider, useAppContext } from './context/AppContext';
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

// Inner component so it can access AppContext
function AppInner() {
  const { setUserName } = useAppContext();
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem('isAuthenticated')
  );
  const [displayName, setDisplayName] = useState(
    () => localStorage.getItem('userName') || ''
  );

  const handleLogin = (name = 'Student') => {
    localStorage.setItem('isAuthenticated', '1');
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
    setDisplayName(name);
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
    localStorage.removeItem('joinedActivityIds');
    setIsAuthenticated(false);
    setDisplayName('');
    setUserName('');
  };

  // Sync userName to context on mount
  useEffect(() => {
    const stored = localStorage.getItem('userName');
    if (stored) setUserName(stored);
  }, [setUserName]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] relative font-sans">
      {isAuthenticated && <TopNav userName={displayName} />}
      <main className="min-h-screen overflow-y-auto no-scrollbar">
        <AnimatedRoutes
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </main>
      {isAuthenticated && <BottomNav userName={displayName} />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </Router>
  );
}

export default App;
