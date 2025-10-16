<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><NuxtLink to="/" class="text-white-50">{{ $t('breadcrumbs.home') }}</NuxtLink></li>
                <li class="breadcrumb-item active text-white" aria-current="page">{{ $t('breadcrumbs.contact') }}</li>
              </ol>
            </nav>

            <!-- Page Title -->
            <h1 class="display-4 fw-bold text-white mb-4">{{ $t('contact.title') }}</h1>
            <p class="lead text-white-50 mb-5">
              {{ $t('contact.subtitle') }}
            </p>

            <!-- Quick Contact Info -->
            <div class="d-flex flex-column flex-sm-row gap-4">
              <div>
                <p class="text-white-50 mb-1">{{ $t('contact.info.phone_title') }}</p>
                <a href="tel:+22625411556" class="text-white text-decoration-none fs-5">{{ $t('contact.info.phone_text') }}</a>
              </div>
              <div>
                <p class="text-white-50 mb-1">{{ $t('contact.info.email_title') }}</p>
                <a href="mailto:sawes.bf@gmail.com" class="text-white text-decoration-none fs-5">{{ $t('contact.info.email_text') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-8">
            <div class="card shadow-sm border-0">
              <div class="card-body p-5">
                <h2 class="h3 mb-4">{{ $t('contact.form.message') }}</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          <!-- Contact Information Sidebar -->
          <div class="col-lg-4">
            <!-- Office Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-building text-primary fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">{{ $t('contact.info.address_title') }}</h3>
                </div>
                <p class="mb-2">{{ $t('contact.info.address_text') }}</p>
                <p class="mb-3">Burkina Faso</p>
                <a href="https://maps.google.com/?q=Ouagadougou+Burkina+Faso" target="_blank" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-map me-1"></i> {{ $t('contact.info.get_directions') }}
                </a>
              </div>
            </div>

            <!-- Working Hours Card -->
            <div class="card shadow-sm border-0 mb-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-success bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-clock text-success fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">{{ $t('contact.info.schedule_title') }}</h3>
                </div>
                <div class="mb-2">
                  <div class="d-flex justify-content-between">
                    <span>{{ $t('contact.info.schedule_text') }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Details Card -->
            <div class="card shadow-sm border-0">
              <div class="card-body p-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="bg-info bg-opacity-10 rounded-3 p-3 me-3">
                    <i class="bi bi-telephone text-info fs-5"></i>
                  </div>
                  <h3 class="h5 mb-0">Contact</h3>
                </div>
                <p class="mb-2">
                  <small class="text-muted d-block">{{ $t('contact.info.phone_title') }}</small>
                  <a href="tel:+22625411556" class="text-decoration-none">{{ $t('contact.info.phone_text') }}</a>
                </p>
                <p class="mb-2">
                  <small class="text-muted d-block">{{ $t('contact.info.email_title') }}</small>
                  <a href="mailto:sawes.bf@gmail.com" class="text-decoration-none">{{ $t('contact.info.email_text') }}</a>
                </p>
                <p class="mb-0">
                  <small class="text-muted d-block">{{ $t('contact.info.website_title') }}</small>
                  <span>{{ $t('contact.info.website_text') }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="position-relative">
      <div class="ratio ratio-21x9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125226.28956699287!2d-1.5733!3d12.3714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebe69557e468d%3A0x5ae743b1e9280199!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useHead, useI18n } from '#imports'
import ContactForm from '~/domains/contactus/components/ContactForm'

// i18n
const { t } = useI18n()

// SEO Meta tags
useHead({
  title: () => t('meta.contact.title'),
  meta: [
    {
      name: 'description',
      content: () => t('meta.contact.description')
    },
    {
      name: 'keywords',
      content: () => t('meta.contact.keywords')
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
/* Clean Modern Design */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
}

/* Hero Section */
.bg-dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
}

/* Typography */
.display-4 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* Icon Containers */
.bg-primary.bg-opacity-10 {
  background-color: rgba(0, 0, 255, 0.1) !important;
}

.bg-success.bg-opacity-10 {
  background-color: rgba(16, 185, 129, 0.1) !important;
}

.bg-info.bg-opacity-10 {
  background-color: rgba(14, 165, 233, 0.1) !important;
}

/* Breadcrumb styling for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 1.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

/* Button Enhancement */
.btn-outline-primary {
  border-width: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 255, 0.2);
}

/* Links in cards */
.card a {
  color: inherit;
  transition: color 0.3s ease;
}

.card a:hover {
  color: var(--bs-primary);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .display-4 {
    font-size: 2.5rem;
  }

  .card-body {
    padding: 2rem !important;
  }
}

@media (max-width: 575.98px) {
  .display-4 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1.1rem;
  }

  .card-body.p-5 {
    padding: 2rem !important;
  }
}

/* Map section */
.ratio {
  border: 0;
  overflow: hidden;
}

/* Dark mode support */
:global(.dark-mode) .bg-light {
  background-color: #0f0f0f !important;
}

:global(.dark-mode) .card {
  background-color: #1a1a1a !important;
  color: #e5e7eb !important;
}

:global(.dark-mode) .text-muted {
  color: #9ca3af !important;
}

:global(.dark-mode) .shadow-sm {
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.05) !important;
}
</style>