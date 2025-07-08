import Page_title from './Page_title';
import './SectionContactInfo.css'


function SectionContactInfo(){
    return(
    <div>
        <Page_title title={'Contatos e Localização'} />
        <div className='section-container'>
            <div className='maps-container'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7314.362444336078!2d-46.717017!3d-23.561934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578fb34ff76f%3A0x496d064bde98699f!2sCEPEUSP%20-%20Centro%20de%20Pr%C3%A1ticas%20Esportivas%20da%20USP!5e0!3m2!1spt-BR!2sbr!4v1727003096886!5m2!1spt-BR!2sbr" 
                title = 'Como chegar no CEPEUSP'
                className='google-maps-iframe'
                loading='lazy'
                >
                </iframe>
            </div>

            <div className='text-container'>

                <div className='adress'>
                    <h1>Endereço</h1>
                    <p>Prç. Prof. Rubião Meira, 61</p>
                    <p>São Paulo - SP</p>
                </div>

                <div className='contact'>
                    <h1>Contato</h1>
                    <p><a href="mailto:bad.poliusp@gmail.com">bad.poliusp@gmail.com</a></p>
                </div>

            </div>
        
        </div>

    </div>
    
    );
}

export default SectionContactInfo
;