/**
 * Contact page translations for Bixing Technology website
 */

// Contact page specific translations
const contactTranslations = {
  'en': {
    // Page title
    "page.title": "Contact Us - Bixing Technology",
    
    // Hero section
    "contact.hero.title": "Get in Touch",
    "contact.hero.subtitle": "Reach out to discuss how we can help transform your business with AI",
    
    // Contact cards
    "contact.email.title": "Email Us",
    "contact.email.description": "For general inquiries, partnership opportunities, or any questions about our services.",
    
    "contact.wechat.title": "Connect on WeChat",
    "contact.wechat.description": "Add our WeChat account for quick responses and updates about our services.",
    
    "contact.wechatService.title": "WeChat Service Number",
    "contact.wechatService.description": "Scan the QR code to connect with us on WeChat",
    
    // Contact form
    "contact.form.title": "Send Us a Message",
    "contact.form.subtitle": "Fill out the form below and we'll get back to you as soon as possible",
    
    // Contact tabs
    "contact.tab.general": "General Inquiry",
    "contact.tab.business": "Business Partnership",
    "contact.tab.support": "Technical Support",
    
    // Form labels
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone (Optional)",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    
    // Business form
    "contact.form.companyName": "Company Name",
    "contact.form.contactPerson": "Contact Person",
    "contact.form.partnershipType": "Partnership Type",
    "contact.form.selectPartnershipType": "Select partnership type",
    "contact.form.reseller": "Reseller Partnership",
    "contact.form.technology": "Technology Partnership",
    "contact.form.strategic": "Strategic Alliance",
    "contact.form.other": "Other",
    "contact.form.partnershipDetails": "Partnership Details",
    "contact.form.submitPartnership": "Submit Partnership Inquiry",
    
    // Support form
    "contact.form.name": "Name",
    "contact.form.productService": "Product/Service",
    "contact.form.selectProductService": "Select product/service",
    "contact.form.aiEducation": "AI Education/Training",
    "contact.form.customSolutions": "AI Custom Solutions",
    "contact.form.consultation": "Enterprise AI Consultation",
    "contact.form.issueType": "Issue Type",
    "contact.form.selectIssueType": "Select issue type",
    "contact.form.technical": "Technical Issue",
    "contact.form.billing": "Billing Question",
    "contact.form.feedback": "Feedback",
    "contact.form.issueDescription": "Issue Description",
    "contact.form.submitSupport": "Submit Support Request",
    
    // Map section
    "contact.map.title": "Our Location",
    "contact.map.subtitle": "Visit us at our office in Chengdu, China"
  },
  'zh': {
    // Page title
    "page.title": "联系我们 - 毕行科技",
    
    // Hero section
    "contact.hero.title": "联系我们",
    "contact.hero.subtitle": "有问题或想讨论AI如何转变您的业务？我们随时为您提供帮助。",
    
    // Contact cards
    "contact.email.title": "电子邮件",
    "contact.email.description": "用于一般咨询、合作机会或有关我们服务的任何问题。",
    
    "contact.wechat.title": "连接微信",
    "contact.wechat.description": "添加我们的微信账号以获取快速响应和有关我们的服务的更新。",
    
    "contact.wechatService.title": "微信服务号",
    "contact.wechatService.description": "扫描二维码在微信上与我们联系",
    
    // Contact form
    "contact.form.title": "发送消息",
    "contact.form.subtitle": "填写下面的表格，我们会尽快回复您",
    
    // Contact tabs
    "contact.tab.general": "一般咨询",
    "contact.tab.business": "商业合作",
    "contact.tab.support": "技术支持",
    
    // Form labels
    "contact.form.firstName": "名",
    "contact.form.lastName": "姓",
    "contact.form.email": "电子邮件",
    "contact.form.phone": "电话（可选）",
    "contact.form.subject": "主题",
    "contact.form.message": "消息",
    "contact.form.submit": "发送消息",
    
    // Business form
    "contact.form.companyName": "公司名称",
    "contact.form.contactPerson": "联系人",
    "contact.form.partnershipType": "合作类型",
    "contact.form.selectPartnershipType": "选择合作类型",
    "contact.form.reseller": "经销商合作",
    "contact.form.technology": "技术合作",
    "contact.form.strategic": "战略联盟",
    "contact.form.other": "其他",
    "contact.form.partnershipDetails": "合作详情",
    "contact.form.submitPartnership": "提交合作咨询",
    
    // Support form
    "contact.form.name": "姓名",
    "contact.form.productService": "产品/服务",
    "contact.form.selectProductService": "选择产品/服务",
    "contact.form.aiEducation": "AI教育/培训",
    "contact.form.customSolutions": "AI定制解决方案",
    "contact.form.consultation": "企业AI咨询",
    "contact.form.issueType": "问题类型",
    "contact.form.selectIssueType": "选择问题类型",
    "contact.form.technical": "技术问题",
    "contact.form.billing": "账单问题",
    "contact.form.feedback": "反馈",
    "contact.form.issueDescription": "问题描述",
    "contact.form.submitSupport": "提交支持请求",
    
    // Map section
    "contact.map.title": "我们的位置",
    "contact.map.subtitle": "欢迎访问我们位于中国成都的办公室"
  }
};

