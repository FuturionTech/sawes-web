export interface Event {
  id: string
  type: 'workshop' | 'training' | 'conference' | 'seminar' | 'celebration' | 'field-visit'
  status: 'upcoming' | 'ongoing' | 'completed'
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  image?: string
  startDate: string
  endDate?: string
  location: {
    fr: string
    en: string
  }
  category: string[]
  tags: string[]
  organizer?: string
  participants?: number
  registrationUrl?: string
  contactEmail?: string
}

export const events: Event[] = [
  {
    id: 'event-001',
    type: 'celebration',
    status: 'completed',
    title: {
      fr: 'Journée Mondiale de l\'Eau 2025',
      en: 'World Water Day 2025'
    },
    description: {
      fr: 'Célébration de la Journée Mondiale de l\'Eau avec des activités de sensibilisation dans les écoles et les communautés. Au programme : conférences, démonstrations pratiques, distribution de matériel éducatif et visites guidées d\'installations.',
      en: 'World Water Day celebration with awareness activities in schools and communities. Program includes: conferences, practical demonstrations, educational material distribution and guided facility tours.'
    },
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
    startDate: '2025-03-22',
    endDate: '2025-03-22',
    location: {
      fr: 'Ouagadougou et communes rurales, Burkina Faso',
      en: 'Ouagadougou and rural communes, Burkina Faso'
    },
    category: ['water', 'education', 'community'],
    tags: ['journée mondiale', 'sensibilisation', 'éducation'],
    organizer: 'SAWES',
    participants: 500,
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-002',
    type: 'training',
    status: 'upcoming',
    title: {
      fr: 'Formation des Gestionnaires de Services d\'Eau - Session 2',
      en: 'Water Service Managers Training - Session 2'
    },
    description: {
      fr: 'Deuxième session du programme de formation pour gestionnaires de services d\'eau potable en milieu rural. Modules : gestion technique, administration financière, maintenance préventive, relations avec les usagers.',
      en: 'Second session of the training program for rural drinking water service managers. Modules: technical management, financial administration, preventive maintenance, user relations.'
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop',
    startDate: '2025-05-15',
    endDate: '2025-05-17',
    location: {
      fr: 'Centre de formation SAWES, Ouagadougou',
      en: 'SAWES Training Center, Ouagadougou'
    },
    category: ['training', 'capacity-building', 'water'],
    tags: ['formation', 'gestionnaires', 'eau potable', 'rural'],
    organizer: 'SAWES',
    participants: 30,
    registrationUrl: 'mailto:sawes.bf@gmail.com',
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-003',
    type: 'workshop',
    status: 'upcoming',
    title: {
      fr: 'Atelier Régional sur la Gestion Intégrée des Ressources en Eau',
      en: 'Regional Workshop on Integrated Water Resources Management'
    },
    description: {
      fr: 'Atelier de partage d\'expériences et d\'élaboration de stratégies pour la gestion intégrée des ressources en eau transfrontalières en Afrique de l\'Ouest. Participation des représentants des pays membres de la CEDEAO.',
      en: 'Workshop for sharing experiences and developing strategies for integrated management of transboundary water resources in West Africa. Participation of ECOWAS member countries representatives.'
    },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    startDate: '2025-06-10',
    endDate: '2025-06-12',
    location: {
      fr: 'Ouagadougou, Burkina Faso',
      en: 'Ouagadougou, Burkina Faso'
    },
    category: ['regional', 'water', 'governance'],
    tags: ['GIRE', 'CEDEAO', 'transfrontalier', 'régional'],
    organizer: 'SAWES / CCRE-CEDEAO',
    participants: 50,
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-004',
    type: 'seminar',
    status: 'completed',
    title: {
      fr: 'Séminaire sur les Innovations Technologiques pour l\'Eau',
      en: 'Seminar on Technological Innovations for Water'
    },
    description: {
      fr: 'Présentation des technologies innovantes pour l\'approvisionnement en eau : pompage solaire, systèmes intelligents, télégestion, traitement décentralisé. Démonstrations pratiques et études de cas.',
      en: 'Presentation of innovative technologies for water supply: solar pumping, smart systems, remote management, decentralized treatment. Practical demonstrations and case studies.'
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop',
    startDate: '2024-11-20',
    endDate: '2024-11-21',
    location: {
      fr: 'Hôtel Azalaï, Ouagadougou',
      en: 'Azalaï Hotel, Ouagadougou'
    },
    category: ['innovation', 'technology', 'water'],
    tags: ['innovation', 'technologie', 'solaire', 'télégestion'],
    organizer: 'SAWES',
    participants: 80,
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-005',
    type: 'field-visit',
    status: 'completed',
    title: {
      fr: 'Visite de Terrain - Systèmes de Pompage Solaire',
      en: 'Field Visit - Solar Pumping Systems'
    },
    description: {
      fr: 'Visite guidée des installations de pompage solaire dans les communes rurales. Présentation du fonctionnement, des avantages économiques et environnementaux, et des modalités de maintenance.',
      en: 'Guided tour of solar pumping installations in rural communes. Presentation of operation, economic and environmental benefits, and maintenance procedures.'
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
    startDate: '2024-09-10',
    endDate: '2024-09-10',
    location: {
      fr: 'Région Centre-Sud, Burkina Faso',
      en: 'Centre-Sud Region, Burkina Faso'
    },
    category: ['field-visit', 'renewable-energy', 'water'],
    tags: ['visite terrain', 'pompage solaire', 'rural'],
    organizer: 'SAWES',
    participants: 25,
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-006',
    type: 'workshop',
    status: 'upcoming',
    title: {
      fr: 'Atelier WASH en Milieu Scolaire',
      en: 'WASH in Schools Workshop'
    },
    description: {
      fr: 'Atelier de renforcement des capacités des acteurs de l\'éducation sur les approches WASH (eau, assainissement, hygiène) en milieu scolaire. Élaboration de plans d\'action locaux.',
      en: 'Capacity building workshop for education stakeholders on WASH approaches (water, sanitation, hygiene) in schools. Development of local action plans.'
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop',
    startDate: '2025-07-08',
    endDate: '2025-07-09',
    location: {
      fr: 'Bobo-Dioulasso, Burkina Faso',
      en: 'Bobo-Dioulasso, Burkina Faso'
    },
    category: ['education', 'wash', 'capacity-building'],
    tags: ['WASH', 'écoles', 'formation', 'atelier'],
    organizer: 'SAWES',
    participants: 40,
    registrationUrl: 'mailto:sawes.bf@gmail.com',
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-007',
    type: 'conference',
    status: 'completed',
    title: {
      fr: 'Conférence Nationale sur l\'Assainissement Urbain',
      en: 'National Conference on Urban Sanitation'
    },
    description: {
      fr: 'Conférence nationale réunissant les acteurs de l\'assainissement urbain : collectivités, opérateurs, partenaires techniques et financiers. Thème : "Vers un assainissement durable dans les villes burkinabè".',
      en: 'National conference bringing together urban sanitation stakeholders: local authorities, operators, technical and financial partners. Theme: "Towards sustainable sanitation in Burkinabe cities".'
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
    startDate: '2024-10-15',
    endDate: '2024-10-16',
    location: {
      fr: 'Palais des Sports, Ouagadougou',
      en: 'Sports Palace, Ouagadougou'
    },
    category: ['sanitation', 'urban', 'policy'],
    tags: ['assainissement', 'urbain', 'conférence', 'durabilité'],
    organizer: 'Ministère de l\'Eau / SAWES',
    participants: 150,
    contactEmail: 'sawes.bf@gmail.com'
  },
  {
    id: 'event-008',
    type: 'training',
    status: 'upcoming',
    title: {
      fr: 'Formation Technique - Maintenance des Forages',
      en: 'Technical Training - Borehole Maintenance'
    },
    description: {
      fr: 'Formation pratique sur la maintenance préventive et corrective des forages d\'eau potable. Techniques de diagnostic, réparation de pompes, gestion des pannes courantes.',
      en: 'Practical training on preventive and corrective maintenance of drinking water boreholes. Diagnostic techniques, pump repair, common breakdown management.'
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=600&fit=crop',
    startDate: '2025-08-20',
    endDate: '2025-08-22',
    location: {
      fr: 'Site de formation technique, Koudougou',
      en: 'Technical training site, Koudougou'
    },
    category: ['training', 'technical', 'water'],
    tags: ['formation', 'maintenance', 'forages', 'technique'],
    organizer: 'SAWES',
    participants: 20,
    registrationUrl: 'mailto:sawes.bf@gmail.com',
    contactEmail: 'sawes.bf@gmail.com'
  }
]

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id)
}

export function getEventsByStatus(status: string): Event[] {
  return events.filter(event => event.status === status)
}

export function getUpcomingEvents(limit?: number): Event[] {
  const upcoming = events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())

  return limit ? upcoming.slice(0, limit) : upcoming
}

export function getPastEvents(limit?: number): Event[] {
  const past = events
    .filter(event => event.status === 'completed')
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())

  return limit ? past.slice(0, limit) : past
}

export function getEventsByCategory(category: string): Event[] {
  return events.filter(event => event.category.includes(category))
}
