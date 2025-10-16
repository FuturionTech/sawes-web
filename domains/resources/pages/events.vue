<template>
  <div class="events-page">
    <!-- Hero -->
    <section class="bg-warning py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h1 class="display-4 fw-bold mb-3">{{ $t('resources.events.title') }}</h1>
            <p class="lead">{{ $t('resources.events.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-5">
      <div class="container">
        <h2 class="fw-bold mb-4">{{ $t('resources.events.upcoming') }}</h2>
        <div v-if="upcoming.length > 0" class="row g-4">
          <div v-for="event in upcoming" :key="event.id" class="col-md-6 col-lg-4">
            <EventCard :event="event" />
          </div>
        </div>
        <div v-else class="text-center text-muted py-5">
          <i class="bi bi-calendar-x" style="font-size: 3rem;"></i>
          <p class="mt-3">{{ $t('resources.events.no_events') }}</p>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section v-if="past.length > 0" class="py-5 bg-light">
      <div class="container">
        <h2 class="fw-bold mb-4">{{ $t('resources.events.past') }}</h2>
        <div class="row g-4">
          <div v-for="event in past" :key="event.id" class="col-md-6 col-lg-4">
            <EventCard :event="event" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getUpcomingEvents, getPastEvents } from '../data/events'

const upcoming = computed(() => getUpcomingEvents())
const past = computed(() => getPastEvents())
</script>
