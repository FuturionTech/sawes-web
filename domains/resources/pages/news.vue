<template>
  <div class="news-page">
    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-4 fw-bold mb-3">
              {{ $t('resources.news.title') }}
            </h1>
            <p class="lead">
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
