<template>
  <div class="resources-hub">
    <!-- Hero Section -->
    <section class="position-relative bg-dark text-white overflow-hidden page-header-spacing">
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
            <li class="breadcrumb-item active text-white" aria-current="page">
              {{ $t('breadcrumbs.resources') }}
            </li>
          </ol>
        </nav>

        <!-- Hero Content -->
        <div class="row justify-content-center py-5">
          <div class="col-lg-10 col-xl-8 text-center">
            <!-- Badge -->
            <div class="mb-4" data-aos="fade-up">
              <span class="badge bg-primary bg-opacity-10 text-primary border border-primary px-4 py-2 fs-6">
                <i class="bi bi-journal-text me-2"></i>
                {{ $t('resources.hero.badge') || 'Knowledge & Insights' }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.hero.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="lead fs-4 mb-5 text-white-75" data-aos="fade-up" data-aos-delay="200">
              {{ $t('resources.hero.subtitle') }}
            </p>

            <!-- Stats -->
            <div class="row g-4 mt-4" data-aos="fade-up" data-aos-delay="300">
              <div class="col-6 col-md-3">
                <div class="text-center">
                  <div class="display-6 fw-bold text-primary mb-1">{{ recentNews.length }}+</div>
                  <div class="text-white-75 small">{{ $t('resources.sections.news') }}</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-center">
                  <div class="display-6 fw-bold text-primary mb-1">{{ recentPublications.length }}+</div>
                  <div class="text-white-75 small">{{ $t('resources.sections.publications') }}</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-center">
                  <div class="display-6 fw-bold text-primary mb-1">{{ galleryImages.length }}+</div>
                  <div class="text-white-75 small">{{ $t('resources.sections.gallery') }}</div>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="text-center">
                  <div class="display-6 fw-bold text-primary mb-1">{{ upcomingEvents.length }}+</div>
                  <div class="text-white-75 small">{{ $t('resources.sections.events') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <!-- Section Header -->
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h1 fw-bold mb-3" data-aos="fade-up">
              {{ $t('resources.quick_nav.title') || 'Explore Our Resources' }}
            </h2>
            <p class="text-muted fs-5" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.quick_nav.subtitle') || 'Access our complete collection of documentation and insights' }}
            </p>
          </div>
        </div>

        <div class="row g-4">
          <!-- News Card -->
          <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
              class="card h-100 border-0 shadow-hover text-decoration-none text-center p-4 transition-all"
            >
              <div class="card-body d-flex flex-column">
                <!-- Icon with gradient background -->
                <div class="icon-box mb-4 mx-auto">
                  <div class="icon-gradient bg-primary bg-opacity-10 rounded-circle p-4">
                    <i class="bi bi-newspaper text-primary" style="font-size: 2.5rem;"></i>
                  </div>
                </div>

                <h5 class="card-title text-dark fw-bold mb-3">{{ $t('resources.sections.news') }}</h5>
                <p class="card-text text-muted mb-4 flex-grow-1">
                  {{ $t('resources.quick_nav.news_desc') || 'Latest updates and announcements' }}
                </p>

                <!-- Count Badge -->
                <div class="mt-auto">
                  <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                    {{ recentNews.length }} {{ $t('resources.news.recent').toLowerCase() }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Publications Card -->
          <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/publications' : '/en/publications'"
              class="card h-100 border-0 shadow-hover text-decoration-none text-center p-4 transition-all"
            >
              <div class="card-body d-flex flex-column">
                <div class="icon-box mb-4 mx-auto">
                  <div class="icon-gradient bg-danger bg-opacity-10 rounded-circle p-4">
                    <i class="bi bi-file-earmark-pdf text-danger" style="font-size: 2.5rem;"></i>
                  </div>
                </div>

                <h5 class="card-title text-dark fw-bold mb-3">{{ $t('resources.sections.publications') }}</h5>
                <p class="card-text text-muted mb-4 flex-grow-1">
                  {{ $t('resources.quick_nav.publications_desc') || 'Technical reports and studies' }}
                </p>

                <div class="mt-auto">
                  <span class="badge bg-danger bg-opacity-10 text-danger px-3 py-2">
                    {{ recentPublications.length }} {{ $t('resources.publications.recent').toLowerCase() }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Gallery Card -->
          <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/galerie' : '/en/gallery'"
              class="card h-100 border-0 shadow-hover text-decoration-none text-center p-4 transition-all"
            >
              <div class="card-body d-flex flex-column">
                <div class="icon-box mb-4 mx-auto">
                  <div class="icon-gradient bg-success bg-opacity-10 rounded-circle p-4">
                    <i class="bi bi-images text-success" style="font-size: 2.5rem;"></i>
                  </div>
                </div>

                <h5 class="card-title text-dark fw-bold mb-3">{{ $t('resources.sections.gallery') }}</h5>
                <p class="card-text text-muted mb-4 flex-grow-1">
                  {{ $t('resources.quick_nav.gallery_desc') || 'Project photos and visuals' }}
                </p>

                <div class="mt-auto">
                  <span class="badge bg-success bg-opacity-10 text-success px-3 py-2">
                    {{ galleryImages.length }} {{ $t('resources.gallery.recent').toLowerCase() }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Events Card -->
          <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/evenements' : '/en/events'"
              class="card h-100 border-0 shadow-hover text-decoration-none text-center p-4 transition-all"
            >
              <div class="card-body d-flex flex-column">
                <div class="icon-box mb-4 mx-auto">
                  <div class="icon-gradient bg-warning bg-opacity-10 rounded-circle p-4">
                    <i class="bi bi-calendar-event text-warning" style="font-size: 2.5rem;"></i>
                  </div>
                </div>

                <h5 class="card-title text-dark fw-bold mb-3">{{ $t('resources.sections.events') }}</h5>
                <p class="card-text text-muted mb-4 flex-grow-1">
                  {{ $t('resources.quick_nav.events_desc') || 'Workshops and training sessions' }}
                </p>

                <div class="mt-auto">
                  <span class="badge bg-warning bg-opacity-10 text-warning px-3 py-2">
                    {{ upcomingEvents.length }} {{ $t('resources.events.upcoming').toLowerCase() }}
                  </span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured News -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div class="row align-items-end mb-5">
          <div class="col-lg-8" data-aos="fade-up">
            <div class="mb-2">
              <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                <i class="bi bi-newspaper me-2"></i>
                {{ $t('resources.sections.news') }}
              </span>
            </div>
            <h2 class="h1 fw-bold mb-3">{{ $t('resources.news.featured') }}</h2>
            <p class="text-muted fs-5 mb-0">{{ $t('resources.news.subtitle') }}</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/actualites' : '/en/news'"
              class="btn btn-outline-primary btn-lg"
            >
              {{ $t('resources.cta.view_all') }}
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="row g-4">
          <div
            v-for="(article, index) in recentNews.slice(0, 3)"
            :key="article.id"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="col-md-6 col-lg-4"
          >
            <NewsCard :article="article" />
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Publications -->
    <section class="py-5 py-lg-6 bg-light">
      <div class="container">
        <div class="row align-items-end mb-5">
          <div class="col-lg-8" data-aos="fade-up">
            <div class="mb-2">
              <span class="badge bg-danger bg-opacity-10 text-danger px-3 py-2">
                <i class="bi bi-file-earmark-pdf me-2"></i>
                {{ $t('resources.sections.publications') }}
              </span>
            </div>
            <h2 class="h1 fw-bold mb-3">{{ $t('resources.publications.recent') }}</h2>
            <p class="text-muted fs-5 mb-0">{{ $t('resources.publications.subtitle') }}</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/publications' : '/en/publications'"
              class="btn btn-outline-primary btn-lg"
            >
              {{ $t('resources.cta.view_all') }}
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="row g-4">
          <div
            v-for="(publication, index) in recentPublications.slice(0, 3)"
            :key="publication.id"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="col-md-6 col-lg-4"
          >
            <PublicationCard :publication="publication" />
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div class="row align-items-end mb-5">
          <div class="col-lg-8" data-aos="fade-up">
            <div class="mb-2">
              <span class="badge bg-warning bg-opacity-10 text-warning px-3 py-2">
                <i class="bi bi-calendar-event me-2"></i>
                {{ $t('resources.sections.events') }}
              </span>
            </div>
            <h2 class="h1 fw-bold mb-3">{{ $t('resources.events.upcoming') }}</h2>
            <p class="text-muted fs-5 mb-0">{{ $t('resources.events.subtitle') }}</p>
          </div>
          <div class="col-lg-4 text-lg-end mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="100">
            <NuxtLink
              :to="currentLocale === 'fr' ? '/evenements' : '/en/events'"
              class="btn btn-outline-primary btn-lg"
            >
              {{ $t('resources.cta.view_all') }}
              <i class="bi bi-arrow-right ms-2"></i>
            </NuxtLink>
          </div>
        </div>

        <div v-if="upcomingEvents.length > 0" class="row g-4">
          <div
            v-for="(event, index) in upcomingEvents.slice(0, 3)"
            :key="event.id"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 100"
            class="col-md-6 col-lg-4"
          >
            <EventCard :event="event" />
          </div>
        </div>
        <div v-else class="text-center py-5" data-aos="fade-up">
          <div class="mb-4">
            <div class="icon-box d-inline-block">
              <div class="bg-light rounded-circle p-4">
                <i class="bi bi-calendar-x text-muted" style="font-size: 3rem;"></i>
              </div>
            </div>
          </div>
          <h4 class="fw-bold mb-2">{{ $t('resources.events.no_events') }}</h4>
          <p class="text-muted mb-4">{{ $t('resources.events.check_back') || 'Check back soon for upcoming events' }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="position-relative py-5 py-lg-6 bg-gradient text-white overflow-hidden">
      <!-- Background gradient -->
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-primary"></div>
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);">
        </div>
      </div>

      <div class="container position-relative">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center" data-aos="fade-up">
            <!-- Icon -->
            <div class="mb-4">
              <div class="icon-box d-inline-block">
                <div class="bg-white bg-opacity-10 rounded-circle p-4">
                  <i class="bi bi-envelope-check text-white" style="font-size: 3rem;"></i>
                </div>
              </div>
            </div>

            <h2 class="display-5 fw-bold mb-4">{{ $t('resources.cta.subscribe') }}</h2>
            <p class="lead mb-5 text-white-75">
              {{ $t('resources.cta.subscribe_desc') || 'Stay updated with our latest news, publications and events on water, sanitation and environmental projects' }}
            </p>

            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <NuxtLink
                :to="currentLocale === 'fr' ? '/contact' : '/en/contact'"
                class="btn btn-light btn-lg px-5"
              >
                <i class="bi bi-envelope me-2"></i>
                {{ $t('resources.cta.contact_us') }}
              </NuxtLink>
              <NuxtLink
                :to="currentLocale === 'fr' ? '/a-propos' : '/en/about'"
                class="btn btn-outline-light btn-lg px-5"
              >
                <i class="bi bi-info-circle me-2"></i>
                {{ $t('about.learn_more') || 'Learn More' }}
              </NuxtLink>
            </div>
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
/* Hero Section */
.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
}

/* Breadcrumb styling for dark background */
.breadcrumb-light {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-light .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-light .breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-light .breadcrumb-item a:hover {
  color: white !important;
}

/* Card Hover Effects */
.shadow-hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transition: all 0.3s ease;
}

.shadow-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.transition-all {
  transition: all 0.3s ease;
}

/* Icon Boxes */
.icon-gradient {
  transition: all 0.3s ease;
}

.shadow-hover:hover .icon-gradient {
  transform: scale(1.1);
}

/* Section Spacing */
.py-lg-6 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

@media (max-width: 991.98px) {
  .py-lg-6 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
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
