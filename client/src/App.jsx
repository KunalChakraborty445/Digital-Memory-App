import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import UserProfile from './pages/UserProfile';
import PublicProfilePage from './pages/PublicProfilePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentUser, setCurrentUser] = useState(null);
  const [publicUsername, setPublicUsername] = useState('');

  const navigate = (page, username = '') => {
    setCurrentPage(page);
    if (page === 'public') {
      setPublicUsername(username);
    }
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    setCurrentPage('profile');
  };

  const handleSignUp = (user) => {
    setCurrentUser(user);
    setCurrentPage('profile');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  return (
    <div className="app">
      {currentPage === 'landing' && <LandingPage onNavigate={navigate} />}
      {currentPage === 'signup' && <SignUpPage onNavigate={navigate} onSignUp={handleSignUp} />}
      {currentPage === 'login' && <LoginPage onNavigate={navigate} onLogin={handleLogin} />}
      {currentPage === 'profile' && currentUser && <UserProfile user={currentUser} onNavigate={navigate} onLogout={handleLogout} />}
      {currentPage === 'public' && <PublicProfilePage username={publicUsername} onNavigate={navigate} />}
    </div>
  );
}