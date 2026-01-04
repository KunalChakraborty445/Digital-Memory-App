import React, { useState, useEffect } from 'react';
import { User, Upload, LogOut, Image } from 'lucide-react';
import { mockImages } from '../data/mockData';

export default function UserProfile({ user, onNavigate, onLogout }) {
  const [userImages, setUserImages] = useState([]);
  const [uploadForm, setUploadForm] = useState({ title: '', url: '' });
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    loadUserImages();
  }, [user]);

  const loadUserImages = () => {
    const stored = JSON.parse(localStorage.getItem('images') || '[]');
    const allImages = [...mockImages, ...stored];
    const filtered = allImages.filter(img => img.userId === user.id);
    setUserImages(filtered);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    
    if (!uploadForm.title || !uploadForm.url) {
      alert('Please fill in all fields');
      return;
    }

    const newImage = {
      id: Date.now(),
      userId: user.id,
      title: uploadForm.title,
      url: uploadForm.url,
      uploadDate: new Date().toISOString().split('T')[0]
    };

    const stored = JSON.parse(localStorage.getItem('images') || '[]');
    stored.push(newImage);
    localStorage.setItem('images', JSON.stringify(stored));

    setUploadForm({ title: '', url: '' });
    setShowUpload(false);
    loadUserImages();
  };

  const handleDelete = (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const stored = JSON.parse(localStorage.getItem('images') || '[]');
      const filtered = stored.filter(img => img.id !== imageId);
      localStorage.setItem('images', JSON.stringify(filtered));
      loadUserImages();
    }
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <h1 className="logo" onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>Digital Memories</h1>
          <nav className="nav">
            <button onClick={() => onNavigate('public', user.username)} className="btn btn-outline">
              <User size={18} /> Public Profile
            </button>
            <button onClick={onLogout} className="btn btn-outline">
              <LogOut size={18} /> Logout
            </button>
          </nav>
        </div>
      </header>

      <div className="container profile-container">
        <div className="profile-header">
          <div>
            <h2>Welcome, {user.name || user.username}!</h2>
            <p className="text-muted">@{user.username}</p>
          </div>
          <button onClick={() => setShowUpload(!showUpload)} className="btn btn-primary">
            <Upload size={18} /> Upload Image
          </button>
        </div>

        {showUpload && (
          <div className="upload-card">
            <h3>Upload New Artwork</h3>
            <form onSubmit={handleUpload}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                  placeholder="Give your artwork a title"
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="url"
                  value={uploadForm.url}
                  onChange={(e) => setUploadForm({ ...uploadForm, url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
                <small className="text-muted">Paste a URL to your image (try: https://picsum.photos/400/300)</small>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Upload</button>
                <button type="button" onClick={() => setShowUpload(false)} className="btn btn-outline">Cancel</button>
              </div>
            </form>
          </div>
        )}

        <div className="images-section">
          <h3>Your Artwork ({userImages.length})</h3>
          
          {userImages.length === 0 ? (
            <div className="empty-state">
              <Image size={48} />
              <p>You haven't uploaded any artwork yet</p>
              <button onClick={() => setShowUpload(true)} className="btn btn-primary">Upload Your First Image</button>
            </div>
          ) : (
            <div className="image-grid">
              {userImages.map((img) => (
                <div key={img.id} className="image-card">
                  <img src={img.url} alt={img.title} />
                  <div className="image-info">
                    <h4>{img.title}</h4>
                    <p className="text-muted">{img.uploadDate}</p>
                    <button onClick={() => handleDelete(img.id)} className="btn-delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}