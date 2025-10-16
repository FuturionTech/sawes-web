<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section position-relative overflow-hidden page-header-spacing">
      <div class="hero-pattern position-absolute w-100 h-100"></div>
      <div class="container position-relative py-5 my-md-3 my-lg-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb bg-transparent">
            <li class="breadcrumb-item"><NuxtLink to="/" class="text-decoration-none text-primary">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
            <li class="breadcrumb-item active text-body" aria-current="page">{{ $t('breadcrumbs.projects') }}</li>
          </ol>
        </nav>

        <div class="row align-items-center g-4 py-4">
          <div class="col-lg-8 mx-auto text-center">
            <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
              <i class="bi bi-briefcase-fill me-2"></i>
              {{ $t('projects.hero.badge') }}
            </div>
            <h1 class="display-3 fw-bold mb-4 text-body-emphasis">{{ $t('projects.hero.title') }}</h1>
            <p class="lead text-body-secondary mb-4 fs-5" style="max-width: 750px; margin: 0 auto;">
              {{ $t('projects.hero.subtitle') }}
            </p>

            <!-- Stats Row -->
            <div class="row row-cols-2 row-cols-md-3 g-3 g-md-4 mt-3">
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">{{ projectStats.total }}+</div>
                  <div class="small text-body-secondary">{{ $t('projects.hero.stats.total_projects') }}</div>
                </div>
              </div>
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">25+</div>
                  <div class="small text-body-secondary">{{ $t('projects.hero.stats.years_experience') }}</div>
                </div>
              </div>
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">15+</div>
                  <div class="small text-body-secondary">{{ $t('projects.hero.stats.partners') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- Filters Sidebar -->
          <div class="col-lg-3 mb-4">
            <div class="sticky-top" style="top: 100px;">
              <ProjectFilters
                :selected-category="selectedCategory"
                :selected-status="selectedStatus"
                :selected-year="selectedYear"
                :selected-featured="selectedFeatured"
                :search-query="searchQuery"
                :stats="projectStats"
                :available-years="availableYears"
                :filtered-count="filteredProjects.length"
                @update:category="selectedCategory = $event"
                @update:status="selectedStatus = $event"
                @update:year="selectedYear = $event"
                @update:featured="selectedFeatured = $event"
                @update:search="searchQuery = $event"
              />
            </div>
          </div>

          <!-- Projects Grid -->
          <div class="col-lg-9">
            <!-- Results Header -->
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h4 class="mb-1">
                  {{ $t('projects.results.title') }}
                </h4>
                <p class="text-muted mb-0">
                  {{ $t('projects.results.showing') }}
                  <strong>{{ paginatedProjects.length }}</strong>
                  {{ $t('projects.results.of') }}
                  <strong>{{ filteredProjects.length }}</strong>
                  {{ $t('projects.results.projects') }}
                </p>
              </div>
              <div class="d-flex gap-2">
                <select
                  v-model="sortBy"
                  class="form-select form-select-sm"
                  style="width: auto;"
                >
                  <option value="date-desc">{{ $t('projects.sort.newest') }}</option>
                  <option value="date-asc">{{ $t('projects.sort.oldest') }}</option>
                  <option value="title-asc">{{ $t('projects.sort.title_az') }}</option>
                  <option value="title-desc">{{ $t('projects.sort.title_za') }}</option>
                </select>
              </div>
            </div>

            <!-- Featured Projects Section -->
            <div v-if="featuredProjects.length > 0 && selectedCategory === 'all'" class="mb-5">
              <h5 class="mb-3">
                <i class="bi bi-star-fill text-warning me-2"></i>
                {{ $t('projects.featured.title') }}
              </h5>
              <div class="row g-4 mb-4">
                <div
                  v-for="project in featuredProjects"
                  :key="project.id"
                  class="col-md-6"
                >
                  <ProjectCard :project="project" />
                </div>
              </div>
            </div>

            <!-- No Results -->
            <div v-if="filteredProjects.length === 0" class="text-center py-5">
              <div class="mb-4">
                <i class="bi bi-inbox" style="font-size: 4rem; color: #ccc;"></i>
              </div>
              <h4 class="mb-3">{{ $t('projects.no_results.title') }}</h4>
              <p class="text-muted mb-4">{{ $t('projects.no_results.message') }}</p>
              <button class="btn btn-primary" @click="clearAllFilters">
                {{ $t('projects.no_results.clear_filters') }}
              </button>
            </div>

            <!-- Projects Grid -->
            <div v-else class="row g-4">
              <div
                v-for="project in paginatedProjects"
                :key="project.id"
                class="col-md-6 col-lg-4"
              >
                <ProjectCard :project="project" />
              </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1" class="d-flex justify-content-center mt-5">
              <nav aria-label="Projects pagination">
                <ul class="pagination">
                  <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <button
                      class="page-link"
                      @click="currentPage = Math.max(1, currentPage - 1)"
                      :disabled="currentPage === 1"
                    >
                      <i class="bi bi-chevron-left"></i>
                    </button>
                  </li>
                  <li
                    v-for="page in displayedPages"
                    :key="page"
                    class="page-item"
                    :class="{ active: currentPage === page }"
                  >
                    <button class="page-link" @click="currentPage = page">
                      {{ page }}
                    </button>
                  </li>
                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button
                      class="page-link"
                      @click="currentPage = Math.min(totalPages, currentPage + 1)"
                      :disabled="currentPage === totalPages"
                    >
                      <i class="bi bi-chevron-right"></i>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-light py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <h2 class="mb-4">{{ $t('projects.cta.title') }}</h2>
            <p class="lead text-muted mb-4">{{ $t('projects.cta.description') }}</p>
            <div class="d-flex gap-3 justify-content-center">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg">
                <i class="bi bi-envelope me-2"></i>
                {{ $t('projects.cta.contact') }}
              </NuxtLink>
              <NuxtLink to="/services" class="btn btn-outline-primary btn-lg">
                <i class="bi bi-arrow-right me-2"></i>
                {{ $t('projects.cta.services') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { getAllProjects, getProjectStats, getProjectYears, getFeaturedProjects } from '../data/projects'
import type { Project } from '../data/projects'

const { t, locale } = useI18n()

// SEO
useHead({
  title: t('meta.projects.title'),
  meta: [
    { name: 'description', content: t('meta.projects.description') },
    { name: 'keywords', content: t('meta.projects.keywords') }
  ]
})

// Data
const allProjects = getAllProjects()
const projectStats = getProjectStats()
const availableYears = getProjectYears()

// Filter State
const selectedCategory = ref<string>('all')
const selectedStatus = ref<string>('all')
const selectedYear = ref<string>('all')
const selectedFeatured = ref<boolean>(false)
const searchQuery = ref<string>('')
const sortBy = ref<string>('date-desc')

// Pagination State
const currentPage = ref<number>(1)
const itemsPerPage = 9

// Computed
const filteredProjects = computed(() => {
  let projects = [...allProjects]

  // Filter by category
  if (selectedCategory.value !== 'all') {
    projects = projects.filter(p => p.category === selectedCategory.value)
  }

  // Filter by status
  if (selectedStatus.value !== 'all') {
    projects = projects.filter(p => p.status === selectedStatus.value)
  }

  // Filter by year
  if (selectedYear.value !== 'all') {
    projects = projects.filter(p => p.year === parseInt(selectedYear.value))
  }

  // Filter by featured
  if (selectedFeatured.value) {
    projects = projects.filter(p => p.featured === true)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    projects = projects.filter(p => {
      const title = locale.value === 'fr' ? p.titleFr : p.title
      const description = locale.value === 'fr' ? p.descriptionFr : p.description
      const location = locale.value === 'fr' ? p.locationFr : p.location
      return (
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query) ||
        location.toLowerCase().includes(query) ||
        p.partners?.some(partner => partner.toLowerCase().includes(query))
      )
    })
  }

  // Sort projects
  projects.sort((a, b) => {
    if (sortBy.value === 'date-desc') {
      return b.year - a.year
    } else if (sortBy.value === 'date-asc') {
      return a.year - b.year
    } else if (sortBy.value === 'title-asc') {
      const titleA = locale.value === 'fr' ? a.titleFr : a.title
      const titleB = locale.value === 'fr' ? b.titleFr : b.title
      return titleA.localeCompare(titleB)
    } else if (sortBy.value === 'title-desc') {
      const titleA = locale.value === 'fr' ? a.titleFr : a.title
      const titleB = locale.value === 'fr' ? b.titleFr : b.title
      return titleB.localeCompare(titleA)
    }
    return 0
  })

  return projects
})

const featuredProjects = computed(() => {
  return getFeaturedProjects().slice(0, 4)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage)
})

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProjects.value.slice(start, end)
})

