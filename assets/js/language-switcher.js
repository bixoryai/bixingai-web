/**
 * Bixing Technology Website
 * Language Switcher Script
 * 
 * This script handles language switching functionality across all pages.
 * It directly manipulates the DOM to apply translations without page reload.
 */

// Get translations from i18n.js (they're already defined in the global scope)
document.addEventListener('DOMContentLoaded', function() {
    // Check if language parameter is in URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // If language parameter exists, use it
    if (urlLang && (urlLang === 'en' || urlLang === 'zh')) {
        // Set the language
        currentLanguage = urlLang;
        
        // Save to localStorage
        localStorage.setItem('bixingLanguage', currentLanguage);
        
        // Update UI
        updateLanguageToggle();
        
        // Apply translations
        applyTranslations();
    }
    
    // Get the language toggle button
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        // Remove any existing event listeners
        const newToggle = languageToggle.cloneNode(true);
        languageToggle.parentNode.replaceChild(newToggle, languageToggle);
        
        // Add click event listener
        newToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Switch language
            const newLang = currentLanguage === 'en' ? 'zh' : 'en';
            
            // Set the language
            currentLanguage = newLang;
            
            // Save to localStorage
            localStorage.setItem('bixingLanguage', currentLanguage);
            
            // Update URL with language parameter
            const url = new URL(window.location.href);
            url.searchParams.set('lang', newLang);
            history.pushState({}, '', url.toString());
            
            // Update UI
            updateLanguageToggle();
            
            // Apply translations
            applyTranslations();
            
            console.log('Language switched to:', currentLanguage);
        });
    }
});
