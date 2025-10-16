<template>
  <div>
    <!-- Expertise Hero Section -->
    <section class="hero-section position-relative overflow-hidden page-header-spacing">
      <div class="hero-pattern position-absolute w-100 h-100"></div>
      <div class="container position-relative py-5 my-md-3 my-lg-4">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="mb-4">
          <ol class="breadcrumb bg-transparent">
            <li class="breadcrumb-item"><NuxtLink to="/" class="text-decoration-none">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $t('breadcrumbs.expertise') }}</li>
          </ol>
        </nav>

        <div class="row align-items-center g-4 py-4">
          <div class="col-lg-8 mx-auto text-center">
            <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
              <i class="bi-award-fill me-2"></i>
              {{ $t('homepage.hero.badge') }}
            </div>
            <h1 class="display-3 fw-bold mb-4">{{ $t('expertise.title') }}</h1>
            <p class="lead text-body-secondary mb-4 fs-5" style="max-width: 750px; margin: 0 auto;">
              {{ $t('expertise.subtitle') }}
            </p>
            
            <!-- Stats Row -->
            <div class="row row-cols-2 row-cols-md-4 g-3 g-md-4 mt-3">
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-white shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">25+</div>
                  <div class="small text-body-secondary">{{ $t('homepage.stats.years_label') }}</div>
                </div>
              </div>
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-white shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">30+</div>
                  <div class="small text-body-secondary">{{ $t('homepage.stats.projects_label') }}</div>
                </div>
              </div>
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-white shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">15+</div>
                  <div class="small text-body-secondary">{{ $t('homepage.stats.partners_label') }}</div>
                </div>
              </div>
              <div class="col">
                <div class="stat-card p-3 rounded-3 bg-white shadow-sm h-100">
                  <div class="fs-2 fw-bold text-primary mb-1">7+</div>
                  <div class="small text-body-secondary">{{ $t('homepage.stats.regions_label') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Context Section -->
    <section class="container py-5 mb-md-3">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="context-card bg-gradient-subtle rounded-4 p-4 p-lg-5 shadow-sm border border-primary border-opacity-10">
            <div class="row align-items-center g-4">
              <div class="col-lg-8">
                <h2 class="h3 fw-bold mb-3">{{ $t('about.company.slogan') }}</h2>
                <p class="text-body-secondary mb-3">
                  {{ $t('about.presentation.description') }}
                </p>
                <p class="text-body-secondary mb-0">
                  {{ $t('about.vision.description') }}
                </p>
              </div>
              <div class="col-lg-4">
                <div class="d-flex flex-column gap-3">
                  <div class="d-flex align-items-start gap-3">
                    <div class="icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3">
                      <i class="bi-check-circle-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <div class="fw-semibold mb-1">{{ $t('homepage.values.value1.title') }}</div>
                      <div class="small text-body-secondary">{{ $t('homepage.values.value1.description') }}</div>
                    </div>
                  </div>
                  <div class="d-flex align-items-start gap-3">
                    <div class="icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3">
                      <i class="bi-lightbulb-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <div class="fw-semibold mb-1">{{ $t('homepage.values.value2.title') }}</div>
                      <div class="small text-body-secondary">{{ $t('homepage.values.value2.description') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Grid Section -->
    <section class="container pb-5 mb-md-3 mb-lg-4 mb-xxl-5">
      <div class="text-center mb-5 pb-3">
        <h2 class="display-5 fw-bold mb-3">{{ $t('homepage.expertise.title') }}</h2>
        <p class="lead text-body-secondary mx-auto" style="max-width: 650px;">
          {{ $t('homepage.expertise.subtitle') }}
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <!-- Expertise Cards -->
        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
            <div class="card-accent position-absolute top-0 start-0 w-100" style="height: 4px; background: linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary-rgb) 100%);"></div>
            <div class="card-body p-4 p-lg-4 d-flex flex-column">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 flex-shrink-0">
                  <i class="bi-graph-up fs-2 text-primary"></i>
                </div>
                <div class="flex-grow-1">
                  <h3 class="h5 fw-bold mb-2">{{ $t('expertise.planning.title') }}</h3>
                  <p class="text-body-secondary mb-0 small">{{ $t('expertise.planning.description') }}</p>
                </div>
              </div>

              <div class="mt-auto pt-3 border-top border-light">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi-list-check fs-5 text-primary me-2"></i>
                  <span class="fw-semibold small text-muted">{{ $t('expertise.planning.title').includes('Activities') ? 'Key Activities' : 'Activités Principales' }}</span>
                </div>
                <ul class="list-unstyled mb-0">
                  <li v-for="(activity, idx) in $tm('expertise.planning.activities')" :key="idx" class="mb-2 d-flex align-items-start">
                    <i class="bi-check2-circle text-success me-2 mt-1 flex-shrink-0"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
            <div class="card-accent position-absolute top-0 start-0 w-100" style="height: 4px; background: linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary-rgb) 100%);"></div>
            <div class="card-body p-4 p-lg-4 d-flex flex-column">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 flex-shrink-0">
                  <i class="bi-clipboard-data fs-2 text-primary"></i>
                </div>
                <div class="flex-grow-1">
                  <h3 class="h5 fw-bold mb-2">{{ $t('expertise.studies.title') }}</h3>
                  <p class="text-body-secondary mb-0 small">{{ $t('expertise.studies.description') }}</p>
                </div>
              </div>

              <div class="mt-auto pt-3 border-top border-light">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi-list-check fs-5 text-primary me-2"></i>
                  <span class="fw-semibold small text-muted">{{ $t('expertise.studies.title').includes('Activities') ? 'Key Activities' : 'Activités Principales' }}</span>
                </div>
                <ul class="list-unstyled mb-0">
                  <li v-for="(activity, idx) in $tm('expertise.studies.activities')" :key="idx" class="mb-2 d-flex align-items-start">
                    <i class="bi-check2-circle text-success me-2 mt-1 flex-shrink-0"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
            <div class="card-accent position-absolute top-0 start-0 w-100" style="height: 4px; background: linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary-rgb) 100%);"></div>
            <div class="card-body p-4 p-lg-4 d-flex flex-column">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 flex-shrink-0">
                  <i class="bi-people fs-2 text-primary"></i>
                </div>
                <div class="flex-grow-1">
                  <h3 class="h5 fw-bold mb-2">{{ $t('expertise.training.title') }}</h3>
                  <p class="text-body-secondary mb-0 small">{{ $t('expertise.training.description') }}</p>
                </div>
              </div>

              <div class="mt-auto pt-3 border-top border-light">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi-list-check fs-5 text-primary me-2"></i>
                  <span class="fw-semibold small text-muted">{{ $t('expertise.training.title').includes('Activities') ? 'Key Activities' : 'Activités Principales' }}</span>
                </div>
                <ul class="list-unstyled mb-0">
                  <li v-for="(activity, idx) in $tm('expertise.training.activities')" :key="idx" class="mb-2 d-flex align-items-start">
                    <i class="bi-check2-circle text-success me-2 mt-1 flex-shrink-0"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
            <div class="card-accent position-absolute top-0 start-0 w-100" style="height: 4px; background: linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary-rgb) 100%);"></div>
            <div class="card-body p-4 p-lg-4 d-flex flex-column">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 flex-shrink-0">
                  <i class="bi-building fs-2 text-primary"></i>
                </div>
                <div class="flex-grow-1">
                  <h3 class="h5 fw-bold mb-2">{{ $t('expertise.management.title') }}</h3>
                  <p class="text-body-secondary mb-0 small">{{ $t('expertise.management.description') }}</p>
                </div>
              </div>

              <div class="mt-auto pt-3 border-top border-light">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi-list-check fs-5 text-primary me-2"></i>
                  <span class="fw-semibold small text-muted">{{ $t('expertise.management.title').includes('Activities') ? 'Key Activities' : 'Activités Principales' }}</span>
                </div>
                <ul class="list-unstyled mb-0">
                  <li v-for="(activity, idx) in $tm('expertise.management.activities')" :key="idx" class="mb-2 d-flex align-items-start">
                    <i class="bi-check2-circle text-success me-2 mt-1 flex-shrink-0"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card expertise-card h-100 border-0 shadow-sm rounded-4 overflow-hidden position-relative">
            <div class="card-accent position-absolute top-0 start-0 w-100" style="height: 4px; background: linear-gradient(90deg, var(--bs-primary) 0%, var(--bs-primary-rgb) 100%);"></div>
            <div class="card-body p-4 p-lg-4 d-flex flex-column">
              <div class="d-flex align-items-start gap-3 mb-3">
                <div class="expertise-icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 flex-shrink-0">
                  <i class="bi-droplet fs-2 text-primary"></i>
                </div>
                <div class="flex-grow-1">
                  <h3 class="h5 fw-bold mb-2">{{ $t('expertise.works.title') }}</h3>
                  <p class="text-body-secondary mb-0 small">{{ $t('expertise.works.description') }}</p>
                </div>
              </div>

              <div class="mt-auto pt-3 border-top border-light">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi-list-check fs-5 text-primary me-2"></i>
                  <span class="fw-semibold small text-muted">{{ $t('expertise.works.title').includes('Activities') ? 'Key Activities' : 'Activités Principales' }}</span>
                </div>
                <ul class="list-unstyled mb-0">
                  <li v-for="(activity, idx) in $tm('expertise.works.activities')" :key="idx" class="mb-2 d-flex align-items-start">
                    <i class="bi-check2-circle text-success me-2 mt-1 flex-shrink-0"></i>
                    <span class="small">{{ activity }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="container py-5 my-md-3 my-lg-4">
      <div class="text-center mb-5">
        <h2 class="display-6 fw-bold mb-3">{{ $t('partners.trust.title') }}</h2>
        <p class="lead text-body-secondary mx-auto" style="max-width: 600px;">
          {{ $t('partners.trust.description') }}
        </p>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        <div class="col">
          <div class="trust-card text-center p-4 rounded-3 bg-light h-100">
            <div class="icon-circle bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
              <i class="bi-award-fill fs-3 text-primary"></i>
            </div>
            <h3 class="h5 fw-bold mb-2">{{ $t('partners.trust.point1_title') }}</h3>
            <p class="small text-body-secondary mb-0">{{ $t('partners.trust.point1_text') }}</p>
          </div>
        </div>
        <div class="col">
          <div class="trust-card text-center p-4 rounded-3 bg-light h-100">
            <div class="icon-circle bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
              <i class="bi-heart-fill fs-3 text-primary"></i>
            </div>
            <h3 class="h5 fw-bold mb-2">{{ $t('partners.trust.point2_title') }}</h3>
            <p class="small text-body-secondary mb-0">{{ $t('partners.trust.point2_text') }}</p>
          </div>
        </div>
        <div class="col">
          <div class="trust-card text-center p-4 rounded-3 bg-light h-100">
            <div class="icon-circle bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
              <i class="bi-people-fill fs-3 text-primary"></i>
            </div>
            <h3 class="h5 fw-bold mb-2">{{ $t('partners.trust.point3_title') }}</h3>
            <p class="small text-body-secondary mb-0">{{ $t('partners.trust.point3_text') }}</p>
          </div>
        </div>
        <div class="col">
          <div class="trust-card text-center p-4 rounded-3 bg-light h-100">
            <div class="icon-circle bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
              <i class="bi-lightbulb-fill fs-3 text-primary"></i>
            </div>
            <h3 class="h5 fw-bold mb-2">{{ $t('partners.trust.point4_title') }}</h3>
            <p class="small text-body-secondary mb-0">{{ $t('partners.trust.point4_text') }}</p>
          </div>
        </div>
      </div>

      <!-- Partners Badge Section -->
      <div class="bg-white rounded-4 p-4 p-lg-5 shadow-sm border border-light">
        <p class="text-center text-muted mb-4 fw-semibold small text-uppercase">{{ $t('homepage.partners.subtitle') }}</p>
        <div class="row g-3 align-items-center justify-content-center">
          <div class="col-6 col-md-3">
            <div class="partner-badge text-center p-3 rounded-3 bg-light">
              <span class="fw-bold text-primary">AFD</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="partner-badge text-center p-3 rounded-3 bg-light">
              <span class="fw-bold text-primary">AfDB</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="partner-badge text-center p-3 rounded-3 bg-light">
              <span class="fw-bold text-primary">ECOWAS</span>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="partner-badge text-center p-3 rounded-3 bg-light">
              <span class="fw-bold text-primary">UNICEF</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container py-5 my-md-3 my-lg-4 my-xxl-5">
      <div class="cta-section position-relative overflow-hidden rounded-4 shadow-lg">
        <div class="cta-pattern position-absolute w-100 h-100"></div>
        <div class="position-relative p-5 text-center">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="badge bg-white text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
                <i class="bi-stars me-2"></i>
                {{ $t('homepage.hero.trust_text') }}
              </div>
              <h2 class="display-5 fw-bold text-white mb-4">{{ $t('homepage.contact.ready') }}</h2>
              <p class="lead text-white text-opacity-90 mb-5 mx-auto" style="max-width: 600px;">
                {{ $t('homepage.contact.message') }}
              </p>
              <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <NuxtLink to="/contact" class="btn btn-light btn-lg px-5 shadow">
                  <i class="bi-telephone-fill me-2"></i>
                  {{ $t('homepage.contact.cta') }}
                </NuxtLink>
                <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5">
                  <i class="bi-info-circle me-2"></i>
                  {{ $t('header.about') }}
                </NuxtLink>
              </div>

              <!-- Additional CTA Info -->
              <div class="row row-cols-2 row-cols-md-3 g-3 mt-4 pt-4 border-top border-white border-opacity-25">
                <div class="col">
                  <div class="text-white">
                    <div class="fw-bold fs-5 mb-1"><i class="bi-telephone-fill me-2"></i>{{ $t('contact.info.phone_title') }}</div>
                    <div class="small text-white text-opacity-75">(+226) 25 41 15 56</div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-white">
                    <div class="fw-bold fs-5 mb-1"><i class="bi-envelope-fill me-2"></i>{{ $t('contact.info.email_title') }}</div>
                    <div class="small text-white text-opacity-75">sawes.bf@gmail.com</div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-white">
                    <div class="fw-bold fs-5 mb-1"><i class="bi-clock-fill me-2"></i>{{ $t('contact.info.schedule_title') }}</div>
                    <div class="small text-white text-opacity-75">7:30 AM – 4:30 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 400px;
}

.hero-pattern {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(13, 110, 253, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(13, 110, 253, 0.05) 0%, transparent 50%);
  background-size: 100% 100%;
}

:global([data-bs-theme="dark"]) .hero-section {
  background: linear-gradient(135deg, #1a1d20 0%, #2d3436 100%);
}

:global([data-bs-theme="dark"]) .hero-pattern {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(13, 110, 253, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(13, 110, 253, 0.08) 0%, transparent 50%);
}

/* Stat Cards */
.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
}

:global([data-bs-theme="dark"]) .stat-card {
  background: var(--bs-dark) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Context Card */
.context-card {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03) 0%, rgba(13, 110, 253, 0.08) 100%);
}

.bg-gradient-subtle {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.03) 0%, rgba(13, 110, 253, 0.08) 100%);
}

:global([data-bs-theme="dark"]) .context-card,
:global([data-bs-theme="dark"]) .bg-gradient-subtle {
  background: linear-gradient(135deg, rgba(13, 110, 253, 0.08) 0%, rgba(13, 110, 253, 0.12) 100%);
}

/* Expertise Card Hover Effects */
.expertise-card {
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: var(--bs-body-bg);
  border: 1px solid transparent;
}

.expertise-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12) !important;
  border-color: rgba(13, 110, 253, 0.1);
}

