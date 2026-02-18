# Bixing Technology Website

[![Version](https://img.shields.io/badge/version-v2.0.0--beta-blue.svg)](https://github.com/bixoryai/bixingai-web/releases)
[![Status](https://img.shields.io/badge/status-cutover--complete-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A corporate website for Bixing Technology, showcasing AI solutions, education services, and enterprise consultation.

## 📋 Current Status

**Migration Status:** Astro + Tailwind migration complete (February 18, 2026)
- ✅ **Phase 1-5 Complete**: Jekyll → Astro migration finished
- ✅ **Visual Parity**: All 7 pages verified (Homepage, About, Insights, Careers, Contact, Services, Service Details)
- ✅ **Performance Optimized**: WebP images (66% savings), lazy loading, async CSS/fonts
- ✅ **i18n Working**: English/Chinese translations functional across all pages
- ✅ **Quality Gates Green**: `astro check` 0 errors, `astro build` success, root lint warning-free
- ✅ **Phase 6 Complete**: Production cutover merged to `main`
- ✅ **Deployment Policy**: Automatic production deploys from `main`; `develop` deploys are manual-only

## Project Overview

This website serves as the digital presence for Bixing Technology, a company specializing in AI solutions with three main service areas:

1. **AI Education/Training** - Custom training programs and workshops to help organizations upskill their teams in AI technologies
2. **AI Custom Solutions Development** - Tailored AI applications including data services, model training/deployment, and custom AI applications
3. **Enterprise AI Consultation** - Strategic guidance for implementing AI across organizations

## Features

- Responsive design with dark/blue futuristic technology theme
- Multilingual support (English and Chinese)
- Service showcase with detailed descriptions
- Case studies and success stories
- Interactive elements and visualizations

## Technical Details

### New Astro Stack (v2.0)
- **Framework**: Astro 4.x with static output
- **Styling**: Tailwind CSS with custom design tokens
- **Build**: Vite with esbuild minification and code splitting
- **Images**: WebP with `<picture>` fallback (66% average savings)
- **Fonts**: Async loading with preload hints
- **i18n**: Custom JavaScript-based translation system
- **Performance**: HTML compression, CSS purging, lazy loading

### Legacy Jekyll Stack (v1.x - Backup)
- **Framework**: Jekyll + Bootstrap 5
- **Styling**: Custom CSS with consolidated architecture
- **i18n**: Custom JavaScript translation system

### Shared Features
- **Code Quality**: ESLint, Stylelint, HTMLHint with automated linting
- **Build Tools**: npm scripts, automated CI/CD pipelines
- **SEO**: Meta tags, Open Graph, structured data
- **Version Control**: Git with protected branches
- **Branch Strategy**: `main` (production Astro), `develop` (integration/manual deploy)

### Recent Improvements (v2.0-beta - February 2026)
- ✅ **Astro Migration**: Complete Jekyll → Astro + Tailwind conversion
- ✅ **Visual Parity**: 7/7 pages verified pixel-perfect match
- ✅ **WebP Images**: 66% average file size reduction
- ✅ **Performance**: Lazy loading, async fonts, HTML compression
- ✅ **Code Splitting**: Vite bundles per-page JS chunks
- ✅ **CI Stabilization**: Lint paths fixed, missing assets added, TypeScript blockers resolved

## Pages

- **Home** - Company introduction and service highlights
- **Services Overview** - Summary of all services offered
- **AI Education/Training** - Details about training programs and courses
- **AI Custom Solutions** - Information about custom AI development services
- **Enterprise AI Consultation** - Strategic consultation services
- **Industry Insights** - Blog and articles
- **About Us** - Company information
- **Careers** - Job opportunities
- **Contact** - Contact information and form

## Internationalization

The website supports both English and Chinese languages with a seamless toggle functionality:

- Language selection persists across page navigation using localStorage
- All text elements use data-i18n attributes for translation
- Translations are managed in the i18n.js file

## Development Roadmap

- [x] Foundation (repository setup, core layouts, base styling)
- [x] Core Pages (services, about, contact, career, blog structure)
- [x] Multilingual support for Home, Education, and Custom Solutions pages
- [x] Multilingual support for remaining pages (About, Careers, Contact, Insights, Services)
- [x] Interactive Elements (JavaScript interactions, blog visualizations)
- [x] Content population
- [x] SEO optimization (meta tags, Open Graph)
- [x] Mobile responsiveness testing
- [x] Performance optimization and additional testing
- [x] Code quality setup (ESLint, HTMLHint, Stylelint, Husky pre-commit hooks)
- [x] Automated release workflow implementation
- [x] Production deployment with automated versioning
- [x] Launch & Monitoring

## Migration Status

**Astro Migration**: Phases 1-5 Complete (February 18, 2026)
- ✅ All 9 pages migrated to Astro + Tailwind
- ✅ 12 Astro components created
- ✅ Visual parity verified for all pages
- ✅ Performance optimizations applied
- ✅ CI stabilization complete (lint/build/type checks green)
- ✅ Phase 6: Production cutover complete

**Develop**: Integration branch on `develop` (manual deploy only when explicitly triggered)

**Production**: Astro site auto-deployed from `main` at https://bixingai.bixory.ai

## Getting Started

### Astro Development (Recommended - v2.0)

1. Clone the repository
   ```bash
   git clone https://github.com/bixoryai/bixingai-web.git
   cd bixingai-web
   git checkout develop
   ```

2. Install dependencies and start dev server
   ```bash
   cd astro-site
   npm install
   npm run dev
   ```

3. Open http://localhost:4321 in your browser

4. Build for production
   ```bash
   npm run build
   ```

### Legacy Jekyll Development (v1.x Backup)

This path is for backup/reference via tag `jekyll-backup-20260118`.

1. Clone and switch to main branch
   ```bash
   git clone https://github.com/bixoryai/bixingai-web.git
   cd bixingai-web
   git checkout main
   ```

2. Install Jekyll dependencies
   ```bash
   bundle install
   bundle exec jekyll build
   ```

3. Serve the built site from the `_site` directory

### Code Quality

Run linting checks:
```bash
npm run lint          # Run all linters
npm run lint:js       # JavaScript only
npm run lint:html     # HTML only
npm run lint:css      # CSS only
npm run lint:fix      # Auto-fix issues
```

### Development Workflow

1. **Create feature branch** from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** and commit with descriptive messages:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
   
   Use conventional commit prefixes for semantic versioning:
   - `feat:`, `feature:`, `add:`, `new:`, `implement:`, `create:`, `enhance:`, `improve:` → **MINOR** version bump
   - `fix:`, `bug:`, `patch:`, `hotfix:`, `security:`, `lint:`, `style:`, `refactor:`, `docs:`, `chore:` → **PATCH** version bump
   - `breaking:`, `major:`, `BREAKING CHANGE:`, `api change:`, `remove:`, `delete:`, `drop:` → **MAJOR** version bump

3. **Create Pull Request** to `develop` branch for review

4. **Merge to main** for production release:
   - Create PR from `develop` → `main`
   - Once merged, automated release workflow will:
     - Analyze PR commits for version bump type
     - Automatically bump version (patch/minor/major)
     - Create new version tag (e.g., v1.0.1)
     - Update package.json
     - Generate detailed release notes
     - Create GitHub release
   - No manual intervention required!

### CI/CD & Releases

- **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`): Runs automatically on push/PR to `main` or `develop`
  - JavaScript linting validation (ESLint)
  - HTML linting validation (HTMLHint)
  - CSS linting validation (Stylelint)
  - Basic functionality tests
   - Deployment policy reporting (production auto from `main`, `develop` manual-only)

- **Astro Deploy Workflow** (`.github/workflows/astro-deploy.yml`):
   - Automatic production deploy on push to `main`
   - Manual `workflow_dispatch` deploy option for `develop`

- **Automated Releases** (`.github/workflows/release.yml`): Triggered **only** when PRs are merged from `develop` → `main`
  - Intelligent version bumping based on commit message analysis
  - Automatic tag creation (e.g., v1.0.1, v1.1.0, v2.0.0)
  - Detailed release notes generation from PR commits
  - GitHub release creation with quality metrics
  - Manual override available via GitHub Actions workflow_dispatch
  - **Important**: Direct pushes to `main` do NOT trigger releases (prevents infinite loops)

See `.github/workflows/` for complete workflow configurations.

## Contact

For more information about Bixing Technology, please visit [bixingtechnology.com](https://bixingtechnology.com) or contact info@bixingtechnology.com.
