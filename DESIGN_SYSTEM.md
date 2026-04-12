# Andersens Audit NSW — Tailwind Design System

A professional, trust-focused design system for a corporate audit firm in Australia.

---

## 1. Color Palette

### Primary Colors
```
Navy Blue (Primary):     #1e3a8a  →  bg-blue-900 / text-blue-900
Navy Medium:             #2563eb  →  bg-blue-600 / text-blue-600
Navy Light:              #3b82f6  →  bg-blue-500 / text-blue-500
```

### Neutral Colors
```
White:                   #ffffff  →  bg-white / text-white
Light Grey (bg):         #f8fafc  →  bg-slate-50
Soft Grey:               #f1f5f9  →  bg-slate-100
Border Grey:             #e2e8f0  →  border-slate-200
Text Grey:               #64748b  →  text-slate-500
Dark Grey:               #334155  →  text-slate-700
Charcoal:                #0f172a  →  text-slate-900
```

### Accent Colors
```
Success Green:           #059669  →  bg-emerald-600
Alert Gold:              #d97706  →  bg-amber-600
```

### Usage Guidelines
- **Backgrounds**: `bg-white`, `bg-slate-50`, `bg-slate-100`
- **Primary Actions**: `bg-blue-900`, `hover:bg-blue-800`
- **Text**: `text-slate-900` (headings), `text-slate-700` (body), `text-slate-500` (secondary)
- **Borders**: `border-slate-200`, `divide-slate-200`

---

## 2. Typography Pairing (Google Fonts)

### Selected Fonts
```jsx
// In your index.html or CSS:
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Crimson+Pro:wght@600;700&display=swap');
```

**Headings**: Crimson Pro (serif) — professional, authoritative, traditional  
**Body**: Inter (sans-serif) — clean, modern, highly readable

### Tailwind Configuration
Add to `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Crimson Pro', 'Georgia', 'serif'],
      }
    }
  }
}
```

---

## 3. Heading Scale

```jsx
// H1 - Hero Headlines
className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-900"

// H2 - Section Titles
className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight text-slate-900"

// H3 - Subsection Titles / Service Cards
className="font-serif font-semibold text-2xl md:text-3xl leading-snug text-slate-900"

// H4 - Card Titles / Names
className="font-sans font-semibold text-xl md:text-2xl leading-snug text-slate-900"

// H5 - Small Headers
className="font-sans font-semibold text-lg md:text-xl leading-normal text-slate-900"

// H6 - Overline / Labels
className="font-sans font-semibold text-sm uppercase tracking-wider text-slate-600"
```

---

## 4. Body Text Style

```jsx
// Primary Body (paragraphs)
className="font-sans text-base md:text-lg leading-relaxed text-slate-700"

// Secondary Body (supporting text)
className="font-sans text-sm md:text-base leading-relaxed text-slate-600"

// Small Print (footer, disclaimers)
className="font-sans text-sm leading-normal text-slate-500"

// Lead Text (intro paragraphs)
className="font-sans text-lg md:text-xl leading-relaxed text-slate-700 font-normal"

// List Items
className="font-sans text-base md:text-lg leading-relaxed text-slate-700 space-y-3"
```

**Line Height Guidelines**:
- Use `leading-relaxed` (1.625) for body text
- Use `leading-tight` (1.25) for large headings
- Use `leading-snug` (1.375) for smaller headings

---

## 5. Button Variants

### Primary Button
```jsx
className="inline-flex items-center justify-center px-8 py-4 
           bg-blue-900 text-white font-sans font-semibold text-base 
           rounded-md shadow-sm 
           hover:bg-blue-800 hover:shadow-md 
           transition-all duration-200 
           focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
```

### Secondary Button
```jsx
className="inline-flex items-center justify-center px-8 py-4 
           bg-slate-100 text-slate-900 font-sans font-semibold text-base 
           rounded-md border border-slate-200 
           hover:bg-slate-200 hover:border-slate-300 
           transition-all duration-200 
           focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
```

