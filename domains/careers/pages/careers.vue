<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-dark position-relative py-4 page-header-spacing">
      <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, .03);"></div>
      <div class="container position-relative z-2 py-4">
        <div class="row">
          <div class="col-lg-10 col-xl-9">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="pt-2 pb-2 breadcrumb">
                <li class="breadcrumb-item">
                  <NuxtLink to="/" class="text-white-50">Home</NuxtLink>
                </li>
                <li class="breadcrumb-item">
                  <NuxtLink to="/about" class="text-white-50">About</NuxtLink>
                </li>
                <li class="breadcrumb-item text-white active" aria-current="page">Careers</li>
              </ol>
            </nav>

            <h1 class="h1 text-white pb-2">Rejoignez Notre Équipe</h1>
            <p class="fs-5 text-white-50 pb-3 mb-0" style="max-width: 700px;">
              Construisez votre carrière dans les domaines de l'eau, de l'assainissement et de l'environnement.
              Nous recherchons des professionnels passionnés qui veulent avoir un impact réel sur les communautés.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="container py-5">
      <div class="text-center mb-5 pb-lg-4">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">POURQUOI REJOINDRE SAWES</div>
        <h2 class="h2 mb-3">Construisez Votre Avenir avec SAWES</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          Chez SAWES, vous travaillerez sur des projets d'envergure régionale, apprendrez d'experts reconnus
          avec plus de 20 ans d'expérience, et contribuerez à améliorer la qualité de vie des populations.
        </p>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-droplet text-primary fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Projets à Impact Social</h5>
              <p class="text-muted mb-0">
                Participez à des projets d'eau, d'assainissement et d'environnement qui améliorent la qualité de vie des populations.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-people text-success fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Équipe d'Experts</h5>
              <p class="text-muted mb-0">
                Travaillez avec des experts reconnus possédant plus de 20 ans d'expérience dans le secteur.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-globe text-warning fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Partenaires Internationaux</h5>
              <p class="text-muted mb-0">
                Développez vos compétences avec nos partenaires : AFD, BAD, CEDEAO, UNICEF, UE, et plus.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-lightbulb text-info fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Innovation & Excellence</h5>
              <p class="text-muted mb-0">
                Agissez en pionnier de l'innovation dans les domaines de l'eau, de l'assainissement et de l'environnement.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded-3" style="width: 56px; height: 56px;">
                  <i class="bi bi-graph-up text-danger fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Développement Professionnel</h5>
              <p class="text-muted mb-0">
                Formation continue, missions terrain, et opportunités d'évolution de carrière.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body p-4">
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-3" style="width: 56px; height: 56px; background-color: rgba(0, 0, 255, 0.1);">
                  <i class="bi bi-award text-primary fs-4"></i>
                </div>
              </div>
              <h5 class="mb-3">Réputation Excellente</h5>
              <p class="text-muted mb-0">
                Rejoignez une société reconnue par les partenaires nationaux et de coopération technique et financière.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-5 bg-light">
      <div class="container py-lg-4">
        <div class="text-center mb-5">
          <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">POSTES OUVERTS</div>
          <h2 class="h2 mb-3">Opportunités Actuelles chez SAWES</h2>
          <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
            Explorez nos postes ouverts et trouvez votre prochaine opportunité de carrière.
          </p>
        </div>

        <!-- Job Listings -->
        <div class="row g-4">
          <!-- Group positions by department -->
          <div v-for="department in departments" :key="department" class="col-12">
            <h4 class="mb-4">{{ department }}</h4>

            <div class="row g-4">
              <div class="col-lg-6" v-for="position in getPositionsByDept(department)" :key="position.id">
                <div class="card h-100 border-0 shadow-sm">
                  <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h5 class="mb-1">{{ position.title.fr }}</h5>
                        <p class="text-muted mb-0">{{ position.location.fr }} • {{ position.type.fr }}</p>
                      </div>
                      <span v-if="isNewPosition(position.posted)" class="badge bg-success">Nouveau</span>
                      <span v-if="position.remote" class="badge bg-info">À distance</span>
                    </div>
                    <p class="text-muted mb-3">
                      {{ position.summary.fr }}
                    </p>
                    <div class="d-flex flex-wrap gap-2 mb-3">
                      <span v-for="(skill, idx) in position.skills.slice(0, 3)" :key="idx" class="badge bg-secondary">
                        {{ skill }}
                      </span>
                    </div>
                    <NuxtLink :to="`/careers/${position.id}`" class="btn btn-outline-primary">
                      Voir Détails
                      <i class="bi bi-arrow-right ms-1"></i>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="container py-5">
      <div class="text-center mb-5">
        <div class="badge bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-2 mb-3">COMMENT POSTULER</div>
        <h2 class="h2 mb-3">Notre Processus de Candidature</h2>
        <p class="fs-lg text-muted mx-auto" style="max-width: 700px;">
          Nous avons conçu notre processus de recrutement pour être transparent, efficace et respectueux de votre temps.
        </p>
      </div>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">1</span>
            </div>
            <h5 class="mb-2">Candidature</h5>
            <p class="text-muted fs-sm">
              Soumettez votre CV et lettre de motivation
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">2</span>
            </div>
            <h5 class="mb-2">Sélection Initiale</h5>
            <p class="text-muted fs-sm">
              L'équipe RH examine votre candidature
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">3</span>
            </div>
            <h5 class="mb-2">Entretien</h5>
            <p class="text-muted fs-sm">
              Rencontrez l'équipe de recrutement
            </p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="text-center">
            <div class="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style="width: 64px; height: 64px;">
              <span class="fs-4 fw-bold">4</span>
            </div>
            <h5 class="mb-2">Offre</h5>
            <p class="text-muted fs-sm">
              Recevez et négociez votre offre
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary bg-gradient text-white">
      <div class="container py-4">
        <div class="text-center">
          <h2 class="h2 text-white mb-3">Vous ne trouvez pas le poste idéal ?</h2>
          <p class="fs-lg text-white-50 mb-4 mx-auto" style="max-width: 600px;">
            Nous sommes toujours à la recherche de talents. Envoyez-nous votre CV et nous vous garderons à l'esprit pour de futures opportunités.
          </p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="mailto:sawes.bf@gmail.com" class="btn btn-light btn-lg px-5">
              Envoyer Votre CV
              <i class="bi bi-envelope ms-2"></i>
            </a>
            <NuxtLink to="/about" class="btn btn-outline-light btn-lg px-5">
              Découvrir Notre Équipe
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { jobPositions, getDepartments, getActivePositions } from '../data/jobs'
import { computed } from 'vue'

