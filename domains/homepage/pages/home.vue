<template>
  <div class="homepage">
    <!-- Hero Section - 2-column with parallax images on right -->
    <HeroSection/>

    <!-- Stats Section - 4-column stats grid -->
    <StatsSection/>

    <!-- Services Section - Simple 3-column grid -->
    <ServicesGrid/>

    <!-- Industries Section - Carousel -->
    <IndustriesSection/>

    <!-- Clients Section - Logo slider -->
    <ClientsSection/>

    <!-- Mission & Vision Section -->
    <section class="py-5 bg-secondary bg-opacity-10">
      <div class="container py-5">
        <div class="row g-4">
          <!-- Mission Card -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="mb-4">
                  <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-3">
                    <i class="bi bi-bullseye fs-1 text-primary"></i>
                  </div>
                </div>
                <h2 class="h3 fw-bold mb-3">{{ $t('homepage.mission.title') }}</h2>
                <p class="text-muted mb-0 lead">{{ $t('homepage.mission.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="mb-4">
                  <div class="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle p-3 mb-3">
                    <i class="bi bi-eye fs-1 text-info"></i>
                  </div>
                </div>
                <h2 class="h3 fw-bold mb-3">{{ $t('homepage.vision.title') }}</h2>
                <p class="text-muted mb-0 lead">{{ $t('homepage.vision.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-5">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">{{ $t('homepage.values.title') }}</h2>
        </div>
        <div class="row g-4">
          <!-- Value 1: Excellence -->
          <div class="col-md-4">
            <div class="text-center h-100 p-4">
              <div class="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle p-4 mb-3">
                <i class="bi bi-award fs-1 text-success"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('homepage.values.value1.title') }}</h3>
              <p class="text-muted">{{ $t('homepage.values.value1.description') }}</p>
            </div>
          </div>

          <!-- Value 2: Innovation -->
          <div class="col-md-4">
            <div class="text-center h-100 p-4">
              <div class="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle p-4 mb-3">
                <i class="bi bi-lightbulb fs-1 text-warning"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('homepage.values.value2.title') }}</h3>
              <p class="text-muted">{{ $t('homepage.values.value2.description') }}</p>
            </div>
          </div>

          <!-- Value 3: Reputation -->
          <div class="col-md-4">
            <div class="text-center h-100 p-4">
              <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-4 mb-3">
                <i class="bi bi-star fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('homepage.values.value3.title') }}</h3>
              <p class="text-muted">{{ $t('homepage.values.value3.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section - Carousel -->
    <TestimonialsSection/>

    <!-- Case Studies Section -->
    <CaseStudiesSection/>

    <!-- Contact CTA Section - Split panel design -->
    <ContactCTASection/>
  </div>
</template>

<script setup>
import { useHead } from '#imports'

const { t, locale } = useI18n();

// Computed path for projects page
const projectsPath = computed(() => locale.value === 'en' ? '/en/projects' : '/projets')

useHead({
  title: t('meta.home.title'),
  meta: [
    { name: 'description', content: t('meta.home.description') },
    { name: 'keywords', content: t('meta.home.keywords') },
    { name: 'author', content: 'SAWES' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
/* Optional: Add any page-specific styles here */
</style>
