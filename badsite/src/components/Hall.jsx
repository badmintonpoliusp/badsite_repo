import React from 'react';
import Page_title from '../components/Page_title';
import { hallOfFameData } from '../data/hallOfFameData';
import './Hall.css';

function Hall() {
  return (
    <div className="hall-of-fame-container">
      <Page_title title={'Hall da Fama'} />

      {hallOfFameData.map((person) => (
        <section className="fame-entry" key={person.id}>
          {/* Coluna da Esquerda (Foto e Nome) */}
          <div className="fame-profile-column">
            <img src={person.imageUrl} alt={person.name} className="fame-photo" />
            <h3 className="fame-name">{person.name}</h3>
            <p className="fame-year">{person.year}</p>
          </div>

          {/* Coluna da Direita (Título, Período, Conquistas, Contribuições) */}
          <div className="fame-details-column">
            <h2>{person.title}</h2>

            {/* {person.conquistas && person.conquistas.length > 0 && (
              <div className="fame-section">
                <h4>Conquistas</h4>
                <ul>
                  {person.conquistas.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )} */}

            {person.introduction && (
              <div className="fame-section">
                {/* <h4>Introdução</h4> */}
                <p>{person.introduction}</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Hall;
