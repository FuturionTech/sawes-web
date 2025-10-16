<template>
  <div class="gallery-page">
    <!-- Hero -->
    <section class="position-relative bg-success text-white overflow-hidden" style="margin-top: 88px;">
      <!-- Background pattern overlay -->
      <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <div class="position-absolute top-0 start-0 w-100 h-100" 
             style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px);">
        </div>
      </div>

      <div class="container position-relative py-5">
        <!-- Breadcrumb -->
        <nav aria-label="breadcrumb" class="pt-4 pb-3">
          <ol class="breadcrumb breadcrumb-light mb-0">
            <li class="breadcrumb-item">
              <NuxtLink to="/" class="text-white-50 text-decoration-none">
                <i class="bi bi-house-door me-1"></i>
                {{ $t('breadcrumbs.home') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item">
              <NuxtLink :to="currentLocale === 'fr' ? '/ressources' : '/en/resources'" class="text-white-50 text-decoration-none">
                {{ $t('breadcrumbs.resources') }}
              </NuxtLink>
            </li>
            <li class="breadcrumb-item active text-white" aria-current="page">
              {{ $t('resources.gallery.title') }}
            </li>
          </ol>
        </nav>

        <!-- Hero Content -->
        <div class="row justify-content-center py-5">
          <div class="col-lg-8 text-center">
            <!-- Icon -->
            <div class="mb-4" data-aos="fade-up">
              <div class="icon-box d-inline-block">
                <div class="bg-white bg-opacity-10 rounded-circle p-4">
                  <i class="bi bi-images text-white" style="font-size: 3rem;"></i>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
              {{ $t('resources.gallery.title') }}
            </h1>

            <!-- Subtitle -->
            <p class="lead fs-4 text-white-75" data-aos="fade-up" data-aos-delay="200">
              {{ $t('resources.gallery.subtitle') }}
            </p>

            <!-- Stats -->
            <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
              <div class="badge bg-white bg-opacity-10 text-white px-4 py-3 fs-5">
                <i class="bi bi-image me-2"></i>
                <strong>{{ galleryImages.length }}</strong> {{ $t('resources.gallery.all_photos').toLowerCase() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div v-if="galleryImages.length > 0" class="row g-4">
          <div 
            v-for="(image, index) in galleryImages" 
            :key="image.id" 
            class="col-sm-6 col-md-4 col-lg-3"
            data-aos="zoom-in"
            :data-aos-delay="index * 30"
          >
            <div class="gallery-item card border-0 shadow-sm h-100">
              <div class="position-relative overflow-hidden rounded-top">
                <NuxtImg
                  :src="image.thumbnail || image.image"
                  :alt="currentLocale === 'fr' ? image.title.fr : image.title.en"
                  class="card-img-top gallery-image"
                  loading="lazy"
                  fit="cover"
                  :width="400"
                  :height="300"
                />
                <!-- Overlay on hover -->
                <div class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <i class="bi bi-zoom-in text-white" style="font-size: 2rem;"></i>
                </div>
              </div>
              <div class="card-body">
                <h6 class="card-title mb-2 fw-semibold">
                  {{ currentLocale === 'fr' ? image.title.fr : image.title.en }}
                </h6>
                <p v-if="image.location" class="card-text small text-muted mb-0">
                  <i class="bi bi-geo-alt me-1"></i>{{ image.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-5" data-aos="fade-up">
          <div class="mb-4">
            <div class="icon-box d-inline-block">
              <div class="bg-light rounded-circle p-4">
                <i class="bi bi-images text-muted" style="font-size: 3rem;"></i>
              </div>
            </div>
          </div>
          <h4 class="fw-bold mb-2">{{ $t('resources.gallery.no_images') }}</h4>
          <p class="text-muted">{{ $t('resources.gallery.check_back') || 'Check back soon for photos from our projects and events' }}</p>
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

// SEO Meta tags
useHead({
  title: () => {
    const { t } = useI18n()
    return t('resources.gallery.title') + ' - SAWES'
  },
  meta: [
    {
      name: 'description',
      content: () => {
        const { t } = useI18n()
        return t('resources.gallery.subtitle')
      }
    }
  ]
})
</script>

<style scoped>
/* Hero Section */
.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
}

/* Breadcrumb styling for dark background */
.breadcrumb-light {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-light .breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-light .breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-light .breadcrumb-item a:hover {
  color: white !important;
}

/* Gallery Item */
.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.gallery-image {
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

/* Gallery Overlay */
.gallery-overlay {
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Section Spacing */
.py-lg-6 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

@media (max-width: 991.98px) {
  .py-lg-6 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
