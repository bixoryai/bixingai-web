/**
 * i18n-insights.js - Translations for the Industry Insights page
 * This file extends the global translations object with insights-specific translations
 */

// Initialize translations object if it doesn't exist
if (!window.translations) {
  window.translations = { en: {}, zh: {} };
}

// English translations
window.translations.en = Object.assign({}, window.translations.en, {
  "page.title": "Industry Insights - Bixing Technology",
  "insights.hero.title": "AI Industry Insights",
  "insights.hero.subtitle": "Explore the latest developments, strategies, and applications in AI",
  "insights.featured.badge": "Featured Insight",
  "insights.featured.title": "2025 Outlook: The Future of AI in Enterprise",
  "insights.featured.excerpt": "As AI rapidly evolves, enterprises face new opportunities and challenges in implementation. Discover the key trends shaping the next year of AI adoption.",
  "insights.featured.link": "Read Full Article <i class=\"fas fa-arrow-right ms-2\"></i>",
  "insights.latest.title": "Latest Insights",
  "insights.filter.all": "All Topics",
  "insights.filter.trends": "AI Trends",
  "insights.filter.implementation": "Implementation",
  "insights.filter.case-studies": "Case Studies",
  "insights.filter.ethics": "Ethics & Governance"
});

// Chinese translations
window.translations.zh = Object.assign({}, window.translations.zh, {
  "page.title": "行业洞察 - 毕行科技",
  "insights.hero.title": "AI行业洞察",
  "insights.hero.subtitle": "探索人工智能领域的最新发展、策略和应用",
  "insights.featured.badge": "特色洞察",
  "insights.featured.title": "2025年企业AI发展趋势展望",
  "insights.featured.excerpt": "随着人工智能的快速发展，企业面临着实施过程中的新机遇和挑战。了解将塑造未来一年AI应用的关键趋势。",
  "insights.featured.link": "阅读全文 <i class=\"fas fa-arrow-right ms-2\"></i>",
  "insights.latest.title": "最新洞察",
  "insights.filter.all": "所有主题",
  "insights.filter.trends": "AI趋势",
  "insights.filter.implementation": "实施策略",
  "insights.filter.case-studies": "案例研究",
  "insights.filter.ethics": "伦理与治理"
});

// Function to update dynamic content that might be added after initial page load
function updateInsightsPageTranslations(lang) {
  const currentLang = lang || localStorage.getItem('bixingLanguage') || 'en';
  
  // Update insight card titles and excerpts if they exist
  const insightTitles = document.querySelectorAll('.insight-card .card-title');
  const insightExcerpts = document.querySelectorAll('.insight-card .card-text');
  const readMoreLinks = document.querySelectorAll('.insight-card .read-more');
  
  if (currentLang === 'zh') {
    // Apply Chinese translations to dynamic content
    if (insightTitles.length > 0) {
      const zhTitles = [
        "企业如何利用生成式AI提高生产力",
        "AI伦理：平衡创新与责任",
        "医疗保健中的AI：改变诊断与治疗",
        "实施AI解决方案的五个关键步骤",
        "AI驱动的客户体验转型",
        "金融服务中的机器学习应用"
      ];
      
      insightTitles.forEach((title, index) => {
        if (index < zhTitles.length) {
          title.textContent = zhTitles[index];
        }
      });
    }
    
    if (insightExcerpts.length > 0) {
      const zhExcerpts = [
        "探索企业如何有效整合生成式AI工具以提高效率、创新和整体生产力。",
        "深入探讨AI伦理的复杂性，以及组织如何在推动创新的同时确保负责任的AI使用。",
        "了解AI如何彻底改变医疗诊断、治疗计划和患者护理，带来更精确和个性化的医疗服务。",
        "从评估到部署，掌握成功实施企业AI解决方案的五个关键步骤。",
        "探索AI如何重塑客户互动、个性化体验和支持服务，提升客户满意度和忠诚度。",
        "了解金融机构如何利用机器学习进行风险评估、欺诈检测和投资策略优化。"
      ];
      
      insightExcerpts.forEach((excerpt, index) => {
        if (index < zhExcerpts.length) {
          excerpt.textContent = zhExcerpts[index];
        }
      });
    }
    
    if (readMoreLinks.length > 0) {
      readMoreLinks.forEach(link => {
        link.innerHTML = '阅读更多 <i class="fas fa-arrow-right ms-1"></i>';
      });
    }
  } else {
    // Apply English translations to dynamic content
    if (insightTitles.length > 0) {
      const enTitles = [
        "How Enterprises Can Leverage Generative AI for Productivity",
        "AI Ethics: Balancing Innovation with Responsibility",
        "AI in Healthcare: Transforming Diagnosis and Treatment",
        "Five Key Steps to Implementing AI Solutions",
        "AI-Driven Customer Experience Transformation",
        "Machine Learning Applications in Financial Services"
      ];
      
      insightTitles.forEach((title, index) => {
        if (index < enTitles.length) {
          title.textContent = enTitles[index];
        }
      });
    }
    
    if (insightExcerpts.length > 0) {
      const enExcerpts = [
        "Explore how businesses can effectively integrate generative AI tools to enhance efficiency, innovation, and overall productivity.",
        "Dive into the complexities of AI ethics and how organizations can ensure responsible AI use while driving innovation.",
        "Learn how AI is revolutionizing medical diagnostics, treatment planning, and patient care for more precise and personalized healthcare.",
        "Master the five essential steps for successful enterprise AI solution implementation, from assessment to deployment.",
        "Explore how AI is reshaping customer interactions, personalized experiences, and support services to boost satisfaction and loyalty.",
        "Discover how financial institutions are using machine learning for risk assessment, fraud detection, and investment strategy optimization."
      ];
      
      insightExcerpts.forEach((excerpt, index) => {
        if (index < enExcerpts.length) {
          excerpt.textContent = enExcerpts[index];
        }
      });
    }
    
    if (readMoreLinks.length > 0) {
      readMoreLinks.forEach(link => {
        link.innerHTML = 'Read More <i class="fas fa-arrow-right ms-1"></i>';
      });
    }
  }
}

// Export the function for use in other scripts
window.updateInsightsPageTranslations = updateInsightsPageTranslations;
