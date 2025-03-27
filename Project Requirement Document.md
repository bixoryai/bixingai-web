# Bixing Technology Website Plan with HTML

## 1. PRD (Product Requirements Document)

### Site Structure
- **Homepage**: Company introduction, service highlights, value proposition, portfolio/case studies showcase
- **Services**:
  - AI Education/Training
  - AI Custom Solutions Development
  - Enterprise AI Consultation
- **Industry Insights**: Articles, trends, educational content
- **About Us**: Company history, team, mission
- **Career**: Job opportunities and company culture
- **Contact**: Form, social media links, location
- **Footer** (present on all pages): Company info, navigation links, social media, legal

### Page-by-Page Layout

#### Header/Navigation (Present on All Pages)
- Logo and brand name
- Main navigation menu
- Contact/CTA button
- Mobile-responsive hamburger menu

#### Homepage
- Hero section with brand statement and CTA
- Service cards (3 main offerings)
- Portfolio/Case Studies section (featured implementations)
- Interactive AI demo showcase
- Client testimonials/logos
- Latest industry insights
- Contact CTA

#### Services Main Page
- Hero section with concise overview of Bixing's AI service offerings
- 3 prominent service cards in a row (responsive for mobile)
  - Each card includes: icon, title, brief description, 3 key features with icons, and "Learn More" CTA
  - Card 1: AI Education/Training
  - Card 2: AI Custom Solutions Development
  - Card 3: Enterprise AI Consultation
- "Why Choose Us" section with 3 key differentiators
- Client testimonials related to services (if available)
- Call-to-action section for contact

#### Service Detail Pages (3 separate pages)
- Consistent header with breadcrumb navigation
- Hero section specific to the service
- Service overview with key benefits
- Process explanation with visual workflow
- Technologies used (with logos/icons)
- Detailed feature sections with icons and descriptions
- Relevant case studies with results and metrics
- Pricing/engagement model explanation
- Interactive demo where applicable (Hugging Face Space iframe)
- FAQ section relevant to the specific service
- Related services section (links to other services)
- Contact CTA specific to this service

#### Industry Insights
- Categorized articles by topic
- Search functionality
- Newsletter signup
- Featured insights on AI trends and applications

#### About Us
- Company story
- Team section with credentials
- Vision/mission/values
- Partner ecosystem

#### Career
- Current job openings with detailed descriptions
- Application submission form
- Company culture highlights
- Employee testimonials
- Benefits and growth opportunities
- Team photos and environment showcases

#### Contact
- Form with dropdown for service interest
- Office location(s)
- Social media links

#### Footer (Present on All Pages)
- Company logo and tagline
- Quick links to main sections
- Contact information (email, phone)
- Social media links
- Newsletter signup
- Copyright and legal information
- Privacy policy and terms of service links
- Language selector (if multilingual support planned)

## 2. UI/UX Style

### Visual Design
- Dark theme with deep blues and black backgrounds
- Accent colors: Electric blue, vibrant purple, and bright teal
- Futuristic, minimal interface with subtle animations
- Geometric patterns and data visualization elements
- Custom icons representing AI capabilities

### Typography
- Clean, modern sans-serif for body text
- Distinctive tech-oriented display font for headings
- Readable font sizes with strong contrast

### UX Elements
- Responsive design for all device sizes (mobile, tablet, desktop)
- Subtle parallax scrolling
- Animated data visualization components
- Interactive AI demo embedded in homepage and service pages
- Floating navigation that transforms on scroll
- Micro-interactions on hover/click
- Mobile-optimized touch interactions

## 3. Tech Stack

### Frontend
- **Core**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5 or Tailwind CSS
- **JavaScript Libraries**: 
  - jQuery (minimized usage where native JS is sufficient)
  - GSAP for animations
  - AOS (Animate On Scroll) for scroll animations
- **Responsive Framework**: Bootstrap Grid or custom CSS Grid/Flexbox

### Interactive Components
- **Charts/Visualizations**: D3.js or Chart.js
- **Interactive Elements**: Vanilla JavaScript with CSS transitions
- **Carousel/Sliders**: Swiper.js or Slick

### Content Management
- **Blog Platform**: Jekyll
  - Markdown files for content
  - YAML front matter for metadata
  - Liquid templating for dynamic content
- **Main Site Content**: HTML templates with Jekyll includes
- **Data Files**: YAML/JSON for reusable content blocks

### AI Demo Integration
- **Primary Method**: Embedded Gradio interfaces via Hugging Face Spaces
- **Secondary Method**: Custom HTML/JS interfaces using fetch API to external services
- **Alternative**: TensorFlow.js for lightweight browser-based demos
- **Integration Approach**: Responsive iframes with fallback content

### Form Handling
- **Contact Forms**: Formspree, Netlify Forms, or similar static form services
- **File Uploads**: If needed, integrate with third-party services like Dropbox or Google Drive

### Deployment & Hosting
- **Source Control**: GitHub repository
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions for automated builds and deployments
- **Domain**: Custom domain (bixingtechnology.com) with HTTPS

### Analytics & Tracking
- Google Analytics or Plausible Analytics
- Tag Manager for event tracking

## 4. Local Development Workflow

### Setup
1. Create GitHub repository:
   ```bash
   git init
   git remote add origin https://github.com/yourusername/bixing-website.git
   ```

2. Install Jekyll:
   ```bash
   gem install jekyll bundler
   jekyll new . --force
   ```

