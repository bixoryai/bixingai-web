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
- Jekyll for blog post processing and static site generation
- Optimized for performance and SEO
- Automated project status tracking via Git hooks
- Jekyll is used for blog post management and static site generation

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

# Testing pre-commit hook

## Contact

For more information about Bixing Technology, please visit [bixingtechnology.com](https://bixingtechnology.com) or contact info@bixingtechnology.com.
