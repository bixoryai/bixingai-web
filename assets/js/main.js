/**
 * Bixing Technology Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initNavbar();
    initTestimonialSlider();
});

/**
 * Handle navbar behavior on scroll
 */
function initNavbar() {
    const header = document.querySelector('.site-header');
    
    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.backgroundColor = 'rgba(10, 25, 41, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.backgroundColor = 'rgba(10, 25, 41, 0.9)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarToggler.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
                navbarToggler.click();
            }
        }
    });
}

/**
 * Initialize testimonial slider
 * Note: This is a placeholder function that will be replaced with actual slider
 * implementation when a slider library (like Swiper.js) is added
 */
function initTestimonialSlider() {
    // This is a placeholder for testimonial slider functionality
    // Will be implemented with a proper slider library in Phase 2
    console.log('Testimonial slider will be implemented in Phase 2');
    
    // For now, we'll just add a simple manual rotation for demonstration
    const testimonials = document.querySelectorAll('.testimonial-item');
    if (testimonials.length > 1) {
        let currentIndex = 0;
        
        // Show only the first testimonial initially
        testimonials.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });
        
        // Simple rotation every 5 seconds
        setInterval(() => {
            testimonials[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].style.display = 'block';
        }, 5000);
    }
}

/**
 * Animate elements when they come into view
 * This is a placeholder for custom animations beyond AOS library
 */
function animateOnScroll() {
    // This will be expanded in Phase 2 with custom animations
    console.log('Custom scroll animations will be implemented in Phase 2');
}

/**
 * Handle form submissions
 * This is a placeholder for form handling functionality
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    // This will be implemented in Phase 2 with proper form handling
    console.log('Form handling will be implemented in Phase 2');
    
    // Show a placeholder success message
    alert('Thank you for your submission! This is a placeholder - actual form handling will be implemented in Phase 2.');
}

// Add event listeners to forms when they exist
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
});

/**
 * Create a typing animation effect for text
 * @param {string} elementId - The ID of the element to apply the effect to
 * @param {string[]} texts - Array of texts to cycle through
 * @param {number} speed - Typing speed in milliseconds
 */
function typeWriter(elementId, texts, speed = 100) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = speed;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = speed / 2; // Delete faster than type
        } else {
            // Typing text
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = speed;
        }
        
        // If word is complete
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 1000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length; // Move to next text
            typingDelay = 500; // Pause before typing next word
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start the typing animation
    setTimeout(type, 1000);
}

/**
 * Placeholder for future AI demo integration
 * This will be expanded in Phase 2 with actual demo functionality
 */
function initAiDemos() {
    console.log('AI demos will be integrated in Phase 2');
    
    // This is where we'll add code to load and initialize Hugging Face demos
    // or custom TensorFlow.js models
}

/**
 * Create a particle background effect
 * This will be implemented in Phase 2 for visual enhancement
 */
function initParticleBackground() {
    console.log('Particle background will be implemented in Phase 2');
}

// Export functions for potential use in other scripts
window.bixingTech = {
    typeWriter: typeWriter,
    initAiDemos: initAiDemos
};
