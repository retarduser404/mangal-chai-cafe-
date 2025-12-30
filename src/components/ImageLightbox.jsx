import { useState, useEffect } from 'react';

export default function ImageLightbox({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
        style={{ fontSize: '28px', padding: '8px', cursor: 'pointer' }}
      >
        ✕
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 text-white hover:text-gray-300 transition"
        style={{ fontSize: '32px', cursor: 'pointer', padding: '8px' }}
      >
        ‹
      </button>

      {/* Image */}
      <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[90vh]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 text-white hover:text-gray-300 transition"
        style={{ fontSize: '32px', cursor: 'pointer', padding: '8px' }}
      >
        ›
      </button>

      {/* Counter */}
      <div
        className="absolute bottom-4 text-white text-sm"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.6)',
          padding: '8px 16px',
          borderRadius: '4px',
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
