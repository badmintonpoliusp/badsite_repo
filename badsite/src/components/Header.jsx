import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Header.css';
import logo from '../assets/images/icons/Badminton - Logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="app-header">
      {/* Logo (image + text) links to home */}
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo-container">
          <img src={logo} alt="Logo Badminton Poli-Usp" className="logo" />
          <span className="logo-text">Badminton Poli-Usp</span>
        </div>
      </Link>

      {/* Mobile menu toggle icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation menu */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/eventos" onClick={closeMenu}>Eventos</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/galeria" onClick={closeMenu}>Galeria</Link></li>
          <li><Link to="/hall-da-fama" onClick={closeMenu}>Hall da Fama</Link></li>
          <li><Link to="/sobre" onClick={closeMenu}>Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
