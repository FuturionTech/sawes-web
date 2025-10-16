<template>
  <div class="card project-card h-100 border-0 shadow-sm" :class="{ 'featured-project': project.featured }" data-aos="fade-up">
    <div v-if="project.featured" class="ribbon-wrapper">
      <div class="ribbon bg-primary">{{ $t('projects.featured_label') }}</div>
    </div>

    <div v-if="project.image" class="card-img-top-wrapper position-relative overflow-hidden" style="height: 200px;">
      <NuxtImg
        :src="project.image"
        :alt="locale === 'fr' ? project.titleFr : project.title"
        class="card-img-top object-fit-cover"
        loading="lazy"
        width="400"
        height="200"
      />
      <div class="overlay-gradient"></div>
    </div>

    <div class="card-body d-flex flex-column">
      <!-- Category Badge -->
      <div class="mb-2">
        <span class="badge rounded-pill" :class="categoryBadgeClass">
          <i :class="categoryIcon" class="me-1"></i>
          {{ categoryLabel }}
        </span>
        <span v-if="project.status === 'ongoing'" class="badge bg-success rounded-pill ms-2">
          <i class="bi bi-clock-history me-1"></i>
          {{ $t('projects.status.ongoing') }}
        </span>
      </div>

      <!-- Title -->
      <h5 class="card-title fw-bold mb-2">
        {{ locale === 'fr' ? project.titleFr : project.title }}
      </h5>

      <!-- Date and Location -->
      <div class="text-muted small mb-3">
        <span class="me-3">
          <i class="bi bi-calendar3 me-1"></i>
          {{ project.date }}
        </span>
        <span v-if="project.location">
          <i class="bi bi-geo-alt me-1"></i>
          {{ locale === 'fr' ? project.locationFr : project.location }}
        </span>
      </div>

      <!-- Description -->
      <p class="card-text text-muted small mb-3 flex-grow-1">
        {{ truncatedDescription }}
      </p>

      <!-- Partners -->
      <div v-if="project.partners && project.partners.length > 0" class="mb-3">
        <div class="d-flex flex-wrap gap-1">
          <span
            v-for="(partner, index) in displayedPartners"
            :key="index"
            class="badge bg-light text-dark border"
            style="font-size: 0.7rem;"
          >
            {{ locale === 'fr' && project.partnersFr ? project.partnersFr[index] : partner }}
          </span>
          <span
            v-if="project.partners.length > 2"
            class="badge bg-light text-dark border"
            style="font-size: 0.7rem;"
          >
            +{{ project.partners.length - 2 }}
          </span>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="project.tags && project.tags.length > 0" class="mb-3">
        <div class="d-flex flex-wrap gap-1">
          <span
            v-for="(tag, index) in displayedTags"
            :key="index"
            class="badge bg-secondary bg-opacity-10 text-secondary border-0"
            style="font-size: 0.65rem;"
          >
            {{ locale === 'fr' && project.tagsFr ? project.tagsFr[index] : tag }}
          </span>
        </div>
      </div>

      <!-- View Details Button -->
      <NuxtLink
        :to="projectDetailLink"
        class="btn btn-outline-primary btn-sm mt-auto"
      >
        {{ $t('projects.view_details') }}
        <i class="bi bi-arrow-right ms-1"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'

const props = defineProps<{
  project: Project
}>()

const { locale } = useI18n()

// Compute category badge class
const categoryBadgeClass = computed(() => {
  const categoryClasses = {
    'studies': 'bg-primary bg-opacity-10 text-primary',
    'evaluations': 'bg-info bg-opacity-10 text-info',
    'management': 'bg-success bg-opacity-10 text-success',
    'urban-services': 'bg-warning bg-opacity-10 text-warning',
    'other': 'bg-secondary bg-opacity-10 text-secondary'
  }
  return categoryClasses[props.project.category]
})

// Compute category icon
const categoryIcon = computed(() => {
  const categoryIcons = {
    'studies': 'bi bi-file-earmark-text',
    'evaluations': 'bi bi-clipboard-check',
    'management': 'bi bi-kanban',
    'urban-services': 'bi bi-building',
    'other': 'bi bi-tools'
  }
  return categoryIcons[props.project.category]
})

// Compute category label
const categoryLabel = computed(() => {
  const { t } = useI18n()
  const categoryKeys = {
    'studies': 'projects.categories.studies',
    'evaluations': 'projects.categories.evaluations',
    'management': 'projects.categories.management',
    'urban-services': 'projects.categories.urban_services',
    'other': 'projects.categories.other'
  }
  return t(categoryKeys[props.project.category])
})

// Truncate description
const truncatedDescription = computed(() => {
  const desc = locale.value === 'fr' ? props.project.descriptionFr : props.project.description
  return desc.length > 150 ? desc.substring(0, 150) + '...' : desc
})

// Display only first 2 partners
const displayedPartners = computed(() => {
  return props.project.partners?.slice(0, 2) || []
})

