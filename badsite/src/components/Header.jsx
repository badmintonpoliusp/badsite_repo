// src/components/Header.jsx

import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/icon.jpg';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importando ícones de hamburger e de fechar

const Header = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app-header">
      <div className="logo-container">
        <img src={logo} alt="Logo Badminton Poli-Usp" className="logo" />
        <span className="logo-text">Badminton Poli-Usp</span>
      </div>

      {/* Ícone do menu (só aparece em mobile) */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Aplicamos uma classe 'active' quando o menu está aberto */}
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#eventos" onClick={() => setIsMenuOpen(false)}>Eventos</a></li>
          <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
          <li><a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galeria</a></li>
          <li><a href="#hall-da-fama" onClick={() => setIsMenuOpen(false)}>Hall da Fama</a></li>
          <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;