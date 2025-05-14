/**
 * i18n-module.js - Consolidated internationalization module for Bixing Technology website
 * 
 * This module combines the functionality from multiple i18n implementations into a single,
 * well-organized module that handles all translation needs across the website.
 * 
 * Features:
 * - Language detection based on browser settings
 * - Language persistence using localStorage
 * - Lazy loading of translations
 * - Comprehensive translation application (text, placeholders, attributes)
 * - Exported API for use in other scripts
 */

// Create a namespace for the i18n functionality
const BixingI18n = (function() {
  // Private variables
  let currentLanguage = 'en';
  let translations = null;
  let translationsLoaded = false;
  let translationLoadCallbacks = [];
  
  /**
   * Initialize the language based on browser settings or localStorage
   */
  function initLanguage() {
    try {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('bixingLanguage');
      
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
        currentLanguage = savedLanguage;
        console.log(`Using saved language preference: ${currentLanguage}`);
      } else {
        // Check browser language
        const browserLanguage = navigator.language || navigator.userLanguage;
        console.log(`Detected browser language: ${browserLanguage}`);
        
        // Set language based on browser preference
        if (browserLanguage.startsWith('zh')) {
          currentLanguage = 'zh';
        } else {
          currentLanguage = 'en'; // Default to English
        }
        
        // Save to localStorage
        localStorage.setItem('bixingLanguage', currentLanguage);
        console.log(`Set initial language to: ${currentLanguage}`);
      }
      
      // Set the document language attribute
      document.documentElement.lang = currentLanguage;
      
      // Update UI to reflect current language
      updateLanguageToggle();
      
      // Load translations and apply them
      loadTranslations();
    } catch (error) {
      console.error('Error initializing language:', error);
      currentLanguage = 'en'; // Fallback to English
      document.documentElement.lang = currentLanguage;
    }
  }
  
  /**
   * Load translations based on current language
   */
  function loadTranslations() {
    // If translations are already loaded, apply them immediately
    if (translationsLoaded) {
      applyTranslations();
      return;
    }
    
    // Path to translations file
    const translationsPath = `/assets/js/translations/${currentLanguage}.json`;
    
    console.log(`Loading translations from: ${translationsPath}`);
    
    // Fetch translations
    fetch(translationsPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load translations: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        translations = data;
        console.log(`Main translations loaded for ${currentLanguage}`);
        
        // Check if we're on a blog page by looking at the URL
        const currentPath = window.location.pathname;
        if (currentPath.includes('/blog/') && !window.preventBlogTranslations) {
          // Skip loading blog-specific translations if preventBlogTranslations is set
          console.log('Checking if blog-specific translations should be loaded');
          
          // Extract blog post slug from URL
          const pathParts = currentPath.split('/');
          const blogPostSlug = pathParts[pathParts.length - 1].replace('.html', '');
          
          // Construct path to blog-specific translations
          const blogTranslationsPath = `/blog/${pathParts[2]}/${pathParts[3]}/${pathParts[4]}/${blogPostSlug}-translations.json`;
          
          console.log(`Attempting to load blog-specific translations from: ${blogTranslationsPath}`);
          
          // Fetch blog-specific translations
          fetch(blogTranslationsPath)
            .then(response => {
              if (!response.ok) {
                console.warn(`No blog-specific translations found at ${blogTranslationsPath}`);
                return null;
              }
              return response.json();
            })
            .then(blogData => {
              if (blogData) {
                console.log(`Blog-specific translations loaded for ${blogPostSlug}`);
                // Merge blog translations with main translations
                translations = { ...translations, ...blogData };
              }
              
              translationsLoaded = true;
              
              // Apply translations
              applyTranslations();
              
              // Call any callbacks waiting for translations
              translationLoadCallbacks.forEach(callback => callback());
              translationLoadCallbacks = [];
            })
            .catch(error => {
              console.error('Error loading blog-specific translations:', error);
              translationsLoaded = true;
              
              // Apply translations anyway with what we have
              applyTranslations();
              
              // Call any callbacks waiting for translations
              translationLoadCallbacks.forEach(callback => callback());
              translationLoadCallbacks = [];
            });
        } else {
          // Not a blog page, just use main translations
          translationsLoaded = true;
          
          // Apply translations
          applyTranslations();
          
          // Call any callbacks waiting for translations
          translationLoadCallbacks.forEach(callback => callback());
          translationLoadCallbacks = [];
        }
      })
      .catch(error => {
        console.error('Error loading translations:', error);
        
        // Fallback to embedded translations if available
        if (window.embeddedTranslations && window.embeddedTranslations[currentLanguage]) {
          console.log('Using embedded translations as fallback');
          translations = window.embeddedTranslations[currentLanguage];
          translationsLoaded = true;
          
          // Apply translations
          applyTranslations();
          
          // Call any callbacks waiting for translations
          translationLoadCallbacks.forEach(callback => callback());
          translationLoadCallbacks = [];
        }
      });
  }
  
  /**
   * Toggle between English and Chinese
   */
  function toggleLanguage() {
    console.log(`Toggling language from ${currentLanguage}`);
    
    // Switch language
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    
    // Save to localStorage
    localStorage.setItem('bixingLanguage', currentLanguage);
    
    // Update document language attribute
    document.documentElement.lang = currentLanguage;
    
    // Update UI
    updateLanguageToggle();
    
    // Reset translations loaded flag
    translationsLoaded = false;
    
    // Load new translations
    loadTranslations();
    
    // Dispatch a custom event to notify other components about the language change
    const languageChangedEvent = new CustomEvent('languageChanged', {
      detail: { language: currentLanguage }
    });
    document.dispatchEvent(languageChangedEvent);
    
    console.log(`Language toggled to ${currentLanguage}, dispatched languageChanged event`);
  }
  
  /**
   * Update the language toggle button UI
   */
  function updateLanguageToggle() {
    const currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
      currentLanguageElement.textContent = currentLanguage.toUpperCase();
      
      // Add visual feedback
      currentLanguageElement.classList.add('language-changed');
      setTimeout(() => {
        currentLanguageElement.classList.remove('language-changed');
      }, 500);
    }
    
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
      if (currentLanguage === 'en') {
        languageToggle.setAttribute('title', 'Switch to Chinese');
        languageToggle.setAttribute('aria-label', 'Switch to Chinese');
      } else {
        languageToggle.setAttribute('title', 'Switch to English');
        languageToggle.setAttribute('aria-label', 'Switch to English');
      }
    }
  }
  
  /**
   * Apply translations to the page
   */
  function applyTranslations() {
    try {
      if (!translations) {
        console.warn(`No translations available for ${currentLanguage}`);
        return;
      }
      
      console.log(`Applying translations for ${currentLanguage}`);
      
      let translatedElements = 0;
      const missingTranslations = [];

      // Force reload header and footer components to ensure they get updated translations
      const headerPlaceholder = document.getElementById('header-placeholder');
      const footerPlaceholder = document.getElementById('footer-placeholder');
      
      // Translate all elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
          // Check for elements that might contain HTML
          if (element.tagName === 'P' || element.classList.contains('company-description')) {
            element.innerHTML = translations[key];
          } 
          // Check for input placeholders
          else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.placeholder = translations[key];
          } 
          // Check if this is a button or input with a value
          else if ((element.tagName === 'BUTTON' || element.tagName === 'INPUT') && element.hasAttribute('value')) {
            element.value = translations[key];
          }
          // For all other elements, update the text content
          else {
            element.textContent = translations[key];
          }
          translatedElements++;
        } else {
          missingTranslations.push(key);
          console.warn('Missing translation for key:', key, 'in language:', currentLanguage);
        }
      });
      
      // Update attributes that need translation (placeholder, alt, etc.)
      document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
          element.placeholder = translations[key];
          translatedElements++;
        } else {
          missingTranslations.push(key);
        }
      });
      
      document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[key]) {
          element.alt = translations[key];
          translatedElements++;
        } else {
          missingTranslations.push(key);
        }
      });
      
      document.querySelectorAll('[data-i18n-value]').forEach(element => {
        const key = element.getAttribute('data-i18n-value');
        if (translations[key]) {
          element.value = translations[key];
          translatedElements++;
        } else {
          missingTranslations.push(key);
        }
      });
      
      // Update the page title
      const titleElement = document.querySelector('title');
      if (titleElement && titleElement.hasAttribute('data-i18n')) {
        const titleKey = titleElement.getAttribute('data-i18n');
        if (translations[titleKey]) {
          document.title = translations[titleKey];
          translatedElements++;
        } else {
          missingTranslations.push(titleKey);
        }
      }
      
      // Handle language-specific elements (like images)
      document.querySelectorAll('.lang-en, .lang-zh').forEach(element => {
        if (element.classList.contains('lang-' + currentLanguage)) {
          element.style.display = '';
        } else {
          element.style.display = 'none';
        }
      });
      
      // Log translation statistics for debugging
      console.log(`Translated ${translatedElements} elements`);
      if (missingTranslations.length > 0) {
        console.warn('Missing translations for keys:', missingTranslations);
      }

      // Dispatch a custom event after translations are applied
      const translationsAppliedEvent = new CustomEvent('translationsApplied', {
        detail: { language: currentLanguage }
      });
      document.dispatchEvent(translationsAppliedEvent);
    } catch (error) {
      console.error('Error applying translations:', error);
    }
  }
  
  /**
   * Get a translation for a specific key
   */
  function getTranslation(key) {
    if (!translations) {
      console.warn('Translations not loaded yet');
      return key;
    }
    
    if (translations[key]) {
      return translations[key];
    }
    
    console.warn(`Translation not found for key: ${key}`);
    return key;
  }
  
  /**
   * Register a callback to be called when translations are loaded
   */
  function onTranslationsLoaded(callback) {
    if (translationsLoaded) {
      // If translations are already loaded, call the callback immediately
      callback();
    } else {
      // Otherwise, add it to the queue
      translationLoadCallbacks.push(callback);
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - initializing i18n module');
    initLanguage();
    
    // Add click event to language toggle
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
      languageToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Language toggle clicked');
        toggleLanguage();
      });
      
      console.log('Language toggle event listener added');
    } else {
      console.warn('Language toggle element not found');
    }
  });
  
  // Public API
  return {
    init: initLanguage,
    toggleLanguage: toggleLanguage,
    getCurrentLanguage: function() { return currentLanguage; },
    getTranslation: getTranslation,
    applyTranslations: applyTranslations,
    onTranslationsLoaded: onTranslationsLoaded
  };
})();

// Make the i18n module globally available
window.BixingI18n = BixingI18n;

// Create a global shorthand for convenience
window.i18n = BixingI18n;

// Global function for toggling language (for backward compatibility)
window.toggleLanguage = function() {
  BixingI18n.toggleLanguage();
};

// Global function for getting current language (for backward compatibility)
window.getCurrentLanguage = function() {
  return BixingI18n.getCurrentLanguage();
};
