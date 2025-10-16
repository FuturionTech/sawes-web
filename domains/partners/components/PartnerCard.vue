<template>
  <div class="partner-card h-100" data-aos="fade-up">
    <div class="card h-100 border-0 shadow-sm hover-lift">
      <div class="card-body p-4 d-flex flex-column">
        <!-- Logo/Icon Section -->
        <div class="partner-logo-container mb-3 text-center">
          <div v-if="partner.logo" class="partner-logo-wrapper">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
          </div>
          <div v-else class="partner-logo-placeholder bg-light rounded-3 d-flex align-items-center justify-content-center">
            <i :class="getCategoryIcon(partner.category)" class="fs-1 text-primary"></i>
          </div>
        </div>

        <!-- Partner Name -->
        <div class="text-center mb-3">
          <h5 class="card-title fw-bold mb-1">{{ partner.name }}</h5>
          <p class="text-muted small mb-0">{{ getFullName }}</p>
        </div>

        <!-- Category Badge -->
        <div class="mb-3 text-center">
          <span :class="`badge bg-${getCategoryColor(partner.category)} bg-opacity-10 text-${getCategoryColor(partner.category)} px-3 py-2`">
            <i :class="getCategoryIcon(partner.category)" class="me-1"></i>
            {{ getCategoryLabel }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-muted flex-grow-1 mb-3 small">
          {{ getDescription }}
        </p>

        <!-- Info Footer -->
        <div class="partner-info mt-auto">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <div v-if="partner.region" class="d-flex align-items-center text-muted small">
              <i class="bi bi-geo-alt me-1"></i>
              <span>{{ partner.region }}</span>
            </div>
            <div v-if="partner.yearStarted" class="d-flex align-items-center text-muted small">
              <i class="bi bi-calendar-check me-1"></i>
              <span>{{ $t('partners.card.since') }} {{ partner.yearStarted }}</span>
            </div>
          </div>

          <!-- Projects Count -->
          <div v-if="partner.projects && partner.projects.length > 0" class="mb-3">
            <div class="d-flex align-items-center text-primary small">
              <i class="bi bi-folder2-open me-2"></i>
              <span>{{ partner.projects.length }} {{ $t('partners.card.projects') }}</span>
            </div>
          </div>

          <!-- Website Link -->
          <div v-if="partner.website" class="d-grid">
            <a
              :href="partner.website"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-outline-primary"
            >
              <i class="bi bi-link-45deg me-1"></i>
              {{ $t('partners.card.website') }}
              <i class="bi bi-arrow-up-right ms-1"></i>
            </a>
          </div>

          <!-- Featured Badge -->
          <div v-if="partner.featured" class="position-absolute top-0 end-0 m-3">
            <span class="badge bg-warning text-dark">
              <i class="bi bi-star-fill"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Partner } from '../data/partners'

interface Props {
  partner: Partner
}

const props = defineProps<Props>()
const { locale, t } = useI18n()

const getFullName = computed(() => {
  return props.partner.fullName[locale.value as 'fr' | 'en']
})

const getDescription = computed(() => {
  return props.partner.description[locale.value as 'fr' | 'en']
})

const getCategoryLabel = computed(() => {
  const category = props.partner.category
  return t(`partners.categories.${category}`)
})

const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    international: 'bi-globe2',
    bilateral: 'bi-people',
    ngo: 'bi-heart',
    private: 'bi-briefcase',
    government: 'bi-building',
    academic: 'bi-book'
  }
  return icons[category] || 'bi-circle'
}

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    international: 'primary',
    bilateral: 'success',
    ngo: 'danger',
    private: 'info',
    government: 'warning',
    academic: 'secondary'
  }
  return colors[category] || 'primary'
}
</script>

<style scoped>
.partner-card {
  transition: transform 0.3s ease;
}

.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
}

.partner-logo-container {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-logo-placeholder {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.card-body {
  position: relative;
}
</style>
