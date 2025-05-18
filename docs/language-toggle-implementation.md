# Instant Language Toggle Implementation Guide

This document explains how instant language toggling is implemented across the Bixing Technology website, allowing users to switch between English and Chinese without page reloads.

## Architecture Overview

The language toggle system consists of four main components:

1. **Core Language Toggle Logic** (`i18n-common.js`): Contains shared translations and core language toggle functionality
2. **Page-Specific Translation Files** (`i18n-[page-name].js`): Contains page-specific translations
3. **HTML Markup with Data Attributes**: Elements that need translation use `data-i18n` attributes
4. **Components System** (`components.js`): Loads header and footer components and ensures consistent language handling

## Implementation Details

### 1. Core Language Toggle Logic (`i18n-common.js`)

This file provides the foundation for language toggling across all pages:

```javascript
// i18n-common.js
// Common/shared translations for Bixing Technology website
window.translations = window.translations || {};

// --- Core language toggle functions ---
function getCurrentLanguage() {
  return localStorage.getItem('bixingLanguage') || 'en';
}

function applyTranslations(lang) {
  if (!window.translations || !window.translations[lang]) return;
  var elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = window.translations[lang][key];
    if (typeof text !== 'undefined') {
      // Check if the translation contains HTML
      if (text.includes('<') && text.includes('>')) {
        el.innerHTML = text; // Use innerHTML for translations containing HTML
      } else {
        el.textContent = text; // Use textContent for plain text
      }
    }
  });
  
  // Apply special translations for elements that need custom handling
  // For example, the company description in the footer which contains HTML
  var companyDescElement = document.querySelector('[data-i18n="footer.companyDescription"]');
  if (companyDescElement && window.translations[lang]["footer.companyDescription"]) {
    companyDescElement.innerHTML = window.translations[lang]["footer.companyDescription"];
  }
}

window.applyTranslations = applyTranslations;

// Set up language on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    var lang = getCurrentLanguage();
    applyTranslations(lang);
    var currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
      currentLanguageElement.textContent = lang === 'en' ? 'EN' : '中文';
    }
  });
} else {
  var lang = getCurrentLanguage();
  applyTranslations(lang);
  var currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = lang === 'en' ? 'EN' : '中文';
  }
}

// Global toggleLanguage function
window.toggleLanguage = function() {
  const storedLanguage = getCurrentLanguage();
  const newLanguage = storedLanguage === 'en' ? 'zh' : 'en';
  localStorage.setItem('bixingLanguage', newLanguage);
  var currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = newLanguage === 'en' ? 'EN' : '中文';
  }
  applyTranslations(newLanguage);
  
  // Dispatch an event so other scripts can react to language changes
  document.dispatchEvent(new CustomEvent('languageToggled', { detail: { language: newLanguage } }));
};

// Common translations shared across all pages
window.translations.en = Object.assign({}, window.translations.en, {
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.services": "Products & Services",
  "nav.industryInsights": "Industry Insights",
  "nav.careers": "Careers",
  "nav.contact": "Contact Us",
  "footer.company": "Bixing Technology",
  "footer.companyDescription": "A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation.",
  // ... other common translations
});

window.translations.zh = Object.assign({}, window.translations.zh, {
  "nav.home": "首页",
  "nav.about": "关于我们",
  "nav.services": "产品与服务",
  "nav.industryInsights": "行业洞察",
  "nav.careers": "加入我们",
  "nav.contact": "联系我们",
  "footer.company": "毕行科技",
  "footer.companyDescription": "国际前沿AI解决方案提供商,<br>助你充满AI的力量。",
  // ... other common translations
});
```

**Key Improvement**: The `toggleLanguage` function now dispatches a custom `languageToggled` event that other scripts can listen for to react to language changes. This ensures consistent language handling across all components and pages.

### 2. Page-Specific Translation Files

Each page has its own translation file that extends the global translations object with page-specific content:

#### Example: `i18n-contact.js`

```javascript
// i18n-contact.js
// Contact Us page translations
window.translations = window.translations || {};
window.translations.en = Object.assign({}, window.translations.en, {
  "page.title": "Contact Us - Bixing Technology",
  "contact.hero.title": "Contact Us",
  "contact.hero.subtitle": "Let Us Help You Achieve AI Transformation",
  // ... other page-specific translations
});

window.translations.zh = Object.assign({}, window.translations.zh, {
  "page.title": "联系我们 - 毕行科技",
  "contact.hero.title": "联系我们",
  "contact.hero.subtitle": "让我们帮助您实现AI转型",
  // ... other page-specific translations
});
```

#### Example: `i18n-insights.js`

