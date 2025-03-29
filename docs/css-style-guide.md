# Bixing Technology Website CSS Style Guide

## CSS Organization Principles

### Component-Based Structure
Each major component of the website has its own dedicated CSS file:

- `header.css` - All header-related styles
- `hero-section.css` - All hero section styles
- `services-section.css` - All services section styles
- `footer-section.css` - All footer-related styles
- etc.

### Single Source of Truth
Each component should have ONE place where its styles are defined. This prevents conflicts and makes maintenance easier.

- **DO NOT** define styles for the same component in multiple files
- **DO NOT** use inline styles in HTML except for one-off dynamic values

### CSS Naming Conventions
We follow a simplified BEM (Block, Element, Modifier) approach:

- **Block**: The main component (e.g., `.hero-section`)
- **Element**: A part of the block (e.g., `.hero-title`, `.hero-subtitle`)
- **Modifier**: A variation of a block or element (e.g., `.hero-title.text-gradient`)

### CSS Specificity Guidelines

1. Avoid using `!important` whenever possible
2. When overriding framework styles (like Bootstrap), use more specific selectors
3. Only use `!important` as a last resort when overriding third-party styles
4. Document any use of `!important` with a comment explaining why it's necessary

## File Structure

```
assets/
├── css/
│   ├── styles.css             # Global styles and variables
│   ├── modern-ai-theme.css    # Theme-specific styles
│   ├── header.css             # Header component styles
│   ├── hero-section.css       # Hero section styles
│   ├── services-section.css   # Services section styles
│   ├── demo-section.css       # Demo section styles
│   ├── portfolio-section.css  # Portfolio section styles
│   ├── testimonials-section.css # Testimonials section styles
│   ├── insights-section.css   # Insights section styles
│   ├── cta-section.css        # CTA section styles
│   └── footer-section.css     # Footer styles
```

## CSS Comments

Use comments to document:

1. The purpose of a CSS file at the top of the file
2. Major sections within a file
3. Complex selectors or properties that might not be obvious
4. Any overrides of third-party styles
5. Any browser-specific hacks or workarounds

Example:
```css
/* 
 * Hero Section Styles - Bixing Technology
 * Modern, sleek AI-themed hero section
 *
 * This file contains all styles related to the hero section.
 * It is the single source of truth for hero section styling.
 * Any changes to hero section appearance should be made here.
 */

/* ===== Hero Section Container ===== */
.hero-section {
  /* styles here */
}
```

## Responsive Design

- Mobile-first approach is preferred but not strictly required
- Use media queries at the end of each component CSS file
- Standard breakpoints:
  - `max-width: 576px` - Small devices
  - `max-width: 768px` - Medium devices
  - `max-width: 992px` - Large devices
  - `max-width: 1200px` - Extra large devices

## Variables and Theming

Use CSS variables defined in `styles.css` for consistent theming:

```css
:root {
  /* Primary Colors */
  --primary-dark: #0a1929;
  --primary-blue: #0e4377;
  --primary-light: #e6f1ff;
  
  /* Accent Colors */
  --accent-blue: #00a8ff;
  --accent-purple: #9c27b0;
  --accent-teal: #00bcd4;
  --gold: #FFD700;
  
  /* etc. */
}
```

## Best Practices

1. **Avoid Deep Nesting**: Keep selector specificity as low as possible
2. **Use Shorthand Properties**: Use CSS shorthand when appropriate
3. **Organize Properties**: Group related properties together
4. **Minimize Redundancy**: Use CSS variables and classes to avoid repeating code
5. **Document Overrides**: Always comment when overriding styles from another file
6. **Consistent Naming**: Use kebab-case for class names (e.g., `.hero-section` not `.heroSection`)
7. **Responsive Images**: Always use responsive image techniques
8. **Accessibility**: Ensure sufficient color contrast and focus states

## Handling Third-Party Frameworks

When working with Bootstrap or other frameworks:

1. Try to use the framework's classes when possible
2. Create custom classes instead of overriding framework classes when feasible
3. If you must override, use a specific selector and document it
4. Keep framework overrides in the component CSS file, not scattered across files

## Adding New Styles

When adding new styles:

1. Determine which component the styles belong to
2. Add styles to the appropriate component CSS file
3. Follow the naming conventions and organization of existing styles
4. Add appropriate comments
5. Test across different screen sizes
