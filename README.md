# Sanaka Sai Srija — Portfolio

Personal portfolio built with **React + Vite**.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

## 📁 Project Structure

```
src/
├── App.jsx              # Root — assembles all sections
├── main.jsx             # React entry point
├── index.css            # Global styles & keyframe animations
├── data.js              # All content (skills, projects, education…)
├── hooks.js             # Custom hooks (typing, reveal, counter…)
├── photo.js             # Your photo as base64 (auto-generated)
└── components/
    ├── Navbar.jsx / .module.css
    ├── Hero.jsx / .module.css
    ├── Sections.jsx     # About, Skills, Projects, Education, Contact, Footer
    ├── Modal.jsx / .module.css
    ├── Reveal.jsx       # Scroll-reveal wrapper
    ├── StatCounter.jsx  # Animated number counter
    └── Background.jsx   # CursorGlow, Particles, Noise, ScanLine
```

## ✏️ Customisation

- **Content** → edit `src/data.js`
- **Photo** → replace `src/photo.js` with a new base64 export
- **Colors** → search for `#f4b8c8` (pink) and `#080808` (black) across files
- **Fonts** → swap the Google Fonts import in `src/index.css`

## 🚀 Build for Production

```bash
npm run build
# Output in /dist — deploy to Vercel, Netlify, GitHub Pages, etc.
```
