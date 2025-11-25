# Bixing Technology Website

A corporate website for Bixing Technology, showcasing AI solutions, education services, and enterprise consultation.

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

- Built with HTML5, CSS3, and JavaScript
- Bootstrap 5 for responsive layout
- AOS (Animate On Scroll) for scroll animations
- Custom internationalization (i18n) system for language switching
- Optimized for performance and SEO
- Automated project status tracking via Git hooks
- Jekyll is used ONLY for blog post management, NOT for page layouts or components

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
- [x] Multilingual support for Home and Education pages
- [x] Multilingual support for Custom Solutions page
- [x] Code quality infrastructure (ESLint, HTMLHint, Stylelint)
- [x] Git hooks for automated linting
- [x] CI/CD pipelines (GitHub Actions)
- [x] Automated release management
- [ ] Multilingual support for remaining pages
- [ ] Interactive Elements (JavaScript interactions, AI demos, visualizations)
- [ ] Content & Optimization (content population, SEO, testing)
- [ ] Launch & Monitoring

## Getting Started

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
