/**
 * Bixing Technology Website - Education Page
 * Dedicated internationalization script for the education page
 */

document.addEventListener('DOMContentLoaded', function () {
  console.log('Education i18n script loaded');

  // Check URL for language parameter first
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');

  // Initialize language
  let currentLang = 'en'; // Default to English

  if (urlLang && (urlLang === 'en' || urlLang === 'zh')) {
    currentLang = urlLang;
    localStorage.setItem('bixingLanguage', currentLang);
  } else {
    // Check localStorage
    const storedLang = localStorage.getItem('bixingLanguage');
    if (storedLang && (storedLang === 'en' || storedLang === 'zh')) {
      currentLang = storedLang;
    }
  }

  console.log('Current language set to:', currentLang);

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Update language toggle display
  const langDisplay = document.getElementById('currentLanguage');
  if (langDisplay) {
    langDisplay.textContent = currentLang.toUpperCase();
  }

  // Apply translations immediately
  applyEducationTranslations(currentLang);

  // Set up language toggle
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    // Remove any existing event listeners by cloning
    const newToggle = languageToggle.cloneNode(true);
    languageToggle.parentNode.replaceChild(newToggle, languageToggle);

    // Add new click event
    newToggle.addEventListener('click', function () {
      // Toggle language
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      console.log('Switching language from', currentLang, 'to', newLang);

      // Save to localStorage
      localStorage.setItem('bixingLanguage', newLang);

      // Redirect with language parameter
      window.location.href = window.location.pathname + '?lang=' + newLang;
    });
  }
});

// Education page translations
const educationTranslations = {
  en: {
    // Page title and meta
    'education.page.title': 'AI Education & Training | Bixing Technology',

    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.careers': 'Careers',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact Us',

    // Hero section
    'education.hero.title': 'AI Education & Training',
    'education.hero.subtitle': 'Equip your team with the knowledge and skills to leverage AI effectively',
    'education.hero.description': 'Our customized training programs bridge knowledge gaps and prepare your organization for an AI-driven future.',
    'education.hero.explorePrograms': 'Explore Our Programs',
    'education.hero.contactUs': 'Contact Us',
    'education.hero.imageAlt': 'AI Education',

    // Overview section
    'education.overview.title': 'Bridging the AI Knowledge Gap',
    'education.overview.subtitle': 'Comprehensive AI education tailored to your organization\'s needs',
    'education.overview.imageAlt': 'AI Education Overview',
    'education.overview.paragraph1': 'In today\'s rapidly evolving technological landscape, AI literacy has become a crucial competitive advantage. Bixing Technology\'s AI Education and Training programs are designed to provide your team with the practical knowledge and skills needed to effectively leverage AI in your specific industry context.',
    'education.overview.paragraph2': 'Whether you\'re looking to upskill your technical teams, help business leaders make informed AI decisions, or create organization-wide AI literacy, our customized programs provide practical, actionable knowledge that can be immediately applied to real-world challenges.',
    'education.overview.paragraph3': 'Our approach combines theoretical foundations with hands-on experience, ensuring participants not only understand AI concepts but can confidently apply them in their day-to-day work.',

    // Benefits section
    'education.benefits.title': 'Key Benefits',
    'education.benefits.subtitle': 'Why choose our AI education programs',
    'education.benefits.customized.title': 'Customized Learning Paths',
    'education.benefits.customized.description': 'Programs tailored to your team\'s specific needs and skill levels, ensuring relevant and impactful learning.',
    'education.benefits.handson.title': 'Hands-on Experience',
    'education.benefits.handson.description': 'Practical exercises and real-world projects that reinforce concepts and build confidence.',
    'education.benefits.experts.title': 'Expert Instructors',
    'education.benefits.experts.description': 'Learn from industry professionals with extensive AI experience and teaching capabilities.',
    'education.benefits.support.title': 'Ongoing Support',
    'education.benefits.support.description': 'Continued assistance and resources after training completion to ensure successful application.'
  },
  zh: {
    // Page title and meta
    'education.page.title': 'AI教育培训 | 毕行科技',

    // Navigation
    'nav.home': '首页',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.careers': '职业发展',
    'nav.insights': '洞察',
    'nav.contact': '联系我们',

    // Hero section
    'education.hero.title': 'AI教育培训',
    'education.hero.subtitle': '为您的团队提供有效利用AI的知识和技能',
    'education.hero.description': '我们的定制培训计划弥合知识差距，为您的组织准备AI驱动的未来。',
    'education.hero.explorePrograms': '探索我们的课程',
    'education.hero.contactUs': '联系我们',
    'education.hero.imageAlt': 'AI教育',

    // Overview section
    'education.overview.title': '弥合AI知识差距',
    'education.overview.subtitle': '根据您组织需求定制的全面AI教育',
    'education.overview.imageAlt': 'AI教育概述',
    'education.overview.paragraph1': '在当今快速发展的技术环境中，AI素养已成为关键的竞争优势。毕行科技的AI教育和培训计划旨在为您的团队提供在特定行业环境中有效利用AI所需的实用知识和技能。',
    'education.overview.paragraph2': '无论您是希望提升技术团队的技能，帮助业务领导者做出明智的AI决策，还是创建全组织范围的AI素养，我们的定制计划都提供可立即应用于现实世界挑战的实用、可操作的知识。',
    'education.overview.paragraph3': '我们的方法将理论基础与实践经验相结合，确保参与者不仅理解AI概念，还能在日常工作中自信地应用它们。',

    // Benefits section
    'education.benefits.title': '主要优势',
    'education.benefits.subtitle': '为什么选择我们的AI教育计划',
    'education.benefits.customized.title': '定制学习路径',
    'education.benefits.customized.description': '根据您团队的特定需求和技能水平定制的计划，确保相关且有影响力的学习。',
    'education.benefits.handson.title': '实践经验',
    'education.benefits.handson.description': '强化概念并建立信心的实践练习和真实项目。',
    'education.benefits.experts.title': '专家讲师',
    'education.benefits.experts.description': '向拥有丰富AI经验和教学能力的行业专业人士学习。',
    'education.benefits.support.title': '持续支持',
    'education.benefits.support.description': '培训完成后的持续协助和资源，确保成功应用。'
  }
};

// Apply translations to the page
function applyEducationTranslations (lang) {
  console.log('Applying education translations for language:', lang);
  const translations = educationTranslations[lang];

  if (!translations) {
    console.error('No translations found for language:', lang);
    return;
  }

  // Update text content for elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[key]) {
      // Handle different element types
      if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
        element.placeholder = translations[key];
      } else if ((element.tagName === 'BUTTON' || element.tagName === 'INPUT') && element.hasAttribute('value')) {
        element.value = translations[key];
      } else if (element.tagName === 'TITLE') {
        document.title = translations[key];
      } else {
        element.textContent = translations[key];
      }
      console.log('Translated element:', key);
    } else {
      console.warn('Missing translation for key:', key);
    }
  });

  // Update alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (translations[key]) {
      element.alt = translations[key];
      console.log('Translated alt attribute:', key);
    } else {
      console.warn('Missing translation for alt key:', key);
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  console.log('Translation complete');
}
