import React from 'react';
import Page_title from './Page_title'; 

function MarcoZero() {
    return (
        <div>
            <Page_title title="Projeto Marco Zero" />
            <div className='MZ_container'>
                <div className='Logo'>
                    <img src = '../assets/images/LogoMZ.png' alt="Logo do Projeto Marco Zero" />
                </div>
                <div className='description'></div>
            </div>
        </div>
    );
}

export default MarcoZero;