### Outline Button
```jsx
className="inline-flex items-center justify-center px-8 py-4 
           bg-transparent text-blue-900 font-sans font-semibold text-base 
           rounded-md border-2 border-blue-900 
           hover:bg-blue-900 hover:text-white 
           transition-all duration-200 
           focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
```

### Text Link Button (Tertiary)
```jsx
className="inline-flex items-center gap-2 
           text-blue-900 font-sans font-semibold text-base 
           hover:text-blue-700 hover:gap-3 
           transition-all duration-200 
           focus:outline-none focus:underline"
```

**Button Sizing**:
- Large: `px-8 py-4 text-base md:text-lg`
- Medium: `px-6 py-3 text-base`
- Small: `px-4 py-2 text-sm`

---

## 6. Card Design Pattern

### Standard Service Card
```jsx
className="group bg-white rounded-lg border border-slate-200 
           p-8 shadow-sm 
           hover:shadow-lg hover:border-slate-300 
           transition-all duration-300"
```

### Testimonial Card
```jsx
className="bg-slate-50 rounded-lg border border-slate-200 
           p-8 md:p-10 
           relative"
```

### Leadership Card
```jsx
className="bg-white rounded-lg border border-slate-200 
           overflow-hidden shadow-sm 
           hover:shadow-md 
           transition-shadow duration-300"
```

### Card Content Structure Example
```jsx
<div className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm 
                hover:shadow-lg hover:border-slate-300 transition-all duration-300">
  
  {/* Icon or Badge (optional) */}
  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
    <Icon className="w-6 h-6 text-blue-900" />
  </div>
  
  {/* Card Title */}
  <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-4">
    Service Title
  </h3>
  
  {/* Card Description */}
  <p className="font-sans text-base leading-relaxed text-slate-700 mb-6">
    Description text goes here with proper spacing and readability.
  </p>
  
  {/* Optional CTA */}
  <a href="#" className="inline-flex items-center gap-2 text-blue-900 font-semibold text-sm 
                         hover:gap-3 transition-all duration-200">
    Learn More →
  </a>
</div>
```

---

## 7. Container Width & Spacing System

### Container Classes
```jsx
// Standard Container (most sections)
className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12"

// Narrow Container (text-focused sections)
className="max-w-4xl mx-auto px-6 md:px-8"

// Wide Container (full-width with padding)
className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-12"
```

### Horizontal Spacing
```
Mobile padding:    px-6   (24px)
Tablet padding:    px-8   (32px)
Desktop padding:   px-12  (48px)

Gap between items: gap-6  (24px) or gap-8 (32px)
```

### Grid Layouts
```jsx
// Two-column layout (services)
className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"

// Three-column layout (features)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// Four-column layout (logos, stats)
className="grid grid-cols-2 md:grid-cols-4 gap-8"
```

---

## 8. Section Spacing Standards

### Vertical Section Spacing
```jsx
// Hero Section
className="py-20 md:py-28 lg:py-36"

// Standard Section
className="py-16 md:py-24 lg:py-32"

// Compact Section
className="py-12 md:py-16 lg:py-20"

// Footer
className="py-12 md:py-16"
```

### Internal Spacing
```jsx
// Between heading and content
className="mb-6 md:mb-8"

// Between paragraphs
className="space-y-4 md:space-y-6"

// Between card elements
className="space-y-6"

// Between list items
className="space-y-3"
```

### Section Structure Template
```jsx
<section className="py-16 md:py-24 lg:py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
    
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="font-serif font-semibold text-3xl md:text-4xl lg:text-5xl 
                     leading-tight text-slate-900 mb-4">
        Section Title
      </h2>
      <p className="font-sans text-lg md:text-xl leading-relaxed text-slate-600 
                    max-w-3xl mx-auto">
        Supporting description
      </p>
    </div>
    
    {/* Section Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Cards or content */}
    </div>
    
  </div>
</section>
```

---

## 9. Border Radius & Shadow Style

### Border Radius
```
Small elements (buttons, badges):  rounded-md   (6px)
Cards, containers:                 rounded-lg   (8px)
Large cards, images:               rounded-xl   (12px)
```

**Never use**: `rounded-full` (except for avatar images or circular icons)

