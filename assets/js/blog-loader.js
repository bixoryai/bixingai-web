/**
 * Blog Post Loader for Bixing Technology Website
 * 
 * This script loads blog post data from a JSON file and populates
 * the insights page with blog post content.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load blog post data
    fetch('../../assets/data/blog-posts.json')
        .then(response => response.json())
        .then(data => {
            // Process blog post data
            processBlogPosts(data.posts);
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
            displayErrorMessage();
        });
});

/**
 * Process blog post data and populate the page
 * @param {Array} posts - Array of blog post objects
 */
function processBlogPosts(posts) {
    if (!posts || posts.length === 0) {
        displayErrorMessage('No blog posts found');
        return;
    }

    // Set featured post (first post in the array)
    setFeaturedPost(posts[0]);
    
    // Generate category filters
    generateCategoryFilters(posts);
    
    // Populate insights grid
    populateInsightsGrid(posts);
    
    // Initialize filter functionality
    initializeFilters();
}

/**
 * Set the featured post content
 * @param {Object} post - Featured post object
 */
function setFeaturedPost(post) {
    const featuredTitle = document.getElementById('featured-title');
    const featuredExcerpt = document.getElementById('featured-excerpt');
    const featuredLink = document.getElementById('featured-link');
    
    if (featuredTitle && featuredExcerpt && featuredLink && post) {
        featuredTitle.textContent = post.title;
        featuredExcerpt.textContent = post.excerpt;
        featuredLink.href = post.url;
    }
}

/**
 * Generate category filter buttons
 * @param {Array} posts - Array of blog post objects
 */
function generateCategoryFilters(posts) {
    const categoryFiltersContainer = document.getElementById('category-filters');
    if (!categoryFiltersContainer) return;
    
    // Extract unique categories
    const categories = new Set();
    posts.forEach(post => {
        if (post.categories && post.categories.length > 0) {
            post.categories.forEach(category => categories.add(category));
        }
    });
    
    // Create filter buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'btn filter-button';
        button.setAttribute('data-filter', slugify(category));
        button.textContent = category;
        categoryFiltersContainer.appendChild(button);
    });
}

/**
 * Populate the insights grid with blog post cards
 * @param {Array} posts - Array of blog post objects
 */
function populateInsightsGrid(posts) {
    const insightsGrid = document.getElementById('insights-grid');
    if (!insightsGrid) return;
    
    // Clear existing content
    insightsGrid.innerHTML = '';
    
    // Add blog post cards
    posts.forEach((post, index) => {
        const postCard = createPostCard(post, index);
        insightsGrid.appendChild(postCard);
    });
    
    // Add placeholder cards if needed
    if (posts.length < 3) {
        for (let i = posts.length; i < 3; i++) {
            const placeholderCard = createPlaceholderCard(i);
            insightsGrid.appendChild(placeholderCard);
        }
    }
    
    // Reinitialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Create a blog post card element
 * @param {Object} post - Blog post object
 * @param {number} index - Index of the post
 * @returns {HTMLElement} - The created card element
 */
function createPostCard(post, index) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6 col-lg-4 mb-4';
    cardCol.setAttribute('data-aos', 'fade-up');
    cardCol.setAttribute('data-aos-delay', (index + 1) * 100);
    
    if (post.categories && post.categories.length > 0) {
        cardCol.setAttribute('data-topic', slugify(post.categories[0]));
    }
    
    // Check if this is the Enterprise AI post
    const isEnterpriseAIPost = post.title && post.title.includes('Future of AI in Enterprise');
    
    // Determine which SVG to use based on the post category
    let svgIndex = (index % 6) + 1; // Use one of the 6 available insight SVGs
    
    // If we can map the category to a specific industry SVG, use that instead
    if (post.categories && post.categories.length > 0) {
        const category = post.categories[0].toLowerCase();
        if (category.includes('finance')) svgIndex = 'finance-industry';
        else if (category.includes('healthcare')) svgIndex = 'healthcare-industry';
        else if (category.includes('manufacturing')) svgIndex = 'manufacturing-industry';
        else if (category.includes('energy')) svgIndex = 'energy-industry';
        else if (category.includes('logistics')) svgIndex = 'logistics-industry';
    }
    
    // Use the insight SVGs which we know exist
    const imagePath = `../../assets/images/insights/insight-${svgIndex}.svg`;
    
    // Create the HTML for the card
    let cardImageHtml = '';
    
    if (isEnterpriseAIPost) {
        // Use the Enterprise AI visualization for this specific post
        cardImageHtml = `
            <div class="insight-img" style="background: linear-gradient(135deg, #0f172a, #1e293b); position: relative; overflow: hidden;">
                <!-- Background Pattern -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); opacity: 0.4;"></div>
                
                <!-- Glow Effect -->
                <div style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%); border-radius: 50%; filter: blur(40px); opacity: 0.6; transform: translate(-50%, -50%);"></div>
                
                <!-- Enterprise AI Mini Visualization -->
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; height: 100%;">
                    <!-- Central Node -->
                    <circle cx="100" cy="100" r="15" fill="url(#cardGradient1)" />
                    
                    <!-- Connection Lines -->
                    <line x1="100" y1="100" x2="60" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="140" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="150" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="140" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="60" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="50" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    
                    <!-- Satellite Nodes -->
                    <circle cx="60" cy="60" r="8" fill="url(#cardGradient2)" />
                    <circle cx="140" cy="60" r="8" fill="url(#cardGradient2)" />
                    <circle cx="150" cy="100" r="8" fill="url(#cardGradient2)" />
                    <circle cx="140" cy="140" r="8" fill="url(#cardGradient2)" />
                    <circle cx="60" cy="140" r="8" fill="url(#cardGradient2)" />
                    <circle cx="50" cy="100" r="8" fill="url(#cardGradient2)" />
                    
                    <!-- Definitions -->
                    <defs>
                        <linearGradient id="cardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#10b981" />
                        </linearGradient>
                        <linearGradient id="cardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#60a5fa" />
                            <stop offset="100%" stop-color="#34d399" />
                        </linearGradient>
                    </defs>
                </svg>
                
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
        `;
    } else {
        // Use standard image for other posts
        cardImageHtml = `
            <div class="insight-img">
                <img src="${imagePath}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
        `;
    }
    
    const cardHtml = `
        <div class="insights-card">
            ${cardImageHtml}
            <div class="insights-content">
                <div class="insights-date">${formatDate(post.date)}</div>
                ${post.categories && post.categories.length > 0 ? 
                  `<span class="insights-category">${post.categories[0]}</span>` : ''}
                <h3 class="insights-title" style="background: linear-gradient(135deg, #f59e0b, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">${post.title}</h3>
                <p class="insights-excerpt">${truncateText(post.excerpt, 120)}</p>
                <a href="${post.url}" class="insights-read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `;
    
    cardCol.innerHTML = cardHtml;
    return cardCol;
}

