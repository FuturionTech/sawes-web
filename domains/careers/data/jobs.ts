// SAWES Job Positions Data
// Water, Sanitation & Environment Consulting Firm in Burkina Faso

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
  }
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
  // 1. Senior Hydraulic Engineer
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

  // 2. Environmental Specialist / WASH Specialist
  {
    id: 'specialiste-wash',
    title: {
      fr: 'Spécialiste WASH',
      en: 'WASH Specialist'
    },
    department: {
      fr: 'Eau, Hygiène et Assainissement',
      en: 'Water, Sanitation & Hygiene'
    },
    location: {
      fr: 'Ouagadougou avec déplacements régionaux',
      en: 'Ouagadougou with regional travel'
    },
    type: {
      fr: 'CDI (Temps plein)',
      en: 'Full-time'
    },
    remote: false,
    salary: 'À négocier',
    experience: {
      fr: '3+ ans',
      en: '3+ years'
    },
    posted: '2025-10-05',
    deadline: '2025-11-30',
    status: 'active',
    summary: {
      fr: 'Développer et mettre en œuvre des programmes d\'eau, d\'assainissement et d\'hygiène (WASH) en milieu scolaire et communautaire.',
      en: 'Develop and implement Water, Sanitation and Hygiene (WASH) programs in schools and communities.'
    },
    description: {
      fr: 'Nous recherchons un(e) Spécialiste WASH expérimenté(e) pour concevoir et coordonner des programmes d\'accès à l\'eau potable, à l\'assainissement et à l\'hygiène en milieu rural et scolaire. Vous travaillerez en étroite collaboration avec les communautés, les partenaires (UNICEF, ONG) et les autorités locales.',
      en: 'We are seeking an experienced WASH Specialist to design and coordinate water, sanitation and hygiene access programs in rural and school settings. You will work closely with communities, partners (UNICEF, NGOs) and local authorities.'
    },
    responsibilities: {
      fr: [
        'Concevoir et mettre en œuvre des programmes WASH en milieu scolaire et communautaire',
        'Réaliser des études diagnostiques des besoins WASH',
        'Développer des stratégies de sensibilisation à l\'hygiène et l\'assainissement',
        'Former les acteurs locaux (enseignants, comités de gestion, artisans)',
        'Assurer le suivi-évaluation des programmes WASH',
        'Coordonner avec les partenaires techniques et financiers (UNICEF, ONG)',
        'Élaborer des outils pédagogiques et de communication',
        'Produire des rapports de missions et bilans d\'activités'
      ],
      en: [
        'Design and implement WASH programs in school and community settings',
        'Conduct diagnostic studies of WASH needs',
        'Develop hygiene and sanitation awareness strategies',
        'Train local actors (teachers, management committees, artisans)',
        'Ensure monitoring and evaluation of WASH programs',
        'Coordinate with technical and financial partners (UNICEF, NGOs)',
        'Develop educational and communication tools',
        'Produce mission reports and activity reviews'
      ]
    },
    requirements: {
      fr: [
        'Diplôme en Santé publique, Environnement, Sociologie ou domaine connexe',
        '3+ ans d\'expérience en programmes WASH',
        'Expérience en animation communautaire et sensibilisation',
        'Connaissance des approches participatives (ATPC, PHAST)',
        'Maîtrise du français (oral et écrit)',
        'Compétences en suivi-évaluation de projets',
        'Capacité à travailler dans des contextes ruraux',
        'Permis de conduire souhaité'
      ],
      en: [
        'Degree in Public Health, Environment, Sociology or related field',
        '3+ years of experience in WASH programs',
        'Experience in community animation and awareness raising',
        'Knowledge of participatory approaches (CLTS, PHAST)',
        'Proficiency in French (oral and written)',
        'Project monitoring and evaluation skills',
        'Ability to work in rural contexts',
        'Driver\'s license desired'
      ]
    },
    niceToHave: {
      fr: [
        'Expérience avec UNICEF ou ONG internationales',
        'Connaissance des langues locales (Mooré, Dioula)',
        'Formation en approches CLTS/ATPC',
        'Expérience en marketing social pour l\'assainissement',
        'Maîtrise de l\'anglais'
      ],
      en: [
        'Experience with UNICEF or international NGOs',
        'Knowledge of local languages (Mooré, Dioula)',
        'Training in CLTS/ATPC approaches',
        'Experience in social marketing for sanitation',
        'English proficiency'
      ]
    },
    benefits: {
      fr: [
        'Salaire compétitif',
        'Assurance maladie',
        'Véhicule de service pour missions terrain',
        'Formation continue en WASH',
        'Opportunités de collaboration avec UNICEF et partenaires internationaux',
        'Impact direct sur les communautés',
        'Congés annuels',
        'Prime de mission'
      ],
      en: [
        'Competitive salary',
        'Health insurance',
        'Service vehicle for field missions',
        'Continuous WASH training',
        'Opportunities to collaborate with UNICEF and international partners',
        'Direct impact on communities',
        'Annual leave',
        'Mission allowance'
      ]
    },
    skills: ['WASH', 'Sensibilisation', 'ATPC/CLTS', 'Suivi-évaluation', 'Animation communautaire', 'Santé publique', 'Formation']
  },

  // 3. Project Manager - Water Infrastructure
  {
    id: 'chef-projet-eau',
    title: {
      fr: 'Chef de Projet Infrastructures Hydrauliques',
      en: 'Water Infrastructure Project Manager'
    },
    department: {
      fr: 'Gestion de Projets',
      en: 'Project Management'
    },
    location: {
      fr: 'Ouagadougou / Régions',
      en: 'Ouagadougou / Regions'
    },
    type: {
      fr: 'CDI (Temps plein)',
      en: 'Full-time'
    },
    remote: false,
    salary: 'Selon expérience',
    experience: {
      fr: '4+ ans',
      en: '4+ years'
    },
    posted: '2025-09-20',
    deadline: '2025-11-01',
    status: 'active',
    summary: {
      fr: 'Coordonner et superviser la réalisation de projets d\'infrastructures d\'eau potable et d\'assainissement.',
      en: 'Coordinate and supervise implementation of drinking water and sanitation infrastructure projects.'
    },
    description: {
      fr: 'SAWES cherche un(e) Chef de Projet expérimenté(e) pour gérer nos projets d\'infrastructures hydrauliques (forages, adductions d\'eau, barrages). Vous assurerez la coordination technique, administrative et financière des projets en collaboration avec les maîtres d\'ouvrage et partenaires.',
      en: 'SAWES seeks an experienced Project Manager to manage our hydraulic infrastructure projects (boreholes, water supplies, dams). You will ensure technical, administrative and financial coordination of projects in collaboration with project owners and partners.'
    },
    responsibilities: {
      fr: [
        'Coordonner la planification et l\'exécution des projets hydrauliques',
        'Superviser les équipes techniques et les prestataires',
        'Assurer le suivi budgétaire et le reporting financier',
        'Gérer les relations avec les maîtres d\'ouvrage et partenaires',
        'Contrôler la qualité des travaux et le respect des délais',
        'Rédiger les rapports d\'avancement et bilans de projets',
        'Organiser les réunions de coordination et comités de pilotage',
        'Assurer le respect des normes QHSE'
      ],
      en: [
        'Coordinate planning and execution of hydraulic projects',
        'Supervise technical teams and service providers',
        'Ensure budget monitoring and financial reporting',
        'Manage relationships with project owners and partners',
        'Control work quality and compliance with deadlines',
        'Write progress reports and project reviews',
        'Organize coordination meetings and steering committees',
        'Ensure compliance with QHSE standards'
      ]
    },
    requirements: {
      fr: [
        'Diplôme d\'Ingénieur (Hydraulique, Génie Civil) ou Master en Gestion de Projets',
        '4+ ans en gestion de projets d\'infrastructures (eau, assainissement)',
        'Maîtrise des outils de gestion de projets (MS Project, Primavera)',
        'Compétences en gestion budgétaire et suivi financier',
        'Expérience en coordination multi-acteurs',
        'Excellentes capacités de communication et de leadership',
        'Maîtrise du français (oral et écrit)',
        'Disponibilité pour déplacements fréquents'
      ],
      en: [
        'Engineering degree (Hydraulics, Civil Engineering) or Master\'s in Project Management',
        '4+ years in infrastructure project management (water, sanitation)',
        'Proficiency in project management tools (MS Project, Primavera)',
        'Budget management and financial monitoring skills',
        'Experience in multi-stakeholder coordination',
        'Excellent communication and leadership skills',
        'Proficiency in French (oral and written)',
        'Availability for frequent travel'
      ]
    },
    niceToHave: {
      fr: [
        'Certification PMP ou PRINCE2',
        'Expérience avec bailleurs de fonds internationaux (AFD, BAD, UE)',
        'Connaissance de l\'anglais',
        'Maîtrise des logiciels CAD/DAO',
        'Expérience en gestion des risques et QHSE'
      ],
      en: [
        'PMP or PRINCE2 certification',
        'Experience with international donors (AFD, AfDB, EU)',
        'English proficiency',
        'CAD/DAO software skills',
        'Risk management and QHSE experience'
      ]
    },
    benefits: {
      fr: [
        'Package salarial attractif',
        'Assurance santé',
        'Véhicule de fonction',
        'Per diem pour missions',
        'Formation en gestion de projets',
        'Évolution de carrière',
        'Travail sur projets d\'envergure régionale',
        'Congés payés'
      ],
      en: [
        'Attractive salary package',
        'Health insurance',
        'Company vehicle',
        'Per diem for missions',
        'Project management training',
        'Career development',
        'Work on regional-scale projects',
        'Paid leave'
      ]
    },
    skills: ['Gestion de projets', 'MS Project', 'Coordination', 'Budget', 'Leadership', 'Hydraulique', 'Reporting', 'QHSE']
  },

  // 4. Monitoring & Evaluation Officer
  {
    id: 'charge-suivi-evaluation',
    title: {
      fr: 'Chargé(e) de Suivi-Évaluation',
      en: 'Monitoring & Evaluation Officer'
    },
    department: {
      fr: 'Suivi-Évaluation',
      en: 'Monitoring & Evaluation'
    },
    location: {
      fr: 'Ouagadougou',
      en: 'Ouagadougou'
    },
    type: {
      fr: 'CDD (2 ans)',
      en: 'Fixed-term (2 years)'
    },
    remote: false,
    salary: 'À définir',
    experience: {
      fr: '2-4 ans',
      en: '2-4 years'
    },
    posted: '2025-10-10',
    deadline: '2025-12-15',
    status: 'active',
    summary: {
      fr: 'Assurer le suivi, l\'évaluation et la capitalisation des projets eau et assainissement.',
      en: 'Ensure monitoring, evaluation and capitalization of water and sanitation projects.'
    },
    description: {
      fr: 'Nous recherchons un(e) Chargé(e) de Suivi-Évaluation pour nos projets WASH. Vous développerez les systèmes de S&E, collecterez et analyserez les données de performance, et produirez des rapports pour les partenaires techniques et financiers.',
      en: 'We are seeking a Monitoring & Evaluation Officer for our WASH projects. You will develop M&E systems, collect and analyze performance data, and produce reports for technical and financial partners.'
    },
    responsibilities: {
      fr: [
        'Élaborer et mettre en œuvre les cadres de suivi-évaluation des projets',
        'Développer les indicateurs de performance et outils de collecte de données',
        'Réaliser les enquêtes de terrain et collectes de données',
        'Analyser les données et produire les rapports de S&E',
        'Organiser les missions d\'évaluation (baseline, midline, endline)',
        'Assurer la capitalisation des bonnes pratiques et leçons apprises',
        'Former les équipes terrain aux outils de S&E',
        'Produire les rapports narratifs et statistiques pour les bailleurs'
      ],
      en: [
        'Develop and implement project monitoring and evaluation frameworks',
        'Develop performance indicators and data collection tools',
        'Conduct field surveys and data collection',
        'Analyze data and produce M&E reports',
        'Organize evaluation missions (baseline, midline, endline)',
        'Ensure capitalization of good practices and lessons learned',
        'Train field teams on M&E tools',
        'Produce narrative and statistical reports for donors'
      ]
    },
    requirements: {
      fr: [
        'Diplôme en Statistiques, Socio-économie, Développement ou domaine connexe',
        '2-4 ans d\'expérience en S&E de projets (eau, santé, développement)',
        'Maîtrise des méthodes quantitatives et qualitatives',
        'Compétences en analyse statistique (SPSS, STATA, R)',
        'Expérience en conception d\'enquêtes et outils de collecte',
        'Excellentes capacités de rédaction de rapports',
        'Maîtrise du français et de l\'anglais',
        'Disponibilité pour missions terrain'
      ],
      en: [
        'Degree in Statistics, Socio-economics, Development or related field',
        '2-4 years of M&E experience in projects (water, health, development)',
        'Proficiency in quantitative and qualitative methods',
        'Statistical analysis skills (SPSS, STATA, R)',
        'Experience in survey design and data collection tools',
        'Excellent report writing skills',
        'Proficiency in French and English',
        'Availability for field missions'
      ]
    },
    niceToHave: {
      fr: [
        'Formation en S&E de projets de développement',
        'Expérience avec logiciels de collecte mobile (KoBoToolbox, ODK)',
        'Connaissance des systèmes de gestion de bases de données',
        'Expérience avec bailleurs internationaux (AFD, UE, UNICEF)',
        'Maîtrise de Power BI ou Tableau pour visualisation de données'
      ],
      en: [
        'Training in M&E of development projects',
        'Experience with mobile data collection software (KoBoToolbox, ODK)',
        'Knowledge of database management systems',
        'Experience with international donors (AFD, EU, UNICEF)',
        'Proficiency in Power BI or Tableau for data visualization'
      ]
    },
    benefits: {
      fr: [
        'Salaire compétitif',
        'Assurance maladie',
        'Formation en S&E et analyse de données',
        'Équipement informatique fourni',
        'Missions terrain avec per diem',
        'Exposition à des projets multi-bailleurs',
        'Environnement de travail dynamique',
        'Congés payés'
      ],
      en: [
        'Competitive salary',
        'Health insurance',
        'M&E and data analysis training',
        'Computer equipment provided',
        'Field missions with per diem',
        'Exposure to multi-donor projects',
        'Dynamic work environment',
        'Paid leave'
      ]
    },
    skills: ['S&E', 'SPSS', 'STATA', 'Enquêtes', 'Analyse de données', 'Reporting', 'KoBoToolbox', 'Statistiques']
  },

  // 5. Administrative and Finance Officer
  {
    id: 'responsable-admin-finance',
    title: {
      fr: 'Responsable Administratif et Financier',
      en: 'Administrative and Finance Manager'
    },
    department: {
      fr: 'Administration et Finance',
      en: 'Administration & Finance'
    },
    location: {
      fr: 'Ouagadougou',
      en: 'Ouagadougou'
    },
    type: {
      fr: 'CDI (Temps plein)',
      en: 'Full-time'
    },
    remote: false,
    salary: 'Selon profil',
    experience: {
      fr: '5+ ans',
      en: '5+ years'
    },
    posted: '2025-09-15',
    deadline: '2025-10-31',
    status: 'active',
    summary: {
      fr: 'Gérer les opérations administratives et financières de l\'entreprise et assurer la conformité avec les procédures des bailleurs de fonds.',
      en: 'Manage administrative and financial operations of the company and ensure compliance with donor procedures.'
    },
    description: {
      fr: 'SAWES recherche un(e) Responsable Administratif et Financier pour gérer l\'ensemble des opérations administratives, comptables et financières. Vous assurerez la gestion financière des projets, le reporting aux bailleurs et la conformité avec les réglementations en vigueur.',
      en: 'SAWES is seeking an Administrative and Finance Manager to oversee all administrative, accounting and financial operations. You will ensure project financial management, donor reporting and compliance with regulations.'
    },
    responsibilities: {
      fr: [
        'Superviser la gestion comptable et financière de l\'entreprise',
        'Élaborer et suivre les budgets des projets',
        'Assurer la gestion de trésorerie et les prévisions financières',
        'Produire les rapports financiers pour les bailleurs de fonds',
        'Gérer les ressources humaines (contrats, paie, assurances)',
        'Superviser les achats et la gestion des stocks',
        'Assurer la conformité fiscale et sociale',
        'Coordonner les audits financiers internes et externes'
      ],
      en: [
        'Supervise accounting and financial management of the company',
        'Develop and monitor project budgets',
        'Ensure cash flow management and financial forecasting',
        'Produce financial reports for donors',
        'Manage human resources (contracts, payroll, insurance)',
        'Supervise procurement and inventory management',
        'Ensure tax and social compliance',
        'Coordinate internal and external financial audits'
      ]
    },
    requirements: {
      fr: [
        'Diplôme en Comptabilité, Finance, Gestion ou domaine connexe',
        '5+ ans d\'expérience en gestion administrative et financière',
        'Maîtrise du SYSCOHADA et des réglementations fiscales au Burkina Faso',
        'Expérience en gestion financière de projets avec bailleurs internationaux',
        'Compétences avancées en Excel et logiciels comptables (Sage, Tompro)',
        'Capacité de leadership et de gestion d\'équipe',
        'Excellentes capacités d\'analyse et de reporting',
        'Intégrité et confidentialité'
      ],
      en: [
        'Degree in Accounting, Finance, Management or related field',
        '5+ years of administrative and financial management experience',
        'Proficiency in SYSCOHADA and tax regulations in Burkina Faso',
        'Experience in financial management of projects with international donors',
        'Advanced Excel and accounting software skills (Sage, Tompro)',
        'Leadership and team management skills',
        'Excellent analytical and reporting skills',
        'Integrity and confidentiality'
      ]
    },
    niceToHave: {
      fr: [
        'Certification comptable (Expert-comptable, CPA)',
        'Expérience avec AFD, BAD, UE, Banque Mondiale',
        'Maîtrise de l\'anglais',
        'Connaissance des procédures PNUD/UNICEF',
        'Expérience en gestion de bureaux multi-sites'
      ],
      en: [
        'Accounting certification (Chartered Accountant, CPA)',
        'Experience with AFD, AfDB, EU, World Bank',
        'English proficiency',
        'Knowledge of UNDP/UNICEF procedures',
        'Multi-site office management experience'
      ]
    },
    benefits: {
      fr: [
        'Rémunération attractive',
        'Assurance maladie et prévoyance',
        'Formation continue en finance et gestion',
        'Responsabilités stratégiques',
        'Équipe administrative à encadrer',
        'Environnement professionnel stable',
        'Congés annuels',
        'Primes de performance'
      ],
      en: [
        'Attractive compensation',
        'Health and welfare insurance',
        'Continuous finance and management training',
        'Strategic responsibilities',
        'Administrative team to supervise',
        'Stable professional environment',
        'Annual leave',
        'Performance bonuses'
      ]
    },
    skills: ['Comptabilité', 'Finance', 'SYSCOHADA', 'Budget', 'Excel', 'Sage', 'Gestion RH', 'Audit']
  },

  // 6. Internship - Environmental Engineering
  {
    id: 'stage-ingenieur-environnement',
    title: {
      fr: 'Stage - Ingénieur Environnement',
      en: 'Internship - Environmental Engineer'
    },
    department: {
      fr: 'Études Environnementales',
      en: 'Environmental Studies'
    },
    location: {
      fr: 'Ouagadougou',
      en: 'Ouagadougou'
    },
    type: {
      fr: 'Stage (6 mois)',
      en: 'Internship (6 months)'
    },
    remote: false,
    salary: 'Indemnité de stage',
    experience: {
      fr: 'Étudiant(e) en fin de cycle',
      en: 'Final year student'
    },
    posted: '2025-10-12',
    deadline: '2025-11-30',
    status: 'active',
    summary: {
      fr: 'Participer aux études d\'impact environnemental et social (EIES) de projets hydrauliques et d\'assainissement.',
      en: 'Participate in Environmental and Social Impact Assessments (ESIA) for water and sanitation projects.'
    },
    description: {
      fr: 'SAWES offre un stage de 6 mois pour un(e) étudiant(e) en Ingénierie de l\'Environnement. Vous participerez aux études d\'impact environnemental, aux missions terrain, et à l\'élaboration de plans de gestion environnementale et sociale (PGES).',
      en: 'SAWES offers a 6-month internship for a student in Environmental Engineering. You will participate in environmental impact studies, field missions, and development of Environmental and Social Management Plans (ESMP).'
    },
    responsibilities: {
      fr: [
        'Participer aux études d\'impact environnemental et social (EIES)',
        'Réaliser des enquêtes et consultations publiques',
        'Contribuer à l\'élaboration de PGES et plans de compensation',
        'Participer aux missions de terrain (inventaires, prélèvements)',
        'Analyser les données environnementales',
        'Rédiger des sections de rapports d\'EIES',
        'Suivre la mise en œuvre des mesures environnementales',
        'Assister aux réunions techniques'
      ],
      en: [
        'Participate in Environmental and Social Impact Assessments (ESIA)',
        'Conduct surveys and public consultations',
        'Contribute to development of ESMP and compensation plans',
        'Participate in field missions (inventories, sampling)',
        'Analyze environmental data',
        'Write sections of ESIA reports',
        'Monitor implementation of environmental measures',
        'Attend technical meetings'
      ]
    },
    requirements: {
      fr: [
        'Étudiant(e) en Master ou dernière année d\'école d\'ingénieur (Environnement, Génie de l\'Environnement)',
        'Connaissance des procédures d\'EIES au Burkina Faso',
        'Maîtrise du français (oral et écrit)',
        'Bonnes capacités rédactionnelles',
        'Compétences en bureautique (Word, Excel)',
        'Motivation et sérieux',
        'Disponibilité immédiate',
        'Permis de conduire souhaité'
      ],
      en: [
        'Master\'s student or final year engineering student (Environment, Environmental Engineering)',
        'Knowledge of ESIA procedures in Burkina Faso',
        'Proficiency in French (oral and written)',
        'Good writing skills',
        'Office software skills (Word, Excel)',
        'Motivation and seriousness',
        'Immediate availability',
        'Driver\'s license desired'
      ]
    },
    niceToHave: {
      fr: [
        'Connaissance des SIG (QGIS, ArcGIS)',
        'Expérience préalable en stage environnement',
        'Connaissance des langues locales',
        'Notions en analyse de la qualité de l\'eau',
        'Intérêt pour le secteur eau et assainissement'
      ],
      en: [
        'GIS knowledge (QGIS, ArcGIS)',
        'Previous environmental internship experience',
        'Knowledge of local languages',
        'Basics in water quality analysis',
        'Interest in water and sanitation sector'
      ]
    },
    benefits: {
      fr: [
        'Indemnité de stage mensuelle',
        'Encadrement par des ingénieurs expérimentés',
        'Formation pratique en EIES',
        'Missions terrain régulières',
        'Attestation de stage',
        'Possibilité de recrutement après stage',
        'Expérience dans un bureau d\'études reconnu',
        'Networking professionnel'
      ],
      en: [
        'Monthly internship allowance',
        'Supervision by experienced engineers',
        'Practical ESIA training',
        'Regular field missions',
        'Internship certificate',
        'Possibility of recruitment after internship',
        'Experience in a recognized consulting firm',
        'Professional networking'
      ]
    },
    skills: ['Environnement', 'EIES', 'PGES', 'Enquêtes', 'Rédaction', 'SIG', 'Terrain', 'Analyse']
  }
]

// Helper functions
export function getPositionById(id: string): JobPosition | undefined {
  return jobPositions.find(position => position.id === id)
}

export function getActivePositions(): JobPosition[] {
  return jobPositions.filter(position => position.status === 'active')
}

export function getPositionsByDepartment(dept: string): JobPosition[] {
  return jobPositions.filter(position =>
    (position.department.fr === dept || position.department.en === dept) && position.status === 'active'
  )
}

export function getDepartments(locale: 'fr' | 'en' = 'fr'): string[] {
  const departments = jobPositions.map(p => p.department[locale])
  return [...new Set(departments)]
}
