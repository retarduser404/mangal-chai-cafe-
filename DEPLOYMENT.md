# Deployment Guide - Mangal Chai Website

## Option 1: Deploy to Netlify (Recommended for Beginners)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Mangal Chai website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR-USERNAME/mangalchai.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub, authorize, and choose your repo
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy"

✅ Your site is live! Netlify generates a URL like `https://mangalchai.netlify.app`

---

## Option 2: Deploy to Vercel

### Step 1: Push to GitHub (same as above)

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repo
4. Vercel auto-detects Vite setup
5. Click "Deploy"

✅ Live at `https://mangalchai.vercel.app`

---

## Option 3: Manual Deployment (Advanced)

### Build the project:
```bash
npm run build
```

This creates a `/dist` folder with static files.

### Upload to any web host:
- **AWS S3** - Upload `/dist` folder
- **GitHub Pages** - Use `gh-pages` package
- **Shared hosting** - FTP upload `/dist` folder
- **Firebase Hosting** - `firebase deploy`

---

## Custom Domain Setup

After deploying, add a custom domain:

### Netlify:
1. Go to Site settings → Domain management
2. Add custom domain (e.g., `mangalchai.com`)
3. Update DNS settings with your registrar

### Vercel:
1. Project settings → Domains
2. Add domain
3. Update DNS records

---

## Environment Variables (if needed)

Create `.env.local` in project root:
```
VITE_CONTACT_PHONE=+919876543210
VITE_CONTACT_EMAIL=hello@mangalchai.com
```

Use in code:
```jsx
const phone = import.meta.env.VITE_CONTACT_PHONE;
```

---

## Post-Deployment Checklist

- [ ] Test all links (navigation, maps, contact)
- [ ] Test on mobile, tablet, desktop
- [ ] Check page loads fast (< 3 seconds)
- [ ] Verify images load properly
- [ ] Test smooth scrolling
- [ ] Ensure responsiveness
- [ ] Check Google Maps embed works
- [ ] Test WhatsApp/Phone links

---

## Continuous Deployment

Once connected to Netlify/Vercel, every push to GitHub automatically deploys!

```bash
# Make changes locally
git add .
git commit -m "Update menu prices"
git push origin main

# Site updates automatically in ~30 seconds
```

---

## Performance Tips

After deployment, optimize for speed:

1. **Minify images** - Use WebP format
2. **Cache headers** - Set in Netlify/Vercel settings
3. **CDN** - Netlify/Vercel auto-provides CDN
4. **Monitoring** - Set up Netlify Analytics

---

## Need Help?

- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/guide/static-deploy.html

---

**Your Mangal Chai website is ready for the world! ☕**