/**
 * Create a placeholder card element
 * @param {number} index - Index for the placeholder
 * @returns {HTMLElement} - The created placeholder card element
 */
function createPlaceholderCard(index) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-6 col-lg-4 mb-4';
    cardCol.setAttribute('data-aos', 'fade-up');
    cardCol.setAttribute('data-aos-delay', (index + 1) * 100);
    cardCol.setAttribute('data-topic', 'placeholder');
    
    // Use one of the existing SVGs for placeholders
    const svgIndex = (index % 6) + 1;
    const imagePath = `../../assets/images/insights/insight-${svgIndex}.svg`;
    
    const cardHtml = `
        <div class="insights-card">
            <div class="insight-img">
                <img src="${imagePath}" alt="Placeholder" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
            <div class="insights-content">
                <div class="insights-date">Coming Soon</div>
                <span class="insights-category">Placeholder</span>
                <h3 class="insights-title">More Insights Coming Soon</h3>
                <p class="insights-excerpt">We're working on more insightful content. Check back soon for updates on the latest in AI and technology.</p>
                <a href="#" class="insights-read-more">Stay Tuned <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `;
    
    cardCol.innerHTML = cardHtml;
    return cardCol;
}

/**
 * Initialize filter functionality
 */
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter insights cards
            filterInsights(filterValue);
        });
    });
}

/**
 * Filter insights cards based on category
 * @param {string} filter - Category filter value
 */
function filterInsights(filter) {
    const insightCards = document.querySelectorAll('#insights-grid > div');
    
    insightCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-topic') === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Refresh AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

/**
 * Display error message in the insights grid
 * @param {string} message - Error message to display
 */
function displayErrorMessage(message = 'Error loading blog posts. Please try again later.') {
    const insightsGrid = document.getElementById('insights-grid');
    if (!insightsGrid) return;
    
    insightsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="alert alert-warning" role="alert">
                <i class="fas fa-exclamation-triangle me-2"></i> ${message}
            </div>
        </div>
    `;
}

/**
 * Format date string to Month DD, YYYY format
 * @param {string} dateString - Date string in YYYY-MM-DD format
 * @returns {string} - Formatted date string
 */
function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    
    return text.substring(0, maxLength) + '...';
}

/**
 * Convert string to slug format
 * @param {string} text - Text to convert
 * @returns {string} - Slug format
 */
function slugify(text) {
    if (!text) return '';
    
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
