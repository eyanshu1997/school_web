
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';


import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ImagesFeed from './pages/Images';
import FloatingContactWidget from './FloatingContactWidget';



import React, { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Close drawer on navigation
  const handleNavClick = () => setDrawerOpen(false);

  return (
    <Router>
      <header className="shadow" style={{position:'fixed',top:0,left:0,right:0,zIndex:1050,background:'#2563eb',color:'#fff',padding:'0.5rem 0',marginBottom:0, height:'64px', display:'flex', alignItems:'center'}}>
        <div className="container d-flex align-items-center gap-3 py-2" style={{position:'relative'}}>
          {/* Hamburger for mobile, vertically centered with logo */}
          <div className="d-flex align-items-center" style={{height:'100%'}}>
            <button
              className="d-md-none btn btn-link p-0 me-2"
              style={{fontSize:'2rem',color:'#fff',background:'none',border:'none',outline:'none',boxShadow:'none',zIndex:1100,display:'flex',alignItems:'center'}}
              aria-label="Open navigation menu"
              onClick={() => setDrawerOpen(true)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          <img src="/logo.jpg" alt="SVS Logo" style={{height:48, width:48, objectFit:'contain', borderRadius:8, background:'#fff', padding:4}} />
          <div>
            <span className="fs-3 fw-bold d-block" style={{letterSpacing:'0.5px'}}>SVS Playway & Primary School, Jammu</span>
            <span className="fs-6 d-block" style={{color:'#f59e42',fontWeight:500,letterSpacing:'0.5px'}}>Nurturing Young Minds for a Brighter Tomorrow</span>
          </div>
        </div>
      </header>

      {/* Top navbar for desktop/tablet only */}
      <nav className="navbar navbar-expand navbar-light shadow-sm d-none d-md-flex" style={{position:'fixed',top:64,left:0,right:0,zIndex:1040,background:'#fff',borderBottom:'2px solid #a78bfa',marginBottom:'1.5rem', height:'56px', display:'flex', alignItems:'center'}}>
        <div className="container">
          <div className="navbar-nav gap-3">
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/">Home</Link>
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/about">About</Link>
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/contact">Contact</Link>
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/images">Gallery</Link>
          </div>
        </div>
      </nav>

      {/* Side drawer for mobile */}
      <div
        className={`side-drawer${drawerOpen ? ' open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: 240,
          background: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
          zIndex: 2000,
          transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s',
          paddingTop: 80,
          display: 'block',
        }}
      >
        <button
          className="btn btn-link d-md-none"
          style={{position:'absolute',top:16,right:8,fontSize:'2rem',color:'#2563eb'}}
          aria-label="Close navigation menu"
          onClick={() => setDrawerOpen(false)}
        >
          <i className="bi bi-x"></i>
        </button>
        <div className="navbar-nav flex-column gap-3 px-3">
          <Link className="nav-link fw-semibold py-2" style={{color:'#2563eb'}} to="/" onClick={handleNavClick}>Home</Link>
          <Link className="nav-link fw-semibold py-2" style={{color:'#2563eb'}} to="/about" onClick={handleNavClick}>About</Link>
          <Link className="nav-link fw-semibold py-2" style={{color:'#2563eb'}} to="/contact" onClick={handleNavClick}>Contact</Link>
          <Link className="nav-link fw-semibold py-2" style={{color:'#2563eb'}} to="/images" onClick={handleNavClick}>Gallery</Link>
        </div>
      </div>
      {/* Overlay for drawer */}
      {drawerOpen && (
        <div
          className="drawer-overlay d-md-none"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.25)',
            zIndex: 1500,
          }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      <div style={{paddingTop: '120px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/images" element={<ImagesFeed />} />
        </Routes>
      </div>
      <FloatingContactWidget />
    </Router>
  );
}

export default App
