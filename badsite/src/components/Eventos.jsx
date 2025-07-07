import React from 'react';
import Page_title from './Page_title'; // Importe o componente Page_title
import './Eventos.css'

function Eventos() {
    return (
        <div>
            <Page_title title="Calendário Colaborativo de Eventos" />
            <iframe
                src="https://calendar.google.com/calendar/embed?src=bad.poliusp%40gmail.com&ctz=America%2FSao_Paulo"
                title="Calendário Colaborativo de Eventos"
                className="google-calendar-iframe" 
            ></iframe>
 
      </div>
    );
}
export default Eventos
