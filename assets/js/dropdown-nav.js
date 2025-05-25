/**
 * Enhanced dropdown navigation for Bixing Technology website
 * Enables both hover and click functionality for dropdown menus
 */

document.addEventListener('DOMContentLoaded', function() {
    // Handle dropdown navigation for desktop
    if (window.innerWidth >= 992) {
        // Make main dropdown links clickable while still showing dropdown on hover
        const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            // Store the original href
            const originalHref = toggle.getAttribute('href');
            
            // Handle click event
            toggle.addEventListener('click', function(e) {
                if (originalHref && originalHref !== '#') {
                    // Navigate to the href when clicked
                    window.location.href = originalHref;
                }
            });
            
            // Prevent default dropdown toggle behavior on click
            toggle.addEventListener('click', function(e) {
                if (e.target === toggle) {
                    e.stopPropagation();
                }
            });
        });
    }
    
    // Handle mobile dropdown behavior
    const mediaQuery = window.matchMedia('(max-width: 991.98px)');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    function handleMobileDropdown(e) {
        if (e.matches) {
            // Mobile view - restore Bootstrap's default dropdown behavior
            const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.setAttribute('data-bs-toggle', 'dropdown');
            });
            
            // Add event listeners to close mobile menu when links are clicked
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Check if navbar is expanded (menu is open)
                    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        // Get the Bootstrap navbar toggler button
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        if (navbarToggler) {
                            navbarToggler.click(); // Programmatically click the toggler to close the menu
                        }
                    }
                });
            });
        } else {
            // Desktop view - remove Bootstrap's dropdown toggle
            const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.removeAttribute('data-bs-toggle');
            });
        }
    }
    
    // Add a single document click listener outside the media query handler
    // This ensures we only have one event listener regardless of screen size
    document.addEventListener('click', function(event) {
        // Check if navbar is expanded (menu is open)
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            // Check if the click is outside both the navbar-collapse and the navbar-toggler
            const isClickInsideMenu = navbarCollapse.contains(event.target);
            const navbarToggler = document.querySelector('.navbar-toggler');
            const isClickOnToggler = navbarToggler && navbarToggler.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggler) {
                // Close the menu by clicking the toggler
                if (navbarToggler) {
                    navbarToggler.click();
                }
            }
        }
    });
    
    // Run once at initialization
    handleMobileDropdown(mediaQuery);
    
    // Add listener for viewport changes
    mediaQuery.addEventListener('change', handleMobileDropdown);
});
