# Visual Parity Testing Checklist

## Testing Environment

- **Jekyll Site**: Run with `bundle exec jekyll serve` (typically http://localhost:4000)
- **Astro Site**: Run with `npm run dev` in `astro-site/` (currently http://localhost:4326)

---

## Page-by-Page Comparison

### 1. Homepage (index.html → index.astro) ✅ VERIFIED (January 17, 2025)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| **Header** | | | |
| Logo display & alignment | ✓ | ✓ | ✅ |
| Navigation links | ✓ | ✓ | ✅ |
| Services dropdown menu | ✓ | ✓ | ✅ |
| Language toggle (EN/中文) | ✓ | ✓ | ✅ |
| Mobile hamburger menu | ✓ | ✓ | ✅ |
| Header scroll effect | ✓ | ✓ | ✅ |
| **Hero Section** | | | |
| Title gradient (gold/orange) | ✓ | ✓ | ✅ |
| Subtitle text & color | ✓ | ✓ | ✅ |
| CTA button styling | ✓ | ✓ | ✅ Fixed - Gold gradient |
| Hero image display | ✓ | ✓ | ✅ |
| Floating cards (desktop) | ✓ | ✓ | ✅ |
| Floating cards (mobile) | ✓ | ✓ | ✅ |
| Particles.js animation | ✓ | ✓ | ✅ |
| "Empowered by" section | ✓ | ✓ | ✅ |
| Wave transition to services | ✓ | ✓ | ✅ |
| **Services Section** | | | |
| Section title & underline | ✓ | ✓ | ✅ |
| 3-column card layout | ✓ | ✓ | ✅ |
| Card hover effects | ✓ | ✓ | ✅ |
| Icon styling | ✓ | ✓ | ✅ |
| Feature list checkmarks | ✓ | ✓ | ✅ |
| "Learn More" button styling | ✓ | ✓ | ✅ Fixed - Gold outline |
| **Demo Section** | | | |
| Background color/gradient | ✓ | ✓ | ✅ |
| Play button styling | ✓ | ✓ | ✅ OK (slight difference acceptable) |
| Content text | ✓ | ✓ | ✅ |
| **Portfolio Section** | | | |
| Card layout | ✓ | ✓ | ✅ |
| Image hover effects | ✓ | ✓ | ✅ |
| Category badges | ✓ | ✓ | ✅ |
| "Read Case Study" links | ✓ | ✓ | ✅ |
| **Testimonials Section** | | | |
| Card styling | N/A | N/A | ✅ Hidden (matches Jekyll) |
| Star ratings | N/A | N/A | ✅ Hidden |
| Avatar display | N/A | N/A | ✅ Hidden |
| Quote styling | N/A | N/A | ✅ Hidden |
| **Insights Section** | | | |
| Card layout | ✓ | ✓ | ✅ |
| Date/category badges | ✓ | ✓ | ✅ |
| Image hover effects | ✓ | ✓ | ✅ |
| **CTA Section** | | | |
| Background gradient (blue) | ✓ | ✓ | ✅ |
| Border animation | ✓ | ✓ | ✅ |
| Button styling | ✓ | ✓ | ✅ |
| Floating elements | ✓ | ✓ | ✅ |
| **Footer** | | | |
| Logo & company name | ✓ | ✓ | ✅ |
| Quick links | ✓ | ✓ | ✅ |
| Services links | ✓ | ✓ | ✅ |
| WeChat QR code | ✓ | ✓ | ✅ |
| Copyright & legal links | ✓ | ✓ | ✅ |
| Circuit background pattern | ✓ | ✓ | ✅ |

---

### 2. About Page (about.html → about.astro) ✅ VERIFIED (January 17, 2025)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| **Hero Section** | | | |
| Secondary hero title | ✓ | ✓ | ✅ |
| Hero particles | ✓ | ✓ | ✅ |
| Wave transition | ✓ | ✓ | ✅ |
| **Mission Section** | | | |
| Title & underline | ✓ | ✓ | ✅ |
| Mission statement text | ✓ | ✓ | ✅ |
| Circuit animation | ✓ | ✓ | ✅ |
| **What We Do Section** | | | |
| 3-column service boxes | ✓ | ✓ | ✅ |
| Service icons | ✓ | ✓ | ✅ |
| Feature lists | ✓ | ✓ | ✅ |
| Hover effects | ✓ | ✓ | ✅ |
| **Our Strength Section** | | | |
| 4-column layout | ✓ | ✓ | ✅ |
| Progress bars | ✓ | ✓ | ✅ |
| Card styling | ✓ | ✓ | ✅ |
| **Team Section** | | | |
| Team member cards | ✓ | ✓ | ✅ Updated with real team |
| Headshot images | ✓ | ✓ | ✅ Andrew Bi, Yan Hong |
| Social links | ✓ | ✓ | ✅ |
| "Join Our Team" button | ✓ | ✓ | ✅ Fixed - Gold outline |
| **Partners Section** | | | |
| Partner logos grid | ✓ | ✓ | ✅ Fixed - logos visible |
| Hover effects | ✓ | ✓ | ✅ |
| **Values Section** | | | |
| 4-column cards | ✓ | ✓ | ✅ |
| Icons & styling | ✓ | ✓ | ✅ |
| **CTA Section** | | | |
| Background gradient | ✓ | ✓ | ✅ |
| Button styling | ✓ | ✓ | ✅ |
| **Footer** | ✓ | ✓ | ✅ Same as Homepage |

---

### 3. Services Page (services.html → services.astro)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Secondary hero | | | ☐ |
| Service cards | | | ☐ |
| Call-to-action | | | ☐ |

---

### 4. Service Detail Pages

#### Education (education.html → education.astro)
| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Hero section | | | ☐ |
| Content sections | | | ☐ |
| Features/benefits | | | ☐ |

#### Custom Solutions (custom-solutions.html → custom-solutions.astro)
| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Hero section | | | ☐ |
| Content sections | | | ☐ |
| Features/benefits | | | ☐ |

#### Consultation (consultation.html → consultation.astro)
| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Hero section | | | ☐ |
| Content sections | | | ☐ |
| Features/benefits | | | ☐ |

---

### 5. Insights Page (insights.html → insights.astro) ✅ VERIFIED (January 17, 2025)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| **Hero Section** | | | |
| Hero title gradient | ✓ | ✓ | ✅ |
| Hero particles | ✓ | ✓ | ✅ |
| Wave transition | ✓ | ✓ | ✅ |
| **Featured Insight Section** | | | |
| Featured card layout | ✓ | ✓ | ✅ |
| Featured badge styling | ✓ | ✓ | ✅ |
| Featured title gradient | ✓ | ✓ | ✅ |
| **Latest Insights Section** | | | |
| Section title | ✓ | ✓ | ✅ |
| Filter buttons (pill style) | ✓ | ✓ | ✅ Fixed - global CSS |
| Blog post grid (2-column) | ✓ | ✓ | ✅ Fixed - global CSS |
| Card title gradient (gold/orange) | ✓ | ✓ | ✅ Fixed - global CSS |
| Card excerpt text styling | ✓ | ✓ | ✅ Fixed - global CSS |
| Read More links | ✓ | ✓ | ✅ Fixed - global CSS |
| Pagination | ✓ | ✓ | ✅ |
| **Newsletter Section** | | | |
| Subscribe button (orange/gold) | ✓ | ✓ | ✅ Fixed - matches Homepage |
| Input field styling | ✓ | ✓ | ✅ |
| **Footer** | ✓ | ✓ | ✅ Same as Homepage |

---

### 6. Careers Page (careers.html → careers.astro) ✅ VERIFIED (January 17, 2025)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| **Hero Section** | | | |
| Secondary hero title | ✓ | ✓ | ✅ |
| Hero particles | ✓ | ✓ | ✅ |
| Wave transition | ✓ | ✓ | ✅ |
| **Culture Section** | | | |
| Culture cards (4-column) | ✓ | ✓ | ✅ |
| Card icons & styling | ✓ | ✓ | ✅ |
| Hover effects | ✓ | ✓ | ✅ |
| **Benefits Section** | | | |
| Benefits grid layout | ✓ | ✓ | ✅ |
| Benefit card styling | ✓ | ✓ | ✅ |
| **Employee Stories Section** | | | |
| Employee testimonial cards | ✓ | ✓ | ✅ |
| Quote styling | ✓ | ✓ | ✅ |
| Avatar & name display | ✓ | ✓ | ✅ |
| **Open Positions Section** | | | |
| Position cards | ✓ | ✓ | ✅ |
| Apply Now links | ✓ | ✓ | ✅ |
| **Application Form Section** | | | |
| Form layout | ✓ | ✓ | ✅ |
| Input field styling | ✓ | ✓ | ✅ |
| Submit button (gold gradient) | ✓ | ✓ | ✅ Fixed - btn-primary class |
| **Footer** | | | |
| Footer left column | ✓ | ✓ | ✅ Fixed - i18n innerHTML for line break |
| All footer elements | ✓ | ✓ | ✅ Same as Homepage

---

### 7. Contact Page (contact.html → contact.astro)

| Element | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Hero section | | | ☐ |
| Contact form | | | ☐ |
| Form validation | | | ☐ |
| Contact info | | | ☐ |

---

## Responsive Testing Checklist

Test at these breakpoints:

| Breakpoint | Width | Status |
|------------|-------|--------|
| Desktop XL | 1920px | ☐ |
| Desktop | 1440px | ☐ |
| Laptop | 1024px | ☐ |
| Tablet | 768px | ☐ |
| Mobile L | 425px | ☐ |
| Mobile M | 375px | ☐ |
| Mobile S | 320px | ☐ |

---

## Functionality Testing

| Feature | Jekyll | Astro | Status |
|---------|--------|-------|--------|
| Language toggle (EN→中文) | | | ☐ |
| Language toggle (中文→EN) | | | ☐ |
| Translation persistence (localStorage) | | | ☐ |
| Navigation links | | | ☐ |
| Mobile menu open/close | | | ☐ |
| Services dropdown | | | ☐ |
| Smooth scroll | | | ☐ |
| Form submission | | | ☐ |
| Particles.js interaction | | | ☐ |
| Card hover effects | | | ☐ |
| Button hover effects | | | ☐ |

---

## Animation Testing

| Animation | Jekyll | Astro | Status |
|-----------|--------|-------|--------|
| AOS fade-up | | | ☐ |
| Floating cards animation | | | ☐ |
| Particles movement | | | ☐ |
| Header scroll transition | | | ☐ |
| CTA border animation | | | ☐ |
| Card hover transforms | | | ☐ |

---

## Color Consistency

| Color | Expected Value | Jekyll | Astro | Status |
|-------|----------------|--------|-------|--------|
| Primary Dark | #0a1929 | | | ☐ |
| Primary Blue | #0066FF | | | ☐ |
| Accent Blue | #00a8ff | | | ☐ |
| Accent Teal | #00bcd4 | | | ☐ |
| Gold | #FFD700 | | | ☐ |
| Dark BG | #121212 | | | ☐ |
| Dark Surface | #1e1e1e | | | ☐ |
| Gray Light | #a0a0a0 | | | ☐ |

---

## Typography Consistency

| Element | Font Family | Weight | Size | Status |
|---------|-------------|--------|------|--------|
| Hero Title | Poppins | 700 | 2.8rem | ☐ |
| Section Title | Poppins | 700 | 2.5rem | ☐ |
| Card Title | Poppins | 700 | 1.25rem | ☐ |
| Body Text | Inter | 400 | 1rem | ☐ |
| Button Text | Inter | 600 | 1rem | ☐ |

---

## How to Test

1. **Open both sites side by side** (Jekyll on left, Astro on right)
2. **Use browser DevTools** to check exact values if needed
3. **Test at each breakpoint** using DevTools device toolbar
4. **Check language toggle** works identically on both
5. **Verify animations** match in timing and effect
6. **Note any discrepancies** in the "Status" column

### Discrepancy Tracking

| Page | Element | Issue Description | Priority | Fixed |
|------|---------|-------------------|----------|-------|
| | | | | ☐ |
| | | | | ☐ |
| | | | | ☐ |

---

## Sign-off

- [ ] All pages match visually
- [ ] All functionality works
- [ ] All responsive breakpoints tested
- [ ] Language toggle works correctly
- [ ] No console errors

**Tested By**: _______________
**Date**: _______________
**Status**: ☐ Approved / ☐ Needs Fixes
