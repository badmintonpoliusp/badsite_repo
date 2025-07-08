// src/components/TeamPage.jsx

import React from 'react';
import './TeamPage.css';
import membersData from '../data/members';
import Page_title from '../components/Page_title';

const TeamPage = () => {
  // Ordena os membros em ordem alfabética primeiro 
  // [....membersData] cria uma cópia do array original e armazena no sortedMembers
  const sortedMembers = [...membersData].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  // 1. Defina aqui quantos membros uma linha "cheia" deve ter.
  //    Pode ser 4, 5, etc. Altere este número para ajustar o layout.
  const MAX_MEMBERS_PER_ROW = 4;

  const totalMembers = sortedMembers.length;
  let topRowMembers = [];
  let bottomRowMembers = [];

  // 2. Calcula quantos membros "sobram" para a primeira linha.
  const remainder = totalMembers % MAX_MEMBERS_PER_ROW;

  if (remainder === 0 && totalMembers > 0) {
    // Se não há sobra (divisão exata), todas as linhas são "cheias".
    // Então tratamos tudo como "linhas de baixo".
    bottomRowMembers = sortedMembers;
  } else {
    // Se há sobra, os primeiros 'remainder' membros vão para a linha de cima.
    topRowMembers = sortedMembers.slice(0, remainder);
    // O resto vai para as linhas de baixo.
    bottomRowMembers = sortedMembers.slice(remainder);
  }


  return (
    <section className="team-page">
      <Page_title title="Equipe"/>
      <div className="team-layout">
        
        {/* A linha de cima só é renderizada se houver membros para ela */}
        {topRowMembers.length > 0 && (
          <div className="team-row">
            {topRowMembers.map((member) => (
              <div className="member-card" key={member.id}>
                <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="member-photo" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-description">{member.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* As linhas de baixo são renderizadas em um único container que fará a quebra de linha automaticamente */}
        {bottomRowMembers.length > 0 && (
          <div className="team-row">


            {bottomRowMembers.map((member) => (
              <div className="member-card" key={member.id}>
                <img src={member.imageUrl} alt={`Foto de ${member.name}`} className="member-photo" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-description">{member.description}</p>
              </div>
            ))}

            
          </div>
        )}

      </div>
    </section>
  );
};

export default TeamPage;