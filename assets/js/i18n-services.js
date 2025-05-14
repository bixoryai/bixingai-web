/**
 * i18n-services.js - Translations for the Products & Services page
 * This file extends the global translations object with services-specific translations
 */

// Initialize translations object if it doesn't exist
if (!window.translations) {
  window.translations = { en: {}, zh: {} };
}

// English translations
window.translations.en = Object.assign({}, window.translations.en, {
  "page.title": "Products & Services - Bixing Technology",
  "services.hero.title": "Comprehensive AI Solutions",
  "services.hero.subtitle": "Transforming businesses through education, custom solutions, and strategic consultation",
  "services.overview.title": "Our Products & Services",
  "services.overview.subtitle": "Tailored AI solutions to meet your organization's unique needs",
  "services.stats.projects": "Successful Projects",
  "services.stats.clients": "Enterprise Clients",
  "services.stats.experts": "AI Experts",
  "services.cta.title": "Ready to Transform Your Business with AI?",
  "services.cta.description": "Contact us today to discuss how our AI solutions can address your specific challenges and opportunities.",
  "services.cta.button": "Get Started",
  
  // Service cards
  "services.education.title": "AI Education",
  "services.education.description": "Comprehensive training programs designed to build AI literacy and technical skills across your organization.",
  "services.custom.title": "Custom AI Solutions",
  "services.custom.description": "Bespoke AI applications developed to address your specific business challenges and opportunities.",
  "services.consultation.title": "Strategic AI Consultation",
  "services.consultation.description": "Expert guidance on AI strategy, implementation roadmaps, and organizational transformation.",
  "services.integration.title": "AI Integration",
  "services.integration.description": "Seamless integration of AI capabilities into your existing systems and workflows.",
  "services.analytics.title": "Advanced Analytics",
  "services.analytics.description": "Powerful data analysis tools that uncover insights and drive informed decision-making.",
  "services.automation.title": "Process Automation",
  "services.automation.description": "Intelligent automation solutions that increase efficiency and reduce operational costs."
});

// Chinese translations
window.translations.zh = Object.assign({}, window.translations.zh, {
  "page.title": "产品与服务 - 毕行科技",
  "services.hero.title": "全面的AI解决方案",
  "services.hero.subtitle": "通过教育、定制解决方案和战略咨询转变企业",
  "services.overview.title": "我们的产品与服务",
  "services.overview.subtitle": "满足您组织独特需求的定制AI解决方案",
  "services.stats.projects": "成功项目",
  "services.stats.clients": "企业客户",
  "services.stats.experts": "AI专家",
  "services.cta.title": "准备好用AI转变您的业务了吗？",
  "services.cta.description": "立即联系我们，讨论我们的AI解决方案如何解决您的特定挑战和机遇。",
  "services.cta.button": "开始咨询",
  
  // Service cards
  "services.education.title": "AI教育",
  "services.education.description": "全面的培训计划，旨在提升您组织内的AI素养和技术技能。",
  "services.custom.title": "定制AI解决方案",
  "services.custom.description": "量身定制的AI应用，专为解决您特定的业务挑战和机遇而开发。",
  "services.consultation.title": "战略AI咨询",
  "services.consultation.description": "关于AI战略、实施路线图和组织转型的专家指导。",
  "services.integration.title": "AI集成",
  "services.integration.description": "将AI功能无缝集成到您现有的系统和工作流程中。",
  "services.analytics.title": "高级分析",
  "services.analytics.description": "强大的数据分析工具，揭示洞察并推动明智的决策。",
  "services.automation.title": "流程自动化",
  "services.automation.description": "智能自动化解决方案，提高效率并降低运营成本。"
});
