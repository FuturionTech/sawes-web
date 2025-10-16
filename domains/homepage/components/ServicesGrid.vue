<template>
  <!-- Services Grid - Business Consulting Style -->
  <section class="container py-5">
    <h2 class="h1 text-center">{{ $t('homepage.services.title') }}</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">{{ $t('homepage.services.subtitle') }}</p>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

      <!-- Service 1: Strategic Planning -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z" fill="currentColor"></path>
              </g>
              <g class="text-primary">
                <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('expertise.planning.title') }}</h3>
            <p class="card-text">{{ $t('expertise.planning.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 2: Technical Studies -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
              </g>
              <g class="text-primary">
                <path d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('expertise.studies.title') }}</h3>
            <p class="card-text">{{ $t('expertise.studies.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 3: Training & Capacity Building -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-warning">
                <circle cx="20" cy="20" r="12" fill="currentColor"></circle>
              </g>
              <g class="text-primary">
                <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('expertise.training.title') }}</h3>
            <p class="card-text">{{ $t('expertise.training.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 4: Urban Services Management -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-success">
                <rect x="5" y="20" width="30" height="15" fill="currentColor"></rect>
              </g>
              <g class="text-primary">
                <path d="M20 0L0 10v10h40V10L20 0z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('expertise.management.title') }}</h3>
            <p class="card-text">{{ $t('expertise.management.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 5: WASH Programs -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <circle cx="20" cy="28" r="10" fill="currentColor"></circle>
              </g>
              <g class="text-primary">
                <path d="M20 0C15 0 12 5 12 10c0 3 2 6 5 8v2c0 1.7 1.3 3 3 3s3-1.3 3-3v-2c3-2 5-5 5-8 0-5-3-10-8-10z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('expertise.works.title') }}</h3>
            <p class="card-text">{{ $t('expertise.works.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 6: Environmental Assessment -->
      <div class="col">
        <NuxtLink :to="servicesPath" class="card card-hover-primary border-0 h-100 text-decoration-none">
          <div class="card-body pb-0">
            <svg class="d-block text-warning mb-4" width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g class="text-success">
                <path d="M20 5L10 15h6v12h8V15h6L20 5z" fill="currentColor"></path>
              </g>
              <g class="text-primary">
                <path d="M35 30H5c-2.8 0-5 2.2-5 5v5h40v-5c0-2.8-2.2-5-5-5z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4 card-title mt-0">{{ $t('homepage.services.environmental.title') }}</h3>
            <p class="card-text">{{ $t('homepage.services.environmental.description') }}</p>
          </div>
          <div class="card-footer border-0 py-3 my-3 mb-sm-4">
            <div class="btn btn-lg btn-icon btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()

// Computed path for services page
const servicesPath = computed(() => locale.value === 'en' ? '/en/services' : '/services')
</script>

<style scoped>
/* Simple hover effect for cards */
.card-hover-primary {
  transition: all 0.3s ease;
}

.card-hover-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 0.5rem 1.125rem -0.5rem rgba(31, 27, 45, 0.12);
}

/* Ensure card footer button doesn't animate */
.card-hover-primary .btn.pe-none {
  pointer-events: none;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .h4 {
    font-size: 1.25rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}
</style>