// Apply contact page translations
function applyContactTranslations() {
  const currentLang = localStorage.getItem('bixingLanguage') || 'en';
  
  // Apply translations to elements with data-contact-i18n attribute
  document.querySelectorAll('[data-contact-i18n]').forEach(element => {
    const key = element.getAttribute('data-contact-i18n');
    if (contactTranslations[currentLang] && contactTranslations[currentLang][key]) {
      element.textContent = contactTranslations[currentLang][key];
    }
  });
  
  // Apply translations to page title
  document.title = contactTranslations[currentLang]["page.title"];
  
  // Apply translations to hero section
  document.querySelector('.hero-title').textContent = contactTranslations[currentLang]["contact.hero.title"];
  document.querySelector('.hero-subtitle').textContent = contactTranslations[currentLang]["contact.hero.subtitle"];
  
  // Apply translations to contact cards
  document.querySelectorAll('.contact-card h3')[0].textContent = contactTranslations[currentLang]["contact.email.title"];
  document.querySelectorAll('.contact-card p')[0].textContent = contactTranslations[currentLang]["contact.email.description"];
  
  document.querySelectorAll('.contact-card h3')[1].textContent = contactTranslations[currentLang]["contact.wechat.title"];
  document.querySelectorAll('.contact-card p')[1].textContent = contactTranslations[currentLang]["contact.wechat.description"];
  
  document.querySelectorAll('.contact-card h3')[2].textContent = contactTranslations[currentLang]["contact.wechatService.title"];
  document.querySelectorAll('.contact-card p')[2].textContent = contactTranslations[currentLang]["contact.wechatService.description"];
  
  // Apply translations to contact form section
  document.querySelector('.contact-form-section h2').textContent = contactTranslations[currentLang]["contact.form.title"];
  document.querySelector('.contact-form-section .lead').textContent = contactTranslations[currentLang]["contact.form.subtitle"];
  
  // Apply translations to contact tabs
  document.querySelector('#general-tab').textContent = contactTranslations[currentLang]["contact.tab.general"];
  document.querySelector('#business-tab').textContent = contactTranslations[currentLang]["contact.tab.business"];
  document.querySelector('#support-tab').textContent = contactTranslations[currentLang]["contact.tab.support"];
  
  // Apply translations to form labels
  const formLabels = document.querySelectorAll('.form-label');
  formLabels[0].textContent = contactTranslations[currentLang]["contact.form.firstName"];
  formLabels[1].textContent = contactTranslations[currentLang]["contact.form.lastName"];
  formLabels[2].textContent = contactTranslations[currentLang]["contact.form.email"];
  formLabels[3].textContent = contactTranslations[currentLang]["contact.form.phone"];
  formLabels[4].textContent = contactTranslations[currentLang]["contact.form.subject"];
  formLabels[5].textContent = contactTranslations[currentLang]["contact.form.message"];
  document.querySelector('#generalInquiryForm .submit-btn').textContent = contactTranslations[currentLang]["contact.form.submit"];
  
  // Apply translations to business form
  formLabels[6].textContent = contactTranslations[currentLang]["contact.form.companyName"];
  formLabels[7].textContent = contactTranslations[currentLang]["contact.form.contactPerson"];
  formLabels[8].textContent = contactTranslations[currentLang]["contact.form.email"];
  formLabels[9].textContent = contactTranslations[currentLang]["contact.form.phone"];
  formLabels[10].textContent = contactTranslations[currentLang]["contact.form.partnershipType"];
  
  const options = document.querySelectorAll('option');
  options[0].textContent = contactTranslations[currentLang]["contact.form.selectPartnershipType"];
  options[1].textContent = contactTranslations[currentLang]["contact.form.reseller"];
  options[2].textContent = contactTranslations[currentLang]["contact.form.technology"];
  options[3].textContent = contactTranslations[currentLang]["contact.form.strategic"];
  options[4].textContent = contactTranslations[currentLang]["contact.form.other"];
  
  formLabels[11].textContent = contactTranslations[currentLang]["contact.form.partnershipDetails"];
  document.querySelector('#businessPartnershipForm .submit-btn').textContent = contactTranslations[currentLang]["contact.form.submitPartnership"];
  
  // Apply translations to support form
  formLabels[12].textContent = contactTranslations[currentLang]["contact.form.name"];
  formLabels[13].textContent = contactTranslations[currentLang]["contact.form.email"];
  formLabels[14].textContent = contactTranslations[currentLang]["contact.form.productService"];
  
  options[5].textContent = contactTranslations[currentLang]["contact.form.selectProductService"];
  options[6].textContent = contactTranslations[currentLang]["contact.form.aiEducation"];
  options[7].textContent = contactTranslations[currentLang]["contact.form.customSolutions"];
  options[8].textContent = contactTranslations[currentLang]["contact.form.consultation"];
  options[9].textContent = contactTranslations[currentLang]["contact.form.other"];
  
  formLabels[15].textContent = contactTranslations[currentLang]["contact.form.issueType"];
  options[10].textContent = contactTranslations[currentLang]["contact.form.selectIssueType"];
  options[11].textContent = contactTranslations[currentLang]["contact.form.technical"];
  options[12].textContent = contactTranslations[currentLang]["contact.form.billing"];
  options[13].textContent = contactTranslations[currentLang]["contact.form.feedback"];
  options[14].textContent = contactTranslations[currentLang]["contact.form.other"];
  
  formLabels[16].textContent = contactTranslations[currentLang]["contact.form.issueDescription"];
  document.querySelector('#supportForm .submit-btn').textContent = contactTranslations[currentLang]["contact.form.submitSupport"];
  
  // Apply translations to map section
  document.querySelector('.map-section').previousElementSibling.querySelector('h2').textContent = contactTranslations[currentLang]["contact.map.title"];
  document.querySelector('.map-section').previousElementSibling.querySelector('p').textContent = contactTranslations[currentLang]["contact.map.subtitle"];
}

// Custom toggle language function for contact page
function contactToggleLanguage() {
  const currentLang = localStorage.getItem('bixingLanguage') || 'en';
  const newLanguage = currentLang === 'en' ? 'zh' : 'en';
  
  localStorage.setItem('bixingLanguage', newLanguage);
  
  // Update the language toggle button
  const languageToggle = document.getElementById('currentLanguage');
  if (languageToggle) {
    languageToggle.textContent = newLanguage.toUpperCase();
  }
  
  // Apply translations
  if (typeof applyTranslations === 'function') {
    applyTranslations();
  }
  
  // Apply contact-specific translations
  applyContactTranslations();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Apply contact-specific translations
  applyContactTranslations();
});
