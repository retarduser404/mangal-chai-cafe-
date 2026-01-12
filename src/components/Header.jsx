import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getBusinessStatus } from '../utils/businessHours';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [businessStatus, setBusinessStatus] = useState(getBusinessStatus());

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Update business status every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessStatus(getBusinessStatus());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Location', id: 'location' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#F5DEB3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 flex justify-between items-center gap-4">
        {/* Logo - Centered on Mobile */}
        <div className="flex items-center gap-2 md:gap-3 flex-1 md:flex-none justify-center md:justify-start">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="flex items-center gap-2 md:gap-3">
            <div className="text-2xl md:text-3xl font-bold" style={{ color: '#8B4513' }}>☕</div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold" style={{ color: '#2C2C2C' }}>Shree Mangalam Chai</h1>
              <p className="text-xs md:text-sm text-gray-600 font-medium">Jagatpura, Jaipur</p>
            </div>
          </a>
        </div>

        {/* Status Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: businessStatus.indicatorColor,
            animation: businessStatus.isOpen ? 'pulse 2s infinite' : 'none'
          }}></span>
          <span style={{ fontSize: '14px', fontWeight: '600', color: businessStatus.statusColor }}>
            {businessStatus.isOpen ? 'OPEN' : 'CLOSED'}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 lg:gap-6 flex-1 justify-center" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
              className="font-semibold text-sm lg:text-base transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white hover:bg-opacity-50"
              style={{ color: '#2C2C2C' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: '#2C2C2C', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t-2 w-full" style={{ backgroundColor: '#F5DEB3', borderTopColor: '#8B4513' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-center py-3 px-4 text-base font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-50"
                style={{ color: '#2C2C2C' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
