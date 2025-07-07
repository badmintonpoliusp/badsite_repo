import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
// --- THIS IS THE FIX ---
// This path goes "up" one level from /components, then "down" into /assets/images
import logo from '../assets/images/icon.jpg'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="app-header">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          {/* The `src` attribute now uses the imported `logo` variable */}
          <img src={logo} alt="Logo Badminton Poli-Usp" className="logo" />
        </Link>
        <span className="logo-text">Badminton Poli-Usp</span>
      </div>

      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/eventos" onClick={closeMenu}>Eventos</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/galeria" onClick={closeMenu}>Galeria</Link></li>
          <li><Link to="/equipe" onClick={closeMenu}>Hall da Fama</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;