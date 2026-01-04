import React, { useState, useEffect } from 'react';
import { User, Image } from 'lucide-react';
import { mockUsers, mockImages } from '../data/mockData';

export default function PublicProfilePage({ username, onNavigate }) {
  const [profileUser, setProfileUser] = useState(null);
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...mockUsers, ...users];
    const user = allUsers.find(u => u.username === username);
    
    if (user) {
      setProfileUser(user);
      const stored = JSON.parse(localStorage.getItem('images') || '[]');
      const allImages = [...mockImages, ...stored];
      const filtered = allImages.filter(img => img.userId === user.id);
      setUserImages(filtered);
    }
  }, [username]);

  if (!profileUser) {
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <h1 className="logo" onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>Digital Memories</h1>
          </div>
        </header>
        <div className="container">
          <div className="empty-state">
            <h2>User not found</h2>
            <button onClick={() => onNavigate('landing')} className="btn btn-primary">Back to Home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="logo" onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>Digital Memories</h1>
          <nav className="nav">
            <button onClick={() => onNavigate('landing')} className="btn btn-outline">Home</button>
          </nav>
        </div>
      </header>

      <div className="container">
        <div className="public-profile-header">
          <div className="profile-avatar">
            <User size={48} />
          </div>
          <div>
            <h2>{profileUser.name || profileUser.username}</h2>
            <p className="text-muted">@{profileUser.username}</p>
            <p className="profile-stats">{userImages.length} artworks</p>
          </div>
        </div>

        <section className="gallery-section">
          {userImages.length === 0 ? (
            <div className="empty-state">
              <Image size={48} />
              <p>No artwork uploaded yet</p>
            </div>
          ) : (
            <div className="masonry">
              {userImages.map((img) => (
                <div key={img.id} className="masonry-item">
                  <img src={img.url} alt={img.title} />
                  <div className="masonry-overlay">
                    <h3>{img.title}</h3>
                    <p>{img.uploadDate}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}