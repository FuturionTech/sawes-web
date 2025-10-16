export interface Publication {
  id: string
  type: 'technical-report' | 'case-study' | 'policy-brief' | 'training-material' | 'annual-report' | 'guideline'
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  thumbnail?: string
  file?: string
  fileSize?: string
  externalLink?: string
  date: string
  year: number
  category: string[]
  tags: string[]
  language: 'fr' | 'en' | 'both'
  authors?: string[]
  partner?: string
  downloadCount?: number
}

export const publications: Publication[] = [
  {
    id: 'pub-001',
    type: 'technical-report',
    title: {
      fr: 'Plan d\'Action de Mise en Œuvre de la Politique des Ressources en Eau de l\'Afrique de l\'Ouest',
      en: 'Implementation Action Plan for West African Water Resources Policy'
    },
    description: {
      fr: 'Rapport technique détaillant les actions pour améliorer la coordination et l\'harmonisation des interventions régionales dans le secteur de l\'eau. Inclut des analyses par pays et des recommandations stratégiques pour le court, moyen et long terme.',
      en: 'Technical report detailing actions to improve coordination and harmonization of regional interventions in the water sector. Includes country-by-country analyses and strategic recommendations for the short, medium and long term.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
    fileSize: '3.2 MB',
    date: '2012-05-15',
    year: 2012,
    category: ['regional', 'policy', 'water'],
    tags: ['CEDEAO', 'politique eau', 'Afrique Ouest', 'coordination régionale'],
    language: 'fr',
    authors: ['SAWES', 'CCRE-CEDEAO'],
    partner: 'ECOWAS Water Resources Coordination Center',
    downloadCount: 245
  },
  {
    id: 'pub-002',
    type: 'technical-report',
    title: {
      fr: 'Programme National d\'Approvisionnement en Eau Potable et d\'Assainissement à l\'Horizon 2015',
      en: 'National Drinking Water Supply and Sanitation Program to 2015'
    },
    description: {
      fr: 'Étude complète incluant la situation de référence 2005, l\'adaptation des stratégies nationales et un plan d\'investissement 2006-2015 aligné sur les Objectifs du Millénaire pour le Développement.',
      en: 'Comprehensive study including 2005 baseline situation, adaptation of national strategies and a 2006-2015 investment plan aligned with the Millennium Development Goals.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    fileSize: '4.8 MB',
    date: '2006-10-01',
    year: 2006,
    category: ['planning', 'water', 'sanitation'],
    tags: ['PNAEPA', 'OMD', 'planification', 'investissement'],
    language: 'fr',
    authors: ['SAWES', 'Bureau EDE Sénégal'],
    partner: 'African Development Bank',
    downloadCount: 189
  },
  {
    id: 'pub-003',
    type: 'case-study',
    title: {
      fr: 'Évaluation Rétrospective du Projet de Mise en Sécurité du Barrage de Bagré',
      en: 'Retrospective Evaluation of Bagré Dam Safety Project'
    },
    description: {
      fr: 'Analyse évaluative selon les critères du CAD de l\'OCDE : pertinence, efficacité, efficience, impact et viabilité. Établissement d\'un bilan global du projet depuis son démarrage jusqu\'à son achèvement.',
      en: 'Evaluative analysis according to OECD DAC criteria: relevance, effectiveness, efficiency, impact and sustainability. Comprehensive assessment of the project from start to completion.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
    fileSize: '2.1 MB',
    date: '2009-06-30',
    year: 2009,
    category: ['evaluation', 'infrastructure', 'dams'],
    tags: ['Bagré', 'barrage', 'évaluation', 'AFD'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'French Development Agency (AFD)',
    downloadCount: 156
  },
  {
    id: 'pub-004',
    type: 'guideline',
    title: {
      fr: 'Guide des Approches d\'Intervention en Eau, Assainissement et Hygiène en Milieu Scolaire',
      en: 'Guide to WASH Intervention Approaches in Schools'
    },
    description: {
      fr: 'Capitalisation des expériences et propositions pour l\'harmonisation des approches WASH en milieu scolaire primaire au Burkina Faso. Inclut des recommandations pratiques et des études de cas.',
      en: 'Capitalization of experiences and proposals for harmonizing WASH approaches in primary schools in Burkina Faso. Includes practical recommendations and case studies.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop',
    fileSize: '1.8 MB',
    date: '2007-05-20',
    year: 2007,
    category: ['education', 'wash', 'guidelines'],
    tags: ['WASH', 'écoles', 'guide', 'bonnes pratiques'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'UNICEF Burkina Faso',
    downloadCount: 312
  },
  {
    id: 'pub-005',
    type: 'technical-report',
    title: {
      fr: 'Étude de Barrage et d\'Aménagement Hydroagricole de Liriba',
      en: 'Dam and Hydro-Agricultural Development Study of Liriba'
    },
    description: {
      fr: 'Étude technique complète pour la conception d\'un barrage et l\'aménagement d\'un périmètre irrigué dans la province de Poni. Inclut études hydrologiques, géotechniques et socio-économiques.',
      en: 'Comprehensive technical study for dam design and irrigated perimeter development in Poni province. Includes hydrological, geotechnical and socio-economic studies.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=400&h=300&fit=crop',
    fileSize: '5.4 MB',
    date: '2003-12-15',
    year: 2003,
    category: ['infrastructure', 'agriculture', 'dams'],
    tags: ['barrage', 'irrigation', 'Liriba', 'Poni'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'State of Burkina Faso',
    downloadCount: 98
  },
  {
    id: 'pub-006',
    type: 'policy-brief',
    title: {
      fr: 'Stratégies Régionales d\'Appui aux Petites Villes - Région Centre-Est',
      en: 'Regional Support Strategies for Small Towns - Centre-Est Region'
    },
    description: {
      fr: 'Recherche-action sur l\'évaluation des besoins et demandes des petites villes en matière d\'accès au financement, aux formations et à l\'appui conseil pour les services d\'eau et d\'assainissement.',
      en: 'Action research on assessing small towns\' needs and demands for access to financing, training and advisory support for water and sanitation services.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    fileSize: '1.5 MB',
    date: '2009-03-10',
    year: 2009,
    category: ['urban-services', 'policy', 'capacity-building'],
    tags: ['petites villes', 'financement', 'formation', 'conseil'],
    language: 'fr',
    authors: ['SAWES', 'Programme Solidarité Eau'],
    partner: 'Solidarity Water Program',
    downloadCount: 134
  },
  {
    id: 'pub-007',
    type: 'technical-report',
    title: {
      fr: 'Étude sur les Organisations de Bassins Transfrontaliers en Afrique de l\'Ouest',
      en: 'Study on Transboundary Basin Organizations in West Africa'
    },
    description: {
      fr: 'État des lieux, définition des contours juridiques et institutionnels, évaluation des implications financières et feuille de route pour la promotion de trois nouvelles organisations de bassins transfrontaliers.',
      en: 'Situation analysis, definition of legal and institutional frameworks, assessment of financial implications and roadmap for promoting three new transboundary basin organizations.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
    fileSize: '2.9 MB',
    date: '2010-08-25',
    year: 2010,
    category: ['regional', 'transboundary', 'governance'],
    tags: ['bassins transfrontaliers', 'gouvernance', 'CEDEAO', 'organisations'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'ECOWAS Water Resources Coordination Center',
    downloadCount: 167
  },
  {
    id: 'pub-008',
    type: 'case-study',
    title: {
      fr: 'Évaluation du Projet d\'Assainissement Écologique à Ouagadougou',
      en: 'Evaluation of Ecological Sanitation Project in Ouagadougou'
    },
    description: {
      fr: 'Évaluation à mi-parcours analysant la pertinence, l\'efficacité, l\'efficience, l\'impact et la viabilité du projet d\'assainissement écologique dans les quartiers périphériques de Ouagadougou.',
      en: 'Mid-term evaluation analyzing the relevance, effectiveness, efficiency, impact and sustainability of the ecological sanitation project in peripheral neighborhoods of Ouagadougou.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
    fileSize: '1.7 MB',
    date: '2009-02-15',
    year: 2009,
    category: ['sanitation', 'evaluation', 'urban'],
    tags: ['assainissement écologique', 'Ouagadougou', 'évaluation'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'CREPA',
    downloadCount: 203
  },
  {
    id: 'pub-009',
    type: 'case-study',
    title: {
      fr: 'Contrôle des Travaux du Barrage de Soum - Province du Boulkiemdé',
      en: 'Soum Dam Construction Control - Boulkiemdé Province'
    },
    description: {
      fr: 'Rapport de suivi et contrôle des travaux de construction du barrage de Soum, un ouvrage de 83 millions de m³ de capacité réalisé entre 2005 et 2007 avec le financement de la BID.',
      en: 'Monitoring and control report for Soum Dam construction, an 83 million m³ capacity structure built between 2005 and 2007 with IsDB funding.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=400&h=300&fit=crop',
    fileSize: '3.6 MB',
    date: '2007-12-15',
    year: 2007,
    category: ['infrastructure', 'dams', 'case-study'],
    tags: ['barrage', 'Soum', 'Boulkiemdé', 'contrôle'],
    language: 'fr',
    authors: ['SAWES', 'Bureau PACE Koweit'],
    partner: 'Islamic Development Bank / State of Burkina Faso',
    downloadCount: 142
  },
  {
    id: 'pub-010',
    type: 'case-study',
    title: {
      fr: 'Étude de Barrage et d\'Aménagement Hydroagricole de Dadouné',
      en: 'Dam and Hydro-Agricultural Development Study of Dadouné'
    },
    description: {
      fr: 'Étude technique de conception d\'un barrage et d\'aménagement d\'un périmètre irrigué dans la province de Ioba. Analyse hydrologique, géotechnique et faisabilité socio-économique.',
      en: 'Technical design study for a dam and irrigated perimeter development in Ioba province. Hydrological, geotechnical and socio-economic feasibility analysis.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=400&h=300&fit=crop',
    fileSize: '4.7 MB',
    date: '2003-11-20',
    year: 2003,
    category: ['infrastructure', 'agriculture', 'dams'],
    tags: ['barrage', 'irrigation', 'Dadouné', 'Ioba'],
    language: 'fr',
    authors: ['SAWES'],
    partner: 'State of Burkina Faso',
    downloadCount: 87
  }
]

export function getPublicationById(id: string): Publication | undefined {
  return publications.find(pub => pub.id === id)
}

export function getPublicationsByType(type: string): Publication[] {
  return publications.filter(pub => pub.type === type)
}

export function getPublicationsByCategory(category: string): Publication[] {
  return publications.filter(pub => pub.category.includes(category))
}

export function getPublicationsByYear(year: number): Publication[] {
  return publications.filter(pub => pub.year === year)
}

export function getRecentPublications(limit: number = 6): Publication[] {
  return [...publications]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getPublicationYears(): number[] {
  const years = publications.map(pub => pub.year)
  return [...new Set(years)].sort((a, b) => b - a)
}
