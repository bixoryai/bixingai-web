/**
 * Blog Post Loader for Bixing Technology Website
 * 
 * This script loads blog post data from a JSON file and populates
 * the insights page with blog post content.
 */

// Pagination variables
let currentPage = 1;
const postsPerPage = 6; // Number of posts per page
let allPosts = [];
let filteredPosts = [];
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    // Load blog post data
    fetch('../../assets/data/blog-posts.json?v=' + new Date().getTime()) // Add cache-busting parameter
        .then(response => response.json())
        .then(data => {
            // Process blog post data
            console.log('Loaded blog posts:', data.posts);
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

    // Store all posts globally
    allPosts = posts;
    filteredPosts = posts;

    // Set featured post (first post in the array)
    setFeaturedPost(posts[0]);
    
    // Generate category filters
    generateCategoryFilters(posts);
    
    // Initialize pagination
    paginatePosts(currentPage);
    
    // Initialize filter functionality
    initializeFilters();
    
    // Initialize pagination functionality
    initializePagination();
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
    
    // Determine which visualization to use based on the post title and category
    const isEnterpriseAIPost = post.title && post.title.includes('Future of AI in Enterprise');
    const isMachineLearningPost = post.title && post.title.includes('Machine Learning for Business');
    
    // Update date for Machine Learning post if needed
    if (isMachineLearningPost) {
        console.log('Found Machine Learning post, original date:', post.date);
        post.date = "January 10, 2025";
        console.log('Updated date to:', post.date);
    }
    
    // Determine SVG index or type based on category
    let svgIndex = (index % 6) + 1; // Default to one of the 6 available insight SVGs
    let visualType = 'standard';
    
    // Map categories to specific visualizations
    if (post.categories && post.categories.length > 0) {
        const category = post.categories[0].toLowerCase();
        if (category.includes('ai trends') || isEnterpriseAIPost) {
            visualType = 'enterprise-ai';
        } else if (category.includes('machine learning') || isMachineLearningPost) {
            visualType = 'machine-learning';
        } else if (category.includes('finance')) {
            svgIndex = 'finance-industry';
        } else if (category.includes('healthcare')) {
            svgIndex = 'healthcare-industry';
        } else if (category.includes('manufacturing')) {
            svgIndex = 'manufacturing-industry';
        } else if (category.includes('energy')) {
            svgIndex = 'energy-industry';
        } else if (category.includes('logistics')) {
            svgIndex = 'logistics-industry';
        }
    }
    
    // Use the insight SVGs which we know exist
    const imagePath = `../../assets/images/insights/insight-${svgIndex}.svg`;
    
    // Create the HTML for the card with appropriate visualization
    let cardImageHtml = '';
    
    if (visualType === 'enterprise-ai') {
        // Enterprise AI visualization (network nodes)
        cardImageHtml = `
            <div class="insight-img" style="background: linear-gradient(135deg, #0f172a, #1e293b); position: relative; overflow: hidden;">
                <!-- Background Pattern -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); opacity: 0.4;"></div>
                
                <!-- Glow Effect -->
                <div style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%); border-radius: 50%; filter: blur(40px); opacity: 0.6; transform: translate(-50%, -50%);"></div>
                
                <!-- Enterprise AI Mini Visualization -->
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; height: 100%;">
                    <!-- Central Node -->
                    <circle cx="100" cy="100" r="15" fill="url(#cardGradient${index}1)" />
                    
                    <!-- Connection Lines -->
                    <line x1="100" y1="100" x2="60" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="140" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="150" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="140" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="60" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    <line x1="100" y1="100" x2="50" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                    
                    <!-- Satellite Nodes -->
                    <circle cx="60" cy="60" r="8" fill="url(#cardGradient${index}2)" />
                    <circle cx="140" cy="60" r="8" fill="url(#cardGradient${index}2)" />
                    <circle cx="150" cy="100" r="8" fill="url(#cardGradient${index}2)" />
                    <circle cx="140" cy="140" r="8" fill="url(#cardGradient${index}2)" />
                    <circle cx="60" cy="140" r="8" fill="url(#cardGradient${index}2)" />
                    <circle cx="50" cy="100" r="8" fill="url(#cardGradient${index}2)" />
                    
                    <!-- Definitions -->
                    <defs>
                        <linearGradient id="cardGradient${index}1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#3b82f6" />
                            <stop offset="100%" stop-color="#10b981" />
                        </linearGradient>
                        <linearGradient id="cardGradient${index}2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#60a5fa" />
                            <stop offset="100%" stop-color="#34d399" />
                        </linearGradient>
                    </defs>
                </svg>
                
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
        `;
    } else if (visualType === 'machine-learning') {
        // Machine Learning visualization (data flow/algorithm visualization)
        cardImageHtml = `
            <div class="insight-img" style="background: linear-gradient(135deg, #1e293b, #0f172a); position: relative; overflow: hidden;">
                <!-- Background Pattern -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); opacity: 0.4;"></div>
                
                <!-- Glow Effect -->
                <div style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%); border-radius: 50%; filter: blur(40px); opacity: 0.6; transform: translate(-50%, -50%);"></div>
                
                <!-- Machine Learning Visualization -->
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; height: 100%;">
                    <!-- Data Points -->
                    <circle cx="40" cy="60" r="4" fill="#60a5fa" />
                    <circle cx="50" cy="80" r="4" fill="#60a5fa" />
                    <circle cx="70" cy="50" r="4" fill="#60a5fa" />
                    <circle cx="60" cy="100" r="4" fill="#60a5fa" />
                    <circle cx="30" cy="90" r="4" fill="#60a5fa" />
                    <circle cx="80" cy="70" r="4" fill="#60a5fa" />
                    
                    <!-- Decision Boundary -->
                    <path d="M30,120 Q60,50 90,120" stroke="#f59e0b" stroke-width="2" fill="none" stroke-dasharray="4" />
                    
                    <!-- Algorithm Box -->
                    <rect x="100" y="70" width="60" height="60" rx="10" fill="url(#mlGradient${index})" />
                    
                    <!-- Input/Output Arrows -->
                    <line x1="80" y1="100" x2="100" y2="100" stroke="#60a5fa" stroke-width="2" />
                    <polygon points="98,96 105,100 98,104" fill="#60a5fa" />
                    
                    <line x1="160" y1="100" x2="180" y2="100" stroke="#34d399" stroke-width="2" />
                    <polygon points="178,96 185,100 178,104" fill="#34d399" />
                    
                    <!-- Algorithm Icon -->
                    <text x="130" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" fill="white">ML</text>
                    
                    <!-- Definitions -->
                    <defs>
                        <linearGradient id="mlGradient${index}" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#10b981" />
                            <stop offset="100%" stop-color="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
                
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
        `;
    } else {
        // Standard image with enhanced styling
        cardImageHtml = `
            <div class="insight-img" style="background: linear-gradient(135deg, #0f172a, #1e293b); position: relative; overflow: hidden;">
                <!-- Background Pattern -->
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); opacity: 0.4;"></div>
                
                <!-- Glow Effect -->
                <div style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%); border-radius: 50%; filter: blur(40px); opacity: 0.4; transform: translate(-50%, -50%);"></div>
                
                <!-- Standard Image with Enhanced Styling -->
                <img src="${imagePath}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 2; opacity: 0.8;">
                
                <div class="insight-ai-overlay"></div>
                <div class="insight-ai-pattern"></div>
            </div>
        `;
    }
    
    // Special handling for Machine Learning post date
    let displayDate = post.title && post.title.includes('Machine Learning for Business') ? 
        'January 10, 2025' : formatDate(post.date);
    
    console.log('Card display date for post:', post.title, displayDate);
    
    const cardHtml = `
        <div class="insights-card">
            ${cardImageHtml}
            <div class="insights-content">
                <div class="insights-date">${displayDate}</div>
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
    
    // Create the HTML for the card with Enterprise AI visualization style
    const cardImageHtml = `
        <div class="insight-img" style="background: linear-gradient(135deg, #0f172a, #1e293b); position: relative; overflow: hidden;">
            <!-- Background Pattern -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'); opacity: 0.4;"></div>
            
            <!-- Glow Effect -->
            <div style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%); border-radius: 50%; filter: blur(40px); opacity: 0.6; transform: translate(-50%, -50%);"></div>
            
            <!-- Enterprise AI Mini Visualization -->
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="position: absolute; width: 100%; height: 100%;">
                <!-- Central Node -->
                <circle cx="100" cy="100" r="15" fill="url(#placeholderGradient${index}1)" />
                
                <!-- Connection Lines -->
                <line x1="100" y1="100" x2="60" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="100" y1="100" x2="140" y2="60" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="100" y1="100" x2="150" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="100" y1="100" x2="140" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="100" y1="100" x2="60" y2="140" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                <line x1="100" y1="100" x2="50" y2="100" stroke="#3b82f6" stroke-width="1.5" stroke-opacity="0.6" />
                
                <!-- Satellite Nodes -->
                <circle cx="60" cy="60" r="8" fill="url(#placeholderGradient${index}2)" />
                <circle cx="140" cy="60" r="8" fill="url(#placeholderGradient${index}2)" />
                <circle cx="150" cy="100" r="8" fill="url(#placeholderGradient${index}2)" />
                <circle cx="140" cy="140" r="8" fill="url(#placeholderGradient${index}2)" />
                <circle cx="60" cy="140" r="8" fill="url(#placeholderGradient${index}2)" />
                <circle cx="50" cy="100" r="8" fill="url(#placeholderGradient${index}2)" />
                
                <!-- Definitions -->
                <defs>
                    <linearGradient id="placeholderGradient${index}1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#3b82f6" />
                        <stop offset="100%" stop-color="#10b981" />
                    </linearGradient>
                    <linearGradient id="placeholderGradient${index}2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#60a5fa" />
                        <stop offset="100%" stop-color="#34d399" />
                    </linearGradient>
                </defs>
            </svg>
            
            <div class="insight-ai-overlay"></div>
            <div class="insight-ai-pattern"></div>
        </div>
    `;
    
    const cardHtml = `
        <div class="insights-card">
            ${cardImageHtml}
            <div class="insights-content">
                <div class="insights-date">Coming Soon</div>
                <span class="insights-category">Placeholder</span>
                <h3 class="insights-title" style="background: linear-gradient(135deg, #f59e0b, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">More Insights Coming Soon</h3>
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
    currentFilter = filter;
    
    // Filter posts based on category
    if (filter === 'all') {
        filteredPosts = allPosts;
    } else {
        filteredPosts = allPosts.filter(post => {
            if (post.categories && post.categories.length > 0) {
                return post.categories.some(category => slugify(category) === filter);
            }
            return false;
        });
    }
    
    // Reset to first page and update
    currentPage = 1;
    paginatePosts(currentPage);
    
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
    console.log('formatDate input:', dateString);
    
    if (!dateString) return '';
    
    // If the dateString is already in the format "Month DD, YYYY", return it as is
    if (dateString.match(/^[A-Za-z]+ \d{1,2}, \d{4}$/)) {
        console.log('Date already formatted correctly:', dateString);
        return dateString;
    }
    
    // Special case for Machine Learning post
    if (dateString === '2025-01-10') {
        console.log('Special case for ML post date');
        return 'January 10, 2025';
    }
    
    const date = new Date(dateString);
    console.log('Date object created:', date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatted = date.toLocaleDateString('en-US', options);
    console.log('Formatted date:', formatted);
    return formatted;
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

/**
 * Paginate posts based on current page
 * @param {number} page - Current page number
 */
function paginatePosts(page) {
    // Calculate start and end indices for the current page
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    
    // Get current page posts
    const currentPosts = filteredPosts.slice(startIndex, endIndex);
    
    // Populate insights grid with current page posts
    populateInsightsGrid(currentPosts);
    
    // Update pagination UI
    updatePaginationUI(page);
}

/**
 * Update pagination UI based on current page
 * @param {number} page - Current page number
 */
function updatePaginationUI(page) {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    if (totalPages <= 1) {
        // Hide pagination if only one page
        document.querySelector('.pagination-container').style.display = 'none';
        return;
    } else {
        document.querySelector('.pagination-container').style.display = 'flex';
    }
    
    // Clear existing pagination
    paginationContainer.innerHTML = '';
    
    // Previous button
    const prevItem = document.createElement('li');
    prevItem.className = `page-item ${page === 1 ? 'disabled' : ''}`;
    prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
    </a>`;
    paginationContainer.appendChild(prevItem);
    
    // Page numbers - show up to 5 pages with current page in the middle when possible
    const maxVisiblePages = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages && startPage > 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === page ? 'active' : ''}`;
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        paginationContainer.appendChild(pageItem);
    }
    
    // Next button
    const nextItem = document.createElement('li');
    nextItem.className = `page-item ${page === totalPages ? 'disabled' : ''}`;
    nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
    </a>`;
    paginationContainer.appendChild(nextItem);
}

/**
 * Initialize pagination functionality
 */
function initializePagination() {
    const paginationContainer = document.querySelector('.pagination');
    if (!paginationContainer) return;
    
    // Add click event listener to pagination container for event delegation
    document.querySelector('.pagination-container').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Find closest page link
        const pageLink = e.target.closest('.page-link');
        if (!pageLink) return;
        
        // Handle previous button
        if (pageLink.getAttribute('aria-label') === 'Previous') {
            if (currentPage > 1) {
                currentPage--;
                paginatePosts(currentPage);
                // Scroll to top of insights grid
                document.getElementById('insights-grid').scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }
        
        // Handle next button
        if (pageLink.getAttribute('aria-label') === 'Next') {
            const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                paginatePosts(currentPage);
                // Scroll to top of insights grid
                document.getElementById('insights-grid').scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }
        
        // Handle page number
        const pageNumber = parseInt(pageLink.textContent);
        if (!isNaN(pageNumber)) {
            currentPage = pageNumber;
            paginatePosts(currentPage);
            // Scroll to top of insights grid
            document.getElementById('insights-grid').scrollIntoView({ behavior: 'smooth' });
        }
    });
}
