export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="section-title w-full">Why Mangalam Chai?</h2>
        <p className="section-subtitle w-full">More Than Just a Café</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16 w-full max-w-5xl mx-auto">
          {/* Our Story */}
          <div className="card p-10 text-center flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: '#8B4513' }}>Our Story</h3>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
              Mangalam Chai isn't just a café—it's a corner where Jagatpura comes
              to unwind. Started with a simple idea: serve great chai and fresh food, creating
              a space where friends gather, music plays, and life slows down.
            </p>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Whether you're a student, a night owl, or just someone who loves
              good tea and good company, you'll find your place here. Everyone's welcome.
            </p>
          </div>

          {/* What Makes Us Different */}
          <div className="card p-10 text-center flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ color: '#8B4513' }}>What's Special</h3>
            <ul className="space-y-5 flex flex-col items-center w-full">
              {[
                'Everything tastes fresh and home-made',
                'Coffee and snacks for everyone, not just chai',
                'Sauces like white, red, or makhni to choose from',
                'Curated music that sets the mood',
                'Friendly staff who make you feel at home',
                'Cozy hangout spot at easy-on-the-wallet prices'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 md:gap-5 justify-center max-w-sm">
                  <span className="text-2xl md:text-3xl flex-shrink-0" style={{ color: '#8B4513' }}>✓</span>
                  <span className="text-gray-700 text-sm md:text-lg text-center">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Vibe Statement */}
        <div className="text-white p-12 md:p-16 rounded-2xl text-center w-full max-w-2xl mx-auto flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #8B4513 0%, #D4A574 100%)' }}>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 leading-tight">
            "A place to sit, sip, and lose track of time"
          </p>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl" style={{ color: '#F5DEB3' }}>
            Open your evenings with us. Everyone's welcome.
          </p>
        </div>
      </div>
    </section>
  );
}
