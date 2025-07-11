import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  const [showContribPopup, setShowContribPopup] = useState(false);
  const popupRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowContribPopup(false);
      }
    };

    if (showContribPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showContribPopup]);

  return (
    <>
      <div className="container">
        <div className="block">
          <p className="title_bar_footer">Parceria</p>
          <ul>
            <li 
              onClick={() => setShowContribPopup(true)}
              className="shuttlecock-cursor"
            >
              Contribuições
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="/pdf/Patrocinio-BadmintonUSP.pdf"
              >
                Patrocínios
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.atleticapoliusp.com.br/lei-de-incentivo"
              >
                Lei de Incentivo
              </a>
            </li>
          </ul>
        </div>

        <div className="block">
          <p className="title_bar_footer">Links úteis</p>
          <ul>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.atleticapoliusp.com.br/"
              >
                A.A.A.P.
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://cepe.usp.br/"
              >
                CEPEUSP
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://www.febasp.org.br/"
              >
                FEBASP
              </a>
            </li>
          </ul>
        </div>

        <div className="block">
          <div>
            <p className="title_bar_footer">Treino e Horário</p>
            <ul>
              <li>Sexta: 17h às 21h</li>
              <li>Módulo 6 - CEPEUSP</li> 
            </ul>
          </div>
        </div>

        <div className="block">
          <div id="contact_block">
            <p className="title_bar_footer">Contato e Redes</p>
            <ul>
              <li>
                <a 
                  href="mailto:bad.poliusp@gmail.com" 
                  rel="Email" 
                  className="icon-link"
                >
                  <FaEnvelope />bad.poliusp@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/badminton_poliusp/" 
                  target="_blank" 
                  rel="Instagram" 
                  className="icon-link"
                >
                  <FaInstagram />@badminton_poliusp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contributions Popup */}
        {showContribPopup && (
          <div className="popup-overlay">
            <div className="popup-content" ref={popupRef}>
              <button 
                className="popup-close-btn" 
                onClick={() => setShowContribPopup(false)}
              >
                ×
              </button>
              <h3>Apoie o time universitário de Badminton da Poli</h3>
              <p>
                Você pode contribuir com qualquer valor via Pix para:
              </p>
              <p>
                <strong>Chave Pix:</strong> bad.poliusp@gmail.com<br />
              </p>
              <p>Todo valor será usado na compra de materiais como petecas, grips e raquetes.
                 Sua ajuda fortalece o esporte universitário. Obrigado! 🏸🎓</p>
            </div>
          </div>
        )}
      </div>

      <div id="marco_zero">
        <p id="copyright">
          {isMobile ? (
            <>
              © 2025 Badminton Poli-USP
              <br />
              Desenvolvido por{' '}
              <Link to="/projeto-marco-zero">Projeto Marco Zero</Link>
            </>
          ) : (
            <>
              Copyright © 2025 Equipe de Badminton da Poli-Usp. Todos os direitos reservados.
              Desenvolvido pelo{' '}
              <Link to="/projeto-marco-zero">Projeto Marco Zero</Link>.
            </>
          )}
        </p>
      </div>
    </>
  );
}

export default Footer;