const displayedPages = computed(() => {
  const pages: number[] = []
  const maxPages = 5
  const half = Math.floor(maxPages / 2)

  let start = Math.max(1, currentPage.value - half)
  let end = Math.min(totalPages.value, start + maxPages - 1)

  if (end - start < maxPages - 1) {
    start = Math.max(1, end - maxPages + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

// Methods
const clearAllFilters = () => {
  selectedCategory.value = 'all'
  selectedStatus.value = 'all'
  selectedYear.value = 'all'
  selectedFeatured.value = false
  searchQuery.value = ''
  currentPage.value = 1
}

// Watch for filter changes and reset to page 1
watch([selectedCategory, selectedStatus, selectedYear, selectedFeatured, searchQuery], () => {
  currentPage.value = 1
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: var(--bs-body-bg);
  min-height: 400px;
  border-bottom: 1px solid var(--bs-border-color);
}

.hero-pattern {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(var(--bs-primary-rgb), 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(var(--bs-primary-rgb), 0.05) 0%, transparent 50%);
  background-size: 100% 100%;
}

/* Stat Cards */
.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

.badge {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

.sticky-top {
  position: sticky;
  z-index: 10;
}

.pagination {
  gap: 0.5rem;
}

.page-link {
  border-radius: 10px;
  border: 2px solid #e9ecef;
  color: #0000FF;
  padding: 0.6rem 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.page-item.active .page-link {
  background: linear-gradient(135deg, #0000FF, #4169E1);
  border-color: #0000FF;
  box-shadow: 0 4px 12px rgba(0, 0, 255, 0.3);
}

.page-link:hover:not(.active .page-link) {
  background-color: #f8f9fa;
  color: #0000FF;
  border-color: #0000FF;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.page-item.disabled .page-link {
  background-color: #f8f9fa;
  border-color: #e9ecef;
  color: #adb5bd;
}

.cta-section {
  border-top: 3px solid #e9ecef;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
}

.cta-section h2 {
  color: #1a1a2e;
  font-weight: 800;
}

.lead {
  font-weight: 500;
  color: #6c757d;
  line-height: 1.8;
}

/* Breadcrumb styling for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: var(--bs-secondary);
  font-weight: 600;
}

.breadcrumb-item a {
  text-decoration: none;
  transition: all 0.2s;
  font-weight: 500;
  color: var(--bs-link-color);
}

.breadcrumb-item a:hover {
  color: var(--bs-link-hover-color) !important;
}

.breadcrumb-item.active {
  font-weight: 600;
  color: var(--bs-body-color);
}

/* Page header spacing - accounts for fixed navbar */
.page-header-spacing {
  padding-top: 72px;
}

@media (max-width: 991.98px) {
  .page-header-spacing {
    padding-top: 64px;
  }
}

@media (max-width: 575.98px) {
  .page-header-spacing {
    padding-top: 60px;
  }
}

/* Project grid improvements */
.row.g-4 {
  row-gap: 2rem !important;
}

h4, h5 {
  color: #1a1a2e;
  font-weight: 700;
}

.form-select {
  border-radius: 10px;
  border: 2px solid #e9ecef;
  font-weight: 600;
  transition: all 0.2s ease;
}

.form-select:focus {
  border-color: #0000FF;
  box-shadow: 0 0 0 0.2rem rgba(0, 0, 255, 0.15);
}

/* No results styling */
.bi-inbox {
  color: #dee2e6 !important;
}

/* Button improvements */
.btn-primary {
  background: linear-gradient(135deg, #0000FF, #4169E1);
  border: none;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 255, 0.2);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0000CC, #3654C8);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 255, 0.3);
}

.btn-outline-primary {
  border: 2px solid #0000FF;
  color: #0000FF;
  font-weight: 700;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: #0000FF;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 255, 0.2);
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

/* ===================================
   DARK MODE SUPPORT
   =================================== */

/* Main content areas */
:root[data-bs-theme="dark"] .projects-page,
.dark .projects-page {
  background: #1a1a2e;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] h4,
:root[data-bs-theme="dark"] h5,
.dark h4,
.dark h5 {
  color: #f8f9fa;
}

/* Filter sidebar in dark mode */
:root[data-bs-theme="dark"] .project-filters,
.dark .project-filters {
  background: linear-gradient(to bottom, #2d2d44, #25253a);
  border-color: #3a3a54;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:root[data-bs-theme="dark"] .filter-label,
.dark .filter-label {
  color: #f8f9fa;
}

:root[data-bs-theme="dark"] .filter-section,
.dark .filter-section {
  border-bottom-color: #3a3a54;
}

:root[data-bs-theme="dark"] .form-select,
:root[data-bs-theme="dark"] .form-control,
.dark .form-select,
.dark .form-control {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .form-select:focus,
:root[data-bs-theme="dark"] .form-control:focus,
.dark .form-select:focus,
.dark .form-control:focus {
  background-color: #2d2d44;
  border-color: #4d6dff;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .input-group-text,
.dark .input-group-text {
  background-color: #25253a;
  border-color: #3a3a54;
  color: #adb5bd;
}

/* Card backgrounds in dark mode */
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

/* Badge adjustments */
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

/* CTA section */
:root[data-bs-theme="dark"] .cta-section,
.dark .cta-section {
  background: linear-gradient(to bottom, #25253a, #2d2d44);
  border-top-color: #3a3a54;
}

:root[data-bs-theme="dark"] .cta-section h2,
.dark .cta-section h2 {
  color: #f8f9fa;
}

:root[data-bs-theme="dark"] .lead,
.dark .lead {
  color: #adb5bd;
}

/* Pagination */
:root[data-bs-theme="dark"] .page-link,
.dark .page-link {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #6495ED;
}

:root[data-bs-theme="dark"] .page-link:hover:not(.active .page-link),
.dark .page-link:hover:not(.active .page-link) {
  background-color: #3a3a54;
  border-color: #4d6dff;
  color: #6495ED;
}

:root[data-bs-theme="dark"] .page-item.disabled .page-link,
.dark .page-item.disabled .page-link {
  background-color: #25253a;
  border-color: #3a3a54;
  color: #6c757d;
}

/* Buttons in dark mode */
:root[data-bs-theme="dark"] .btn-primary,
.dark .btn-primary {
  background: linear-gradient(135deg, #4d6dff, #6495ED);
}

:root[data-bs-theme="dark"] .btn-primary:hover,
.dark .btn-primary:hover {
  background: linear-gradient(135deg, #3d5de6, #5485DD);
}

:root[data-bs-theme="dark"] .btn-outline-primary,
.dark .btn-outline-primary {
  border-color: #4d6dff;
  color: #6495ED;
}

:root[data-bs-theme="dark"] .btn-outline-primary:hover,
.dark .btn-outline-primary:hover {
  background: #4d6dff;
  border-color: #4d6dff;
  color: #ffffff;
}

/* Filter button styles */
:root[data-bs-theme="dark"] .btn-sm,
.dark .btn-sm {
  background-color: #2d2d44;
  border-color: #3a3a54;
  color: #e9ecef;
}

:root[data-bs-theme="dark"] .btn-primary.btn-sm,
.dark .btn-primary.btn-sm {
  background: linear-gradient(135deg, #4d6dff, #6495ED);
  border-color: #4d6dff;
  color: #ffffff;
}

:root[data-bs-theme="dark"] .btn-link,
.dark .btn-link {
  color: #6495ED;
}

:root[data-bs-theme="dark"] .btn-link:hover,
.dark .btn-link:hover {
  color: #4d6dff;
}

/* Alert in dark mode */
:root[data-bs-theme="dark"] .alert-sm,
.dark .alert-sm {
  background-color: rgba(77, 109, 255, 0.1);
  border-color: rgba(77, 109, 255, 0.3);
  color: #a8c5ff;
}

/* No results icon */
:root[data-bs-theme="dark"] .bi-inbox,
.dark .bi-inbox {
  color: #3a3a54 !important;
}

/* Card image background in dark mode */
:root[data-bs-theme="dark"] .card-img-top-wrapper,
.dark .card-img-top-wrapper {
  background: linear-gradient(135deg, #2d2d44, #25253a);
}

/* Improve text contrast on gradient backgrounds */
:root[data-bs-theme="dark"] .project-card .badge,
.dark .project-card .badge {
  font-weight: 600;
}
</style>
