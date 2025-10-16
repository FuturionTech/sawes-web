<template>
  <!-- Testimonials Section - Business Consulting Style -->
  <section class="container mt-n3 mt-sm-n2 pb-5 mb-md-2 mb-lg-3 mb-xl-4 mb-xxl-5">
    <h2 class="h1 text-center pb-3 pb-lg-4">{{ $t('homepage.testimonials.title') }}</h2>

    <!-- Swiper slider -->
    <div class="swiper pb-1 pb-md-2 pb-lg-3 pb-xl-4" data-swiper-options='{
      "spaceBetween": 24,
      "loop": true,
      "autoHeight": true,
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
      },
      "breakpoints": {
        "576": { "slidesPerView": 2 },
        "992": { "slidesPerView": 3 }
      }
    }'>
      <div class="swiper-wrapper">

        <!-- Testimonial 1 -->
        <div class="swiper-slide">
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">UN</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial1.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial1.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial1.text') }}</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-info d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">AF</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial2.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial2.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial2.text') }}</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="swiper-slide">
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-success d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">BA</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial3.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial3.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial3.text') }}</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-warning d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">CE</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial4.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial4.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial4.text') }}</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="swiper-slide">
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">UE</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial5.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial5.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial5.text') }}</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">ON</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial6.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial6.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial6.text') }}</p>
            </div>
          </div>
        </div>

        <!-- Testimonial 4 -->
        <div class="swiper-slide">
          <div class="card border-0 mb-4">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-dark d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">GO</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial7.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial7.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial7.text') }}</p>
            </div>
          </div>
          <div class="card border-0">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold" 
                     style="width: 60px; height: 60px;">CO</div>
                <div class="ps-3">
                  <div class="h6 mb-1">{{ $t('homepage.testimonials.testimonial8.name') }}</div>
                  <div class="fs-sm text-body-secondary">{{ $t('homepage.testimonials.testimonial8.position') }}</div>
                </div>
              </div>
              <p class="card-text">{{ $t('homepage.testimonials.testimonial8.text') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination (bullets) -->
      <div class="swiper-pagination position-relative bottom-0 mt-2 mt-md-3 mt-lg-4 pt-4"></div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 767.98px) {
  .h6 {
    font-size: 1rem;
  }
  
  .fs-sm {
    font-size: 0.8rem;
  }
}
</style>