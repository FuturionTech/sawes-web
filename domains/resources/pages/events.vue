<template>
  <div class="events-page">
    <!-- Hero -->
    <section class="position-relative bg-warning text-dark overflow-hidden" style="margin-top: 88px;">
      <!-- Background pattern overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-5">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px);">
        </div>
      </div>

      <div class="container position-relative py-5">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="pt-4 pb-3">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-dark text-opacity-75 text-decoration-none">
                <i class="bi bi-house-door me-1"></i>
                {{ $t('breadcrumbs.home') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item">
              <NuxtLink :to="currentLocale === 'fr' ? '/ressources' : '/en/resources'" class="text-dark text-opacity-75 text-decoration-none">
                {{ $t('breadcrumbs.resources') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active text-dark" aria-current="page">
              {{ $t('resources.events.title') }}
            </li>
          </ol>
        </nav>

        <!-- Hero Content -->
        <div class="row justify-content-center py-5">
          <div class="col-lg-8 text-center">
            <!-- Icon -->
            <div class="mb-4" data-aos="fade-up">
              <div class="icon-box d-inline-block">
                <div class="bg-white bg-opacity-50 rounded-circle p-4">
                  <i class="bi bi-calendar-event text-dark" style="font-size: 3rem;"></i>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.events.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="lead fs-4 text-dark text-opacity-75" data-aos="fade-up" data-aos-delay="200">
              {{ $t('resources.events.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <div class="mb-3">
              <span class="badge bg-success bg-opacity-10 text-success px-3 py-2">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('resources.events.upcoming') }}
              </span>
            </div>
            <h2 class="h1 fw-bold mb-3">{{ $t('resources.events.upcoming') }}</h2>
            <p class="text-muted fs-5">
              {{ $t('resources.events.upcoming_desc') || 'Join us at our upcoming workshops, training sessions and community events' }}
            </p>
          </div>
        </div>

        <div v-if="upcoming.length > 0" class="row g-4">
          <div 
            v-for="(event, index) in upcoming" 
            :key="event.id" 
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
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
          <p class="text-muted">{{ $t('resources.events.check_back') || 'Check back soon for upcoming events and training opportunities' }}</p>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section v-if="past.length > 0" class="py-5 py-lg-6 bg-light">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
            <div class="mb-3">
              <span class="badge bg-secondary bg-opacity-10 text-secondary px-3 py-2">
                <i class="bi bi-calendar-check me-2"></i>
                {{ $t('resources.events.past') }}
              </span>
            </div>
            <h2 class="h1 fw-bold mb-3">{{ $t('resources.events.past') }}</h2>
            <p class="text-muted fs-5">
              {{ $t('resources.events.past_desc') || 'Review highlights from our previous events and initiatives' }}
            </p>
          </div>
        </div>

        <div class="row g-4">
          <div 
            v-for="(event, index) in past" 
            :key="event.id" 
            class="col-md-6 col-lg-4"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <EventCard :event="event" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getUpcomingEvents, getPastEvents } from '../data/events'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const upcoming = computed(() => getUpcomingEvents())
const past = computed(() => getPastEvents())

// SEO Meta tags
useHead({
  title: () => {
    const { t } = useI18n()
    return t('resources.events.title') + ' - SAWES'
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const { t } = useI18n()
        return t('resources.events.subtitle')
      }
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styling */
.breadcrumb {
  background: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(0, 0, 0, 0.5);
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
</style>