```javascript
// i18n-insights.js
// Industry Insights page translations
window.translations = window.translations || {};
window.translations.en = Object.assign({}, window.translations.en, {
  "page.title": "Industry Insights - Bixing Technology",
  "insights.hero.title": "AI Industry Insights",
  "insights.hero.subtitle": "Explore the latest developments, strategies, and applications in AI",
  "insights.featured.badge": "Featured Insight",
  "insights.featured.title": "2025 Outlook: The Future of AI in Enterprise",
  "insights.featured.excerpt": "As AI rapidly evolves, enterprises face new opportunities and challenges in implementation. Discover the key trends shaping the next year of AI adoption.",
  "insights.featured.link": "Read Full Article <i class=\"fas fa-arrow-right ms-2\"></i>",
  "insights.latest.title": "Latest Insights",
  "insights.filter.all": "All Topics"
  // ... other page-specific translations
});

window.translations.zh = Object.assign({}, window.translations.zh, {
  "page.title": "行业洞察 - 毕行科技",
  "insights.hero.title": "AI行业洞察",
  "insights.hero.subtitle": "探索人工智能领域的最新发展、策略和应用",
  "insights.featured.badge": "特色洞察",
  "insights.featured.title": "2025年企业AI发展趋势展望",
  "insights.featured.excerpt": "随着人工智能的快速发展，企业面临着实施过程中的新机遇和挑战。了解将塑造未来一年AI应用的关键趋势。",
  "insights.featured.link": "阅读全文 <i class=\"fas fa-arrow-right ms-2\"></i>",
  "insights.latest.title": "最新洞察",
  "insights.filter.all": "所有主题"
  // ... other page-specific translations
});
```

### 3. Components System (`components.js`)

The components.js file handles loading the header and footer components and ensures consistent language handling:

