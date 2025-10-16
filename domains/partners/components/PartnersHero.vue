<template>
  <section class="hero-section position-relative overflow-hidden page-header-spacing">
    <div class="hero-pattern position-absolute w-100 h-100"></div>
    <div class="container position-relative py-5 my-md-3 my-lg-4">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb bg-transparent">
          <li class="breadcrumb-item">
            <NuxtLink to="/" class="text-decoration-none text-primary">
              {{ $t('breadcrumbs.home') }}
            </NuxtLink>
          </li>
          <li class="breadcrumb-item active text-body" aria-current="page">
            {{ $t('breadcrumbs.partners') }}
          </li>
        </ol>
      </nav>

      <div class="row align-items-center g-4 py-4">
        <div class="col-lg-8 mx-auto text-center">
          <!-- Badge -->
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 rounded-pill mb-3">
            <i class="bi bi-people-fill me-2"></i>
            {{ $t('partners.hero.badge') }}
          </div>

          <!-- Title -->
          <h1 class="display-3 fw-bold mb-4 text-body-emphasis">
            {{ $t('partners.title') }}
          </h1>

          <!-- Subtitle -->
          <p class="lead text-body-secondary mb-4 fs-5" style="max-width: 750px; margin: 0 auto;">
            {{ $t('partners.subtitle') }}
          </p>

          <!-- Stats Row -->
          <div class="row row-cols-2 row-cols-md-4 g-3 g-md-4 mt-3">
            <div class="col">
              <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                <div class="fs-2 fw-bold text-primary mb-1">{{ stats.partners }}+</div>
                <div class="small text-body-secondary">{{ $t('partners.stats.partners') }}</div>
              </div>
            </div>
            <div class="col">
              <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                <div class="fs-2 fw-bold text-primary mb-1">{{ stats.countries }}+</div>
                <div class="small text-body-secondary">{{ $t('partners.stats.countries') }}</div>
              </div>
            </div>
            <div class="col">
              <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                <div class="fs-2 fw-bold text-primary mb-1">{{ stats.years }}+</div>
                <div class="small text-body-secondary">{{ $t('partners.stats.years') }}</div>
              </div>
            </div>
            <div class="col">
              <div class="stat-card p-3 rounded-3 bg-body-secondary bg-opacity-50 shadow-sm h-100">
                <div class="fs-2 fw-bold text-primary mb-1">{{ stats.projects }}+</div>
                <div class="small text-body-secondary">{{ $t('partners.stats.projects') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = {
  partners: 18,
  countries: 10,
  years: 25,
  projects: 35
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: var(--bs-body-bg);
  min-height: 400px;
  border-bottom: 1px solid var(--bs-border-color);
}

.hero-pattern {
  background-image:
    radial-gradient(circle at 20% 50%, rgba(var(--bs-primary-rgb), 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(var(--bs-primary-rgb), 0.05) 0%, transparent 50%);
  background-size: 100% 100%;
}

/* Stat Cards */
.stat-card {
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1) !important;
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
