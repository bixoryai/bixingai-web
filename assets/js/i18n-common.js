// i18n-common.js
// Common/shared translations for Bixing Technology website
window.translations = window.translations || {};

// --- i18n header logic extracted from i18n-logic.js ---
// Safe localStorage access with fallback
function safeStorageAccess(key, defaultValue) {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (e) {
    console.warn('localStorage access denied, using default value');
    return defaultValue;
  }
}

function getCurrentLanguage() {
  return safeStorageAccess('bixingLanguage', 'en');
}

function applyTranslations(lang) {
  const currentLanguage = lang || getCurrentLanguage();
  if (!window.translations || !window.translations[currentLanguage]) return;
  
  // Apply translations to elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    if (window.translations[currentLanguage] && window.translations[currentLanguage][key]) {
      // Use innerHTML for elements that might contain HTML tags
      if (element.tagName === 'P' || element.classList.contains('company-description') || 
          window.translations[currentLanguage][key].includes('<br>')) {
        element.innerHTML = window.translations[currentLanguage][key];
        
        // No special handling needed
      } else {
        element.textContent = window.translations[currentLanguage][key];
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
  
  // Update language toggle UI
  const currentLanguageElement = document.getElementById('currentLanguage');
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

// Set up language on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    var lang = getCurrentLanguage();
    applyTranslations(lang);
    var currentLanguageElement = document.getElementById('currentLanguage');
    if (currentLanguageElement) {
      currentLanguageElement.textContent = lang === 'en' ? 'EN' : '中文';
    }
  });
} else {
  var lang = getCurrentLanguage();
  applyTranslations(lang);
  var currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = lang === 'en' ? 'EN' : '中文';
  }
}

// Safe localStorage setter with fallback
function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.warn('localStorage write access denied');
    return false;
  }
}

// Global toggleLanguage function - this will be enhanced by components.js
window.toggleLanguage = function() {
  const storedLanguage = getCurrentLanguage();
  const newLanguage = storedLanguage === 'en' ? 'zh' : 'en';
  safeStorageSet('bixingLanguage', newLanguage);
  var currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = newLanguage === 'en' ? 'EN' : '中文';
  }
  applyTranslations(newLanguage);
  
  // Dispatch an event so other scripts can react to language changes
  document.dispatchEvent(new CustomEvent('languageToggled', { detail: { language: newLanguage } }));
};
// --- END i18n header logic ---

window.translations.en = Object.assign({}, window.translations.en, {
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.services": "Products & Services",
  "nav.industryInsights": "Industry Insights",
  "nav.careers": "Careers",
  "nav.contact": "Contact Us",
  "footer.company": "Bixing Technology",
  "footer.companyDescription": "A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation.",
  "footer.quickLinks": "Quick Links",
  "footer.home": "Home",
  "footer.about": "About",
  "footer.careers": "Careers",
  "footer.industryInsights": "Industry Insights",
  "footer.services": "Products & Services",
  "footer.aiEducation": "AI Education & Training",
  "footer.customSolutions": "AI Custom Solutions",
  "footer.aiConsultation": "AI Strategy Consultation",
  "footer.contactUs": "Contact Us",
  "footer.email": "develop@bixory.ai",
  "footer.wechat": "WeChat",
  "footer.wechatId": "bixingai",
  "footer.scanQrCode": "Scan to connect on WeChat",
  "footer.copyright": "© 2025 Bixing Technology. All Rights Reserved.",
  "footer.privacyPolicy": "Privacy Policy",
  "footer.termsOfService": "Terms of Service"
});
window.translations.zh = Object.assign({}, window.translations.zh, {
  "nav.home": "首页",
  "nav.about": "关于我们",
  "nav.services": "产品与服务",
  "nav.industryInsights": "行业洞察",
  "nav.careers": "加入我们",
  "nav.contact": "联系我们",
  "footer.company": "毕行科技",
  "footer.companyDescription": "国际前沿 AI 解决方案提供商，<br>助你充满 AI 的力量。",
  "footer.quickLinks": "快捷链接",
  "footer.home": "首页",
  "footer.about": "关于我们",
  "footer.careers": "加入我们",
  "footer.industryInsights": "行业洞察",
  "footer.services": "产品与服务",
  "footer.aiEducation": "AI 教育培训",
  "footer.customSolutions": "AI 定制解决方案",
  "footer.aiConsultation": "AI 战略咨询",
  "footer.contactUs": "联系我们",
  "footer.email": "develop@bixory.ai",
  "footer.wechat": "微信",
  "footer.wechatId": "bixingai",
  "footer.scanQrCode": "扫码关注微信",
  "footer.copyright": "© 2025 毕行科技。保留所有权利。",
  "footer.privacyPolicy": "隐私政策",
  "footer.termsOfService": "服务条款"
});