.card-accent {
  transition: all 0.3s ease;
}

.expertise-card:hover .card-accent {
  height: 5px !important;
}

/* Icon Wrapper Animation */
.expertise-icon-wrapper {
  transition: all 0.3s ease-in-out;
}

.expertise-card:hover .expertise-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
  background: rgba(13, 110, 253, 0.15) !important;
}

/* Dark mode compatibility */
:global([data-bs-theme="dark"]) .expertise-card {
  background: var(--bs-dark) !important;
  border: 1px solid rgba(13, 110, 253, 0.15) !important;
}

:global([data-bs-theme="dark"]) .expertise-card:hover {
  box-shadow: 0 16px 40px rgba(13, 110, 253, 0.2) !important;
  border-color: rgba(13, 110, 253, 0.3) !important;
}

:global([data-bs-theme="dark"]) .expertise-icon-wrapper {
  background: rgba(13, 110, 253, 0.15) !important;
}

:global([data-bs-theme="dark"]) .expertise-card:hover .expertise-icon-wrapper {
  background: rgba(13, 110, 253, 0.25) !important;
}

/* Trust Cards */
.trust-card {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.trust-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
  background: white !important;
  border-color: rgba(13, 110, 253, 0.1);
}

:global([data-bs-theme="dark"]) .trust-card {
  background: var(--bs-dark) !important;
}

