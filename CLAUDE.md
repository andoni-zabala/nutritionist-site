# Nutritionist Website — Development Guide

> Comprehensive documentation for the Sofía Martínez Nutritionist website built with Astro 5.6.0

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Component Architecture](#component-architecture)
6. [Animation System](#animation-system)
7. [Responsive Design](#responsive-design)
8. [UI Patterns Library](#ui-patterns-library)
9. [Code Conventions](#code-conventions)
10. [Common Tasks](#common-tasks)
11. [Development Workflow](#development-workflow)
12. [Accessibility Guidelines](#accessibility-guidelines)
13. [Performance Considerations](#performance-considerations)
14. [Special Features](#special-features)
15. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a **single-page marketing website** for a registered nutritionist, built with Astro's static site generation capabilities. The site emphasizes:

- **Elegant, natural aesthetic** with warm earth tones (forest green, sage, terracotta)
- **Scroll-based reveal animations** for progressive content discovery
- **Evidence-based positioning** targeting health-conscious individuals
- **Mobile-first responsive design** with careful attention to typography and spacing

### Key Features

- Services showcase with featured options
- Client testimonials
- Contact form with Netlify Forms integration
- Professional credentials display
- Philosophy/approach section
- Smooth scroll animations and micro-interactions

---

## Tech Stack

```
Framework:     Astro 5.6.0 (Static Site Generator)
Styling:       Tailwind CSS v4 + Custom CSS
Language:      TypeScript (minimal client-side JavaScript)
Forms:         Netlify Forms integration
Deployment:    Ready for static hosting (Netlify, Vercel, Cloudflare Pages)
Node:          Compatible with Node 18+
```

### Why Astro?

- **Zero JavaScript by default**: Optimal performance with client-side JS only where needed
- **Component-based**: Familiar patterns for modern developers
- **Fast builds**: Static generation means quick builds and instant page loads
- **Flexible**: Can integrate React, Vue, Svelte components if needed (though this project uses pure Astro)

---

## Project Structure

```
nutritionist-site/
├── public/                    # Static assets (favicon, images)
│   └── favicon.svg
├── src/
│   ├── components/            # All UI components
│   │   ├── Nav.astro          # Fixed navigation with scroll effects
│   │   ├── Hero.astro         # Landing section with stats & photo placeholder
│   │   ├── About.astro        # About + credentials grid
│   │   ├── Services.astro     # Service cards with featured option
│   │   ├── Philosophy.astro   # Approach/principles (dark background)
│   │   ├── Testimonials.astro # Client testimonials carousel
│   │   ├── Contact.astro      # Contact form + contact details
│   │   └── Footer.astro       # Site footer with links
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout (meta, fonts, scripts)
│   ├── pages/
│   │   └── index.astro        # Main page (single-page site)
│   └── styles/
│       └── global.css         # Design tokens, utilities, animations
├── astro.config.mjs           # Astro configuration with Tailwind
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

---

## Design System

### Color Palette

All colors are defined as CSS custom properties in [src/styles/global.css](src/styles/global.css):

```css
/* Neutrals */
--color-cream: #FAF7F0           /* Main background, light text on dark */
--color-cream-dark: #EDE6DA       /* Borders, subtle contrast backgrounds */
--color-ink: #1A1A18              /* Body text, dark text */

/* Brand - Forest */
--color-forest: #1B3A1A           /* Primary brand, headings, CTA backgrounds */
--color-forest-mid: #2D5C2A        /* Hover states for buttons/links */

/* Accent - Sage */
--color-sage: #7A9E68             /* Secondary accents, tags, focus states */
--color-sage-light: #B5CFA8        /* Light accents on dark backgrounds */

/* Accent - Terra & Gold */
--color-terra: #C8603A            /* Emphasis (italics), featured elements */
--color-gold: #BF8C40             /* Decorative icons, badges */
```

#### Color Usage Guidelines

| Color | When to Use |
|-------|-------------|
| **Cream** | Page backgrounds, light surfaces, text on dark backgrounds |
| **Forest** | Primary CTAs, main headings, navigation active states, primary buttons |
| **Sage** | Section tags, subtle accents, form focus states, secondary elements |
| **Terra** | Italicized emphasis words, featured card accents, warm highlights |
| **Gold** | Decorative icons (stars, badges), premium elements |
| **Ink** | Body text, regular headings, dark text elements |

### Typography

Two font families for distinct hierarchy:

```css
--font-display: 'Cormorant Garant', Georgia, serif    /* Headings, quotes, elegant text */
--font-sans: 'DM Sans', system-ui, sans-serif          /* Body, UI elements, forms */
```

#### Heading Scale

Using `clamp()` for fluid responsive sizing:

```css
h1: clamp(3.2rem, 5.5vw, 6rem)      /* Hero heading (52px → 96px) */
h2: clamp(2.4rem, 3.5vw, 3.6rem)    /* Section headings (38px → 58px) */
h3: 1.5rem                           /* Card/component headings (24px) */
h4: 1.125rem                         /* Small headings (18px) */
```

#### Body Text Sizes

```css
Body (regular):    1rem (16px), line-height: 1.75
Large body:        1.05rem (17px), line-height: 1.75
Small text:        0.82-0.9rem (13-14px)
Tiny labels:       0.7-0.75rem (11-12px), usually uppercase with letter-spacing
```

#### Font Weight Conventions

**Display font (Cormorant Garant):**
- 300 (light): Decorative large text
- 400 (regular): Default for headings
- 500 (medium): Emphasized headings
- 600 (semibold): Strong emphasis

**Sans font (DM Sans):**
- 300 (light): Body text (default)
- 400 (regular): Standard UI text
- 500 (medium): Buttons, labels, strong text

#### Letter Spacing

```css
Headings:          -0.015em to 0.02em (tight to slightly open)
Body text:         0.02em (subtle openness for readability)
Uppercase labels:  0.1em to 0.18em (high letter-spacing for elegance)
Button text:       0.06em (slightly open for clarity)
```

### Spacing & Layout

#### Section Padding

```css
/* Desktop */
padding: 8rem 2.5rem;              /* Generous vertical, moderate horizontal */

/* Mobile */
padding: 5rem 1.5rem;              /* Reduced but still comfortable */
```

#### Container Max-Width

```css
max-width: 1360px;                 /* Centered with margin: 0 auto */
```

#### Grid Gaps

```css
Large gaps:    5-7rem               /* Between major two-column sections */
Medium gaps:   1.5-3rem             /* Component grids, card layouts */
Small gaps:    0.5-1.5rem           /* Within components, list items */
```

#### Border Radius

```css
Cards:          20px                /* Large, modern rounded corners */
Buttons:        100px               /* Pill shape (fully rounded) */
Form inputs:    10px                /* Subtle rounding */
Small elements: 14-16px             /* Floating cards, badges */
```

---

## Component Architecture

### Standard Astro Component Pattern

Every `.astro` component follows this structure:

```astro
---
// === FRONTMATTER (Server-side, runs at build time) ===

// 1. Imports
import Layout from '../layouts/Layout.astro';
import OtherComponent from './OtherComponent.astro';

// 2. TypeScript interfaces (if accepting props)
interface Props {
  title?: string;
  featured?: boolean;
}

// 3. Data arrays/objects (for lists, services, testimonials, etc.)
const items = [
  {
    title: 'Service Name',
    description: 'Service description',
    icon: '🌿',
    featured: false,
  },
  // ... more items
];

// 4. Extract props with defaults
const { title = 'Default Title', featured = false } = Astro.props;
---

<!-- === TEMPLATE (HTML-like with JSX expressions) === -->
<section class="component-name">
  <div class="component-inner">
    <h2>{title}</h2>

    <!-- Use .map() for arrays -->
    {items.map((item) => (
      <div class={`item ${item.featured ? 'item--featured' : ''}`}>
        <span class="icon">{item.icon}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>

<!-- === STYLES (Scoped to this component) === -->
<style>
  .component-name {
    /* Section-level styles */
  }

  .component-inner {
    /* Container styles */
  }

  .item {
    /* Base item styles */
  }

  .item--featured {
    /* Modifier for featured items */
  }
</style>

<!-- === SCRIPT (Client-side JavaScript, optional) === -->
<script>
  // Runs on each component instance in the browser
  // Only include if you need client-side interactivity
  const buttons = document.querySelectorAll('.component-name .button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('Clicked!');
    });
  });
</script>
```

### Data Structure Patterns

For lists of items (services, testimonials, credentials):

```typescript
// Services pattern
const services = [
  {
    title: string,           // Service name
    description: string,     // Service description
    features: string[],      // List of features/benefits
    featured?: boolean,      // Optional flag for special styling
  }
];

// Testimonials pattern
const testimonials = [
  {
    quote: string,           // Testimonial text
    name: string,            // Client name
    role: string,            // Client role/context
  }
];

// Simple list pattern (Philosophy, Credentials)
const items = [
  {
    title: string,
    description: string,
    icon?: string,           // Emoji or symbol
  }
];
```

### Class Naming Convention

Follow BEM-adjacent naming with component prefixes:

```css
/* Component (block) */
.hero { }
.nav { }
.service-card { }

/* Element (child of component) */
.hero-heading { }
.hero-body { }
.nav-logo { }
.nav-links { }

/* Modifier (variant of component or element) */
.service-card--featured { }
.btn-primary--light { }
.section-tag--light { }

/* State (dynamic class added by JavaScript) */
.nav.scrolled { }
.reveal.visible { }
```

### Scoped Styles

Astro automatically scopes styles within `<style>` tags to prevent leakage:

```astro
<style>
  /* This .title class only affects elements in THIS component */
  .title {
    color: var(--color-forest);
  }
</style>
```

**Exceptions (global styles):**
- Use [src/styles/global.css](src/styles/global.css) for:
  - Design tokens (CSS custom properties)
  - Utility classes (`.reveal`, `.btn-primary`, `.section-tag`)
  - Global resets and body styles

---

## Animation System

### Scroll Reveal Pattern

Elements fade in and slide up when they enter the viewport.

#### HTML Usage

```html
<!-- Basic reveal (fades in when 8% visible) -->
<div class="reveal">
  <h2>This fades in</h2>
</div>

<!-- With delay (creates cascading effect) -->
<div class="reveal reveal-delay-1">First (0.1s delay)</div>
<div class="reveal reveal-delay-2">Second (0.2s delay)</div>
<div class="reveal reveal-delay-3">Third (0.3s delay)</div>
<div class="reveal reveal-delay-4">Fourth (0.45s delay)</div>
<div class="reveal reveal-delay-5">Fifth (0.6s delay)</div>
```

#### CSS Implementation

Located in [src/styles/global.css](src/styles/global.css:54-70):

```css
.reveal {
  opacity: 0;
  transform: translateY(28px);        /* Starts 28px below */
  transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);            /* Animates to original position */
}

/* Delay variants */
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.45s; }
.reveal-delay-5 { transition-delay: 0.6s; }
```

#### JavaScript (IntersectionObserver)

Located in [src/layouts/Layout.astro](src/layouts/Layout.astro:34-48):

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);        // Stop observing after reveal
      }
    });
  },
  { threshold: 0.08 }                            // Trigger when 8% visible
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

**Threshold explanation:** `0.08` means the animation triggers when 8% of the element is visible. Adjust if needed for taller elements.

### Hover Animations

Consistent hover effects across the site:

#### Buttons

```css
.btn-primary:hover {
  background: var(--color-forest-mid);           /* Darker shade */
  transform: translateY(-2px);                   /* Lift up 2px */
  box-shadow: 0 8px 28px rgba(27, 58, 26, 0.28); /* Add shadow */
}
```

#### Cards

```css
.card:hover {
  transform: translateY(-4px);                   /* Lift up 4px (more than buttons) */
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);   /* Enhanced shadow */
}
```

#### Links

```css
.hero-link {
  transition: gap 0.2s ease;
}

.hero-link:hover {
  gap: 0.65rem;                                  /* Increase gap (arrow moves right) */
}
```

#### Standard Timing

```css
Fast interactions:   0.2s ease
Medium interactions: 0.25-0.3s ease
Reveals:             0.75s cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Responsive Design

### Breakpoints

```css
@media (max-width: 1024px) { /* Desktop → Tablet */ }
@media (max-width: 768px)  { /* Tablet → Mobile nav */ }
@media (max-width: 640px)  { /* Form layouts stack */ }
@media (max-width: 480px)  { /* Mobile optimization */ }
```

### Responsive Patterns

#### 1024px Breakpoint (Desktop → Tablet)

**Common changes:**
- Two-column grids → single column
- Floating cards/decorative elements hide
- Centered text alignment
- Reduced gaps

```css
/* Desktop */
.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .about-inner {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    text-align: center;
  }
}
```

#### 768px Breakpoint (Tablet → Mobile Nav)

**Changes:**
- Desktop navigation → hamburger menu
- Mobile menu overlay appears

#### 640px Breakpoint (Form Layouts)

**Changes:**
- Two-column form rows → stack vertically

```css
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 640px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
```

#### 480px Breakpoint (Mobile Optimization)

**Changes:**
- Further reduced padding
- Smaller font sizes (via clamp minimum)
- Tighter spacing

```css
@media (max-width: 480px) {
  .hero {
    padding: 5.5rem 1.5rem 3rem;
  }
}
```

### Mobile-First Grid Strategy

Start with single column, expand on desktop:

```css
/* Mobile first (default) */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Desktop */
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## UI Patterns Library

Copy-paste patterns for common UI elements.

### Buttons

#### Primary Button (Filled)

```html
<a href="#contact" class="btn-primary">Book a Free Consultation</a>
```

```css
/* Styles in global.css */
.btn-primary {
  background: var(--color-forest);
  color: var(--color-cream);
  padding: 0.875rem 2rem;
  border-radius: 100px;              /* Pill shape */
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.06em;
}
```

#### Outline Button

```html
<a href="#services" class="btn-outline">Learn More</a>
```

```css
.btn-outline {
  background: transparent;
  color: var(--color-forest);
  border: 1.5px solid var(--color-forest);
  padding: 0.875rem 2rem;
  border-radius: 100px;
}
```

#### Light Button (On Dark Backgrounds)

```html
<a href="#" class="btn-primary btn-primary--light">Get Started</a>
```

Add custom styles in component for light variant.

### Section Tag

Decorative label above section headings:

```html
<div class="section-tag">About Me</div>
<h2>My approach to nutrition</h2>
```

```css
/* Styles in global.css */
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-sage);
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.section-tag::before {
  content: '';
  width: 32px;                       /* Decorative line */
  height: 1px;
  background: var(--color-sage);
}
```

For light backgrounds (in dark sections), add class `.section-tag--light`.

### Cards

#### Basic Card

```html
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-description">Card description text...</p>
</div>
```

```css
.card {
  background: white;
  border-radius: 20px;
  padding: 2.25rem;
  border: 1.5px solid var(--color-cream-dark);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08);
}
```

#### Featured Card (Inverted)

```html
<div class="card card--featured">
  <h3 class="card-title">Featured Service</h3>
  <p class="card-description">...</p>
</div>
```

```css
.card--featured {
  background: var(--color-forest);
  border-color: var(--color-forest);
  color: var(--color-cream);
}
```

### Form Inputs

```html
<div class="form-group">
  <label for="name">Your Name</label>
  <input type="text" id="name" name="name" placeholder="Jane Smith" required />
</div>
```

Styles automatically apply from [src/components/Contact.astro](src/components/Contact.astro):

```css
.form-group input,
.form-group textarea,
.form-group select {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  background: var(--color-cream);
  border: 1.5px solid var(--color-cream-dark);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus {
  border-color: var(--color-sage);
  box-shadow: 0 0 0 3px rgba(122, 158, 104, 0.12);    /* Sage glow */
  outline: none;
}
```

---

## Code Conventions

### Style Guide

- **CSS semicolons**: Always use semicolons (enforced by Tailwind)
- **Responsive sizing**: Prefer `clamp()` for fluid typography
- **Design tokens**: Use CSS custom properties, never hard-code colors
- **Scoped styles**: Keep component styles within `<style>` tags
- **TypeScript**: Use interfaces for props and data structures
- **Semantic HTML**: Use `<section>`, `<article>`, `<nav>`, `<main>`, etc.

### File Naming

```
Components:  PascalCase.astro     (Hero.astro, Nav.astro)
Pages:       lowercase.astro      (index.astro, about.astro)
Styles:      lowercase.css        (global.css)
```

### Import Order

```astro
---
// 1. Layout imports
import Layout from '../layouts/Layout.astro';

// 2. Component imports (alphabetical)
import About from '../components/About.astro';
import Contact from '../components/Contact.astro';
import Hero from '../components/Hero.astro';

// 3. Data/interfaces
interface Props {
  title?: string;
}

const data = [...];
---
```

### CSS Property Order

```css
.element {
  /* Positioning */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  /* Box model */
  display: flex;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  /* Typography */
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-ink);

  /* Visual */
  background: white;
  border: 1px solid;
  border-radius: 10px;

  /* Animation */
  transition: all 0.3s ease;
}
```

---

## Common Tasks

### Adding a New Section Component

1. **Create component file** in `src/components/`:

```bash
touch src/components/NewSection.astro
```

2. **Use component template**:

```astro
---
const items = [
  { title: 'Item 1', description: 'Description...' },
];
---

<section class="new-section">
  <div class="new-section-inner">
    <div class="section-tag reveal">New Section</div>
    <h2 class="reveal reveal-delay-1">Section Heading</h2>

    <div class="items-grid">
      {items.map((item) => (
        <div class="item reveal reveal-delay-2">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<style>
  .new-section {
    max-width: 1360px;
    margin: 0 auto;
    padding: 8rem 2.5rem;
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1024px) {
    .new-section {
      padding: 5rem 2.5rem;
    }

    .items-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

3. **Import in** [src/pages/index.astro](src/pages/index.astro):

```astro
---
import NewSection from '../components/NewSection.astro';
---

<Layout>
  <Nav />
  <main>
    <Hero />
    <NewSection />  <!-- Add here -->
    <Contact />
  </main>
  <Footer />
</Layout>
```

4. **Add nav link** (if needed) in [src/components/Nav.astro](src/components/Nav.astro):

```html
<a href="#new-section">New Section</a>
```

### Updating Colors (Design Tokens)

Edit [src/styles/global.css](src/styles/global.css:3-16):

```css
@theme {
  --color-cream: #FAF7F0;           /* Change color value here */
  --color-forest: #1B3A1A;
  /* ... */
}
```

All components using `var(--color-forest)` will update automatically.

### Adding Services/Testimonials

Edit the data array in the component's frontmatter:

**Example:** [src/components/Services.astro](src/components/Services.astro)

```astro
---
const services = [
  {
    title: 'New Service',
    description: 'Service description here...',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    featured: false,              // Set to true for featured styling
  },
  // Add more services...
];
---
```

The component will automatically render the new service with `.map()`.

### Updating the Contact Form

Edit [src/components/Contact.astro](src/components/Contact.astro):

```html
<form name="contact" netlify>
  <!-- Keep netlify attribute for Netlify Forms -->

  <div class="form-group">
    <label for="new-field">New Field</label>
    <input type="text" id="new-field" name="new-field" required />
  </div>

  <!-- Add more fields... -->
</form>
```

**Important:** All inputs must have `name` attributes for Netlify Forms to work.

---

## Development Workflow

### Commands

```bash
# Development
npm run dev          # Start dev server → http://localhost:4321

# Production
npm run build        # Build static site → /dist folder
npm run preview      # Preview production build locally
```

### Pre-Deployment Checklist

Before deploying to production:

- [ ] **Test animations**: Scroll through page, verify all `.reveal` elements animate
- [ ] **Test responsive layouts**: Check at 1024px, 768px, 640px, 480px breakpoints
- [ ] **Test navigation**: Mobile menu toggle, smooth scroll to anchors
- [ ] **Test form submission**: Forms only work on Netlify (not localhost)
- [ ] **Verify links**: All internal anchors (`#about`, `#contact`) work
- [ ] **Test accessibility**: Keyboard navigation (Tab key), focus states visible
- [ ] **Run build**: `npm run build` should complete without errors
- [ ] **Check bundle size**: Run `du -sh dist/` (should be < 1MB for this site)

### Git Workflow

```bash
# Make changes
git status
git add src/components/NewComponent.astro
git commit -m "Add new component for X feature"

# Push to remote
git push origin main
```

---

## Accessibility Guidelines

### Required Practices

- **Semantic HTML**: Use `<section>`, `<article>`, `<nav>`, `<main>`, `<footer>`
- **ARIA labels**: Add `aria-label` to icon-only buttons
- **Focus states**: Ensure all interactive elements have visible focus states
- **Decorative elements**: Use `aria-hidden="true"` on non-semantic elements (orbs, decorative SVGs)
- **Alt text**: Add descriptive `alt` text when images are added
- **Color contrast**: Maintain WCAG AA standards (4.5:1 for normal text)
- **Keyboard navigation**: Test with Tab, Enter, Space keys

### Existing Implementations

✅ **Nav toggle** has `aria-expanded` state:

```html
<button id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
```

✅ **Form labels** use proper `for` attribute:

```html
<label for="name">Your Name</label>
<input type="text" id="name" name="name" />
```

✅ **Focus states** on form inputs ([Contact.astro](src/components/Contact.astro:264-268)):

```css
input:focus {
  border-color: var(--color-sage);
  box-shadow: 0 0 0 3px rgba(122, 158, 104, 0.12);  /* Visible ring */
  outline: none;
}
```

✅ **Decorative SVGs** marked hidden:

```html
<svg aria-hidden="true">...</svg>
```

### Testing Accessibility

Run automated checks:

```bash
npx @axe-core/cli http://localhost:4321
```

Manual testing:
1. Navigate entire site using only keyboard (Tab, Shift+Tab, Enter)
2. Test with screen reader (VoiceOver on macOS, NVDA on Windows)
3. Verify color contrast with browser DevTools

---

## Performance Considerations

### Astro Optimizations (Built-in)

- **Zero JavaScript by default**: Only ships JS where needed (nav toggle, scroll reveals)
- **Automatic CSS scoping**: No bloated global styles
- **Static generation**: Pre-rendered HTML = instant page loads
- **Font preconnecting**: Google Fonts preconnected in [Layout.astro](src/layouts/Layout.astro:24-29)

### Best Practices

**Images (when added):**
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<Image src={heroImage} alt="Description" loading="lazy" />
```

**Animations:**
- Keep CSS-only when possible (better performance than JS)
- Use `transform` and `opacity` (GPU-accelerated properties)
- Avoid animating `width`, `height`, `top`, `left` (causes reflow)

**JavaScript:**
- Minimize client-side scripts
- Use IntersectionObserver efficiently (unobserve after reveal)
- Avoid heavy libraries (this site has zero dependencies)

### Performance Budgets

**Target metrics:**
- First Contentful Paint (FCP): < 1s
- Largest Contentful Paint (LCP): < 2.5s
- Total page size: < 1MB (currently ~200KB)
- JavaScript: < 50KB (currently ~5KB)

Check with Lighthouse in Chrome DevTools.

---

## Special Features

### Grain Texture Overlay

A subtle SVG noise texture overlays the entire page for an organic, print-like feel.

**Implementation:** [src/styles/global.css](src/styles/global.css:36-46)

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;                          /* Cover entire viewport */
  pointer-events: none;               /* Don't block interactions */
  z-index: 9999;                      /* Above all content */
  opacity: 0.028;                     /* Very subtle */
  background-image: url("data:image/svg+xml,...");  /* Inline SVG noise */
  background-size: 280px;
}
```

This creates a film grain effect without requiring an external image file.

### Smooth Scroll

Enabled globally in [global.css](src/styles/global.css:24-26):

```css
html {
  scroll-behavior: smooth;
}
```

All anchor links (`#about`, `#contact`) scroll smoothly.

### Intersection Observer (Scroll Reveals)

Efficiently detects when elements enter the viewport.

**Location:** [src/layouts/Layout.astro](src/layouts/Layout.astro:35-48)

**How it works:**
1. On page load, observe all `.reveal` elements
2. When element is 8% visible (`threshold: 0.08`), add `.visible` class
3. CSS transition animates opacity and transform
4. Unobserve element after reveal (performance optimization)

---

## Troubleshooting

### Animations Not Working

**Symptom:** Elements with `.reveal` class don't animate on scroll

**Checklist:**
- [ ] `.reveal` class is applied in HTML
- [ ] IntersectionObserver script is in [Layout.astro](src/layouts/Layout.astro)
- [ ] No JavaScript errors in console
- [ ] Element is not already visible on page load (adjust threshold if needed)
- [ ] CSS transitions are defined in [global.css](src/styles/global.css:54-70)

**Fix for large elements:**
If a large element never reaches 8% visibility, lower the threshold:

```javascript
{ threshold: 0.05 }  // Changed from 0.08
```

### Styles Not Applying

**Symptom:** CSS changes don't appear

**Checklist:**
- [ ] Styles are inside `<style>` tag within component
- [ ] Class names match exactly (check for typos)
- [ ] CSS custom properties are defined in [global.css](src/styles/global.css:3-16)
- [ ] Browser cache cleared (Cmd+Shift+R or Ctrl+Shift+R)
- [ ] Dev server restarted (`npm run dev`)

**Scoping issue:**
If styles should be global, move them to [global.css](src/styles/global.css). If they should be scoped, keep them in component `<style>` tag.

### Mobile Menu Not Toggling

**Symptom:** Hamburger menu doesn't open/close

**Checklist:**
- [ ] JavaScript in [Nav.astro](src/components/Nav.astro) `<script>` tag is present
- [ ] IDs match: `#nav-toggle` button and `#mobile-menu` element
- [ ] No JavaScript errors in console
- [ ] Testing at correct breakpoint (< 768px)

**Fix:**
Check that IDs match in both HTML and JavaScript:

```html
<button id="nav-toggle">...</button>
<div id="mobile-menu">...</div>
```

```javascript
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
```

### Form Not Submitting

**Symptom:** Contact form doesn't submit

**Checklist:**
- [ ] `netlify` attribute on `<form>` tag
- [ ] All inputs have `name` attributes
- [ ] Testing on Netlify deployment (forms don't work on localhost)
- [ ] No `action` attribute on form (Netlify handles this)

**Example:**
```html
<form name="contact" netlify>
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form>
```

**Note:** Netlify Forms only work on deployed sites, not during local development.

### Build Errors

**Symptom:** `npm run build` fails

**Common causes:**
- TypeScript errors (check component props)
- Missing imports
- Syntax errors in frontmatter

**Fix:**
Read error message carefully. TypeScript errors will show file and line number. Example:

```
src/components/Hero.astro:12:5 - error TS2322: Type 'string' is not assignable to type 'number'.
```

Fix the type mismatch at line 12 in Hero.astro.

---

## Additional Resources

- **Astro Documentation**: https://docs.astro.build
- **Tailwind CSS v4**: https://tailwindcss.com/docs
- **Netlify Forms**: https://docs.netlify.com/forms/setup/
- **Web Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Questions or issues?** Check the [Troubleshooting](#troubleshooting) section or consult the Astro Discord community.
