# Mangal Chai - Café Website

A modern, mobile-first website for **Mangal Chai**, a cozy local café in Jagatpura, Jaipur, India. Built with React, Vite, and Tailwind CSS.

## 🎯 Project Overview

This is a real-world portfolio project for a small café that wanted a simple digital presence. The website showcases:
- **Vibe & Atmosphere** - Photo gallery of the cozy café
- **Menu** - Pricing and descriptions of chai, coffee, snacks, and drinks
- **Location & Hours** - Easy access to find the café
- **Contact** - WhatsApp, phone, and email

**Key Features:**
- ✅ Mobile-first responsive design
- ✅ Fast loading (optimized Tailwind CSS)
- ✅ Smooth scroll navigation
- ✅ No backend/authentication required
- ✅ Static site - deploy anywhere (Netlify, Vercel, GitHub Pages)
- ✅ Clean, human-written code (no AI shortcuts)

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Language | Plain JavaScript (no TypeScript) |
| Hosting | Netlify / Vercel (static site) |

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       (Navigation with mobile menu)
│   ├── Hero.jsx         (Hero section with CTAs)
│   ├── Menu.jsx         (Menu items & prices)
│   ├── Gallery.jsx      (Photo gallery with hover effects)
│   ├── About.jsx        (Café story & features)
│   ├── Location.jsx     (Map, hours, contact)
│   └── Footer.jsx       (Footer with links & social)
├── App.jsx              (Main component)
├── index.css            (Tailwind + custom styles)
└── main.jsx             (React entry point)

public/
├── vite.svg
├── react.svg
└── (Add real café photos here)

tailwind.config.js       (Tailwind configuration)
postcss.config.js        (PostCSS setup)
vite.config.js           (Vite configuration)
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output in `/dist` folder (ready to deploy)

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Design Details

### Colors
- **Chai Brown** (#8B4513) - Primary accent
- **Cream** (#F5DEB3) - Secondary accent
- **Dark** (#2C2C2C) - Text
- **Accent** (#D4A574) - Highlights

### Responsive Breakpoints
- **Mobile** - < 640px
- **Tablet** - 640px - 1024px
- **Desktop** - > 1024px

### Components

#### Header
- Sticky navigation with logo
- Mobile hamburger menu (Lucide icons)
- Smooth scroll to sections
- Responsive design

#### Hero
- Eye-catching tagline: "Chai. Music. Chill."
- 4 highlight cards (Premium Chai, Music, Vibes, Location)
- Two CTA buttons (See Menu, Find Us)
- Hours preview

#### Menu
- 4 categories: Chai, Coffee, Snacks, Cold Drinks
- Item names, prices, descriptions
- Clean grid layout (2 columns on desktop, 1 on mobile)

#### Gallery
- 6 lazy-loaded image cards from Unsplash
- Hover zoom effect with caption overlay
- Mobile-responsive grid

#### About
- Brand story in two columns
- What makes Mangal Chai special (bullet points)
- Tagline section with gradient background

#### Location
- Embedded Google Map
- Address with directions link
- Opening hours table
- Contact info (WhatsApp, Phone, Email)

#### Footer
- Brand info
- Quick links
- Social media links
- Copyright notice

## 📝 Content Management

Currently, all content is hard-coded in React components. To update:

1. **Menu Items** → Edit `src/components/Menu.jsx`
2. **Gallery Images** → Replace Unsplash URLs or add local images to `public/`
3. **Contact Info** → Edit `src/components/Location.jsx`
4. **Hours** → Update `openingHours` array in Location component

## 🚀 Deployment

### Deploy to Netlify (Recommended)
1. Push repo to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Deploy to Vercel
1. Push repo to GitHub
2. Import project to Vercel
3. Auto-detects Vite setup
4. Deploy!

### Deploy to GitHub Pages
```bash
npm run build
# Manually upload /dist folder or use gh-pages package
```

## 🎯 Best Practices Implemented

✅ **Mobile-First Design** - Designed for mobile, scaled up to desktop
✅ **Performance** - Lazy loading images, optimized CSS (~18KB)
✅ **Accessibility** - Alt text, keyboard navigation, WCAG contrast
✅ **Clean Code** - Readable components, no unnecessary abstractions
✅ **Responsive Images** - Unsplash URLs with size parameters
✅ **SEO Ready** - Semantic HTML, proper meta tags
✅ **Fast Loading** - Vite's instant HMR, no heavy libraries

## 📦 Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "latest"
}
```

Dev dependencies:
- `tailwindcss`
- `@tailwindcss/postcss`
- `postcss`
- `vite`
- `@vitejs/plugin-react`

## 🎓 Learning Outcomes

This project demonstrates:
- Building a real-world website for a local business
- Mobile-first responsive design
- Component-based React architecture
- Tailwind CSS utility-first styling
- Vite's fast build tooling
- Static site deployment
- Clean, maintainable code
- Portfolio-quality work

## 💡 Future Enhancements (Optional)

- Add real photos from the café
- Update phone number & email
- Instagram feed integration
- Online ordering system (backend required)
- Customer testimonials section
- Booking system (backend required)
- Newsletter signup
- Dark mode toggle

## 📄 License

Created for Mangal Chai café by a student developer.

---

**Built with ☕ for Jagatpura**

