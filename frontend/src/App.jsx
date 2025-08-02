
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import FloatingContactWidget from './FloatingContactWidget';


function App() {
  return (
    <Router>
      <header className="bg-primary text-white py-3 mb-4 shadow">
        <div className="container d-flex align-items-center gap-3">
          <img src="/logo.jpg" alt="SVS Logo" style={{height:48, width:48, objectFit:'contain'}} />
          <span className="fs-3 fw-bold">SVS Playway & Primary School</span>
        </div>
      </header>
      <nav className="navbar navbar-expand navbar-light bg-light mb-4">
        <div className="container">
          <div className="navbar-nav gap-3">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingContactWidget />
    </Router>
  );
}

export default App
