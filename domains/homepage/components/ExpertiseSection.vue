<template>
  <!-- Services / Expertise Section - Corporate Style -->
  <section class="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
    <h2 class="h1 text-center pt-2 pt-sm-3 pt-md-4 pt-xl-5 mt-lg-2 mt-xl-1">{{ $t('homepage.expertise.title') }}</h2>
    <p class="text-center pb-3 mb-3 mb-lg-4">{{ $t('homepage.expertise.subtitle') }}</p>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
      <!-- Service 1: Strategic Planning -->
      <div class="col">
        <NuxtLink class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" to="/services">
          <div class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
               style="background-image: url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop);">
            <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M26.307 23.1116C26.307 28.3136 22.09 32.5307 16.888 32.5307C11.6859 32.5307 7.46891 28.3136 7.46891 23.1116C7.46891 17.9096 11.6859 13.6925 16.888 13.6925C17.1467 13.6925 17.4028 13.7038 17.6562 13.7243V6.24121C17.4016 6.22973 17.1455 6.22363 16.888 6.22363C7.56102 6.22363 0 13.7846 0 23.1116C0 32.4386 7.56102 39.9996 16.888 39.9996C26.2149 39.9996 33.7759 32.4386 33.7759 23.1116C33.7759 22.8541 33.7698 22.598 33.7584 22.3433H26.2753C26.2958 22.5968 26.307 22.8529 26.307 23.1116Z" fill="currentColor"></path>
              </g>
              <g class="text-primary">
                <path d="M40 20C40 8.9543 31.0457 0 20 0V20H40Z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('expertise.planning.title') }}</h3>
            <p class="mb-0">{{ $t('expertise.planning.description') }}</p>
          </div>
          <div class="card-footer border-0 pt-3 mb-3">
            <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 2: Technical Studies -->
      <div class="col">
        <NuxtLink class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" to="/services">
          <div class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
               style="background-image: url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop);">
            <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <path d="M25,25h15v15H25V25z" fill="currentColor"></path>
              </g>
              <g class="text-primary">
                <path d="M10,20c0-5.5,4.5-10,10-10s10,4.5,10,10h10C40,9,31,0,20,0S0,9,0,20s9,20,20,20V30C14.5,30,10,25.5,10,20z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('expertise.studies.title') }}</h3>
            <p class="mb-0">{{ $t('expertise.studies.description') }}</p>
          </div>
          <div class="card-footer border-0 pt-3 mb-3">
            <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 3: Training -->
      <div class="col">
        <NuxtLink class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" to="/services">
          <div class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
               style="background-image: url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2132&auto=format&fit=crop);">
            <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <g class="text-warning">
                <circle cx="20" cy="20" r="12" fill="currentColor"></circle>
              </g>
              <g class="text-primary">
                <path d="M20 0C8.95 0 0 8.95 0 20s8.95 20 20 20 20-8.95 20-20S31.05 0 20 0zm0 30c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('expertise.training.title') }}</h3>
            <p class="mb-0">{{ $t('expertise.training.description') }}</p>
          </div>
          <div class="card-footer border-0 pt-3 mb-3">
            <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 4: Urban Services -->
      <div class="col">
        <NuxtLink class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" to="/services">
          <div class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
               style="background-image: url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop);">
            <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <g class="text-success">
                <rect x="5" y="20" width="30" height="15" fill="currentColor"></rect>
              </g>
              <g class="text-primary">
                <path d="M20 0L0 10v10h40V10L20 0z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('expertise.management.title') }}</h3>
            <p class="mb-0">{{ $t('expertise.management.description') }}</p>
          </div>
          <div class="card-footer border-0 pt-3 mb-3">
            <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Service 5: Water Works -->
      <div class="col">
        <NuxtLink class="card card-hover h-100 border-0 bg-secondary rounded-1 text-decoration-none overflow-hidden" to="/services">
          <div class="card-body d-flex align-items-end position-absolute top-0 start-0 w-100 h-100 opacity-0 bg-size-cover bg-position-center pb-4"
               style="background-image: url(https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2070&auto=format&fit=crop);">
            <div class="btn btn-icon btn-lg btn-outline-light rounded-circle pe-none mb-3">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
          <div class="card-body pb-3">
            <svg class="d-block mt-1 mt-sm-0 mb-4" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <g class="text-info">
                <circle cx="20" cy="28" r="10" fill="currentColor"></circle>
              </g>
              <g class="text-primary">
                <path d="M20 0C15 0 12 5 12 10c0 3 2 6 5 8v2c0 1.7 1.3 3 3 3s3-1.3 3-3v-2c3-2 5-5 5-8 0-5-3-10-8-10z" fill="currentColor"></path>
              </g>
            </svg>
            <h3 class="h4">{{ $t('expertise.works.title') }}</h3>
            <p class="mb-0">{{ $t('expertise.works.description') }}</p>
          </div>
          <div class="card-footer border-0 pt-3 mb-3">
            <div class="btn btn-icon btn-lg btn-outline-primary rounded-circle pe-none">
              <i class="ai-arrow-right"></i>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
/* Card hover effect - image reveals on hover */
.card-hover {
  position: relative;
  transition: transform 0.3s ease;
}

.card-hover .card-body.position-absolute {
  transition: opacity 0.5s ease;
  background-color: rgba(0, 0, 0, 0.6);
}

.card-hover:hover .card-body.position-absolute {
  opacity: 1 !important;
}

.card-hover:hover {
  transform: translateY(-5px);
}

.bg-size-cover {
  background-size: cover;
}

.bg-position-center {
  background-position: center;
}

.rounded-1 {
  border-radius: 0.25rem !important;
}
</style>
