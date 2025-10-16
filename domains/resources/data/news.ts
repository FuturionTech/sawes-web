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
    slug: 'historique-gestion-forages-centre-sud',
    type: 'news',
    featured: true,
    title: {
      fr: 'Bilan du programme de 100 forages dans la région Centre-Sud',
      en: 'Results of 100 boreholes program in Centre-Sud region'
    },
    excerpt: {
      fr: 'Retour sur le programme réussi de réalisation de 100 forages positifs dans la région du Centre-Sud avec l\'UEMOA.',
      en: 'Review of the successful program for 100 positive boreholes in the Centre-Sud region with UEMOA.'
    },
    content: {
      fr: `SAWES a assuré avec succès la maîtrise d'œuvre technique pour le contrôle des travaux de 100 forages positifs dans la région du Centre-Sud, dans le cadre du Projet 300 forages positifs de l'UEMOA.

Réalisations du projet :
- Contrôle de l'intermédiation sociale auprès des communautés
- Implantation technique des forages selon les normes
- Supervision des travaux de forage
- Contrôle de la pose des pompes à motricité humaine
- Accompagnement des communautés pour la gestion des ouvrages

Ce projet, réalisé en partenariat avec le Bureau d'ingénieur conseil SEROHS-Mali, a permis d'améliorer significativement l'accès à l'eau potable pour les populations rurales de la région Centre-Sud.

L'expérience acquise dans ce programme continue de guider nos interventions dans le domaine de l'hydraulique rurale.`,
      en: `SAWES successfully provided technical project management for supervising the construction of 100 positive boreholes in the Centre-Sud region, as part of UEMOA's 300 Positive Boreholes Project.

Project achievements:
- Control of social intermediation with communities
- Technical siting of boreholes according to standards
- Supervision of drilling works
- Control of hand pump installation
- Community support for facility management

This project, implemented in partnership with consulting firm SEROHS-Mali, significantly improved access to drinking water for rural populations in the Centre-Sud region.

The experience gained from this program continues to guide our interventions in rural water supply.`
    },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    date: '2024-03-15',
    category: ['water', 'infrastructure', 'projects'],
    tags: ['forages', 'UEMOA', 'Centre-Sud', 'hydraulique rurale'],
    author: 'Direction Technique SAWES'
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
    slug: 'etude-wash-milieu-scolaire-unicef-2007',
    type: 'news',
    featured: false,
    title: {
      fr: 'L\'étude SAWES-UNICEF sur le WASH en milieu scolaire continue d\'inspirer',
      en: 'SAWES-UNICEF study on WASH in schools continues to inspire'
    },
    excerpt: {
      fr: 'Retour sur l\'étude clé de 2007 qui a permis d\'harmoniser les approches WASH dans les écoles du Burkina Faso.',
      en: 'Review of the key 2007 study that harmonized WASH approaches in schools across Burkina Faso.'
    },
    content: {
      fr: `L'étude réalisée par SAWES en 2007 pour l'UNICEF sur les approches d'interventions en matière d'eau potable, d'assainissement et d'éducation à l'hygiène en milieu scolaire primaire continue d'avoir un impact majeur.

Cette recherche a permis de :
- Capitaliser les nombreuses expériences en matière de WASH scolaire
- Identifier les meilleures pratiques
- Proposer une harmonisation des approches
- Établir des recommandations pour le passage à l'échelle

Les conclusions de cette étude ont guidé la conception de nombreux programmes d'intervention dans les écoles primaires burkinabè. L'approche intégrée recommandée, combinant infrastructures, éducation à l'hygiène et mobilisation communautaire, est devenue une référence pour les acteurs du secteur.

SAWES continue de mettre son expertise au service de l'amélioration des conditions d'hygiène et d'assainissement dans les établissements scolaires, contribuant ainsi à la santé et à l'éducation des enfants.`,
      en: `The 2007 study conducted by SAWES for UNICEF on intervention approaches for drinking water, sanitation and hygiene education in primary schools continues to have a major impact.

This research helped to:
- Capitalize on numerous experiences in school WASH
- Identify best practices
- Propose harmonization of approaches
- Establish recommendations for scaling up

The study's conclusions have guided the design of numerous intervention programs in Burkinabe primary schools. The recommended integrated approach, combining infrastructure, hygiene education and community mobilization, has become a reference for sector actors.

SAWES continues to put its expertise at the service of improving hygiene and sanitation conditions in schools, thus contributing to children's health and education.`
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
    date: '2024-06-20',
    category: ['education', 'wash', 'studies'],
    tags: ['WASH', 'écoles', 'UNICEF', 'étude', 'harmonisation'],
    author: 'Équipe Études SAWES'
  },
  {
    id: 'news-006',
    slug: 'innovation-technologique-pompage-solaire-2024',
    type: 'news',
    featured: true,
    title: {
      fr: 'SAWES intègre le pompage solaire dans ses services',
      en: 'SAWES integrates solar pumping in its services'
    },
    excerpt: {
      fr: 'Installation d\'un système de pompage photovoltaïque pour une gestion durable de l\'eau.',
      en: 'Installation of photovoltaic pumping system for sustainable water management.'
    },
    content: {
      fr: `Dans le cadre de sa stratégie d'innovation, SAWES a intégré les technologies de pompage solaire dans ses services d'approvisionnement en eau potable.

SAWES a réalisé la fourniture et la pose d'un générateur photovoltaïque composé de 19 plaques solaires de 270 volts pour un système d'adduction d'eau potable en milieu rural.

Avantages des systèmes solaires :
- Réduction significative des coûts d'exploitation (pas de carburant)
- Diminution de l'empreinte carbone
- Fiabilité et durabilité accrues
- Maintenance simplifiée
- Autonomie énergétique des installations

Cette expérience réussie démontre le potentiel des énergies renouvelables pour améliorer la durabilité des services d'eau en milieu rural. SAWES continue d'explorer les innovations technologiques pour répondre aux défis de l'accès à l'eau potable.

Cette initiative s'inscrit dans l'engagement de SAWES pour un développement durable et la promotion de solutions respectueuses de l'environnement.`,
      en: `As part of its innovation strategy, SAWES has integrated solar pumping technologies into its drinking water supply services.

SAWES completed the supply and installation of a photovoltaic generator composed of 19 solar panels of 270 volts for a rural drinking water supply system.

Advantages of solar systems:
- Significant reduction in operating costs (no fuel)
- Decreased carbon footprint
- Increased reliability and durability
- Simplified maintenance
- Energy autonomy of facilities

This successful experience demonstrates the potential of renewable energy to improve the sustainability of rural water services. SAWES continues to explore technological innovations to address drinking water access challenges.

This initiative is part of SAWES' commitment to sustainable development and promotion of environmentally friendly solutions.`
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    date: '2024-08-15',
    category: ['innovation', 'technology', 'renewable-energy'],
    tags: ['solaire', 'photovoltaïque', 'innovation', 'énergie renouvelable'],
    author: 'Direction Technique SAWES'
  },
  {
    id: 'news-007',
    slug: 'bilan-programme-1000-forages-taiwan',
    type: 'news',
    featured: false,
    title: {
      fr: 'Succès du programme de 1000 forages positifs au Burkina Faso',
      en: 'Success of 1000 positive boreholes program in Burkina Faso'
    },
    excerpt: {
      fr: 'SAWES a assuré le suivi et l\'administration de la réalisation de 1000 forages positifs financés par la République de Chine (Taïwan).',
      en: 'SAWES provided monitoring and administration for 1000 positive boreholes funded by the Republic of China (Taiwan).'
    },
    content: {
      fr: `Entre 2004 et 2008, SAWES a joué un rôle majeur dans le suivi et l'administration des travaux de réalisation de 1000 forages positifs au Burkina Faso, financés par la République de Chine (Taïwan).

Responsabilités de SAWES :
- Programmation des activités et coordination générale
- Contrôle à pied d'œuvre des travaux de forages
- Supervision de la construction des margelles
- Contrôle de l'installation des pompes à motricité humaine
- Coordination avec le Bureau d'ingénieur conseil BAFRENAH

Impact du programme :
Ce programme d'envergure a considérablement amélioré l'accès à l'eau potable dans les zones rurales du Burkina Faso. Les 1000 forages ont bénéficié à des centaines de milliers de personnes dans différentes régions du pays.

L'expertise technique de SAWES et sa capacité de coordination ont été essentielles au succès de ce programme ambitieux, qui demeure l'un des plus importants projets d'hydraulique rurale réalisés au Burkina Faso.`,
      en: `Between 2004 and 2008, SAWES played a major role in monitoring and administering the construction of 1000 positive boreholes in Burkina Faso, funded by the Republic of China (Taiwan).

SAWES responsibilities:
- Activity programming and overall coordination
- On-site control of drilling works
- Supervision of well curb construction
- Control of hand pump installation
- Coordination with consulting firm BAFRENAH

Program impact:
This large-scale program significantly improved access to drinking water in rural areas of Burkina Faso. The 1000 boreholes benefited hundreds of thousands of people in different regions of the country.

SAWES' technical expertise and coordination capacity were essential to the success of this ambitious program, which remains one of the largest rural water supply projects implemented in Burkina Faso.`
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=600&fit=crop',
    date: '2024-05-10',
    category: ['water', 'infrastructure', 'projects'],
    tags: ['forages', 'Taïwan', 'hydraulique rurale', 'coopération'],
    author: 'Direction SAWES'
  },
  {
    id: 'news-008',
    slug: 'controle-barrage-yakouta-2003-2008',
    type: 'news',
    featured: false,
    title: {
      fr: 'Réalisation du barrage de Yakouta : un projet d\'envergure',
      en: 'Yakouta Dam completion: a major project'
    },
    excerpt: {
      fr: 'SAWES a assuré le contrôle et la surveillance des travaux de construction du barrage de Yakouta de 26,5 millions de m³.',
      en: 'SAWES provided control and supervision of Yakouta Dam construction works with 26.5 million m³ capacity.'
    },
    content: {
      fr: `De 2003 à 2008, SAWES a été en charge du contrôle et de la surveillance des travaux de construction du barrage de Yakouta, un ouvrage de 26,5 millions de m³ de capacité, financé par la République de Chine (Taïwan).

Missions de SAWES :
- Contrôle technique de l'exécution des travaux
- Surveillance de la qualité de la construction
- Vérification de la conformité aux normes
- Reporting régulier sur l'avancement
- Coordination avec les entreprises de travaux

Le barrage de Yakouta constitue une infrastructure stratégique pour :
- L'approvisionnement en eau potable
- Le développement de l'agriculture irriguée
- L'élevage
- La pêche

Ce projet illustre la capacité de SAWES à superviser des ouvrages hydrauliques de grande envergure et sa contribution au développement des infrastructures d'eau au Burkina Faso.`,
      en: `From 2003 to 2008, SAWES was responsible for controlling and supervising the construction of Yakouta Dam, a structure with 26.5 million m³ capacity, funded by the Republic of China (Taiwan).

SAWES missions:
- Technical control of work execution
- Construction quality monitoring
- Standards compliance verification
- Regular progress reporting
- Coordination with construction companies

Yakouta Dam constitutes strategic infrastructure for:
- Drinking water supply
- Irrigated agriculture development
- Livestock farming
- Fishing

This project illustrates SAWES' capacity to supervise large-scale hydraulic works and its contribution to water infrastructure development in Burkina Faso.`
    },
    image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1200&h=600&fit=crop',
    date: '2024-07-18',
    category: ['infrastructure', 'dams', 'projects'],
    tags: ['barrage', 'Yakouta', 'infrastructure', 'contrôle'],
    author: 'Direction Technique SAWES'
  },
  {
    id: 'news-009',
    slug: 'programme-vreo-valorisation-ressources-eau-ouest',
    type: 'news',
    featured: false,
    title: {
      fr: 'Programme VREO : 6 ans d\'assistance technique réussie',
      en: 'VREO Program: 6 years of successful technical assistance'
    },
    excerpt: {
      fr: 'Retour sur l\'assistance technique à la maîtrise d\'œuvre du Programme de Valorisation des Ressources en Eau de l\'Ouest (2004-2010).',
      en: 'Review of technical assistance for the Western Water Resources Development Program (2004-2010).'
    },
    content: {
      fr: `De 2004 à 2010, SAWES a fourni une assistance technique à la Maîtrise d'Œuvre Déléguée du Programme de Valorisation des Ressources en Eau de l'Ouest (VREO), financé par l'Union européenne dans le cadre du 8ème FED.

Le programme comprenait deux composantes principales :
- Composante A : Alimentation en Eau Potable
- Composante B : Appui institutionnel et technique au secteur de l'eau

Activités de SAWES :
- Assistance technique aux équipes de maîtrise d'œuvre
- Suivi de la réalisation des infrastructures d'eau potable
- Appui au renforcement institutionnel
- Accompagnement des acteurs locaux
- Coordination avec le Bureau d'ingénieur conseil SOFRECO-France

Ce programme a permis d'améliorer significativement l'accès à l'eau potable dans les régions de l'Ouest du Burkina Faso et de renforcer les capacités des institutions du secteur de l'eau.

L'expérience acquise sur ce programme continue d'enrichir l'expertise de SAWES dans l'accompagnement de programmes complexes d'envergure régionale.`,
      en: `From 2004 to 2010, SAWES provided technical assistance to the Delegated Project Management of the Western Water Resources Development Program (VREO), funded by the European Union under the 8th EDF.

The program included two main components:
- Component A: Drinking Water Supply
- Component B: Institutional and technical support to the water sector

SAWES activities:
- Technical assistance to project management teams
- Monitoring of drinking water infrastructure implementation
- Institutional strengthening support
- Support to local stakeholders
- Coordination with consulting firm SOFRECO-France

This program significantly improved access to drinking water in the western regions of Burkina Faso and strengthened the capacities of water sector institutions.

The experience gained from this program continues to enrich SAWES' expertise in supporting complex regional programs.`
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
    date: '2024-04-25',
    category: ['programs', 'water', 'capacity-building'],
    tags: ['VREO', 'Union européenne', 'assistance technique', 'Ouest'],
    author: 'Direction SAWES'
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
