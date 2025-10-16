<template>
  <div class="publications-page">
    <!-- Hero -->
    <section class="position-relative bg-dark text-white overflow-hidden" style="margin-top: 88px;">
      <!-- Background pattern overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px);">
        </div>
      </div>

      <div class="container position-relative py-5">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="pt-4 pb-3">
          <ol class="breadcrumb breadcrumb-light mb-0">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-white-50 text-decoration-none">
                <i class="bi bi-house-door me-1"></i>
                {{ $t('breadcrumbs.home') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item">
              <NuxtLink :to="currentLocale === 'fr' ? '/ressources' : '/en/resources'" class="text-white-50 text-decoration-none">
                {{ $t('breadcrumbs.resources') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              {{ $t('resources.publications.title') }}
            </li>
          </ol>
        </nav>

        <!-- Hero Content -->
        <div class="row justify-content-center py-5">
          <div class="col-lg-8 text-center">
            <!-- Icon -->
            <div class="mb-4" data-aos="fade-up">
              <div class="icon-box d-inline-block">
                <div class="bg-white bg-opacity-10 rounded-circle p-4">
                  <i class="bi bi-file-earmark-pdf text-white" style="font-size: 3rem;"></i>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.publications.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="lead fs-4 text-white-75" data-aos="fade-up" data-aos-delay="200">
              {{ $t('resources.publications.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-4 bg-light border-bottom">
      <div class="container">
        <div class="row g-3 align-items-end">
          <div class="col-md-4">
            <label class="form-label small fw-semibold text-muted mb-2">
              <i class="bi bi-funnel me-1"></i>
              {{ $t('resources.publications.types.all') }}
            </label>
            <select v-model="selectedType" class="form-select form-select-lg">
              <option value="all">{{ $t('resources.publications.types.all') }}</option>
              <option value="technical-report">{{ $t('resources.publications.types.technical-report') }}</option>
              <option value="case-study">{{ $t('resources.publications.types.case-study') }}</option>
              <option value="policy-brief">{{ $t('resources.publications.types.policy-brief') }}</option>
              <option value="training-material">{{ $t('resources.publications.types.training-material') }}</option>
              <option value="annual-report">{{ $t('resources.publications.types.annual-report') }}</option>
              <option value="guideline">{{ $t('resources.publications.types.guideline') }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label small fw-semibold text-muted mb-2">
              <i class="bi bi-tag me-1"></i>
              {{ $t('resources.publications.categories.all') }}
            </label>
            <select v-model="selectedCategory" class="form-select form-select-lg">
              <option value="all">{{ $t('resources.publications.categories.all') }}</option>
              <option value="water">{{ $t('resources.publications.categories.water') }}</option>
              <option value="sanitation">{{ $t('resources.publications.categories.sanitation') }}</option>
              <option value="planning">{{ $t('resources.publications.categories.planning') }}</option>
              <option value="infrastructure">{{ $t('resources.publications.categories.infrastructure') }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <div class="text-md-end">
              <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fs-6">
                <i class="bi bi-files me-2"></i>
                <strong>{{ filteredPublications.length }}</strong> publications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Grid -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div v-if="filteredPublications.length > 0" class="row g-4">
          <div 
            v-for="(pub, index) in filteredPublications" 
            :key="pub.id" 
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <PublicationCard :publication="pub" />
          </div>
        </div>
        <div v-else class="text-center py-5" data-aos="fade-up">
          <div class="mb-4">
            <div class="icon-box d-inline-block">
              <div class="bg-light rounded-circle p-4">
                <i class="bi bi-file-earmark-pdf text-muted" style="font-size: 3rem;"></i>
              </div>
            </div>
          </div>
          <h4 class="fw-bold mb-2">{{ $t('resources.publications.no_publications') }}</h4>
          <p class="text-muted">{{ $t('resources.publications.try_different_filter') || 'Try adjusting your filters' }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { publications } from '../data/publications'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const selectedType = ref('all')
const selectedCategory = ref('all')

const filteredPublications = computed(() => {
  return publications.filter(pub => {
    const typeMatch = selectedType.value === 'all' || pub.type === selectedType.value
    const categoryMatch = selectedCategory.value === 'all' || pub.category.includes(selectedCategory.value)
    return typeMatch && categoryMatch
  })
})

// SEO Meta tags
useHead({
  title: () => {
    const { t } = useI18n()
    return t('resources.publications.title') + ' - SAWES'
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const { t } = useI18n()
        return t('resources.publications.subtitle')
      }
    }
  ]
})
</script>

<style scoped>
/* Hero Section */
.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
}

/* Breadcrumb styling for dark background */
.breadcrumb-light {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-light .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-light .breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-light .breadcrumb-item a:hover {
  color: white !important;
}

/* Section Spacing */
.py-lg-6 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

@media (max-width: 991.98px) {
  .py-lg-6 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
