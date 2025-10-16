<template>
  <div class="project-filters">
    <!-- Filter Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h5 class="mb-0">
        <i class="bi bi-funnel me-2"></i>
        {{ $t('projects.filters.title') }}
      </h5>
      <button
        v-if="hasActiveFilters"
        class="btn btn-link btn-sm text-decoration-none"
        @click="clearFilters"
      >
        <i class="bi bi-x-circle me-1"></i>
        {{ $t('projects.filters.clear_all') }}
      </button>
    </div>

    <!-- Category Filters -->
    <div class="filter-section mb-4">
      <h6 class="filter-label mb-3">{{ $t('projects.filters.by_category') }}</h6>
      <div class="d-flex flex-wrap gap-2">
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'"
          @click="emit('update:category', 'all')"
        >
          {{ $t('projects.filters.all') }}
          <span class="badge bg-white text-primary ms-1">{{ stats.total }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'studies' ? 'btn-primary' : 'btn-outline-primary'"
          @click="emit('update:category', 'studies')"
        >
          <i class="bi bi-file-earmark-text me-1"></i>
          {{ $t('projects.categories.studies') }}
          <span class="badge bg-white text-primary ms-1">{{ stats.studies }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'evaluations' ? 'btn-info' : 'btn-outline-info'"
          @click="emit('update:category', 'evaluations')"
        >
          <i class="bi bi-clipboard-check me-1"></i>
          {{ $t('projects.categories.evaluations') }}
          <span class="badge bg-white text-info ms-1">{{ stats.evaluations }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'management' ? 'btn-success' : 'btn-outline-success'"
          @click="emit('update:category', 'management')"
        >
          <i class="bi bi-kanban me-1"></i>
          {{ $t('projects.categories.management') }}
          <span class="badge bg-white text-success ms-1">{{ stats.management }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'urban-services' ? 'btn-warning' : 'btn-outline-warning'"
          @click="emit('update:category', 'urban-services')"
        >
          <i class="bi bi-building me-1"></i>
          {{ $t('projects.categories.urban_services') }}
          <span class="badge bg-white text-warning ms-1">{{ stats.urbanServices }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedCategory === 'other' ? 'btn-secondary' : 'btn-outline-secondary'"
          @click="emit('update:category', 'other')"
        >
          <i class="bi bi-tools me-1"></i>
          {{ $t('projects.categories.other') }}
          <span class="badge bg-white text-secondary ms-1">{{ stats.other }}</span>
        </button>
      </div>
    </div>

    <!-- Status Filters -->
    <div class="filter-section mb-4">
      <h6 class="filter-label mb-3">{{ $t('projects.filters.by_status') }}</h6>
      <div class="d-flex flex-wrap gap-2">
        <button
          class="btn btn-sm"
          :class="selectedStatus === 'all' ? 'btn-primary' : 'btn-outline-primary'"
          @click="emit('update:status', 'all')"
        >
          {{ $t('projects.filters.all_status') }}
        </button>
        <button
          class="btn btn-sm"
          :class="selectedStatus === 'completed' ? 'btn-primary' : 'btn-outline-primary'"
          @click="emit('update:status', 'completed')"
        >
          <i class="bi bi-check-circle me-1"></i>
          {{ $t('projects.status.completed') }}
          <span class="badge bg-white text-primary ms-1">{{ stats.completed }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedStatus === 'ongoing' ? 'btn-success' : 'btn-outline-success'"
          @click="emit('update:status', 'ongoing')"
        >
          <i class="bi bi-clock-history me-1"></i>
          {{ $t('projects.status.ongoing') }}
          <span class="badge bg-white text-success ms-1">{{ stats.ongoing }}</span>
        </button>
        <button
          class="btn btn-sm"
          :class="selectedFeatured ? 'btn-warning' : 'btn-outline-warning'"
          @click="emit('update:featured', !selectedFeatured)"
        >
          <i class="bi bi-star-fill me-1"></i>
          {{ $t('projects.filters.featured_only') }}
          <span class="badge bg-white text-warning ms-1">{{ stats.featured }}</span>
        </button>
      </div>
    </div>

    <!-- Year Filter -->
    <div class="filter-section mb-4">
      <h6 class="filter-label mb-3">{{ $t('projects.filters.by_year') }}</h6>
      <select
        :value="selectedYear"
        @change="emit('update:year', $event.target.value)"
        class="form-select form-select-sm"
      >
        <option value="all">{{ $t('projects.filters.all_years') }}</option>
        <option v-for="year in availableYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Search -->
    <div class="filter-section mb-4">
      <h6 class="filter-label mb-3">{{ $t('projects.filters.search') }}</h6>
      <div class="input-group input-group-sm">
        <span class="input-group-text">
          <i class="bi bi-search"></i>
        </span>
        <input
          type="text"
          class="form-control"
          :placeholder="$t('projects.filters.search_placeholder')"
          :value="searchQuery"
          @input="emit('update:search', $event.target.value)"
        />
      </div>
    </div>

    <!-- Active Filters Summary -->
    <div v-if="hasActiveFilters" class="alert alert-info alert-sm">
      <div class="d-flex align-items-center">
        <i class="bi bi-info-circle me-2"></i>
        <small>{{ activeFiltersText }}</small>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects'

interface Props {
  selectedCategory: string
  selectedStatus: string
  selectedYear: string
  selectedFeatured: boolean
  searchQuery: string
  stats: {
    total: number
    studies: number
    evaluations: number
    management: number
    urbanServices: number
    other: number
    ongoing: number
    completed: number
    featured: number
  }
  availableYears: number[]
  filteredCount: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:category': [value: string]
  'update:status': [value: string]
  'update:year': [value: string]
  'update:featured': [value: boolean]
  'update:search': [value: string]
  'clear-filters': []
}>()

const { t } = useI18n()

const hasActiveFilters = computed(() => {
  return (
    props.selectedCategory !== 'all' ||
    props.selectedStatus !== 'all' ||
    props.selectedYear !== 'all' ||
    props.selectedFeatured ||
    props.searchQuery.length > 0
  )
})

const activeFiltersText = computed(() => {
  const filters: string[] = []

  if (props.selectedCategory !== 'all') {
    filters.push(t(`projects.categories.${props.selectedCategory}`))
  }

  if (props.selectedStatus !== 'all') {
    filters.push(t(`projects.status.${props.selectedStatus}`))
  }

  if (props.selectedYear !== 'all') {
    filters.push(props.selectedYear)
  }

  if (props.selectedFeatured) {
    filters.push(t('projects.filters.featured_only'))
  }

  if (props.searchQuery) {
    filters.push(`"${props.searchQuery}"`)
  }

  return t('projects.filters.showing_results', {
    count: props.filteredCount,
    filters: filters.join(', ')
  })
})

const clearFilters = () => {
  emit('update:category', 'all')
  emit('update:status', 'all')
  emit('update:year', 'all')
  emit('update:featured', false)
  emit('update:search', '')
  emit('clear-filters')
}
</script>

<style scoped>
.project-filters {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
}

.filter-label {
  font-weight: 600;
  color: #495057;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-section {
  padding-bottom: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.filter-section:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}

.btn-sm .badge {
  font-size: 0.65rem;
  padding: 0.25em 0.5em;
}

.alert-sm {
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  margin-bottom: 0;
}
</style>
