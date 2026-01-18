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

### Current State (Updated January 18, 2026)
- **Production**: Jekyll + Bootstrap site on GitHub Pages (main branch) - BACKUP ONLY
- **Staging**: Astro site deployed on develop branch at https://bixingai.bixory.ai
- **Goal**: 50-70% performance improvement while maintaining exact UI/UX
- **Progress**: Migration COMPLETE. Jekyll cleanup DONE. Ready for production cutover.
- **Backup**: Tag `jekyll-backup-20260118` preserves full Jekyll implementation

### Key Documents
- **[modernization-plan.md](./modernization-plan.md)** - 🎯 **TRUTH SOURCE** for migration strategy
- **[project-status.md](./project-status.md)** - Current development status
- **[README.md](./README.md)** - General project information

---

## 🏗️ Project Structure

### Current Structure (develop branch - Astro Only)
```
bixingai-web/
├── astro-site/                   # Astro implementation (THE SITE)
├── docs/                         # Documentation
├── scripts/                      # Utility scripts
├── .github/                      # CI/CD workflows
└── [config files]                # Linting, git, npm configs
```

> **Note**: Jekyll files removed from develop (2026-01-18). Backup tag: `jekyll-backup-20260118`

### Astro Structure (Active)
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

### Phase-Based Development (Updated January 18, 2025)
1. **Phase 1**: ✅ Setup & Planning — **COMPLETE**
2. **Phase 2**: ✅ Component Migration — **COMPLETE**
3. **Phase 3**: ✅ Page Migration — **COMPLETE**
4. **Phase 4**: ✅ Optimization — **COMPLETE**
   - Image lazy loading for below-fold content
   - WebP conversion with `<picture>` fallback (66% avg savings)
   - Async font/CSS loading with preload hints
   - HTML compression and CSS purging
   - Vite code splitting and minification
5. **Phase 5**: ✅ Testing — **COMPLETE** (Visual Parity: 7/7 pages verified)
6. **Phase 6**: ⏳ Deployment — Not Started

### What's Been Completed
- 12 Astro components (Header, Footer, Hero, Services, Demo, Portfolio, Testimonials, Insights, CTA, etc.)
- 9 pages migrated (index, about, careers, contact, insights, services, education, custom-solutions, consultation)
- Blog pages working with Chinese translations
- Language toggle functional across all pages
- Particles.js animation preserved with lazy loading
- WebP image conversion (5 images, 66% avg savings)
- Async CSS/font loading with preload hints
- HTML compression and Vite minification enabled
- **Visual Parity Verified**: ALL 7 pages (Homepage, About, Insights, Careers, Contact, Services, Service Detail Pages)
- **Service Detail Pages**: Full Chinese translation support added for Education, Custom Solutions, Consultation
- **Team Section Updated**: Real team members (Andrew Bi - CEO, Yan Hong - CTO)

### Branch Strategy
- **main**: Production (currently Jekyll - pending cutover)
- **develop**: Astro site (staging at https://bixingai.bixory.ai)
- **feature/**: Specific feature branches
- **Tags**: `jekyll-backup-20260118` - Full Jekyll backup before cleanup

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
- **Load Time**: -40% improvement (< 1.8s from 3s)
- **Bundle Size**: -60% improvement (< 80KB from 200KB)
- **HTTP Requests**: -50% improvement (< 10 from 20+)

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
- [x] All components visually identical to current site (ongoing parity fixes)
- [x] Tailwind classes replace Bootstrap + custom CSS (partially - some custom CSS remains)
- [x] JavaScript consolidated into modular structure
- [x] Particles.js animation preserved exactly
- [x] All responsive breakpoints maintained
- [x] Language toggle functionality intact

### Current Priority Tasks
1. ~~**Jekyll Cleanup**: Remove legacy Jekyll files from develop branch~~ ✅ DONE
2. **Mobile Fixes**: Fine-tune hero section spacing on mobile (optional)
3. **Production Cutover**: Merge develop → main when ready

---

## 🧹 Jekyll Cleanup ✅ COMPLETED (2026-01-18)

**Status**: COMPLETE - 195 files deleted  
**Backup**: Tag `jekyll-backup-20260118` pushed to remote  
**Commit**: `7e8ac9d`

### What Was Removed
- Jekyll configs: `_config.yml`, `_config.dev.yml`
- Jekyll directories: `_layouts/`, `_posts/`
- Ruby dependencies: `Gemfile`, `Gemfile.lock`
- Content directories: `pages/`, `components/`, `assets/`, `blog/`, `templates/`
- Build scripts: All Jekyll-related PowerShell scripts
- Root HTML: `index.html`, `case-study-education.html`

### What Remains (develop branch)
```
bixingai-web/
├── astro-site/                     # THE ASTRO SITE
├── .github/                        # CI/CD workflows
├── docs/                           # Documentation
├── scripts/version.sh              # Version utility
├── README.md, LICENSE, AGENTS.md
├── modernization-plan.md, project-status.md
├── package.json, package-lock.json
└── Linting configs
```

---

### Quality Gates
- **Visual**: 100% pixel-perfect match
- **Functional**: All features work identically
- **Performance**: Meet all benchmark targets (40% load time, 60% bundle size, 50% HTTP request reduction)
- **Code**: Clean, maintainable, well-documented

---

**Remember**: This is a **visual parity first** migration. Changes are only acceptable if they provide clear optimization benefits without changing appearance. When in doubt, reference **modernization-plan.md** - it's our truth source! 🎯
