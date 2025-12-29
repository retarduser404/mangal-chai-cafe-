export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-14 md:py-16" style={{ backgroundColor: '#2C2C2C' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="text-center">
            <div className="flex items-center gap-3 mb-5 justify-center">
              <div className="text-3xl">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12C3 8 6 6 9 6s6-2 6 6" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 18c0 1.657 1.567 3 3.5 3S16 19.657 16 18" stroke="#8B4513" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Mangalam Chai</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              A cozy corner in Jagatpura for chai, food, music, and chill vibes. Your perfect escape in the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Menu', id: 'menu' },
                { label: 'Gallery', id: 'gallery' },
                { label: 'About Us', id: 'about' },
                { label: 'Location', id: 'location' }
              ].map(link => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center">
            <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
            <div className="flex gap-5 flex-wrap justify-center items-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/smc74943"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                title="Instagram"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ffffff" strokeWidth="1.2"/>
                  <path d="M16 11.993a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 6.5h.01" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9351599510"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                title="WhatsApp"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5a9.5 9.5 0 1 0-3 6.9L21 21l-2.7-2.7A9.4 9.4 0 0 0 21 11.5z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 13.2c-.2-.1-1.2-.6-1.4-.6-.2-.1-.4 0-.6.1-.2.1-.4.3-.6.6-.2.3-.6.4-.9.3-.6-.1-1.9-1-2.8-2.3-.7-1-1-2.1-1-2.6 0-.4.2-.6.4-.9.2-.2.4-.3.6-.5.2-.1.3-.2.4-.3.1-.1.1-.2.2-.3.1-.1 0-.2-.1-.3-.1-.1-1.1-2.3-1.5-3.1-.4-.7-.8-.5-1-.5-.2 0-.6 0-.9 0-.3 0-.7.1-1 .5-.3.4-1.2 1.2-1.2 3.1 0 1.9 1.2 3.8 1.4 4.1.2.3 2.4 3.6 5.9 4.9 3.5 1.3 3.5.9 4.1.8.6-.1 2.4-1 2.7-2.2.3-1.2.3-2.3.2-2.5-.1-.2-.6-.4-1-.6z" stroke="#ffffff" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Phone / Call */}
              <a
                href="tel:+919876543210"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                title="Call"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.73 2.72a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.86.36 1.78.61 2.72.73A2 2 0 0 1 22 16.92z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Location Pin */}
              <a
                href="https://www.google.com/maps?q=26.8313028,75.843793&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                title="Location"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-10">
          <p className="text-center text-gray-400 text-sm leading-relaxed">
            © {currentYear} Mangalam Chai. All rights reserved.
            <br />
            <span className="text-xs mt-3 block">
              Built with ☕ for Jagatpura | Come sit with us
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
