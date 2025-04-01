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
    
    function handleMobileDropdown(e) {
        if (e.matches) {
            // Mobile view - restore Bootstrap's default dropdown behavior
            const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.setAttribute('data-bs-toggle', 'dropdown');
            });
        } else {
            // Desktop view - remove Bootstrap's dropdown toggle
            const dropdownToggles = document.querySelectorAll('.navbar .nav-item.dropdown .dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.removeAttribute('data-bs-toggle');
            });
        }
    }
    
    // Run once at initialization
    handleMobileDropdown(mediaQuery);
    
    // Add listener for viewport changes
    mediaQuery.addEventListener('change', handleMobileDropdown);
});
