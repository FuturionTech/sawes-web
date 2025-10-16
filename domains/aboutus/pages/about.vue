<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-gradient position-relative py-5 overflow-hidden" style="margin-top: 80px;">
      <div class="container position-relative z-2 py-5">
        <div class="row align-items-center">
          <div class="col-lg-10 mx-auto text-center">
            <!-- Company Badge -->
            <div class="badge bg-white bg-opacity-20 text-white px-4 py-2 rounded-pill mb-3 fw-semibold">
              <i class="bi bi-droplet me-2"></i>{{ $t('about.company.location') }}  • {{ $t('about.company.founded') }}
            </div>

            <h1 class="display-4 text-white fw-bold mb-3">
              {{ $t('about.title') }}
            </h1>

            <p class="h5 text-white opacity-75 fw-medium mb-4">
              {{ $t('about.company.slogan') }}
            </p>

            <p class="fs-5 text-white opacity-75 mb-4 mx-auto" style="max-width: 800px;">
              {{ $t('about.presentation.description') }}
            </p>

            <!-- Mission Statement -->
            <div class="bg-white bg-opacity-10 rounded-3 p-4 mb-4 mx-auto" style="max-width: 900px;">
              <h3 class="h5 text-white fw-bold mb-2">
                <i class="bi bi-bullseye text-white me-2"></i>{{ $t('about.mission.title') }}
              </h3>
              <p class="text-white opacity-75 mb-0">
                {{ $t('about.mission.description') }}
              </p>
            </div>

            <!-- CTAs -->
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/services" class="btn btn-white px-4 py-2 shadow">
                <i class="bi bi-grid me-2"></i>
                {{ $t('header.expertise') }}
              </NuxtLink>
              <NuxtLink to="/contact" class="btn btn-outline-light px-4 py-2">
                <i class="bi bi-envelope me-2"></i>
                {{ $t('header.contact_us') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="row g-5">
          <!-- Mission Card -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-3 mb-4">
                  <i class="bi bi-bullseye fs-1 text-primary"></i>
                </div>
                <h2 class="h3 fw-bold mb-3">{{ $t('about.mission.title') }}</h2>
                <p class="text-muted mb-0 lead">{{ $t('about.mission.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Vision Card -->
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-5">
                <div class="d-inline-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-circle p-3 mb-4">
                  <i class="bi bi-eye fs-1 text-info"></i>
                </div>
                <h2 class="h3 fw-bold mb-3">{{ $t('about.vision.title') }}</h2>
                <p class="text-muted mb-0 lead">{{ $t('about.vision.description') }}</p>
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
          <h2 class="display-5 fw-bold mb-3">{{ $t('about.values.title') }}</h2>
          <p class="lead text-muted">{{ $t('homepage.banner.feature1') }}</p>
        </div>
        <div class="row g-4">
          <!-- Value 1: Excellence (A1) -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm value-card">
              <div class="card-body p-5 text-center">
                <div class="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle p-4 mb-4">
                  <i class="bi bi-award fs-1 text-success"></i>
                </div>
                <div class="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3">
                  {{ $t('about.values.value1.code') }}
                </div>
                <h3 class="h4 fw-bold mb-3">{{ $t('about.values.value1.title') }}</h3>
                <p class="text-muted">{{ $t('about.values.value1.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Value 2: Innovation (A2) -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm value-card">
              <div class="card-body p-5 text-center">
                <div class="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle p-4 mb-4">
                  <i class="bi bi-lightbulb fs-1 text-warning"></i>
                </div>
                <div class="badge bg-warning bg-opacity-10 text-warning px-3 py-2 rounded-pill mb-3">
                  {{ $t('about.values.value2.code') }}
                </div>
                <h3 class="h4 fw-bold mb-3">{{ $t('about.values.value2.title') }}</h3>
                <p class="text-muted">{{ $t('about.values.value2.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Value 3: Reputation (A3) -->
          <div class="col-md-4">
            <div class="card h-100 border-0 shadow-sm value-card">
              <div class="card-body p-5 text-center">
                <div class="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-4 mb-4">
                  <i class="bi bi-star fs-1 text-primary"></i>
                </div>
                <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3">
                  {{ $t('about.values.value3.code') }}
                </div>
                <h3 class="h4 fw-bold mb-3">{{ $t('about.values.value3.title') }}</h3>
                <p class="text-muted">{{ $t('about.values.value3.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team & Organization Section -->
    <section class="py-5 bg-light">
      <div class="container py-5">
        <div class="text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">{{ $t('about.team.title') }}</h2>
        </div>
        <div class="row g-4">
          <!-- Organization Structure -->
          <div class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-4 text-primary">
                  <i class="bi bi-diagram-3 me-2"></i>Structure Organisationnelle
                </h3>
                <ul class="list-unstyled">
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.direction') }}</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.administrative') }}</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.commercial') }}</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.operations_south') }}</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.operations_center') }}</span>
                  </li>
                  <li class="mb-3 d-flex align-items-start">
                    <i class="bi bi-check-circle-fill text-success me-3 mt-1"></i>
                    <span>{{ $t('about.team.data') }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Impact Metrics -->
          <div class="col-lg-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h3 class="h5 fw-bold mb-4 text-primary">
                  <i class="bi bi-graph-up me-2"></i>Notre Impact
                </h3>
                <div class="row g-3">
                  <div class="col-6">
                    <div class="p-3 bg-primary bg-opacity-10 rounded-3 text-center">
                      <div class="h3 fw-bold text-primary mb-1">25+</div>
                      <small class="text-muted">Années d'Expérience</small>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 bg-info bg-opacity-10 rounded-3 text-center">
                      <div class="h3 fw-bold text-info mb-1">30+</div>
                      <small class="text-muted">Projets Réalisés</small>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 bg-success bg-opacity-10 rounded-3 text-center">
                      <div class="h3 fw-bold text-success mb-1">10+</div>
                      <small class="text-muted">Partenaires Internationaux</small>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="p-3 bg-warning bg-opacity-10 rounded-3 text-center">
                      <div class="h3 fw-bold text-warning mb-1">7+</div>
                      <small class="text-muted">Régions Couvertes</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Information Section -->
    <section class="py-5">
      <div class="container py-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h2 class="display-6 fw-bold mb-4">{{ $t('about.company.title') }}</h2>
            <div class="card border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-4">
                  <h3 class="h6 fw-bold text-muted mb-2">
                    <i class="bi bi-building me-2 text-primary"></i>{{ $t('about.company.name') }}
                  </h3>
                  <p class="mb-0">{{ $t('about.company.full_name') }}</p>
                </div>
                <div class="mb-4">
                  <h3 class="h6 fw-bold text-muted mb-2">
                    <i class="bi bi-geo-alt me-2 text-primary"></i>{{ $t('contact.info.address_title') }}
                  </h3>
                  <p class="mb-0">{{ $t('contact.info.address_text') }}</p>
                </div>
                <div class="mb-4">
                  <h3 class="h6 fw-bold text-muted mb-2">
                    <i class="bi bi-telephone me-2 text-primary"></i>{{ $t('contact.info.phone_title') }}
                  </h3>
                  <p class="mb-0">
                    <a href="tel:+22625411556" class="text-decoration-none">{{ $t('contact.info.phone_text') }}</a>
                  </p>
                </div>
                <div class="mb-4">
                  <h3 class="h6 fw-bold text-muted mb-2">
                    <i class="bi bi-envelope me-2 text-primary"></i>{{ $t('contact.info.email_title') }}
                  </h3>
                  <p class="mb-0">
                    <a href="mailto:sawes.bf@gmail.com" class="text-decoration-none">{{ $t('contact.info.email_text') }}</a>
                  </p>
                </div>
                <div>
                  <h3 class="h6 fw-bold text-muted mb-2">
                    <i class="bi bi-clock me-2 text-primary"></i>{{ $t('contact.info.schedule_title') }}
                  </h3>
                  <p class="mb-0">{{ $t('contact.info.schedule_text') }}</p>
                  <small class="text-muted">Lundi – Vendredi / Monday – Friday</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <!-- Map or Image -->
            <div class="ratio ratio-16x9 rounded-3 shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125226.28956699287!2d-1.5733!3d12.3714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe2ebe6f05ac4373%3A0x92a644d39b4d97a1!2sOuagadougou%2C%20Burkina%20Faso!5e0!3m2!1sen!2sus!4v1234567890"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="cta-gradient py-5">
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="h2 fw-bold text-white mb-3">
              {{ $t('homepage.contact.ready') }}
            </h2>
            <p class="fs-6 text-white opacity-75 mb-4">
              {{ $t('homepage.contact.message') }}
            </p>
            <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              <NuxtLink to="/contact" class="btn btn-white btn-lg px-5 py-3 shadow">
                {{ $t('homepage.contact.contact_us') }}
              </NuxtLink>
              <a href="tel:+22625411556" class="btn btn-outline-light btn-lg px-5 py-3">
                <i class="bi bi-telephone me-2"></i>
                {{ $t('contact.info.phone_text') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n();

// SEO
useHead({
  title: t('meta.about.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.about.description')
    },
    {
      name: 'keywords',
      content: t('meta.about.keywords')
    }
  ]
})
</script>

<style scoped>
/* Hero Gradient */
.hero-gradient {
  background: linear-gradient(135deg, #0000FF 0%, #1e40af 100%);
}

/* CTA Gradient */
.cta-gradient {
  background: linear-gradient(135deg, #1e40af, #0000FF);
}

/* Value Card Hover */
.value-card {
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 255, 0.15) !important;
}

/* Button Styles */
.btn-white {
  background: white;
  color: #0000FF;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
  background: white;
  color: #1e40af;
}

.btn-outline-light:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem;
  }

  .display-5 {
    font-size: 1.75rem;
  }
}
</style>
