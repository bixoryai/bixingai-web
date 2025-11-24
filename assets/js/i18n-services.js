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
  'page.title': 'Products & Services - Bixing Technology',
  'services.hero.title': 'Comprehensive AI Solutions',
  'services.hero.subtitle': 'Transforming businesses through education, custom solutions, and strategic consultation',
  'services.overview.title': 'Our Products & Services',
  'services.overview.subtitle': 'Tailored AI solutions to meet your organization\'s unique needs',
  'services.stats.projects': 'Projects Completed',
  'services.stats.clients': 'Satisfied Clients',
  'services.stats.experts': 'AI Experts',
  'services.cta.title': 'Ready to Transform Your Business with AI?',
  'services.cta.subtitle': 'Contact us today to discuss how our AI solutions can address your specific needs.',
  'services.cta.button': 'Get in Touch',

  // Education service
  'services.education.title': 'AI Education & Training',
  'services.education.description1': 'Empower your team with cutting-edge AI knowledge',
  'services.education.description2': 'comprehensive programs for all skill levels',
  'services.education.feature1': 'Customized AI training workshops',
  'services.education.feature2': 'Hands-on learning with real AI models',
  'services.education.feature3': 'Specialized courses for technical & non-technical staff',
  'services.education.feature4': 'Certification programs for AI proficiency',
  'services.education.feature5': 'Ongoing support and learning resources',
  'services.education.cta': 'Learn More',

  // Custom Solutions service
  'services.customSolutions.title': 'AI Custom Solutions',
  'services.customSolutions.description1': 'Transform your business with tailored AI solutions',
  'services.customSolutions.description2': 'address challenges and unlock new opportunities',
  'services.customSolutions.feature1': 'Custom AI model development',
  'services.customSolutions.feature2': 'AI-powered automation systems',
  'services.customSolutions.feature3': 'Data processing & analytics solutions',
  'services.customSolutions.feature4': 'Computer vision & NLP applications',
  'services.customSolutions.feature5': 'Seamless integration with existing systems',
  'services.customSolutions.cta': 'Learn More',

  // Consultation service
  'services.consultation.title': 'Enterprise AI Consultation',
  'services.consultation.description1': 'Navigate the complex AI landscape with expert guidance',
  'services.consultation.description2': 'tailored to your organization\'s strategic goals',
  'services.consultation.feature1': 'AI readiness assessment',
  'services.consultation.feature2': 'AI strategy development',
  'services.consultation.feature3': 'Implementation roadmap creation',
  'services.consultation.feature4': 'ROI analysis for AI initiatives',
  'services.consultation.feature5': 'Ethical AI governance frameworks',
  'services.consultation.cta': 'Learn More',

  // Section title
  'services.section.title': 'Our Services',
  'services.section.subtitle': 'Comprehensive AI solutions for businesses of all sizes',

  // Stats section
  'services.stats.satisfaction': 'Client Satisfaction',
  'services.stats.industries': 'Industries Served',
  'services.stats.support': 'Expert Support',

  // Other services
  'services.integration.title': 'AI Integration',
  'services.integration.description': 'Seamless integration of AI capabilities into your existing systems and workflows.',
  'services.analytics.title': 'Advanced Analytics',
  'services.analytics.description': 'Powerful data analysis tools that uncover insights and drive informed decision-making.',
  'services.automation.title': 'Process Automation',
  'services.automation.description': 'Intelligent automation solutions that increase efficiency and reduce operational costs.'
});

// Chinese translations
window.translations.zh = Object.assign({}, window.translations.zh, {
  'page.title': '产品与服务 - 毕行科技',
  'services.hero.title': '适合每个企业的AI解决方案',
  'services.hero.subtitle': '通过尖端人工智能技术赋能组织',
  'services.overview.title': '我们的产品和服务',
  'services.overview.subtitle': '量身定制的AI解决方案，满足您组织的独特需求',
  'services.stats.projects': '已完成项目',
  'services.stats.clients': '满意客户',
  'services.stats.experts': 'AI专家',
  'services.cta.title': '准备好用AI转变您的业务了吗？',
  'services.cta.subtitle': '立即联系我们，讨论我们的AI解决方案如何满足您的特定需求。',
  'services.cta.button': '联系我们',

  // Education service
  'services.education.title': 'AI教育与培训',
  'services.education.description1': '为您的团队提供前沿AI知识',
  'services.education.description2': '适合各种技能水平的综合教育计划',
  'services.education.feature1': '定制化AI培训工作坊',
  'services.education.feature2': '使用真实AI模型的实践学习',
  'services.education.feature3': '为技术和非技术人员提供专业课程',
  'services.education.feature4': 'AI能力认证项目',
  'services.education.feature5': '持续的支持和学习资源',
  'services.education.cta': '了解更多',

  // Custom Solutions service
  'services.customSolutions.title': 'AI定制解决方案',
  'services.customSolutions.description1': '通过定制AI解决方案转变您的业务',
  'services.customSolutions.description2': '解决特定挑战并开启新机遇',
  'services.customSolutions.feature1': '定制AI模型开发',
  'services.customSolutions.feature2': 'AI驱动的自动化系统',
  'services.customSolutions.feature3': '数据处理和分析解决方案',
  'services.customSolutions.feature4': '计算机视觉和自然语言处理应用',
  'services.customSolutions.feature5': '与现有系统的无缝集成',
  'services.customSolutions.cta': '了解更多',

  // Consultation service
  'services.consultation.title': '企业AI咨询',
  'services.consultation.description1': '通过专家指导驾驭复杂的AI领域',
  'services.consultation.description2': '针对您组织的战略目标和挑战',
  'services.consultation.feature1': 'AI就绪性评估',
  'services.consultation.feature2': 'AI战略制定',
  'services.consultation.feature3': '实施路线图创建',
  'services.consultation.feature4': 'AI计划的ROI分析',
  'services.consultation.feature5': '道德AI治理框架',
  'services.consultation.cta': '了解更多',

  // Section title
  'services.section.title': '我们的服务',
  'services.section.subtitle': '为各种规模的企业提供全面的AI解决方案',

  // Stats section
  'services.stats.satisfaction': '客户满意度',
  'services.stats.industries': '服务行业',
  'services.stats.support': '专家支持',

  // Other services
  'services.integration.title': 'AI集成',
  'services.integration.description': '将AI功能无缝集成到您现有的系统和工作流程中。',
  'services.analytics.title': '高级分析',
  'services.analytics.description': '强大的数据分析工具，揭示洞察并推动明智的决策。',
  'services.automation.title': '流程自动化',
  'services.automation.description': '智能自动化解决方案，提高效率并降低运营成本。'
});
