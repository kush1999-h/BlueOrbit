# Component Reference Guide

Quick guide to using and customizing Blubit UI components.

## Navigation

### Navbar

```tsx
import { Navbar } from "@/components/Navbar";

<Navbar />;
```

- Sticky positioning
- Mobile hamburger menu
- Theme toggle button
- Request Quote CTA
- Responsive design

**Customization:** Edit navigation links array in component

---

## Hero & Landing

### HeroSlider

```tsx
import { HeroSlider } from "@/components/HeroSlider";

<HeroSlider />;
```

- 4 auto-rotating slides
- Pause on hover
- Swipe support on mobile
- Navigation dots & arrows
- 6-second interval

**Customize:** Modify slides array

---

## Content Sections

### ServiceCards Grid

```tsx
import { ServiceCardsGrid } from "@/components/ServiceCards";

<ServiceCardsGrid />
<ServiceCardsGrid services={customServices} />
```

- 5 service cards (3-column on large)
- Hover glow effects
- View Services links with anchors

**Props:**

```ts
interface ServiceCardProps {
  title: string;
  description?: string;
  bullets: string[];
  anchorId?: string;
}
```

### ModulesGrid

```tsx
import { ModulesGrid } from "@/components/ModulesGrid";

<ModulesGrid />
<ModulesGrid modules={customModules} />
```

- 3x3 grid of modules
- Emoji icons
- One-line benefits

---

### WhyBlubit

```tsx
import { WhyBlubit } from "@/components/WhyBlubit";

<WhyBlubit />;
```

- 6 value proposition cards
- Icons + descriptions
- Hover effects

---

### ImplementationProcess

```tsx
import { ImplementationProcess } from "@/components/ImplementationProcess";

<ImplementationProcess />;
```

- 7-step timeline
- Horizontal (desktop) / Vertical (mobile)
- Key benefits cards

---

### ProofStats

```tsx
import { ProofStats } from "@/components/ProofStats";

<ProofStats />
<ProofStats stats={customStats} />
```

- 6 stat cards
- Gradient text for numbers
- Customizable values

**Props:**

```ts
interface StatItem {
  label: string;
  value: string;
}
```

---

## Forms

### ContactForm

```tsx
import { ContactForm } from "@/components/ContactForm";

<ContactForm />;
```

- 5 fields (name, email, phone, subject, message)
- Honeypot spam protection
- Success/error messages
- Loading state
- Submits to POST `/api/contact`

---

### QuoteForm

```tsx
import { QuoteForm } from "@/components/QuoteForm";

<QuoteForm />;
```

- Multi-field form
- Service checkboxes
- Module checkboxes
- Timeline & budget dropdowns
- Honeypot protection
- Success/error messages
- Submits to POST `/api/quote`

---

## Utility Components

### Footer

```tsx
import { Footer } from "@/components/Footer";

<Footer />;
```

- Multi-column layout
- Newsletter signup
- Social links
- Contact info
- Current year auto-update

---

### CTABanner

```tsx
import { CTABanner } from "@/components/CTABanner";

<CTABanner />;
```

- Large headline
- Subtext
- 2 primary/secondary buttons
- Gradient background

---

### LoadingOverlay

```tsx
import { LoadingOverlay } from "@/components/LoadingOverlay";

<LoadingOverlay />;
```

- Full-screen splash
- Pulsing logo animation
- Fades on initial load (900ms)
- Shows on route change (500ms)

Automatically included in root layout.

---

### ThemeToggle

```tsx
import { ThemeToggle } from "@/components/ThemeToggle";

<ThemeToggle />;
```

- Sun/Moon icon button
- Theme context aware
- Toggles dark/light
- Persists to localStorage

---

### LogoSVG

```tsx
import { LogoSVG } from "@/components/LogoSVG";

<LogoSVG />
<LogoSVG withText={false} />
<LogoSVG className="h-12 w-12" />
```

**Props:**

- `withText?: boolean` - Show "BLUBIT" text (default: true)
- `className?: string` - Additional CSS classes

---

### JobCard

```tsx
import { JobCard } from "@/components/JobCard";

<JobCard
  id="1"
  title="Senior Odoo Developer"
  location="Dhaka, Bangladesh"
  type="Full-time"
  shortDescription="Build custom Odoo modules"
  slug="senior-odoo-developer"
/>;
```

