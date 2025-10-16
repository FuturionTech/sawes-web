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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}

.featured-project {
  border: 2px solid var(--bs-primary) !important;
}

.ribbon-wrapper {
  position: absolute;
  top: 10px;
  right: -5px;
  z-index: 10;
}

.ribbon {
  position: relative;
  padding: 5px 15px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.ribbon::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid var(--bs-primary);
  border-bottom: 5px solid transparent;
  filter: brightness(0.7);
}

.card-img-top-wrapper {
  position: relative;
  overflow: hidden;
}

.overlay-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
}

.badge {
  font-weight: 500;
}
</style>
