<template>
  <!-- Clients Section - Business Consulting Style -->
  <section class="pb-5 pt-2 pt-sm-3 pt-md-4 pt-lg-5 my-xl-3 my-xxl-5">
    <div class="container pb-4 mb-2 mb-lg-3">
      <h2 class="h1 text-center">{{ $t('homepage.clients.title') }}</h2>
      <p class="text-center mb-0">{{ $t('homepage.clients.subtitle') }}</p>
    </div>
    
    <!-- First row of logos -->
    <div class="swiper pb-4" data-swiper-options='{
      "spaceBetween": 24,
      "loop": true,
      "grabCursor": false,
      "centeredSlides": true,
      "autoplay": {
        "delay": 0,
        "disableOnInteraction": false
      },
      "freeMode": true,
      "speed": 10000,
      "freeModeMomentum": false,
      "breakpoints": {
        "0": { "slidesPerView": 2 },
        "400": { "slidesPerView": 3 },
        "600": { "slidesPerView": 4 },
        "800": { "slidesPerView": 5 },
        "1200": { "slidesPerView": 6 },
        "1400": { "slidesPerView": 7 },
        "1600": { "slidesPerView": 8 }
      }
    }'>
      <div class="swiper-wrapper" style="transition-timing-function: linear !important;">
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">UNICEF</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">AFD</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">BAD</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">CEDEAO</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">UEMOA</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">BID</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">CREPA</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">ONEA</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Second row of logos (reverse direction) -->
    <div class="swiper" dir="rtl" data-swiper-options='{
      "spaceBetween": 24,
      "loop": true,
      "grabCursor": false,
      "centeredSlides": true,
      "autoplay": {
        "delay": 0,
        "disableOnInteraction": false
      },
      "freeMode": true,
      "speed": 8500,
      "freeModeMomentum": false,
      "breakpoints": {
        "0": { "slidesPerView": 2 },
        "400": { "slidesPerView": 3 },
        "600": { "slidesPerView": 4 },
        "800": { "slidesPerView": 5 },
        "1200": { "slidesPerView": 6 },
        "1400": { "slidesPerView": 7 },
        "1600": { "slidesPerView": 8 }
      }
    }'>
      <div class="swiper-wrapper" style="transition-timing-function: linear !important;">
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">Gouvernement</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">Communes</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">Taïwan</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">UE</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">PSE</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">SOFRECO</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">PACE</div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="bg-gray rounded-4 p-3">
            <div class="text-center text-primary fw-bold fs-5">CODEX</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
.bg-gray {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .fs-5 {
    font-size: 0.9rem !important;
  }
}
</style>
