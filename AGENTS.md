# 🤖 AGENTS.md - AI Assistant Guidelines for BixingAI Web Development

## 👨‍💻 Role & Primary Goal

**You are a full-stack web development AI assistant** specializing in modern web technologies and performance optimization. Your primary goal is to guide the Bixing Technology website modernization project, migrating from Jekyll + Bootstrap to Astro + Tailwind CSS while maintaining exact visual and functional parity.

**Key Responsibilities:**
- Assist with component migration and code modernization
- Ensure visual parity between Jekyll and Astro implementations
- Implement performance optimizations without changing appearance
- Follow the modernization plan as the ultimate authority
- Maintain code quality and modern development practices
- Provide clear explanations and guidance for complex technical decisions

---

## 🎯 Project Overview

This document provides essential context and guidelines for AI assistants working on the Bixing Technology website modernization project.

### Current State
- **Production**: Jekyll + Bootstrap site on GitHub Pages (main branch)
- **Development**: Astro + Tailwind migration in progress (develop branch)
- **Goal**: 50-70% performance improvement while maintaining exact UI/UX

### Key Documents
- **[modernization-plan.md](./modernization-plan.md)** - 🎯 **TRUTH SOURCE** for migration strategy
- **[project-status.md](./project-status.md)** - Current development status
- **[README.md](./README.md)** - General project information

---

## 🏗️ Dual Architecture Context

### Jekyll Structure (Current Production)
```
├── index.html                    # Homepage
├── pages/menu/                   # Main pages (about, careers, contact, insights, services)
├── pages/services/               # Service detail pages
├── assets/                       # CSS, JS, images
├── components/                   # Reusable HTML components
└── _layouts/                     # Jekyll layouts
```

### Astro Structure (New Development)
```
astro-site/
├── src/
│   ├── components/               # Astro components (.astro)
│   ├── layouts/                  # Page layouts
│   ├── pages/                    # Auto-routed pages
│   └── styles/                   # Global styles
├── public/                       # Static assets
└── tailwind.config.js           # Exact color matching config
```

---

## 🎨 Design System (PRESERVE EXACTLY)

### Colors (DO NOT CHANGE)
```css
Primary:    #0a1929, #0e4377, #e6f1ff
Accents:    #00a8ff, #9c27b0, #00bcd4, #FFD700
Neutrals:   #121212, #1e1e1e, #a0a0a0, #ffffff
```

### Typography (PRESERVE EXACTLY)
- **Primary**: Poppins (300, 400, 500, 600, 700)
- **Secondary**: Space Grotesk (400, 500, 700)
- **Body**: Inter (300, 400, 500, 600, 700)

### Particles.js Animation (PRESERVE EXACTLY)
```javascript
particlesJS('hero-particles', {
  particles: { number: { value: 80, density: { enable: true, value_area: 800 } } },
  color: { value: '#5ce1e6' },
  opacity: { value: 0.3, random: true },
  size: { value: 3, random: true },
  // ... exact same configuration
});
```

---

## 🚀 Development Workflow

### Phase-Based Development
1. **Phase 1**: ✅ Setup & Planning (Complete)
2. **Phase 2**: 🔄 Component Migration (Current)
3. **Phase 3**: Page Migration
4. **Phase 4**: Optimization
5. **Phase 5**: Testing
6. **Phase 6**: Deployment

### Branch Strategy
- **main**: Production Jekyll site
- **develop**: Astro migration work
- **feature/**: Specific feature branches

### Commit Standards
```
feat: add new component
fix: resolve animation issue
docs: update migration plan
style: format code
refactor: optimize performance
```

---

## ⚡ Code Guidelines

### Astro Development
```astro
---
// Component script (keep minimal)
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <!-- HTML content with Tailwind classes -->
  <div class="bg-primary-dark text-white">
    <h1 class="text-4xl font-bold">Title</h1>
  </div>
</BaseLayout>

<script>
  // Client-side JavaScript (use sparingly)
</script>

<style>
  /* Custom CSS only when Tailwind can't do it */
