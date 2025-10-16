export interface Project {
  id: string
  slug: string
  title: string
  titleFr: string
  category: 'studies' | 'evaluations' | 'management' | 'urban-services' | 'other'
  date: string
  year: number
  duration?: string
  description: string
  descriptionFr: string
  location: string
  locationFr: string
  region: string
  regionFr: string
  partners: string[]
  partnersFr: string[]
  executionPartners?: string[]
  executionPartnersFr?: string[]
  technicalPartners?: string[]
  technicalPartnersFr?: string[]
  capacity?: string
  budget?: string
  scope?: string[]
  scopeFr?: string[]
  outcomes?: string[]
  outcomesFr?: string[]
  image?: string
  images?: string[]
  featured?: boolean
  status?: 'completed' | 'ongoing'
  tags?: string[]
  tagsFr?: string[]
}

export const projects: Project[] = [
  // STUDIES (ÉTUDES)
  {
    id: 'cedeao-2012',
    slug: 'cedeao-water-policy-2012',
    title: 'Implementation Action Plan for West African Water Resources Policy',
    titleFr: 'Plan d\'action de mise en œuvre de la politique des ressources en eau de l\'Afrique de l\'Ouest',
    category: 'studies',
    date: 'May 2012',
    year: 2012,
    description: 'Regional consultation for coordination and harmonization of actions in the water sector. This study focused on describing actions that could facilitate improved coordination and harmonization of regional initiatives in the short, medium, and long term.',
    descriptionFr: 'Concertation régionale pour la coordination et l\'harmonisation des actions dans le secteur de l\'eau. Cette étude a porté sur la description des actions dont la mise en œuvre pourrait faciliter à court, moyen et long terme l\'amélioration de la coordination et de l\'harmonisation des actions entreprises au niveau régional.',
    location: 'West Africa',
    locationFr: 'Afrique de l\'Ouest',
    region: 'ECOWAS Region',
    regionFr: 'Région CEDEAO',
    partners: ['CCRE-ECOWAS (Water Resources Coordination Center)'],
    partnersFr: ['CCRE-CEDEAO (Centre de Coordination des Ressources en Eau)'],
    scope: [
      'Consultation with member countries',
      'Action plan development for short, medium and long term',
      'Regional coordination framework',
      'Harmonization strategies for water resources management'
    ],
    scopeFr: [
      'Concertation avec les pays membres',
      'Élaboration de plan d\'action à court, moyen et long terme',
      'Cadre de coordination régionale',
      'Stratégies d\'harmonisation de la gestion des ressources en eau'
    ],
    featured: true,
    status: 'completed',
    tags: ['Regional Planning', 'Water Policy', 'ECOWAS', 'Strategic Planning'],
    tagsFr: ['Planification Régionale', 'Politique de l\'Eau', 'CEDEAO', 'Planification Stratégique']
  },
  {
    id: 'pnaepa-2006',
    slug: 'national-water-sanitation-program-2006',
    title: 'National Drinking Water Supply and Sanitation Program to 2015',
    titleFr: 'Programme National d\'Approvisionnement en Eau Potable et d\'Assainissement à l\'horizon 2015 (PNAEPA)',
    category: 'studies',
    date: 'October 2006',
    year: 2006,
    description: 'Comprehensive study developing a baseline situation for 2005 regarding access to drinking water and sanitation. Adaptation of existing national strategies and proposal of a 2006-2015 investment plan aligned with Millennium Development Goals.',
    descriptionFr: 'Étude complète élaborant une situation de référence 2005 relative à l\'accès à l\'eau potable et l\'assainissement. Adaptation des stratégies nationales existantes et proposition d\'un plan d\'investissement 2006-2015 au regard des Objectifs du Millénaire pour le Développement.',
    location: 'Burkina Faso',
    locationFr: 'Burkina Faso',
    region: 'National',
    regionFr: 'National',
    executionPartners: ['Bureau EDE - Senegal'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil EDE - Sénégal'],
    technicalPartners: ['African Development Bank (AfDB)'],
    technicalPartnersFr: ['Banque Africaine de Développement (BAD)'],
    partners: ['Bureau EDE - Senegal', 'African Development Bank (AfDB)'],
    partnersFr: ['Bureau EDE - Sénégal', 'Banque Africaine de Développement (BAD)'],
    scope: [
      'Baseline assessment of water and sanitation access (2005)',
      'National strategy adaptation',
      'Investment plan development 2006-2015',
      'MDG alignment and targeting',
      'Financial planning and resource mobilization'
    ],
    scopeFr: [
      'Évaluation de la situation de référence pour l\'accès à l\'eau et l\'assainissement (2005)',
      'Adaptation des stratégies nationales',
      'Élaboration du plan d\'investissement 2006-2015',
      'Alignement et ciblage des OMD',
      'Planification financière et mobilisation de ressources'
    ],
    featured: true,
    status: 'completed',
    tags: ['National Planning', 'MDG', 'Water Supply', 'Sanitation', 'Investment Planning'],
    tagsFr: ['Planification Nationale', 'OMD', 'Eau Potable', 'Assainissement', 'Planification des Investissements']
  },
  {
    id: 'liriba-2003',
    slug: 'liriba-dam-study-2003',
    title: 'Dam Study and Hydro-Agricultural Development of Liriba',
    titleFr: 'Étude de barrage et d\'aménagement hydroagricole de Liriba',
    category: 'studies',
    date: '2003',
    year: 2003,
    description: 'Comprehensive feasibility study for dam design and irrigated perimeter development in Poni Province. Technical, economic and environmental assessment for water storage and agricultural development.',
    descriptionFr: 'Étude de faisabilité complète pour la conception du barrage et l\'aménagement du périmètre irrigué dans la province de Poni. Évaluation technique, économique et environnementale pour le stockage de l\'eau et le développement agricole.',
    location: 'Poni Province',
    locationFr: 'Province de Poni',
    region: 'South-West Region',
    regionFr: 'Région du Sud-Ouest',
    partners: ['State of Burkina Faso'],
    partnersFr: ['État du Burkina Faso'],
    scope: [
      'Dam design and engineering',
      'Irrigated perimeter planning',
      'Hydrological studies',
      'Environmental impact assessment',
      'Economic feasibility analysis'
    ],
    scopeFr: [
      'Conception et ingénierie du barrage',
      'Planification du périmètre irrigué',
      'Études hydrologiques',
      'Évaluation d\'impact environnemental',
      'Analyse de faisabilité économique'
    ],
    status: 'completed',
    tags: ['Dam Design', 'Irrigation', 'Agriculture', 'Hydrology'],
    tagsFr: ['Conception de Barrage', 'Irrigation', 'Agriculture', 'Hydrologie']
  },
  {
    id: 'dadoune-2003',
    slug: 'dadoune-dam-study-2003',
    title: 'Dam Study and Hydro-Agricultural Development of Dadouné',
    titleFr: 'Étude de barrage et d\'aménagement hydroagricole de Dadouné',
    category: 'studies',
    date: '2003',
    year: 2003,
    description: 'Feasibility study for dam construction and irrigated agricultural perimeter in Ioba Province. Complete technical design for water resource management and agricultural productivity enhancement.',
    descriptionFr: 'Étude de faisabilité pour la construction du barrage et du périmètre agricole irrigué dans la province de Ioba. Conception technique complète pour la gestion des ressources en eau et l\'amélioration de la productivité agricole.',
    location: 'Ioba Province',
    locationFr: 'Province de Ioba',
    region: 'South-West Region',
    regionFr: 'Région du Sud-Ouest',
    partners: ['State of Burkina Faso'],
    partnersFr: ['État du Burkina Faso'],
    scope: [
      'Technical dam design',
      'Agricultural development planning',
      'Water resources assessment',
      'Soil and land analysis',
      'Socio-economic impact study'
    ],
    scopeFr: [
      'Conception technique du barrage',
      'Planification du développement agricole',
      'Évaluation des ressources en eau',
      'Analyse des sols et des terres',
      'Étude d\'impact socio-économique'
    ],
    status: 'completed',
    tags: ['Dam Engineering', 'Water Storage', 'Agriculture', 'Rural Development'],
    tagsFr: ['Ingénierie de Barrage', 'Stockage d\'Eau', 'Agriculture', 'Développement Rural']
  },
  {
    id: 'unicef-2007',
    slug: 'school-wash-approaches-2007',
    title: 'Intervention Approaches for Drinking Water, Sanitation and Hygiene Education in Primary Schools',
    titleFr: 'Étude sur les approches d\'interventions en matière d\'eau potable, d\'assainissement et d\'éducation à l\'hygiène en milieu scolaire primaire',
    category: 'studies',
    date: 'May 2007',
    year: 2007,
    description: 'Capitalization of numerous experiences in drinking water, hygiene and sanitation in primary schools in Burkina Faso. Proposals for harmonization of approaches for scaling up interventions.',
    descriptionFr: 'Capitalisation des nombreuses expériences en matière d\'eau potable, hygiène et assainissement en milieu scolaire primaire au Burkina Faso. Propositions pour une harmonisation des approches en vue du passage à l\'échelle.',
    location: 'Burkina Faso',
    locationFr: 'Burkina Faso',
    region: 'National',
    regionFr: 'National',
    partners: ['UNICEF Burkina Faso'],
    partnersFr: ['UNICEF Burkina Faso'],
    scope: [
      'Capitalization of WASH experiences in schools',
      'Best practices documentation',
      'Harmonization framework development',
      'Scaling-up strategy formulation',
      'Stakeholder consultation and validation'
    ],
    scopeFr: [
      'Capitalisation des expériences WASH en milieu scolaire',
      'Documentation des meilleures pratiques',
      'Développement du cadre d\'harmonisation',
      'Formulation de stratégie de passage à l\'échelle',
      'Consultation et validation des parties prenantes'
    ],
    featured: true,
    status: 'completed',
    tags: ['WASH', 'Schools', 'Hygiene Education', 'Capacity Building', 'UNICEF'],
    tagsFr: ['WASH', 'Écoles', 'Éducation à l\'Hygiène', 'Renforcement des Capacités', 'UNICEF']
  },
  {
    id: 'small-towns-2008',
    slug: 'small-towns-support-strategy-2008-2009',
    title: 'Regional Strategies to Support Small Towns',
    titleFr: 'Recherche-action « Stratégies régionales d\'appui aux petites villes »',
    category: 'studies',
    date: '2008-2009',
    year: 2008,
    duration: '2 years',
    description: 'Action research evaluating the needs and demands of small towns in terms of access to financing, training and advisory support in Centre-Est region (Burkina Faso), Brong Ahafo (Ghana), and Mopti (Mali).',
    descriptionFr: 'Recherche-action évaluant les besoins et demandes des petites villes en matière d\'accès au financement, aux formations et à l\'appui conseil dans les régions du Centre-Est (Burkina Faso), Brong Ahafo (Ghana) et Mopti (Mali).',
    location: 'Burkina Faso, Ghana, Mali',
    locationFr: 'Burkina Faso, Ghana, Mali',
    region: 'West Africa (Multi-country)',
    regionFr: 'Afrique de l\'Ouest (Multi-pays)',
    executionPartners: ['Water Solidarity Program (pS-Eau)'],
    executionPartnersFr: ['Programme Solidarité Eau (pS-Eau)'],
    technicalPartners: ['Municipal Development Partnership (PDM) - France'],
    technicalPartnersFr: ['Partenariat pour le Développement Municipal (PDM) - France'],
    partners: ['Water Solidarity Program', 'Municipal Development Partnership (France)'],
    partnersFr: ['Programme Solidarité Eau', 'Partenariat pour le Développement Municipal (France)'],
    scope: [
      'Needs assessment in small towns',
      'Financing access evaluation',
      'Training needs identification',
      'Advisory support mechanisms',
      'Cross-country comparative analysis'
    ],
    scopeFr: [
      'Évaluation des besoins dans les petites villes',
      'Évaluation de l\'accès au financement',
      'Identification des besoins en formation',
      'Mécanismes d\'appui conseil',
      'Analyse comparative multi-pays'
    ],
    status: 'completed',
    tags: ['Small Towns', 'Financing', 'Capacity Building', 'Multi-country', 'Action Research'],
    tagsFr: ['Petites Villes', 'Financement', 'Renforcement des Capacités', 'Multi-pays', 'Recherche-Action']
  },
  {
    id: 'transboundary-basins-2010',
    slug: 'transboundary-basins-2010',
    title: 'Promotion of Transboundary Basin Organizations in West Africa',
    titleFr: 'Études relatives à la promotion de trois (3) nouvelles organisations de bassins transfrontaliers en Afrique de l\'Ouest',
    category: 'studies',
    date: '2010',
    year: 2010,
    description: 'Studies related to the promotion of three new transboundary basin organizations in West Africa. Includes situation analysis, legal and institutional framework definition, financial implications assessment, and roadmap development.',
    descriptionFr: 'Études relatives à la promotion de trois nouvelles organisations de bassins transfrontaliers en Afrique de l\'Ouest. Comprend l\'état des lieux, la définition des contours juridiques, institutionnels et organisationnels, l\'évaluation des implications financières et la feuille de route.',
    location: 'West Africa',
    locationFr: 'Afrique de l\'Ouest',
    region: 'ECOWAS Transboundary Basins',
    regionFr: 'Bassins Transfrontaliers CEDEAO',
    partners: ['CCRE/ECOWAS'],
    partnersFr: ['CCRE/CEDEAO'],
    scope: [
      'Current situation assessment',
      'Legal framework definition',
      'Institutional setup design',
      'Organizational structure development',
      'Financial implications evaluation',
      'Implementation roadmap'
    ],
    scopeFr: [
      'État des lieux',
      'Définition du cadre juridique',
      'Conception du montage institutionnel',
      'Développement de la structure organisationnelle',
      'Évaluation des implications financières',
      'Feuille de route de mise en œuvre'
    ],
    featured: true,
    status: 'completed',
    tags: ['Transboundary Waters', 'ECOWAS', 'Basin Management', 'Regional Cooperation'],
    tagsFr: ['Eaux Transfrontalières', 'CEDEAO', 'Gestion de Bassin', 'Coopération Régionale']
  },

  // EVALUATIONS
  {
    id: 'bagre-2009',
    slug: 'bagre-dam-evaluation-2009',
    title: 'Retrospective Evaluation of Bagré Dam Safety Project',
    titleFr: 'Évaluation rétrospective du projet de mise en sécurité du barrage de Bagré',
    category: 'evaluations',
    date: 'March - June 2009',
    year: 2009,
    description: 'Comprehensive retrospective evaluation of the Bagré Dam safety project from start to completion. Analysis based on five criteria recommended by the OECD-DAC: relevance, effectiveness, efficiency, impact, and sustainability. Assessment of added value of partner contribution.',
    descriptionFr: 'Évaluation rétrospective complète du projet de mise en sécurité du barrage de Bagré depuis son démarrage jusqu\'à son achèvement. Analyse évaluative à partir des cinq critères préconisés par le Comité d\'aide au développement CAD de l\'OCDE : pertinence, efficacité, efficience, impact, viabilité. Valeur ajoutée de la contribution du partenaire.',
    location: 'Bagré, Burkina Faso',
    locationFr: 'Bagré, Burkina Faso',
    region: 'Centre-Est Region',
    regionFr: 'Région Centre-Est',
    partners: ['French Development Agency (AFD)'],
    partnersFr: ['Agence Française de Développement (AFD)'],
    scope: [
      'Global and objective assessment of project actions',
      'Relevance analysis',
      'Effectiveness evaluation',
      'Efficiency assessment',
      'Impact measurement',
      'Sustainability analysis',
      'Partner value-added assessment'
    ],
    scopeFr: [
      'Établissement d\'un bilan global et objectif des actions du projet',
      'Analyse de la pertinence',
      'Évaluation de l\'efficacité',
      'Évaluation de l\'efficience',
      'Mesure de l\'impact',
      'Analyse de la viabilité',
      'Évaluation de la valeur ajoutée du partenaire'
    ],
    featured: true,
    status: 'completed',
    tags: ['Dam Safety', 'Retrospective Evaluation', 'AFD', 'OECD-DAC Criteria'],
    tagsFr: ['Sécurité de Barrage', 'Évaluation Rétrospective', 'AFD', 'Critères CAD-OCDE']
  },
  {
    id: 'school-hydraulics-2009',
    slug: 'school-hydraulics-evaluation-2009',
    title: 'Retrospective Evaluation of School Hydraulics Project',
    titleFr: 'Évaluation rétrospective du projet d\'hydraulique scolaire',
    category: 'evaluations',
    date: 'March 2009',
    year: 2009,
    description: 'Comprehensive evaluation of school water supply project from inception to completion. Formulation of informed opinion on relevance, efficiency, effectiveness, impact and sustainability in context of policy and intervention procedures.',
    descriptionFr: 'Évaluation complète du projet d\'hydraulique scolaire depuis son démarrage jusqu\'à son achèvement. Formulation d\'une opinion motivée sur la pertinence, l\'efficience, l\'efficacité, l\'impact et la viabilité du projet financé au regard du contexte, de la politique et des procédures d\'intervention.',
    location: 'Burkina Faso',
    locationFr: 'Burkina Faso',
    region: 'National',
    regionFr: 'National',
    partners: ['French Development Agency (AFD)'],
    partnersFr: ['Agence Française de Développement (AFD)'],
    scope: [
      'Project assessment from start to finish',
      'Relevance evaluation in policy context',
      'Efficiency analysis',
      'Effectiveness measurement',
      'Impact assessment',
      'Sustainability prospects',
      'Procedure alignment review'
    ],
    scopeFr: [
      'Évaluation du projet du début à la fin',
      'Évaluation de la pertinence dans le contexte politique',
      'Analyse de l\'efficience',
      'Mesure de l\'efficacité',
      'Évaluation de l\'impact',
      'Perspectives de viabilité',
      'Revue de l\'alignement des procédures'
    ],
    status: 'completed',
    tags: ['School WASH', 'Project Evaluation', 'AFD', 'Education'],
    tagsFr: ['WASH Scolaire', 'Évaluation de Projet', 'AFD', 'Éducation']
  },
  {
    id: 'eco-sanitation-2009',
    slug: 'ecological-sanitation-ouagadougou-2009',
    title: 'Mid-term Evaluation of Ecological Sanitation Project in Ouagadougou',
    titleFr: 'Évaluation à mi-parcours du projet d\'assainissement écologique dans les quartiers périphériques de Ouagadougou',
    category: 'evaluations',
    date: 'February 2009',
    year: 2009,
    description: 'Mid-term evaluation of ecological sanitation project in peripheral neighborhoods of Ouagadougou. Comprehensive analysis using OECD-DAC criteria including relevance, effectiveness, efficiency, impact and sustainability.',
    descriptionFr: 'Évaluation à mi-parcours du projet d\'assainissement écologique dans les quartiers périphériques de Ouagadougou. Analyse complète utilisant les critères CAD de l\'OCDE incluant la pertinence, l\'efficacité, l\'efficience, l\'impact et la viabilité.',
    location: 'Ouagadougou, Burkina Faso',
    locationFr: 'Ouagadougou, Burkina Faso',
    region: 'Centre Region',
    regionFr: 'Région du Centre',
    partners: ['Regional Center for Drinking Water and Sanitation (CREPA)'],
    partnersFr: ['Centre Régional pour l\'Eau Potable et l\'Assainissement à faible coût (CREPA)'],
    scope: [
      'Mid-term progress assessment',
      'OECD-DAC criteria evaluation',
      'Community impact analysis',
      'Technical approach review',
      'Recommendations for second phase',
      'Stakeholder engagement assessment'
    ],
    scopeFr: [
      'Évaluation des progrès à mi-parcours',
      'Évaluation selon critères CAD-OCDE',
      'Analyse de l\'impact communautaire',
      'Revue de l\'approche technique',
      'Recommandations pour la deuxième phase',
      'Évaluation de l\'engagement des parties prenantes'
    ],
    status: 'completed',
    tags: ['Ecological Sanitation', 'Urban Sanitation', 'Mid-term Evaluation', 'CREPA'],
    tagsFr: ['Assainissement Écologique', 'Assainissement Urbain', 'Évaluation Mi-parcours', 'CREPA']
  },

  // PROJECT AND PROGRAM MANAGEMENT
  {
    id: 'vreo-2004-2010',
    slug: 'western-water-resources-program-2004-2010',
    title: 'Technical Assistance for Western Water Resources Development Program (VREO)',
    titleFr: 'Assistance Technique à la Maîtrise d\'Œuvre Déléguée du Programme de Valorisation des Ressources en Eau de l\'Ouest (VREO)',
    category: 'management',
    date: '2004-2010',
    year: 2004,
    duration: '6 years',
    description: 'Technical assistance for delegated project management of the Western Water Resources Development Program. Component A: Drinking Water Supply. Component B: Institutional and technical support to water sector.',
    descriptionFr: 'Assistance technique à la maîtrise d\'œuvre déléguée du Programme de Valorisation des Ressources en Eau de l\'Ouest. Composante A : Alimentation en Eau Potable. Composante B : Appui institutionnel et technique au secteur de l\'eau.',
    location: 'Western Burkina Faso',
    locationFr: 'Ouest du Burkina Faso',
    region: 'Western Regions',
    regionFr: 'Régions de l\'Ouest',
    executionPartners: ['SOFRECO France'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil SOFRECO-France'],
    technicalPartners: ['European Union - 8th EDF'],
    technicalPartnersFr: ['Union Européenne - 8ème FED'],
    partners: ['SOFRECO France', 'European Union - 8th EDF'],
    partnersFr: ['SOFRECO France', 'Union Européenne - 8ème FED'],
    scope: [
      'Drinking water supply component management',
      'Institutional support to water sector',
      'Technical capacity building',
      'Infrastructure supervision',
      'Project coordination and reporting',
      'Quality control and monitoring'
    ],
    scopeFr: [
      'Gestion de la composante alimentation en eau potable',
      'Appui institutionnel au secteur de l\'eau',
      'Renforcement des capacités techniques',
      'Supervision des infrastructures',
      'Coordination et rapportage du projet',
      'Contrôle qualité et suivi'
    ],
    featured: true,
    status: 'completed',
    tags: ['Water Resources', 'Program Management', 'EU Funding', 'Capacity Building'],
    tagsFr: ['Ressources en Eau', 'Gestion de Programme', 'Financement UE', 'Renforcement des Capacités']
  },
  {
    id: 'yakouta-2003-2008',
    slug: 'yakouta-dam-control-2003-2008',
    title: 'Control and Monitoring of Yakouta Dam Construction',
    titleFr: 'Contrôle et surveillance des travaux de construction du barrage de Yakouta',
    category: 'management',
    date: '2003-2008',
    year: 2003,
    duration: '5 years',
    capacity: '26.5 million m³',
    description: 'Supervision and quality control of construction works for Yakouta Dam with a capacity of 26.5 million cubic meters. Comprehensive technical monitoring and compliance verification.',
    descriptionFr: 'Supervision et contrôle qualité des travaux de construction du barrage de Yakouta d\'une capacité de 26,5 millions de mètres cubes. Suivi technique complet et vérification de la conformité.',
    location: 'Yakouta, Burkina Faso',
    locationFr: 'Yakouta, Burkina Faso',
    region: 'Burkina Faso',
    regionFr: 'Burkina Faso',
    partners: ['Republic of China (Taiwan)'],
    partnersFr: ['République de Chine (Taïwan)'],
    scope: [
      'Construction supervision',
      'Quality control and assurance',
      'Technical compliance verification',
      'Progress monitoring and reporting',
      'Safety oversight',
      'Contractor coordination'
    ],
    scopeFr: [
      'Supervision de la construction',
      'Contrôle et assurance qualité',
      'Vérification de conformité technique',
      'Suivi des progrès et rapportage',
      'Supervision de la sécurité',
      'Coordination des entrepreneurs'
    ],
    featured: true,
    status: 'completed',
    tags: ['Dam Construction', 'Quality Control', 'Project Supervision', 'Taiwan Cooperation'],
    tagsFr: ['Construction de Barrage', 'Contrôle Qualité', 'Supervision de Projet', 'Coopération Taïwan']
  },
  {
    id: 'soum-2005-2007',
    slug: 'soum-dam-control-2005-2007',
    title: 'Monitoring and Control of Soum Dam Construction',
    titleFr: 'Suivi et contrôle des travaux de construction du barrage de Soum',
    category: 'management',
    date: '2005-2007',
    year: 2005,
    duration: '2 years',
    capacity: '83 million m³',
    description: 'Quality control and supervision of Soum Dam construction in Boulkiemdé Province with a capacity of 83 million cubic meters. Project monitoring for one of the largest dams in Burkina Faso.',
    descriptionFr: 'Contrôle qualité et supervision de la construction du barrage de Soum dans la province du Boulkiemdé d\'une capacité de 83 millions de mètres cubes. Suivi de projet pour l\'un des plus grands barrages du Burkina Faso.',
    location: 'Boulkiemdé Province',
    locationFr: 'Province du Boulkiemdé',
    region: 'Centre-Ouest Region',
    regionFr: 'Région du Centre-Ouest',
    executionPartners: ['PACE Engineering Consulting - Kuwait'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil PACE - Koweït'],
    technicalPartners: ['State of Burkina Faso', 'Islamic Development Bank (IDB)', 'Kuwait'],
    technicalPartnersFr: ['État du Burkina Faso', 'Banque Islamique de Développement (BID)', 'Koweït'],
    partners: ['PACE - Kuwait', 'Islamic Development Bank', 'State of Burkina Faso'],
    partnersFr: ['PACE - Koweït', 'Banque Islamique de Développement', 'État du Burkina Faso'],
    scope: [
      'Large-scale dam construction monitoring',
      'Technical supervision',
      'Quality assurance protocols',
      'Contractor performance oversight',
      'Environmental compliance monitoring',
      'Safety management'
    ],
    scopeFr: [
      'Suivi de construction de grand barrage',
      'Supervision technique',
      'Protocoles d\'assurance qualité',
      'Supervision de la performance des entrepreneurs',
      'Suivi de conformité environnementale',
      'Gestion de la sécurité'
    ],
    featured: true,
    status: 'completed',
    tags: ['Large Dam', 'Construction Control', 'IDB', 'Water Storage'],
    tagsFr: ['Grand Barrage', 'Contrôle de Construction', 'BID', 'Stockage d\'Eau']
  },
  {
    id: 'bobo-sanitation-2013-2015',
    slug: 'bobo-sanitation-2013-2015',
    title: 'Social Engineering and Marketing for Sanitation Facilities in Bobo-Dioulasso',
    titleFr: 'Ingénierie sociale et marketing des ouvrages d\'assainissement autonome amélioré à Bobo-Dioulasso',
    category: 'management',
    date: '2013-2015',
    year: 2013,
    duration: '2 years',
    description: 'Social intermediation and supervision of improved autonomous sanitation works in Bobo-Dioulasso. Training of artisans and quality control of sanitation construction.',
    descriptionFr: 'Intermédiation sociale et supervision des ouvrages d\'assainissement autonome amélioré à Bobo-Dioulasso. Formation des artisans et contrôle qualité de la construction d\'assainissement.',
    location: 'Bobo-Dioulasso, Burkina Faso',
    locationFr: 'Bobo-Dioulasso, Burkina Faso',
    region: 'Hauts-Bassins Region',
    regionFr: 'Région des Hauts-Bassins',
    executionPartners: ['CODEX Engineering Consulting - Burkina Faso'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil CODEX - Burkina Faso'],
    technicalPartners: ['National Office for Water and Sanitation (ONEA)'],
    technicalPartnersFr: ['Office National de l\'Eau et de l\'Assainissement (ONEA)'],
    partners: ['CODEX Burkina Faso', 'ONEA'],
    partnersFr: ['CODEX Burkina Faso', 'ONEA'],
    scope: [
      'Social intermediation and mobilization',
      'Artisan training and capacity building',
      'Construction supervision',
      'Quality control of sanitation facilities',
      'Marketing of improved sanitation',
      'Community engagement'
    ],
    scopeFr: [
      'Intermédiation et mobilisation sociale',
      'Formation et renforcement des capacités des artisans',
      'Supervision de la construction',
      'Contrôle qualité des ouvrages d\'assainissement',
      'Marketing de l\'assainissement amélioré',
      'Engagement communautaire'
    ],
    status: 'completed',
    tags: ['Urban Sanitation', 'Social Marketing', 'Artisan Training', 'ONEA'],
    tagsFr: ['Assainissement Urbain', 'Marketing Social', 'Formation d\'Artisans', 'ONEA']
  },
  {
    id: 'forages-1000-2004-2008',
    slug: '1000-boreholes-2004-2008',
    title: 'Monitoring and Administration of 1000 Successful Boreholes Project',
    titleFr: 'Suivi et administration des travaux de réalisation de 1000 forages positifs',
    category: 'management',
    date: '2004-2008',
    year: 2004,
    duration: '4 years',
    description: 'Comprehensive program coordination and on-site quality control for 1000 successful boreholes across Burkina Faso. Drilling supervision, well construction and hand-pump installation monitoring.',
    descriptionFr: 'Coordination complète du programme et contrôle qualité sur site pour 1000 forages positifs à travers le Burkina Faso. Supervision des forages, construction de puits et suivi de l\'installation de pompes à motricité humaine.',
    location: 'Burkina Faso (National)',
    locationFr: 'Burkina Faso (National)',
    region: 'Multiple Regions',
    regionFr: 'Régions Multiples',
    executionPartners: ['BAFRENAH Engineering Consulting - Burkina Faso'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil BAFRENAH - Burkina Faso'],
    technicalPartners: ['Republic of China (Taiwan)'],
    technicalPartnersFr: ['République de Chine (Taïwan)'],
    partners: ['BAFRENAH Burkina Faso', 'Republic of China (Taiwan)'],
    partnersFr: ['BAFRENAH Burkina Faso', 'République de Chine (Taïwan)'],
    scope: [
      'Program planning and coordination',
      'On-site drilling supervision',
      'Well construction quality control',
      'Hand-pump installation monitoring',
      'Technical compliance verification',
      'Progress reporting and documentation'
    ],
    scopeFr: [
      'Planification et coordination du programme',
      'Supervision sur site des forages',
      'Contrôle qualité de la construction de puits',
      'Suivi de l\'installation de pompes à motricité humaine',
      'Vérification de conformité technique',
      'Rapportage et documentation des progrès'
    ],
    featured: true,
    status: 'completed',
    tags: ['Boreholes', 'Rural Water Supply', 'Quality Control', 'Large-Scale Program'],
    tagsFr: ['Forages', 'Eau Potable Rurale', 'Contrôle Qualité', 'Programme à Grande Échelle']
  },
  {
    id: 'forages-100-centre-sud',
    slug: '100-boreholes-centre-sud',
    title: 'Technical Project Management for 100 Successful Boreholes in Centre-Sud Region',
    titleFr: 'Maîtrise d\'œuvre technique pour le contrôle des travaux de 100 forages positifs dans la région du Centre-Sud',
    category: 'management',
    date: 'Year not specified',
    year: 2010,
    description: 'Technical project management including social intermediation control, borehole siting, drilling supervision and hand-pump installation for 100 boreholes in Centre-Sud region.',
    descriptionFr: 'Maîtrise d\'œuvre technique incluant le contrôle de l\'intermédiation sociale, l\'implantation des forages, la supervision des travaux de forage et de pose de pompes à motricité humaine pour 100 forages dans la région du Centre-Sud.',
    location: 'Centre-Sud Region',
    locationFr: 'Région du Centre-Sud',
    region: 'Centre-Sud',
    regionFr: 'Centre-Sud',
    executionPartners: ['SEROHS Engineering Consulting - Mali'],
    executionPartnersFr: ['Bureau d\'ingénieur conseil SEROHS - Mali'],
    technicalPartners: ['West African Economic and Monetary Union (WAEMU)', '300 Successful Boreholes Project'],
    technicalPartnersFr: ['Union Économique et Monétaire de l\'Afrique de l\'Ouest (UEMOA)', 'Projet 300 forages positifs'],
    partners: ['SEROHS Mali', 'WAEMU'],
    partnersFr: ['SEROHS Mali', 'UEMOA'],
    scope: [
      'Social intermediation oversight',
      'Borehole site selection and surveying',
      'Drilling works supervision',
      'Hand-pump installation control',
      'Quality assurance',
      'Community mobilization verification'
    ],
    scopeFr: [
      'Supervision de l\'intermédiation sociale',
      'Sélection et levé des sites de forages',
      'Supervision des travaux de forage',
      'Contrôle de l\'installation de pompes',
      'Assurance qualité',
      'Vérification de la mobilisation communautaire'
    ],
    status: 'completed',
    tags: ['Boreholes', 'WAEMU', 'Rural Water', 'Project Management'],
    tagsFr: ['Forages', 'UEMOA', 'Eau Rurale', 'Gestion de Projet']
  },

  // URBAN SERVICES MANAGEMENT
  {
    id: 'water-supply-contracts-2021-2025',
    slug: 'water-supply-management-contracts-2021-2025',
    title: 'Drinking Water Supply Management Contracts',
    titleFr: 'Contrats de gestion des adductions d\'eau potable des communes',
    category: 'urban-services',
    date: '2021-2025',
    year: 2021,
    duration: '4 years',
    description: 'Management contracts for drinking water supply systems in rural communes. Includes maintenance of installations, technical and financial reporting, improvement proposals, equipment maintenance and renewal, and network extension works.',
    descriptionFr: 'Contrats de gestion des systèmes d\'adduction d\'eau potable dans les communes rurales. Comprend le maintien du fonctionnement des installations, les comptes rendus techniques et financiers, les propositions de mesures de renforcement, l\'entretien/réparation/renouvellement des équipements et les travaux d\'extension des réseaux.',
    location: 'Multiple Rural Communes',
    locationFr: 'Communes Rurales Multiples',
    region: 'Centre-Sud, Centre-Est, Plateau Central',
    regionFr: 'Centre-Sud, Centre-Est, Plateau Central',
    partners: ['State of Burkina Faso', 'Rural Communes'],
    partnersFr: ['État du Burkina Faso', 'Communes Rurales'],
    scope: [
      'Operation and maintenance of water supply systems',
      'Technical reporting and monitoring',
      'Financial management and reporting',
      'Improvement and strengthening proposals',
      'Equipment maintenance and renewal',
      'Network extension planning and execution',
      'Service quality assurance'
    ],
    scopeFr: [
      'Exploitation et maintenance des systèmes d\'eau',
      'Rapportage et suivi technique',
      'Gestion et rapportage financier',
      'Propositions d\'amélioration et de renforcement',
      'Maintenance et renouvellement d\'équipements',
      'Planification et exécution d\'extensions de réseau',
      'Assurance de la qualité du service'
    ],
    featured: true,
    status: 'ongoing',
    tags: ['Water Service Management', 'Rural Communes', 'O&M', 'Service Extension'],
    tagsFr: ['Gestion de Services d\'Eau', 'Communes Rurales', 'Exploitation et Maintenance', 'Extension de Services']
  },

  // OTHER ACHIEVEMENTS
  {
    id: 'photovoltaic-installation',
    slug: 'photovoltaic-generator-installation',
    title: 'Supply and Installation of Photovoltaic Generator',
    titleFr: 'Fourniture et pose d\'un générateur photovoltaïque',
    category: 'other',
    date: 'Recent',
    year: 2020,
    capacity: '19 panels - 270V',
    description: 'Supply and installation of solar photovoltaic generator system with 19 solar panels producing 270 volts for water pumping applications.',
    descriptionFr: 'Fourniture et installation d\'un système de générateur photovoltaïque solaire avec 19 panneaux solaires produisant 270 volts pour des applications de pompage d\'eau.',
    location: 'Burkina Faso',
    locationFr: 'Burkina Faso',
    region: 'Burkina Faso',
    regionFr: 'Burkina Faso',
    partners: ['Private Client'],
    partnersFr: ['Client Privé'],
    scope: [
      'Solar system design',
      'Equipment procurement',
      'Installation and commissioning',
      'Testing and validation'
    ],
    scopeFr: [
      'Conception du système solaire',
      'Acquisition d\'équipements',
      'Installation et mise en service',
      'Tests et validation'
    ],
    status: 'completed',
    tags: ['Solar Energy', 'Water Pumping', 'Renewable Energy'],
    tagsFr: ['Énergie Solaire', 'Pompage d\'Eau', 'Énergie Renouvelable']
  },
  {
    id: 'water-pipe-repair',
    slug: 'water-pipe-repair-works',
    title: 'Water Pipe Repair Works',
    titleFr: 'Travaux de réparation de conduites d\'eau',
    category: 'other',
    date: 'Ongoing',
    year: 2023,
    description: 'Repair and rehabilitation of water distribution pipes including leak detection, pipe replacement, and system restoration.',
    descriptionFr: 'Réparation et réhabilitation de conduites de distribution d\'eau incluant la détection de fuites, le remplacement de tuyaux et la restauration du système.',
    location: 'Multiple Locations',
    locationFr: 'Localisations Multiples',
    region: 'Burkina Faso',
    regionFr: 'Burkina Faso',
    partners: ['Various Clients'],
    partnersFr: ['Clients Divers'],
    scope: [
      'Leak detection',
      'Pipe repair and replacement',
      'System testing',
      'Quality assurance'
    ],
    scopeFr: [
      'Détection de fuites',
      'Réparation et remplacement de tuyaux',
      'Tests du système',
      'Assurance qualité'
    ],
    status: 'ongoing',
    tags: ['Pipe Repair', 'Maintenance', 'Water Distribution'],
    tagsFr: ['Réparation de Conduites', 'Maintenance', 'Distribution d\'Eau']
  },
  {
    id: 'water-meter-installation',
    slug: 'water-meter-installation',
    title: 'Supply and Installation of Water Meters',
    titleFr: 'Fourniture et pose de compteurs d\'eau',
    category: 'other',
    date: 'Ongoing',
    year: 2023,
    description: 'Supply and professional installation of water meters for residential, commercial and municipal applications.',
    descriptionFr: 'Fourniture et installation professionnelle de compteurs d\'eau pour applications résidentielles, commerciales et municipales.',
    location: 'Multiple Locations',
    locationFr: 'Localisations Multiples',
    region: 'Burkina Faso',
    regionFr: 'Burkina Faso',
    partners: ['Various Clients'],
    partnersFr: ['Clients Divers'],
    scope: [
      'Water meter procurement',
      'Installation services',
      'Calibration and testing',
      'Customer training'
    ],
    scopeFr: [
      'Acquisition de compteurs d\'eau',
      'Services d\'installation',
      'Calibration et tests',
      'Formation des clients'
    ],
    status: 'ongoing',
    tags: ['Water Meters', 'Installation', 'Metering'],
    tagsFr: ['Compteurs d\'Eau', 'Installation', 'Comptage']
  },
  {
    id: 'submersible-pump-installation',
    slug: 'submersible-pump-installation',
    title: 'Supply and Installation of Submersible Pumps',
    titleFr: 'Fourniture et pose de pompes immergées',
    category: 'other',
    date: 'Ongoing',
    year: 2023,
    description: 'Supply and installation of submersible pumps for boreholes and deep wells including equipment selection, installation and commissioning.',
    descriptionFr: 'Fourniture et installation de pompes immergées pour forages et puits profonds incluant la sélection d\'équipements, l\'installation et la mise en service.',
    location: 'Multiple Locations',
    locationFr: 'Localisations Multiples',
    region: 'Burkina Faso',
    regionFr: 'Burkina Faso',
    partners: ['Various Clients'],
    partnersFr: ['Clients Divers'],
    scope: [
      'Pump selection and sizing',
      'Equipment procurement',
      'Installation and testing',
      'Performance verification',
      'Maintenance support'
    ],
    scopeFr: [
      'Sélection et dimensionnement de pompes',
      'Acquisition d\'équipements',
      'Installation et tests',
      'Vérification de performance',
      'Support de maintenance'
    ],
    status: 'ongoing',
    tags: ['Submersible Pumps', 'Boreholes', 'Water Supply'],
    tagsFr: ['Pompes Immergées', 'Forages', 'Approvisionnement en Eau']
  }
]

// Helper functions
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured === true)
}

export function getProjectsByYear(year: number): Project[] {
  return projects.filter(p => p.year === year)
}

export function getProjectsByRegion(region: string): Project[] {
  return projects.filter(p => p.region.toLowerCase().includes(region.toLowerCase()))
}

export function getOngoingProjects(): Project[] {
  return projects.filter(p => p.status === 'ongoing')
}

export function getCompletedProjects(): Project[] {
  return projects.filter(p => p.status === 'completed')
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectYears(): number[] {
  const years = projects.map(p => p.year)
  return [...new Set(years)].sort((a, b) => b - a)
}

export function getProjectStats() {
  return {
    total: projects.length,
    studies: getProjectsByCategory('studies').length,
    evaluations: getProjectsByCategory('evaluations').length,
    management: getProjectsByCategory('management').length,
    urbanServices: getProjectsByCategory('urban-services').length,
    other: getProjectsByCategory('other').length,
    ongoing: getOngoingProjects().length,
    completed: getCompletedProjects().length,
    featured: getFeaturedProjects().length
  }
}
