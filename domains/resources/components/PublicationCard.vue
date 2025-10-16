<template>
  <div class="card h-100 border-0 shadow-sm card-hover">
    <!-- Card Body -->
    <div class="card-body d-flex flex-column">
      <!-- Type Badge -->
      <div class="mb-3">
        <span class="badge" :class="getTypeBadgeClass(publication.type)">
          {{ $t(`resources.publications.types.${publication.type}`) }}
        </span>
        <span v-if="publication.language" class="badge bg-light text-dark ms-2">
          <i class="bi bi-translate me-1"></i>
          {{ publication.language.toUpperCase() }}
        </span>
      </div>

      <!-- Icon -->
      <div class="mb-3">
        <i class="bi bi-file-earmark-pdf text-danger" style="font-size: 3rem;"></i>
      </div>

      <!-- Title -->
      <h5 class="card-title mb-3">
        {{ currentLocale === 'fr' ? publication.title.fr : publication.title.en }}
      </h5>

      <!-- Description -->
      <p class="card-text text-muted small mb-3 flex-grow-1">
        {{ currentLocale === 'fr' ? publication.description.fr : publication.description.en }}
      </p>

      <!-- Meta Information -->
      <div class="mb-3 small text-muted">
        <div class="d-flex align-items-center mb-2">
          <i class="bi bi-calendar3 me-2"></i>
          <span>{{ formatDate(publication.date) }}</span>
        </div>
        <div v-if="publication.fileSize" class="d-flex align-items-center mb-2">
          <i class="bi bi-file-earmark me-2"></i>
          <span>{{ publication.fileSize }}</span>
        </div>
        <div v-if="publication.downloadCount" class="d-flex align-items-center">
          <i class="bi bi-download me-2"></i>
          <span>{{ publication.downloadCount }} {{ $t('resources.publications.downloads') }}</span>
        </div>
      </div>

      <!-- Partner -->
      <div v-if="publication.partner" class="small text-muted mb-3">
        <i class="bi bi-building me-1"></i>
        {{ publication.partner }}
      </div>

      <!-- Actions -->
      <div class="d-flex gap-2 mt-auto">
        <button
          v-if="publication.file"
          class="btn btn-primary btn-sm flex-grow-1"
          @click="downloadPublication"
        >
          <i class="bi bi-download me-1"></i>
          {{ $t('resources.publications.download') }}
        </button>
        <button
          v-if="publication.file"
          class="btn btn-outline-secondary btn-sm"
          @click="previewPublication"
        >
          <i class="bi bi-eye"></i>
        </button>
        <a
          v-if="publication.externalLink"
          :href="publication.externalLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-outline-primary btn-sm flex-grow-1"
        >
          <i class="bi bi-box-arrow-up-right me-1"></i>
          {{ $t('resources.publications.view_details') }}
        </a>
      </div>
    </div>

    <!-- Categories Footer -->
    <div v-if="publication.category.length > 0" class="card-footer bg-light border-0">
      <div class="d-flex flex-wrap gap-1">
        <span
          v-for="cat in publication.category"
          :key="cat"
          class="badge bg-secondary"
        >
          {{ $t(`resources.publications.categories.${cat}`) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long' }
  return date.toLocaleDateString(currentLocale.value === 'fr' ? 'fr-FR' : 'en-US', options)
}

const getTypeBadgeClass = (type) => {
  const classes = {
    'technical-report': 'bg-info',
    'case-study': 'bg-success',
    'policy-brief': 'bg-warning text-dark',
    'training-material': 'bg-primary',
    'annual-report': 'bg-danger',
    'guideline': 'bg-secondary'
  }
  return classes[type] || 'bg-secondary'
}

const downloadPublication = () => {
  // In a real implementation, this would trigger the download
  if (props.publication.file) {
    window.open(props.publication.file, '_blank')
  }
}

const previewPublication = () => {
  // In a real implementation, this would open a preview modal
  console.log('Preview publication:', props.publication.id)
}
</script>

<style scoped>
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.15) !important;
}
</style>
