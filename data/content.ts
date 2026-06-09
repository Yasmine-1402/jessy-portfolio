export const profileData = {
  name: 'Yasmine Shehata',
  title: 'Software Engineer & Community Leader',
  tagline: 'Software Engineering Student | GDG on Campus Lead | Building AI-powered and scalable systems impacting students and communities.',
  subtitle: 'Led 80+ members • Mentored 20+ students • Impacted 250+ community members • 9+ projects built',
  email: 'yshehata047@gmail.com',
  phone: '+201117366262',
  location: 'Cairo, Egypt',
  nationality: 'Belgian & Egyptian',
  github: 'https://github.com/Yasmine-1402',
  linkedin: 'https://www.linkedin.com/in/yasmine-shehata-97846030a/',
  portfolio: 'https://yasmine-portfolio.vercel.app',
  resume: '/Yasmine_Shehata_Resume.pdf',
  description: `I'm a Software Engineering student at Arab Academy who builds products with real users, scale, and community impact in mind.
I combine backend depth, frontend clarity, and AI curiosity with leadership experience from developer communities, internships, and hands-on projects.
I care about solving the right problem, shipping reliable systems, and making the engineering experience better for the people around me.`,
  whyIBuild: `I build because I like turning technical work into visible value. That means shipping scalable systems, improving user experience, and helping other students grow through mentorship and community leadership.
I am especially interested in AI-powered products, full-stack architecture, and the practical craft of building software that lasts.`,
};

export const educationData = [
  {
    institution: 'Arab Academy for Science & Technology (AAST)',
    degree: 'Bachelor of Science in Computer Science',
    major: 'Software Engineering',
    expectedGraduation: '2027',
    details: 'Focused on software development, web technologies, and system design',
  },
];

export const experienceData = [
  {
    id: 1,
    title: 'Leader & Organizer',
    company: 'Google Developers Group on Campus, AAST Aswan',
    duration: 'Ongoing',
    type: 'Leadership',
    details: [
      'Lead community initiatives and organize technical workshops',
      'Mentor student teams to deliver impactful projects',
      'Foster innovation and collaboration among peers',
    ],
    skills: ['Leadership', 'Community Building', 'Mentoring', 'Technical Workshops'],
  },
  {
    id: 2,
    title: 'Freelancing Coach',
    company: 'el Hareefa - DEPI Round 4',
    duration: 'Ongoing',
    type: 'Freelance',
    details: [
      'Coaching and mentoring participants in DEPI Round 4 program',
      'Providing technical guidance and best practices',
      'Supporting career development and project execution',
      'Collaborating with participants to achieve learning objectives',
    ],
    skills: ['Mentoring', 'Technical Coaching', 'Career Development', 'Program Support'],
  },
  {
    id: 3,
    title: 'Network Management Solution Intern',
    company: 'Orange Egypt',
    duration: 'Aug 2025',
    type: 'Internship',
    details: [
      'Assisted in monitoring, maintaining, and troubleshooting network infrastructure',
      'Supported automation scripts to improve operational efficiency',
      'Documented processes and assisted in network performance optimization',
      'Built Knowledge base system for team collaboration',
    ],
    skills: ['Network Administration', 'System Monitoring', 'Automation', 'Documentation'],
  },
  {
    id: 4,
    title: 'Summer Intern',
    company: 'CIB Egypt',
    duration: 'July 2025',
    type: 'Internship',
    details: [
      'Gained exposure to banking systems and operations',
      'Assisted in IT department tasks including software updates and troubleshooting',
      'Supported cross-functional teams to ensure smooth business operations',
    ],
    skills: ['IT Support', 'Banking Systems', 'Troubleshooting'],
  },
  {
    id: 5,
    title: 'Front-End Software Engineering Virtual Experience',
    company: 'Skyscanner via Forage',
    duration: 'July 2025',
    type: 'Virtual Experience',
    details: [
      'Built a web application using React and integrated Skyscanner APIs',
      'Designed and implemented a responsive packing tips feature',
      'Applied UI/UX best practices for improved user experience',
    ],
    skills: ['React', 'API Integration', 'UI/UX Design', 'Responsive Design'],
  },
  {
    id: 6,
    title: 'Core Member',
    company: 'Google Developers Group on Campus, AAST Aswan',
    duration: 'Sept 2024 – Aug 2025',
    type: 'Leadership',
    details: [
      'Coordinated learning sessions and technical events',
      'Provided mentorship and guidance to development teams',
      'Organized community hackathons and coding challenges',
    ],
    skills: ['Event Organization', 'Mentoring', 'Technical Leadership'],
  },
  {
    id: 7,
    title: 'Contestant & Volunteer',
    company: 'ECPC (Egyptian Collegiate Programming)',
    duration: 'Aug 2024',
    type: 'Volunteer',
    details: [
      'Supported logistics, managed participant registrations',
      'Competed in national programming contests',
      'Collaborated with peers in high-pressure coding challenges',
    ],
    skills: ['Competitive Programming', 'Problem-Solving', 'Event Management'],
  },
];

