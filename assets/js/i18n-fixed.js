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
    "services.learnMore": "Learn More",
    
    // Custom Solutions Page
    "customSolutions.hero.feature1": "AI Data Services",
    "customSolutions.hero.feature2": "Model Training & Deployment",
    "customSolutions.hero.feature3": "Specialized AI Agents/Apps",
    "customSolutions.solutions.title": "Our Specialties",
    "customSolutions.coreServices.data.title": "AI Data Services",
    "customSolutions.coreServices.model.title": "Model Training & Deployment",
    "customSolutions.coreServices.applications.title": "Specialized AI Agents/Apps",
    
    // Demo Section
    "demo.title": "Interactive AI Demos",
    "demo.subtitle": "Experience our AI capabilities firsthand",
    "demo.heading": "See AI in Action",
    "demo.description1": "Explore our interactive demos to understand how our AI solutions can transform your business processes and drive innovation.",
    "demo.description2": "These demos showcase just a fraction of what's possible with our custom AI development services.",
    "demo.viewAll": "View All Demos",
    "demo.placeholder": "Interactive AI Demo",
    "demo.placeholderSmall": "Demo will be integrated here",
    
    // Portfolio Section
    "portfolio.title": "Success Stories",
    "portfolio.subtitle": "Real-world AI implementations that delivered results",
    "portfolio.manufacturing.title": "Manufacturing Efficiency",
    "portfolio.manufacturing.description": "Implemented predictive maintenance AI that reduced downtime by 35% for a global manufacturing client.",
    "portfolio.manufacturing.readMore": "Read Case Study",
    "portfolio.healthcare.title": "Healthcare Innovation",
    "portfolio.healthcare.description": "Developed an AI diagnostic assistant that improved early detection rates by 28% for a leading healthcare provider.",
    "portfolio.healthcare.readMore": "Read Case Study",
    "portfolio.financial.title": "Financial Services",
    "portfolio.financial.description": "Created a fraud detection system that reduced false positives by 42% while increasing detection accuracy for a financial institution.",
    "portfolio.financial.readMore": "Read Case Study",
    "portfolio.education.title": "AI Education for Siemens",
    "portfolio.education.description": "Delivered comprehensive AI training program for Siemens, upskilling 200+ professionals from fundamentals to advanced AI application development and deployment.",
    "portfolio.education.readMore": "Read Case Study",
    "portfolio.viewAll": "View All Case Studies",
    
    // Testimonials Section
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "What our clients say about working with us",
    "testimonials.quote1": "Bixing Technology transformed our approach to data analysis. Their custom AI solution has given us insights we never thought possible.",
    "testimonials.author1": "Jane Smith",
    "testimonials.position1": "CTO, Enterprise Company",
    "testimonials.quote2": "The AI training program developed by Bixing has significantly accelerated our team's capabilities. Highly recommended!",
    "testimonials.author2": "Michael Johnson",
    "testimonials.position2": "Director of Innovation, Tech Solutions Inc.",
    
    // Insights Section
    "insights.title": "Latest Industry Insights",
    "insights.subtitle": "Stay updated with trends and innovations in AI",
    "insights.article1.date": "October 15, 2023",
    "insights.article1.category": "Enterprise AI",
    "insights.article1.title": "The Future of AI in Enterprise",
    "insights.article1.excerpt": "Exploring how artificial intelligence is reshaping enterprise operations and decision-making processes.",
    "insights.article1.readMore": "Read More",
    "insights.article2.date": "September 28, 2023",
    "insights.article2.category": "Machine Learning",
    "insights.article2.title": "Advances in Machine Learning Models",
    "insights.article2.excerpt": "Recent breakthroughs in machine learning models and what they mean for business applications.",
    "insights.article2.readMore": "Read More",
    "insights.article3.date": "September 10, 2023",
    "insights.article3.category": "AI Implementation",
    "insights.article3.title": "Implementing AI in Your Business",
    "insights.article3.excerpt": "A practical guide to successfully implementing AI solutions in various business contexts.",
    "insights.article3.readMore": "Read More",
    "insights.viewAll": "View All Insights",
    
    // CTA Section
    "cta.title": "Ready to Transform Your Business with AI?",
    "cta.subtitle": "Get in touch with our experts to discuss your specific needs and challenges",
    "cta.contactUs": "Contact Us Today",
    
    // Footer
    "footer.description": "Empowering enterprises with innovative AI solutions to drive growth and efficiency.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.about": "About Us",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.insights": "Insights",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.address": "123 AI Innovation Center, Silicon Valley, CA 94000",
    "footer.email": "info@bixingtechnology.com",
    "footer.phone": "+1 (555) 123-4567",
    "footer.copyright": " 2023 Bixing Technology. All rights reserved.",
    "footer.company": "Bixing Technology",
    "footer.education": "AI Education & Training",
    "footer.customSolutions": "AI Custom Solutions",
    "footer.consultation": "Enterprise AI Consultation",
    "contact.description": "Get in touch with us to learn how Bixing Technology can help you leverage the power of AI to achieve your business goals."
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
    "services.learnMore": "了解更多",
    
    // Custom Solutions Page
    "customSolutions.hero.feature1": "AI数据服务",
    "customSolutions.hero.feature2": "模型训练与部署",
    "customSolutions.hero.feature3": "专业AI代理/应用",
    "customSolutions.solutions.title": "我们的专长",
    "customSolutions.coreServices.data.title": "AI数据服务",
    "customSolutions.coreServices.model.title": "模型训练与部署",
    "customSolutions.coreServices.applications.title": "专业AI代理/应用"
  }
};

// Default language
let currentLanguage = 'en';

// Base URL for GitHub Pages compatibility
const baseUrl = '/bixingai-web';

// Initialize language based on browser settings or localStorage
function initLanguage() {
  console.log('Initializing language...');
  
  // Check if language preference is stored in localStorage
  const storedLang = localStorage.getItem('bixingLanguage');
  if (storedLang) {
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
    // Remove any existing event listeners by cloning
    const newToggle = languageToggle.cloneNode(true);
    languageToggle.parentNode.replaceChild(newToggle, languageToggle);
    
    // Add new click event listener
    newToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Language toggle clicked');
      
      // Get current language
      const currentLang = document.documentElement.lang || 'en';
      
      // Switch to other language
      const newLang = currentLang === 'en' ? 'zh' : 'en';
      console.log(`Switching language from ${currentLang} to ${newLang}`);
      
      // Save to localStorage
      localStorage.setItem('bixingLanguage', newLang);
      
      // Update currentLanguage
      currentLanguage = newLang;
      
      // Apply the new language immediately without page reload
      updateLanguageToggle();
      applyTranslations();
    });
    
    console.log('Language toggle event listener added');
  } else {
    console.warn('Language toggle element not found');
  }
});

// Export functions for external use
window.bixingI18n = {
  toggleLanguage,
  getCurrentLanguage: function() { return currentLanguage; },
  getTranslation: function(key) { return translations[currentLanguage][key]; }
};
