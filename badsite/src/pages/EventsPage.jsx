import React from 'react';
import Page_title from '../components/Page_title'; 
import './EventsPage.css';
import ResultadosPopup from '../components/Resultado_de_premiações';
import GoogleCalendar from '../components/GoogleCalendar';

const EventosPage = () => {
  return (
    <main className="events-page-container">
      <div className='resultados-container'>
        <Page_title title="Resultado de Premiações" />
        <ResultadosPopup />
      </div>

      <div className='eventos-container'>
        <Page_title title="Calendário Colaborativo de Eventos" />
        <GoogleCalendar />
      </div>
    </main>
  );
};

export default EventosPage;