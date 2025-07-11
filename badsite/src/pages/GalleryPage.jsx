// src/pages/GaleriaPage.jsx
import ImageSlider from '../components/ImageSlider';
import Page_title from '../components/Page_title';
import './GalleryPage.css';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <Page_title title="Galeria" />
      <section className="gallery-section">
        <ImageSlider source="gallery" mode="expanded" />
      </section>
      {/* <p className="gallery-description">
        De treinos intensos 🏸 a pódios emocionantes 🏆, cada foto conta uma parte da nossa história de garra 💪 e paixão pelo esporte. Explore nossos melhores momentos!!! ✨
      </p> */}
      <p className="gallery-description">
        sçmdsçlm      
      </p>

    </div>
  );
}

export default GalleryPage;