```javascript
// components.js - Loads header and footer components
let pathToRoot = '';

// Function to load the header component
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    // Get current language before loading header
    const currentLang = localStorage.getItem('bixingLanguage') || 'en';
    
    fetch(pathToRoot + 'components/header.html')
        .then(response => response.text())
        .then(data => {
            // Update paths in the header
            data = data.replace(/src="assets\//g, `src="${pathToRoot}assets/`);
            data = data.replace(/href="assets\//g, `href="${pathToRoot}assets/`);
            // ... other path updates
            
            // Pre-translate navigation items if in Chinese
            if (currentLang === 'zh') {
                // Replace English nav items with Chinese equivalents directly in the HTML
                data = data.replace(/>Home</g, '>首页<');
                data = data.replace(/>About Us</g, '>关于我们<');
                data = data.replace(/>Products &amp; Services</g, '>产品与服务<');
                data = data.replace(/>Products & Services</g, '>产品与服务<');
                data = data.replace(/>Industry Insights</g, '>行业洞察<');
                data = data.replace(/>Careers</g, '>加入我们<');
                data = data.replace(/>Contact Us</g, '>联系我们<');
            }
            
            headerPlaceholder.innerHTML = data;
            
            // Initialize language toggle based on stored preference
            const currentLanguageElement = document.getElementById('currentLanguage');
            if (currentLanguageElement) {
                currentLanguageElement.textContent = currentLang === 'en' ? 'EN' : '中文';
            }
            
            // ... other header initialization
        });
}

// Function to load the footer component
function loadFooter() {
    // Similar implementation to loadHeader
    // ...
}

// Initialize components when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get path to root from body data attribute
    const body = document.body;
    if (body.hasAttribute('data-path-to-root')) {
        pathToRoot = body.getAttribute('data-path-to-root');
    }
    
    loadHeader();
    loadFooter();
});
```

### 4. HTML Implementation

Each page needs to:

1. Include the necessary script tags
2. Add `data-i18n` attributes to elements that need translation
3. Ensure the header and footer components are properly loaded
4. Listen for the 'languageToggled' event for page-specific content that can't use data-i18n attributes

#### Script Inclusion

```html
<!-- i18n Scripts -->
<script src="../../assets/js/i18n-common.js"></script>
<script src="../../assets/js/i18n-[page-name].js"></script>

<!-- Components JS (loads header with language toggle button) -->
<script src="../../assets/js/components.js"></script>
```

#### HTML Markup with Data Attributes

```html
<h1 class="hero-title" data-i18n="page.hero.title">Page Title</h1>
<p class="hero-subtitle" data-i18n="page.hero.subtitle">Page subtitle text</p>

<!-- Form labels -->
<label for="firstName" class="form-label" data-i18n="page.form.firstname">First Name</label>

<!-- Buttons -->
<button type="submit" class="btn" data-i18n="page.form.submit">Submit</button>
```

#### Header and Footer Placeholders

```html
<!-- Header Placeholder -->
<div id="header-placeholder"></div>

<!-- Main Content -->
<main>
  <!-- Page content here -->
</main>

<!-- Footer Placeholder -->
<div id="footer-placeholder"></div>
```

#### Listening for Language Toggle Events

For content that can't use data-i18n attributes (like dynamically generated content or content with HTML markup):

```javascript
// Apply translations to specific elements that don't use data-i18n attributes
function applyPageSpecificTranslations(lang) {
    const translations = lang === 'en' ? window.translations.en : window.translations.zh;
    
    // Apply translations to specific elements
    document.querySelector('.dynamic-content').innerHTML = translations["page.dynamic.content"];
    // ... other elements
}

// Initial application on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const currentLang = localStorage.getItem('bixingLanguage') || 'en';
        applyPageSpecificTranslations(currentLang);
        
        // Listen for language toggle events
        document.addEventListener('languageToggled', function(e) {
            const lang = e.detail.language;
            applyPageSpecificTranslations(lang);
        });
    }, 500); // Short delay to ensure components are loaded
});
```

### 5. Header HTML Structure

The header.html file must have a consistent structure to ensure proper language toggling:

```html
<header class="header">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/bixingai-logo.png" alt="Bixing Technology Logo" class="logo">
                    <span data-i18n="footer.company">Bixing Technology</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <div class="navbar-toggler-icon"><span></span></div>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="pages/menu/services.html" role="button" aria-expanded="false" data-i18n="nav.services">Products & Services</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="pages/services/education.html" data-i18n="nav.education">AI Education/Training</a></li>
                                <!-- Other dropdown items -->
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="pages/menu/insights.html" data-i18n="nav.industryInsights">Industry Insights</a>
                        </li>
                        <!-- Other nav items -->
                        <li class="nav-item">
                            <div class="language-selector">
                                <button id="languageToggle" onclick="toggleLanguage()" class="btn btn-sm btn-outline-light rounded-pill px-3">
                                    <span id="currentLanguage">EN</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
```

## Implementation by Page

### 1. Home Page

> **Note**: The Home page has its own custom implementation and does not follow this common approach. It uses a different mechanism for language toggling that is specific to the Home page's unique requirements.

### 2. About Us Page

- **Translation File**: `i18n-about.js`
- **Key Sections**:
  - Company history
  - Mission and vision
  - Team members
  - Values

### 3. Contact Us Page

- **Translation File**: `i18n-contact.js`
- **Key Sections**:
  - Contact form
  - Office locations
  - Contact information

### 4. Careers Page

- **Translation File**: `i18n-careers.js`
- **Key Sections**:
  - Job listings
  - Company culture
  - Benefits
  - Application form

### 5. Industry Insights Page

- **Translation File**: `i18n-insights.js`
- **Key Sections**:
  - Featured insight
  - Insight listings
  - Filtering options

### 6. Products & Services Page

- **Translation File**: `i18n-services.js`
- **Key Sections**:
  - Service offerings
  - Statistics
  - Call to action

- **Translation File**: `i18n-services.js`
- **Sub-pages**:
  - AI Education/Training: `i18n-services-education.js`
  - AI Custom Solutions: `i18n-services-solutions.js`
  - Enterprise AI Consultation: `i18n-services-consultation.js`

### 7. Education & Training Page

- **Translation File**: `i18n-education.js`
- **Key Sections**:
  - Hero section
  - Overview section (AI Knowledge Gap)
  - Benefits section
  - Training Process section (6 steps)
  - Programs section (3 program cards)
  - FAQ section

**Implementation Details**:
- The Education page follows the same language toggle pattern as other pages
- All text elements use `data-i18n` attributes for translation
- The page includes both `i18n-common.js` and `i18n-education.js` scripts
- Custom styling includes alternating dark-themed backgrounds for better section differentiation
- Orange gradient buttons match the hero title gradient for visual consistency

### Pages with Instant Language Toggle

- **Translation File**: `i18n-careers.js`
- **Key Sections**:
  - Job listings
  - Company culture
  - Benefits
  - Application form

### 6. Contact Us Page

- **Translation File**: `i18n-contact.js`
- **Key Sections**:
  - Contact information
  - Contact form
  - Office locations

## Implementation Status

The following pages have implemented the instant language toggle functionality:

1. Home page
2. About Us page
3. Contact page
4. Industry Insights page
5. AI Custom Solutions page
6. Education & Training page

## Adding New Pages

To add language toggle functionality to a new page:

1. Create a new `i18n-[page-name].js` file with translations for both languages
2. Include both `i18n-common.js` and your new translation file in the HTML
3. Add `data-i18n` attributes to all elements that need translation
4. Ensure the page has the header component with the language toggle button

## Best Practices

1. **Consistent Key Naming**: Use a hierarchical naming convention for translation keys (e.g., `page.section.element`)
2. **Default Text**: Always include default text in the HTML as a fallback
3. **Special Elements**: For form inputs, use the appropriate approach:
   ```javascript
   if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
     element.placeholder = translations[lang][key];
   } else {
     element.textContent = translations[lang][key];
   }
   ```
4. **HTML in Translations**: If a translation contains HTML, use `innerHTML` instead of `textContent`
5. **Testing**: Always test language toggling on each page to ensure all elements update correctly

## Troubleshooting

- **Missing Translations**: Check if the translation key exists in both language objects
- **Elements Not Updating**: Verify that the element has the correct `data-i18n` attribute
- **Script Loading Issues**: Ensure scripts are loaded in the correct order (common.js before page-specific)
- **Language Toggle Not Working**: Check if the header component is loaded correctly

## Future Enhancements

- Support for additional languages
- Automatic language detection based on browser settings
- Translation memory to improve consistency across pages
- Integration with a translation management system for easier updates