- Links to `/career/[slug]`
- Hover effects
- Location & type badges

---

## Theme & Styling

### Available Tailwind Classes

#### Colors

```
Primary Accent: cyan-300, cyan-400, cyan-500
```

#### Custom Backgrounds

```
bg-orbit-dark     # #0a0e27 (main)
bg-orbit-darker   # #050811 (secondary)
bg-orbit-card     # rgba(10, 14, 39, 0.8)
```

#### Custom Shadows

```
shadow-glow-cyan       # Soft glow
shadow-glow-cyan-lg    # Large glow
shadow-glow-cyan-sm    # Small glow
```

#### Custom Animations

```
animate-pulse-glow     # Pulsing glow effect
animate-float          # Floating animation
```

---

## Responsive Breakpoints

All components use Tailwind's standard breakpoints:

- `sm` - 640px
- `md` - 768px
- `lg` - 1024px
- `xl` - 1280px

Example:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

---

## Accessibility

All components include:

- ✅ Semantic HTML (`<button>`, `<nav>`, etc.)
- ✅ ARIA labels for icons
- ✅ Focus states
- ✅ Keyboard navigation support
- ✅ Alt text for images
- ✅ Proper heading hierarchy

---

## Form Validation (Backend Ready)

Forms include placeholders for:

- Input validation (using Zod)
- Field requirements
- Custom error messages
- Success messages

Example validation to implement:

```ts
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});
```

---

## Customization Examples

### Change Service Colors

In `tailwind.config.ts`, modify the cyan color palette:

```ts
cyan: {
  300: "#66d9ff",
  400: "#33ccff",
  500: "#00c7ff",
}
```

### Modify Hero Slider

Edit slides array in `HeroSlider.tsx`:

```ts
const slides: Slide[] = [
  { label: "Your slide", support: "Description" },
  // ...
];
```

### Update Services List

Edit default services in `ServiceCards.tsx`:

```ts
const defaultServices: ServiceCardProps[] = [
  {
    title: "Your Service",
    bullets: ["Feature 1", "Feature 2"],
    anchorId: "your-service",
  },
  // ...
];
```

---

## Performance Tips

1. **Images**: Use Next.js Image component when adding images
2. **Lazy Loading**: Components are already optimized
3. **Bundle Size**: Tree-shaking removes unused styles
4. **Animations**: GPU-accelerated (transform, opacity)
5. **Loading**: Overlay shows immediately, hides after content

---

## Mobile Optimization

All components are mobile-first with:

- Single column on `mobile` (<640px)
- Two columns on `tab` (640px-1024px)
- Three+ columns on `desktop` (>1024px)
- Touch-friendly buttons (min 44px height)
- Readable font sizes (16px+ on mobile)
- Proper spacing (gap-4, gap-6)

---

## Browser Support

- ✅ Chrome/Edge (latest 2)
- ✅ Firefox (latest 2)
- ✅ Safari (latest 2)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 not supported (using CSS Grid, Flexbox)

---

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

---

## File Locations

| Component             | File                                    |
| --------------------- | --------------------------------------- |
| Navbar                | `/components/Navbar.tsx`                |
| Footer                | `/components/Footer.tsx`                |
| HeroSlider            | `/components/HeroSlider.tsx`            |
| ServiceCards          | `/components/ServiceCards.tsx`          |
| ModulesGrid           | `/components/ModulesGrid.tsx`           |
| WhyBlubit             | `/components/WhyBlubit.tsx`             |
| ImplementationProcess | `/components/ImplementationProcess.tsx` |
| ProofStats            | `/components/ProofStats.tsx`            |
| CTABanner             | `/components/CTABanner.tsx`             |
| ContactForm           | `/components/ContactForm.tsx`           |
| QuoteForm             | `/components/QuoteForm.tsx`             |
| JobCard               | `/components/JobCard.tsx`               |
| LogoSVG               | `/components/LogoSVG.tsx`               |
| ThemeToggle           | `/components/ThemeToggle.tsx`           |
| ThemeProvider         | `/components/ThemeProvider.tsx`         |
| LoadingOverlay        | `/components/LoadingOverlay.tsx`        |

---

**Last Updated**: March 2, 2026
