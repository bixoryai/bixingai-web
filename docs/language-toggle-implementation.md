# Instant Language Toggle Implementation Guide

This document explains how instant language toggling is implemented across the Bixing Technology website, allowing users to switch between English and Chinese without page reloads.

## Architecture Overview

The language toggle system consists of three main components:

1. **Core Language Toggle Logic** (`i18n-common.js`): Contains shared translations and core language toggle functionality
2. **Page-Specific Translation Files** (`i18n-[page-name].js`): Contains page-specific translations
3. **HTML Markup with Data Attributes**: Elements that need translation use `data-i18n` attributes

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
      el.textContent = text;
    }
  });
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

#### Example: `i18n-careers.js`

```javascript
// i18n-careers.js
// Careers page translations
window.translations = window.translations || {};
window.translations.en = Object.assign({}, window.translations.en, {
  "page.title": "Careers - Bixing Technology",
  "careers.hero.title": "Join Our Team",
  "careers.hero.subtitle": "Be part of a team that's shaping the future of AI technology and making a real impact",
  // ... other page-specific translations
});

window.translations.zh = Object.assign({}, window.translations.zh, {
  "page.title": "加入我们 - 毕行科技",
  "careers.hero.title": "加入我们的团队",
  "careers.hero.subtitle": "成为塑造AI技术未来并产生真正影响的团队的一员",
  // ... other page-specific translations
});
```

### 3. HTML Implementation

Each page needs to:

1. Include the necessary script tags
2. Add `data-i18n` attributes to elements that need translation
3. Ensure the header component with the language toggle button is properly loaded

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

#### Language Toggle Button (in header.html)

```html
<button id="languageToggle" onclick="toggleLanguage()" class="language-toggle">
  <span id="currentLanguage">EN</span>
</button>
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

### 3. Services Pages

- **Translation File**: `i18n-services.js`
- **Sub-pages**:
  - AI Education/Training: `i18n-services-education.js`
  - AI Custom Solutions: `i18n-services-solutions.js`
  - Enterprise AI Consultation: `i18n-services-consultation.js`

### 4. Industry Insights Page

- **Translation File**: `i18n-insights.js`
- **Key Sections**:
  - Blog posts listing
  - Categories
  - Featured articles

### 5. Careers Page

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