// Display only first 3 tags
const displayedTags = computed(() => {
  return props.project.tags?.slice(0, 3) || []
})

// Project detail link
const projectDetailLink = computed(() => {
  return locale.value === 'fr'
    ? `/projets/${props.project.slug}`
    : `/en/projects/${props.project.slug}`
})
</script>

<style scoped>
.project-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(0, 0, 255, 0.1), rgba(65, 105, 225, 0.1));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 12px 32px rgba(0, 0, 255, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08) !important;
}

.project-card:hover::before {
  opacity: 1;
}

.featured-project {
  border: 2px solid #0000FF !important;
  background: linear-gradient(to bottom, rgba(0, 0, 255, 0.02), #ffffff);
}

.ribbon-wrapper {
  position: absolute;
  top: 15px;
  right: -5px;
  z-index: 10;
}

.ribbon {
  position: relative;
  padding: 6px 16px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #0000FF, #4169E1);
  box-shadow: 0 2px 8px rgba(0, 0, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.ribbon::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: -6px;
  border-left: 6px solid transparent;
  border-right: 6px solid #0000CC;
  border-bottom: 6px solid transparent;
}

.card-img-top-wrapper {
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

.card-img-top-wrapper:hover .card-img-top {
  transform: scale(1.05);
}

.card-img-top {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  pointer-events: none;
}

.badge {
  font-weight: 600;
  letter-spacing: 0.3px;
  border-radius: 6px;
  padding: 0.4em 0.8em;
  font-size: 0.75rem;
}

.card-title {
  color: #1a1a2e;
  line-height: 1.4;
  transition: color 0.2s ease;
  min-height: 2.8em;
}

.project-card:hover .card-title {
  color: #0000FF;
}

.card-text {
  line-height: 1.6;
  color: #6c757d;
}

.text-muted {
  color: #6c757d !important;
}

.btn-outline-primary {
  border-width: 2px;
  font-weight: 600;
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.btn-outline-primary:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 255, 0.2);
}

.badge.bg-light {
  background-color: #f8f9fa !important;
  border: 1px solid #e9ecef;
  color: #495057 !important;
  font-weight: 500;
}

.badge.bg-secondary {
  background-color: rgba(108, 117, 125, 0.1) !important;
  color: #495057 !important;
  font-weight: 500;
}

/* ===================================
   DARK MODE SUPPORT
   =================================== */

:root[data-bs-theme="dark"] .project-card,
.dark .project-card {
  background: #25253a;
  border-color: #3a3a54;
}

:root[data-bs-theme="dark"] .project-card:hover,
.dark .project-card:hover {
  box-shadow: 0 12px 32px rgba(77, 109, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.3) !important;
}

:root[data-bs-theme="dark"] .project-card::before,
.dark .project-card::before {
  background: linear-gradient(135deg, rgba(77, 109, 255, 0.2), rgba(100, 149, 237, 0.2));
}

:root[data-bs-theme="dark"] .featured-project,
.dark .featured-project {
  border-color: #4d6dff !important;
  background: linear-gradient(to bottom, rgba(77, 109, 255, 0.05), #25253a);
}

:root[data-bs-theme="dark"] .ribbon,
.dark .ribbon {
  background: linear-gradient(135deg, #4d6dff, #6495ED);
}

:root[data-bs-theme="dark"] .ribbon::before,
.dark .ribbon::before {
  border-right-color: #3d5de6;
}

:root[data-bs-theme="dark"] .card-img-top-wrapper,
.dark .card-img-top-wrapper {
  background: linear-gradient(135deg, #2d2d44, #25253a);
}

:root[data-bs-theme="dark"] .card-title,
.dark .card-title {
  color: #f8f9fa;
}

:root[data-bs-theme="dark"] .project-card:hover .card-title,
.dark .project-card:hover .card-title {
  color: #6495ED;
}

:root[data-bs-theme="dark"] .card-text,
.dark .card-text {
  color: #adb5bd;
}

:root[data-bs-theme="dark"] .text-muted,
.dark .text-muted {
  color: #adb5bd !important;
}

:root[data-bs-theme="dark"] .badge.bg-light,
.dark .badge.bg-light {
  background-color: #2d2d44 !important;
  border-color: #3a3a54;
  color: #e9ecef !important;
}

:root[data-bs-theme="dark"] .badge.bg-secondary,
.dark .badge.bg-secondary {
  background-color: rgba(173, 181, 189, 0.15) !important;
  color: #e9ecef !important;
}

:root[data-bs-theme="dark"] .btn-outline-primary,
.dark .btn-outline-primary {
  border-color: #4d6dff;
  color: #6495ED;
  background-color: transparent;
}

:root[data-bs-theme="dark"] .btn-outline-primary:hover,
.dark .btn-outline-primary:hover {
  background-color: #4d6dff;
  border-color: #4d6dff;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(77, 109, 255, 0.3);
}
</style>
