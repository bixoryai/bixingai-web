// i18n-common.js
// Common/shared translations for Bixing Technology website
window.translations = window.translations || {};

// --- i18n header logic extracted from i18n-logic.js ---
function getCurrentLanguage() {
  return localStorage.getItem('bixingLanguage') || 'en';
}

function applyTranslations(lang) {
  if (!window.translations || !window.translations[lang]) return;
  var elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = window.translations[lang][key];
    if (typeof text !== 'undefined') {
      el.textContent = text;
    }
  });
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

// Global toggleLanguage function - this will be enhanced by components.js
window.toggleLanguage = function() {
  const storedLanguage = getCurrentLanguage();
  const newLanguage = storedLanguage === 'en' ? 'zh' : 'en';
  localStorage.setItem('bixingLanguage', newLanguage);
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
  "footer.companyDescription": "国际前沿 AI 解决方案提供商，助你充满 AI 的力量。",
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
