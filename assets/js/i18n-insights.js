/**
 * i18n-insights.js - Translations for the Industry Insights page
 * This file extends the global translations object with insights-specific translations
 */

// Initialize translations object if it doesn't exist
if (!window.translations) {
  window.translations = {en: {}, zh: {}};
}

// English translations
window.translations.en = Object.assign({}, window.translations.en, {
  'page.title': 'Industry Insights - Bixing Technology',
  'insights.hero.title': 'AI Industry Insights',
  'insights.hero.subtitle': 'Explore the latest developments, strategies, and applications in AI',
  'insights.featured.badge': 'Featured Insight',
  'insights.featured.title': '2025 Outlook: The Future of AI in Enterprise',
  'insights.featured.excerpt':
    'As AI rapidly evolves, enterprises face new opportunities and challenges in implementation. Discover the key trends shaping the next year of AI adoption.',
  'insights.featured.link': 'Read Full Article <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
  'insights.latest.title': 'Latest Insights',
  'insights.filter.all': 'All Topics',

  // Main cards translations
  'insights.card1.date': 'October 14, 2023',
  'insights.card1.category': 'AI Trends',
  'insights.card1.title': 'The Future of AI in Enterprise: Trends and Predictions',
  'insights.card1.excerpt':
    'Explore the emerging trends and future predictions for AI adoption in enterprise environments, and how they can be applied.',

  'insights.card2.date': 'January 10, 2025',
  'insights.card2.category': 'Machine Learning',
  'insights.card2.title': 'Machine Learning for Business: Practical Applications',
  'insights.card2.excerpt':
    'Discover practical applications of machine learning that are transforming businesses today and driving innovation.',

  'insights.card3.date': 'Coming Soon',
  'insights.card3.category': 'Placeholder',
  'insights.card3.title': 'More Insights Coming Soon',
  'insights.card3.excerpt':
    'We\'re working on more insightful content. Check back soon for updates on the latest in AI and technology.',

  'insights.read.more': 'Read More <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
  
  // Newsletter section
  'insights.newsletter.title': 'Stay Updated with AI Trends',
  'insights.newsletter.subtitle': 'Subscribe to our newsletter to receive the latest insights, articles, and updates in the world of AI',
  'insights.newsletter.emailPlaceholder': 'Your Email Address',
  'insights.newsletter.subscribe': 'Subscribe',
  'insights.newsletter.privacyNotice': 'We respect your privacy. Unsubscribe at any time.'
});

// Chinese translations
window.translations.zh = Object.assign({}, window.translations.zh, {
  'page.title': '行业洞察 - 毕行科技',
  'insights.hero.title': 'AI行业洞察',
  'insights.hero.subtitle': '探索人工智能领域的最新发展、策略和应用',
  'insights.featured.badge': '特色洞察',
  'insights.featured.title': '2025年企业AI发展趋势展望',
  'insights.featured.excerpt':
    '随着人工智能的快速发展，企业面临着实施过程中的新机遇和挑战。了解将塑造未来一年AI应用的关键趋势。',
  'insights.featured.link': '阅读全文 <svg class="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
  'insights.latest.title': '最新洞察',
  'insights.filter.all': '所有主题',

  // Main cards translations
  'insights.card1.date': '2023年10月14日',
  'insights.card1.category': 'AI趋势',
  'insights.card1.title': '企业AI的未来：趋势和预测',
  'insights.card1.excerpt': '探索AI在企业环境中采用的新兴趋势和未来预测，以及如何应用这些趋势。',

  'insights.card2.date': '2025年1月10日',
  'insights.card2.category': '机器学习',
  'insights.card2.title': '商业机器学习：实际应用',
  'insights.card2.excerpt': '发现正在改变当今企业并推动创新的机器学习实际应用。',

  'insights.card3.date': '即将推出',
  'insights.card3.category': '占位符',
  'insights.card3.title': '更多洞察即将推出',
  'insights.card3.excerpt': '我们正在开发更多有见地的内容。请稍后查看有关AI和技术最新动态的更新。',

  'insights.read.more': '阅读更多 <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',
  
  // Newsletter section
  'insights.newsletter.title': '获取AI趋势更新',
  'insights.newsletter.subtitle': '订阅我们的通讯，接收AI领域的最新洞察、文章和更新',
  'insights.newsletter.emailPlaceholder': '您的电子邮箱地址',
  'insights.newsletter.subscribe': '订阅',
  'insights.newsletter.privacyNotice': '我们尊重您的隐私。可随时取消订阅。'
});

