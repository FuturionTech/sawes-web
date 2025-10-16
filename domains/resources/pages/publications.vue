<template>
  <div class="publications-page">
    <!-- Hero -->
    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-4 fw-bold mb-3">{{ $t('resources.publications.title') }}</h1>
            <p class="lead">{{ $t('resources.publications.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-4 bg-light border-bottom">
      <div class="container">
        <div class="row g-3">
          <div class="col-md-4">
            <label class="form-label small text-muted mb-2">{{ $t('resources.publications.types.all') }}</label>
            <select v-model="selectedType" class="form-select">
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
            <label class="form-label small text-muted mb-2">{{ $t('resources.publications.categories.all') }}</label>
            <select v-model="selectedCategory" class="form-select">
              <option value="all">{{ $t('resources.publications.categories.all') }}</option>
              <option value="water">{{ $t('resources.publications.categories.water') }}</option>
              <option value="sanitation">{{ $t('resources.publications.categories.sanitation') }}</option>
              <option value="planning">{{ $t('resources.publications.categories.planning') }}</option>
              <option value="infrastructure">{{ $t('resources.publications.categories.infrastructure') }}</option>
            </select>
          </div>
          <div class="col-md-4 text-md-end align-self-end">
            <span class="text-muted small">{{ filteredPublications.length }} publications</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Publications Grid -->
    <section class="py-5">
      <div class="container">
        <div v-if="filteredPublications.length > 0" class="row g-4">
          <div v-for="pub in filteredPublications" :key="pub.id" class="col-md-6 col-lg-4">
            <PublicationCard :publication="pub" />
          </div>
        </div>
        <div v-else class="text-center text-muted py-5">
          <i class="bi bi-file-earmark-pdf" style="font-size: 3rem;"></i>
          <p class="mt-3">{{ $t('resources.publications.no_publications') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { publications } from '../data/publications'

const selectedType = ref('all')
const selectedCategory = ref('all')

const filteredPublications = computed(() => {
  return publications.filter(pub => {
    const typeMatch = selectedType.value === 'all' || pub.type === selectedType.value
    const categoryMatch = selectedCategory.value === 'all' || pub.category.includes(selectedCategory.value)
    return typeMatch && categoryMatch
  })
})
</script>