export const skillsData = {
  proficient: [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'React', icon: '⚛️' },
    { name: 'PostgreSQL', icon: '🗄️' },
  ],
  familiar: [
    { name: 'Flutter', icon: '📱' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Next.js', icon: '▲' },
    { name: 'JavaFX', icon: '🎨' },
    { name: 'Python', icon: '🐍' },
    { name: 'TypeScript', icon: '📘' },
  ],
  supporting: [
    { name: 'C/C++', icon: '🔧' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Git/GitHub', icon: '🐙' },
    { name: 'Figma', icon: '🎭' },
    { name: 'Postman', icon: '📮' },
  ],
  focusAreas: [
    'Full-Stack Development',
    'AI-Augmented Products',
    'UI/UX Design',
    'Scalable Backend Systems',
    'Community Leadership',
  ],
};

export const projectsData = [
  {
    id: 1,
    title: 'Skill-Barter Platform',
    category: 'Personal Project',
    badge: 'Full-Stack',
    description: 'Scalable skill exchange platform using multi-hop Karma Chains for intelligent user matching.',
    longDescription:
      'Skill-Barter is a sophisticated platform that enables users to exchange skills through Karma Chains — multi-hop matching where User A can teach User B who can teach User C, creating closed cycles of skill exchange. Built with Spring Boot 3.x and PostgreSQL, the system implements a recursive matching algorithm using PostgreSQL Recursive Common Table Expressions (CTEs) to find optimal skill exchange paths at the database level. The platform includes async processing with RabbitMQ, comprehensive Swagger/OpenAPI documentation, and supports complex graph traversal for finding multi-hop exchanges up to configurable depth limits. This project demonstrates deep expertise in backend architecture, complex SQL optimization, and scalable system design.',
    technologies: ['Java', 'Spring Boot 3.x', 'PostgreSQL 15+', 'RabbitMQ', 'OpenAPI/Swagger', 'JPA', 'Maven'],
    github: 'https://github.com/Yasmine-1402/Skill-Barter',
    keyFeatures: [
      'Recursive CTE algorithm for multi-hop skill matching',
      'Karma Chain discovery with cycle prevention',
      'Asynchronous match processing with RabbitMQ',
      'PostgreSQL-level optimization for graph traversal',
      'OpenAPI/Swagger auto-documentation',
      'Role-based access control and user management',
    ],
    impact: 'Intelligent skill exchange matching platform',
    impact_metric: 'Processes complex chains up to configurable depth',
    myRole: 'Designer & Developer',
    date: 'Jan 2026',
    status: 'Active',
    thinking: 'Key insight: Database-level graph algorithms (recursive CTEs) provide atomic consistency and eliminate N+1 problems—sometimes the best optimization is choosing the right query layer.'
  },
  {
    id: 2,
    title: 'NMS Orange',
    category: 'Personal Project',
    badge: 'Full-Stack',
    description: 'Centralized Internal Management System for IT operations and infrastructure, now hosted on Orange Egypt servers.',
    longDescription:
      'NMS Orange is an enterprise-grade management platform designed to streamline IT operations. Built with Spring Boot and PostgreSQL, the system provides role-based access control, comprehensive asset tracking, personnel management, and a sophisticated ticketing system. It is now hosted on Orange Egypt servers. I architected a JWT-based authentication layer and designed RESTful APIs that handle complex authorization workflows with admin approval workflows.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Yasmine-1402/nms_oranegge',
    keyFeatures: [
      'Role-based access control with admin approval',
      'Personnel and infrastructure asset tracking',
      'Vendor and application inventory management',
      'Advanced ticketing and knowledge base system',
    ],
    impact: 'Enterprise IT management platform hosted on Orange Egypt servers',
    impact_metric: 'Manages multi-department operations',
    myRole: 'Lead Developer',
    date: 'Aug 2025',
    status: 'Active',
    thinking: 'Key learning: Authorization complexity requires careful system design—every permission check must be intentional and auditable.'
  },
  {
    id: 3,
    title: 'StudentSmart',
    category: 'Personal Project',
    badge: 'Desktop App',
    description: 'Interactive learning platform for early childhood education using JavaFX.',
    longDescription:
      'StudentSmart is an educational technology project built for university coursework (OOP 2). The platform provides engaging learning experiences for toddlers through interactive desktop applications. I focused on creating intuitive UI components with JavaFX, emphasizing accessibility and age-appropriate design patterns. This project taught me how to balance educational effectiveness with technical implementation.',
    technologies: ['Java', 'JavaFX', 'OOP Principles'],
    github: 'https://github.com/Yasmine-1402/StudentSmart',
    keyFeatures: [
      'Interactive learning modules for toddlers',
      'Intuitive GUI with JavaFX',
      'Age-appropriate interaction patterns',
      'Object-oriented architecture',
    ],
    impact: 'Educational technology for early learning',
    impact_metric: 'University OOP 2 project',
    myRole: 'Designer & Developer',
    date: 'May 2024',
    status: 'Completed',
    thinking: 'Insight: Educational software requires understanding the learner\'s perspective—simplicity and clarity trump feature richness.'
  },
  {
    id: 4,
    title: 'Sentiment Analysis Engine',
    category: 'Personal Project',
    badge: 'ML/AI',
    description: 'Advanced NLP system for understanding emotion and context in text.',
    longDescription:
      'I built a sophisticated sentiment analysis system using ensemble machine learning methods. The project went beyond basic classification—I implemented advanced preprocessing, feature engineering, and multiple algorithms to achieve 92% accuracy. This project deepened my understanding of how AI models learn from data and the importance of clean data pipelines.',
    technologies: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'NLTK'],
    github: 'https://github.com/Yasmine-1402/Sentiment-Analysis',
    keyFeatures: [
      'Multi-algorithm ensemble approach',
      'Advanced NLP preprocessing',
      'Feature engineering pipeline',
      'Comprehensive analysis visualizations',
    ],
    impact: '92% accuracy on sentiment classification',
    impact_metric: 'Processed 10K+ text samples',
    myRole: 'Researcher & Developer',
    date: 'Jan 2025',
    status: 'Completed',
    thinking: 'Key insight: Garbage in, garbage out. Data quality and preprocessing determined model success more than algorithm choice.'
  },
  {
    id: 5,
    title: 'AURA Health Companion',
    category: 'Contributed Project',
    badge: 'Mobile',
    role_badge: 'Contributor',
    description: 'Holistic AI-powered health ecosystem integrating smartwatch, medicine, nutrition, and mental health.',
    longDescription:
      'AURA Health Companion is a comprehensive health platform I contributed to alongside a talented team. The system integrates smartwatch data to track vitals, includes AI-driven medicine conflict detection, provides personalized nutrition plans, mental health assessments with AI chatbot support, and even detects emergency health anomalies. Built with Flutter for cross-platform compatibility and Supabase for real-time data management, this project expanded my understanding of healthcare technology and cross-functional product development.',
    technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'TensorFlow', 'OpenAI API', 'Python'],
    github: 'https://github.com/m7mdfox/aura_health_companion',
    myContribution: [
      'Contributed to core health tracking features',
      'Implemented data synchronization logic',
      'Integrated AI chatbot functionality',
      'Collaborated on mobile UI/UX components'
    ],
    keyFeatures: [
      'Smartwatch vitals integration and health predictions',
      'Medicine management with conflict detection',
      'Personalized AI fitness and nutrition coaching',
      'Mental health assessment with Quran-based therapy',
      'Emergency health anomaly detection'
    ],
    impact: 'Comprehensive digital health ecosystem',
    impact_metric: 'Multi-platform health solution',
    myRole: 'Team Contributor',
    date: 'July 2025',
    status: 'Active',
    teamSize: 'Amr, Fox, Mostafa, Sory, Yasmine, Moaz',
    thinking: 'Learning: Healthcare technology requires balancing innovation with user trust—data security and accuracy are non-negotiable.'
  },
  {
    id: 6,
    title: 'AURA Health Companion Desktop',
    category: 'Contributed Project',
    badge: 'Desktop',
    role_badge: 'Developer',
    description: 'Desktop application for AURA Health Companion ecosystem.',
    longDescription:
      'I contributed to building the desktop version of AURA Health Companion using Java and modern UI patterns. This cross-platform application extends the health companion ecosystem to desktop users, providing the same comprehensive health management features in a desktop environment. The project reinforced my understanding of building consistent experiences across different platforms while adapting to desktop-specific UX patterns.',
    technologies: ['Java', 'JavaFX', 'CSS', 'Supabase Integration'],
    github: 'https://github.com/m7mdfox/Aura-Health-Companion-Desktop',
    myContribution: [
      'Designed desktop UI components',
      'Implemented backend connectivity logic',
      'Built responsive desktop layouts',
      'Connected to health data services'
    ],
    keyFeatures: [
      'Cross-platform desktop application',
      'Unified health companion interface',
      'Real-time health data synchronization',
      'Professional desktop UX patterns'
    ],
    impact: 'Desktop health management platform',
    impact_metric: 'Cross-platform ecosystem expansion',
    myRole: 'Developer',
    date: 'Dec 2025',
    status: 'Active',
    teamSize: 'Yasmine, Mohamed Mostafa, Amr',
    thinking: 'Desktop development taught me: responsive design is different on desktop—embrace the extra space, but respect user workflows.'
  },
  {
    id: 7,
    title: 'CYPHERNEST',
    category: 'Personal Project',
    badge: 'Cybersecurity',
    description: 'Comprehensive encryption and decryption platform with multiple cryptographic algorithms.',
    longDescription:
      'CYPHERNEST is my cybersecurity university project exploring encryption techniques. The application features multiple encryption and decryption algorithms (Caesar cipher, Affine cipher, DFS, and more), built with Python and Qt for the UI. This project deepened my understanding of cryptographic principles, algorithm implementation, and the importance of secure communication. Each cipher is implemented from scratch, demonstrating low-level understanding of how modern encryption works.',
    technologies: ['Python', 'Qt', 'Cryptography', 'UI Design'],
    github: 'https://github.com/Yasmine-1402/CYPHERNEST',
    keyFeatures: [
      'Multiple encryption algorithm implementations',
      'Caesar, Affine, and advanced cipher support',
      'Intuitive Qt-based GUI',
      'Real-time encryption/decryption visualization'
    ],
    impact: 'Foundational cryptography learning tool',
    impact_metric: 'University Cybersecurity project',
    myRole: 'Designer & Developer',
    date: 'Sep 2024',
    status: 'Completed',
    thinking: 'Insight: Understanding cryptography at the implementation level reveals why modern algorithms are so carefully designed—elegance meets necessity.'
  },
  {
    id: 8,
    title: 'Express Cart Shop',
    category: 'Personal Project',
    badge: 'Full-Stack',
    description: 'Production-hardened e-commerce platform with multi-gateway payments and cloud database integration.',
    longDescription:
      'Express Cart Shop is a heavily customized and production-hardened version of the expressCart shopping cart platform. I migrated the entire database layer to MongoDB Atlas with custom migration scripts, integrated multiple payment gateways (Stripe, PayPal, Paymob/Instapay, and Cash on Delivery), and implemented comprehensive security hardening including environment variable management and git history cleansing. The project demonstrates real-world deployment skills—from database migration and payment processing to production security best practices.',
    technologies: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Stripe', 'PayPal', 'Paymob', 'JavaScript', 'EJS'],
    github: 'https://github.com/Yasmine-1402/express-cart-shop',
    keyFeatures: [
      'MongoDB Atlas cloud database integration with migration scripts',
      'Multi-gateway payment processing (Stripe, PayPal, Paymob/Instapay, COD)',
      'Production security hardening and environment variable management',
      'Database connection testing and integrity verification',
      'Git history cleansing for credential protection',
      'Region-specific payment method support',
    ],
    impact: 'Production-ready e-commerce platform',
    impact_metric: 'Multiple payment gateways integrated',
    myRole: 'Developer',
    date: 'May 2026',
    status: 'Active',
    thinking: 'Key learning: Production deployment is where theory meets reality—security, payment processing, and database migration require meticulous attention to detail.'
  },
];

