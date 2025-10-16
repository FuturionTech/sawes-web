<template>
  <section class="position-relative py-5 bg-gradient page-header-spacing" style="background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);">
    <!-- Background pattern -->
    <div class="position-absolute top-0 start-0 w-100 h-100" style="opacity: 0.1;">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container position-relative">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="pt-4 pb-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active text-white" aria-current="page">{{ $t('breadcrumbs.partners') }}</li>
        </ol>
      </nav>

      <div class="row align-items-center py-3">
        <div class="col-lg-8 mx-auto text-center" data-aos="fade-up">
          <!-- Badge -->
          <div class="badge bg-white bg-opacity-25 text-white fs-6 fw-normal px-4 py-2 mb-4">
            <i class="bi bi-people-fill me-2"></i>
            {{ $t('partners.hero.badge') }}
          </div>

          <!-- Title -->
          <h1 class="display-3 fw-bold text-white mb-4">
            {{ $t('partners.title') }}
          </h1>

          <!-- Subtitle -->
          <p class="lead text-white mb-5 fs-4">
            {{ $t('partners.subtitle') }}
          </p>

          <!-- Stats -->
          <div class="row g-4 mt-4">
            <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div class="text-white">
                <div class="display-4 fw-bold">{{ stats.partners }}+</div>
                <div class="fs-6 text-white-50">{{ $t('partners.stats.partners') }}</div>
              </div>
            </div>
            <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="200">
              <div class="text-white">
                <div class="display-4 fw-bold">{{ stats.countries }}</div>
                <div class="fs-6 text-white-50">{{ $t('partners.stats.countries') }}</div>
              </div>
            </div>
            <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div class="text-white">
                <div class="display-4 fw-bold">{{ stats.years }}+</div>
                <div class="fs-6 text-white-50">{{ $t('partners.stats.years') }}</div>
              </div>
            </div>
            <div class="col-6 col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div class="text-white">
                <div class="display-4 fw-bold">{{ stats.projects }}+</div>
                <div class="fs-6 text-white-50">{{ $t('partners.stats.projects') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave decoration -->
    <div class="position-absolute bottom-0 start-0 w-100" style="height: 80px; overflow: hidden;">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = {
  partners: 30,
  countries: 15,
  years: 20,
  projects: 50
}
</script>

<style scoped>
.bg-gradient {
  position: relative;
  overflow: hidden;
}

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