### Shadow Scale
```jsx
// Resting State (cards, inputs)
className="shadow-sm"  // subtle, barely visible

// Hover State (cards)
className="shadow-lg"  // noticeable but not dramatic

// Elevated Elements (modals, dropdowns)
className="shadow-xl"  // stronger depth

// Focus State
className="shadow-md"  // medium emphasis
```

### Custom Shadow (Optional)
Add to `tailwind.config.js` for more control:
```js
boxShadow: {
  'soft': '0 2px 8px 0 rgba(0, 0, 0, 0.05)',
  'card': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
  'hover': '0 8px 24px 0 rgba(0, 0, 0, 0.12)',
}
```

### Border Usage
```jsx
// Card borders
className="border border-slate-200"

// Dividers
className="border-t border-slate-200"

// Stronger borders (focus states)
className="border-2 border-blue-900"
```

---

## 10. Hover Interaction Guidelines

### Principle: **Subtle & Professional Only**

No dramatic animations, bounces, or excessive movement. All interactions should feel responsive but understated.

### Button Hovers
```jsx
// Background color shift + subtle shadow increase
hover:bg-blue-800 hover:shadow-md transition-all duration-200

// Outline button fills
hover:bg-blue-900 hover:text-white transition-all duration-200
```

### Card Hovers
```jsx
// Shadow lift + border color change
hover:shadow-lg hover:border-slate-300 transition-all duration-300
```

### Link Hovers
```jsx
// Color change only (no underline by default)
hover:text-blue-700 transition-colors duration-200

// With arrow shift
hover:gap-3 transition-all duration-200
```

### Image/Icon Hovers
```jsx
// Slight opacity change (icons in cards)
group-hover:opacity-80 transition-opacity duration-200

// Subtle scale (use sparingly)
hover:scale-105 transition-transform duration-300
```

### Navigation Hovers
```jsx
// Navbar links
hover:text-blue-900 transition-colors duration-200

// Footer links
hover:text-slate-900 hover:underline transition-colors duration-200
```

### **Avoid**:
- ❌ Bouncing or elastic animations
- ❌ Rotating elements
- ❌ Color flashing
- ❌ Excessive scale transforms (>1.05)
- ❌ Long transition durations (>300ms)

### Transition Timing
- Fast interactions: `duration-200` (buttons, links)
- Standard: `duration-300` (cards, modals)
- Never use: `duration-500` or longer

---

## 11. Icon Style Suggestion

### Recommended Icon Library
**Lucide React** or **Heroicons**

Both offer:
- Clean, professional line icons
- Consistent stroke width
- React-native components
- Customizable sizing

### Installation
```bash
npm install lucide-react
# or
npm install @heroicons/react
```

### Icon Styling
```jsx
// Standard icon size
className="w-6 h-6 text-blue-900"

// Large feature icon
className="w-8 h-8 text-blue-900"

// Small inline icon
className="w-4 h-4 text-slate-600"
```

### Icon Container (for feature cards)
```jsx
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
  <CheckCircle className="w-6 h-6 text-blue-900" />
</div>
```

### Icon + Text Pattern
```jsx
<div className="flex items-start gap-3">
  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
  <span className="text-base text-slate-700">Benefit or feature text</span>
</div>
```

### Icon Colors
- Primary actions: `text-blue-900`
- Success/confirmation: `text-emerald-600`
- Neutral/secondary: `text-slate-600`
- Backgrounds: `bg-blue-50`, `bg-slate-100`

### Stroke Weight
Use `strokeWidth={2}` for consistency (Lucide default is 2, which is ideal for corporate designs)

---

## 12. Imagery Direction

### Photography Style

**Tone**: Professional, corporate, Australian business context

**Subject Matter**:
- Business meetings in modern offices
- Professional handshakes (trust)
- Sydney/NSW landmarks (subtle)
- Office environments (clean, organized)
- Document review, collaboration
- Diverse business professionals
- Modern architecture

**Avoid**:
- Stock photos that feel staged or overly posed
- Bright, oversaturated images
- Startup/tech aesthetic (young people in hoodies, ping pong tables)
- Casual clothing
- Too much color or visual noise

