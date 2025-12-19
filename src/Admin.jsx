import React, { useState } from 'react';
import './Admin.css'; // We will create this CSS file next

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // Hardcoded Temporary Credentials
  const CORRECT_USER = "cicolindiapvtltd@gmail.com";
  const CORRECT_PASS = "Admin@cicol";

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(''); // Clear error on typing
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === CORRECT_USER && credentials.password === CORRECT_PASS) {
      setIsAuthenticated(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCredentials({ username: '', password: '' });
  };

  // --- SUB-COMPONENTS FOR DASHBOARD ---

  const QuickLinkCard = ({ title, icon, url, color }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="dashboard-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="card-icon" style={{ color: color }}>{icon}</div>
      <h3>{title}</h3>
      <p>Open external tool &rarr;</p>
    </a>
  );

  const ActionCard = ({ title, description, buttonText, onClick }) => (
    <div className="dashboard-card action-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn-primary" onClick={onClick}>{buttonText}</button>
    </div>
  );

  // --- RENDER ---

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="brand-logo">CICOL INDIA <span className="admin-badge">Admin</span></div>
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Please sign in to manage your website.</p>
          
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Username</label>
              <input 
                type="email" 
                name="username" 
                value={credentials.username} 
                onChange={handleInputChange} 
                placeholder="name@company.com"
                required 
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={credentials.password} 
                onChange={handleInputChange} 
                placeholder="••••••••"
                required 
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn-login">Login to Dashboard</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>CICOL</h2>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item active">Dashboard</button>
          <button className="nav-item">Products</button>
          <button className="nav-item">Blog Posts</button>
          <button className="nav-item">Gallery</button>
          <button className="nav-item">Settings</button>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-link">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <span>Admin</span>
            <div className="avatar">A</div>
          </div>
        </header>

        <div className="content-wrapper">
          
          {/* Section: External Tools */}
          <section className="section-block">
            <h2 className="section-title">Analytics & Tools</h2>
            <div className="card-grid">
              <QuickLinkCard 
                title="Google Analytics" 
                icon="📊" 
                url="https://analytics.google.com/" 
                color="#F4B400"
              />
              <QuickLinkCard 
                title="Search Console" 
                icon="🔍" 
                url="https://search.google.com/search-console" 
                color="#4285F4"
              />
              <QuickLinkCard 
                title="Business Profile" 
                icon="🏢" 
                url="https://business.google.com/" 
                color="#0F9D58"
              />
            </div>
          </section>

          {/* Section: Website Management */}
          <section className="section-block">
            <h2 className="section-title">Website Management</h2>
            <div className="card-grid">
              <ActionCard 
                title="Add Product" 
                description="Upload new items to your catalog."
                buttonText="+ Create Product"
                onClick={() => alert('Navigate to Product Form')}
              />
              <ActionCard 
                title="Blog Post" 
                description="Write and publish new articles."
                buttonText="Write New Post"
                onClick={() => alert('Navigate to Blog Editor')}
              />
              <ActionCard 
                title="Gallery Image" 
                description="Update the website image gallery."
                buttonText="Upload Image"
                onClick={() => alert('Open Image Uploader')}
              />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Admin;