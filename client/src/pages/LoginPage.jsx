import React, { useState } from 'react';
import { mockUsers } from '../data/mockData';

export default function LoginPage({ onNavigate, onLogin }) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...mockUsers, ...users];
    const user = allUsers.find(u => u.username === formData.username && u.password === formData.password);

    if (!user) {
      setError('Invalid username or password');
      return;
    }

    onLogin(user);
  };

  return (
    <div className="page auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Login to your account</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">Login</button>
          </form>

          <p className="auth-link">
            Don't have an account? <button onClick={() => onNavigate('signup')} className="link-btn">Sign Up</button>
          </p>

          <div className="demo-credentials">
            <p><strong>Demo Credentials:</strong></p>
            <p>Username: alice_art | Password: password123</p>
          </div>
        </div>
      </div>
    </div>
  );
}