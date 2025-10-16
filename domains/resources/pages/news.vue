<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="position-relative bg-primary text-white overflow-hidden" style="margin-top: 88px;">
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
              {{ $t('resources.news.title') }}
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
                  <i class="bi bi-newspaper text-white" style="font-size: 3rem;"></i>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.news.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="lead fs-4 text-white-75" data-aos="fade-up" data-aos-delay="200">
              {{ $t('resources.news.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="py-4 bg-light border-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <label class="form-label small text-muted mb-2">{{ $t('resources.publications.filter_by') }}</label>
            <select v-model="selectedCategory" class="form-select">
              <option value="all">{{ $t('resources.news.categories.all') }}</option>
              <option value="water">{{ $t('resources.news.categories.water') }}</option>
              <option value="sanitation">{{ $t('resources.news.categories.sanitation') }}</option>
              <option value="environment">{{ $t('resources.news.categories.environment') }}</option>
              <option value="partnerships">{{ $t('resources.news.categories.partnerships') }}</option>
              <option value="training">{{ $t('resources.news.categories.training') }}</option>
              <option value="innovation">{{ $t('resources.news.categories.innovation') }}</option>
            </select>
          </div>
          <div class="col-md-6 text-md-end mt-3 mt-md-0">
            <span class="text-muted small">
              {{ filteredNews.length }} {{ $t('resources.news.all_news').toLowerCase() }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured News -->
    <section v-if="featuredNews.length > 0" class="py-5">
      <div class="container">
        <h2 class="fw-bold mb-4">{{ $t('resources.news.featured') }}</h2>
        <div class="row g-4">
          <div
            v-for="article in featuredNews"
            :key="article.id"
            class="col-lg-6"
          >
            <NewsCard :article="article" />
          </div>
        </div>
      </div>
    </section>

    <!-- All News -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="fw-bold mb-4">{{ $t('resources.news.all_news') }}</h2>

        <div v-if="filteredNews.length > 0" class="row g-4">
          <div
            v-for="article in filteredNews"
            :key="article.id"
            class="col-md-6 col-lg-4"
          >
            <NewsCard :article="article" />
          </div>
        </div>

        <div v-else class="text-center text-muted py-5">
          <i class="bi bi-newspaper" style="font-size: 3rem;"></i>
          <p class="mt-3">{{ $t('resources.news.no_news') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { newsArticles, getFeaturedNews } from '../data/news'

const selectedCategory = ref('all')

const featuredNews = computed(() => {
  return getFeaturedNews()
})

const filteredNews = computed(() => {
  if (selectedCategory.value === 'all') {
    return newsArticles.filter(article => !article.featured)
  }
  return newsArticles.filter(article =>
    !article.featured && article.category.includes(selectedCategory.value)
  )
})

// SEO Meta tags
useHead({
  title: () => {
    const { t } = useI18n()
    return t('resources.news.title') + ' - SAWES'
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const { t } = useI18n()
        return t('resources.news.subtitle')
      }
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styling for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: white !important;
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
</style>
