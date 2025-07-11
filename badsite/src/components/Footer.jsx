import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';

function Footer() {
  const [showContribPopup, setShowContribPopup] = useState(false);
  const popupRef = useRef(null);

  // Handle click outside to close popup
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
            <li>Patrocínios</li>
            <li 
              onClick={() => setShowContribPopup(true)} 
              style={{cursor: 'pointer'}}
            >
              Contribuições
            </li>
            <li>
              <a 
                target="_blank" 
                rel="Site da Atlética Poli Usp - Incentivo" 
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
                rel="Site da Atlética Poli Usp" 
                href="https://www.atleticapoliusp.com.br/"
              >
                A.A.A.P.
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="Site do CEPEUSP" 
                href="https://cepe.usp.br/"
              >
                CEPEUSP
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="Site da FEBASP" 
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
              <h3>Ajude o BadPoli a crescer!</h3>
              <p>
                O time de Badminton da Poli é mantido por esforços coletivos — toda contribuição faz a diferença! 🏸💛
              </p>
              <p>
                Você pode contribuir com materiais (petecas, grips, raquetes etc.) ou com qualquer valor via Pix.
              </p>
              <p>
                <strong>Chave Pix:</strong> badpoliusp@gmail.com<br />
                <small>(Essa chave é fictícia, substitua pela real caso tenha)</small>
              </p>
              <p>
                <strong>Tem algo para doar?</strong><br />
                Fale com a diretoria ou deixe na caixinha de contribuições durante os treinos.
              </p>
              <p>Obrigado por fazer parte dessa rede!</p>
            </div>
          </div>
        )}
      </div>

      <div id="marco_zero">
        <p id="copyright">
          Copyright ©2025 Equipe de Badminton da Poli-Usp. Todos os direitos reservados. Desenvolvido pelo{' '}
          <Link to="/projeto-marco-zero">Projeto Marco Zero</Link>.
        </p>
      </div>
    </>
  );
}

export default Footer;