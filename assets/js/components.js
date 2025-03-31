/**
 * Components.js - Simple utility to include header and footer components
 * For Bixing Technology website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(data => {
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
            })
            .catch(error => console.error('Error loading header:', error));
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(data => {
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
                if (typeof applyTranslations === 'function') {
                    applyTranslations();
                }
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});
