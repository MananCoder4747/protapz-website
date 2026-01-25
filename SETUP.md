# Protapz Website - Quick Setup Guide

## 🚀 Installation

```bash
# Navigate to project folder
cd protapz-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Your website will open at `http://localhost:5173`

## ✅ What's Included

- **Home Page**: Hero, stats, 9 services, case studies, testimonials, blog, industries
- **Services Page**: 12+ detailed services with pricing
- **About Page**: Company story, team, values, awards
- **Contact Page**: Multi-location form, offices, FAQ

## 🎨 Customization

**Update Company Info:**
- Email: Search for `admin@protapz.co.in` and replace
- Phone: Search for `+91 98765 43210` and replace
- Logo: Replace "Protapz" text in Navigation.jsx with your logo image

**Add Your Logo:**
```jsx
// In components/Navigation.jsx
<img src="/path-to-your-logo.png" alt="Protapz" className="h-8" />
```

## 📸 Adding Real Photos

Replace Unsplash placeholder URLs with your own images:
1. Add images to `/public/images/` folder
2. Update image src: `src="/images/your-photo.jpg"`

## 🌐 Deployment

```bash
npm run build
# Upload 'dist' folder to your hosting
```

**Recommended Hosts:**
- Vercel (free, instant)
- Netlify (free)
- Hostinger/GoDaddy

---
Built with ❤️ for Indian businesses
