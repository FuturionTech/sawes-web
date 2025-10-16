<template>
  <div class="news-detail-page">
    <div v-if="article" class="container py-5" style="margin-top: 88px;">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4" data-aos="fade-up">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-decoration-none">
              <i class="bi bi-house-door me-1"></i>
              {{ $t('breadcrumbs.home') }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink :to="currentLocale === 'fr' ? '/ressources' : '/en/resources'" class="text-decoration-none">
              {{ $t('breadcrumbs.resources') }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink :to="currentLocale === 'fr' ? '/actualites' : '/en/news'" class="text-decoration-none">
              {{ $t('resources.news.title') }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ (currentLocale === 'fr' ? article.title.fr : article.title.en).substring(0, 50) }}...
          </li>
        </ol>
      </nav>

      <!-- Back Link -->
      <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
        <NuxtLink
          :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
          class="btn btn-outline-primary"
        >
          <i class="bi bi-arrow-left me-2"></i>
          {{ $t('resources.news.back_to_news') }}
        </NuxtLink>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-9">
          <!-- Article Header -->
          <article>
            <!-- Type & Date Badge -->
            <div class="mb-4" data-aos="fade-up" data-aos-delay="150">
              <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 me-2">
                <i class="bi bi-newspaper me-1"></i>
                {{ $t(`resources.news.types.${article.type}`) }}
              </span>
              <span class="text-muted">
                <i class="bi bi-calendar3 me-1"></i>
                {{ formatDate(article.date) }}
              </span>
              <span v-if="article.author" class="text-muted ms-3">
                <i class="bi bi-person me-1"></i>
                {{ article.author }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="display-4 fw-bold mb-4" data-aos="fade-up" data-aos-delay="200">
              {{ currentLocale === 'fr' ? article.title.fr : article.title.en }}
            </h1>

            <!-- Excerpt -->
            <p class="lead text-muted mb-5" data-aos="fade-up" data-aos-delay="250">
              {{ currentLocale === 'fr' ? article.excerpt.fr : article.excerpt.en }}
            </p>

            <!-- Featured Image -->
            <div v-if="article.image" class="mb-5" data-aos="fade-up" data-aos-delay="300">
              <div class="position-relative rounded-4 overflow-hidden shadow-lg">
                <NuxtImg
                  :src="article.image"
                  :alt="currentLocale === 'fr' ? article.title.fr : article.title.en"
                  class="img-fluid w-100"
                  loading="lazy"
                  style="max-height: 600px; object-fit: cover;"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="article-content mb-5" data-aos="fade-up" data-aos-delay="350" style="white-space: pre-line;">
              {{ currentLocale === 'fr' ? article.content.fr : article.content.en }}
            </div>

            <!-- Categories & Tags -->
            <div class="border-top border-bottom py-4 mb-5" data-aos="fade-up" data-aos-delay="400">
              <div class="row g-3">
                <div v-if="article.category.length > 0" class="col-md-6">
                  <strong class="d-block mb-2 text-muted small">
                    <i class="bi bi-tag me-1"></i>
                    {{ $t('resources.news.categories.all') || 'Categories' }}:
                  </strong>
                  <div class="d-flex flex-wrap gap-2">
                    <span
                      v-for="cat in article.category"
                      :key="cat"
                      class="badge bg-primary bg-opacity-10 text-primary px-3 py-2"
                    >
                      {{ $t(`resources.news.categories.${cat}`) }}
                    </span>
                  </div>
                </div>

                <!-- Share Section -->
                <div class="col-md-6">
                  <strong class="d-block mb-2 text-muted small">
                    <i class="bi bi-share me-1"></i>
                    {{ $t('resources.news.share') || 'Share' }}:
                  </strong>
                  <div class="d-flex gap-2">
                    <button class="btn btn-outline-secondary btn-sm" title="Share on Twitter">
                      <i class="bi bi-twitter"></i>
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" title="Share on Facebook">
                      <i class="bi bi-facebook"></i>
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" title="Share on LinkedIn">
                      <i class="bi bi-linkedin"></i>
                    </button>
                    <button class="btn btn-outline-secondary btn-sm" title="Copy link">
                      <i class="bi bi-link-45deg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Back to News -->
            <div class="text-center py-4" data-aos="fade-up" data-aos-delay="450">
              <NuxtLink
                :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
                class="btn btn-primary btn-lg"
              >
                <i class="bi bi-arrow-left me-2"></i>
                {{ $t('resources.news.back_to_news') }}
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div v-else class="container py-5 text-center" style="margin-top: 88px;">
      <div class="mb-4">
        <div class="icon-box d-inline-block">
          <div class="bg-light rounded-circle p-4">
            <i class="bi bi-newspaper text-muted" style="font-size: 3rem;"></i>
          </div>
        </div>
      </div>
      <h2 class="fw-bold mb-3">{{ $t('resources.news.not_found') || 'Article not found' }}</h2>
      <p class="text-muted mb-4">{{ $t('resources.news.not_found_desc') || 'The article you are looking for does not exist or has been removed.' }}</p>
      <NuxtLink
        :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
        class="btn btn-primary"
      >
        <i class="bi bi-arrow-left me-2"></i>
        {{ $t('resources.news.back_to_news') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { getNewsBySlug } from '../data/news'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)
const route = useRoute()

const article = computed(() => {
  return getNewsBySlug(route.params.slug)
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(currentLocale.value === 'fr' ? 'fr-FR' : 'en-US', options)
}

// SEO Meta tags
useHead({
  title: () => {
    if (article.value) {
      const title = currentLocale.value === 'fr' ? article.value.title.fr : article.value.title.en
      return title + ' - SAWES'
    }
    return 'News - SAWES'
  },
  meta: [
    {
      name: 'description',
      content: () => {
        if (article.value) {
          return currentLocale.value === 'fr' ? article.value.excerpt.fr : article.value.excerpt.en
        }
        return ''
      }
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb */
.breadcrumb {
  background: transparent;
  padding: 0;
}

/* Article Content */
.article-content {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #444;
}

.article-content p {
  margin-bottom: 1.5rem;
}

/* Image Styling */
.rounded-4 {
  border-radius: 1rem;
}
</style>
