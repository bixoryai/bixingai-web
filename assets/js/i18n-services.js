/**
 * i18n-services.js - Translations for the Products & Services page
 * This file extends the global translations object with services-specific translations
 */

// Initialize translations object if it doesn't exist
if (!window.translations) {
  window.translations = {en: {}, zh: {}};
}

// Ensure translations object structure exists
if (!window.translations.en) {
  window.translations.en = {};
}
if (!window.translations.zh) {
  window.translations.zh = {};
}

// English translations
window.translations.en = Object.assign({}, window.translations.en, {
  'page.title': 'Products & Services - Bixing Technology',
  'services.page.title': 'Products & Services',
  'services.page.subtitle': 'Comprehensive AI solutions tailored to your business needs',
  'services.hero.title': 'Comprehensive AI Solutions',
  'services.hero.subtitle':
    'Transforming businesses through education, custom solutions, and strategic consultation',
  'services.overview.title': 'Our Products & Services',
  'services.overview.subtitle': 'Tailored AI solutions to meet your organization\'s unique needs',
  'services.stats.projects': 'Projects Completed',
  'services.stats.clients': 'Satisfied Clients',
  'services.stats.experts': 'AI Experts',
  'services.cta.title': 'Ready to Transform Your Business with AI?',
  'services.cta.subtitle':
    'Contact us today to discuss how our AI solutions can address your specific needs.',
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
  'services.integration.description':
    'Seamless integration of AI capabilities into your existing systems and workflows.',
  'services.analytics.title': 'Advanced Analytics',
  'services.analytics.description':
    'Powerful data analysis tools that uncover insights and drive informed decision-making.',
  'services.automation.title': 'Process Automation',
  'services.automation.description':
    'Intelligent automation solutions that increase efficiency and reduce operational costs.',

  // Education page (service detail page)
  'education.hero.title': 'AI Education & Training',
  'education.hero.subtitle': 'Empower your team with the knowledge and skills needed to leverage AI effectively in your organization',
  'education.overview.title': 'Bridging the AI Knowledge Gap',
  'education.overview.subtitle': 'Comprehensive AI education tailored to your organization\'s needs',
  'education.overview.paragraph1': 'In today\'s rapidly evolving technological landscape, AI literacy has become a critical competitive advantage. Bixing Technology\'s AI Education and Training programs are designed to empower your teams with the practical knowledge and skills needed to leverage AI effectively in your specific industry context.',
  'education.overview.paragraph2': 'Whether you\'re looking to upskill technical teams, help business leaders make informed AI decisions, or create organization-wide AI literacy, our customized programs deliver practical, actionable knowledge that can be immediately applied to real-world challenges.',
  'education.overview.paragraph3': 'Our approach combines theoretical foundations with hands-on experience, ensuring participants not only understand AI concepts but can apply them confidently in their daily work.',
  'education.overview.imageAlt': 'AI Education Overview',
  'education.benefits.title': 'Key Benefits',
  'education.benefits.subtitle': 'Why choose our AI education and training programs',
  'education.benefits.card1.title': 'Customized Learning Paths',
  'education.benefits.card1.text': 'Tailored programs designed to meet the specific needs and goals of your organization, from AI fundamentals to advanced applications.',
  'education.benefits.card2.title': 'Industry Expert Instructors',
  'education.benefits.card2.text': 'Learn from seasoned AI practitioners with real-world experience in implementing AI solutions across various industries.',
  'education.benefits.card3.title': 'Practical, Hands-On Learning',
  'education.benefits.card3.text': 'Focus on practical applications and real-world scenarios to ensure your team can immediately apply their new AI skills.',
  'education.cta.title': 'Ready to Transform Your Team with AI Education?',
  'education.cta.subtitle': 'Contact us today to discuss how our AI training programs can benefit your organization.',
  'education.cta.button': 'Get Started',

  // Custom Solutions page (service detail page)
  'customSolutions.hero.title': 'Custom AI Solutions',
  'customSolutions.hero.subtitle': 'Transform your business with tailored AI solutions that address challenges and unlock new opportunities',
  'customSolutions.overview.title': 'Bespoke AI Solutions for Your Business',
  'customSolutions.overview.subtitle': 'Custom AI models and applications tailored to your unique business challenges',
  'customSolutions.overview.paragraph1': 'Every business has unique challenges and opportunities. Off-the-shelf AI solutions often fall short of addressing your specific needs. That\'s where Bixing Technology\'s Custom AI Solutions come in.',
  'customSolutions.overview.paragraph2': 'Our team of expert AI developers and data scientists work closely with you to understand your business processes, identify optimization opportunities, and develop custom AI models and applications that deliver measurable results.',
  'customSolutions.overview.paragraph3': 'From computer vision systems to natural language processing applications, we build AI solutions that seamlessly integrate with your existing infrastructure and scale with your business.',
  'customSolutions.services.title': 'Our Custom AI Services',
  'customSolutions.services.subtitle': 'Comprehensive AI development services to meet your business needs',
  'customSolutions.services.card1.title': 'Custom AI Model Development',
  'customSolutions.services.card1.text': 'Develop bespoke machine learning models tailored to your specific use cases and data.',
  'customSolutions.services.card2.title': 'AI-Powered Automation',
  'customSolutions.services.card2.text': 'Automate complex business processes with intelligent AI systems that learn and adapt.',
  'customSolutions.services.card3.title': 'Data Analytics Solutions',
  'customSolutions.services.card3.text': 'Extract actionable insights from your data with advanced AI-powered analytics.',
  'customSolutions.cta.title': 'Ready to Build Your Custom AI Solution?',
  'customSolutions.cta.subtitle': 'Contact us today to discuss how custom AI solutions can transform your business.',
  'customSolutions.cta.button': 'Get Started',

  // Consultation page (service detail page)
  'consultation.hero.title': 'Enterprise AI Consultation',
  'consultation.hero.subtitle': 'Strategic guidance to integrate AI into your business, optimize operations, and drive innovation',
  'consultation.overview.title': 'Strategic AI Implementation',
  'consultation.overview.subtitle': 'Transforming your business with a comprehensive AI strategy',
  'consultation.overview.paragraph1': 'In today\'s rapidly evolving technological landscape, implementing AI effectively requires more than just technical expertise—it demands a strategic approach that aligns with your business objectives and organizational culture.',
  'consultation.overview.paragraph2': 'Bixing Technology\'s Enterprise AI Consultation services provide comprehensive guidance to help your organization navigate the complexities of AI adoption and implementation. Our team of experienced consultants combines deep technical knowledge with business acumen to develop tailored strategies that drive measurable results.',
  'consultation.overview.paragraph3': 'Whether you\'re just beginning your AI journey or looking to optimize existing initiatives, our consultative approach ensures that your AI investments deliver maximum value and competitive advantage.',
  'consultation.services.title': 'Our Consultation Services',
  'consultation.services.subtitle': 'Comprehensive AI consulting to guide your transformation',
  'consultation.services.card1.title': 'AI Readiness Assessment',
  'consultation.services.card1.text': 'Evaluate your organization\'s current state and readiness for AI implementation.',
  'consultation.services.card2.title': 'AI Strategy Development',
  'consultation.services.card2.text': 'Develop comprehensive AI strategies aligned with your business goals.',
  'consultation.services.card3.title': 'Implementation Roadmap',
  'consultation.services.card3.text': 'Create detailed roadmaps for phased AI implementation and adoption.',
  'consultation.services.card4.title': 'ROI Analysis',
  'consultation.services.card4.text': 'Measure and optimize the return on investment for your AI initiatives.',
  'consultation.cta.title': 'Ready to Develop Your AI Strategy?',
  'consultation.cta.subtitle': 'Contact us today to discuss how our AI consultation services can guide your transformation.',
  'consultation.cta.button': 'Get Started'
});

