<template>
  <div>
    <!-- Expertise Hero Section -->
    <section class="container py-5 mb-md-3 mb-lg-4 mb-xxl-5 mt-navbar">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mt-3">
        <ol class="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-decoration-none">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.expertise') }}</li>
        </ol>
      </nav>

      <div class="text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">
        <h1 class="display-4 fw-bold mb-3">{{ $t('expertise.title') }}</h1>
        <p class="lead text-body-secondary mb-4 mb-lg-5 mx-auto" style="max-width: 700px;">
          {{ $t('expertise.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Expertise Grid Section -->
    <section class="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- Expertise Cards -->
        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i class="bi-graph-up fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('expertise.planning.title') }}</h3>
              <p class="text-body-secondary mb-4">{{ $t('expertise.planning.description') }}</p>

              <div class="mt-4">
                <p class="fw-semibold mb-2 small text-uppercase text-muted">{{ $t('expertise.planning.title').includes('Activities') ? 'Activities' : 'Activités' }}</p>
                <ul class="list-unstyled">
                  <li v-for="(activity, idx) in $tm('expertise.planning.activities')" :key="idx" class="mb-2">
                    <i class="bi-check-circle-fill text-success me-2"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i class="bi-clipboard-data fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('expertise.studies.title') }}</h3>
              <p class="text-body-secondary mb-4">{{ $t('expertise.studies.description') }}</p>

              <div class="mt-4">
                <p class="fw-semibold mb-2 small text-uppercase text-muted">{{ $t('expertise.studies.title').includes('Activities') ? 'Activities' : 'Activités' }}</p>
                <ul class="list-unstyled">
                  <li v-for="(activity, idx) in $tm('expertise.studies.activities')" :key="idx" class="mb-2">
                    <i class="bi-check-circle-fill text-success me-2"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i class="bi-people fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('expertise.training.title') }}</h3>
              <p class="text-body-secondary mb-4">{{ $t('expertise.training.description') }}</p>

              <div class="mt-4">
                <p class="fw-semibold mb-2 small text-uppercase text-muted">{{ $t('expertise.training.title').includes('Activities') ? 'Activities' : 'Activités' }}</p>
                <ul class="list-unstyled">
                  <li v-for="(activity, idx) in $tm('expertise.training.activities')" :key="idx" class="mb-2">
                    <i class="bi-check-circle-fill text-success me-2"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i class="bi-building fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('expertise.management.title') }}</h3>
              <p class="text-body-secondary mb-4">{{ $t('expertise.management.description') }}</p>

              <div class="mt-4">
                <p class="fw-semibold mb-2 small text-uppercase text-muted">{{ $t('expertise.management.title').includes('Activities') ? 'Activities' : 'Activités' }}</p>
                <ul class="list-unstyled">
                  <li v-for="(activity, idx) in $tm('expertise.management.activities')" :key="idx" class="mb-2">
                    <i class="bi-check-circle-fill text-success me-2"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
            <div class="card-body p-4 p-lg-5">
              <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 mb-4 mx-auto text-center" style="width: fit-content;">
                <i class="bi-droplet fs-1 text-primary"></i>
              </div>
              <h3 class="h4 fw-bold mb-3">{{ $t('expertise.works.title') }}</h3>
              <p class="text-body-secondary mb-4">{{ $t('expertise.works.description') }}</p>

              <div class="mt-4">
                <p class="fw-semibold mb-2 small text-uppercase text-muted">{{ $t('expertise.works.title').includes('Activities') ? 'Activities' : 'Activités' }}</p>
                <ul class="list-unstyled">
                  <li v-for="(activity, idx) in $tm('expertise.works.activities')" :key="idx" class="mb-2">
                    <i class="bi-check-circle-fill text-success me-2"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container py-5 my-md-3 my-lg-4 my-xxl-5">
      <div class="bg-primary bg-opacity-5 rounded-4 p-5 text-center">
        <h2 class="h1 fw-bold mb-3">{{ $t('homepage.contact.ready') }}</h2>
        <p class="lead text-body-secondary mb-4 mx-auto" style="max-width: 600px;">
          {{ $t('homepage.contact.message') }}
        </p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg px-4">
            <i class="bi-telephone-fill me-2"></i>
            {{ $t('homepage.contact.cta') }}
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-outline-primary btn-lg px-4">
            {{ $t('header.about') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead, useI18n } from '#imports'

const { t, tm } = useI18n()

useHead({
  title: () => t('meta.expertise.title'),
  meta: [
    {
      name: 'description',
      content: () => t('meta.expertise.description')
    },
    {
      name: 'keywords',
      content: () => t('meta.expertise.keywords')
    },
    {
      name: 'author',
      content: 'SAWES'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
})

</script>

<style scoped>
/* Expertise Card Hover Effects */
.expertise-card {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: var(--bs-body-bg);
}

.expertise-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12) !important;
}

/* Icon Wrapper Animation */
.expertise-icon-wrapper {
  transition: all 0.3s ease-in-out;
}

.expertise-card:hover .expertise-icon-wrapper {
  transform: scale(1.05);
  background: rgba(0, 0, 255, 0.15) !important;
}

/* Dark mode compatibility */
:global([data-bs-theme="dark"]) .expertise-card {
  background: var(--bs-dark) !important;
  border: 1px solid rgba(0, 0, 255, 0.1) !important;
}

:global([data-bs-theme="dark"]) .expertise-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 255, 0.15) !important;
}

:global([data-bs-theme="dark"]) .expertise-icon-wrapper {
  background: rgba(0, 0, 255, 0.1) !important;
}

:global([data-bs-theme="dark"]) .expertise-card:hover .expertise-icon-wrapper {
  background: rgba(0, 0, 255, 0.2) !important;
}

/* Enhanced accessibility */
.expertise-card:focus-visible {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}

/* Responsive hover effects - disable on touch devices */
@media (hover: none) {
  .expertise-card:hover {
    transform: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .expertise-card,
  .expertise-icon-wrapper {
    transition: none !important;
  }
}

/* Navbar spacing for pages without hero section */
.mt-navbar {
  padding-top: 120px;
}

/* List styling */
ul.list-unstyled li {
  display: flex;
  align-items: flex-start;
}
</style>
