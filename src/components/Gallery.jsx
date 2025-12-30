import { useState } from 'react';
import ImageLightbox from './ImageLightbox';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/images/image1.jpeg',
      alt: 'Steaming cup of chai',
      caption: 'Perfect Chai Everyday',
    },
    {
      id: 2,
      src: '/images/image2.jpeg',
      alt: 'Cozy café interior',
      caption: 'Cozy Atmosphere',
    },
    {
      id: 3,
      src: '/images/image3.jpeg',
      alt: 'Music and ambiance',
      caption: 'Good Vibes Only',
    },
    {
      id: 4,
      src: '/images/image5.jpeg',
      alt: 'Evening gatherings',
      caption: 'Evening Hangouts',
    },
    {
      id: 5,
      src: '/images/image5.jpeg',
      alt: 'Chai preparations',
      caption: 'Made with Love',
    },
    {
      id: 6,
      src: '/images/image6.jpeg',
      alt: 'Friends at café',
      caption: 'Community Space',
    },
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-8" style={{ background: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark mb-2">Gallery</h2>
        <p className="text-center text-gray-600 mb-12">Moments Worth Capturing</p>

        {/* Gallery Grid with Hover Effects */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            width: '100%',
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                cursor: 'pointer',
                aspectRatio: '1',
                background: '#e0e0e0',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              className="group"
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              {/* Overlay Caption */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 60%)',
                  color: 'white',
                  padding: '20px',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(20px)';
                  e.currentTarget.style.opacity = '0';
                }}
              >
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <p className="text-center text-gray-700 mt-12" style={{ fontSize: '15px' }}>
          Missing a moment? Tag us on Instagram{' '}
          <span className="font-bold" style={{ color: '#A0522D' }}>
            @mangalam.chai
          </span>
        </p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox images={images} initialIndex={lightboxIndex} onClose={closeLightbox} />
      )}
    </section>
  );
}
