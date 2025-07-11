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
          Confira nossos melhores momentos! Cada foto é parte da nossa história — uma jornada de garra, paixão, superação, inovação e, acima de tudo, união. Navegue por esses sentimentos e viva essa experiência com a gente!
      </p>

    </div>
  );
}

export default GalleryPage;
