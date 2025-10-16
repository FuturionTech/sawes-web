<template>
  <div v-if="project" class="project-detail-page">
    <!-- Hero Section -->
    <section class="project-hero bg-gradient py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" data-aos="fade-down">
              <ol class="breadcrumb text-white-50">
                <li class="breadcrumb-item">
                  <NuxtLink :to="locale === 'fr' ? '/' : '/en'" class="text-white text-decoration-none">
                    {{ $t('breadcrumbs.home') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink :to="projectsLink" class="text-white text-decoration-none">
                    {{ $t('breadcrumbs.projects') }}
                  </NuxtLink>
                </li>
                <li class="breadcrumb-item active text-white" aria-current="page">
                  {{ locale === 'fr' ? project.titleFr : project.title }}
                </li>
              </ol>
            </nav>

            <!-- Project Header -->
            <div class="text-white" data-aos="fade-up">
              <!-- Category & Status Badges -->
              <div class="mb-3">
                <span class="badge bg-white text-primary px-3 py-2 me-2">
                  <i :class="categoryIcon" class="me-1"></i>
                  {{ categoryLabel }}
                </span>
                <span v-if="project.featured" class="badge bg-warning text-dark px-3 py-2 me-2">
                  <i class="bi bi-star-fill me-1"></i>
                  {{ $t('projects.featured_label') }}
                </span>
                <span v-if="project.status === 'ongoing'" class="badge bg-success px-3 py-2">
                  <i class="bi bi-clock-history me-1"></i>
                  {{ $t('projects.status.ongoing') }}
                </span>
              </div>

              <!-- Title -->
              <h1 class="display-4 fw-bold mb-4">
                {{ locale === 'fr' ? project.titleFr : project.title }}
              </h1>

              <!-- Meta Information -->
              <div class="d-flex flex-wrap gap-4 mb-4">
                <div class="d-flex align-items-center">
                  <i class="bi bi-calendar3 me-2" style="font-size: 1.25rem;"></i>
                  <div>
                    <small class="d-block text-white-50">{{ $t('projects.detail.date') }}</small>
                    <strong>{{ project.date }}</strong>
                  </div>
                </div>
                <div v-if="project.duration" class="d-flex align-items-center">
                  <i class="bi bi-hourglass-split me-2" style="font-size: 1.25rem;"></i>
                  <div>
                    <small class="d-block text-white-50">{{ $t('projects.detail.duration') }}</small>
                    <strong>{{ project.duration }}</strong>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <i class="bi bi-geo-alt me-2" style="font-size: 1.25rem;"></i>
                  <div>
                    <small class="d-block text-white-50">{{ $t('projects.detail.location') }}</small>
                    <strong>{{ locale === 'fr' ? project.locationFr : project.location }}</strong>
                  </div>
                </div>
                <div v-if="project.capacity" class="d-flex align-items-center">
                  <i class="bi bi-droplet me-2" style="font-size: 1.25rem;"></i>
                  <div>
                    <small class="d-block text-white-50">{{ $t('projects.detail.capacity') }}</small>
                    <strong>{{ project.capacity }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">
            <!-- Description -->
            <div class="mb-5" data-aos="fade-up">
              <h2 class="h3 mb-4">{{ $t('projects.detail.overview') }}</h2>
              <p class="lead text-muted">
                {{ locale === 'fr' ? project.descriptionFr : project.description }}
              </p>
            </div>

            <!-- Scope of Work -->
            <div v-if="project.scope && project.scope.length > 0" class="mb-5" data-aos="fade-up">
              <h2 class="h3 mb-4">{{ $t('projects.detail.scope') }}</h2>
              <ul class="list-group list-group-flush">
                <li
                  v-for="(item, index) in scopeItems"
                  :key="index"
                  class="list-group-item border-0 px-0 py-3"
                >
                  <i class="bi bi-check-circle-fill text-success me-3"></i>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Outcomes -->
            <div v-if="project.outcomes && project.outcomes.length > 0" class="mb-5" data-aos="fade-up">
              <h2 class="h3 mb-4">{{ $t('projects.detail.outcomes') }}</h2>
              <div class="row g-3">
                <div
                  v-for="(outcome, index) in outcomeItems"
                  :key="index"
                  class="col-md-6"
                >
                  <div class="card border-0 bg-light h-100">
                    <div class="card-body">
                      <div class="d-flex align-items-start">
                        <div class="flex-shrink-0">
                          <div class="icon-circle bg-primary bg-opacity-10 text-primary">
                            <i class="bi bi-trophy"></i>
                          </div>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <p class="mb-0">{{ outcome }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div v-if="project.tags && project.tags.length > 0" class="mb-5" data-aos="fade-up">
              <h2 class="h3 mb-4">{{ $t('projects.detail.related_topics') }}</h2>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="(tag, index) in tagItems"
                  :key="index"
                  class="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2"
                  style="font-size: 0.9rem;"
                >
                  <i class="bi bi-tag me-1"></i>
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4">
            <div class="sticky-top" style="top: 100px;">
              <!-- Partners Card -->
              <div class="card border-0 shadow-sm mb-4" data-aos="fade-up">
                <div class="card-body">
                  <h5 class="card-title mb-4">
                    <i class="bi bi-people me-2 text-primary"></i>
                    {{ $t('projects.detail.partners') }}
                  </h5>
                  <div class="mb-4">
                    <h6 class="small text-muted text-uppercase mb-3">
                      {{ $t('projects.detail.main_partners') }}
                    </h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="(partner, index) in partnersList"
                        :key="index"
                        class="mb-2"
                      >
                        <i class="bi bi-building text-primary me-2"></i>
                        <small>{{ partner }}</small>
                      </li>
                    </ul>
                  </div>

                  <div v-if="project.executionPartners && project.executionPartners.length > 0" class="mb-4">
                    <h6 class="small text-muted text-uppercase mb-3">
                      {{ $t('projects.detail.execution_partners') }}
                    </h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="(partner, index) in executionPartnersList"
                        :key="index"
                        class="mb-2"
                      >
                        <i class="bi bi-gear text-success me-2"></i>
                        <small>{{ partner }}</small>
                      </li>
                    </ul>
                  </div>

                  <div v-if="project.technicalPartners && project.technicalPartners.length > 0">
                    <h6 class="small text-muted text-uppercase mb-3">
                      {{ $t('projects.detail.technical_partners') }}
                    </h6>
                    <ul class="list-unstyled">
                      <li
                        v-for="(partner, index) in technicalPartnersList"
                        :key="index"
                        class="mb-2"
                      >
                        <i class="bi bi-lightbulb text-warning me-2"></i>
                        <small>{{ partner }}</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Project Info Card -->
              <div class="card border-0 shadow-sm mb-4" data-aos="fade-up" data-aos-delay="100">
                <div class="card-body">
                  <h5 class="card-title mb-4">
                    <i class="bi bi-info-circle me-2 text-primary"></i>
                    {{ $t('projects.detail.project_info') }}
                  </h5>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <strong class="d-block small text-muted mb-1">{{ $t('projects.detail.category') }}</strong>
                      <span class="badge" :class="categoryBadgeClass">
                        {{ categoryLabel }}
                      </span>
                    </li>
                    <li class="mb-3">
                      <strong class="d-block small text-muted mb-1">{{ $t('projects.detail.region') }}</strong>
                      {{ locale === 'fr' ? project.regionFr : project.region }}
                    </li>
                    <li class="mb-3">
                      <strong class="d-block small text-muted mb-1">{{ $t('projects.detail.year') }}</strong>
                      {{ project.year }}
                    </li>
                    <li v-if="project.status">
                      <strong class="d-block small text-muted mb-1">{{ $t('projects.detail.status') }}</strong>
                      <span class="badge" :class="project.status === 'ongoing' ? 'bg-success' : 'bg-primary'">
                        {{ $t(`projects.status.${project.status}`) }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Share Card -->
              <div class="card border-0 shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <div class="card-body">
                  <h5 class="card-title mb-3">
                    <i class="bi bi-share me-2 text-primary"></i>
                    {{ $t('projects.detail.share') }}
                  </h5>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-primary btn-sm flex-fill" @click="shareOnLinkedIn">
                      <i class="bi bi-linkedin"></i>
                    </button>
                    <button class="btn btn-outline-primary btn-sm flex-fill" @click="shareOnTwitter">
                      <i class="bi bi-twitter"></i>
                    </button>
                    <button class="btn btn-outline-primary btn-sm flex-fill" @click="shareOnFacebook">
                      <i class="bi bi-facebook"></i>
                    </button>
                    <button class="btn btn-outline-primary btn-sm flex-fill" @click="copyLink">
                      <i class="bi bi-link-45deg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section v-if="relatedProjects.length > 0" class="bg-light py-5">
      <div class="container">
        <h2 class="h3 mb-4" data-aos="fade-up">{{ $t('projects.detail.related_projects') }}</h2>
        <div class="row g-4">
          <div
            v-for="relatedProject in relatedProjects"
            :key="relatedProject.id"
            class="col-md-4"
          >
            <ProjectCard :project="relatedProject" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 class="mb-4">{{ $t('projects.detail.cta.title') }}</h2>
            <p class="lead text-muted mb-4">{{ $t('projects.detail.cta.description') }}</p>
            <div class="d-flex gap-3 justify-content-center">
              <NuxtLink :to="contactLink" class="btn btn-primary btn-lg">
                <i class="bi bi-envelope me-2"></i>
                {{ $t('projects.detail.cta.contact') }}
              </NuxtLink>
              <NuxtLink :to="projectsLink" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-arrow-left me-2"></i>
                {{ $t('projects.detail.cta.back_to_projects') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Project Not Found -->
  <div v-else class="container py-5">
    <div class="row">
      <div class="col-lg-6 mx-auto text-center">
        <div class="mb-4">
          <i class="bi bi-exclamation-triangle text-warning" style="font-size: 5rem;"></i>
        </div>
        <h1 class="mb-3">{{ $t('projects.detail.not_found.title') }}</h1>
        <p class="lead text-muted mb-4">{{ $t('projects.detail.not_found.message') }}</p>
        <NuxtLink :to="projectsLink" class="btn btn-primary">
          <i class="bi bi-arrow-left me-2"></i>
          {{ $t('projects.detail.not_found.back_to_projects') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProjectBySlug, getAllProjects } from '../data/projects'
import type { Project } from '../data/projects'

const route = useRoute()
const { t, locale } = useI18n()

// Get project by slug
const slug = route.params.slug as string
const project = getProjectBySlug(slug)

// SEO
if (project) {
  const title = locale.value === 'fr' ? project.titleFr : project.title
  useHead({
    title: `${title} - ${t('meta.projects.title')}`,
    meta: [
      { name: 'description', content: (locale.value === 'fr' ? project.descriptionFr : project.description).substring(0, 160) },
      { name: 'keywords', content: project.tags?.join(', ') || '' }
    ]
  })
}

// Computed properties
const categoryIcon = computed(() => {
  if (!project) return ''
  const categoryIcons = {
    'studies': 'bi bi-file-earmark-text',
    'evaluations': 'bi bi-clipboard-check',
    'management': 'bi bi-kanban',
    'urban-services': 'bi bi-building',
    'other': 'bi bi-tools'
  }
  return categoryIcons[project.category]
})

const categoryLabel = computed(() => {
  if (!project) return ''
  const categoryKeys = {
    'studies': 'projects.categories.studies',
    'evaluations': 'projects.categories.evaluations',
    'management': 'projects.categories.management',
    'urban-services': 'projects.categories.urban_services',
    'other': 'projects.categories.other'
  }
  return t(categoryKeys[project.category])
})

const categoryBadgeClass = computed(() => {
  if (!project) return ''
  const categoryClasses = {
    'studies': 'bg-primary',
    'evaluations': 'bg-info',
    'management': 'bg-success',
    'urban-services': 'bg-warning',
    'other': 'bg-secondary'
  }
  return categoryClasses[project.category]
})

const scopeItems = computed(() => {
  if (!project || !project.scope) return []
  return locale.value === 'fr' && project.scopeFr ? project.scopeFr : project.scope
})

const outcomeItems = computed(() => {
  if (!project || !project.outcomes) return []
  return locale.value === 'fr' && project.outcomesFr ? project.outcomesFr : project.outcomes
})

const tagItems = computed(() => {
  if (!project || !project.tags) return []
  return locale.value === 'fr' && project.tagsFr ? project.tagsFr : project.tags
})

const partnersList = computed(() => {
  if (!project || !project.partners) return []
  return locale.value === 'fr' && project.partnersFr ? project.partnersFr : project.partners
})

const executionPartnersList = computed(() => {
  if (!project || !project.executionPartners) return []
  return locale.value === 'fr' && project.executionPartnersFr ? project.executionPartnersFr : project.executionPartners
})

const technicalPartnersList = computed(() => {
  if (!project || !project.technicalPartners) return []
  return locale.value === 'fr' && project.technicalPartnersFr ? project.technicalPartnersFr : project.technicalPartners
})

const relatedProjects = computed(() => {
  if (!project) return []
  return getAllProjects()
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3)
})

const projectsLink = computed(() => {
  return locale.value === 'fr' ? '/projets' : '/en/projects'
})

const contactLink = computed(() => {
  return locale.value === 'fr' ? '/contact' : '/en/contact'
})

// Methods
const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank')
}

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href)
  const text = encodeURIComponent(locale.value === 'fr' ? project?.titleFr || '' : project?.title || '')
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank')
}

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href)
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    alert(t('projects.detail.link_copied'))
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}
</script>

<style scoped>
.project-hero {
  background: linear-gradient(135deg, #0000FF 0%, #4169E1 100%);
  position: relative;
  overflow: hidden;
}

.project-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.4;
}

.wave-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 80px;
}

.wave-divider .shape-fill {
  fill: #FFFFFF;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.sticky-top {
  position: sticky;
  z-index: 10;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}
</style>
