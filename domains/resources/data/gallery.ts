export interface GalleryImage {
  id: string
  title: {
    fr: string
    en: string
  }
  description?: {
    fr: string
    en: string
  }
  image: string
  thumbnail?: string
  date: string
  category: string[]
  tags: string[]
  project?: string
  location?: string
  photographer?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'img-001',
    title: {
      fr: 'Installation de pompe solaire - Commune rurale',
      en: 'Solar pump installation - Rural commune'
    },
    description: {
      fr: 'Installation d\'un système de pompage photovoltaïque de 19 plaques solaires pour l\'approvisionnement en eau potable d\'une commune rurale.',
      en: 'Installation of a 19-panel photovoltaic pumping system for drinking water supply in a rural commune.'
    },
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    date: '2024-08-15',
    category: ['infrastructure', 'renewable-energy', 'water'],
    tags: ['pompe solaire', 'photovoltaïque', 'eau potable', 'rural'],
    location: 'Région Centre-Sud, Burkina Faso'
  },
  {
    id: 'img-002',
    title: {
      fr: 'Barrage de Yakouta en construction',
      en: 'Yakouta Dam under construction'
    },
    description: {
      fr: 'Contrôle et surveillance des travaux de construction du barrage de Yakouta (capacité 26.5 millions m³).',
      en: 'Control and monitoring of Yakouta dam construction works (capacity 26.5 million m³).'
    },
    image: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=400&h=300&fit=crop',
    date: '2006-05-10',
    category: ['infrastructure', 'dams', 'construction'],
    tags: ['barrage', 'Yakouta', 'construction', 'contrôle'],
    project: 'Yakouta Dam Construction',
    location: 'Burkina Faso'
  },
  {
    id: 'img-003',
    title: {
      fr: 'Formation de gestionnaires de points d\'eau',
      en: 'Water point managers training'
    },
    description: {
      fr: 'Session de formation pratique pour les gestionnaires de services d\'eau potable en milieu rural.',
      en: 'Practical training session for drinking water service managers in rural areas.'
    },
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
    date: '2024-09-20',
    category: ['training', 'capacity-building', 'community'],
    tags: ['formation', 'gestionnaires', 'eau potable', 'rural'],
    location: 'Ouagadougou, Burkina Faso'
  },
  {
    id: 'img-004',
    title: {
      fr: 'Installation sanitaire en milieu scolaire',
      en: 'School sanitation facility'
    },
    description: {
      fr: 'Installation de blocs sanitaires adaptés dans une école primaire, contribuant à améliorer l\'accès des filles à l\'éducation.',
      en: 'Installation of adapted sanitary blocks in a primary school, contributing to improving girls\' access to education.'
    },
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
    date: '2023-11-15',
    category: ['education', 'sanitation', 'wash'],
    tags: ['écoles', 'sanitaires', 'WASH', 'éducation'],
    location: 'Région Centre-Est, Burkina Faso'
  },
  {
    id: 'img-005',
    title: {
      fr: 'Forage d\'eau potable - Région Plateau Central',
      en: 'Drinking water borehole - Plateau Central Region'
    },
    description: {
      fr: 'Réalisation d\'un forage équipé d\'une pompe à motricité humaine dans le cadre du projet 1000 forages positifs.',
      en: 'Completion of a borehole equipped with a hand pump as part of the 1000 successful boreholes project.'
    },
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
    date: '2007-03-22',
    category: ['infrastructure', 'water', 'boreholes'],
    tags: ['forage', 'eau potable', 'pompe', 'Plateau Central'],
    project: '1000 Successful Boreholes',
    location: 'Région Plateau Central, Burkina Faso'
  },
  {
    id: 'img-006',
    title: {
      fr: 'Séance de sensibilisation communautaire',
      en: 'Community awareness session'
    },
    description: {
      fr: 'Mobilisation communautaire et sensibilisation aux bonnes pratiques d\'hygiène et de gestion de l\'eau.',
      en: 'Community mobilization and awareness of good hygiene and water management practices.'
    },
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
    date: '2024-03-22',
    category: ['community', 'education', 'wash'],
    tags: ['sensibilisation', 'communauté', 'hygiène', 'eau'],
    location: 'Burkina Faso'
  },
  {
    id: 'img-007',
    title: {
      fr: 'Réservoir d\'eau potable moderne',
      en: 'Modern drinking water reservoir'
    },
    description: {
      fr: 'Infrastructure de stockage d\'eau potable dans une petite ville, garantissant un approvisionnement continu.',
      en: 'Drinking water storage infrastructure in a small town, ensuring continuous supply.'
    },
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    date: '2022-06-10',
    category: ['infrastructure', 'water', 'urban'],
    tags: ['réservoir', 'stockage', 'eau potable', 'urbain'],
    location: 'Petite ville, Burkina Faso'
  },
  {
    id: 'img-008',
    title: {
      fr: 'Équipe technique SAWES sur le terrain',
      en: 'SAWES technical team in the field'
    },
    description: {
      fr: 'Équipe d\'ingénieurs SAWES effectuant un contrôle qualité sur un chantier d\'infrastructure hydraulique.',
      en: 'SAWES engineering team conducting quality control on a hydraulic infrastructure construction site.'
    },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
    date: '2024-05-18',
    category: ['team', 'infrastructure', 'technical'],
    tags: ['équipe', 'ingénieurs', 'contrôle qualité', 'chantier'],
    location: 'Burkina Faso'
  },
  {
    id: 'img-009',
    title: {
      fr: 'Système d\'irrigation - Périmètre hydroagricole',
      en: 'Irrigation system - Hydro-agricultural perimeter'
    },
    description: {
      fr: 'Aménagement hydroagricole avec système d\'irrigation pour le développement de cultures maraîchères.',
      en: 'Hydro-agricultural development with irrigation system for market gardening development.'
    },
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400&h=300&fit=crop',
    date: '2021-08-25',
    category: ['agriculture', 'irrigation', 'infrastructure'],
    tags: ['irrigation', 'agriculture', 'périmètre irrigué', 'maraîchage'],
    location: 'Province de Poni, Burkina Faso'
  },
  {
    id: 'img-010',
    title: {
      fr: 'Station de traitement d\'eau',
      en: 'Water treatment plant'
    },
    description: {
      fr: 'Installation moderne de traitement d\'eau potable assurant la qualité de l\'eau distribuée.',
      en: 'Modern drinking water treatment facility ensuring quality of distributed water.'
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=300&fit=crop',
    date: '2023-04-12',
    category: ['infrastructure', 'water', 'treatment'],
    tags: ['traitement eau', 'station', 'qualité eau', 'potabilisation'],
    location: 'Burkina Faso'
  },
  {
    id: 'img-011',
    title: {
      fr: 'Journée Mondiale de l\'Eau - Activités scolaires',
      en: 'World Water Day - School activities'
    },
    description: {
      fr: 'Célébration de la Journée Mondiale de l\'Eau avec des activités éducatives dans les écoles primaires.',
      en: 'World Water Day celebration with educational activities in primary schools.'
    },
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop',
    date: '2025-03-22',
    category: ['events', 'education', 'community'],
    tags: ['journée mondiale eau', 'écoles', 'sensibilisation', 'enfants'],
    location: 'Ouagadougou, Burkina Faso'
  },
  {
    id: 'img-012',
    title: {
      fr: 'Assainissement écologique - Quartier périphérique',
      en: 'Ecological sanitation - Peripheral neighborhood'
    },
    description: {
      fr: 'Système d\'assainissement autonome amélioré dans un quartier périphérique de Ouagadougou.',
      en: 'Improved autonomous sanitation system in a peripheral neighborhood of Ouagadougou.'
    },
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=800&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
    date: '2014-10-05',
    category: ['sanitation', 'urban', 'ecology'],
    tags: ['assainissement écologique', 'quartier', 'Ouagadougou', 'autonome'],
    project: 'Ecological Sanitation Ouagadougou',
    location: 'Ouagadougou, Burkina Faso'
  }
]

export function getGalleryImageById(id: string): GalleryImage | undefined {
  return galleryImages.find(img => img.id === id)
}

export function getGalleryImagesByCategory(category: string): GalleryImage[] {
  return galleryImages.filter(img => img.category.includes(category))
}

export function getGalleryImagesByProject(project: string): GalleryImage[] {
  return galleryImages.filter(img => img.project === project)
}

export function getRecentGalleryImages(limit: number = 12): GalleryImage[] {
  return [...galleryImages]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export function getGalleryCategories(): string[] {
  const categories = galleryImages.flatMap(img => img.category)
  return [...new Set(categories)]
}