export const currentFocus = {
  title: 'What I\'m Focused On',
  description: 'My current research and development interests:',
  areas: [
    {
      title: 'AI-Augmented Software Engineering',
      description: 'Exploring how AI can enhance developer productivity and code quality',
      icon: '🤖',
    },
    {
      title: 'Full-Stack System Design',
      description: 'Building scalable, maintainable systems from frontend to database',
      icon: '🏗️',
    },
    {
      title: 'Developer Communities',
      description: 'Mentoring and building inclusive tech communities for next-gen engineers',
      icon: '👥',
    },
    {
      title: 'Product Engineering',
      description: 'Understanding how great products are built through intentional design and engineering',
      icon: '🎯',
    },
  ],
};

export const certificationsData = [
  {
    title: 'Front-End Software Engineering',
    issuer: 'Forage/Skyscanner',
    date: 'July 2025',
    type: 'Virtual Experience Program',
  },
  {
    title: 'Competitive Programming',
    issuer: 'ECPC (Egyptian Collegiate Programming Contest)',
    date: 'Aug 2024',
    type: 'Programming Competition',
  },
  {
    title: 'Google Developers Group',
    issuer: 'Google',
    date: 'Sept 2024 - Present',
    type: 'Community Leadership',
  },
];

export const leadershipTimeline = [
  {
    id: 1,
    role: 'Leader & Organizer',
    organization: 'Google Developers Group on Campus, AAST Aswan',
    period: 'Ongoing (Sept 2024 - Present)',
    highlight: 'Leading a vibrant developer community',
    impact: [
      'Mentoring 250+ student and community members',
      'Organizing 22+ technical workshops, events, and hackathons',
      'Building a collaborative culture that values learning and growth',
      'Connecting peers with industry mentors and opportunities',
    ],
    keyInitiatives: [
      'Monthly technical talks on trending technologies',
      'Hackathon series with real-world problems',
      'Mentorship program for junior developers',
      'Industry speaker sessions and networking events',
    ],
  },
];

