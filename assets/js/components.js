/**
 * Components.js - Simple utility to include header and footer components
 * For Bixing Technology website
 */

// Store references to global variables for reuse
let pathToRoot = '';
let cacheBuster = '';

// Function to load the header component
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    console.log('Loading header component');
    
    fetch(pathToRoot + 'components/header.html' + cacheBuster)
        .then(response => response.text())
        .then(data => {
            // Use path helper to standardize all path references
            if (window.pathHelper && typeof window.pathHelper.updatePathReferences === 'function') {
                data = window.pathHelper.updatePathReferences(data, pathToRoot);
            } else {
                // Fallback to original path handling if path helper is not available
                data = data.replace(/src="assets\//g, `src="${pathToRoot}assets/`);
                data = data.replace(/href="assets\//g, `href="${pathToRoot}assets/`);
                data = data.replace(/href="\//g, `href="${pathToRoot}`);
                data = data.replace(/src="\//g, `src="${pathToRoot}`);
                
                // Update navigation links with pathToRoot
                if (pathToRoot) {
                    data = data.replace(/href="pages\//g, `href="${pathToRoot}pages/`);
                    data = data.replace(/href="index.html"/g, `href="${pathToRoot}index.html"`);
                }
            }
            
            headerPlaceholder.innerHTML = data;
            
            // Set active class for current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPage) {
                    link.classList.add('active');
                }
                
                // Handle dropdown active states
                if (link.classList.contains('dropdown-toggle')) {
                    const dropdownItems = link.nextElementSibling.querySelectorAll('.dropdown-item');
                    dropdownItems.forEach(item => {
                        if (item.getAttribute('href') === currentPage) {
                            link.classList.add('active');
                        }
                    });
                }
            });
            
            // Initialize header scroll effect
            const header = document.querySelector('.header');
            if (header) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
                
                // Trigger scroll event to set initial state
                window.dispatchEvent(new Event('scroll'));
            }
            
            // Apply translations if available
            if (window.i18n && typeof window.i18n.applyTranslations === 'function') {
                window.i18n.applyTranslations();
            } else if (typeof applyTranslations === 'function') {
                applyTranslations();
            }
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to load the footer component
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;
    
    console.log('Loading footer component');
    
    fetch(pathToRoot + 'components/footer.html' + cacheBuster)
        .then(response => response.text())
        .then(data => {
            // Use path helper to standardize all path references
            if (window.pathHelper && typeof window.pathHelper.updatePathReferences === 'function') {
                data = window.pathHelper.updatePathReferences(data, pathToRoot);
            } else {
                // Fallback to original path handling if path helper is not available
                data = data.replace(/src="assets\//g, `src="${pathToRoot}assets/`);
                data = data.replace(/href="assets\//g, `href="${pathToRoot}assets/`);
                data = data.replace(/href="\//g, `href="${pathToRoot}`);
                data = data.replace(/src="\//g, `src="${pathToRoot}`);
                
                // Update navigation links with pathToRoot
                if (pathToRoot) {
                    data = data.replace(/href="pages\//g, `href="${pathToRoot}pages/`);
                    data = data.replace(/href="index.html"/g, `href="${pathToRoot}index.html"`);
                }
            }
            
            footerPlaceholder.innerHTML = data;
            
            // Footer company name hover effect
            const footerLogoLink = document.querySelector('.footer-logo-link');
            const companyName = document.querySelector('.company-name');
            
            if (footerLogoLink && companyName) {
                footerLogoLink.addEventListener('mouseenter', function() {
                    companyName.style.textShadow = '0 0 15px rgba(0, 168, 255, 0.5)';
                });
                
                footerLogoLink.addEventListener('mouseleave', function() {
                    companyName.style.textShadow = '0 0 15px rgba(0, 168, 255, 0.3)';
                });
            }
            
            // Apply translations after footer is loaded
            if (window.i18n && typeof window.i18n.applyTranslations === 'function') {
                window.i18n.applyTranslations();
            } else if (typeof applyTranslations === 'function') {
                applyTranslations();
            }
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct path to components based on the current page location
    pathToRoot = document.body.getAttribute('data-path-to-root') || '';
    
    // Add cache-busting parameter using a timestamp based on the date only, not time
    // This creates a new version each day rather than each page load
    const today = new Date();
    cacheBuster = '?v=' + today.getFullYear() + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
    
    // Initial load of components
    loadHeader();
    loadFooter();
    
    // Listen for language change events
    document.addEventListener('languageChanged', function(e) {
        console.log('Language changed event detected, reloading components');
        // Reload components when language changes
        setTimeout(() => {
            loadHeader();
            loadFooter();
        }, 100); // Small delay to ensure translations are loaded
    });
    
    // Listen for translations applied events
    document.addEventListener('translationsApplied', function(e) {
        console.log('Translations applied event detected');
        // Update any dynamic content that might need translation
    });
});