// Chinese translations
window.translations.zh = Object.assign({}, window.translations.zh, {
  'page.title': '产品与服务 - 毕行科技',
  'services.page.title': '产品与服务',
  'services.page.subtitle': '根据您的业务需求量身定制的全面AI解决方案',
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
  'services.automation.description': '智能自动化解决方案，提高效率并降低运营成本。',

  // Education page (service detail page)
  'education.hero.title': 'AI教育培训',
  'education.hero.subtitle': '为您的团队提供有效利用AI所需的知识和技能，助力组织发展',
  'education.overview.title': '弥合AI知识差距',
  'education.overview.subtitle': '根据您组织需求定制的全面AI教育',
  'education.overview.paragraph1': '在当今快速发展的技术环境中，AI素养已成为关键的竞争优势。毕行科技的AI教育和培训计划旨在为您的团队提供在特定行业背景下有效利用AI所需的实用知识和技能。',
  'education.overview.paragraph2': '无论您是希望提升技术团队的技能，帮助业务领导者做出明智的AI决策，还是创建全组织范围的AI素养，我们的定制计划都能提供可立即应用于实际挑战的实用、可行知识。',
  'education.overview.paragraph3': '我们的方法将理论基础与实践经验相结合，确保参与者不仅理解AI概念，还能在日常工作中自信地应用它们。',
  'education.overview.imageAlt': 'AI教育概览',
  'education.benefits.title': '核心优势',
  'education.benefits.subtitle': '为什么选择我们的AI教育和培训计划',
  'education.benefits.card1.title': '定制学习路径',
  'education.benefits.card1.text': '量身定制的计划，从AI基础知识到高级应用，满足您组织的具体需求和目标。',
  'education.benefits.card2.title': '行业专家讲师',
  'education.benefits.card2.text': '向经验丰富的AI实践者学习，他们在多个行业实施AI解决方案方面拥有丰富的实战经验。',
  'education.benefits.card3.title': '实用的实践学习',
  'education.benefits.card3.text': '专注于实际应用和真实场景，确保您的团队能够立即应用他们新学的AI技能。',
  'education.cta.title': '准备好用AI教育转变您的团队了吗？',
  'education.cta.subtitle': '立即联系我们，讨论我们的AI培训计划如何使您的组织受益。',
  'education.cta.button': '开始使用',

  // Custom Solutions page (service detail page)
  'customSolutions.hero.title': 'AI定制解决方案',
  'customSolutions.hero.subtitle': '通过量身定制的AI解决方案转变您的业务，应对挑战并开启新机遇',
  'customSolutions.overview.title': '为您的业务量身打造的AI解决方案',
  'customSolutions.overview.subtitle': '针对您独特业务挑战的定制AI模型和应用',
  'customSolutions.overview.paragraph1': '每个企业都有独特的挑战和机遇。现成的AI解决方案往往无法满足您的特定需求。这就是毕行科技的定制AI解决方案的用武之地。',
  'customSolutions.overview.paragraph2': '我们的专家AI开发人员和数据科学家团队与您密切合作，了解您的业务流程，识别优化机会，并开发能够带来可衡量成果的定制AI模型和应用。',
  'customSolutions.overview.paragraph3': '从计算机视觉系统到自然语言处理应用，我们构建的AI解决方案可以与您现有的基础设施无缝集成，并随着您的业务扩展。',
  'customSolutions.services.title': '我们的定制AI服务',
  'customSolutions.services.subtitle': '全面的AI开发服务，满足您的业务需求',
  'customSolutions.services.card1.title': '定制AI模型开发',
  'customSolutions.services.card1.text': '开发针对您特定用例和数据量身定制的机器学习模型。',
  'customSolutions.services.card2.title': 'AI驱动的自动化',
  'customSolutions.services.card2.text': '使用能够学习和适应的智能AI系统自动化复杂的业务流程。',
  'customSolutions.services.card3.title': '数据分析解决方案',
  'customSolutions.services.card3.text': '使用先进的AI驱动分析从您的数据中提取可行的洞察。',
  'customSolutions.cta.title': '准备好构建您的定制AI解决方案了吗？',
  'customSolutions.cta.subtitle': '立即联系我们，讨论定制AI解决方案如何转变您的业务。',
  'customSolutions.cta.button': '开始使用',

  // Consultation page (service detail page)
  'consultation.hero.title': '企业AI咨询',
  'consultation.hero.subtitle': '战略指导，将AI融入您的业务，优化运营并推动创新',
  'consultation.overview.title': '战略性AI实施',
  'consultation.overview.subtitle': '通过全面的AI策略转变您的业务',
  'consultation.overview.paragraph1': '在当今快速发展的技术环境中，有效实施AI需要的不仅仅是技术专长——它需要一种与您的业务目标和组织文化一致的战略方法。',
  'consultation.overview.paragraph2': '毕行科技的企业AI咨询服务提供全面指导，帮助您的组织应对AI采用和实施的复杂性。我们经验丰富的咨询师团队将深厚的技术知识与商业智慧相结合，制定能够带来可衡量成果的定制策略。',
  'consultation.overview.paragraph3': '无论您是刚刚开始AI之旅，还是希望优化现有计划，我们的咨询方法都能确保您的AI投资带来最大价值和竞争优势。',
  'consultation.services.title': '我们的咨询服务',
  'consultation.services.subtitle': '全面的AI咨询服务，指导您的转型',
  'consultation.services.card1.title': 'AI就绪性评估',
  'consultation.services.card1.text': '评估您组织当前的状况和对AI实施的准备情况。',
  'consultation.services.card2.title': 'AI战略制定',
  'consultation.services.card2.text': '制定与您的业务目标一致的全面AI策略。',
  'consultation.services.card3.title': '实施路线图',
  'consultation.services.card3.text': '创建分阶段AI实施和采用的详细路线图。',
  'consultation.services.card4.title': 'ROI分析',
  'consultation.services.card4.text': '衡量并优化您AI计划的投资回报。',
  'consultation.cta.title': '准备好制定您的AI策略了吗？',
  'consultation.cta.subtitle': '立即联系我们，讨论我们的AI咨询服务如何指导您的转型。',
  'consultation.cta.button': '开始使用'
});
