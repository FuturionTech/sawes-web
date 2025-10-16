<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section bg-gradient py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <div class="mb-3">
              <span class="badge bg-white bg-opacity-25 text-white px-3 py-2">
                <i class="bi bi-briefcase me-2"></i>
                {{ $t('projects.hero.badge') }}
              </span>
            </div>
            <h1 class="display-4 fw-bold text-white mb-4">
              {{ $t('projects.hero.title') }}
            </h1>
            <p class="lead text-white mb-4">
              {{ $t('projects.hero.subtitle') }}
            </p>
            <div class="d-flex justify-content-center gap-4 mb-4">
              <div class="stat-item text-white" data-aos="fade-up" data-aos-delay="100">
                <h2 class="display-5 fw-bold mb-0">{{ projectStats.total }}+</h2>
                <p class="mb-0">{{ $t('projects.hero.stats.total_projects') }}</p>
              </div>
              <div class="stat-item text-white" data-aos="fade-up" data-aos-delay="200">
                <h2 class="display-5 fw-bold mb-0">25+</h2>
                <p class="mb-0">{{ $t('projects.hero.stats.years_experience') }}</p>
              </div>
              <div class="stat-item text-white" data-aos="fade-up" data-aos-delay="300">
                <h2 class="display-5 fw-bold mb-0">15+</h2>
                <p class="mb-0">{{ $t('projects.hero.stats.partners') }}</p>
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
.hero-section {
  background: linear-gradient(135deg, #0000FF 0%, #4169E1 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
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

.stat-item {
  padding: 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.sticky-top {
  position: sticky;
  z-index: 10;
}

.pagination {
  gap: 0.25rem;
}

.page-link {
  border-radius: 8px;
  border: 1px solid #dee2e6;
  color: #0000FF;
  padding: 0.5rem 0.75rem;
}

.page-item.active .page-link {
  background-color: #0000FF;
  border-color: #0000FF;
}

.page-link:hover {
  background-color: #f8f9fa;
  color: #0000FF;
}

.cta-section {
  border-top: 1px solid #dee2e6;
}
</style>
