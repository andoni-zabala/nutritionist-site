# Nutritionist Website

A modern, elegant single-page website for nutritionist Sofía Martínez, built with Astro 5.6.0 and featuring smooth scroll animations, responsive design, and an integrated contact form.

![Astro](https://img.shields.io/badge/Astro-5.6.0-FF5D01?style=flat&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)

## Features

- **Modern Design**: Warm earth tones (forest green, sage, terracotta) with elegant typography
- **Scroll Animations**: Progressive content reveal as users scroll
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Contact Form**: Integrated with Netlify Forms for easy lead capture
- **Zero Config Deployment**: Ready to deploy to Netlify, Vercel, or Cloudflare Pages
- **Performance Optimized**: Static site generation for lightning-fast load times
- **Accessible**: WCAG AA compliant with keyboard navigation support

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nutritionist-site.git
cd nutritionist-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Project Structure

```
nutritionist-site/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # UI components (Nav, Hero, Services, etc.)
│   ├── layouts/         # Base HTML layout
│   ├── pages/           # Page routes (index.astro)
│   └── styles/          # Global CSS and design tokens
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies
└── CLAUDE.md           # Comprehensive development guide
```

## Deployment

### Netlify (Recommended)

The easiest way to deploy (required for contact form to work):

**Option 1: Drag & Drop**
```bash
npm run build
# Drag the /dist folder to https://app.netlify.com/drop
```

**Option 2: Git-based (Auto-deploys on push)**
1. Push code to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy! 🚀

### Other Platforms

Works seamlessly with:
- **Vercel**: Connect repository, auto-detects Astro
- **Cloudflare Pages**: Build command `npm run build`, output `dist`
- **GitHub Pages**: Requires additional configuration

> **Note**: Contact form only works with Netlify. For other platforms, you'll need to integrate an alternative form service like Formspree or Web3Forms.

## Customization

### Update Colors

Edit design tokens in [src/styles/global.css](src/styles/global.css):

```css
@theme {
  --color-cream: #FAF7F0;
  --color-forest: #1B3A1A;
  --color-sage: #7A9E68;
  /* ... */
}
```

### Add/Edit Services

Modify the services array in [src/components/Services.astro](src/components/Services.astro):

```javascript
const services = [
  {
    title: 'Your Service',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2'],
    featured: false
  }
];
```

### Update Contact Information

Edit contact details in [src/components/Contact.astro](src/components/Contact.astro).

## Development Guide

For comprehensive development documentation including:
- Design system and color palette
- Component architecture
- Animation system
- Responsive breakpoints
- Accessibility guidelines
- Performance optimization
- Troubleshooting

See **[CLAUDE.md](CLAUDE.md)** for the complete development guide.

## Tech Stack

- **[Astro 5.6.0](https://astro.build)** - Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe development
- **[Netlify Forms](https://www.netlify.com/products/forms/)** - Form handling

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **First Contentful Paint**: < 1s
- **Largest Contentful Paint**: < 2.5s
- **Total Page Size**: ~200KB
- **JavaScript**: ~5KB

## License

This project is proprietary. All rights reserved.

## Support

For questions or issues:
- Check the [Troubleshooting section in CLAUDE.md](CLAUDE.md#troubleshooting)
- Review [Astro Documentation](https://docs.astro.build)
- Open an issue in this repository

---

Built with ❤️ using [Astro](https://astro.build)
