import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow next-arrow" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

// Image imports
const imageSources = {
  home: import.meta.glob('/src/assets/images/BackUp/home/*.{png,jpg,jpeg,svg,gif,webp}', {
    eager: true,
    query: {
      title: true,
      alt: true
    }
  }),
  gallery: import.meta.glob('/src/assets/images/gallery/*.{png,jpg,jpeg,svg,gif,webp}', {
    eager: true,
    query: {
      title: true,
      alt: true
    }
  })
};

const ImageSlider = ({ source = 'home', mode = 'default' }) => {
  const imageModules = imageSources[source] || imageSources.home;

  const images = Object.entries(imageModules).map(([path, module]) => ({
    src: module.default,
    title: path.split('/').pop().split('.')[0].replace(/[-_]/g, ' '),
    alt: module.title || path.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
  };

  if (images.length === 0) {
    return (
      <div className={`slider-placeholder ${mode}`}>
        <div className="placeholder-content">
          <i className="placeholder-icon">📷</i>
          <p>Nenhuma imagem encontrada nesta seção</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`slider-container ${mode}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-wrapper">
            <div className={`image-container ${mode}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="slider-image"
                loading="lazy"
              />
            </div>
            {image.title && (
              <div className="image-caption">
                <h3 className="image-title">{image.title}</h3>
                <div className="slide-counter">
                  {index + 1} / {images.length}
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
