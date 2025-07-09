import SectionQuemSomos from "../components/SectionQuemSomos"; 
import SectionContactInfo from "../components/SectionContactInfo"; 
import Page_title from "../components/Page_title"; 
import './AboutPage.css'


function AboutPage(){
    return(
    <div className="about-container">
        <Page_title title={'Contatos e Localização'} />
        <SectionQuemSomos/>   
        <SectionContactInfo/> 
    </div>);    
}

export default AboutPage;