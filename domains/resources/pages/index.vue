<template>
  <div class="resources-hub">
    <!-- Hero Section -->
    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-4 fw-bold mb-3">
              {{ $t('resources.hero.title') }}
            </h1>
            <p class="lead mb-4">
              {{ $t('resources.hero.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="row g-4">
          <!-- News Card -->
          <div class="col-md-6 col-lg-3">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
              class="card h-100 border-0 shadow-sm text-decoration-none card-hover text-center"
            >
              <div class="card-body">
                <i class="bi bi-newspaper text-primary mb-3" style="font-size: 3rem;"></i>
                <h5 class="card-title text-dark">{{ $t('resources.sections.news') }}</h5>
                <p class="card-text text-muted small">
                  {{ recentNews.length }} {{ $t('resources.news.recent').toLowerCase() }}
                </p>
              </div>
            </NuxtLink>
          </div>

          <!-- Publications Card -->
          <div class="col-md-6 col-lg-3">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/publications' : '/en/publications'"
              class="card h-100 border-0 shadow-sm text-decoration-none card-hover text-center"
            >
              <div class="card-body">
                <i class="bi bi-file-earmark-pdf text-danger mb-3" style="font-size: 3rem;"></i>
                <h5 class="card-title text-dark">{{ $t('resources.sections.publications') }}</h5>
                <p class="card-text text-muted small">
                  {{ recentPublications.length }} {{ $t('resources.publications.recent').toLowerCase() }}
                </p>
              </div>
            </NuxtLink>
          </div>

          <!-- Gallery Card -->
          <div class="col-md-6 col-lg-3">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/galerie' : '/en/gallery'"
              class="card h-100 border-0 shadow-sm text-decoration-none card-hover text-center"
            >
              <div class="card-body">
                <i class="bi bi-images text-success mb-3" style="font-size: 3rem;"></i>
                <h5 class="card-title text-dark">{{ $t('resources.sections.gallery') }}</h5>
                <p class="card-text text-muted small">
                  {{ galleryImages.length }} {{ $t('resources.gallery.recent').toLowerCase() }}
                </p>
              </div>
            </NuxtLink>
          </div>

          <!-- Events Card -->
          <div class="col-md-6 col-lg-3">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/evenements' : '/en/events'"
              class="card h-100 border-0 shadow-sm text-decoration-none card-hover text-center"
            >
              <div class="card-body">
                <i class="bi bi-calendar-event text-warning mb-3" style="font-size: 3rem;"></i>
                <h5 class="card-title text-dark">{{ $t('resources.sections.events') }}</h5>
                <p class="card-text text-muted small">
                  {{ upcomingEvents.length }} {{ $t('resources.events.upcoming').toLowerCase() }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured News -->
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold">{{ $t('resources.news.featured') }}</h2>
            <p class="text-muted">{{ $t('resources.news.subtitle') }}</p>
          </div>
          <NuxtLink
            :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
            class="btn btn-outline-primary"
          >
            {{ $t('resources.cta.view_all') }}
            <i class="bi bi-arrow-right ms-1"></i>
          </NuxtLink>
        </div>

        <div class="row g-4">
          <div
            v-for="article in recentNews.slice(0, 3)"
            :key="article.id"
            class="col-md-6 col-lg-4"
          >
            <NewsCard :article="article" />
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Publications -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold">{{ $t('resources.publications.recent') }}</h2>
            <p class="text-muted">{{ $t('resources.publications.subtitle') }}</p>
          </div>
          <NuxtLink
            :to="currentLocale === 'fr' ? '/publications' : '/en/publications'"
            class="btn btn-outline-primary"
          >
            {{ $t('resources.cta.view_all') }}
            <i class="bi bi-arrow-right ms-1"></i>
          </NuxtLink>
        </div>

        <div class="row g-4">
          <div
            v-for="publication in recentPublications.slice(0, 3)"
            :key="publication.id"
            class="col-md-6 col-lg-4"
          >
            <PublicationCard :publication="publication" />
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-5">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 class="fw-bold">{{ $t('resources.events.upcoming') }}</h2>
            <p class="text-muted">{{ $t('resources.events.subtitle') }}</p>
          </div>
          <NuxtLink
            :to="currentLocale === 'fr' ? '/evenements' : '/en/events'"
            class="btn btn-outline-primary"
          >
            {{ $t('resources.cta.view_all') }}
            <i class="bi bi-arrow-right ms-1"></i>
          </NuxtLink>
        </div>

        <div v-if="upcomingEvents.length > 0" class="row g-4">
          <div
            v-for="event in upcomingEvents.slice(0, 3)"
            :key="event.id"
            class="col-md-6 col-lg-4"
          >
            <EventCard :event="event" />
          </div>
        </div>
        <div v-else class="text-center text-muted py-5">
          <i class="bi bi-calendar-x" style="font-size: 3rem;"></i>
          <p class="mt-3">{{ $t('resources.events.no_events') }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="fw-bold mb-3">{{ $t('resources.cta.subscribe') }}</h2>
            <p class="mb-4">
              Stay updated with our latest news, publications and events
            </p>
            <NuxtLink
              :to="currentLocale === 'fr' ? '/contact' : '/en/contact'"
              class="btn btn-light btn-lg"
            >
              {{ $t('resources.cta.contact_us') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { getRecentNews } from '../data/news'
import { getRecentPublications } from '../data/publications'
import { getRecentGalleryImages } from '../data/gallery'
import { getUpcomingEvents } from '../data/events'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

// Load data
const recentNews = getRecentNews(3)
const recentPublications = getRecentPublications(3)
const galleryImages = getRecentGalleryImages(12)
const upcomingEvents = getUpcomingEvents(3)

// SEO Meta tags
useHead({
  title: () => {
    const { t } = useI18n()
    return t('meta.resources.title')
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const { t } = useI18n()
        return t('meta.resources.description')
      }
    },
    {
      name: 'keywords',
      content: () => {
        const { t } = useI18n()
        return t('meta.resources.keywords')
      }
    }
  ]
})
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}
</style>
