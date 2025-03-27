/**
 * Internationalization (i18n) functionality for Bixing Technology website
 * Handles language switching between English and Chinese
 */

// Language translations
const translations = {
  'en': {
    // Page title
    "page.title": "Bixing Technology - AI Solutions for Enterprise",
    
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.allServices": "All Services",
    "nav.education": "AI Education/Training",
    "nav.customSolutions": "AI Custom Solutions",
    "nav.consultation": "Enterprise AI Consultation",
    "nav.insights": "Industry Insights",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "nav.contact": "Contact Us",
    
    // Custom Solutions Page
    // Hero section features
    "customSolutions.hero.feature1": "AI Data Services",
    "customSolutions.hero.feature2": "Model Training & Deployment",
    "customSolutions.hero.feature3": "Specialized AI Agents/Apps",

    // Solutions section
    "customSolutions.solutions.title": "Our Specialties",

    // Core Services section
    "customSolutions.coreServices.data.title": "AI Data Services",
    "customSolutions.coreServices.model.title": "Model Training & Deployment",
    "customSolutions.coreServices.applications.title": "Specialized AI Agents/Apps",
    
    // Hero Section
    "hero.title": "Empowering Enterprises with AI Innovation",
    "hero.subtitle": "Custom AI solutions, education, and consultation services to transform your business",
    "hero.exploreServices": "Explore Services",
    "hero.contactUs": "Contact Us",
    
    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive AI solutions tailored to your business needs",
    "services.education.title": "AI Education & Training",
    "services.education.description": "Empower your team with AI knowledge through customized training programs and workshops.",
    "services.education.feature1": "Customized learning paths",
    "services.education.feature2": "Hands-on workshops",
    "services.education.feature3": "Expert-led training",
    "services.customSolutions.title": "AI Custom Solutions",
    "services.customSolutions.description": "From data services to model training and deployment, we build tailored AI solutions for your unique challenges.",
    "services.customSolutions.feature1": "Data preparation & analysis",
    "services.customSolutions.feature2": "Custom model development",
    "services.customSolutions.feature3": "AI application integration",
    "services.consultation.title": "Enterprise AI Consultation",
    "services.consultation.description": "Strategic guidance for implementing AI across your organization to drive innovation and efficiency.",
    "services.consultation.feature1": "AI readiness assessment",
    "services.consultation.feature2": "Implementation roadmap",
    "services.consultation.feature3": "Technology selection",
    "services.learnMore": "Learn More"
  },
  'zh': {
    // Page title
    "page.title": "成都毕行科技有限公司 - 企业AI解决方案",
    
    // Navigation
    "nav.home": "首页",
    "nav.services": "服务",
    "nav.allServices": "所有服务",
    "nav.education": "AI教育培训",
    "nav.customSolutions": "AI定制解决方案",
    "nav.consultation": "企业AI咨询",
    "nav.insights": "行业洞察",
    "nav.about": "关于我们",
    "nav.careers": "招贤纳士",
    "nav.contact": "联系我们",
    
    // Custom Solutions Page
    // Hero section features
    "customSolutions.hero.feature1": "AI数据服务",
    "customSolutions.hero.feature2": "模型训练与部署",
    "customSolutions.hero.feature3": "专业AI代理/应用",

    // Solutions section
    "customSolutions.solutions.title": "我们的专长",

    // Core Services section
    "customSolutions.coreServices.data.title": "AI数据服务",
    "customSolutions.coreServices.model.title": "模型训练与部署",
    "customSolutions.coreServices.applications.title": "专业AI代理/应用",
    
    // Hero Section
    "hero.title": "用AI创新赋能企业",
    "hero.subtitle": "定制AI解决方案、教育和咨询服务，助力业务转型",
    "hero.exploreServices": "探索服务",
    "hero.contactUs": "联系我们",
    
    // Services Section
    "services.title": "我们的服务",
    "services.subtitle": "全面的AI解决方案，根据您的业务需求量身定制",
    "services.education.title": "AI教育与培训",
    "services.education.description": "通过定制培训计划和研讨会，为您的团队提供AI知识赋能。",
    "services.education.feature1": "定制学习路径",
    "services.education.feature2": "实践工作坊",
    "services.education.feature3": "专家引导培训",
    "services.customSolutions.title": "AI定制解决方案",
    "services.customSolutions.description": "从数据服务到模型训练和部署，我们为您的独特挑战构建量身定制的AI解决方案。",
    "services.customSolutions.feature1": "数据准备与分析",
    "services.customSolutions.feature2": "定制模型开发",
    "services.customSolutions.feature3": "AI应用集成",
    "services.consultation.title": "企业AI咨询",
    "services.consultation.description": "为在整个组织中实施AI提供战略指导，推动创新和效率。",
    "services.consultation.feature1": "AI就绪评估",
    "services.consultation.feature2": "实施路线图",
    "services.consultation.feature3": "技术选择",
    "services.learnMore": "了解更多"
  }
};

