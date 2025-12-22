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
  'insights.featured.link': 'Read Full Article <i class="fas fa-arrow-right ms-2"></i>',
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

  'insights.read.more': 'Read More <i class="fas fa-arrow-right"></i>'
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
  'insights.featured.link': '阅读全文 <i class="fas fa-arrow-right ms-2"></i>',
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

  'insights.read.more': '阅读更多 <i class="fas fa-arrow-right"></i>'
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
      if (dateElement) {
        dateElement.textContent = window.translations[currentLang][`insights.card${cardNum}.date`];
      }

      if (categoryElement) {
        categoryElement.textContent =
          window.translations[currentLang][`insights.card${cardNum}.category`];
      }

      if (titleElement) {
        titleElement.textContent =
          window.translations[currentLang][`insights.card${cardNum}.title`];
      }

      if (excerptElement) {
        excerptElement.textContent =
          window.translations[currentLang][`insights.card${cardNum}.excerpt`];
      }

      if (readMoreElement) {
        readMoreElement.innerHTML = window.translations[currentLang]['insights.read.more'];
      }
    });
  }

  // Handle dynamically generated content in the Latest Insights section
  if (currentLang === 'zh') {
    // Find all cards in the insights grid (dynamically generated content)
    const gridCards = document.querySelectorAll('#insights-grid .card');
    if (gridCards && gridCards.length > 0) {
      gridCards.forEach((card, index) => {
        // Find elements within each card
        const dateElement = card.querySelector('.insights-date');
        const categoryElement = card.querySelector('.insights-category');
        const titleElement = card.querySelector('.insights-title');
        const excerptElement = card.querySelector('.insights-excerpt');
        const readMoreElement = card.querySelector('.insights-read-more');

        // Apply translations directly based on index
        if (dateElement) {
          // Use the translation from our object if available, otherwise use direct translation
          const translationKey = `insights.card${index + 1}.date`;
          if (window.translations[currentLang][translationKey]) {
            dateElement.textContent = window.translations[currentLang][translationKey];
          } else if (index === 0) {
            dateElement.textContent = '2023年10月14日';
          } else if (index === 1) {
            dateElement.textContent = '2025年1月10日';
          } else if (index === 2) {
            dateElement.textContent = '即将推出';
          }
        }

        if (categoryElement) {
          const translationKey = `insights.card${index + 1}.category`;
          if (window.translations[currentLang][translationKey]) {
            categoryElement.textContent = window.translations[currentLang][translationKey];
          } else if (index === 0) {
            categoryElement.textContent = 'AI趋势';
          } else if (index === 1) {
            categoryElement.textContent = '机器学习';
          } else if (index === 2) {
            categoryElement.textContent = '占位符';
          }
        }

        if (titleElement) {
          const translationKey = `insights.card${index + 1}.title`;
          if (window.translations[currentLang][translationKey]) {
            titleElement.textContent = window.translations[currentLang][translationKey];
          } else if (index === 0) {
            titleElement.textContent = '企业AI的未来：趋势和预测';
          } else if (index === 1) {
            titleElement.textContent = '商业机器学习：实际应用';
          } else if (index === 2) {
            titleElement.textContent = '更多洞察即将推出';
          }
        }

        if (excerptElement) {
          const translationKey = `insights.card${index + 1}.excerpt`;
          if (window.translations[currentLang][translationKey]) {
            excerptElement.textContent = window.translations[currentLang][translationKey];
          } else if (index === 0) {
            excerptElement.textContent =
              '探索AI在企业环境中采用的新兴趋势和未来预测，以及如何应用这些趋势。';
          } else if (index === 1) {
            excerptElement.textContent = '发现正在改变当今企业并推动创新的机器学习实际应用。';
          } else if (index === 2) {
            excerptElement.textContent =
              '我们正在开发更多有见地的内容。请稍后查看有关AI和技术最新动态的更新。';
          }
        }

        if (readMoreElement) {
          readMoreElement.innerHTML =
            window.translations[currentLang]['insights.read.more'] ||
            '阅读更多 <i class="fas fa-arrow-right"></i>';
        }
      });
    }
  }
}

// Export the function for use in other scripts
window.updateInsightsPageTranslations = updateInsightsPageTranslations;

// Initialize translations when the script loads
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = localStorage.getItem('bixingLanguage') || 'en';
  updateInsightsPageTranslations(currentLang);
});

// Export the function for use in other scripts
window.updateInsightsPageTranslations = updateInsightsPageTranslations;