/**
 * Updates all dynamic content on the Insights page based on the current language
 * This function is called on page load and when the language is toggled
 * @param {string} lang - The language code ('en' or 'zh')
 */
function updateInsightsPageTranslations(lang) {
  const currentLang = lang || localStorage.getItem('bixingLanguage') || 'en';

  // Update the main cards
  const cards = document.querySelectorAll('.insights-card');
  if (cards && cards.length > 0) {
    // Update each card with translations
    cards.forEach((card, index) => {
      const cardNum = index + 1;

      // Find elements within the card
      const dateElement = card.querySelector('.insights-date');
      const categoryElement = card.querySelector('.insights-category');
      const titleElement = card.querySelector('.insights-title');
      const excerptElement = card.querySelector('.insights-excerpt');
      const readMoreElement = card.querySelector('.insights-read-more');

      // Update elements with translations
      if (dateElement && window.translations[currentLang] && window.translations[currentLang][`insights.card${cardNum}.date`]) {
        dateElement.textContent = window.translations[currentLang][`insights.card${cardNum}.date`];
      }

      if (categoryElement && window.translations[currentLang] && window.translations[currentLang][`insights.card${cardNum}.category`]) {
        categoryElement.textContent = window.translations[currentLang][`insights.card${cardNum}.category`];
      }

      if (titleElement && window.translations[currentLang] && window.translations[currentLang][`insights.card${cardNum}.title`]) {
        titleElement.textContent = window.translations[currentLang][`insights.card${cardNum}.title`];
      }

      if (excerptElement && window.translations[currentLang] && window.translations[currentLang][`insights.card${cardNum}.excerpt`]) {
        excerptElement.textContent = window.translations[currentLang][`insights.card${cardNum}.excerpt`];
      }

      if (readMoreElement) {
        const readMoreText = window.translations[currentLang] && window.translations[currentLang]['insights.read.more']
          ? window.translations[currentLang]['insights.read.more']
          : (currentLang === 'zh'
            ? '阅读更多 <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>'
            : 'Read More <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>'
          );
        readMoreElement.innerHTML = readMoreText;
      }
    });
  }

  // Update featured link (it contains HTML/icon)
  const featuredLink = document.getElementById('featured-link');
  if (featuredLink && window.translations[currentLang] && window.translations[currentLang]['insights.featured.link']) {
    featuredLink.innerHTML = window.translations[currentLang]['insights.featured.link'];
  }
  
  // Translate category filter buttons
  const categoryFilters = document.querySelectorAll('#category-filters .filter-button');
  if (categoryFilters && categoryFilters.length > 0) {
    categoryFilters.forEach(filter => {
      const category = filter.getAttribute('data-filter');
      if (category && window.translations[currentLang]) {
        // Map category slugs to translations
        const categoryMap = {
          'en': {
            'ai-trends': 'AI Trends',
            'machine-learning': 'Machine Learning',
            'ai-implementation': 'AI Implementation',
            'case-studies': 'Case Studies',
            'ai-education': 'AI Education',
            'ai-ethics': 'AI Ethics'
          },
          'zh': {
            'ai-trends': 'AI趋势',
            'machine-learning': '机器学习',
            'ai-implementation': 'AI实施',
            'case-studies': '案例研究',
            'ai-education': 'AI教育',
            'ai-ethics': 'AI伦理'
          }
        };
        if (categoryMap[currentLang] && categoryMap[currentLang][category]) {
          filter.textContent = categoryMap[currentLang][category];
        }
      }
    });
  }
  
  // Handle dynamically generated content in the Latest Insights section  
  // Find all cards in the insights grid (dynamically generated content)
  const gridCards = document.querySelectorAll('#insights-grid .insights-card-wrapper, #insights-grid .insights-card');
  if (gridCards && gridCards.length > 0) {
    gridCards.forEach((card, index) => {
      // Find elements within each card
      const readMoreElement = card.querySelector('.insights-read-more');
      if (readMoreElement && window.translations[currentLang] && window.translations[currentLang]['insights.read.more']) {
        readMoreElement.innerHTML = window.translations[currentLang]['insights.read.more'];
      }
    });
  }
}

// Export the function for use in other scripts
window.updateInsightsPageTranslations = updateInsightsPageTranslations;
