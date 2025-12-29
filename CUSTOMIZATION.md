# Customization Guide - Mangal Chai Website

## 🎨 Colors & Branding

### Update Color Scheme

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      chai: '#8B4513',      // Change this
      cream: '#F5DEB3',     // Change this
      dark: '#2C2C2C',      // Change this
      accent: '#D4A574',    // Change this
    },
  },
}
```

Also update `src/index.css`:
```css
:root {
  --color-chai: #8B4513;    /* Your brand color */
  --color-cream: #F5DEB3;   /* Your accent color */
  --color-dark: #2C2C2C;    /* Your text color */
  --color-accent: #D4A574;  /* Your highlight color */
}
```

---

## 📝 Update Content

### Menu Items

Edit `src/components/Menu.jsx`:

```javascript
const menuItems = {
  'Chai Varieties': [
    { 
      name: 'Masala Chai', 
      price: '₹20',                      // Change price
      description: 'Classic spiced tea'  // Change description
    },
    // Add more items...
  ],
};
```

### Contact Information

Edit `src/components/Location.jsx`:

```javascript
// Phone
href="https://wa.me/919876543210"  // Replace with actual number

// Email
href="mailto:mangalchai@example.com"  // Replace with actual email

// Opening Hours
const openingHours = [
  { day: 'Monday - Friday', time: '6:00 PM - 11:00 PM' },  // Update
  // ...
];
```

### Address

In `src/components/Location.jsx`:

```jsx
<p className="text-gray-700 leading-relaxed mb-4">
  Jagatpura, Jaipur          {/* Update location */}
  <br />
  Rajasthan, India           {/* Update state/country */}
</p>
```

### About Section

Edit `src/components/About.jsx`:

```jsx
<p className="text-gray-700 leading-relaxed">
  Mangal Chai isn't just a café...  {/* Update story */}
</p>
```

---

## 📸 Add Real Photos

### Replace Gallery Images

Edit `src/components/Gallery.jsx`:

```javascript
const images = [
  {
    id: 1,
    src: 'https://your-image-url.com/chai.jpg',  // Replace URL
    alt: 'Your alt text',
    caption: 'Your caption',
  },
  // ...
];
```

**Options:**
1. **Use Unsplash** (Free) - Find chai/café images, copy URL
2. **Upload to your server** - Host photos on Netlify
3. **Use local images** - Save to `public/images/` and reference:
   ```jsx
   src="/images/chai.jpg"
   ```

---

## 🌍 Update Google Map

Edit `src/components/Location.jsx`:

```jsx
<iframe
  title="Mangal Chai Location"
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  // ^^ Replace this entire src
/>
```

**How to get Google Maps embed code:**
1. Go to [Google Maps](https://maps.google.com)
2. Search your location
3. Click share → Embed a map
4. Copy the entire URL from `src="..."`
5. Paste in component

---

## 🎵 Add Social Media Links

Edit `src/components/Footer.jsx`:

```jsx
<a href="https://instagram.com/YOUR-HANDLE">  {/* Update handle */}
  📷
</a>

<a href="https://facebook.com/YOUR-PAGE">  {/* Update page */}
  👍
</a>
```

---

## 🔤 Change Website Title & Meta Tags

Edit `index.html`:

```html
<title>Mangal Chai - Best Chai in Jagatpura</title>  {/* Change title */}
<meta name="description" content="Cozy café for chai and good vibes in Jagatpura, Jaipur">  {/* Update description */}
```

---

## 🎯 Customize Hero Section

Edit `src/components/Hero.jsx`:

```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#8B4513' }}>
  Chai. Music. Chill.  {/* Change tagline */}
</h2>

<p className="text-xl md:text-2xl text-gray-700 mb-8">
  A cozy corner in Jagatpura for unwinding  {/* Change subtitle */}
</p>
```

---

## 📱 Responsive Design

The site is already mobile-first. To adjust spacing/sizing:

Edit component files and change Tailwind classes:
- `px-4` → padding left/right (mobile)
- `md:px-8` → padding left/right (tablet+)
- `text-2xl md:text-4xl` → text size (mobile and up)

---

## 🔧 Advanced Customization

### Add New Section

1. Create `src/components/NewSection.jsx`:
```jsx
export default function NewSection() {
  return (
    <section id="newsection" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  );
}
```

2. Import in `src/App.jsx`:
```jsx
import NewSection from './components/NewSection';
```

3. Add to render:
```jsx
<NewSection />
```

4. Add to navigation in `Header.jsx`:
```javascript
const navLinks = [
  // ...
  { label: 'New Section', id: 'newsection' },  // Add
];
```

### Change Fonts

Edit `index.css`:
```css
body {
  font-family: 'Your Font Name', system-ui, sans-serif;
}
```

Then import from Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONT&display=swap" rel="stylesheet">
```

---

## 🚀 Before Deploying

- [ ] Update all contact info
- [ ] Add real café photos
- [ ] Update menu with correct prices
- [ ] Fix opening hours
- [ ] Update social media links
- [ ] Test all links work
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` to verify

---

## 📊 Analytics (Optional)

Add Google Analytics to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 💬 Feedback & Testing

Share deployed link with café owner:
- Test on their phone
- Check image quality
- Verify contact details
- Confirm maps location
- Get feedback on menu layout

---

**Your site is ready to customize! 🎨**
