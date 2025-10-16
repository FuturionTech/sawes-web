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
  background: linear-gradient(to bottom, #ffffff, #f8f9fa);
  border-radius: 16px;
  padding: 1.75rem;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.3s ease;
}

.project-filters:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.filter-label {
  font-weight: 700;
  color: #1a1a2e;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.filter-label::before {
  content: '';
  width: 3px;
  height: 14px;
  background: linear-gradient(to bottom, #0000FF, #4169E1);
  margin-right: 8px;
  border-radius: 2px;
}

.filter-section {
  padding-bottom: 1.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 2px solid #e9ecef;
}

.filter-section:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.btn-sm {
  padding: 0.45rem 0.9rem;
  font-size: 0.85rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 2px;
}

.btn-sm:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.btn-sm .badge {
  font-size: 0.7rem;
  padding: 0.3em 0.6em;
  border-radius: 12px;
  font-weight: 700;
  margin-left: 6px;
}

.btn-primary {
  background: linear-gradient(135deg, #0000FF, #4169E1);
  border-color: #0000FF;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0000CC, #3654C8);
  border-color: #0000CC;
}

.btn-outline-primary:hover,
.btn-outline-info:hover,
.btn-outline-success:hover,
.btn-outline-warning:hover,
.btn-outline-secondary:hover {
  transform: translateY(-2px);
}

.form-select-sm {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
  background-color: #ffffff;
}

.form-select-sm:focus {
  border-color: #0000FF;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 255, 0.15);
}

.form-control {
  border-radius: 8px;
  border: 2px solid #e9ecef;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: #0000FF;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 255, 0.15);
}

.input-group-text {
  border-radius: 8px 0 0 8px;
  border: 2px solid #e9ecef;
  border-right: none;
  background-color: #f8f9fa;
  color: #6c757d;
}

.alert-sm {
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  margin-bottom: 0;
  margin-top: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(13, 110, 253, 0.2);
  background-color: rgba(13, 110, 253, 0.05);
  font-weight: 500;
}

.btn-link {
  color: #0000FF;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-link:hover {
  color: #0000CC;
  text-decoration: none;
  transform: scale(1.05);
}

h5 {
  color: #1a1a2e;
  font-weight: 700;
  font-size: 1.1rem;
}

/* ===================================
   DARK MODE SUPPORT
   =================================== */

:root[data-bs-theme="dark"] .project-filters,
.dark .project-filters {
  background: linear-gradient(to bottom, #2d2d44, #25253a);
  border-color: #3a3a54;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:root[data-bs-theme="dark"] .project-filters:hover,
.dark .project-filters:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

:root[data-bs-theme="dark"] .filter-label,
.dark .filter-label {
  color: #f8f9fa;
}

:root[data-bs-theme="dark"] .filter-label::before,
.dark .filter-label::before {
  background: linear-gradient(to bottom, #4d6dff, #6495ED);
}

:root[data-bs-theme="dark"] .filter-section,
.dark .filter-section {
  border-bottom-color: #3a3a54;
}

:root[data-bs-theme="dark"] .btn-sm,
.dark .btn-sm {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .btn-sm:hover,
.dark .btn-sm:hover {
  background-color: #3a3a54;
  border-color: #4d6dff;
}

:root[data-bs-theme="dark"] .btn-primary.btn-sm,
.dark .btn-primary.btn-sm {
  background: linear-gradient(135deg, #4d6dff, #6495ED);
  border-color: #4d6dff;
  color: #ffffff;
}

:root[data-bs-theme="dark"] .btn-primary.btn-sm:hover,
.dark .btn-primary.btn-sm:hover {
  background: linear-gradient(135deg, #3d5de6, #5485DD);
}

:root[data-bs-theme="dark"] .form-select-sm,
.dark .form-select-sm {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .form-select-sm:focus,
.dark .form-select-sm:focus {
  background-color: #2d2d44;
  border-color: #4d6dff;
  box-shadow: 0 0 0 0.2rem rgba(77, 109, 255, 0.25);
}

:root[data-bs-theme="dark"] .form-control,
.dark .form-control {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .form-control:focus,
.dark .form-control:focus {
  background-color: #2d2d44;
  border-color: #4d6dff;
  box-shadow: 0 0 0 0.2rem rgba(77, 109, 255, 0.25);
}

:root[data-bs-theme="dark"] .form-control::placeholder,
.dark .form-control::placeholder {
  color: #6c757d;
}

:root[data-bs-theme="dark"] .input-group-text,
.dark .input-group-text {
  background-color: #25253a;
  border-color: #3a3a54;
  color: #adb5bd;
}

:root[data-bs-theme="dark"] .alert-sm,
.dark .alert-sm {
  background-color: rgba(77, 109, 255, 0.1);
  border-color: rgba(77, 109, 255, 0.3);
  color: #a8c5ff;
}

:root[data-bs-theme="dark"] .btn-link,
.dark .btn-link {
  color: #6495ED;
}

:root[data-bs-theme="dark"] .btn-link:hover,
.dark .btn-link:hover {
  color: #4d6dff;
}

:root[data-bs-theme="dark"] h5,
.dark h5 {
  color: #f8f9fa;
}

/* Badge count styling in dark mode */
:root[data-bs-theme="dark"] .btn-sm .badge,
.dark .btn-sm .badge {
  background-color: rgba(255, 255, 255, 0.2) !important;
  color: #ffffff !important;
}

:root[data-bs-theme="dark"] .btn-primary.btn-sm .badge,
.dark .btn-primary.btn-sm .badge {
  background-color: rgba(255, 255, 255, 0.9) !important;
  color: #4d6dff !important;
}
</style>
