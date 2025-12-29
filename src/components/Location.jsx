export default function Location() {
  const openingHours = [
    { day: 'Monday - Sunday', time: '9:00 AM - 11:30 PM' },
  ];

  return (
    <section id="location" className="section-padding" style={{ background: 'linear-gradient(to bottom, #faf8f3, #F5DEB3)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Find Us</h2>
        <p className="section-subtitle">Easy to locate, easy to love</p>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 md:h-full min-h-96">
            <iframe
              title="Mangalam Chai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7644!2d75.843793!3d26.8313028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4a1d1d1d1d1%3A0x1!2sJagatpura%20Jaipur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details */}
          <div className="space-y-8">
            {/* Address */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#8B4513' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" stroke="#8B4513" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="#8B4513" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Address
              </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg text-center">
                Jagatpura, Jaipur
                <br />
                Rajasthan, India
                <br />
                <span className="text-sm text-gray-600">Coordinates: 26.8313°N, 75.8438°E</span>
              </p>
              <a
                href="https://www.google.com/maps?q=26.8313028,75.843793&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                  className="font-semibold inline-flex items-center gap-2 transition-colors duration-300 justify-center mx-auto text-base"
                style={{ color: '#8B4513' }}
              >
                  Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-8" style={{ color: '#8B4513' }}>⏰ Hours</h3>
              <div className="space-y-4">
                {openingHours.map((hours) => (
                  <div key={hours.day} className="flex justify-between items-center pb-5 border-b border-gray-200 last:border-b-0">
                    <span className="font-semibold text-base" style={{ color: '#2C2C2C' }}>{hours.day}</span>
                    <span className="text-gray-600 font-medium text-base">{hours.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-8 flex items-center justify-center" style={{ color: '#8B4513' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.73 2.72a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.86.36 1.78.61 2.72.73A2 2 0 0 1 22 16.92z" stroke="#8B4513" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact
              </h3>
              <div className="space-y-5">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2 justify-center text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5a9.5 9.5 0 1 0-3 6.9L21 21l-2.7-2.7A9.4 9.4 0 0 0 21 11.5z" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 13.2c-.2-.1-1.2-.6-1.4-.6-.2-.1-.4 0-.6.1-.2.1-.4.3-.6.6-.2.3-.6.4-.9.3-.6-.1-1.9-1-2.8-2.3-.7-1-1-2.1-1-2.6 0-.4.2-.6.4-.9.2-.2.4-.3.6-.5.2-.1.3-.2.4-.3.1-.1.1-.2.2-.3.1-.1 0-.2-.1-.3-.1-.1-1.1-2.3-1.5-3.1-.4-.7-.8-.5-1-.5-.2 0-.6 0-.9 0-.3 0-.7.1-1 .5-.3.4-1.2 1.2-1.2 3.1 0 1.9 1.2 3.8 1.4 4.1.2.3 2.4 3.6 5.9 4.9 3.5 1.3 3.5.9 4.1.8.6-.1 2.4-1 2.7-2.2.3-1.2.3-2.3.2-2.5-.1-.2-.6-.4-1-.6z" stroke="#2C2C2C" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>WhatsApp: +91 98765 43210</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2 justify-center text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.73 2.72a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.86.36 1.78.61 2.72.73A2 2 0 0 1 22 16.92z" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Call: +91 98765 43210</span>
                </a>
                <a
                  href="mailto:vinitkumars4987@gmail.com"
                  className="inline-flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 py-2 justify-center text-base"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8l9 6 9-6" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" stroke="#2C2C2C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>vinitkumars4987@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