// Get unique departments (in French)
const departments = computed(() => {
  return getDepartments('fr')
})

// Get active positions only
const activeJobs = computed(() => {
  return getActivePositions()
})

// Get positions by department
function getPositionsByDept(department: string) {
  return activeJobs.value.filter(p => p.department.fr === department)
}

// Check if position is new (posted within last 30 days)
function isNewPosition(postedDate: string) {
  const posted = new Date(postedDate)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return posted >= thirtyDaysAgo
}

// SEO
useHead({
  title: 'Carrières - SAWES',
  meta: [
    {
      name: 'description',
      content: 'Rejoignez SAWES et construisez votre carrière dans les domaines de l\'eau, de l\'assainissement et de l\'environnement au Burkina Faso. Explorez nos postes ouverts à Ouagadougou.'
    },
    {
      name: 'keywords',
      content: 'SAWES carrières, emplois Burkina Faso, ingénieur hydraulique, WASH, eau assainissement environnement, Ouagadougou'
    }
  ]
})
</script>

<style scoped>
/* Breadcrumb styles for dark background */
.breadcrumb {
  background: transparent;
  padding: 0;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.5);
}

.breadcrumb-item a {
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-item a:hover {
  color: white !important;
}

/* Card hover effects */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

/* Badge styles */
.badge {
  font-weight: 600;
}

/* Page header spacing - accounts for fixed navbar */
.page-header-spacing {
  padding-top: 72px;
}

@media (max-width: 991.98px) {
  .page-header-spacing {
    padding-top: 64px;
  }
}

@media (max-width: 575.98px) {
  .page-header-spacing {
    padding-top: 60px;
  }
}
</style>