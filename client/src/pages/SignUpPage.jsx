import React, { useState } from 'react';

export default function SignUpPage({ onNavigate, onSignUp }) {
  const [formData, setFormData] = useState({ username: '', password: '', name: '', email: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.username || !formData.password || !formData.name || !formData.email) {
      setError('All fields are required');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.username === formData.username)) {
      setError('Username already exists');
      return;
    }

    const newUser = {
      id: Date.now(),
      ...formData
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onSignUp(newUser);
  };

  return (
    <div className="page auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join our community of artists</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="Choose a username"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Create a password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-full">Sign Up</button>
          </form>

          <p className="auth-link">
            Already have an account? <button onClick={() => onNavigate('login')} className="link-btn">Login</button>
          </p>
        </div>
      </div>
    </div>
  );
}