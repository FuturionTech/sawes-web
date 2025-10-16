<template>
  <article class="card h-100 border-0 shadow-sm card-hover">
    <!-- Image -->
    <div class="position-relative overflow-hidden rounded-top">
      <NuxtImg
        v-if="article.image"
        :src="article.image"
        :alt="currentLocale === 'fr' ? article.title.fr : article.title.en"
        class="card-img-top"
        loading="lazy"
        fit="cover"
        :width="400"
        :height="250"
      />
      <div v-else class="card-img-top bg-secondary" style="height: 250px;"></div>

      <!-- Type Badge -->
      <div class="position-absolute top-0 start-0 m-3">
        <span class="badge bg-primary">
          {{ $t(`resources.news.types.${article.type}`) }}
        </span>
      </div>

      <!-- Featured Badge -->
      <div v-if="article.featured" class="position-absolute top-0 end-0 m-3">
        <span class="badge bg-warning text-dark">
          <i class="bi bi-star-fill me-1"></i>
          {{ $t('resources.news.featured') }}
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body d-flex flex-column">
      <!-- Meta -->
      <div class="d-flex align-items-center mb-3 text-muted small">
        <i class="bi bi-calendar3 me-2"></i>
        <span>{{ formatDate(article.date) }}</span>
        <span v-if="article.category.length > 0" class="mx-2">•</span>
        <div v-if="article.category.length > 0" class="d-flex flex-wrap gap-1">
          <span
            v-for="cat in article.category.slice(0, 2)"
            :key="cat"
            class="badge bg-light text-dark"
          >
            {{ $t(`resources.news.categories.${cat}`) }}
          </span>
        </div>
      </div>

      <!-- Title -->
      <h5 class="card-title mb-3">
        <NuxtLink
          :to="getArticleLink(article.slug)"
          class="text-decoration-none text-dark stretched-link"
        >
          {{ currentLocale === 'fr' ? article.title.fr : article.title.en }}
        </NuxtLink>
      </h5>

      <!-- Excerpt -->
      <p class="card-text text-muted mb-3 flex-grow-1">
        {{ currentLocale === 'fr' ? article.excerpt.fr : article.excerpt.en }}
      </p>

      <!-- Author -->
      <div v-if="article.author" class="text-muted small">
        <i class="bi bi-person me-1"></i>
        {{ article.author }}
      </div>
    </div>

    <!-- Card Footer -->
    <div class="card-footer bg-transparent border-0 pt-0 pb-4">
      <NuxtLink
        :to="getArticleLink(article.slug)"
        class="btn btn-link text-primary p-0 text-decoration-none"
      >
        {{ $t('resources.news.read_more') }}
        <i class="bi bi-arrow-right ms-1"></i>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(currentLocale.value === 'fr' ? 'fr-FR' : 'en-US', options)
}

const getArticleLink = (slug) => {
  return currentLocale.value === 'fr' ? `/actualites/${slug}` : `/en/news/${slug}`
}
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}

.card-img-top {
  height: 250px;
  object-fit: cover;
}
</style>
