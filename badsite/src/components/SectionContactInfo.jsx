import Page_title from './Page_title';
import './SectionContactInfo.css';

// 1. Importe os ícones que você vai usar
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function SectionContactInfo() {
    return (
        <div>
            <div className='section-container'>

                {/* Bloco do Mapa com a URL correta */}
                <div className='maps-container'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.195213036583!2d-46.71993232350911!3d-23.561431378799938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578fb34ff76f%3A0x496d064bde98699f!2sCEPEUSP%20-%20Centro%20de%20Pr%C3%A1ticas%20Esportivas%20da%20USP!5e0!3m2!1spt-BR!2sbr!4v1752018758710!5m2!1spt-BR!2sbr"
                        title='Como chegar no CEPEUSP'
                        className='google-maps-iframe'
                        loading='lazy'
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

                {/* Bloco de Contato com o novo design de ícones */}
                <div className='text-container-icons'>
                    
                    <div className='info-block'>
                        <FaMapMarkerAlt size={28} className='icon' />
                        <div>
                            <h2>Endereço</h2>
                            <p>Praça Prof. Rubião Meira, 61<br/>São Paulo - SP</p>
                        </div>
                    </div>

                    <div className='info-block'>
                        <FaEnvelope size={28} className='icon' />
                        <div>
                            <h2>Contato</h2>
                            <p><a href="mailto:bad.poliusp@gmail.com">bad.poliusp@gmail.com</a></p>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    );
}

export default SectionContactInfo;