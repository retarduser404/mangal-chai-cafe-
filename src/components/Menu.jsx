export default function Menu() {
  const menuItems = {
    'MANGALAM CHAI': [
      { name: 'Normal chai', price: '₹10', description: '' },
      { name: 'Kullhad chai', price: '₹15/20', description: '' },
      { name: 'Masala chai', price: '₹20', description: '' },
      { name: 'Lemon chai', price: '₹25', description: '' },
      { name: 'Black tea', price: '₹25', description: '' },
    ],
    'MANGALAM COFFEE': [
      { name: 'Hot coffee', price: '₹30', description: '' },
      { name: 'Chocolate coffee', price: '₹40', description: '' },
      { name: 'Black coffee', price: '₹25', description: '' },
    ],
    'MANGALAM MAGGI': [
      { name: 'Plain maggi', price: '₹40', description: '' },
      { name: 'Masala maggi', price: '₹50', description: '' },
      { name: 'Cheese maggi', price: '₹70', description: '' },
      { name: 'Butter maggi', price: '₹60', description: '' },
      { name: 'Tandori maggi', price: '₹70', description: '' },
      { name: 'S.M.C special', price: '₹80', description: '' },
    ],
    'MANGALAM CHAAT': [
      { name: 'Kurkure chaat', price: '₹50', description: '' },
      { name: 'Nachos', price: '₹50', description: '' },
      { name: 'Bhelpuri', price: '₹50', description: '' },
    ],
    'MANGALAM SANDWICH': [
      { name: 'Cold sandwich', price: '₹40', description: '' },
      { name: 'Veg sandwich', price: '₹50', description: '' },
      { name: 'Cheese sandwich', price: '₹60', description: '' },
      { name: 'Paneer sandwich', price: '₹70', description: '' },
      { name: 'Makhni sandwich', price: '₹80', description: '' },
      { name: 'Tandori sandwich', price: '₹80', description: '' },
      { name: 'S.M.C special', price: '₹90', description: '' },
    ],
    'MANGALAM PASTA': [
      { name: 'Red pasta', price: '₹60', description: '' },
      { name: 'White pasta', price: '₹80', description: '' },
      { name: 'Makhani pasta', price: '₹70', description: '' },
    ],
    'MANGALAM CHOWMEIN': [
      { name: 'Veg chowmein', price: '₹50', description: '' },
      { name: 'Paneer chowmein', price: '₹70', description: '' },
      { name: 'Shezwan chowmein', price: '₹60', description: '' },
    ],
    'MANGALAM PATTIES': [
      { name: 'Aalo patties', price: '₹30', description: '' },
      { name: 'Masala patties', price: '₹40', description: '' },
      { name: 'Cheese patties', price: '₹50', description: '' },
      { name: 'Tandori patties', price: '₹50', description: '' },
      { name: 'Paneer patties', price: '₹60', description: '' },
      { name: 'Makhni patties', price: '₹50', description: '' },
    ],
  };

  return (
    <section id="menu" className="section-padding" style={{ backgroundColor: '#faf8f3' }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <h2 className="section-title w-full">Menu</h2>
        <p className="section-subtitle w-full">Fresh & Delicious Every Time</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 lg:gap-16 w-full max-w-5xl mx-auto">
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="menu-category flex flex-col items-center w-full">
              <h3 className="menu-category-title text-center w-full">{category}</h3>
              <div className="space-y-2 w-full max-w-sm mx-auto">
                {items.map((item) => (
                  <div key={item.name} className="menu-item flex justify-between items-center">
                    <h4 className="menu-item-name">{item.name}</h4>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 p-8 rounded-lg" style={{ backgroundColor: '#F5DEB3' }}>
          <p style={{ color: '#2C2C2C', fontSize: '16px' }}>
            <span className="font-semibold">📝 Note:</span> Menu & prices are subject to change. Call us for latest updates or daily specials!
          </p>
        </div>
      </div>
    </section>
  );
}
