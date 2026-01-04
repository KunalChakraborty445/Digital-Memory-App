# Digital Memories - Artist Portfolio Platform

A modern, responsive web application for artists to upload, showcase, and share their digital artwork with the world.

## 🎨 Features

- **Landing Page**: Browse a beautiful mosaic layout of random user-uploaded artwork
- **User Authentication**: Secure signup and login system
- **Private Dashboard**: Upload and manage your personal artwork collection
- **Public Profiles**: Share your portfolio via `/profile/[username]` URLs
- **Responsive Design**: Fully mobile-friendly with masonry grid layouts
- **Local Storage**: Data persists in browser storage

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd digital-memories
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure
````
digital-memories/
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── SignUpPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── UserProfile.jsx
│   │   └── PublicProfilePage.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
🎯 Usage
Demo Accounts
For testing purposes, use these credentials:

Username: alice_art | Password: password123
Username: bob_creative | Password: password123

Creating a New Account

Click "Sign Up" on the landing page
Fill in your details (name, email, username, password)
Click "Sign Up" to create your account

Uploading Artwork

Log in to your account
Click "Upload Image" button
Enter artwork title and image URL
Click "Upload" to add to your collection

Sharing Your Profile
Your public profile is accessible at /profile/[your-username]
Click "Public Profile" to view how others see your portfolio
🌐 Deployment
Deploy to Vercel

Push your code to GitHub
Visit vercel.com
Import your repository
Vercel will auto-detect Vite and deploy

Deploy to Netlify

Push your code to GitHub
Visit netlify.com
Import your repository
Build command: npm run build
Publish directory: dist

🛠️ Technologies Used

React 18: Modern UI library
Vite: Fast build tool and dev server
Lucide React: Beautiful icon library
CSS3: Custom styling with gradients and animations
Local Storage: Client-side data persistence

📱 Responsive Breakpoints

Desktop: > 768px (3 columns)
Tablet: 480px - 768px (2 columns)
Mobile: < 480px (1 column)

🔐 Security Notes
This is a demo application using localStorage for data persistence. For production use:

Implement proper backend authentication
Use secure password hashing
Add JWT tokens for session management
Implement proper image upload and storage

📝 License
MIT License - feel free to use this project for learning and development
🤝 Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to branch (git push origin feature/amazing-feature)
Open a Pull Request

📧 Support
For issues or questions, please open an issue on GitHub.
