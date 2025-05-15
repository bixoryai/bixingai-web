/**
 * Direct translation approach for Insights page
 * This script applies Chinese translations directly to dynamically generated content
 */

document.addEventListener('DOMContentLoaded', function() {
  // Wait for the blog cards to be loaded
  setTimeout(function() {
    applyDirectTranslations();
    
    // Listen for language toggle events
    document.addEventListener('languageToggled', function(event) {
      console.log('Language toggle detected in direct translation script');
      applyDirectTranslations();
    });
  }, 1000); // Wait 1 second for cards to load
});

function applyDirectTranslations() {
  const currentLang = localStorage.getItem('bixingLanguage') || 'en';
  console.log('Direct translation script - Current language:', currentLang);
  
  // Only apply translations if language is Chinese
  if (currentLang === 'zh') {
    console.log('Applying direct Chinese translations to insights cards');
    
    // Target the actual cards in the insights grid
    const cards = document.querySelectorAll('#insights-grid .col-md-6.col-lg-4');
    console.log('Found cards:', cards.length);
    
    if (cards && cards.length > 0) {
      // First card - Enterprise AI
      if (cards[0]) {
        const dateEl = cards[0].querySelector('.insights-date');
        const categoryEl = cards[0].querySelector('.insights-category');
        const titleEl = cards[0].querySelector('.insights-title');
        const excerptEl = cards[0].querySelector('.insights-excerpt');
        const readMoreEl = cards[0].querySelector('.insights-read-more');
        
        if (dateEl) dateEl.textContent = '2023年10月14日';
        if (categoryEl) categoryEl.textContent = 'AI趋势';
        if (titleEl) titleEl.textContent = '企业AI的未来：趋势和预测';
        if (excerptEl) excerptEl.textContent = '探索AI在企业环境中采用的新兴趋势和未来预测，以及如何应用这些趋势。';
        if (readMoreEl) readMoreEl.innerHTML = '阅读更多 <i class="fas fa-arrow-right"></i>';
      }
      
      // Second card - Machine Learning
      if (cards[1]) {
        const dateEl = cards[1].querySelector('.insights-date');
        const categoryEl = cards[1].querySelector('.insights-category');
        const titleEl = cards[1].querySelector('.insights-title');
        const excerptEl = cards[1].querySelector('.insights-excerpt');
        const readMoreEl = cards[1].querySelector('.insights-read-more');
        
        if (dateEl) dateEl.textContent = '2025年1月10日';
        if (categoryEl) categoryEl.textContent = '机器学习';
        if (titleEl) titleEl.textContent = '商业机器学习：实际应用';
        if (excerptEl) excerptEl.textContent = '发现正在改变当今企业并推动创新的机器学习实际应用。';
        if (readMoreEl) readMoreEl.innerHTML = '阅读更多 <i class="fas fa-arrow-right"></i>';
      }
      
      // Third card - Coming Soon
      if (cards[2]) {
        const dateEl = cards[2].querySelector('.insights-date');
        const categoryEl = cards[2].querySelector('.insights-category');
        const titleEl = cards[2].querySelector('.insights-title');
        const excerptEl = cards[2].querySelector('.insights-excerpt');
        const readMoreEl = cards[2].querySelector('.insights-read-more');
        
        if (dateEl) dateEl.textContent = '即将推出';
        if (categoryEl) categoryEl.textContent = '占位符';
        if (titleEl) titleEl.textContent = '更多洞察即将推出';
        if (excerptEl) excerptEl.textContent = '我们正在开发更多有见地的内容。请稍后查看有关AI和技术最新动态的更新。';
        if (readMoreEl) readMoreEl.innerHTML = '阅读更多 <i class="fas fa-arrow-right"></i>';
      }
    }
    
    // Also translate the featured insight section
    const featuredTitle = document.getElementById('featured-title');
    const featuredExcerpt = document.getElementById('featured-excerpt');
    const featuredLink = document.getElementById('featured-link');
    const featuredBadge = document.querySelector('.featured-badge');
    
    if (featuredTitle) featuredTitle.textContent = '2025年企业AI发展趋势展望';
    if (featuredExcerpt) featuredExcerpt.textContent = '随着人工智能的快速发展，企业面临着实施过程中的新机遇和挑战。了解将塑造未来一年AI应用的关键趋势。';
    if (featuredLink) featuredLink.innerHTML = '阅读全文 <i class="fas fa-arrow-right ms-2"></i>';
    if (featuredBadge) featuredBadge.textContent = '特色洞察';
  }
}
