export default function Gallery() {
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
      src: '/images/image4.jpeg',
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

  return (
    <section id="gallery" className="py-16 md:py-24 px-4 md:px-8" style={{ background: 'linear-gradient(to bottom, #faf8f3, #F5DEB3)' }}>
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: '#2C2C2C' }}>Gallery</h2>
        <p className="text-center text-gray-600 text-lg mb-12">Moments Worth Capturing</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%'
        }}>
          {images.map((image) => (
            <div
              key={image.id}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backgroundColor: '#8B4513'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  background: 'rgba(0,0,0,0)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  transition: 'background 300ms ease'
                }}
                className="group-hover:bg-opacity-50"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0,0,0,0)';
                }}
              >
                <div style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
                  color: 'white',
                  opacity: 0,
                  transition: 'opacity 300ms ease'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                >
                  <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '18px' }}>
            Missing a moment? Tag us on Instagram{' '}
            <span style={{ fontWeight: 'bold', color: '#8B4513' }}>@mangalam.chai</span>
          </p>
        </div>
      </div>
    </section>
  );
}
