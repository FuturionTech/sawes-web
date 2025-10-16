<template>
  <section class="py-5 bg-white">
    <div class="container">
      <!-- Section Header -->
      <div class="row mb-5">
        <div class="col-lg-10 mx-auto text-center" data-aos="fade-up">
          <h2 class="display-5 fw-bold mb-3">{{ $t('partners.grid.title') }}</h2>
          <p class="lead text-body-secondary mb-0">{{ $t('partners.grid.subtitle') }}</p>
        </div>
      </div>

      <!-- Category Filters -->
      <div class="row mb-5">
        <div class="col-12" data-aos="fade-up">
          <div class="d-flex flex-wrap justify-content-center gap-2">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="['btn', selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary', 'rounded-pill']"
            >
              <i :class="category.icon" class="me-2"></i>
              {{ getCategoryLabel(category) }}
              <span class="badge bg-white text-primary ms-2">
                {{ getPartnerCount(category.id) }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Search and Sort -->
      <div class="row mb-4">
        <div class="col-lg-6 mx-auto">
          <div class="input-group input-group-lg shadow-sm" data-aos="fade-up">
            <span class="input-group-text bg-white border-end-0">
              <i class="bi bi-search"></i>
            </span>
            <input
              v-model="searchQuery"
              type="text"
              class="form-control border-start-0 ps-0"
              :placeholder="$t('partners.grid.search_placeholder')"
            />
          </div>
        </div>
      </div>

      <!-- Partners Grid -->
      <div class="row g-4 mb-5">
        <div
          v-for="partner in filteredPartners"
          :key="partner.id"
          class="col-md-6 col-lg-4"
        >
          <PartnerCard :partner="partner" />
        </div>
      </div>

      <!-- No Results -->
      <div v-if="filteredPartners.length === 0" class="row">
        <div class="col-12 text-center py-5" data-aos="fade-up">
          <i class="bi bi-search display-1 text-muted mb-3"></i>
          <h4 class="text-muted">{{ $t('partners.grid.no_results') }}</h4>
          <p class="text-muted">{{ $t('partners.grid.no_results_message') }}</p>
          <button @click="resetFilters" class="btn btn-primary">
            {{ $t('partners.grid.reset_filters') }}
          </button>
        </div>
      </div>

      <!-- Featured Partners Section -->
      <div v-if="selectedCategory === 'all' && !searchQuery" class="row mt-5 pt-5">
        <div class="col-12 mb-4" data-aos="fade-up">
          <div class="d-flex align-items-center justify-content-center mb-4">
            <div class="bg-primary" style="height: 2px; width: 50px;"></div>
            <h3 class="fw-bold mx-3 mb-0">{{ $t('partners.grid.featured_title') }}</h3>
            <div class="bg-primary" style="height: 2px; width: 50px;"></div>
          </div>
          <p class="text-center text-muted">{{ $t('partners.grid.featured_subtitle') }}</p>
        </div>

        <div class="col-12">
          <div class="row g-4">
            <div
              v-for="partner in featuredPartners"
              :key="partner.id"
              class="col-md-6 col-lg-3"
            >
              <div class="card border-0 shadow-sm h-100 text-center p-4 hover-lift" data-aos="zoom-in">
                <div class="card-body">
                  <div class="partner-logo-sm mb-3 mx-auto">
                    <div v-if="!partner.logo" class="bg-light rounded-circle d-flex align-items-center justify-content-center" style="width: 80px; height: 80px; margin: 0 auto;">
                      <i :class="getCategoryIcon(partner.category)" class="fs-1 text-primary"></i>
                    </div>
                  </div>
                  <h6 class="fw-bold mb-1">{{ partner.name }}</h6>
                  <p class="small text-muted mb-0">{{ getPartnerFullName(partner) }}</p>
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
import { ref, computed } from 'vue'
import { partners, partnerCategories } from '../data/partners'
import type { Partner } from '../data/partners'

const { locale, t } = useI18n()

const selectedCategory = ref<string>('all')
const searchQuery = ref<string>('')

const categories = partnerCategories

const filteredPartners = computed(() => {
  let result = partners

  // Filter by category
  if (selectedCategory.value !== 'all') {
    result = result.filter(p => p.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.fullName.fr.toLowerCase().includes(query) ||
      p.fullName.en.toLowerCase().includes(query) ||
      p.description.fr.toLowerCase().includes(query) ||
      p.description.en.toLowerCase().includes(query)
    )
  }

  return result
})

const featuredPartners = computed(() => {
  return partners.filter(p => p.featured === true)
})

const getPartnerCount = (categoryId: string): number => {
  if (categoryId === 'all') {
    return partners.length
  }
  return partners.filter(p => p.category === categoryId).length
}

const getCategoryLabel = (category: typeof categories[0]) => {
  return category.label[locale.value as 'fr' | 'en']
}

const getPartnerFullName = (partner: Partner) => {
  return partner.fullName[locale.value as 'fr' | 'en']
}

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

const resetFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
}
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 24px rgba(0,0,0,.12)!important;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) section {
  background: var(--bs-dark) !important;
}

:global([data-bs-theme="dark"]) .hover-lift {
  background: #2d3436 !important;
}

:global([data-bs-theme="dark"]) .hover-lift:hover {
  box-shadow: 0 8px 24px rgba(13, 110, 253, 0.2)!important;
}

/* Category Filters */
.btn-outline-primary {
  transition: all 0.2s ease;
}

.btn-outline-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
}

.btn-primary {
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.3);
}

/* Search input */
.input-group {
  transition: all 0.2s ease;
}

.input-group:focus-within {
  box-shadow: 0 4px 16px rgba(13, 110, 253, 0.15)!important;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hover-lift,
  .btn-outline-primary {
    transition: none !important;
  }

  .hover-lift:hover,
  .btn-outline-primary:hover {
    transform: none !important;
  }
}
</style>
