# Color Scheme Parity Check

## Standard Color Variables

Based on the design system, all pages should use these consistent color variables:

```css
--dark-bg: #121212;              /* Primary dark background */
--dark-surface: #1e1e1e;         /* Secondary dark surface (cards, sections) */
--primary-color: #0066FF;        /* Primary blue */
--accent-color: #00C2FF;         /* Accent cyan/blue */
--darker-bg: #0f0f0f;            /* Darker background variant (optional) */
```

## Current Color Usage by Page

### ✅ Homepage (index.astro)
- Uses components that define their own colors
- Components: HeroSection, ServicesSection, DemoSection, PortfolioSection, TestimonialsSection, InsightsSection, CTASection

### Services Page (services.astro)
**CSS Variables Defined:**
```css
--dark-bg: #121212; ✅
--dark-surface: #1e1e1e; ✅
--primary-color: #0066FF; ✅
--accent-color: #00C2FF; ✅
```
**Status:** ✅ Consistent

### About Page (about.astro)
**CSS Variables Defined:**
```css
--dark-surface: #1e1e1e; ✅
--dark-bg: #121212; ✅
--darker-bg: #0a1020; ✅ (standardized)
--primary-color: #0066FF; ✅
--accent-color: #00C2FF; ✅
```
**Status:** ✅ Consistent (removed non-standard `--medium-dark`, standardized `--darker-bg`)

### Contact Page (contact.astro)
**CSS Variables Defined:**
```css
--dark-surface: #1e1e1e; ✅
--dark-bg: #121212; ✅
--primary-color: #0066FF; ✅
--accent-color: #00C2FF; ✅
```
**Status:** ✅ Consistent

### Careers Page (careers.astro)
**CSS Variables Defined:**
```css
--dark-surface: #1e1e1e; ✅
--dark-bg: #121212; ✅
--primary-color: #0066FF; ✅
--accent-color: #00C2FF; ✅
```
**Status:** ✅ Consistent

### Insights Page (insights.astro)
**CSS Variables Defined:**
```css
--dark-surface: #1e1e1e; ✅
--dark-bg: #121212; ✅
--darker-bg: #0a1020; ✅ (standardized)
--primary-color: #0066FF; ✅
--accent-color: #00C2FF; ✅
```
**Status:** ✅ Consistent (standardized `--darker-bg`)

## Component-Specific Background Colors

### Homepage Components
1. **ServicesSection**: `background-color: #121212` ✅
2. **DemoSection**: `background-color: #141E35` ✅ (section-specific)
3. **PortfolioSection**: `background-color: #1A1A2E` ✅ (section-specific)
4. **TestimonialsSection**: `background-color: #192339` ✅ (section-specific)
5. **InsightsSection**: `background-color: #0F172A` ✅ (section-specific)
6. **CTASection**: `background: linear-gradient(135deg, #0066FF, #0047B3)` ✅

### Sub-Pages
- **Services**: Uses `bg-dark-bg` (#121212) ✅
- **About**: Uses `bg-dark-surface` (#1e1e1e) for most sections, gradient backgrounds ✅
- **Contact**: Uses `bg-dark-surface` (#1e1e1e) and `bg-dark-bg` (#121212) ✅
- **Careers**: Uses `bg-dark-surface` (#1e1e1e) and `bg-dark-bg` (#121212) ✅
- **Insights**: Uses gradient backgrounds ✅

## Issues Found

### ✅ FIXED: Inconsistent `--darker-bg` Values
- **Before**: About page used `--darker-bg: #0f0f0f`, Insights page used `--darker-bg: #0a1020`
- **Fixed**: Standardized to `--darker-bg: #0a1020` across all pages

### ✅ FIXED: Non-Standard Variable in About Page
- **Before**: About page used `--medium-dark: #1a1a1a`
- **Fixed**: Removed `--medium-dark` and replaced usage with `--darker-bg`

### 3. Multiple `:root` Declarations
- Each page/component defines its own `:root` with color variables
- **Note**: This is acceptable for page-specific variables, but common colors should be consistent
- **Status**: All common variables now use consistent values

## Standardized Color Values

All pages now use these consistent values:
- `--dark-bg: #121212` ✅
- `--dark-surface: #1e1e1e` ✅
- `--darker-bg: #0a1020` ✅ (standardized)
- `--primary-color: #0066FF` ✅
- `--accent-color: #00C2FF` ✅

