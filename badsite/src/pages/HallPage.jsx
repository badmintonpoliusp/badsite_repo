import React from 'react';
import Page_title from '../components/Page_title' 
import './HallPage.css'

import HallMember from '../components/hall_member';

import hallData from '../data/hall';


const HallPage = () =>{
    return(
        <>
            <Page_title title={"Hall da Fama"} />
            <div className='hall-container'>
                <div className='hall-members'>
                    {hallData.map((member) => (
                        <HallMember key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HallPage