export const collaborationProjects = [
  {
    title: 'Payment Processing System',
    description: 'Built backend infrastructure for a financial technology platform',
    role: 'Backend Developer',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    impact: 'Reliable payment transactions',
  },
  {
    title: 'Travel Search Interface',
    description: 'Created frontend for real-time travel data exploration',
    role: 'Frontend Developer',
    technologies: ['React', 'API Integration'],
    impact: 'Seamless user experience for complex data',
  },
];

export const achievementsData = [
  {
    title: 'Community Leadership',
    description: 'Leading 250+ community members through GDG on Campus',
    icon: '👥',
    impact: '22+ workshops and events organized',
  },
  {
    title: 'Full-Stack Engineering',
    description: '5+ production-ready projects deployed',
    icon: '🚀',
    impact: 'From concept to deployment',
  },
  {
    title: 'Technical Depth',
    description: 'Proficient across frontend, backend, AI/ML',
    icon: '🧠',
    impact: '10+ technologies mastered',
  },
  {
    title: 'Competitive Programming',
    description: 'ECPC participant and volunteer',
    icon: '⚡',
    impact: 'Problem-solving excellence',
  },
  {
    title: 'Mentorship',
    description: 'Actively mentoring junior developers',
    icon: '📖',
    impact: '20+ students mentored directly',
  },
  {
    title: 'Professional Experience',
    description: 'Internship experience across Orange and CIB',
    icon: '💼',
    impact: 'Real-world engineering exposure',
  },
];

export const servicesData = [
  {
    title: 'Full-Stack Development',
    description: 'Building complete web applications from concept to deployment',
    icon: '🔨',
  },
  {
    title: 'Frontend Excellence',
    description: 'Creating beautiful, responsive, and intuitive user interfaces',
    icon: '🎨',
  },
  {
    title: 'Backend Solutions',
    description: 'Designing robust, scalable server-side architectures',
    icon: '⚙️',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting user-centered designs with modern principles',
    icon: '✨',
  },
  {
    title: 'Mentoring',
    description: 'Guiding and developing next-generation developers',
    icon: '📖',
  },
  {
    title: 'Community Building',
    description: 'Fostering tech communities and collaborative environments',
    icon: '🌟',
  },
];
