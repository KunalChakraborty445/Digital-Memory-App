import React from 'react';
import { User, LogOut } from 'lucide-react';

export default function Header({ onNavigate, isAuthenticated, user, onLogout }) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo" onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>
          Digital Memories
        </h1>
        <nav className="nav">
          {!isAuthenticated ? (
            <>
              <button onClick={() => onNavigate('login')} className="btn btn-outline">Login</button>
              <button onClick={() => onNavigate('signup')} className="btn btn-primary">Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={() => onNavigate('public', user.username)} className="btn btn-outline">
                <User size={18} /> Public Profile
              </button>
              <button onClick={onLogout} className="btn btn-outline">
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}