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
    type: 'training-material',
    title: {
      fr: 'Manuel de Gestion Technique des Adductions d\'Eau Potable en Milieu Rural',
      en: 'Technical Management Manual for Rural Water Supply Systems'
    },
    description: {
      fr: 'Guide pratique pour les gestionnaires de systèmes d\'approvisionnement en eau potable : exploitation, maintenance préventive et corrective, gestion administrative et financière.',
      en: 'Practical guide for water supply system managers: operation, preventive and corrective maintenance, administrative and financial management.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop',
    fileSize: '2.3 MB',
    date: '2020-06-01',
    year: 2020,
    category: ['training', 'water', 'management'],
    tags: ['manuel', 'gestion technique', 'AEP', 'rural'],
    language: 'fr',
    authors: ['SAWES'],
    downloadCount: 421
  },
  {
    id: 'pub-010',
    type: 'annual-report',
    title: {
      fr: 'Rapport Annuel SAWES 2024',
      en: 'SAWES Annual Report 2024'
    },
    description: {
      fr: 'Bilan des activités 2024 : projets réalisés, partenariats développés, innovations techniques, formation et renforcement des capacités, perspectives 2025.',
      en: '2024 activities summary: completed projects, partnerships developed, technical innovations, training and capacity building, 2025 outlook.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    fileSize: '6.2 MB',
    date: '2024-12-31',
    year: 2024,
    category: ['annual-report', 'corporate'],
    tags: ['rapport annuel', 'bilan', 'activités', '2024'],
    language: 'both',
    authors: ['Direction SAWES'],
    downloadCount: 287
  },
  {
    id: 'pub-011',
    type: 'guideline',
    title: {
      fr: 'Guide des Bonnes Pratiques en Gestion de Forages',
      en: 'Best Practices Guide for Borehole Management'
    },
    description: {
      fr: 'Recommandations techniques pour l\'implantation, le forage, l\'équipement et la maintenance des forages d\'eau potable. Inclut des fiches techniques et des check-lists.',
      en: 'Technical recommendations for siting, drilling, equipping and maintaining drinking water boreholes. Includes technical sheets and checklists.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop',
    fileSize: '1.9 MB',
    date: '2018-09-15',
    year: 2018,
    category: ['guidelines', 'water', 'technical'],
    tags: ['forages', 'bonnes pratiques', 'maintenance', 'technique'],
    language: 'fr',
    authors: ['SAWES'],
    downloadCount: 356
  },
  {
    id: 'pub-012',
    type: 'case-study',
    title: {
      fr: 'Étude de Cas : Gestion Communautaire de l\'Eau dans la Région du Centre-Sud',
      en: 'Case Study: Community Water Management in Centre-Sud Region'
    },
    description: {
      fr: 'Retour d\'expérience sur 10 ans de gestion communautaire des points d\'eau : défis, succès, leçons apprises et recommandations pour la réplication.',
      en: '10-year experience feedback on community water point management: challenges, successes, lessons learned and recommendations for replication.'
    },
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
    fileSize: '2.6 MB',
    date: '2021-11-20',
    year: 2021,
    category: ['case-study', 'community', 'water'],
    tags: ['gestion communautaire', 'retour expérience', 'Centre-Sud'],
    language: 'fr',
    authors: ['SAWES'],
    downloadCount: 198
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
