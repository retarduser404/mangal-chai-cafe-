import React from 'react';
import { getBusinessStatus } from '../utils/businessHours';

export default function Hero() {
  const [businessStatus, setBusinessStatus] = React.useState(getBusinessStatus());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBusinessStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 md:py-24 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #F5DEB3 0%, #faf8f3 100%)' }}
    >
      <div className="max-w-4xl mx-auto w-full text-center container-center">
        {/* Main Tagline */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 animate-bounce inline-block">☕</div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight" style={{ color: '#8B4513' }}>
            Chai. Music. Chill.
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-10 md:mb-14 leading-relaxed max-w-3xl mx-auto text-center">
            A cozy corner in Jagatpura for unwinding, great food, and good conversations
          </p>
          
          {/* Open/Closed Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold text-base md:text-lg" 
            style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: businessStatus.statusColor }}>
            <span style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: businessStatus.indicatorColor,
              animation: businessStatus.isOpen ? 'pulse 2s infinite' : 'none'
            }}></span>
            <span>{businessStatus.isOpen ? '🟢 OPEN NOW' : '🔴 CLOSED'}</span>
            {!businessStatus.isOpen && (
              <span style={{ fontSize: '13px', fontWeight: 'normal', marginLeft: '10px', color: '#666' }}>
                {businessStatus.nextOpeningText}
              </span>
            )}
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-14 sm:mb-18 md:mb-20 w-full">
          <div className="highlight-box transform transition hover:scale-105 duration-300">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">☕</div>
            <p className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: '#2C2C2C' }}>Premium Chai</p>
          </div>
          <div className="highlight-box transform transition hover:scale-105 duration-300">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">🎵</div>
            <p className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: '#2C2C2C' }}>Good Music</p>
          </div>
          <div className="highlight-box transform transition hover:scale-105 duration-300">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">😌</div>
            <p className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: '#2C2C2C' }}>Chill Vibes</p>
          </div>
          <div className="highlight-box transform transition hover:scale-105 duration-300">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4">📍</div>
            <p className="font-semibold text-xs sm:text-sm md:text-base" style={{ color: '#2C2C2C' }}>Easy Access</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="button-group" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '80px', width: '100%', paddingLeft: '16px', paddingRight: '16px', justifyContent: 'center', alignItems: 'center' }}>
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary"
          >
            Explore Menu
          </button>
          <button
            onClick={() => scrollToSection('location')}
            className="btn-secondary"
          >
            Find Us Now
          </button>
        </div>

        {/* Hours Preview */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-lg inline-block max-w-sm sm:max-w-md mx-auto">
          <p className="text-gray-600 mb-3 md:mb-4 text-xs sm:text-sm font-medium">⏰ Open Now</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#8B4513' }}>9:00 AM - 11:30 PM Daily</p>
          <p className="text-gray-600 mt-3 md:mt-4 text-xs sm:text-sm">Visit us for an amazing experience</p>
        </div>
      </div>
    </section>
  );
}
