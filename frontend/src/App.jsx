
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import FloatingContactWidget from './FloatingContactWidget';


function App() {
  return (
    <Router>
      <header className="shadow" style={{position:'fixed',top:0,left:0,right:0,zIndex:1050,background:'#2563eb',color:'#fff',padding:'0.5rem 0',marginBottom:0, height:'64px', display:'flex', alignItems:'center'}}>
        <div className="container d-flex align-items-center gap-3 py-2">
          <img src="/logo.jpg" alt="SVS Logo" style={{height:48, width:48, objectFit:'contain', borderRadius:8, background:'#fff', padding:4}} />
          <div>
            <span className="fs-3 fw-bold d-block" style={{letterSpacing:'0.5px'}}>SVS Playway & Primary School, Jammu</span>
            <span className="fs-6 d-block" style={{color:'#f59e42',fontWeight:500,letterSpacing:'0.5px'}}>Nurturing Young Minds for a Brighter Tomorrow</span>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand navbar-light shadow-sm" style={{position:'fixed',top:64,left:0,right:0,zIndex:1040,background:'#fff',borderBottom:'2px solid #a78bfa',marginBottom:'1.5rem', height:'56px', display:'flex', alignItems:'center'}}>
        <div className="container">
          <div className="navbar-nav gap-3">
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/">Home</Link>
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/about">About</Link>
            <Link className="nav-link fw-semibold" style={{color:'#2563eb'}} to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <div style={{paddingTop: '120px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <FloatingContactWidget />
    </Router>
  );
}

export default App
