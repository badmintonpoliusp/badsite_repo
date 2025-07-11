import React, { useState, useRef, useEffect } from 'react'; 
import './Resultado_de_premiações.css';

const ResultadosPopup = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setMostrarPopup(false);
      }
    };

    if (mostrarPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mostrarPopup]);

  return (
    <div className="resultados-wrapper">
      <button onClick={() => setMostrarPopup(true)} className="abrir-btn">
        Ver Resultados
        <span className="btn-icon">🏆</span>
      </button>

      {mostrarPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <table className="tabela-resultados">
              <thead>
                <tr>
                  <th>CAMPEONATO</th>
                  <th>NOME</th>
                  <th>INSTITUTO</th>
                  <th>CATEGORIA</th>
                  <th>RESULTADO</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>REGIONAL FEBASP (ABRIL 2024)</td><td>BRUNO KAWANO</td><td>POLI</td><td>SIMPLES C</td><td>1º LUGAR</td></tr>
                <tr><td>REGIONAL FEBASP (ABRIL 2024)</td><td>MATHEUS NUCCI</td><td>SANFRAN</td><td>SIMPLES D</td><td>1º LUGAR</td></tr>
                <tr><td>REGIONAL FEBASP (ABRIL 2024)</td><td>PEDRO KOCH</td><td>POLI</td><td>SIMPLES D</td><td>2º LUGAR</td></tr>
                <tr><td>REGIONAL FEBASP (ABRIL 2024)</td><td>ERIC MIURA</td><td>FARMA</td><td>SIMPLES D</td><td>3º LUGAR</td></tr>
                <tr><td>REGIONAL FEBASP (ABRIL 2024)</td><td>HUA HUA CAO <br /> JIN XIUBIN</td><td>POLI <br /> FEA</td><td>DUPLA MISTA D</td><td>3º LUGAR</td></tr>
                <tr><td>NIPPON INTERCOLONIAL (JUNHO 2024)</td><td>PEDRO KOCH</td><td>POLI</td><td>SIMPLES C</td><td>3º LUGAR</td></tr>
                <tr><td>TIKARA (SETEMBRO 2024)</td><td>PEDRO KOCH</td><td>POLI</td><td>DUPLA B</td><td>1º LUGAR</td></tr>
                <tr><td>NIPPON CHALLENGE (NOVEMBRO 2024)</td><td>ERIC MIURA <br /> PEDRO KOCH</td><td>FARMA <br /> POLI</td><td>DUPLA D</td><td>1º LUGAR</td></tr>
                <tr><td>NIPPON CHALLENGE (NOVEMBRO 2024)</td><td>GUSTAVO AKIRA <br /> JOÃO PEDRO DENARDI</td><td>POLI</td><td>DUPLA D</td><td>3º LUGAR</td></tr> 
                <tr><td>NIPPON CHALLENGE (NOVEMBRO 2024)</td><td>DANIEL TRIEWEILER <br /> FERNANDO HUANG</td><td>POLI</td><td>DUPLA E</td><td>3º LUGAR</td></tr>                
                <tr><td>1ª COPA SANTISTA DE BADMINTON (JULHO 2025)</td><td>LUCAS BOPP</td><td>POLI</td><td>SIMPLES C</td><td>3º LUGAR</td></tr>
                <tr><td>1ª COPA SANTISTA DE BADMINTON (JULHO 2025)</td><td>LUCAS BOPP <br /> GABRIEL FERIGATO</td><td>POLI <br /> FÍSICA</td><td>DUPLA C</td><td>3º LUGAR</td></tr>
                <tr><td>1ª COPA SANTISTA DE BADMINTON (JULHO 2025)</td><td>ERIC MIURA <br /> PEDRO KOCH</td><td>FARMA <br />POLI</td><td>DUPLA C</td><td>3º LUGAR</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultadosPopup;