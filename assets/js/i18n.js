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
    "nav.services": "Products & Services",
    "nav.allServices": "All Services",
    "nav.education": "AI Education/Training",
    "nav.customSolutions": "AI Custom Solutions",
    "nav.consultation": "Enterprise AI Consultation",
    "nav.industryInsights": "Industry Insights",
    "nav.about": "About Us",
    "nav.careers": "Careers",
    "nav.contact": "Contact Us",
    
    // Hero Section
    "hero.title": "Empowering Enterprises with AI Innovation",
    "hero.subtitle": "Custom AI solutions, education, and consultation services to transform your business",
    "hero.exploreServices": "Explore Services",
    "hero.contactUs": "Contact Us",
    "hero.empoweredBy": "Empowered by",
    "hero.floatingCard1": "Specialized AI Models",
    "hero.floatingCard2": "AI Data Solutions",
    "hero.floatingCard3": "AI Agents",
    "hero.floatingCard4": "Custom AI Strategy",
    "hero.floatingCard5": "AI Education",
    
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
    "services.consultation.feature4": "ROI analysis and business case development",
    "services.consultation.feature5": "Change management and adoption strategies",
    "services.consultation.learnMore": "Explore AI Consultation Services",
    "services.learnMore": "Learn More",
    
    // Services page specific translations
    "services.page.title": "Products & Services - Bixing Technology",
    "services.page.heroTitle": "Comprehensive AI Solutions",
    "services.page.heroSubtitle": "Transforming businesses through education, custom solutions, and strategic consultation",
    "services.heroTitle": "Comprehensive AI Solutions",
    "services.heroSubtitle": "Transforming businesses through education, custom solutions, and strategic consultation",
    "services.overviewTitle": "Our Service Areas",
    "services.overviewSubtitle": "Tailored AI solutions to meet your organization's unique needs",
    "services.education.detailDescription": "Empower your workforce with the knowledge and skills needed to leverage AI technologies effectively. Our customized training programs are designed to bridge the AI knowledge gap at all levels of your organization.",
    "services.education.feature4": "Comprehensive curriculum covering AI fundamentals to advanced topics",
    "services.education.feature5": "Ongoing support and resources for continuous learning",
    "services.education.learnMore": "Explore AI Education Services",
    "services.customSolutions.detailDescription": "From data preparation to model deployment, we develop end-to-end AI solutions tailored to your specific business challenges. Our team of experts works closely with you to create AI applications that deliver measurable results.",
    "services.customSolutions.feature4": "Scalable solutions that grow with your business",
    "services.customSolutions.feature5": "Ongoing maintenance and optimization",
    "services.customSolutions.learnMore": "Explore Custom AI Solutions",
    "services.consultation.detailDescription": "Navigate the complex AI landscape with strategic guidance from our experienced consultants. We help you identify opportunities, assess readiness, and develop a comprehensive roadmap for AI implementation across your organization.",
    "services.consultation.feature4": "ROI analysis and business case development",
    "services.consultation.feature5": "Change management and adoption strategies",
    "services.consultation.learnMore": "Explore AI Consultation Services",
    "services.stats.projects": "100+",
    "services.stats.projectsLabel": "Successful Projects",
    "services.stats.clients": "50+",
    "services.stats.clientsLabel": "Enterprise Clients",
    "services.stats.experts": "30+",
    "services.stats.expertsLabel": "AI Experts",
    "services.cta.title": "Ready to Transform Your Business with AI?",
    "services.cta.description": "Contact us today to discuss how our AI solutions can address your specific challenges and opportunities.",
    "services.cta.button": "Get Started",
    
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
    "footer.company": "Bixing Technology",
    "footer.companyDescription": "A leading provider of AI solutions for businesses. We help organizations leverage the power of artificial intelligence to drive growth and innovation.",
    "footer.quickLinks": "Quick Links",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.services": "Products & Services",
    "footer.careers": "Careers",
    "footer.industryInsights": "Industry Insights",
    "footer.contact": "Contact",
    "footer.aiEducation": "AI Education & Training",
    "footer.customSolutions": "Custom AI Solutions",
    "footer.aiConsultation": "AI Strategy Consultation",
    "footer.contactUs": "Contact Us",
    "footer.email": "develop@bixory.ai",
    "footer.wechat": "WeChat",
    "footer.wechatId": "bixingai",
    "footer.newsletter": "Newsletter",
    "footer.newsletterDesc": "Subscribe to our newsletter to receive the latest updates and news.",
    "footer.emailPlaceholder": "Your Email",
    "footer.copyright": " 2023 Bixing Technology. All Rights Reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicyContent": "At Bixing Technology, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.",
    "footer.termsOfServiceContent": "By using our website, you agree to our Terms of Service. Please read this document carefully before using our services.",
    
    // Education page
    "education.page.title": "AI Education & Training | Bixing Technology",
    "education.hero.title": "AI Education & Training",
    "education.hero.subtitle": "Empower your team with the knowledge and skills to leverage AI effectively",
    "education.hero.description": "Our customized training programs bridge the knowledge gap and prepare your organization for the AI-driven future.",
    "education.hero.explorePrograms": "Explore Our Programs",
    "education.hero.contactUs": "Contact Us",
    "education.hero.imageAlt": "AI Education",
    "education.overview.title": "Bridging the AI Knowledge Gap",
    "education.overview.subtitle": "Comprehensive AI education tailored to your organization's needs",
    "education.overview.imageAlt": "AI Education Overview",
    "education.overview.paragraph1": "In today's rapidly evolving technological landscape, AI literacy has become a critical competitive advantage. Bixing Technology's AI Education and Training programs are designed to empower your teams with the practical knowledge and skills needed to leverage AI effectively in your specific industry context.",
    "education.overview.paragraph2": "Whether you're looking to upskill technical teams, help business leaders make informed AI decisions, or create organization-wide AI literacy, our customized programs deliver practical, actionable knowledge that can be immediately applied to real-world challenges.",
    "education.overview.paragraph3": "Our approach combines theoretical foundations with hands-on experience, ensuring participants not only understand AI concepts but can apply them confidently in their daily work.",
    "education.benefits.title": "Key Benefits",
    "education.benefits.subtitle": "Why choose our AI education programs",
    "education.benefits.customized.title": "Customized Learning Paths",
    "education.benefits.customized.description": "Programs tailored to your team's specific needs and skill levels, ensuring relevant and impactful learning.",
    "education.benefits.handson.title": "Hands-on Experience",
    "education.benefits.handson.description": "Practical exercises and real-world projects that reinforce concepts and build confidence.",
    "education.benefits.experts.title": "Expert Instructors",
    "education.benefits.experts.description": "Learn from industry professionals with extensive AI experience and proven teaching abilities.",
    "education.benefits.support.title": "Continuous Support",
    "education.benefits.support.description": "Ongoing assistance and resources after training completion to ensure successful application.",
    "education.programs.title": "Our Training Programs",
    "education.programs.subtitle": "Flexible options to meet your organization's needs",
    "education.programs.executive.title": "Executive AI Literacy",
    "education.programs.executive.description": "Strategic overview of AI capabilities, limitations, and business applications for leadership teams.",
    "education.programs.technical.title": "Technical AI Implementation",
    "education.programs.technical.description": "Hands-on training for technical teams on AI development, deployment, and maintenance.",
    "education.programs.organizational.title": "Organization-Wide AI Awareness",
    "education.programs.organizational.description": "Foundational AI concepts and applications for all employees to foster innovation and adoption.",
    "education.programs.custom.title": "Custom Training Solutions",
    "education.programs.custom.description": "Tailored programs designed for your specific industry, use cases, and organizational goals.",
    "education.programs.duration": "Duration:",
    "education.programs.inquire": "Inquire Now",
    "education.programs.executive.feature1": "AI Landscape and Strategic Impact",
    "education.programs.executive.feature2": "AI Adoption Decision Framework",
    "education.programs.executive.feature3": "Industry-Specific Case Studies and Applications",
    "education.programs.executive.duration": "Half-day to 1 day",
    "education.programs.fundamentals.title": "AI Fundamentals Workshop",
    "education.programs.fundamentals.description": "Comprehensive introduction to AI concepts, technologies, and applications for technical and non-technical professionals.",
    "education.programs.fundamentals.feature1": "Core AI Concepts and Terminology",
    "education.programs.fundamentals.feature2": "Machine Learning Fundamentals",
    "education.programs.fundamentals.feature3": "AI Tools and Technologies",
    "education.programs.fundamentals.duration": "2-3 days",
    "education.programs.bootcamp.title": "AI Technical Bootcamp",
    "education.programs.bootcamp.description": "Intensive hands-on training for technical teams on building and deploying AI solutions.",
    "education.programs.bootcamp.feature1": "Data Preparation and Analysis",
    "education.programs.bootcamp.feature2": "Model Development and Training",
    "education.programs.bootcamp.feature3": "Deployment and Integration Strategies",
    "education.programs.bootcamp.duration": "1-2 weeks",
    "education.programs.custom.feature1": "Customized to Your Business Goals",
    "education.programs.custom.feature2": "Industry-Specific Use Cases",
    "education.programs.custom.feature3": "Flexible Delivery Options",
    "education.programs.custom.duration": "Customized",
    "education.approach.title": "Our Educational Approach",
    "education.approach.subtitle": "Effective learning methodologies for lasting impact",
    "education.approach.paragraph1": "We believe that effective AI education goes beyond theoretical concepts. Our training programs are designed to be engaging, practical, and directly applicable to your organization's specific challenges and opportunities.",
    "education.approach.paragraph2": "Through a combination of interactive workshops, hands-on projects, real-world case studies, and ongoing guidance, we ensure participants not only understand AI concepts but can confidently apply them in their day-to-day work.",
    "education.testimonials.title": "What Our Clients Say",
    "education.testimonials.subtitle": "Success stories from our training participants",
    "education.testimonials.quote1": "The customized AI training program from Bixing Technology has transformed how our product development teams approach innovation. The practical, hands-on approach ensured that our teams could immediately apply what they learned.",
    "education.testimonials.author1": "Sarah Chen, CTO, TechInnovate",
    "education.testimonials.quote2": "As a non-technical executive, I found the AI literacy program incredibly valuable. It provided me with the knowledge I needed to make informed strategic decisions about AI implementation without getting lost in technical details.",
    "education.testimonials.author2": "Michael Rodriguez, CEO, Global Finance Solutions",
    "education.testimonials.quote3": "The organization-wide AI awareness program helped us build a culture of innovation. Employees across departments now collaborate on AI initiatives, resulting in several successful projects that have improved our operations.",
    "education.testimonials.author3": "Jennifer Park, Chief Innovation Officer, HealthPlus",
    "education.faq.title": "Frequently Asked Questions",
    "education.faq.subtitle": "Common questions about our AI education programs",
    "education.faq.q1": "Do participants need prior AI or technical experience?",
    "education.faq.a1": "No, our programs are designed for various skill levels, from complete beginners to experienced practitioners. We tailor the content to match your team's existing knowledge and learning objectives.",
    "education.faq.q2": "How long do the training programs typically last?",
    "education.faq.a2": "Program duration varies based on content depth and your organization's needs. Executive programs may be 1-2 days, while technical programs typically span 4-8 weeks with part-time commitment. We offer flexible scheduling options.",
    "education.faq.q3": "Can training be conducted remotely or must it be in-person?",
    "education.faq.a3": "We offer both in-person and remote training options. Our virtual programs use interactive platforms to ensure engagement and practical application, while in-person sessions provide more hands-on collaboration opportunities.",
    "education.faq.q4": "How do you measure the effectiveness of the training?",
    "education.faq.a4": "We establish clear learning objectives at the outset and use various assessment methods throughout the program. We also conduct follow-up evaluations to measure knowledge retention and practical application in the workplace.",
    "education.faq.q5": "Can you integrate our company's data and use cases into the training?",
    "education.faq.a5": "Yes, we strongly encourage this approach. Using your organization's actual data and business challenges makes the training more relevant and immediately applicable. We work with you to identify appropriate use cases while respecting data privacy requirements.",
    "education.cta.title": "Ready to Empower Your Team with AI Knowledge?",
    "education.cta.description": "Contact us to discuss how our AI education programs can be tailored to your organization's specific needs and goals.",
    "education.cta.button": "Schedule a Consultation",
    "casestudy.education.title": "Transforming Siemens with Enterprise-Wide AI Education",
    "casestudy.education.subtitle": "A comprehensive AI training program that upskilled 200+ professionals across technical and business teams",
    "casestudy.client": "Client",
    "casestudy.industry": "Industry",
    "casestudy.service": "Service Provided",
    "casestudy.duration": "Duration",
    "casestudy.education.industry": "Industrial Manufacturing & Technology",
    "casestudy.education.service": "AI Education & Training",
    "casestudy.education.duration": "6 Months",
    "casestudy.overview": "Project Overview",
    "casestudy.education.overview1": "Siemens, a global technology leader, recognized the need to integrate AI capabilities across their organization to maintain competitive advantage and drive innovation. They partnered with Bixing Technology to develop and deliver a comprehensive AI education program that would upskill their workforce from basic AI literacy to advanced AI application development and deployment.",
    "casestudy.education.overview2": "The program needed to address diverse learning needs across technical and business teams, provide practical hands-on experience, and align with Siemens' specific industry applications and use cases.",
    "casestudy.keyresults": "Key Results",
    "casestudy.education.result1": "Trained over 200 professionals across engineering, product development, and business units",
    "casestudy.education.result2": "94% of participants reported confidence in applying AI concepts to their daily work",
    "casestudy.education.result3": "12 internal AI projects initiated within 3 months of program completion",
    "casestudy.education.result4": "Reduced external AI consultancy costs by 40% through internal capability building",
    "casestudy.education.testimonial": "Bixing Technology's AI education program has been transformative for our organization. Their ability to tailor content to both technical and non-technical audiences while maintaining practical relevance to our industry challenges was exceptional. The hands-on workshops and real-world applications have accelerated our AI adoption journey significantly.",
    "casestudy.education.testimonialName": "Dr. Thomas Weber",
    "casestudy.education.testimonialTitle": "Chief Digital Officer, Siemens",
    "casestudy.challenge": "The Challenge",
    "casestudy.education.challenge1": "Siemens faced several challenges in their AI transformation journey:",
    "casestudy.education.challenge1title": "Diverse Technical Backgrounds",
    "casestudy.education.challenge1text": "Participants ranged from data scientists with advanced degrees to business managers with limited technical exposure, requiring highly adaptable training approaches.",
    "casestudy.education.challenge2title": "Industry-Specific Applications",
    "casestudy.education.challenge2text": "Generic AI training wouldn't suffice; content needed to be relevant to manufacturing, automation, and industrial IoT contexts.",
    "casestudy.education.challenge3title": "Practical Application Gap",
    "casestudy.education.challenge3text": "Previous training initiatives had failed to bridge the gap between theoretical knowledge and practical implementation.",
    "casestudy.education.challenge4title": "Global Coordination",
    "casestudy.education.challenge4text": "Training needed to be delivered across multiple time zones and locations while maintaining consistent quality and engagement.",
    "casestudy.approach": "Our Approach",
    "casestudy.education.approachIntro": "Bixing Technology developed a multi-tiered, customized approach to address Siemens' specific needs:",
    "casestudy.education.approach1title": "1. Comprehensive Needs Assessment",
    "casestudy.education.approach1text": "We began with a thorough analysis of Siemens' existing AI capabilities, interviewing stakeholders across departments to identify specific knowledge gaps and learning objectives. This allowed us to create targeted learning paths for different roles and departments.",
    "casestudy.education.approach2title": "2. Customized Curriculum Development",
    "casestudy.education.approach2text": "We designed a modular curriculum with three distinct tracks: AI Fundamentals for business teams, Applied AI for technical implementers, and Advanced AI Development for specialized technical teams. Each module incorporated Siemens-specific use cases and industry applications.",
    "casestudy.education.approach3title": "3. Hands-On Learning Environment",
    "casestudy.education.approach3text": "We created a secure, cloud-based learning environment with pre-configured tools and datasets relevant to Siemens' operations. This allowed participants to immediately apply concepts through guided exercises and mini-projects without complex setup requirements.",
    "casestudy.education.approach4title": "4. Expert-Led Live Sessions",
    "casestudy.education.approach4text": "Our team of AI specialists with industry experience delivered interactive live sessions that combined theory with practical demonstrations. These sessions included real-time coding exercises, model building, and problem-solving workshops.",
    "casestudy.education.approach5title": "5. Capstone Projects",
    "casestudy.education.approach5text": "Participants worked in cross-functional teams on real business challenges identified by Siemens leadership. These projects served as both learning vehicles and potential solutions for actual business needs, creating immediate ROI from the training program.",
    "casestudy.education.programStructure": "Program Structure",
    "casestudy.education.weeks": "Weeks",
    "casestudy.education.learningTracks": "Learning Tracks",
    "casestudy.education.liveWorkshops": "Live Workshops",
    "casestudy.education.trainingModules": "Training Modules",
    "casestudy.education.modulesIntro": "Our comprehensive curriculum covered the full spectrum of AI knowledge and skills:",
    "casestudy.education.module1": "AI Fundamentals",
    "casestudy.education.module1.1": "Introduction to AI, ML, and Deep Learning",
    "casestudy.education.module1.2": "Data Literacy and Analytics Foundations",
    "casestudy.education.module1.3": "AI Use Cases in Manufacturing and Industry 4.0",
    "casestudy.education.module1.4": "Ethical Considerations and Responsible AI",
    "casestudy.education.module2": "Applied AI",
    "casestudy.education.module2.1": "Machine Learning Algorithms and Model Selection",
    "casestudy.education.module2.2": "Data Preparation and Feature Engineering",
    "casestudy.education.module2.3": "Model Evaluation and Performance Metrics",
    "casestudy.education.module2.4": "Practical Python for Data Science",
    "casestudy.education.module3": "Advanced AI Development",
    "casestudy.education.module3.1": "Deep Learning Architectures and Neural Networks",
    "casestudy.education.module3.2": "Computer Vision for Quality Control",
    "casestudy.education.module3.3": "Natural Language Processing for Documentation",
    "casestudy.education.module3.4": "Time Series Analysis for Predictive Maintenance",
    "casestudy.education.module4": "AI Implementation",
    "casestudy.education.module4.1": "Model Deployment and MLOps",
    "casestudy.education.module4.2": "AI Integration with Existing Systems",
    "casestudy.education.module4.3": "Scaling AI Solutions",
    "casestudy.education.module4.4": "Monitoring and Maintaining AI Systems",
    "casestudy.results": "Results & Impact",
    "casestudy.education.resultsIntro": "The comprehensive AI education program delivered significant measurable outcomes for Siemens:",
    "casestudy.education.stat1": "Professionals Trained",
    "casestudy.education.stat2": "Confidence Rate",
    "casestudy.education.stat3": "New AI Projects",
    "casestudy.education.stat4": "Cost Reduction",
    "casestudy.education.businessImpact": "Business Impact",
    "casestudy.education.impact1": "Accelerated AI adoption across multiple business units",
    "casestudy.education.impact2": "Reduced dependency on external AI consultants by building internal capabilities",
    "casestudy.education.impact3": "Improved cross-functional collaboration on AI initiatives",
    "casestudy.education.impact4": "Created a common AI language and framework across the organization",
    "casestudy.education.impact5": "Established a pipeline of AI talent and champions within the company",
    "casestudy.education.projectOutcomes": "Project Outcomes",
    "casestudy.education.outcome1": "Developed a predictive maintenance system that reduced equipment downtime by 27%",
    "casestudy.education.outcome2": "Created an automated quality inspection system using computer vision",
    "casestudy.education.outcome3": "Implemented an NLP solution to streamline technical documentation analysis",
    "casestudy.education.outcome4": "Built an AI-powered supply chain optimization tool that reduced inventory costs by 15%",
    "casestudy.education.ctaTitle": "Transform Your Organization with AI Education",
    "casestudy.education.ctaText": "Ready to empower your team with the AI skills needed to drive innovation and competitive advantage? Contact us to discuss how our customized AI education programs can address your specific business challenges.",
    "casestudy.education.ctaButton": "Start Your AI Journey Today",
    "education.process.title": "Our Training Process",
    "education.process.subtitle": "A methodical approach to effective AI education",
    "education.process.assessment.title": "Assessment",
    "education.process.assessment.description": "We evaluate your team's current knowledge and identify specific learning needs to create a targeted educational plan.",
    "education.process.curriculum.title": "Curriculum Design",
    "education.process.curriculum.description": "Custom development of training materials and learning paths aligned with your organization's goals and industry context.",
    "education.process.training.title": "Interactive Training",
    "education.process.training.description": "Engaging workshops combining theory and hands-on practice to ensure knowledge retention and skill development.",
    "education.process.projects.title": "Applied Projects",
    "education.process.projects.description": "Real-world applications to reinforce learning and demonstrate practical value to your organization.",
    "education.process.evaluation.title": "Evaluation & Feedback",
    "education.process.evaluation.description": "Measuring progress and gathering insights for continuous improvement of both participants and our programs.",
    "education.process.ongoing.title": "Ongoing Support",
    "education.process.ongoing.description": "Resources and assistance to continue the learning journey and address challenges as they arise in implementation.",
    "education.programs.title": "Our Training Courses",
    "education.programs.subtitle": "Flexible options to meet your organization's needs",
    "education.programs.executive.title": "Executive AI Literacy",
    "education.programs.executive.description": "Strategic overview of AI capabilities, limitations, and business applications for leadership teams.",
    "education.programs.technical.title": "Technical AI Implementation",
    "education.programs.technical.description": "Hands-on training for technical teams on AI development, deployment, and maintenance.",
    "education.programs.organizational.title": "Organization-Wide AI Awareness",
    "education.programs.organizational.description": "Foundational AI concepts and applications for all employees to foster innovation and adoption.",
    "education.programs.custom.title": "Custom Training Solutions",
    "education.programs.custom.description": "Tailored programs designed for your specific industry, use cases, and organizational goals.",
    "education.programs.duration": "Duration:",
    "education.programs.inquire": "Inquire Now",
    "education.programs.executive.feature1": "AI Landscape and Strategic Impact",
    "education.programs.executive.feature2": "AI Adoption Decision Framework",
    "education.programs.executive.feature3": "Industry-Specific Case Studies and Applications",
    "education.programs.executive.duration": "Half-day to 1 day",
    "education.programs.fundamentals.title": "AI Fundamentals Workshop",
    "education.programs.fundamentals.description": "Comprehensive introduction to AI concepts, technologies, and applications for technical and non-technical professionals.",
    "education.programs.fundamentals.feature1": "Core AI Concepts and Terminology",
    "education.programs.fundamentals.feature2": "Machine Learning Fundamentals",
    "education.programs.fundamentals.feature3": "AI Tools and Technologies",
    "education.programs.fundamentals.duration": "2-3 days",
    "education.programs.bootcamp.title": "AI Technical Bootcamp",
    "education.programs.bootcamp.description": "Intensive hands-on training for technical teams on building and deploying AI solutions.",
    "education.programs.bootcamp.feature1": "Data Preparation and Analysis",
    "education.programs.bootcamp.feature2": "Model Development and Training",
    "education.programs.bootcamp.feature3": "Deployment and Integration Strategies",
    "education.programs.bootcamp.duration": "1-2 weeks",
    "education.programs.custom.feature1": "Customized to Your Business Goals",
    "education.programs.custom.feature2": "Industry-Specific Use Cases",
    "education.programs.custom.feature3": "Flexible Delivery Options",
    "education.programs.custom.duration": "Customized",
    "education.cta.title": "Ready to Empower Your Team with AI Knowledge?",
    "education.cta.description": "Contact us to discuss how our AI education programs can be tailored to your organization's specific needs and goals.",
    "education.cta.button": "Schedule a Consultation",
    "education.cta.subtitle": "Let's discuss how our AI education programs can benefit your organization",
    "education.cta.contact": "Contact Us",
    "education.cta.download": "Download Handbook",
    "education.testimonials.position1": "HealthTech Innovations CTO",
    "education.testimonials.position2": "Global Retail Solutions CEO",
    "education.testimonials.position3": "HealthPlus Chief Innovation Officer",
    "education.programs.technical.feature1": "AI Development and Deployment",
    "education.programs.technical.feature2": "Model Training and Optimization",
    "education.programs.technical.feature3": "AI Application Integration",
    "education.programs.technical.duration": "4-8 weeks",
    "education.programs.organizational.feature1": "AI Foundational Concepts",
    "education.programs.organizational.feature2": "AI Applications and Use Cases",
    "education.programs.organizational.feature3": "AI-Driven Innovation",
    "education.programs.organizational.duration": "1-2 days",
    "education.programs.fundamentals.feature4": "AI Tools and Technologies",
    "education.programs.fundamentals.feature5": "AI Project Management",
    "education.programs.bootcamp.feature4": "AI Model Deployment",
    "education.programs.bootcamp.feature5": "AI Application Maintenance",
    "education.programs.custom.feature4": "Custom AI Solutions",
    "education.programs.custom.feature5": "AI Project Implementation",
    "education.programs.technical.feature4": "AI Security and Compliance",
    "education.programs.technical.feature5": "AI Ethics and Responsibility",
    "education.programs.organizational.feature4": "AI Culture and Transformation",
    "education.programs.organizational.feature5": "AI Leadership and Strategy",
  },
  'zh': {
    // Page title
    "page.title": "成都毕行科技有限公司 - 企业AI解决方案",
    
    // Navigation
    "nav.home": "首页",
    "nav.services": "产品与服务",
    "nav.allServices": "所有服务",
    "nav.education": "AI教育培训",
    "nav.customSolutions": "AI定制解决方案",
    "nav.consultation": "企业AI咨询",
    "nav.industryInsights": "行业洞察",
    "nav.about": "关于我们",
    "nav.careers": "职业发展",
    "nav.contact": "联系我们",
    
    // Hero Section
    "hero.title": "AI创新赋能企业",
    "hero.subtitle": "定制AI解决方案、教育和咨询服务，助力企业转型",
    "hero.exploreServices": "探索服务",
    "hero.contactUs": "联系我们",
    "hero.empoweredBy": "技术支持",
    "hero.floatingCard1": "专业AI模型",
    "hero.floatingCard2": "AI数据解决方案",
    "hero.floatingCard3": "AI智能代理",
    "hero.floatingCard4": "定制AI策略",
    "hero.floatingCard5": "AI教育培训",
    
    // Services Section
    "services.title": "我们的服务",
    "services.subtitle": "根据您的业务需求量身定制的全面AI解决方案",
    "services.education.title": "AI教育与培训",
    "services.education.description": "通过定制培训计划和研讨会，为您的团队提供AI知识。",
    "services.education.feature1": "定制学习路径",
    "services.education.feature2": "实践工作坊",
    "services.education.feature3": "专家引导培训",
    "services.customSolutions.title": "AI定制解决方案",
    "services.customSolutions.description": "从数据服务到模型训练和部署，我们为您的独特挑战构建量身定制的AI解决方案。",
    "services.customSolutions.feature1": "数据准备与分析",
    "services.customSolutions.feature2": "定制模型开发",
    "services.customSolutions.feature3": "AI应用集成",
    "services.consultation.title": "企业AI咨询",
    "services.consultation.description": "为您的组织实施AI提供战略指导，推动创新和效率。",
    "services.consultation.feature1": "AI就绪评估",
    "services.consultation.feature2": "实施路线图",
    "services.consultation.feature3": "技术选择",
    "services.consultation.feature4": "ROI分析和商业案例开发",
    "services.consultation.feature5": "变革管理和采用策略",
    "services.consultation.learnMore": "探索AI咨询服务",
    "services.learnMore": "了解更多",
    
    // Services page specific translations
    "services.page.title": "产品与服务 - 毕行科技",
    "services.page.heroTitle": "全面的AI解决方案",
    "services.page.heroSubtitle": "通过教育、定制解决方案和战略咨询转变企业",
    "services.heroTitle": "全面的AI解决方案",
    "services.heroSubtitle": "通过教育、定制解决方案和战略咨询转变企业",
    "services.overviewTitle": "我们的产品与服务",
    "services.overviewSubtitle": "满足您组织独特需求的定制AI解决方案",
    "services.education.detailDescription": "使您的员工掌握有效利用AI技术所需的知识和技能。我们的定制培训计划旨在弥合组织各层面的AI知识差距。",
    "services.education.feature4": "涵盖AI基础到高级主题的全面课程",
    "services.education.feature5": "持续学习的支持和资源",
    "services.education.learnMore": "探索AI教育服务",
    "services.customSolutions.detailDescription": "从数据准备到模型部署，我们开发针对您特定业务挑战的端到端AI解决方案。我们的专家团队与您密切合作，创建能够提供可衡量结果的AI应用。",
    "services.customSolutions.feature4": "随着业务增长而扩展的解决方案",
    "services.customSolutions.feature5": "持续维护和优化",
    "services.customSolutions.learnMore": "探索定制AI解决方案",
    "services.consultation.detailDescription": "在我们经验丰富的顾问的战略指导下，驾驭复杂的AI领域。我们帮助您识别机会，评估准备情况，并为您的组织制定全面的AI实施路线图。",
    "services.consultation.feature4": "ROI分析和商业案例开发",
    "services.consultation.feature5": "变革管理和采用策略",
    "services.consultation.learnMore": "探索AI咨询服务",
    "services.stats.projects": "100+",
    "services.stats.projectsLabel": "成功项目",
    "services.stats.clients": "50+",
    "services.stats.clientsLabel": "企业客户",
    "services.stats.experts": "30+",
    "services.stats.expertsLabel": "AI专家",
    "services.cta.title": "准备好用AI转变您的业务了吗？",
    "services.cta.description": "立即联系我们，讨论我们的AI解决方案如何解决您的特定挑战和机遇。",
    "services.cta.button": "开始咨询",
    
    // Demo Section
    "demo.title": "互动AI演示",
    "demo.subtitle": "亲身体验我们的AI能力",
    "demo.heading": "AI实战演示",
    "demo.description1": "探索我们的互动演示，了解我们的AI解决方案如何转变您的业务流程并推动创新。",
    "demo.description2": "这些演示展示了我们定制AI开发服务可能性的一小部分。",
    "demo.viewAll": "查看所有演示",
    "demo.placeholder": "互动AI演示",
    "demo.placeholderSmall": "演示将在此集成",
    
    // Portfolio Section
    "portfolio.title": "成功案例",
    "portfolio.subtitle": "实际AI实施案例及其成果",
    "portfolio.manufacturing.title": "制造效率",
    "portfolio.manufacturing.description": "为全球制造客户实施预测性维护AI，减少35%的停机时间。",
    "portfolio.manufacturing.readMore": "阅读案例研究",
    "portfolio.healthcare.title": "医疗创新",
    "portfolio.healthcare.description": "为领先医疗提供商开发的AI诊断助手，提高了28%的早期检测率。",
    "portfolio.healthcare.readMore": "阅读案例研究",
    "portfolio.financial.title": "金融服务",
    "portfolio.financial.description": "为金融机构创建的欺诈检测系统，减少了42%的误报同时提高了检测准确性。",
    "portfolio.financial.readMore": "阅读案例研究",
    "portfolio.education.title": "西门子AI教育培训",
    "portfolio.education.description": "为西门子提供全面AI培训计划，提升200多名专业人员从AI基础到高级AI应用开发和部署的技能。",
    "portfolio.education.readMore": "阅读案例研究",
    "portfolio.viewAll": "查看所有案例",
    
    // Testimonials Section
    "testimonials.title": "客户评价",
    "testimonials.subtitle": "客户对与我们合作的评价",
    "testimonials.quote1": "成都毕行科技有限公司彻底改变了我们的数据分析方法。他们的定制AI解决方案为我们提供了前所未有的洞察力。",
    "testimonials.author1": "Jane Smith",
    "testimonials.position1": "企业公司首席技术官",
    "testimonials.quote2": "成都毕行科技有限公司开发的AI培训计划显著加速了我们团队的能力。强烈推荐！",
    "testimonials.author2": "Michael Johnson",
    "testimonials.position2": "科技解决方案公司创新总监",
    
    // Insights Section
    "insights.title": "最新行业洞察",
    "insights.subtitle": "了解AI领域的趋势和创新",
    "insights.article1.date": "2023年10月15日",
    "insights.article1.category": "企业AI",
    "insights.article1.title": "企业AI的未来",
    "insights.article1.excerpt": "探索人工智能如何重塑企业运营和决策过程。",
    "insights.article1.readMore": "阅读更多",
    "insights.article2.date": "2023年9月28日",
    "insights.article2.category": "机器学习",
    "insights.article2.title": "机器学习模型的进展",
    "insights.article2.excerpt": "机器学习模型的最新突破及其对商业应用的意义。",
    "insights.article2.readMore": "阅读更多",
    "insights.article3.date": "2023年9月10日",
    "insights.article3.category": "AI实施",
    "insights.article3.title": "在您的业务中实施AI",
    "insights.article3.excerpt": "在各种商业环境中成功实施AI解决方案的实用指南。",
    "insights.article3.readMore": "阅读更多",
    "insights.viewAll": "查看所有洞察",
    
    // CTA Section
    "cta.title": "准备好用AI转变您的业务了吗？",
    "cta.subtitle": "与我们的专家联系，讨论您的具体需求和挑战",
    "cta.contactUs": "立即联系我们",
    
    // Footer
    "footer.company": "成都毕行科技有限公司",
    "footer.companyDescription": "国际前沿AI解决方案提供商,<br>助你充满AI的力量。",
    "footer.quickLinks": "快速链接",
    "footer.home": "首页",
    "footer.about": "关于我们",
    "footer.services": "产品与服务",
    "footer.careers": "职业发展",
    "footer.industryInsights": "行业洞察",
    "footer.contact": "联系我们",
    "footer.aiEducation": "AI教育培训",
    "footer.customSolutions": "AI定制解决方案",
    "footer.aiConsultation": "AI战略咨询",
    "footer.contactUs": "联系我们",
    "footer.email": "develop@bixory.ai",
    "footer.wechat": "微信",
    "footer.wechatId": "bixingai",
    "footer.newsletter": "新闻通讯",
    "footer.newsletterDesc": "订阅我们的新闻通讯，获取最新动态和消息。",
    "footer.emailPlaceholder": "您的电子邮箱",
    "footer.copyright": " 2023 成都毕行科技有限公司。保留所有权利。",
    "footer.privacyPolicy": "隐私政策",
    "footer.termsOfService": "服务条款",
    "footer.privacyPolicyContent": "在成都毕行科技有限公司，我们致力于保护您的隐私。这项隐私政策解释了我们如何收集、使用和保护您的个人信息。",
    "footer.termsOfServiceContent": "使用我们的网站，即表示您同意我们的服务条款。请仔细阅读此文档，然后再使用我们的服务。",
    
    // Education page
    "education.page.title": "AI教育培训 | 毕行科技",
    "education.hero.title": "AI教育与培训",
    "education.hero.subtitle": "通过我们全面的教育和培训计划，为您的团队提供前沿AI知识和实用技能。",
    "education.hero.cta": "探索我们的课程",
    "education.overview.title": "概述",
    "education.overview.subtitle": "赋能您的团队掌握AI技能",
    "education.overview.text": "毕行科技提供全面的AI教育计划，旨在为各级组织人员提供所需的知识和技能，以有效利用AI技术。我们的培训由行业专家设计和交付，结合理论学习和实践应用，确保参与者能够将所学知识应用到实际业务挑战中。",
    "education.overview.paragraph1": "在当今快速发展的技术环境中，AI素养已成为关键的竞争优势。毕行科技的AI教育和培训计划旨在为您的团队提供在特定行业环境中有效利用AI所需的实用知识和技能。",
    "education.overview.paragraph2": "无论您是希望提升技术团队的技能，帮助业务领导者做出明智的AI决策，还是创建全组织范围的AI素养，我们的定制计划都提供可立即应用于现实世界挑战的实用、可操作的知识。",
    "education.overview.paragraph3": "我们的方法将理论基础与实践经验相结合，确保参与者不仅理解AI概念，还能在日常工作中自信地应用它们。",
    "education.benefits.title": "主要优势",
    "education.benefits.subtitle": "我们的AI教育方法的独特价值",
    "education.benefits.benefit1.title": "定制化学习",
    "education.benefits.benefit1.text": "根据您组织的特定需求、行业和技术成熟度量身定制的培训计划。",
    "education.benefits.benefit2.title": "实践导向",
    "education.benefits.benefit2.text": "基于项目的学习方法，使参与者能够通过解决实际业务挑战来应用AI概念。",
    "education.benefits.benefit3.title": "专家指导",
    "education.benefits.benefit3.text": "由拥有丰富行业经验的AI专家提供的培训和指导，提供实用见解。",
    "education.benefits.benefit4.title": "全面课程",
    "education.benefits.benefit4.text": "涵盖从AI基础到高级主题的全面课程，满足各种角色和技能水平的需求。",
    "education.benefits.card1.title": "定制化学习路径",
    "education.benefits.card1.text": "根据您组织的特定需求和目标量身定制的课程，从AI基础到高级应用。",
    "education.benefits.card2.title": "行业专家讲师",
    "education.benefits.card2.text": "向在各行业实施AI解决方案方面拥有丰富实战经验的资深AI从业者学习。",
    "education.benefits.card3.title": "实践导向学习",
    "education.benefits.card3.text": "专注于实际应用和真实场景，确保您的团队能够立即应用他们的新AI技能。",
    "education.process.title": "培训流程",
    "education.process.subtitle": "我们如何提供有效的AI教育",
    "education.process.step1.title": "需求评估",
    "education.process.step1.text": "我们与您的团队合作，了解您的业务目标、现有技能和特定培训需求。",
    "education.process.step2.title": "课程设计",
    "education.process.step2.text": "我们的专家设计符合您的业务目标和行业背景的定制课程。",
    "education.process.step3.title": "互动培训",
    "education.process.step3.text": "由行业专家主导的引人入胜、实践性强的课程，结合理论与实际应用。",
    "education.process.step4.title": "实际项目",
    "education.process.step4.text": "参与者在我们的指导下使用AI解决实际业务挑战。",
    "education.process.step5.title": "进度评估",
    "education.process.step5.text": "定期评估学习成果和技能发展，确保项目有效性。",
    "education.process.step6.title": "持续支持",
    "education.process.step6.text": "持续指导和资源，帮助您的团队在工作场所应用他们的新AI技能。",
    "education.programs.title": "我们的培训项目",
    "education.programs.subtitle": "适合各级的全面AI教育解决方案",
    "education.programs.program1.title": "AI基础",
    "education.programs.program1.feature1": "AI概念介绍",
    "education.programs.program1.feature2": "机器学习基础",
    "education.programs.program1.feature3": "数据准备技术",
    "education.programs.program1.feature4": "AI伦理考虑",
    "education.programs.program1.feature5": "为期2天的强化工作坊",
    "education.programs.program2.title": "应用AI",
    "education.programs.program2.feature1": "高级ML算法",
    "education.programs.program2.feature2": "神经网络与深度学习",
    "education.programs.program2.feature3": "特定行业应用",
    "education.programs.program2.feature4": "实践项目工作",
    "education.programs.program2.feature5": "为期5天的综合项目",
    "education.programs.program3.title": "AI领导力",
    "education.programs.program3.feature1": "AI战略制定",
    "education.programs.program3.feature2": "实施路线图",
    "education.programs.program3.feature3": "团队建设与管理",
    "education.programs.program3.feature4": "ROI测量框架",
    "education.programs.program3.feature5": "行政3天强化培训",
    "education.programs.cta": "获取信息",
    "education.testimonials.title": "客户成功案例",
    "education.testimonials.subtitle": "听听通过我们的培训实现转型的组织的声音",
    "education.testimonials.testimonial1.content": "AI基础课程为我们的营销团队提供了与数据科学部门有效协作所需的知识。这显著加速了我们的AI驱动营销计划。",
    "education.testimonials.testimonial1.name": "Sarah Johnson",
    "education.testimonials.testimonial1.position": "全球零售公司CMO",
    "education.testimonials.testimonial2.content": "毕行的应用AI培训改变了我们的开发团队。完成课程后的三个月内，我们成功地在生产环境中实施了第一个机器学习模型。",
    "education.testimonials.testimonial2.name": "David Chen",
    "education.testimonials.testimonial2.position": "金融科技创新公司CTO",
    "education.faq.title": "常见问题",
    "education.faq.subtitle": "关于我们AI教育项目的常见问题",
    "education.faq.q1": "谁应该参加您的AI培训项目？",
    "education.faq.a1": "我们的项目针对各种角色和经验水平设计。AI基础项目适合需要了解AI概念的非技术专业人员。应用AI项目最适合将直接参与实施AI解决方案的技术团队成员。AI领导力项目专为负责AI战略的高管和决策者量身定制。",
    "education.faq.q2": "参与者需要之前的编程经验吗？",
    "education.faq.a2": "对于AI基础项目，不需要编程经验。对于应用AI项目，建议具备基本的编程知识（最好是Python）。如果需要，我们可以提供预培训资源帮助参与者做好准备。",
    "education.faq.q3": "您能提供特定行业的定制培训吗？",
    "education.faq.a3": "是的，我们专注于行业特定的定制化。我们的培训项目可以针对您所在行业的独特AI应用、挑战和机会进行定制，无论是医疗保健、金融、制造、零售还是任何其他行业。",
    "education.faq.q4": "您提供虚拟培训选项吗？",
    "education.faq.a4": "是的，我们所有的培训项目都提供面对面和虚拟形式。我们的虚拟培训保持与面对面课程相同的互动性和实践性，并配备额外的数字协作工具，确保引人入胜的学习体验。",
    "education.faq.q5": "培训后您提供什么持续支持？",
    "education.faq.a5": "所有参与者在培训后6个月内都可以访问我们的在线学习门户，获取额外资源、练习和参考材料。我们还提供可选的后续咨询会议，帮助团队将新知识应用到特定项目中。",
  }
};

// Default language
let currentLanguage = 'en';

// Initialize language based on browser settings or localStorage
function initLanguage() {
  console.log('Initializing language...');
  
  // First check if language is specified in URL
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  console.log('URL language parameter:', urlLang);
  
  if (urlLang && (urlLang === 'en' || urlLang === 'zh')) {
    console.log('Setting language from URL parameter:', urlLang);
    currentLanguage = urlLang;
    // Save to localStorage for future visits
    localStorage.setItem('bixingLanguage', currentLanguage);
  } else {
    // Check if a language preference is stored
    const storedLanguage = localStorage.getItem('bixingLanguage');
    console.log('Stored language from localStorage:', storedLanguage);
    
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'zh')) {
      console.log('Setting language from localStorage:', storedLanguage);
      currentLanguage = storedLanguage;
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language || navigator.userLanguage;
      console.log('Browser language:', browserLanguage);
      if (browserLanguage && browserLanguage.startsWith('zh')) {
        console.log('Setting language to Chinese based on browser settings');
        currentLanguage = 'zh';
      } else {
        console.log('Setting default language to English');
        currentLanguage = 'en'; // Default to English
      }
    }
  }
  
  console.log('Final language setting:', currentLanguage);
  
  // Update UI to reflect current language
  updateLanguageToggle();
  
  // Apply translations
  applyTranslations();
  
  // Log current language for debugging
  console.log('Initialized with language:', currentLanguage);
}

// Toggle between languages
function toggleLanguage() {
  console.log('Toggle language called');
  
  // Get the current language
  const oldLanguage = currentLanguage;
  
  // Switch to the other language
  currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
  
  // Save to localStorage
  localStorage.setItem('bixingLanguage', currentLanguage);
  
  // Log the language change
  console.log(`Language switched from ${oldLanguage} to ${currentLanguage}`);
  
  // Apply the new language immediately without page reload
  updateLanguageToggle();
  applyTranslations();
}

// Update the language toggle button UI
function updateLanguageToggle() {
  const currentLanguageElement = document.getElementById('currentLanguage');
  if (currentLanguageElement) {
    currentLanguageElement.textContent = currentLanguage === 'en' ? 'EN' : '中文';
    console.log('Updated language toggle UI to:', currentLanguage === 'en' ? 'EN' : '中文');
    
    // Add visual feedback
    currentLanguageElement.classList.add('language-changed');
    setTimeout(() => {
      currentLanguageElement.classList.remove('language-changed');
    }, 500);
  } else {
    console.warn('Current language element not found');
  }
  
  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

// Apply translations to the page
function applyTranslations() {
  console.log('Applying translations for language:', currentLanguage);
  let translatedElements = 0;
  let missingTranslations = [];
  
  try {
    // Update text content for elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      console.log('Translating element with key:', key, element);
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        // Check if this is an input element with a placeholder
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
          element.placeholder = translations[currentLanguage][key];
        } 
        // Check if this is a button or input with a value
        else if ((element.tagName === 'BUTTON' || element.tagName === 'INPUT') && element.hasAttribute('value')) {
          element.value = translations[currentLanguage][key];
        }
        // For all other elements, update the text content
        else {
          element.textContent = translations[currentLanguage][key];
        }
        translatedElements++;
        console.log('Successfully translated:', key, 'to:', translations[currentLanguage][key]);
      } else {
        missingTranslations.push(key);
        console.warn('Missing translation for key:', key, 'in language:', currentLanguage);
      }
    });
    
    // Update attributes that need translation (placeholder, alt, etc.)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.placeholder = translations[currentLanguage][key];
        translatedElements++;
      } else {
        missingTranslations.push(key);
      }
    });
    
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
      const key = element.getAttribute('data-i18n-alt');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.alt = translations[currentLanguage][key];
        translatedElements++;
      } else {
        missingTranslations.push(key);
      }
    });
    
    document.querySelectorAll('[data-i18n-value]').forEach(element => {
      const key = element.getAttribute('data-i18n-value');
      if (translations[currentLanguage] && translations[currentLanguage][key]) {
        element.value = translations[currentLanguage][key];
        translatedElements++;
      } else {
        missingTranslations.push(key);
      }
    });
    
    // Update the page title
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
      toggleLanguage(); // Call the toggleLanguage function directly
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
