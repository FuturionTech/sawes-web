export interface Partner {
  id: string
  name: string
  fullName: {
    fr: string
    en: string
  }
  logo?: string
  category: 'international' | 'bilateral' | 'ngo' | 'private' | 'government' | 'academic'
  description: {
    fr: string
    en: string
  }
  projects?: string[]
  website?: string
  region?: string
  yearStarted?: number
  featured?: boolean
}

export const partners: Partner[] = [
  // INTERNATIONAL ORGANIZATIONS
  {
    id: 'afd',
    name: 'AFD',
    fullName: {
      fr: 'Agence Française de Développement',
      en: 'French Development Agency'
    },
    category: 'international',
    description: {
      fr: 'Partenaire financier et technique pour les projets de développement, notamment dans les secteurs de l\'eau et de l\'assainissement.',
      en: 'Financial and technical partner for development projects, particularly in water and sanitation sectors.'
    },
    projects: ['bagre-2009', 'school-2009'],
    website: 'https://www.afd.fr',
    region: 'International',
    yearStarted: 2009,
    featured: true
  },
  {
    id: 'afdb',
    name: 'BAD',
    fullName: {
      fr: 'Banque Africaine de Développement',
      en: 'African Development Bank'
    },
    category: 'international',
    description: {
      fr: 'Soutien financier majeur pour les programmes nationaux d\'approvisionnement en eau potable et d\'assainissement.',
      en: 'Major financial support for national drinking water supply and sanitation programs.'
    },
    projects: ['pnaepa-2006'],
    website: 'https://www.afdb.org',
    region: 'Africa',
    yearStarted: 2006,
    featured: true
  },
  {
    id: 'ecowas',
    name: 'CEDEAO / CCRE',
    fullName: {
      fr: 'Centre de Coordination des Ressources en Eau - CEDEAO',
      en: 'Water Resources Coordination Center - ECOWAS'
    },
    category: 'international',
    description: {
      fr: 'Coordination régionale pour la gestion des ressources en eau et des bassins transfrontaliers en Afrique de l\'Ouest.',
      en: 'Regional coordination for water resources management and transboundary basins in West Africa.'
    },
    projects: ['cedeao-2012', 'basins-2010'],
    website: 'https://www.ecowas.int',
    region: 'West Africa',
    yearStarted: 2010,
    featured: true
  },
  {
    id: 'unicef',
    name: 'UNICEF',
    fullName: {
      fr: 'Fonds des Nations Unies pour l\'Enfance',
      en: 'United Nations Children\'s Fund'
    },
    category: 'international',
    description: {
      fr: 'Partenaire stratégique pour les projets d\'eau, d\'hygiène et d\'assainissement en milieu scolaire.',
      en: 'Strategic partner for water, hygiene and sanitation projects in school environments.'
    },
    projects: ['unicef-2007'],
    website: 'https://www.unicef.org',
    region: 'International',
    yearStarted: 2007,
    featured: true
  },
  {
    id: 'eu-edf',
    name: 'UE-FED',
    fullName: {
      fr: 'Union Européenne - Fonds Européen de Développement',
      en: 'European Union - European Development Fund'
    },
    category: 'international',
    description: {
      fr: 'Financement de programmes majeurs de valorisation des ressources en eau et de développement régional.',
      en: 'Funding for major water resources development and regional development programs.'
    },
    projects: ['vreo-2004'],
    website: 'https://ec.europa.eu',
    region: 'International',
    yearStarted: 2004,
    featured: true
  },
  {
    id: 'world-bank',
    name: 'Banque Mondiale',
    fullName: {
      fr: 'Banque Mondiale',
      en: 'World Bank'
    },
    category: 'international',
    description: {
      fr: 'Partenaire pour le financement de projets d\'infrastructure hydraulique et de développement durable.',
      en: 'Partner for financing hydraulic infrastructure and sustainable development projects.'
    },
    website: 'https://www.worldbank.org',
    region: 'International',
    featured: false
  },
  {
    id: 'undp',
    name: 'PNUD',
    fullName: {
      fr: 'Programme des Nations Unies pour le Développement',
      en: 'United Nations Development Programme'
    },
    category: 'international',
    description: {
      fr: 'Collaboration pour les programmes de développement durable et de renforcement des capacités.',
      en: 'Collaboration on sustainable development and capacity building programs.'
    },
    website: 'https://www.undp.org',
    region: 'International',
    featured: false
  },

  // BILATERAL COOPERATION
  {
    id: 'giz',
    name: 'GIZ',
    fullName: {
      fr: 'Coopération Internationale Allemande',
      en: 'German International Cooperation'
    },
    category: 'bilateral',
    description: {
      fr: 'Coopération technique allemande pour le développement des capacités dans le secteur de l\'eau.',
      en: 'German technical cooperation for capacity development in the water sector.'
    },
    website: 'https://www.giz.de',
    region: 'Europe',
    featured: false
  },
  {
    id: 'taiwan',
    name: 'République de Chine (Taïwan)',
    fullName: {
      fr: 'République de Chine (Taïwan)',
      en: 'Republic of China (Taiwan)'
    },
    category: 'bilateral',
    description: {
      fr: 'Partenaire majeur pour la construction de barrages et la réalisation de forages positifs.',
      en: 'Major partner for dam construction and successful borehole projects.'
    },
    projects: ['yakouta-2003', 'forages-1000'],
    region: 'Asia',
    yearStarted: 2003,
    featured: true
  },
  {
    id: 'idb-kuwait',
    name: 'BID / Koweït',
    fullName: {
      fr: 'Banque Islamique de Développement / Koweït',
      en: 'Islamic Development Bank / Kuwait'
    },
    category: 'bilateral',
    description: {
      fr: 'Financement de projets d\'infrastructure hydraulique majeurs, notamment les barrages.',
      en: 'Financing of major hydraulic infrastructure projects, particularly dams.'
    },
    projects: ['soum-2005'],
    region: 'Middle East',
    yearStarted: 2005,
    featured: false
  },
  {
    id: 'usaid',
    name: 'USAID',
    fullName: {
      fr: 'Agence des États-Unis pour le Développement International',
      en: 'United States Agency for International Development'
    },
    category: 'bilateral',
    description: {
      fr: 'Soutien aux initiatives de développement durable dans le secteur de l\'eau et de l\'environnement.',
      en: 'Support for sustainable development initiatives in water and environment sector.'
    },
    website: 'https://www.usaid.gov',
    region: 'North America',
    featured: false
  },
  {
    id: 'jica',
    name: 'JICA',
    fullName: {
      fr: 'Agence Japonaise de Coopération Internationale',
      en: 'Japan International Cooperation Agency'
    },
    category: 'bilateral',
    description: {
      fr: 'Coopération technique japonaise pour les projets d\'eau et d\'assainissement.',
      en: 'Japanese technical cooperation for water and sanitation projects.'
    },
    website: 'https://www.jica.go.jp',
    region: 'Asia',
    featured: false
  },

  // NGOs & CIVIL SOCIETY
  {
    id: 'pse-pdm',
    name: 'Programme Solidarité Eau / PDM',
    fullName: {
      fr: 'Programme Solidarité Eau / Partenariat pour le Développement Municipal',
      en: 'Water Solidarity Program / Municipal Development Partnership'
    },
    category: 'ngo',
    description: {
      fr: 'Recherche-action pour le développement de stratégies d\'appui aux petites villes en matière d\'eau.',
      en: 'Action research for developing support strategies for small towns in water sector.'
    },
    projects: ['small-towns-2008'],
    region: 'France',
    yearStarted: 2008,
    featured: false
  },
  {
    id: 'crepa',
    name: 'CREPA',
    fullName: {
      fr: 'Centre Régional pour l\'Eau Potable et l\'Assainissement à Faible Coût',
      en: 'Regional Center for Low-Cost Drinking Water and Sanitation'
    },
    category: 'ngo',
    description: {
      fr: 'Centre d\'excellence pour la recherche et le développement en eau et assainissement à faible coût.',
      en: 'Center of excellence for research and development in low-cost water and sanitation.'
    },
    projects: ['eco-sanitation-2009'],
    website: 'https://www.crepa.org',
    region: 'West Africa',
    yearStarted: 2009,
    featured: false
  },
  {
    id: 'water-aid',
    name: 'WaterAid',
    fullName: {
      fr: 'WaterAid',
      en: 'WaterAid'
    },
    category: 'ngo',
    description: {
      fr: 'ONG internationale travaillant pour l\'accès universel à l\'eau potable et à l\'assainissement.',
      en: 'International NGO working for universal access to clean water and sanitation.'
    },
    website: 'https://www.wateraid.org',
    region: 'International',
    featured: false
  },

  // PRIVATE SECTOR
  {
    id: 'sofreco',
    name: 'SOFRECO',
    fullName: {
      fr: 'SOFRECO France',
      en: 'SOFRECO France'
    },
    category: 'private',
    description: {
      fr: 'Bureau d\'ingénieur conseil partenaire pour les programmes de valorisation des ressources en eau.',
      en: 'Engineering consulting firm partner for water resources development programs.'
    },
    projects: ['vreo-2004'],
    region: 'France',
    yearStarted: 2004,
    featured: false
  },
  {
    id: 'ede-senegal',
    name: 'Bureau EDE',
    fullName: {
      fr: 'Bureau EDE Sénégal',
      en: 'EDE Bureau Senegal'
    },
    category: 'private',
    description: {
      fr: 'Bureau d\'études partenaire pour l\'élaboration de programmes nationaux d\'eau et d\'assainissement.',
      en: 'Study office partner for national water and sanitation program development.'
    },
    projects: ['pnaepa-2006'],
    region: 'Senegal',
    yearStarted: 2006,
    featured: false
  },
  {
    id: 'codex',
    name: 'CODEX',
    fullName: {
      fr: 'CODEX Burkina Faso',
      en: 'CODEX Burkina Faso'
    },
    category: 'private',
    description: {
      fr: 'Bureau d\'ingénieur conseil local pour les projets d\'assainissement et d\'ingénierie sociale.',
      en: 'Local engineering consulting firm for sanitation and social engineering projects.'
    },
    projects: ['bobo-2013'],
    region: 'Burkina Faso',
    yearStarted: 2013,
    featured: false
  },
  {
    id: 'bafrenah',
    name: 'BAFRENAH',
    fullName: {
      fr: 'BAFRENAH Burkina Faso',
      en: 'BAFRENAH Burkina Faso'
    },
    category: 'private',
    description: {
      fr: 'Bureau d\'études spécialisé dans les forages et l\'hydraulique villageoise.',
      en: 'Study office specialized in boreholes and village hydraulics.'
    },
    projects: ['forages-1000'],
    region: 'Burkina Faso',
    yearStarted: 2004,
    featured: false
  },
  {
    id: 'serohs',
    name: 'SEROHS',
    fullName: {
      fr: 'SEROHS Mali',
      en: 'SEROHS Mali'
    },
    category: 'private',
    description: {
      fr: 'Bureau d\'études malien spécialisé dans l\'hydraulique et l\'assainissement.',
      en: 'Malian study office specialized in hydraulics and sanitation.'
    },
    projects: ['forages-100'],
    region: 'Mali',
    featured: false
  },

  // GOVERNMENT & PUBLIC INSTITUTIONS
  {
    id: 'onea',
    name: 'ONEA',
    fullName: {
      fr: 'Office National de l\'Eau et de l\'Assainissement',
      en: 'National Office for Water and Sanitation'
    },
    category: 'government',
    description: {
      fr: 'Collaboration stratégique pour la gestion des services urbains d\'eau et d\'assainissement au Burkina Faso.',
      en: 'Strategic collaboration for urban water and sanitation service management in Burkina Faso.'
    },
    projects: ['bobo-2013'],
    website: 'https://www.onea.bf',
    region: 'Burkina Faso',
    yearStarted: 2013,
    featured: true
  },
  {
    id: 'burkina-state',
    name: 'État du Burkina Faso',
    fullName: {
      fr: 'État du Burkina Faso',
      en: 'State of Burkina Faso'
    },
    category: 'government',
    description: {
      fr: 'Partenaire institutionnel principal pour les projets d\'infrastructure hydraulique et de développement.',
      en: 'Main institutional partner for hydraulic infrastructure and development projects.'
    },
    projects: ['liriba-2003', 'dadoune-2003', 'soum-2005'],
    region: 'Burkina Faso',
    yearStarted: 2000,
    featured: true
  },
  {
    id: 'uemoa',
    name: 'UEMOA',
    fullName: {
      fr: 'Union Économique et Monétaire Ouest Africaine',
      en: 'West African Economic and Monetary Union'
    },
    category: 'government',
    description: {
      fr: 'Partenaire régional pour les programmes d\'infrastructure d\'eau et d\'assainissement.',
      en: 'Regional partner for water and sanitation infrastructure programs.'
    },
    projects: ['forages-100'],
    website: 'https://www.uemoa.int',
    region: 'West Africa',
    featured: false
  },
  {
    id: 'communes',
    name: 'Communes Rurales',
    fullName: {
      fr: 'Communes Rurales du Burkina Faso',
      en: 'Rural Municipalities of Burkina Faso'
    },
    category: 'government',
    description: {
      fr: 'Partenaires locaux pour la gestion durable des adductions d\'eau potable en milieu rural.',
      en: 'Local partners for sustainable management of drinking water supply systems in rural areas.'
    },
    projects: ['contracts-2021'],
    region: 'Burkina Faso',
    yearStarted: 2015,
    featured: false
  },

  // ACADEMIC & RESEARCH
  {
    id: '2ie',
    name: '2iE',
    fullName: {
      fr: 'Institut International d\'Ingénierie de l\'Eau et de l\'Environnement',
      en: 'International Institute for Water and Environmental Engineering'
    },
    category: 'academic',
    description: {
      fr: 'Collaboration académique et recherche appliquée dans les domaines de l\'eau et de l\'environnement.',
      en: 'Academic collaboration and applied research in water and environmental fields.'
    },
    website: 'https://www.2ie-edu.org',
    region: 'Burkina Faso',
    featured: false
  },
  {
    id: 'ird',
    name: 'IRD',
    fullName: {
      fr: 'Institut de Recherche pour le Développement',
      en: 'Research Institute for Development'
    },
    category: 'academic',
    description: {
      fr: 'Partenariat pour la recherche scientifique appliquée aux ressources en eau en Afrique.',
      en: 'Partnership for applied scientific research on water resources in Africa.'
    },
    website: 'https://www.ird.fr',
    region: 'France',
    featured: false
  },
]

export const partnerCategories = [
  {
    id: 'all',
    label: { fr: 'Tous', en: 'All' },
    icon: 'bi-grid-3x3-gap'
  },
  {
    id: 'international',
    label: { fr: 'Organisations Internationales', en: 'International Organizations' },
    icon: 'bi-globe2'
  },
  {
    id: 'bilateral',
    label: { fr: 'Coopération Bilatérale', en: 'Bilateral Cooperation' },
    icon: 'bi-people'
  },
  {
    id: 'ngo',
    label: { fr: 'ONG & Société Civile', en: 'NGOs & Civil Society' },
    icon: 'bi-heart'
  },
  {
    id: 'private',
    label: { fr: 'Secteur Privé', en: 'Private Sector' },
    icon: 'bi-briefcase'
  },
  {
    id: 'government',
    label: { fr: 'Gouvernement & Institutions Publiques', en: 'Government & Public Institutions' },
    icon: 'bi-building'
  },
  {
    id: 'academic',
    label: { fr: 'Académique & Recherche', en: 'Academic & Research' },
    icon: 'bi-book'
  }
]
