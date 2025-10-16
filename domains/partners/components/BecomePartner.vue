<template>
  <section class="py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="card border-0 shadow-lg overflow-hidden rounded-4" data-aos="zoom-in">
            <div class="row g-0">
              <!-- Image Column -->
              <div class="col-lg-5 position-relative">
                <div class="h-100 bg-gradient position-relative d-flex align-items-center justify-content-center" style="background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%); min-height: 400px;">
                  <!-- Pattern Overlay -->
                  <div class="position-absolute top-0 start-0 w-100 h-100" style="opacity: 0.1;">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="partner-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="2" fill="white"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#partner-grid)" />
                    </svg>
                  </div>

                  <!-- Icons -->
                  <div class="position-absolute top-50 start-50 translate-middle text-center w-100 px-4">
                    <div class="d-flex justify-content-center gap-4 mb-4">
                      <div class="icon-circle">
                        <i class="bi bi-handshake fs-1"></i>
                      </div>
                      <div class="icon-circle">
                        <i class="bi bi-globe2 fs-1"></i>
                      </div>
                      <div class="icon-circle">
                        <i class="bi bi-award fs-1"></i>
                      </div>
                    </div>
                    <h3 class="text-white fw-bold mb-0">{{ $t('partners.cta.visual_title') }}</h3>
                  </div>
                </div>
              </div>

              <!-- Content Column -->
              <div class="col-lg-7">
                <div class="p-5">
                  <!-- Badge -->
                  <div class="mb-3">
                    <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                      <i class="bi bi-star me-1"></i>
                      {{ $t('partners.cta.badge') }}
                    </span>
                  </div>

                  <!-- Title -->
                  <h2 class="display-6 fw-bold mb-3">
                    {{ $t('partners.cta.title') }}
                  </h2>

                  <!-- Description -->
                  <p class="text-muted mb-4">
                    {{ $t('partners.cta.description') }}
                  </p>

                  <!-- Benefits -->
                  <div class="mb-4">
                    <h6 class="fw-bold mb-3">{{ $t('partners.cta.benefits.title') }}</h6>
                    <ul class="list-unstyled">
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ $t('partners.cta.benefits.benefit1') }}
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ $t('partners.cta.benefits.benefit2') }}
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ $t('partners.cta.benefits.benefit3') }}
                      </li>
                      <li class="mb-2">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        {{ $t('partners.cta.benefits.benefit4') }}
                      </li>
                    </ul>
                  </div>

                  <!-- CTA Buttons -->
                  <div class="d-flex flex-wrap gap-3">
                    <NuxtLink
                      :to="contactLink"
                      class="btn btn-primary btn-lg px-4"
                    >
                      <i class="bi bi-envelope me-2"></i>
                      {{ $t('partners.cta.button_primary') }}
                      <i class="bi bi-arrow-right ms-2"></i>
                    </NuxtLink>
                    <button
                      class="btn btn-outline-primary btn-lg px-4"
                      @click="downloadBrochure"
                    >
                      <i class="bi bi-download me-2"></i>
                      {{ $t('partners.cta.button_secondary') }}
                    </button>
                  </div>

                  <!-- Contact Info -->
                  <div class="mt-4 pt-4 border-top">
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <div class="d-flex align-items-center">
                          <div class="icon-sm bg-light rounded-circle p-2 me-3">
                            <i class="bi bi-envelope text-primary"></i>
                          </div>
                          <div>
                            <div class="small text-muted">{{ $t('partners.cta.contact.email_label') }}</div>
                            <div class="fw-bold">sawes.bf@gmail.com</div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="d-flex align-items-center">
                          <div class="icon-sm bg-light rounded-circle p-2 me-3">
                            <i class="bi bi-telephone text-primary"></i>
                          </div>
                          <div>
                            <div class="small text-muted">{{ $t('partners.cta.contact.phone_label') }}</div>
                            <div class="fw-bold">+226 25 41 15 56</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

const contactLink = computed(() => {
  return locale.value === 'fr' ? '/contact' : '/en/contact'
})

const downloadBrochure = () => {
  // Placeholder for brochure download functionality
  console.log('Download partnership brochure')
  // In production, this would trigger an actual PDF download
  alert(t('partners.cta.download_message'))
}
</script>

<style scoped>
.icon-circle {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-circle:hover {
  transform: scale(1.15) rotate(5deg);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.icon-sm {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,.15);
}

.btn-primary:hover {
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.4);
}

.btn-outline-primary:hover {
  box-shadow: 0 8px 20px rgba(13, 110, 253, 0.2);
}

/* Card Animation */
.card {
  transition: all 0.3s ease;
}

/* Dark mode support */
:global([data-bs-theme="dark"]) section {
  background: var(--bs-dark) !important;
}

:global([data-bs-theme="dark"]) .card {
  background: #2d3436 !important;
}

:global([data-bs-theme="dark"]) .bg-light {
  background: rgba(13, 110, 253, 0.1) !important;
}

/* List hover effect */
ul li {
  transition: transform 0.2s ease;
}

ul li:hover {
  transform: translateX(4px);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .icon-circle,
  .btn,
  .card,
  ul li {
    transition: none !important;
  }

  .icon-circle:hover,
  .btn:hover,
  ul li:hover {
    transform: none !important;
  }
}
</style>
