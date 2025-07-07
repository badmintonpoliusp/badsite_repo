import React from 'react';
import Page_title from './Page_title'; 
import './Eventos.css'

function Eventos() {
    return (
        <div className='eventos-container'>
            <Page_title title="Calendário Colaborativo de Eventos" />
            <div className='calendar-and-text'>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=bad.poliusp%40gmail.com&ctz=America%2FSao_Paulo"
                    title="Calendário Colaborativo de Eventos"
                    className="google-calendar-iframe" 
                ></iframe>
            
                <p className='notice'>Este calendário é destinado à divulgação de campeonatos e eventos. 
                    Convidamos todos os organizadores a compartilharem seus eventos conosco. 
                    Para incluir seu evento, entre em contato pelo e-mail bad.poliusp@gmail.com, 
                    mencionando "Divulgação de Evento" no assunto.
                </p>
            </div>
      </div>
    );
}
export default Eventos
