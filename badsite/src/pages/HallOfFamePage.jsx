import React from 'react';
import Page_title from '../components/Page_title';
import { hallOfFameData } from '../data/hallOfFameData';
import './HallOfFamePage.css';

function HallOfFamePage() {
  return (
    <div className="hall-of-fame-container">
      <Page_title title={'Hall da Fama'} />

      {hallOfFameData.map((person) => (
        <section className="fame-entry" key={person.id}>

          {/* Coluna da Esquerda (Perfil) */}
          <div className="fame-profile-column">
            <img src={person.imageUrl} alt={person.name} className="fame-photo" />
            <h3 className="fame-name">{person.name}</h3>
            <p className="fame-tenure">{person.tenure}</p>
          </div>

          {/* Coluna da Direita (Detalhes) */}
          <div className="fame-details-column">
            {/* --- TÍTULO ADICIONADO AQUI --- */}
            <h2>{person.title}</h2>

            {/* Conditionally render Conquistas */}
            {person.conquistas && person.conquistas.length > 0 && (
              <div className="fame-section">
                <h4>Conquistas</h4>
                <ul>
                  {person.conquistas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conditionally render Contribuições */}
            {person.contribuicoes && (
              <div className="fame-section">
                <h4>Contribuições</h4>
                <p>{person.contribuicoes}</p>
              </div>
            )}
          </div>

        </section>
      ))}
    </div>
  );
}

export default HallOfFamePage;