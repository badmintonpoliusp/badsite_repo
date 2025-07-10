import CepeLogo from '../assets/images/icons/Cepeusp - Logo.webp'
import UspLogo from '../assets/images/icons/Usp - Logo.png'

import './Supporters.css'

function Supporters () {
    return(
        <div className="supporters-container">
            <h2 className='section-title'>Apoio</h2>
            <div className='Logo'>
                <img src={CepeLogo} alt="Logo do CEPEUSP"/>
                <img src={UspLogo} alt="Logo da Usp"/>
            </div>
        </div>
    );
}

export default Supporters;