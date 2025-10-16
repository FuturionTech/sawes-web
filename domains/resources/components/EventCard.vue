<template>
  <div class="card h-100 border-0 shadow-sm">
    <!-- Image (if available) -->
    <div v-if="event.image" class="position-relative overflow-hidden rounded-top">
      <NuxtImg
        :src="event.image"
        :alt="currentLocale === 'fr' ? event.title.fr : event.title.en"
        class="card-img-top"
        loading="lazy"
        fit="cover"
        :width="400"
        :height="200"
      />

      <!-- Status Badge -->
      <div class="position-absolute top-0 start-0 m-3">
        <span class="badge" :class="getStatusBadgeClass(event.status)">
          {{ $t(`resources.events.status.${event.status}`) }}
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="card-body d-flex flex-column">
      <!-- Type Badge -->
      <div class="mb-3">
        <span class="badge bg-primary">
          {{ $t(`resources.events.types.${event.type}`) }}
        </span>
      </div>

      <!-- Title -->
      <h5 class="card-title mb-3">
        {{ currentLocale === 'fr' ? event.title.fr : event.title.en }}
      </h5>

      <!-- Description -->
      <p class="card-text text-muted small mb-3 flex-grow-1">
        {{ truncateText(currentLocale === 'fr' ? event.description.fr : event.description.en, 150) }}
      </p>

      <!-- Event Details -->
      <div class="event-details mb-3 small">
        <!-- Date -->
        <div class="d-flex align-items-start mb-2">
          <i class="bi bi-calendar-event text-primary me-2 mt-1"></i>
          <div>
            <strong>{{ $t('resources.events.date') }}:</strong><br>
            {{ formatEventDate(event.startDate, event.endDate) }}
          </div>
        </div>

        <!-- Location -->
        <div class="d-flex align-items-start mb-2">
          <i class="bi bi-geo-alt text-primary me-2 mt-1"></i>
          <div>
            <strong>{{ $t('resources.events.location') }}:</strong><br>
            {{ currentLocale === 'fr' ? event.location.fr : event.location.en }}
          </div>
        </div>

        <!-- Organizer -->
        <div v-if="event.organizer" class="d-flex align-items-start mb-2">
          <i class="bi bi-building text-primary me-2 mt-1"></i>
          <div>
            <strong>{{ $t('resources.events.organizer') }}:</strong><br>
            {{ event.organizer }}
          </div>
        </div>

        <!-- Participants -->
        <div v-if="event.participants" class="d-flex align-items-start">
          <i class="bi bi-people text-primary me-2 mt-1"></i>
          <div>
            <strong>{{ $t('resources.events.participants') }}:</strong> {{ event.participants }}
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div class="mt-auto">
        <button
          v-if="event.status === 'upcoming' && event.registrationUrl"
          class="btn btn-primary btn-sm w-100 mb-2"
          @click="registerEvent"
        >
          <i class="bi bi-calendar-check me-1"></i>
          {{ $t('resources.events.register') }}
        </button>
        <button
          v-else
          class="btn btn-outline-primary btn-sm w-100"
        >
          {{ $t('resources.events.learn_more') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const props = defineProps({
  event: {
    type: Object,
    required: true
  }
})

const formatEventDate = (startDate, endDate) => {
  const start = new Date(startDate)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const formattedStart = start.toLocaleDateString(
    currentLocale.value === 'fr' ? 'fr-FR' : 'en-US',
    options
  )

  if (endDate && endDate !== startDate) {
    const end = new Date(endDate)
    const formattedEnd = end.toLocaleDateString(
      currentLocale.value === 'fr' ? 'fr-FR' : 'en-US',
      options
    )
    return `${formattedStart} - ${formattedEnd}`
  }

  return formattedStart
}

const getStatusBadgeClass = (status) => {
  const classes = {
    upcoming: 'bg-success',
    ongoing: 'bg-warning text-dark',
    completed: 'bg-secondary'
  }
  return classes[status] || 'bg-secondary'
}

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const registerEvent = () => {
  if (props.event.registrationUrl) {
    if (props.event.registrationUrl.startsWith('mailto:')) {
      window.location.href = props.event.registrationUrl
    } else {
      window.open(props.event.registrationUrl, '_blank')
    }
  }
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}

.event-details {
  border-left: 3px solid #0d6efd;
  padding-left: 1rem;
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.25rem;
}
</style>
