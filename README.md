# Bixing Technology Website

[![Version](https://img.shields.io/badge/version-v1.0.2-blue.svg)](https://github.com/bixoryai/bixingai-web/releases/tag/v1.0.2)
[![Status](https://img.shields.io/badge/status-production-green.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A corporate website for Bixing Technology, showcasing AI solutions, education services, and enterprise consultation.

## 📋 Current Status

**Latest Release:** v1.0.2 (December 22, 2025)
- ✅ JavaScript linting issues resolved
- ✅ Header component loading fixed
- ✅ CSS quality improved (52% error reduction)
- ✅ Automated release workflow active
- ✅ Branch protection and safety measures implemented

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

- **Framework**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5 for responsive layout
- **Animations**: AOS (Animate On Scroll) for smooth interactions
- **Internationalization**: Custom i18n system with localStorage persistence
- **Static Site Generation**: Jekyll for blog processing and content management
- **Code Quality**: ESLint, Stylelint, HTMLHint with automated linting
- **Build Tools**: npm scripts, automated CI/CD pipelines
- **Performance**: Optimized assets, lazy loading, and caching strategies
- **SEO**: Meta tags, structured data, and search engine optimization
- **Version Control**: Git with protected branches and automated releases
- **Branch Strategy**: Git-flow with `main` (production) and `develop` (active development)

### Recent Improvements (v1.0.2)
- ✅ **JavaScript**: 0 linting errors, modern syntax, improved error handling
- ✅ **CSS**: 52% reduction in linting errors, consolidated stylesheets
- ✅ **Header Component**: Fixed dynamic loading with proper Jekyll processing
- ✅ **Code Formatting**: Prettier integration for consistent styling
- ✅ **Asset Management**: Added missing resources and optimized loading
- ✅ **Branch Protection**: Safety measures to prevent accidental deletions

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
- [ ] AI demos and advanced visualizations
- [x] Content population
- [x] SEO optimization (meta tags, Open Graph)
- [x] Mobile responsiveness testing
- [x] Performance optimization and additional testing
- [ ] Launch & Monitoring

## Getting Started

1. Clone the repository
2. For basic page viewing, open any HTML file in your browser
3. For full site with blog posts, install dependencies and build:
   ```bash
   bundle install
   bundle exec jekyll build
   ```
4. Serve the built site from the `_site` directory using any web server

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/bixoryai/bixingai-web.git
   cd bixingai-web
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start local development server
   ```bash
   npm run serve
   ```

4. Open http://localhost:8000 in your browser

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
  - Automated deployments (preview for develop, production for main)

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
