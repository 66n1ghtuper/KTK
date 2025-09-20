import React, { useState } from 'react';
import './Q.css';
import Img1 from './img/0.jpg';
import Img2 from './img/e2.png';
import Img3 from './img/e1.png';
import Img4 from './img/e4.jpg';

const Q = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [
    {
      id: 1,
      src: Img1,
      alt: "Свидетельство 1"
    },
    {
      id: 2,
      src: Img2,
      alt: "Свидетельство 2"
    },
    {
      id: 3,
      src: Img3,
      alt: "Свидетельство 3"
    },
    {
      id: 4,
      src: Img4,
      alt: "Свидетельство 4"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = (e) => {

    if (e.target.classList.contains('fullscreen-overlay')) {
      setFullscreenImage(null);
    }
  };

  return (
    <section className="Q">
      <div className="Q-header">
        <h2 className="Q-title">СВИДЕТЕЛЬСТВА</h2>
        <div className="Q-title-shadow">СВИДЕТЕЛЬСТВА</div>
      </div>
      
      <div className="Q-content">
        <p className="Q-description QL">
          Имеем все документы и разрешения, необходимые для ведения деятельности
        </p>
        

        <div className="Q-images-desktop">
          <div className="Q-images-grid">
            {images.map((image) => (
              <div key={image.id} className="Q-image-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="Q-image"
                  onClick={() => openFullscreen(image)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="Q-images-mobile">
          <div className="Q-carousel">
            <div className="Q-carousel-slide">
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt}
                className="Q-carousel-image"
                onClick={() => openFullscreen(images[currentImage])}
              />
            </div>
          </div>
          
          <div className="Q-carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`Q-carousel-dot ${index === currentImage ? 'active' : ''}`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

       
        {fullscreenImage && (
          <div 
            className="fullscreen-overlay"
            onClick={closeFullscreen}
          >
            <img 
              src={fullscreenImage.src} 
              alt={fullscreenImage.alt}
              className="fullscreen-image"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Q;