import React, { useState, useEffect } from 'react';
import { mockImages } from '../data/mockData';

export default function LandingPage({ onNavigate }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('images') || '[]');
    const allImages = [...mockImages, ...stored];
    const shuffled = allImages.sort(() => Math.random() - 0.5).slice(0, 12);
    setImages(shuffled);
  }, []);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="logo">Digital Memories</h1>
          <nav className="nav">
            <button onClick={() => onNavigate('login')} className="btn btn-outline">Login</button>
            <button onClick={() => onNavigate('signup')} className="btn btn-primary">Sign Up</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2 className="hero-title">Showcase Your Digital Artwork</h2>
          <p className="hero-subtitle">Join our community of artists and share your creative vision with the world</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="masonry">
            {images.map((img) => (
              <div key={img.id} className="masonry-item">
                <img src={img.url} alt={img.title} />
                <div className="masonry-overlay">
                  <h3>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Digital Memories. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}