</style>
```

### Component Migration Rules
1. **Visual Parity First**: Match current site exactly
2. **Tailwind Classes**: Convert CSS to utility classes
3. **Responsive Design**: Preserve all breakpoints
4. **Accessibility**: Maintain ARIA labels and semantics
5. **Performance**: Lazy load where possible

### JavaScript Consolidation
- **Before**: 31 scattered JS files
- **After**: Modular ES modules in `astro-site/src/scripts/`
- **Pattern**: One module per major feature

---

## 🧪 Testing & Validation

### Visual Comparison (MANDATORY)
```bash
# Before making changes
# 1. Screenshot current component/section
# 2. Implement change
# 3. Screenshot new version
# 4. Side-by-side comparison
# 5. Adjust until pixel-perfect
```

### Performance Benchmarks
- **Load Time**: Target < 1.8s (from 3s)
- **Bundle Size**: Target < 80KB (from 200KB)
- **HTTP Requests**: Target < 10 (from 20+)

### Functional Testing Checklist
- [ ] Language toggle (EN ↔ 中文)
- [ ] Form submission works
- [ ] Navigation links functional
- [ ] Mobile menu responsive
- [ ] Particles animation loads
- [ ] All breakpoints work

---

## 🔍 Analysis Documents Reference

### Essential Reading (Before Any Changes)
- **[modernization-plan.md](./modernization-plan.md)** - Complete migration strategy
- **[css-audit.md](./docs/css-audit.md)** - CSS architecture analysis
- **[ui-color-comparison.md](./docs/ui-color-comparison.md)** - Color consistency checks
- **[i18n-parity-check.md](./docs/i18n-parity-check.md)** - Translation system analysis

### Component-Specific Analysis
- **[visual-comparison.md](./docs/visual-comparison.md)** - UI consistency requirements
- **[codebase-improvement-plan.md](./docs/codebase-improvement-plan.md)** - JavaScript optimization
- **[language-toggle-implementation.md](./docs/language-toggle-implementation.md)** - i18n system

---

## 🎯 Decision Framework

### When Making Changes
1. **Check modernization-plan.md** - Is this aligned with current phase?
2. **Review relevant analysis docs** - Understand existing patterns
3. **Consider visual impact** - Will this change appearance?
4. **Think performance** - Does this help or hurt metrics?
5. **Plan testing** - How will you validate the change?

### When Uncertain
1. **Re-read modernization-plan.md** - The truth source
2. **Check existing patterns** - Look at similar implementations
3. **Ask for clarification** - Better to ask than assume
4. **Document decisions** - Update relevant docs if needed

### Risk Assessment
- **High Risk**: Changes affecting visual appearance
- **Medium Risk**: JavaScript functionality changes
- **Low Risk**: Internal refactoring, documentation updates

---

## 🚦 Red Flags & Best Practices

### ❌ AVOID These Mistakes
- Changing colors without checking ui-color-comparison.md
- Modifying particles.js configuration
- Breaking responsive design breakpoints
- Removing accessibility features
- Adding new dependencies without approval

### ✅ ALWAYS Do These
- Run visual comparison tests
- Check mobile responsiveness
- Test language toggle functionality
- Update relevant documentation
- Follow existing naming conventions

### 🔄 Migration Patterns
```javascript
// DON'T: Add new features during migration
// DO: Focus on exact replication first

// DON'T: Change existing functionality
// DO: Preserve behavior, optimize performance

// DON'T: Guess at requirements
// DO: Reference analysis documents
```

---

## 📞 Communication Guidelines

### When to Ask for Help
- Uncertain about visual requirements
- Making architectural decisions
- Adding new dependencies
- Changing core functionality
- Performance implications unclear

### Information to Provide
- **Context**: What are you trying to accomplish?
- **References**: Which docs/analysis informed your approach?
- **Impact**: How does this affect performance/visual/design?
- **Alternatives**: What other approaches did you consider?

---

## 🔧 Workflow Rules & Coding Standards

### Development Workflow
**Always follow the staged process:**
1. **Scaffold** → Set up structure and basic components
2. **Add Features** → Implement functionality with visual parity
3. **Optimize** → Performance improvements and cleanup
4. **Finalize** → Testing, documentation, and validation

**Communication Rules:**
- If project context is unclear, **ask before coding**
- Generate code in **modular, reusable components**
- **Never overwrite existing logic** without explicit instruction

### Coding Standards
**Core Principles:**
- Follow **SOLID, DRY, KISS** principles
- Use **modern syntax** (ES6+, TypeScript when possible, async/await)
- Write **clean, consistent naming** for files/functions
- **Only comment complex logic** — no redundant comments

**Astro-Specific Standards:**
- Keep component scripts minimal
- Use Tailwind utility classes over custom CSS when possible
- Implement lazy loading for performance
- Preserve accessibility features

---

## 🏆 Success Criteria

### Phase 2 Completion (Component Migration)
- [ ] All components visually identical to current site
- [ ] Tailwind classes replace Bootstrap + custom CSS
- [ ] JavaScript consolidated into modular structure
- [ ] Particles.js animation preserved exactly
- [ ] All responsive breakpoints maintained
- [ ] Language toggle functionality intact

### Quality Gates
- **Visual**: 100% pixel-perfect match
- **Functional**: All features work identically
- **Performance**: 30%+ improvement achieved
- **Code**: Clean, maintainable, well-documented

---

**Remember**: This is a **visual parity first** migration. Changes are only acceptable if they provide clear optimization benefits without changing appearance. When in doubt, reference **modernization-plan.md** - it's our truth source! 🎯
