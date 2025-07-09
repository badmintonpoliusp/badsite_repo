// src/pages/GaleriaPage.jsx
import ImageSlider from '../components/ImageSlider';
import Page_title from '../components/Page_title';

function GalleryPage() {
  return (
    <div className="gallery-page">
      <Page_title title="Galeria" />
      <section className="gallery-section">
        <ImageSlider source="gallery" mode="expanded" />
      </section>
    </div>
  );
}

export default GalleryPage;
