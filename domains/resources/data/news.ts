export interface NewsArticle {
  id: string
  slug: string
  type: 'news' | 'press-release' | 'announcement' | 'event-coverage'
  featured: boolean
  title: {
    fr: string
    en: string
  }
  excerpt: {
    fr: string
    en: string
  }
  content: {
    fr: string
    en: string
  }
  image: string
  thumbnail?: string
  date: string
  category: string[]
  tags: string[]
  author?: string
  relatedProjects?: string[]
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-001',
    slug: 'nouveau-contrat-gestion-eau-commune-rurales-2025',
    type: 'announcement',
    featured: true,
    title: {
      fr: 'SAWES renouvelle ses contrats de gestion des adductions d\'eau potable',
      en: 'SAWES renews water supply management contracts'
    },
    excerpt: {
      fr: 'Reconduction des contrats de gestion pour plusieurs communes rurales du Burkina Faso pour la période 2025-2030.',
      en: 'Contract renewal for water supply management in several rural communes of Burkina Faso for 2025-2030.'
    },
    content: {
      fr: `SAWES a le plaisir d'annoncer la reconduction de ses contrats de gestion des adductions d'eau potable pour plusieurs communes rurales du Burkina Faso. Ces contrats, qui couvrent la période 2025-2030, témoignent de la confiance renouvelée des collectivités dans notre expertise.

Depuis 2015, SAWES assure la gestion technique et administrative de ces systèmes d'approvisionnement en eau, garantissant un service de qualité aux populations rurales. Nos équipes interviennent sur :

- Le maintien du fonctionnement des installations
- La production de comptes rendus techniques et financiers
- La proposition de mesures de renforcement
- L'entretien, réparation et renouvellement des équipements
- Les travaux d'extension des réseaux

Cette reconduction permet de poursuivre notre mission d'amélioration continue de l'accès à l'eau potable dans les zones rurales, contribuant ainsi au développement durable et à l'amélioration de la qualité de vie des populations.`,
      en: `SAWES is pleased to announce the renewal of its water supply management contracts for several rural communes in Burkina Faso. These contracts, covering the period 2025-2030, demonstrate the renewed confidence of local authorities in our expertise.

Since 2015, SAWES has been providing technical and administrative management of these water supply systems, ensuring quality service to rural populations. Our teams work on:

- Maintaining facility operations
- Producing technical and financial reports
- Proposing improvement measures
- Maintenance, repair and equipment renewal
- Network extension works

This renewal allows us to continue our mission of continuous improvement in access to drinking water in rural areas, thus contributing to sustainable development and improving the quality of life of populations.`
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
    date: '2025-01-15',
    category: ['water', 'management'],
    tags: ['contrats', 'gestion', 'eau potable', 'communes rurales'],
    author: 'Direction SAWES'
  },
  {
    id: 'news-002',
    slug: 'journee-mondiale-eau-2025-sawes-sensibilise',
    type: 'event-coverage',
    featured: true,
    title: {
      fr: 'SAWES célèbre la Journée Mondiale de l\'Eau 2025',
      en: 'SAWES celebrates World Water Day 2025'
    },
    excerpt: {
      fr: 'Campagne de sensibilisation et activités communautaires pour promouvoir la gestion durable des ressources en eau.',
      en: 'Awareness campaign and community activities to promote sustainable water resource management.'
    },
    content: {
      fr: `À l'occasion de la Journée Mondiale de l'Eau 2025, SAWES a organisé une série d'activités de sensibilisation dans plusieurs communes du Burkina Faso. Cette initiative vise à renforcer la conscience collective sur l'importance de la préservation des ressources en eau.

Activités organisées :
- Conférences dans les écoles primaires sur l'hygiène et l'assainissement
- Démonstrations pratiques de techniques d'économie d'eau
- Distribution de matériel éducatif
- Visites guidées d'installations d'eau potable
- Sessions de formation pour les gestionnaires de points d'eau

Plus de 500 personnes ont participé à ces activités, incluant des élèves, des enseignants, des leaders communautaires et des gestionnaires de services d'eau. Cette mobilisation témoigne de l'engagement de SAWES dans la promotion d'une culture de gestion durable de l'eau.`,
      en: `On the occasion of World Water Day 2025, SAWES organized a series of awareness activities in several communes of Burkina Faso. This initiative aims to strengthen collective awareness of the importance of water resource preservation.

Organized activities:
- Conferences in primary schools on hygiene and sanitation
- Practical demonstrations of water-saving techniques
- Distribution of educational materials
- Guided tours of drinking water facilities
- Training sessions for water point managers

More than 500 people participated in these activities, including students, teachers, community leaders and water service managers. This mobilization demonstrates SAWES' commitment to promoting a culture of sustainable water management.`
    },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    date: '2025-03-22',
    category: ['water', 'education', 'events'],
    tags: ['journée mondiale eau', 'sensibilisation', 'éducation', 'communauté'],
    author: 'Service Commercial SAWES'
  },
  {
    id: 'news-003',
    slug: 'partenariat-cedeao-ressources-eau-2024',
    type: 'press-release',
    featured: false,
    title: {
      fr: 'SAWES renforce son partenariat avec la CEDEAO',
      en: 'SAWES strengthens its partnership with ECOWAS'
    },
    excerpt: {
      fr: 'Nouvelle collaboration pour la coordination régionale des ressources en eau en Afrique de l\'Ouest.',
      en: 'New collaboration for regional water resource coordination in West Africa.'
    },
    content: {
      fr: `SAWES et le Centre de Coordination des Ressources en Eau de la CEDEAO (CCRE-CEDEAO) ont signé un accord de partenariat renforcé pour améliorer la coordination et l'harmonisation des actions dans le secteur de l'eau en Afrique de l'Ouest.

Ce partenariat s'inscrit dans la continuité des collaborations précédentes, notamment l'élaboration du plan d'action de mise en œuvre de la politique des ressources en eau de l'Afrique de l'Ouest (2012) et les études sur les organisations de bassins transfrontaliers (2010).

Objectifs du partenariat :
- Renforcer la gestion intégrée des ressources en eau transfrontalières
- Développer des mécanismes de coordination régionale
- Promouvoir le partage d'expériences et de bonnes pratiques
- Soutenir les pays membres dans la mise en œuvre de leurs politiques nationales

Cette collaboration stratégique positionne SAWES comme un acteur clé de la gouvernance de l'eau au niveau régional.`,
      en: `SAWES and the ECOWAS Water Resources Coordination Center (CCRE-ECOWAS) have signed a strengthened partnership agreement to improve coordination and harmonization of actions in the water sector in West Africa.

This partnership is a continuation of previous collaborations, including the development of the implementation action plan for the West African water resources policy (2012) and studies on transboundary basin organizations (2010).

Partnership objectives:
- Strengthen integrated management of transboundary water resources
- Develop regional coordination mechanisms
- Promote sharing of experiences and best practices
- Support member countries in implementing their national policies

This strategic collaboration positions SAWES as a key player in water governance at the regional level.`
    },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    date: '2024-11-10',
    category: ['partnerships', 'regional'],
    tags: ['CEDEAO', 'partenariat', 'eau transfrontalière', 'Afrique Ouest'],
    author: 'Direction SAWES'
  },
  {
    id: 'news-004',
    slug: 'formation-gestionnaires-eau-assainissement-2024',
    type: 'announcement',
    featured: false,
    title: {
      fr: 'Programme de formation pour gestionnaires de services d\'eau et d\'assainissement',
      en: 'Training program for water and sanitation service managers'
    },
    excerpt: {
      fr: 'SAWES lance un programme de renforcement des capacités des gestionnaires de services d\'eau en milieu rural.',
      en: 'SAWES launches a capacity building program for rural water service managers.'
    },
    content: {
      fr: `SAWES a développé un programme de formation innovant destiné aux gestionnaires de services d'eau et d'assainissement en milieu rural. Ce programme vise à renforcer les compétences techniques et managériales des acteurs locaux.

Modules de formation :
- Gestion technique des systèmes d'adduction d'eau
- Administration et gestion financière
- Maintenance préventive et corrective
- Relations avec les usagers
- Mobilisation communautaire
- Gestion durable des services

Le programme s'étend sur 6 mois avec des sessions théoriques et pratiques. Les participants bénéficient également d'un accompagnement personnalisé sur le terrain.

Cette initiative s'inscrit dans la vision de SAWES de promouvoir la pérennité des services d'eau et d'assainissement par le renforcement des capacités locales.`,
      en: `SAWES has developed an innovative training program for water and sanitation service managers in rural areas. This program aims to strengthen the technical and managerial skills of local actors.

Training modules:
- Technical management of water supply systems
- Administration and financial management
- Preventive and corrective maintenance
- User relations
- Community mobilization
- Sustainable service management

The program spans 6 months with theoretical and practical sessions. Participants also benefit from personalized field support.

This initiative is part of SAWES' vision to promote the sustainability of water and sanitation services through local capacity building.`
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
    date: '2024-09-05',
    category: ['training', 'capacity-building'],
    tags: ['formation', 'gestionnaires', 'renforcement capacités', 'rural'],
    author: 'Service Formation SAWES'
  },
  {
    id: 'news-005',
    slug: 'evaluation-impact-projets-wash-milieu-scolaire',
    type: 'news',
    featured: false,
    title: {
      fr: 'Résultats positifs de l\'évaluation des projets WASH en milieu scolaire',
      en: 'Positive results from WASH projects evaluation in schools'
    },
    excerpt: {
      fr: 'Les projets d\'eau, d\'assainissement et d\'hygiène dans les écoles montrent des résultats encourageants.',
      en: 'Water, sanitation and hygiene projects in schools show encouraging results.'
    },
    content: {
      fr: `Une évaluation récente des projets WASH (Water, Sanitation and Hygiene) en milieu scolaire au Burkina Faso révèle des impacts significatifs sur la santé et l'éducation des enfants.

Résultats clés :
- Réduction de 40% des maladies hydriques chez les élèves
- Amélioration de 25% du taux de présence scolaire
- Augmentation de la scolarisation des filles grâce aux installations sanitaires adaptées
- Meilleure sensibilisation aux pratiques d'hygiène

Ces résultats font suite aux recommandations de l'étude SAWES-UNICEF de 2007 sur l'harmonisation des approches WASH en milieu scolaire. Ils confirment l'importance d'interventions intégrées combinant infrastructures, éducation et mobilisation communautaire.

SAWES continue de plaider pour un passage à l'échelle de ces approches réussies dans l'ensemble du système éducatif burkinabè.`,
      en: `A recent evaluation of WASH (Water, Sanitation and Hygiene) projects in schools in Burkina Faso reveals significant impacts on children's health and education.

Key results:
- 40% reduction in water-borne diseases among students
- 25% improvement in school attendance rate
- Increased enrollment of girls thanks to appropriate sanitary facilities
- Better awareness of hygiene practices

These results follow the recommendations of the 2007 SAWES-UNICEF study on harmonizing WASH approaches in schools. They confirm the importance of integrated interventions combining infrastructure, education and community mobilization.

SAWES continues to advocate for scaling up these successful approaches throughout the Burkinabe education system.`
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
    date: '2024-06-20',
    category: ['education', 'health', 'wash'],
    tags: ['WASH', 'écoles', 'évaluation', 'santé', 'éducation'],
    author: 'Équipe Études SAWES'
  },
  {
    id: 'news-006',
    slug: 'innovation-technologique-pompage-solaire-2024',
    type: 'news',
    featured: true,
    title: {
      fr: 'SAWES adopte les technologies de pompage solaire',
      en: 'SAWES adopts solar pumping technologies'
    },
    excerpt: {
      fr: 'Déploiement de systèmes de pompage photovoltaïque pour une gestion durable de l\'eau.',
      en: 'Deployment of photovoltaic pumping systems for sustainable water management.'
    },
    content: {
      fr: `Dans le cadre de sa stratégie d'innovation, SAWES intègre désormais les technologies de pompage solaire dans ses projets d'approvisionnement en eau potable.

Avantages des systèmes solaires :
- Réduction des coûts d'exploitation (pas de carburant)
- Diminution de l'empreinte carbone
- Fiabilité et durabilité accrues
- Maintenance simplifiée
- Autonomie énergétique des installations

SAWES a déjà installé plusieurs générateurs photovoltaïques, dont un système de 19 plaques solaires de 270 volts. Ces installations ont démontré une réduction de 60% des coûts opérationnels par rapport aux systèmes diesel conventionnels.

Cette transition vers les énergies renouvelables s'inscrit dans l'engagement de SAWES pour un développement durable et la lutte contre le changement climatique.`,
      en: `As part of its innovation strategy, SAWES now integrates solar pumping technologies into its drinking water supply projects.

Advantages of solar systems:
- Reduced operating costs (no fuel)
- Decreased carbon footprint
- Increased reliability and durability
- Simplified maintenance
- Energy autonomy of facilities

SAWES has already installed several photovoltaic generators, including a 19-panel 270-volt system. These installations have demonstrated a 60% reduction in operating costs compared to conventional diesel systems.

This transition to renewable energy is part of SAWES' commitment to sustainable development and climate change mitigation.`
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    date: '2024-08-15',
    category: ['innovation', 'technology', 'renewable-energy'],
    tags: ['solaire', 'photovoltaïque', 'innovation', 'énergie renouvelable'],
    author: 'Direction Technique SAWES'
  }
]

export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id)
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug)
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter(article => article.featured)
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category.includes(category))
}

export function getRecentNews(limit: number = 3): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}
