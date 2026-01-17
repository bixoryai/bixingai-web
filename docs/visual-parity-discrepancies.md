# Visual Parity Discrepancies

## Document Purpose
This document tracks discrepancies found between the Jekyll and Astro implementations during visual parity testing.

---

## Discrepancies Found

### 1. Testimonials Section Visibility
**Status**: ✅ FIXED (January 17, 2025)

| Aspect | Jekyll | Astro (Before) | Astro (After) |
|--------|--------|----------------|---------------|
| Testimonials Section | Hidden via CSS | Visible | Hidden via CSS |

**Fix Applied**: Added `.testimonials-section { display: none; }` to `global.css`

---

### 2. External CSS Dependencies
**Status**: ✅ RESOLVED

| Aspect | Jekyll | Astro |
|--------|--------|-------|
| CSS Files | Multiple external CSS files loaded | Inline styles in components |

**Note**: This is an intentional change for optimization. Visual output should be identical.

---

### 3. AOS vs Custom Animations
**Status**: ✅ RESOLVED

| Aspect | Jekyll | Astro |
|--------|--------|-------|
| Animation Library | AOS (Animate on Scroll) | Custom CSS animations via Tailwind |

**Note**: Animations should match visually. AOS has been replaced with equivalent CSS animations.

---

## Potential Discrepancies to Verify

These items require manual visual verification:

### High Priority
| Item | Description | Verified |
|------|-------------|----------|
| Hero Title Gradient | Gold/orange gradient text - verify exact colors match | ☐ |
| Floating Cards Position | Desktop floating cards should match exact positions | ☐ |
| Services Card Hover | Orange border and lift effect on hover | ☐ |
| CTA Section Height | Fixed 420px height matches | ☐ |
| Footer QR Code | WeChat QR code alignment | ☐ |

### Medium Priority
| Item | Description | Verified |
|------|-------------|----------|
| Mobile Menu | Hamburger animation and menu position | ☐ |
| Header Scroll Effect | Background opacity change on scroll | ☐ |
| Services Dropdown | Hover-triggered dropdown menu | ☐ |
| Section Transitions | Wave SVG transitions between sections | ☐ |

### Low Priority
| Item | Description | Verified |
|------|-------------|----------|
| Font Loading | All three font families load correctly | ☐ |
| Icon Consistency | All Font Awesome icons display correctly | ☐ |
| Particle Animation | Particles.js configuration matches | ☐ |

---

## Testing Instructions

### To Test Discrepancies:

1. **Start Jekyll Server**:
   ```bash
   bundle exec jekyll serve
   ```
   Access at: http://localhost:4000

2. **Start Astro Server**:
   ```bash
   cd astro-site && npm run dev
   ```
   Access at: http://localhost:4326 (or next available port)

3. **Side-by-Side Comparison**:
   - Open both sites in separate browser windows
   - Use browser DevTools to compare exact CSS values
   - Test at multiple breakpoints (1920px, 1440px, 1024px, 768px, 375px)

4. **Document Any Issues**:
   - Screenshot the discrepancy
   - Note the exact page, element, and difference
   - Add to this document with priority level

---

## Resolution Log

| Date | Issue | Resolution | Verified |
|------|-------|------------|----------|
| 2025-01-17 | Testimonials section visible in Astro | Added display: none to match Jekyll | ✅ |
| 2025-01-17 | External CSS dependencies | Converted to inline styles | ✅ |
| 2025-01-17 | About page - Partner logos not showing | Removed filter, increased bg opacity | ✅ |
| 2025-01-17 | About page - "Join Our Team" button color | Updated to gold outline styling | ✅ |
| 2025-01-17 | About page - Team section updated | Real team: Andrew Bi (CEO), Yan Hong (CTO) | ✅ |
| 2025-01-17 | Insights page - Blog card styles not applying | Changed to `is:global` CSS for dynamic elements | ✅ |
| 2025-01-17 | Insights page - Card title missing gradient | Added gold/orange gradient via global CSS | ✅ |
| 2025-01-17 | Insights page - Filter buttons styling | Applied global pill-button styling | ✅ |
| 2025-01-17 | Insights page - Newsletter button color | Updated to gold/orange gradient matching Homepage | ✅ |
| 2025-01-17 | Careers page - Submit button color | Updated to btn-primary class (gold gradient) | ✅ |
| 2025-01-17 | Careers page - Footer subtitle showing `<br>` literally | Fixed i18n-careers.js to use innerHTML for HTML elements | ✅ |

---

## Sign-off

- [ ] All high priority items verified
- [ ] All medium priority items verified
- [ ] All low priority items verified
- [ ] No new discrepancies found

**Verified By**: _______________
**Date**: _______________
