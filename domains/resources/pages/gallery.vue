<template>
  <div class="gallery-page">
    <!-- Hero -->
    <section class="bg-success text-white py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-4 fw-bold mb-3">{{ $t('resources.gallery.title') }}</h1>
            <p class="lead">{{ $t('resources.gallery.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-5">
      <div class="container">
        <div v-if="galleryImages.length > 0" class="row g-4">
          <div v-for="image in galleryImages" :key="image.id" class="col-md-6 col-lg-4">
            <div class="card border-0 shadow-sm gallery-item">
              <NuxtImg
                :src="image.thumbnail || image.image"
                :alt="currentLocale === 'fr' ? image.title.fr : image.title.en"
                class="card-img-top"
                loading="lazy"
                fit="cover"
                :width="400"
                :height="300"
              />
              <div class="card-body">
                <h6 class="card-title">{{ currentLocale === 'fr' ? image.title.fr : image.title.en }}</h6>
                <p v-if="image.location" class="card-text small text-muted">
                  <i class="bi bi-geo-alt me-1"></i>{{ image.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center text-muted py-5">
          <i class="bi bi-images" style="font-size: 3rem;"></i>
          <p class="mt-3">{{ $t('resources.gallery.no_images') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { galleryImages } from '../data/gallery'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)
</script>

<style scoped>
.gallery-item {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
