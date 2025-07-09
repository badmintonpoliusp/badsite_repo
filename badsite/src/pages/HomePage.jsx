import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Engenharia, Garra e Paixão em Cada Ponto</h1>
        <p>
          Somos mais que uma equipe; somos um ponto de encontro para estudantes da Poli-USP que compartilham a paixão pelo badminton. Unimos a precisão da engenharia com a agilidade do esporte para competir, crescer e fazer história.
        </p>
        <Link to="/sobre" className="cta-button">Conheça a Equipe</Link>
      </div>

      <div className="hero-slider">
        <ImageSlider source="home" />
      </div>
    </section>
  );
};

export default HomePage;