:global([data-bs-theme="dark"]) .trust-card:hover {
  background: #2d3436 !important;
  border-color: rgba(13, 110, 253, 0.2);
}

/* Partner Badges */
.partner-badge {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.partner-badge:hover {
  transform: scale(1.05);
  background: white !important;
  border-color: rgba(13, 110, 253, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

:global([data-bs-theme="dark"]) .partner-badge {
  background: var(--bs-dark) !important;
}

:global([data-bs-theme="dark"]) .partner-badge:hover {
  background: #2d3436 !important;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
  position: relative;
}

.cta-pattern {
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(255, 255, 255, 0.03) 60px, rgba(255, 255, 255, 0.03) 120px);
}

:global([data-bs-theme="dark"]) .cta-section {
  background: linear-gradient(135deg, #0a58ca 0%, #084298 100%);
}

/* Enhanced accessibility */
.expertise-card:focus-visible,
.trust-card:focus-visible {
  outline: 2px solid var(--bs-primary);
  outline-offset: 2px;
}

/* Responsive hover effects - disable on touch devices */
@media (hover: none) {
  .expertise-card:hover,
  .trust-card:hover,
  .stat-card:hover,
  .partner-badge:hover {
    transform: none;
  }
  
  .expertise-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
  }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .expertise-card,
  .expertise-icon-wrapper,
  .trust-card,
  .stat-card,
  .partner-badge,
  .card-accent {
    transition: none !important;
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

/* Icon Circle Animation */
.icon-circle {
  transition: all 0.3s ease;
}

.trust-card:hover .icon-circle {
  transform: scale(1.1);
  background: rgba(13, 110, 253, 0.15) !important;
}

/* Better responsive text sizing */
@media (max-width: 768px) {
  .display-3 {
    font-size: 2.5rem;
  }
  
  .display-5 {
    font-size: 2rem;
  }
  
  .display-6 {
    font-size: 1.75rem;
  }
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}
</style>