// Default language
let currentLanguage = 'en';

// Initialize language based on browser settings or localStorage
function initLanguage() {
  console.log('Initializing language...');
  
  // Check if language preference is stored in localStorage
  const storedLang = localStorage.getItem('bixingLanguage');
  if (storedLang && (storedLang === 'en' || storedLang === 'zh')) {
    console.log(`Found stored language preference: ${storedLang}`);
    currentLanguage = storedLang;
  } else {
    // Default to browser language if available and supported
    const browserLang = navigator.language || navigator.userLanguage;
    console.log(`Browser language: ${browserLang}`);
    
    if (browserLang) {
      // Check if browser language starts with 'zh'
      if (browserLang.startsWith('zh')) {
        currentLanguage = 'zh';
      } else {
        currentLanguage = 'en'; // Default to English for all other languages
      }
      console.log(`Set language to: ${currentLanguage} based on browser language`);
    }
  }
  
  // Set the document language attribute
  document.documentElement.lang = currentLanguage;
  
  // Update UI to reflect current language
  updateLanguageToggle();
  
  // Apply translations
  applyTranslations();
}

// Toggle between languages
function toggleLanguage() {
  console.log(`Toggling language from ${currentLanguage}`);
  
  // Switch language
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  
  // Save to localStorage
  localStorage.setItem('bixingLanguage', currentLanguage);
  
  // Update document language attribute
  document.documentElement.lang = currentLanguage;
  
  // Update UI
  updateLanguageToggle();
  
  // Apply translations
  applyTranslations();
  
  console.log(`Language toggled to ${currentLanguage}`);
}

// Update the language toggle button UI
function updateLanguageToggle() {
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = currentLanguage.toUpperCase();
    
    // Add visual feedback
    currentLanguageElement.classList.add('language-changed');
    setTimeout(() => {
      currentLanguageElement.classList.remove('language-changed');
    }, 500);
  }
  
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    if (currentLanguage === 'en') {
      languageToggle.setAttribute('title', 'Switch to Chinese');
    } else {
      languageToggle.setAttribute('title', 'Switch to English');
    }
  }
}

// Apply translations to the page
function applyTranslations() {
  try {
    console.log(`Applying translations for ${currentLanguage}`);
    
    if (!translations[currentLanguage]) {
      console.error(`No translations found for language: ${currentLanguage}`);
      return;
    }
    
    let translatedElements = 0;
    const missingTranslations = [];
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.textContent = translations[currentLanguage][key];
        translatedElements++;
      } else {
        missingTranslations.push(key);
      }
    });
    
    // Translate page title if it has data-i18n attribute
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.hasAttribute('data-i18n')) {
      const titleKey = titleElement.getAttribute('data-i18n');
      if (translations[currentLanguage] && translations[currentLanguage][titleKey]) {
        document.title = translations[currentLanguage][titleKey];
        translatedElements++;
      } else {
        missingTranslations.push(titleKey);
      }
    }
    
    // Log translation statistics for debugging
    console.log(`Translated ${translatedElements} elements`);
    if (missingTranslations.length > 0) {
      console.warn('Missing translations for keys:', missingTranslations);
    }
  } catch (error) {
    console.error('Error applying translations:', error);
  }
}

// Document ready event listener
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - initializing language');
  initLanguage();
  
  // Add click event to language toggle
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Language toggle clicked');
      toggleLanguage();
    });
    
    console.log('Language toggle event listener added');
  } else {
    console.warn('Language toggle element not found');
  }
});

// Export functions for external use
window.bixingI18n = {
  toggleLanguage: toggleLanguage,
  getCurrentLanguage: function() { return currentLanguage; },
  getTranslation: function(key) { 
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      return translations[currentLanguage][key]; 
    }
    return key;
  }
};
