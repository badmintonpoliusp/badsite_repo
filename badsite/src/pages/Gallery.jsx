// src/pages/GaleriaPage.jsx
import ImageSlider from '../components/ImageSlider'; // Import the slider
import Page_title from '../components/Page_title'; 

function GaleriaPage() {
  return (
    <div>
    <Page_title title="Galeria" />
    <ImageSlider />
    </div>
  );
}

export default GaleriaPage;