# Protapz - Accounting & Financial Services Website

A comprehensive, modern website for Protapz accounting firm with 12+ services, multiple pages, client testimonials, case studies, and more.

## 🌟 Features

### Pages Included:
1. **Home** - Hero with image, stats, 9 services, industries, testimonials, case studies, blog preview
2. **Services** - 12+ detailed services with pricing tiers
3. **About** - Team, company story, values, awards
4. **Contact** - Multi-office contact form, FAQ

### Content Highlights:
- **9 Core Services** with detailed descriptions
- **9 Industry Specializations** with images
- **6 Client Testimonials** with photos
- **3 Case Studies** with metrics
- **Client Logo Ticker** (10 logos)
- **Blog Preview** (3 articles)
- **Why Choose Us** (6 reasons)
- **Real Stats** with animated counters

### Design:
- Modern dark theme with emerald accents
- Smooth CSS animations (60fps)
- Fully responsive (mobile/tablet/desktop)
- Professional imagery from Unsplash
- Interactive hover effects

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Opens at: `http://localhost:5173`

## 📝 Customization Guide

### 1. Update Contact Information

**Email:** Search and replace `admin@protapz.co.in` with your email
**Phone:** Search and replace `+91 98765 43210` with your number

### 2. Add Your Logo

In `components/Navigation.jsx`:
```jsx
// Replace this:
<span className="gradient-text">Protapz</span>

// With:
<img src="/logo.png" loading="lazy" alt="Protapz" className="h-10" />
```

### 3. Replace Images

**Option A - Use Your Own:**
1. Add images to `/public/images/`
2. Replace Unsplash URLs with `/images/your-photo.jpg`

**Option B - Keep Unsplash:**
- Images load automatically from Unsplash CDN
- No files needed, works out of the box

### 4. Update Services

Edit `pages/Home.jsx` - find the `services` array:
```javascript
const services = [
  {
    title: "Your Service",
    description: "Description here",
    // ... customize
  }
]
```

### 5. Add Team Members

Edit `pages/About.jsx` - find the `team` array and add/modify profiles

### 6. Update Testimonials

Edit `pages/Home.jsx` - find the `testimonials` array

## 📂 Project Structure

```
protapz-website/
├── components/
│   ├── Navigation.jsx    # Header with logo
│   └── Footer.jsx        # Footer with links
├── pages/
│   ├── Home.jsx          # Main landing page
│   ├── Services.jsx      # Services & pricing
│   ├── About.jsx         # About company
│   └── Contact.jsx       # Contact form
├── App.jsx               # Router
├── main.jsx              # Entry point
├── styles.css            # Global styles
└── index.html            # HTML template
```

## 🎨 Color Scheme

Primary: Emerald (#10b981) to Teal (#14b8a6)
Background: Slate-950 (#020617)
Text: White/Slate-300

## 📱 Responsive

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended - Free):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Traditional Hosting:
```bash
npm run build
# Upload 'dist' folder via FTP
```

## 🛠 Tech Stack

- React 18
- React Router 6
- Tailwind CSS (CDN)
- Vite
- Lucide Icons

## 📧 Support

Email: admin@protapz.co.in
Phone: +91 98765 43210

---

Built with ❤️ for Indian businesses | © 2026 Protapz
# protapz-website
# protapz-website
