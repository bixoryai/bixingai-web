/**
 * Components.js - Simple utility to include header and footer components
 * For Bixing Technology website
 */

// Store references to global variables for reuse
let pathToRoot = '';
let cacheBuster = '';

// Utility function to ensure we have a consistent path-to-root value
function getConsistentPathToRoot() {
    // First try to get from the global variable
    if (pathToRoot !== undefined && pathToRoot !== null) {
        return pathToRoot;
    }
    
    // Then try to use the path helper if available
    if (window.pathHelper && typeof window.pathHelper.getPathToRoot === 'function') {
        return window.pathHelper.getPathToRoot();
    }
    
    // Fallback to body attribute
    return document.body ? (document.body.getAttribute('data-path-to-root') || '') : '';
}

// Function to load the header component
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;
    
    console.log('Loading header component');
    
    // Get current language before loading header
    const currentLang = localStorage.getItem('bixingLanguage') || 'en';
    console.log('Current language before loading header:', currentLang);
    
    // Get a consistent path-to-root value
    const currentPathToRoot = getConsistentPathToRoot();
    
    fetch(currentPathToRoot + 'components/header.html' + cacheBuster)
        .then(response => response.text())
        .then(data => {
            // Use path helper to standardize all path references
            if (window.pathHelper && typeof window.pathHelper.updatePathReferences === 'function') {
                data = window.pathHelper.updatePathReferences(data, currentPathToRoot);
            } else {
                // Fallback to original path handling if path helper is not available
                data = data.replace(/src="assets\//g, `src="${currentPathToRoot}assets/`);
                data = data.replace(/href="assets\//g, `href="${currentPathToRoot}assets/`);
                data = data.replace(/href="\//g, `href="${currentPathToRoot}`);
                data = data.replace(/src="\//g, `src="${currentPathToRoot}`);
                
                // Update navigation links with pathToRoot
                if (currentPathToRoot) {
                    data = data.replace(/href="pages\//g, `href="${currentPathToRoot}pages/`);
                    data = data.replace(/href="index.html"/g, `href="${currentPathToRoot}index.html"`);
                }
            }
            
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
                
                // Pre-translate company name to avoid flashing
                data = data.replace(/<span class="company-name"[^>]*>Bixing Technology<\/span>/g, '<span class="company-name" data-i18n="footer.company">毕行科技</span>');
            }
            
            headerPlaceholder.innerHTML = data;
            
            // Initialize language toggle based on stored preference
            const currentLanguageElement = document.getElementById('currentLanguage');
            if (currentLanguageElement) {
                currentLanguageElement.textContent = currentLang === 'en' ? 'EN' : '中文';
                console.log('Initialized language toggle to:', currentLanguageElement.textContent);
            }
            
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
    
    // Get current language before loading footer
    const currentLang = localStorage.getItem('bixingLanguage') || 'en';
    console.log('Current language before loading footer:', currentLang);
    
    // Get a consistent path-to-root value
    const currentPathToRoot = getConsistentPathToRoot();
    
    fetch(currentPathToRoot + 'components/footer.html' + cacheBuster)
        .then(response => response.text())
        .then(data => {
            // Update paths in the footer
            if (window.pathHelper && typeof window.pathHelper.updatePathReferences === 'function') {
                data = window.pathHelper.updatePathReferences(data, currentPathToRoot);
            } else {
                // Fallback to original path handling
                data = data.replace(/src="assets\//g, `src="${currentPathToRoot}assets/`);
                data = data.replace(/href="assets\//g, `href="${currentPathToRoot}assets/`);
                data = data.replace(/href="\//g, `href="${currentPathToRoot}`);
                data = data.replace(/src="\//g, `src="${currentPathToRoot}`);
                
                // Update navigation links with pathToRoot
                if (currentPathToRoot) {
                    data = data.replace(/href="pages\//g, `href="${currentPathToRoot}pages/`);
                    data = data.replace(/href="index.html"/g, `href="${currentPathToRoot}index.html"`);
                }
            }
            
            // Pre-translate footer items if in Chinese
            if (currentLang === 'zh') {
                // Replace English footer items with Chinese equivalents directly in the HTML
                data = data.replace(/>Quick Links</g, '>快捷链接<');
                data = data.replace(/>Home</g, '>首页<');
                data = data.replace(/>About</g, '>关于我们<');
                data = data.replace(/>Careers</g, '>加入我们<');
                data = data.replace(/>Industry Insights</g, '>行业洞察<');
                data = data.replace(/>Products \& Services</g, '>产品与服务<');
                data = data.replace(/>AI Education \& Training</g, '>AI 教育培训<');
                data = data.replace(/>AI Custom Solutions</g, '>AI 定制解决方案<');
                data = data.replace(/>AI Strategy Consultation</g, '>AI 战略咨询<');
                data = data.replace(/>Contact Us</g, '>联系我们<');
                data = data.replace(/>WeChat</g, '>微信<');
                data = data.replace(/>Scan to connect on WeChat</g, '>扫码关注微信<');
                data = data.replace(/>&copy; 2025 Bixing Technology. All Rights Reserved.</g, '>&copy; 2025 毕行科技。保留所有权利。<');
                data = data.replace(/>Privacy Policy</g, '>隐私政策<');
                data = data.replace(/>Terms of Service</g, '>服务条款<');
                
                // Special handling for company description
                data = data.replace(/A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation./g, '国际前沿AI解决方案提供商,<br>助你充满AI的力量。');
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
    let rawPathToRoot = document.body.getAttribute('data-path-to-root') || '';
    
    // Normalize the path-to-root value
    if (window.pathHelper && typeof window.pathHelper.normalizePathToRoot === 'function') {
        pathToRoot = window.pathHelper.normalizePathToRoot(rawPathToRoot);
    } else {
        // Simple normalization fallback
        pathToRoot = rawPathToRoot === '/' ? '' : rawPathToRoot;
    }
    
    // Add cache-busting parameter using a timestamp based on the date only, not time
    // This creates a new version each day rather than each page load
    const today = new Date();
    cacheBuster = '?v=' + today.getFullYear() + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
    
    // Initial load of components
    loadHeader();
    loadFooter();
    
    // Dispatch componentsLoaded event after a short delay to ensure both components are loaded
    setTimeout(function() {
        // Apply translations based on current language preference
        const currentLang = localStorage.getItem('bixingLanguage') || 'en';
        if (typeof applyTranslations === 'function') {
            applyTranslations(currentLang);
        }
        
        // Dispatch event for other scripts to know components are loaded
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
        
        // Set up a consistent language toggle function across all pages
        setupGlobalLanguageToggle();
    }, 300);
});

// Function to set up a consistent language toggle across all pages
function setupGlobalLanguageToggle() {
    // Store the original toggleLanguage function
    const originalToggleLanguage = window.toggleLanguage;
    
    // Create a new toggleLanguage function that handles both header/footer and page content
    window.toggleLanguage = function() {
        // Get current and next language
        const currentLang = localStorage.getItem('bixingLanguage') || 'en';
        const nextLang = currentLang === 'en' ? 'zh' : 'en';
        
        // Update localStorage
        localStorage.setItem('bixingLanguage', nextLang);
        
        // Update language toggle button text
        const currentLanguageElement = document.getElementById('currentLanguage');
        if (currentLanguageElement) {
            currentLanguageElement.textContent = nextLang === 'en' ? 'EN' : '中文';
        }
        
        // Apply translations to all elements with data-i18n attributes
        if (typeof applyTranslations === 'function') {
            applyTranslations(nextLang);
        }
        
        // Dispatch a custom event that pages can listen for
        document.dispatchEvent(new CustomEvent('languageToggled', { detail: { language: nextLang } }));
    };
    
    // Find all language toggle buttons and ensure they use our consistent function
    const languageToggleButtons = document.querySelectorAll('#languageToggle');
    languageToggleButtons.forEach(button => {
        button.onclick = window.toggleLanguage;
    });
}