3. Modify Jekyll configuration:
   ```
   # _config.yml
   title: Bixing Technology
   baseurl: ""
   url: "https://bixingtechnology.com"
   ```

4. Create directory structure:
   ```
   /
   ├── _data/           # YAML data files
   ├── _includes/       # Reusable HTML components
   ├── _layouts/        # Page templates
   ├── _posts/          # Blog content
   ├── _sass/           # Sass partials
   ├── assets/          # CSS, JS, images
   ├── pages/           # Main site pages
   └── _config.yml      # Jekyll configuration
   ```

### Development
1. Run local development server:
   ```bash
   bundle exec jekyll serve
   ```
   - Access at http://localhost:4000
   - Changes appear with automatic rebuilds

2. CSS Development:
   - Use Sass for easier maintainability
   - Organize styles with a logical structure:
     ```
     _sass/
     ├── base/
     ├── components/
     ├── layouts/
     ├── pages/
     └── main.scss
     ```

3. JavaScript Development:
   - Keep JS modular with separate files for each feature
   - Use ES6 modules where supported
   - Consider a simple bundler like Webpack for larger projects

### Content Management
1. For Industry Insights:
   - Create posts in the `_posts` directory with proper date format:
     ```
     ---
     layout: post
     title: "Future of AI in Education"
     categories: [AI, Education]
     author: Bixing Team
     ---
     
     Content goes here...
     ```

2. For Services and other structured data:
   - Create YAML files in `_data` directory
   - Access in templates via `site.data.filename`

## 5. Implementation Plan

### Phase 1: Foundation
1. Set up GitHub repository with basic Jekyll structure
2. Create core layouts and includes
3. Implement base styling (typography, colors, variables)
4. Develop responsive navigation and footer
5. Build homepage structure

### Phase 2: Core Pages
1. Implement services pages with detailed content
2. Develop about and contact pages
3. Create career page with job listings
4. Set up basic blog structure with Jekyll
5. Integrate contact form functionality
6. Ensure responsive behavior across all pages

### Phase 3: Interactive Elements
1. Implement JavaScript interactions and animations
2. Develop or embed AI demos:
   - Create Gradio demos on Hugging Face Spaces
   - Configure proper embedding parameters
   - Implement responsive iframe integration
3. Create data visualization components with D3.js or Chart.js
4. Implement custom scrolling effects and transitions

### Phase 4: Content & Optimization
1. Populate all pages with final content
2. Optimize images and assets
3. Implement SEO best practices:
   - Meta tags
   - Structured data
   - Sitemap
   - Optimized headings and content
4. Test across devices and browsers

### Phase 5: Launch & Monitoring
1. Final QA and adjustments
2. Configure GitHub Pages with custom domain
3. Set up analytics
4. Create documentation for future updates

## 6. Technical Considerations for GitHub Pages

### Jekyll Configuration
1. **URL Structure**:
   - Configure permalinks for clean URLs:
     ```yml
     permalink: /:categories/:title/
     ```
   - Set up proper 404 page

2. **Collections**:
   - Use Jekyll collections for services, team members, etc.:
     ```yml
     collections:
       services:
         output: true
         permalink: /services/:name/
       team:
         output: false
     ```

### Performance Optimization
1. **Image Optimization**:
   - Use modern formats (WebP with fallbacks)
   - Implement responsive images with srcset
   - Lazy loading for images below the fold

2. **Resource Loading**:
   - Minimize render-blocking resources
   - Defer non-critical JavaScript
   - Preload critical assets

3. **Build Optimization**:
   - Minify HTML, CSS, and JavaScript
   - Implement cache headers
   - Use CDN for assets if needed

### GitHub Actions Workflow
1. Configure automatic builds and deployments:
   ```yml
   # .github/workflows/github-pages.yml
   name: Build and deploy Jekyll site to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     github-pages:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/cache@v2
           with:
             path: vendor/bundle
             key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
         - uses: helaili/jekyll-action@v2
           with:
             token: ${{ secrets.GITHUB_TOKEN }}
   ```

### AI Demo Integration
1. **Hugging Face Spaces**:
   - Create Spaces with consistent branding
   - Use responsive iframe embedding:
     ```html
     <div class="demo-container">
       <iframe 
         src="https://huggingface.co/spaces/bixing/demo-name" 
         frameborder="0" 
         width="100%" 
         height="450">
       </iframe>
     </div>
     ```
   - Implement loading states

2. **Custom TensorFlow.js Demos**:
   - Use async loading to prevent blocking:
     ```html
     <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.11.0/dist/tf.min.js" defer></script>
     ```
   - Include fallback content for non-supporting browsers

### Form Handling
1. **Formspree Integration**:
   ```html
   <form action="https://formspree.io/f/yourformid" method="POST">
     <!-- form fields -->
   </form>
   ```

2. **Custom Validation**:
   - Implement client-side validation with JavaScript
   - Provide clear error messages and visual feedback

## 7. Maintenance Plan

### Content Updates
1. **Blog Posts**:
   - Create new markdown files in `_posts` directory
   - Follow naming convention: `YYYY-MM-DD-title.md`
   - Include proper front matter

2. **Service Updates**:
   - Modify corresponding YAML data or collection files
   - Run build to regenerate static files

### Technical Maintenance
1. **Dependency Updates**:
   - Regularly update Jekyll and plugins
   - Check for JavaScript library updates

2. **Performance Monitoring**:
   - Periodic Lighthouse audits
   - Analytics review for user behavior patterns

3. **Backup Strategy**:
   - Git repository serves as primary backup
   - Consider periodic exports of critical content
