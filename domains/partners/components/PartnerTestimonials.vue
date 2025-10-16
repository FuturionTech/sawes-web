<template>
  <section class="py-5 bg-white">
    <div class="container">
      <!-- Section Header -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto text-center" data-aos="fade-up">
          <h2 class="display-5 fw-bold mb-3">{{ $t('partners.testimonials.title') }}</h2>
          <p class="lead text-body-secondary mb-0">{{ $t('partners.testimonials.subtitle') }}</p>
        </div>
      </div>

      <!-- Success Stories -->
      <div class="row g-4 mb-5">
        <div
          v-for="(story, index) in successStories"
          :key="index"
          class="col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="card border-0 shadow-sm h-100 hover-lift">
            <div class="card-body p-4">
              <!-- Icon -->
              <div class="mb-4">
                <div class="icon-box bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                  <i :class="story.icon" class="fs-3"></i>
                </div>
              </div>

              <!-- Title -->
              <h5 class="card-title fw-bold mb-3">{{ getStoryTitle(story) }}</h5>

              <!-- Description -->
              <p class="text-muted mb-4">{{ getStoryDescription(story) }}</p>

              <!-- Stats -->
              <div v-if="story.stats" class="row g-3 mb-4">
                <div
                  v-for="(stat, statIndex) in story.stats"
                  :key="statIndex"
                  class="col-6"
                >
                  <div class="text-center">
                    <div class="h4 fw-bold text-primary mb-0">{{ stat.value }}</div>
                    <div class="small text-muted">{{ getStatLabel(stat) }}</div>
                  </div>
                </div>
              </div>

              <!-- Partner Badge -->
              <div class="border-top pt-3">
                <div class="d-flex align-items-center">
                  <div class="flex-grow-1">
                    <div class="small text-muted">{{ $t('partners.testimonials.partner') }}</div>
                    <div class="fw-bold">{{ story.partner }}</div>
                  </div>
                  <div>
                    <span class="badge bg-success">{{ story.year }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact Numbers -->
      <div class="row">
        <div class="col-12">
          <div class="card border-0 shadow-sm bg-primary text-white" data-aos="fade-up">
            <div class="card-body p-5">
              <div class="row text-center g-4">
                <div class="col-6 col-md-3">
                  <div class="display-4 fw-bold mb-2">100k+</div>
                  <div class="text-white-50">{{ $t('partners.testimonials.impact.beneficiaries') }}</div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="display-4 fw-bold mb-2">50+</div>
                  <div class="text-white-50">{{ $t('partners.testimonials.impact.projects') }}</div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="display-4 fw-bold mb-2">30+</div>
                  <div class="text-white-50">{{ $t('partners.testimonials.impact.partners') }}</div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="display-4 fw-bold mb-2">25+</div>
                  <div class="text-white-50">{{ $t('partners.testimonials.impact.years') }}</div>
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

interface Stat {
  value: string
  label: {
    fr: string
    en: string
  }
}

interface SuccessStory {
  icon: string
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
  stats?: Stat[]
  partner: string
  year: string
}

const successStories: SuccessStory[] = [
  {
    icon: 'bi-droplet-fill',
    title: {
      fr: 'Accès à l\'eau potable',
      en: 'Access to clean water'
    },
    description: {
      fr: 'Réalisation de 1000 forages positifs avec la République de Chine (Taïwan), améliorant l\'accès à l\'eau potable pour des milliers de familles rurales.',
      en: 'Implementation of 1000 successful boreholes with the Republic of China (Taiwan), improving access to clean water for thousands of rural families.'
    },
    stats: [
      {
        value: '1000+',
        label: {
          fr: 'Forages',
          en: 'Boreholes'
        }
      },
      {
        value: '50k+',
        label: {
          fr: 'Bénéficiaires',
          en: 'Beneficiaries'
        }
      }
    ],
    partner: 'République de Chine (Taïwan)',
    year: '2004-2008'
  },
  {
    icon: 'bi-building-check',
    title: {
      fr: 'Assainissement urbain',
      en: 'Urban sanitation'
    },
    description: {
      fr: 'Programme d\'assainissement autonome amélioré à Bobo-Dioulasso en partenariat avec l\'ONEA, touchant des milliers de ménages urbains.',
      en: 'Improved autonomous sanitation program in Bobo-Dioulasso in partnership with ONEA, reaching thousands of urban households.'
    },
    stats: [
      {
        value: '5000+',
        label: {
          fr: 'Ménages',
          en: 'Households'
        }
      },
      {
        value: '30k+',
        label: {
          fr: 'Personnes',
          en: 'People'
        }
      }
    ],
    partner: 'ONEA / CODEX',
    year: '2013-2015'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: {
      fr: 'Développement régional',
      en: 'Regional development'
    },
    description: {
      fr: 'Programme VREO financé par l\'UE pour la valorisation des ressources en eau de l\'Ouest, contribuant au développement économique régional.',
      en: 'EU-funded VREO program for Western water resources development, contributing to regional economic development.'
    },
    stats: [
      {
        value: '6 ans',
        label: {
          fr: 'Durée',
          en: 'Duration'
        }
      },
      {
        value: '3',
        label: {
          fr: 'Régions',
          en: 'Regions'
        }
      }
    ],
    partner: 'UE-FED / SOFRECO',
    year: '2004-2010'
  }
]

const getStoryTitle = (story: SuccessStory) => {
  return story.title[locale.value as 'fr' | 'en']
}

const getStoryDescription = (story: SuccessStory) => {
  return story.description[locale.value as 'fr' | 'en']
}

const getStatLabel = (stat: Stat) => {
  return stat.label[locale.value as 'fr' | 'en']
}
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid transparent;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(0,0,0,.12)!important;
  border-color: rgba(13, 110, 253, 0.1);
}

.icon-box {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover .icon-box {
  transform: scale(1.15) rotate(5deg);
  background: rgba(13, 110, 253, 0.15) !important;
}

/* Impact card */
.bg-primary {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%) !important;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) section {
  background: var(--bs-dark) !important;
}

:global([data-bs-theme="dark"]) .hover-lift {
  background: var(--bs-dark) !important;
  border-color: rgba(13, 110, 253, 0.15);
}

:global([data-bs-theme="dark"]) .hover-lift:hover {
  background: #2d3436 !important;
  box-shadow: 0 16px 40px rgba(13, 110, 253, 0.2)!important;
  border-color: rgba(13, 110, 253, 0.3);
}

:global([data-bs-theme="dark"]) .icon-box {
  background: rgba(13, 110, 253, 0.15) !important;
}

:global([data-bs-theme="dark"]) .card:hover .icon-box {
  background: rgba(13, 110, 253, 0.25) !important;
}

/* Stats animation */
.h4 {
  transition: color 0.2s ease;
}

.card:hover .h4 {
  transform: scale(1.1);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hover-lift,
  .icon-box,
  .h4 {
    transition: none !important;
  }

  .hover-lift:hover,
  .card:hover .icon-box,
  .card:hover .h4 {
    transform: none !important;
  }
}
</style>
