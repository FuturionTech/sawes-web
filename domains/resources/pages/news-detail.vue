<template>
  <div class="news-detail-page">
    <div v-if="article" class="container py-5">
      <!-- Back Link -->
      <div class="mb-4">
        <NuxtLink
          :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
          class="btn btn-link text-decoration-none"
        >
          <i class="bi bi-arrow-left me-1"></i>
          {{ $t('resources.news.back_to_news') }}
        </NuxtLink>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- Article Header -->
          <article>
            <!-- Type Badge -->
            <div class="mb-3">
              <span class="badge bg-primary">
                {{ $t(`resources.news.types.${article.type}`) }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="display-5 fw-bold mb-3">
              {{ currentLocale === 'fr' ? article.title.fr : article.title.en }}
            </h1>

            <!-- Meta -->
            <div class="d-flex align-items-center mb-4 text-muted">
              <i class="bi bi-calendar3 me-2"></i>
              <span>{{ formatDate(article.date) }}</span>
              <span v-if="article.author" class="mx-2">•</span>
              <span v-if="article.author">
                <i class="bi bi-person me-1"></i>
                {{ article.author }}
              </span>
            </div>

            <!-- Featured Image -->
            <div v-if="article.image" class="mb-4">
              <NuxtImg
                :src="article.image"
                :alt="currentLocale === 'fr' ? article.title.fr : article.title.en"
                class="img-fluid rounded shadow-sm"
                loading="lazy"
              />
            </div>

            <!-- Content -->
            <div class="article-content mb-5" style="white-space: pre-line;">
              {{ currentLocale === 'fr' ? article.content.fr : article.content.en }}
            </div>

            <!-- Categories -->
            <div v-if="article.category.length > 0" class="mb-4">
              <strong class="d-block mb-2">Categories:</strong>
              <div class="d-flex flex-wrap gap-2">
                <span
                  v-for="cat in article.category"
                  :key="cat"
                  class="badge bg-light text-dark"
                >
                  {{ $t(`resources.news.categories.${cat}`) }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div v-else class="container py-5 text-center">
      <h2>Article not found</h2>
      <NuxtLink
        :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
        class="btn btn-primary mt-3"
      >
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
</script>

<style scoped>
.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
}
</style>