### Image Treatment
```jsx
// Standard image container
className="rounded-lg overflow-hidden"

// With subtle overlay for text
className="relative rounded-lg overflow-hidden"
// Overlay: className="absolute inset-0 bg-slate-900/40"
```

### Aspect Ratios
```jsx
// Hero images
className="aspect-[16/9] md:aspect-[21/9]"

// Service cards
className="aspect-video"

// Portrait (team photos)
className="aspect-[3/4]"

// Square (logos, icons)
className="aspect-square"
```

### Color Overlay for Hero
```jsx
<div className="relative">
  <img src="hero.jpg" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
  {/* Text content */}
</div>
```

### Recommended Stock Photo Sources
- **Unsplash** (free, high quality)
- **Pexels** (free)
- **iStock** (paid, more specific business shots)

**Search Terms**:
- "corporate meeting australia"
- "business professional sydney"
- "financial advisor office"
- "business handshake"
- "corporate office sydney"
- "professional consultation"

### Image Optimization
- Use WebP format where possible
- Lazy load images below the fold
- Optimize for retina displays: serve 2x images with proper sizing

```jsx
<img 
  src="image.webp" 
  alt="Professional consultation"
  loading="lazy"
  className="w-full h-full object-cover"
/>
```

### Placeholder Background (before images load)
```jsx
className="bg-slate-100"
```

---

## Design System Summary

### Quick Reference Components

#### Hero Section
```jsx
<section className="relative bg-slate-900 py-20 md:py-28 lg:py-36">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
    <div className="max-w-4xl">
      <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl 
                     leading-tight text-white mb-6">
        Independent Audit & Advisory Expertise You Can Trust
      </h1>
      <p className="font-sans text-lg md:text-xl leading-relaxed 
                    text-slate-300 mb-8">
        Delivering rigorous assurance, strategic insight, and personalised service.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold 
                          rounded-md hover:bg-blue-700 transition-colors duration-200">
          Speak With an Expert
        </button>
        <button className="px-8 py-4 bg-transparent text-white border-2 border-white 
                          font-semibold rounded-md hover:bg-white hover:text-slate-900 
                          transition-all duration-200">
          Explore Our Services
        </button>
      </div>
    </div>
  </div>
</section>
```

#### Service Card Grid
```jsx
<section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-white rounded-lg border border-slate-200 p-8 
                      hover:shadow-lg hover:border-slate-300 transition-all duration-300">
        <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-4">
          Business Advisory
        </h3>
        <p className="font-sans text-base leading-relaxed text-slate-700">
          Strategic, commercially focused advice designed to strengthen financial performance.
        </p>
      </div>
      
      <div className="bg-white rounded-lg border border-slate-200 p-8 
                      hover:shadow-lg hover:border-slate-300 transition-all duration-300">
        <h3 className="font-serif font-semibold text-2xl text-slate-900 mb-4">
          Audit & Assurance
        </h3>
        <p className="font-sans text-base leading-relaxed text-slate-700">
          Independent, risk-based audit services delivered with professional rigour.
        </p>
      </div>
      
    </div>
  </div>
</section>
```

#### Testimonial
```jsx
<div className="bg-slate-50 rounded-lg border border-slate-200 p-8 md:p-10">
  <p className="font-sans text-lg leading-relaxed text-slate-700 mb-6 italic">
    "Pran combines deep accounting and auditing expertise with a strong focus on 
    governance and process improvement."
  </p>
  <div>
    <p className="font-sans font-semibold text-slate-900">Adam Susz</p>
    <p className="font-sans text-sm text-slate-600">Client</p>
  </div>
</div>
```

---

## Browser Support & Testing

Test the design in:
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

Ensure responsive breakpoints work at:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

---

## Accessibility Considerations

- Maintain 4.5:1 contrast ratio for body text
- Maintain 3:1 contrast ratio for large text (18px+)
- Use semantic HTML elements
- Include focus states on all interactive elements
- Ensure keyboard navigation works smoothly
- Add appropriate ARIA labels where needed

---

**Design System Version**: 1.0  
**Last Updated**: February 2026  
**For**: Andersens Audit NSW Corporate Website
