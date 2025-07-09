import React from 'react';
import './GoogleCalendar.css';

const GoogleCalendar = () => {
  return (
    <div className='calendar-component'>
      <div className='calendar-and-text'>
        <div className="responsive-iframe-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=bad.poliusp%40gmail.com&ctz=America%2FSao_Paulo"
            title="Calendário Colaborativo de Eventos"
            className="google-calendar-iframe" 
            allowFullScreen
          />
        </div>
      
        <p className='notice'>
            Este calendário é destinado à divulgação de campeonatos e eventos. 
            Convidamos todos os organizadores a compartilharem seus eventos conosco. 
            Para incluir seu evento, entre em contato pelo e-mail{' '}
            <a href="mailto:bad.poliusp@gmail.com?subject=Divulgação de Evento">
            bad.poliusp@gmail.com</a>, mencionando "Divulgação de Evento" no assunto.
        </p>
      </div>
    </div>
  );
};

export default GoogleCalendar;