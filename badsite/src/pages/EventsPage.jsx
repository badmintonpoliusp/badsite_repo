import React from 'react';
import Page_title from '../components/Page_title'; 
import './EventsPage.css';
import ResultadosPopup from '../components/Resultado_de_premiações';
import GoogleCalendar from '../components/GoogleCalendar';

const EventosPage = () => {
  return (
    <main className="events-page-container">
      <div className='resultados-container'>
        <div className='Title-result'>
          <Page_title title="Resultados que vibram com a torcida:" />
        </div>
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