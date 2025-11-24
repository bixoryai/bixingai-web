/**
 * Translations.js - Handles multilingual support for Bixing Technology website
 */

// Translations object
const translations = {
  en: {
    // Page
    'page.title': 'Bixing Technology - AI Solutions for Enterprises',

    // Header
    'nav.home': 'Home',
    'nav.services': 'Products & Services',
    'nav.allServices': 'All Services',
    'nav.aiEducation': 'AI Education & Training',
    'nav.customSolutions': 'AI Custom Solutions',
    'nav.aiConsultation': 'Enterprise AI Consultation',
    'nav.industryInsights': 'Industry Insights',
    'nav.about': 'About Us',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'Empowering Enterprises with AI',
    'hero.subtitle': 'Innovative AI solutions to drive growth and efficiency for your business',
    'hero.exploreServices': 'Explore Services',
    'hero.contactUs': 'Contact Us',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive AI solutions tailored to your business needs',

    // Service Cards
    'service1.title': 'AI Education & Training',
    'service1.description': 'Empower your team with the knowledge and skills needed to leverage AI effectively in your organization.',
    'service1.learnMore': 'Learn More',

    'service2.title': 'AI Custom Solutions',
    'service2.description': 'Custom AI applications and models designed specifically for your unique business challenges and opportunities.',
    'service2.learnMore': 'Learn More',

    'service3.title': 'Enterprise AI Consultation',
    'service3.description': 'Strategic guidance on implementing AI across your organization to maximize ROI and competitive advantage.',
    'service3.learnMore': 'Learn More',

    // Empowered By Section
    'empoweredBy.title': 'Empowered By Leading AI Models',
    'empoweredBy.subtitle': 'We leverage the most advanced AI technologies to deliver exceptional results',

    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What our clients say about our services',

    // CTA Section
    'cta.title': 'Ready to Transform Your Business with AI?',
    'cta.subtitle': 'Connect with our experts to discuss your specific needs and challenges',
    'cta.contactUs': 'Contact Us Now',

    // Footer
    'footer.company': 'Bixing Technology',
    'footer.companyDescription': 'A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation.',
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
    'footer.wechat': 'WeChat',
    'footer.wechatId': 'bixingai',
    'footer.scanQrCode': 'Scan to connect on WeChat',
    'footer.copyright': '© 2023 Bixing Technology. All Rights Reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service'
  },
  zh: {
    // Page
    'page.title': '毕行科技 - 企业AI解决方案',

    // Header
    'nav.home': '首页',
    'nav.services': '产品服务',
    'nav.allServices': '所有服务',
    'nav.aiEducation': 'AI教育培训',
    'nav.customSolutions': 'AI定制解决方案',
    'nav.aiConsultation': '企业AI咨询',
    'nav.industryInsights': '行业洞察',
    'nav.about': '关于我们',
    'nav.careers': '职业发展',
    'nav.contact': '联系我们',

    // Hero Section
    'hero.title': '为企业赋能AI',
    'hero.subtitle': '创新AI解决方案，推动企业增长和效率',
    'hero.exploreServices': '探索服务',
    'hero.contactUs': '联系我们',

    // Services Section
    'services.title': '我们的服务',
    'services.subtitle': '根据您的业务需求量身定制的全面AI解决方案',

    // Service Cards
    'service1.title': 'AI教育培训',
    'service1.description': '为您的团队提供有效利用AI的知识和技能，助力组织发展。',
    'service1.learnMore': '了解更多',

    'service2.title': 'AI定制解决方案',
    'service2.description': '专为您独特的业务挑战和机遇设计的定制AI应用和模型。',
    'service2.learnMore': '了解更多',

    'service3.title': '企业AI咨询',
    'service3.description': '在整个组织中实施AI的战略指导，最大化投资回报和竞争优势。',
    'service3.learnMore': '了解更多',

    // Empowered By Section
    'empoweredBy.title': '由领先AI模型赋能',
    'empoweredBy.subtitle': '我们利用最先进的AI技术提供卓越的结果',

    // Testimonials
    'testimonials.title': '客户评价',
    'testimonials.subtitle': '客户对我们服务的评价',

    // CTA Section
    'cta.title': '准备好用AI转变您的企业吗？',
    'cta.subtitle': '与我们的专家联系，讨论您的具体需求和挑战',
    'cta.contactUs': '立即联系我们',

    // Footer
    'footer.company': '毕行科技',
    'footer.companyDescription': '国际前沿AI解决方案提供商,<br>助你充满AI的力量。',
    'footer.quickLinks': '快速链接',
    'footer.home': '首页',
    'footer.about': '关于我们',
    'footer.careers': '职业发展',
    'footer.industryInsights': '行业洞察',
    'footer.services': '产品服务',
    'footer.aiEducation': 'AI教育培训',
    'footer.customSolutions': 'AI定制解决方案',
    'footer.aiConsultation': '企业AI咨询',
    'footer.contactUs': '联系我们',
    'footer.wechat': '微信',
    'footer.wechatId': 'bixingai',
    'footer.scanQrCode': '扫码添加微信',
    'footer.copyright': '© 2023 成都毕行科技有限公司 版权所有',
    'footer.privacyPolicy': '隐私政策',
    'footer.termsOfService': '服务条款'
  }
};

/**
 * Apply translations based on current language
 */
function applyTranslations () {
  const currentLanguage = localStorage.getItem('bixingLanguage') || 'en';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      // Use innerHTML for elements that might contain HTML tags
      if (element.tagName === 'P' || element.classList.contains('company-description')) {
        element.innerHTML = translations[currentLanguage][key];
      } else {
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  // Handle placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  // Update language toggle UI
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = currentLanguage.toUpperCase();
  }

  // Update page title
  const titleKey = 'page.title';
  if (translations[currentLanguage] && translations[currentLanguage][titleKey]) {
    document.title = translations[currentLanguage][titleKey];
  }
}

/**
 * Toggle between English and Chinese
 */
function toggleLanguage () {
  const currentLanguage = localStorage.getItem('bixingLanguage') || 'en';
  const newLanguage = currentLanguage === 'en' ? 'zh' : 'en';

  localStorage.setItem('bixingLanguage', newLanguage);
  applyTranslations();
}

// Apply translations when the document is loaded
document.addEventListener('DOMContentLoaded', applyTranslations);
