export interface JobPosition {
  id: string
  title: {
    fr: string
    en: string
  }
  department: {
    fr: string
    en: string
  }
  location: {
    fr: string
    en: string
  }
  type: {
    fr: string
    en: string
  } // Full-time, Part-time, Contract
  remote: boolean
  salary: string
  experience: {
    fr: string
    en: string
  }
  posted: string
  deadline: string
  status: 'active' | 'closed'
  summary: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  responsibilities: {
    fr: string[]
    en: string[]
  }
  requirements: {
    fr: string[]
    en: string[]
  }
  niceToHave: {
    fr: string[]
    en: string[]
  }
  benefits: {
    fr: string[]
    en: string[]
  }
  skills: string[]
}

export const jobPositions: JobPosition[] = [
  {
    id: 'ingenieur-hydraulique-senior',
    title: {
      fr: 'Ingénieur Hydraulique Senior',
      en: 'Senior Hydraulic Engineer'
    },
    department: {
      fr: 'Études Techniques',
      en: 'Technical Studies'
    },
    location: {
      fr: 'Ouagadougou, Burkina Faso',
      en: 'Ouagadougou, Burkina Faso'
    },
    type: {
      fr: 'CDI (Temps plein)',
      en: 'Full-time'
    },
    remote: false,
    salary: 'À négocier selon expérience',
    experience: {
      fr: '5+ ans',
      en: '5+ years'
    },
    posted: '2025-10-01',
    deadline: '2025-11-15',
    status: 'active',
    summary: {
      fr: 'Concevoir et superviser des projets d\'adduction d\'eau potable et d\'aménagements hydroagricoles pour améliorer l\'accès à l\'eau des populations.',
      en: 'Design and supervise drinking water supply and hydro-agricultural development projects to improve water access for communities.'
    },
    description: {
      fr: 'SAWES recherche un(e) Ingénieur(e) Hydraulique Senior pour renforcer son équipe d\'études techniques. Vous serez responsable de la conception d\'ouvrages hydrauliques, de la supervision de projets d\'adduction d\'eau potable et d\'aménagements hydroagricoles en collaboration avec nos partenaires (AFD, BAD, CEDEAO, etc.).',
      en: 'SAWES is seeking a Senior Hydraulic Engineer to strengthen its technical studies team. You will be responsible for designing hydraulic structures, supervising drinking water supply projects and hydro-agricultural developments in collaboration with our partners (AFD, AfDB, ECOWAS, etc.).'
    },
    responsibilities: {
      fr: [
        'Réaliser des études de faisabilité et de conception de barrages et de systèmes d\'adduction d\'eau',
        'Superviser les travaux de construction et d\'extension de réseaux hydrauliques',
        'Élaborer des scénarios d\'aménagement et évaluer les investissements',
        'Assurer le contrôle qualité des études techniques et des travaux',
        'Coordonner avec les partenaires techniques et financiers (AFD, BAD, CEDEAO)',
        'Encadrer les ingénieurs juniors et les techniciens',
        'Rédiger les rapports techniques et les dossiers d\'appels d\'offres',
        'Participer aux missions de terrain et aux réunions avec les maîtres d\'ouvrage'
      ],
      en: [
        'Conduct feasibility studies and design dams and water supply systems',
        'Supervise construction and extension of hydraulic networks',
        'Develop development scenarios and evaluate investments',
        'Ensure quality control of technical studies and works',
        'Coordinate with technical and financial partners (AFD, AfDB, ECOWAS)',
        'Supervise junior engineers and technicians',
        'Write technical reports and tender documents',
        'Participate in field missions and meetings with project owners'
      ]
    },
    requirements: {
      fr: [
        'Diplôme d\'Ingénieur en Hydraulique, Génie Civil ou domaine connexe',
        '5+ ans d\'expérience en études et conception d\'ouvrages hydrauliques',
        'Maîtrise des logiciels de dimensionnement (AutoCAD, EPANET, HEC-RAS)',
        'Connaissance approfondie des normes et réglementations en vigueur au Burkina Faso',
        'Expérience en gestion de projets d\'infrastructures hydrauliques',
        'Excellentes capacités de communication (français, rapport écrit)',
        'Capacité à travailler en équipe multidisciplinaire',
        'Disponibilité pour les missions terrain en régions'
      ],
      en: [
        'Engineering degree in Hydraulics, Civil Engineering or related field',
        '5+ years of experience in studies and design of hydraulic structures',
        'Proficiency in design software (AutoCAD, EPANET, HEC-RAS)',
        'In-depth knowledge of standards and regulations in Burkina Faso',
        'Experience in managing hydraulic infrastructure projects',
        'Excellent communication skills (French, written reports)',
        'Ability to work in multidisciplinary teams',
        'Availability for field missions in regions'
      ]
    },
    niceToHave: {
      fr: [
        'Expérience avec les partenaires de coopération internationale (AFD, BAD, UE)',
        'Connaissance de l\'anglais technique',
        'Maîtrise des SIG (QGIS, ArcGIS)',
        'Expérience en formation et renforcement de capacités',
        'Connaissance des approches participatives communautaires'
      ],
      en: [
        'Experience with international cooperation partners (AFD, AfDB, EU)',
        'Knowledge of technical English',
        'GIS proficiency (QGIS, ArcGIS)',
        'Experience in training and capacity building',
        'Knowledge of participatory community approaches'
      ]
    },
    benefits: {
      fr: [
        'Salaire compétitif selon expérience',
        'Couverture santé (assurance maladie)',
        'Formation continue et développement professionnel',
        'Opportunités de missions internationales',
        'Exposition aux grands projets régionaux (CEDEAO, AFD, BAD)',
        'Travail sur des projets à fort impact social',
        'Environnement de travail collaboratif',
        'Congés annuels payés'
      ],
      en: [
        'Competitive salary based on experience',
        'Health coverage (health insurance)',
        'Continuous training and professional development',
        'International mission opportunities',
        'Exposure to major regional projects (ECOWAS, AFD, AfDB)',
        'Work on high social impact projects',
        'Collaborative work environment',
        'Paid annual leave'
      ]
    },
    skills: ['Hydraulique', 'AutoCAD', 'EPANET', 'HEC-RAS', 'Gestion de projets', 'Études techniques', 'SIG', 'Dimensionnement']
  },
  {
    id: 'ml-engineer',
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'Remote (Canada)',
    type: 'Full-time',
    remote: true,
    salary: '$100,000 - $140,000 CAD',
    experience: '3+ years',
    posted: '2025-09-18',
    status: 'active',
    summary: 'Design and implement scalable ML pipelines and deploy models to production environments.',
    description: 'Join our engineering team to build robust, scalable machine learning infrastructure. You will work on deploying models to production, optimizing performance, and ensuring reliability of our ML systems that process billions of data points daily.',
    responsibilities: [
      'Design and implement scalable ML pipelines and infrastructure',
      'Deploy and monitor machine learning models in production',
      'Optimize model performance and reduce latency',
      'Build automated testing and validation frameworks',
      'Collaborate with data scientists to productionize models',
      'Implement MLOps best practices and CI/CD pipelines',
      'Monitor model drift and implement retraining strategies',
      'Document technical specifications and deployment procedures'
    ],
    requirements: [
      'Bachelor\'s or Master\'s in Computer Science or related field',
      '3+ years of experience in ML engineering or similar role',
      'Strong programming skills in Python and/or Java',
      'Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)',
      'Proficiency in cloud platforms and containerization (Docker, Kubernetes)',
      'Experience with MLOps tools and practices',
      'Understanding of software engineering best practices',
      'Strong problem-solving and debugging skills'
    ],
    niceToHave: [
      'Experience with streaming data processing',
      'Knowledge of distributed computing frameworks',
      'Familiarity with monitoring tools (Prometheus, Grafana)',
      'Experience with A/B testing frameworks',
      'Contributions to open-source projects'
    ],
    benefits: [
      'Competitive remote salary',
      'Comprehensive health benefits',
      'RRSP matching',
      'Home office setup allowance',
      'Flexible working hours',
      'Professional development opportunities',
      'Annual company retreats',
      'Mental health and wellness programs'
    ],
    skills: ['TensorFlow', 'MLOps', 'Cloud', 'Python', 'Kubernetes', 'Docker', 'CI/CD', 'AWS']
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$90,000 - $120,000 CAD',
    experience: '3+ years',
    posted: '2025-09-20',
    status: 'active',
    summary: 'Build modern web applications and APIs for data visualization and analytics platforms.',
    description: 'We\'re looking for a talented Full Stack Developer to join our engineering team. You will work on building intuitive web applications that make complex data accessible and actionable for our clients.',
    responsibilities: [
      'Develop responsive web applications using React and Node.js',
      'Build RESTful APIs and GraphQL endpoints',
      'Create interactive data visualizations and dashboards',
      'Implement authentication and authorization systems',
      'Optimize application performance and scalability',
      'Write clean, maintainable, and well-tested code',
      'Participate in code reviews and technical discussions',
      'Collaborate with designers and data scientists'
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent experience',
      '3+ years of full stack development experience',
      'Proficiency in JavaScript/TypeScript, React, and Node.js',
      'Experience with modern CSS and responsive design',
      'Knowledge of database design (PostgreSQL, MongoDB)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with version control (Git)',
      'Strong communication and teamwork skills'
    ],
    niceToHave: [
      'Experience with data visualization libraries (D3.js, Chart.js)',
      'Knowledge of Python for backend development',
      'Familiarity with cloud services (AWS, Azure)',
      'Experience with Docker and containerization',
      'Understanding of CI/CD pipelines'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Extended health and dental coverage',
      'RRSP matching program',
      'Learning and development budget',
      'Flexible work arrangements',
      'Modern office in downtown Toronto',
      'Team lunches and social events',
      'Annual performance reviews with growth opportunities'
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Git', 'CSS']
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architect',
    department: 'Infrastructure',
    location: 'Remote (Canada)',
    type: 'Full-time',
    remote: true,
    salary: '$130,000 - $170,000 CAD',
    experience: '7+ years',
    posted: '2025-09-10',
    status: 'active',
    summary: 'Design and implement cloud infrastructure solutions for large-scale data processing.',
    description: 'Lead the design and implementation of cloud infrastructure that powers our data platforms. You will architect scalable, secure, and cost-effective solutions on AWS, Azure, and GCP.',
    responsibilities: [
      'Design cloud architecture for data-intensive applications',
      'Implement infrastructure as code using Terraform',
      'Optimize cloud costs and resource utilization',
      'Ensure security best practices and compliance',
      'Lead cloud migration projects',
      'Provide technical leadership and mentorship',
      'Collaborate with development and data teams',
      'Document architecture decisions and standards'
    ],
    requirements: [
      'Bachelor\'s in Computer Science or related field',
      '7+ years of experience in cloud architecture',
      'Expert knowledge of AWS, Azure, or GCP',
      'Strong experience with Infrastructure as Code',
      'Deep understanding of networking and security',
      'Experience with container orchestration (Kubernetes)',
      'Knowledge of DevOps practices and tools',
      'Cloud certifications (AWS Solutions Architect, etc.)'
    ],
    niceToHave: [
      'Experience with multi-cloud strategies',
      'Knowledge of data engineering tools',
      'Understanding of compliance frameworks (SOC2, ISO27001)',
      'Experience with serverless architectures',
      'Background in financial services or healthcare'
    ],
    benefits: [
      'Highly competitive salary',
      'Comprehensive benefits package',
      'RRSP matching',
      'Professional certification support',
      'Flexible remote work',
      'Equipment allowance',
      'Conference attendance',
      'Sabbatical opportunities'
    ],
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'DevOps', 'Security', 'Networking', 'IaC']
  },
  {
    id: 'data-strategy-consultant',
    title: 'Data Strategy Consultant',
    department: 'Consulting',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$95,000 - $130,000 CAD',
    experience: '4+ years',
    posted: '2025-09-12',
    status: 'active',
    summary: 'Help clients develop and implement comprehensive data strategies aligned with business goals.',
    description: 'Join our consulting team to help Fortune 500 companies transform their data capabilities. You will work directly with C-level executives to develop data strategies that drive business value.',
    responsibilities: [
      'Conduct data maturity assessments for client organizations',
      'Develop comprehensive data strategy roadmaps',
      'Lead client workshops and executive presentations',
      'Identify data monetization opportunities',
      'Design data governance frameworks',
      'Manage consulting engagements and deliverables',
      'Build long-term client relationships',
      'Contribute to business development activities'
    ],
    requirements: [
      'Bachelor\'s degree in Business, Computer Science, or related field',
      '4+ years of consulting or strategy experience',
      'Strong understanding of data analytics and AI',
      'Excellent presentation and communication skills',
      'Experience with data governance and compliance',
      'Proven project management capabilities',
      'Ability to travel up to 30%',
      'Business acumen and strategic thinking'
    ],
    niceToHave: [
      'MBA or advanced degree',
      'Management consulting background',
      'Industry expertise in specific verticals',
      'Change management certification',
      'Published thought leadership'
    ],
    benefits: [
      'Competitive base salary plus bonuses',
      'Comprehensive health coverage',
      'RRSP matching',
      'Professional development programs',
      'Mentorship opportunities',
      'Travel rewards program',
      'Downtown office location',
      'Career advancement paths'
    ],
    skills: ['Strategy', 'Analytics', 'Consulting', 'Data Governance', 'Project Management', 'Presentations', 'Business Analysis']
  },
  {
    id: 'product-manager',
    title: 'Product Manager - Data Platform',
    department: 'Product',
    location: 'Toronto, ON (108 Redpath Ave)',
    type: 'Full-time',
    remote: false,
    salary: '$110,000 - $150,000 CAD',
    experience: '5+ years',
    posted: '2025-09-08',
    status: 'active',
    summary: 'Drive product vision and roadmap for our data analytics platform and solutions.',
    description: 'Lead the product strategy for our data platform that serves hundreds of enterprise clients. You will define the product vision, prioritize features, and work with cross-functional teams to deliver exceptional data products.',
    responsibilities: [
      'Define product vision and strategy for data platform',
      'Manage product roadmap and prioritize features',
      'Conduct user research and gather requirements',
      'Work with engineering and data science teams',
      'Define success metrics and track KPIs',
      'Lead agile ceremonies and sprint planning',
      'Communicate with stakeholders and executives',
      'Drive product launches and go-to-market strategies'
    ],
    requirements: [
      'Bachelor\'s degree in relevant field',
      '5+ years of product management experience',
      'Experience with B2B SaaS or data products',
      'Strong analytical and problem-solving skills',
      'Understanding of data analytics and ML concepts',
      'Excellent communication and leadership abilities',
      'Experience with agile methodologies',
      'Track record of successful product launches'
    ],
    niceToHave: [
      'Technical background in engineering or data science',
      'MBA or advanced degree',
      'Experience in enterprise software',
      'Knowledge of data privacy regulations',
      'Product management certifications'
    ],
    benefits: [
      'Competitive salary with equity options',
      'Comprehensive benefits',
      'RRSP matching',
      'Professional development budget',
      'Flexible work arrangements',
      'Modern office space',
      'Team offsites',
      'Leadership development programs'
    ],
    skills: ['Product Strategy', 'Agile', 'Analytics', 'User Research', 'Roadmapping', 'Stakeholder Management', 'KPIs']
  }
]

export function getPositionById(id: string): JobPosition | undefined {
  return jobPositions.find(position => position.id === id)
}

export function getActivePositions(): JobPosition[] {
  return jobPositions.filter(position => position.status === 'active')
}

export function getPositionsByDepartment(department: string): JobPosition[] {
  return jobPositions.filter(position => position.department === department && position.status === 'active')
}