<template>
  <!-- Industries Section - Business Consulting Style -->
  <section class="container pb-5 pt-3 pt-sm-4 pt-lg-5 my-xl-3 my-xxl-5">
    <h2 class="h1 text-center">{{ $t('homepage.industries.title') }}</h2>
    <p class="text-center pb-4 mb-2 mb-lg-3">{{ $t('homepage.industries.subtitle') }}</p>

    <!-- Swiper slider -->
    <div class="swiper" data-swiper-options='
      {
        "spaceBetween": 24,
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        },
        "breakpoints": {
          "576": { "slidesPerView": 2 },
          "992": { "slidesPerView": 3 }
        }
      }
    '>
      <div class="swiper-wrapper">

        <!-- Water Management -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 h-100">
            <div class="card-img-top overflow-hidden">
              <img class="rounded-5 rounded-end-0" 
                   src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=400&auto=format&fit=crop" 
                   alt="Water Management">
            </div>
            <div class="card-body">
              <h3 class="h4 card-title">{{ $t('homepage.industries.water.title') }}</h3>
              <ul class="ps-4 mb-n2">
                <li class="mb-2">{{ $t('homepage.industries.water.item1') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.water.item2') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.water.item3') }}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Sanitation & Hygiene -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 h-100">
            <div class="card-img-top overflow-hidden">
              <img class="rounded-5 rounded-end-0" 
                   src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop" 
                   alt="Sanitation & Hygiene">
            </div>
            <div class="card-body">
              <h3 class="h4 card-title">{{ $t('homepage.industries.sanitation.title') }}</h3>
              <ul class="ps-4 mb-n2">
                <li class="mb-2">{{ $t('homepage.industries.sanitation.item1') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.sanitation.item2') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.sanitation.item3') }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Environmental Solutions -->
        <div class="swiper-slide h-auto">
          <div class="card border-0 h-100">
            <div class="card-img-top overflow-hidden">
              <img class="rounded-5 rounded-end-0" 
                   src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400&auto=format&fit=crop" 
                   alt="Environmental Solutions">
            </div>
            <div class="card-body">
              <h3 class="h4 card-title">{{ $t('homepage.industries.environment.title') }}</h3>
              <ul class="ps-4 mb-n2">
                <li class="mb-2">{{ $t('homepage.industries.environment.item1') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.environment.item2') }}</li>
                <li class="mb-2">{{ $t('homepage.industries.environment.item3') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 pt-4 d-lg-none"></div>
    </div>

    <!-- Read more button -->
    <div class="text-center pt-4 mt-2 mt-lg-0 pt-lg-5">
      <NuxtLink class="btn btn-primary" :to="servicesPath">{{ $t('homepage.industries.see_all') }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { t, locale } = useI18n()

// Computed path for services page
const servicesPath = computed(() => locale.value === 'en' ? '/en/services' : '/services')
</script>

<style scoped>
/* Swiper customizations */
.swiper-slide {
  height: auto;
}

.card-img-top img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .h4 {
    font-size: 1.25rem;
  }
}
</style>