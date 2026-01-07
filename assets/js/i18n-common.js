// i18n-common.js
// Common/shared translations for Bixing Technology website
window.translations = window.translations || {};

// --- i18n header logic extracted from i18n-logic.js ---
function getCurrentLanguage() {
  if (window.BixingStorage && typeof BixingStorage.getLanguage === 'function') {
    return BixingStorage.getLanguage();
  }
  try {
    return localStorage.getItem('bixingLanguage') || 'en';
  } catch (e) {
    return 'en';
  }
}

function applyTranslations(lang) {
  const currentLanguage = lang || getCurrentLanguage();
  if (!window.translations || !window.translations[currentLanguage]) {
    return;
  }

  // Apply translations to elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    if (window.translations[currentLanguage] && window.translations[currentLanguage][key]) {
      const translation = window.translations[currentLanguage][key];
      // Use innerHTML for elements that might contain HTML tags (links, paragraphs, etc.)
      // For headings (H1, H2, H3, etc.), use textContent to avoid XSS and ensure proper text replacement
      if (
        element.tagName === 'P' ||
        element.tagName === 'A' ||
        element.tagName === 'SPAN' ||
        element.classList.contains('company-description') ||
        (translation.includes('<') && !translation.match(/^<[^>]+>$/))
      ) {
        // For links and paragraphs, use innerHTML to support HTML if needed
        element.innerHTML = translation;
      } else {
        // For headings (H1-H6) and other elements, use textContent to prevent XSS
        element.textContent = translation;
      }
    }
  });

  // Handle placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(element) {
    const key = element.getAttribute('data-i18n-placeholder');
    if (window.translations[currentLanguage] && window.translations[currentLanguage][key]) {
      element.placeholder = window.translations[currentLanguage][key];
    }
  });

  // Handle alt attribute translations
  document.querySelectorAll('[data-i18n-alt]').forEach(function(element) {
    const key = element.getAttribute('data-i18n-alt');
    if (window.translations[currentLanguage] && window.translations[currentLanguage][key]) {
      element.alt = window.translations[currentLanguage][key];
    }
  });

  // Update language toggle UI
  const currentLanguageElement = document.getElementById('current-language');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = currentLanguage === 'en' ? 'EN' : '中文';
  }

  // Update page title
  const titleKey = 'page.title';
  if (window.translations[currentLanguage] && window.translations[currentLanguage][titleKey]) {
    document.title = window.translations[currentLanguage][titleKey];
  }
}

window.applyTranslations = applyTranslations;

// Set up language on load - delay to allow page-specific i18n scripts to load first
// This will be called by page-specific scripts after they load their translations
function initCommonTranslations() {
  const lang = getCurrentLanguage();
  applyTranslations(lang);
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = lang === 'en' ? 'EN' : '中文';
  }
}

// Only auto-apply if no page-specific script is handling it (fallback for pages without page-specific i18n)
// Use a delay to let page scripts load first
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      // Only apply if page scripts haven't already marked themselves as initialized
      if (!window.pageTranslationsInitialized) {
        initCommonTranslations();
      }
    }, 300);
  });
} else {
  setTimeout(function() {
    // Only apply if page scripts haven't already marked themselves as initialized
    if (!window.pageTranslationsInitialized) {
      initCommonTranslations();
    }
  }, 300);
}

// Safe localStorage setter using BixingStorage utility
function safeStorageSet(key, value) {
  return window.BixingStorage ? BixingStorage.setItem(key, value) : false;
}

// Global toggleLanguage function - this will be enhanced by components.js
window.toggleLanguage = function() {
  const storedLanguage = getCurrentLanguage();
  const newLanguage = storedLanguage === 'en' ? 'zh' : 'en';

  // Use BixingStorage to set language
  if (window.BixingStorage) {
    BixingStorage.setLanguage(newLanguage);
  } else {
    safeStorageSet('bixingLanguage', newLanguage);
  }

  // Update UI
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = newLanguage === 'en' ? 'EN' : '中文';
  }
  applyTranslations(newLanguage);

  // Dispatch an event so other scripts can react to language changes
  document.dispatchEvent(new CustomEvent('languageToggled', {detail: {language: newLanguage}}));
};
// --- END i18n header logic ---

window.translations.en = Object.assign({}, window.translations.en, {
  'nav.home': 'Home',
  'nav.about': 'About Us',
  'nav.services': 'Products & Services',
  'nav.education': 'AI Education/Training',
  'nav.customSolutions': 'AI Custom Solutions',
  'nav.consultation': 'Enterprise AI Consultation',
  'nav.industryInsights': 'Industry Insights',
  'nav.careers': 'Careers',
  'nav.contact': 'Contact Us',
  'footer.company': 'Bixing Technology',
  'footer.companyDescription':
    'A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation.',
  'footer.quickLinks': 'Quick Links',
  'footer.home': 'Home',
  'footer.about': 'About',
  'footer.careers': 'Careers',
  'footer.industryInsights': 'Industry Insights',
  'footer.services': 'Products & Services',
  'footer.aiEducation': 'AI Education & Training',
  'footer.customSolutions': 'AI Custom Solutions',
  'footer.aiConsultation': 'AI Strategy Consultation',
  'footer.contactUs': 'Contact Us',
  'footer.email': 'develop@bixory.ai',
  'footer.wechat': 'WeChat',
  'footer.wechatId': 'bixingai',
  'footer.scanQrCode': 'Scan to connect on WeChat',
  'footer.copyright': '© 2025 Bixing Technology. All Rights Reserved.',
  'footer.privacyPolicy': 'Privacy Policy',
  'footer.termsOfService': 'Terms of Service'
});
window.translations.zh = Object.assign({}, window.translations.zh, {
  'nav.home': '首页',
  'nav.about': '关于我们',
  'nav.services': '产品与服务',
  'nav.education': 'AI教育培训',
  'nav.customSolutions': 'AI定制解决方案',
  'nav.consultation': '企业AI咨询',
  'nav.industryInsights': '行业洞察',
  'nav.careers': '加入我们',
  'nav.contact': '联系我们',
  'footer.company': '毕行科技',
  'footer.companyDescription': '国际前沿 AI 解决方案提供商，<br>助你充满 AI 的力量。',
  'footer.quickLinks': '快捷链接',
  'footer.home': '首页',
  'footer.about': '关于我们',
  'footer.careers': '加入我们',
  'footer.industryInsights': '行业洞察',
  'footer.services': '产品与服务',
  'footer.aiEducation': 'AI 教育培训',
  'footer.customSolutions': 'AI 定制解决方案',
  'footer.aiConsultation': 'AI 战略咨询',
  'footer.contactUs': '联系我们',
  'footer.email': 'develop@bixory.ai',
  'footer.wechat': '微信',
  'footer.wechatId': 'bixingai',
  'footer.scanQrCode': '扫码关注微信',
  'footer.copyright': '© 2025 毕行科技。保留所有权利。',
  'footer.privacyPolicy': '隐私政策',
  'footer.termsOfService': '服务条款'
});
