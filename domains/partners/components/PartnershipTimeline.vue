<template>
  <section class="py-5 bg-white">
    <div class="container">
      <!-- Section Header -->
      <div class="row mb-5">
        <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
          <h2 class="display-5 fw-bold mb-3">{{ $t('partners.timeline.title') }}</h2>
          <p class="lead text-muted">{{ $t('partners.timeline.subtitle') }}</p>
        </div>
      </div>

      <!-- Timeline -->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="timeline">
            <div
              v-for="(milestone, index) in milestones"
              :key="index"
              class="timeline-item"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="timeline-marker">
                <div class="timeline-icon">
                  <i :class="milestone.icon" class="fs-4"></i>
                </div>
              </div>
              <div class="timeline-content">
                <div class="card border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex align-items-center mb-3">
                      <span class="badge bg-primary px-3 py-2 me-3">{{ milestone.year }}</span>
                      <h5 class="mb-0 fw-bold">{{ getMilestoneTitle(milestone) }}</h5>
                    </div>
                    <p class="text-muted mb-3">{{ getMilestoneDescription(milestone) }}</p>
                    <div v-if="milestone.partners" class="d-flex flex-wrap gap-2">
                      <span
                        v-for="partner in milestone.partners"
                        :key="partner"
                        class="badge bg-light text-dark"
                      >
                        {{ partner }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

interface Milestone {
  year: string
  icon: string
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  partners?: string[]
}

const milestones: Milestone[] = [
  {
    year: '2000',
    icon: 'bi-star-fill',
    title: {
      fr: 'Fondation de SAWES',
      en: 'SAWES Foundation'
    },
    description: {
      fr: 'Création de SAWES avec pour mission de promouvoir la qualité de la vie dans les domaines de l\'eau, de l\'assainissement et de l\'environnement.',
      en: 'Creation of SAWES with the mission to promote quality of life in water, sanitation and environment.'
    }
  },
  {
    year: '2003-2008',
    icon: 'bi-water',
    title: {
      fr: 'Grands projets de barrages',
      en: 'Major dam projects'
    },
    description: {
      fr: 'Réalisation d\'études et contrôle des travaux de construction de barrages majeurs (Liriba, Dadouné, Yakouta, Soum).',
      en: 'Studies and construction supervision of major dams (Liriba, Dadouné, Yakouta, Soum).'
    },
    partners: ['État du Burkina Faso', 'République de Chine (Taïwan)', 'BID/Koweït']
  },
  {
    year: '2004-2010',
    icon: 'bi-globe2',
    title: {
      fr: 'Programme VREO',
      en: 'VREO Program'
    },
    description: {
      fr: 'Assistance technique pour le Programme de Valorisation des Ressources en Eau de l\'Ouest, financé par l\'Union Européenne.',
      en: 'Technical assistance for the Western Water Resources Development Program, funded by the European Union.'
    },
    partners: ['UE-FED', 'SOFRECO']
  },
  {
    year: '2006',
    icon: 'bi-clipboard-data',
    title: {
      fr: 'Programme National PNAEPA',
      en: 'PNAEPA National Program'
    },
    description: {
      fr: 'Élaboration du Programme National d\'Approvisionnement en Eau Potable et d\'Assainissement à l\'horizon 2015 avec la BAD.',
      en: 'Development of the National Drinking Water Supply and Sanitation Program for 2015 with AfDB.'
    },
    partners: ['BAD', 'Bureau EDE Sénégal']
  },
  {
    year: '2009',
    icon: 'bi-shield-check',
    title: {
      fr: 'Évaluations pour l\'AFD',
      en: 'AFD Evaluations'
    },
    description: {
      fr: 'Évaluation rétrospective des projets du barrage de Bagré et de l\'hydraulique scolaire pour l\'Agence Française de Développement.',
      en: 'Retrospective evaluation of Bagré dam and school water projects for the French Development Agency.'
    },
    partners: ['AFD']
  },
  {
    year: '2010-2012',
    icon: 'bi-diagram-3',
    title: {
      fr: 'Coordination régionale CEDEAO',
      en: 'ECOWAS Regional Coordination'
    },
    description: {
      fr: 'Travaux sur les bassins transfrontaliers et plan d\'action régional pour la politique des ressources en eau de l\'Afrique de l\'Ouest.',
      en: 'Work on transboundary basins and regional action plan for West African water resources policy.'
    },
    partners: ['CCRE-CEDEAO']
  },
  {
    year: '2013-2015',
    icon: 'bi-buildings',
    title: {
      fr: 'Assainissement à Bobo-Dioulasso',
      en: 'Sanitation in Bobo-Dioulasso'
    },
    description: {
      fr: 'Ingénierie sociale et marketing pour les ouvrages d\'assainissement autonome amélioré en partenariat avec l\'ONEA.',
      en: 'Social engineering and marketing for improved autonomous sanitation facilities in partnership with ONEA.'
    },
    partners: ['ONEA', 'CODEX']
  },
  {
    year: '2021-2025',
    icon: 'bi-hand-thumbs-up',
    title: {
      fr: 'Gestion de services ruraux',
      en: 'Rural service management'
    },
    description: {
      fr: 'Contrats de gestion des adductions d\'eau potable dans les communes rurales, assurant maintenance et développement des services.',
      en: 'Management contracts for drinking water supply systems in rural municipalities, ensuring maintenance and service development.'
    },
    partners: ['Communes Rurales', 'État du Burkina Faso']
  }
]

const getMilestoneTitle = (milestone: Milestone) => {
  return milestone.title[locale.value as 'fr' | 'en']
}

const getMilestoneDescription = (milestone: Milestone) => {
  return milestone.description[locale.value as 'fr' | 'en']
}
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #0d6efd, #0dcaf0);
}

.timeline-item {
  position: relative;
  padding-left: 120px;
  padding-bottom: 3rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 0;
  top: 0;
}

.timeline-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0d6efd, #0dcaf0);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 0.5rem 1rem rgba(13, 110, 253, 0.3);
}

.timeline-content {
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 45px;
  width: 20px;
  height: 3px;
  background: #0d6efd;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-icon {
    width: 60px;
    height: 60px;
  }

  .timeline-item {
    padding-left: 80px;
  }

  .timeline-content::before {
    left: -10px;
    width: 10px;
  }
}
</style>
