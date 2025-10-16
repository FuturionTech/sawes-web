import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineNuxtModule } from "@nuxt/kit"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtModule({
  defaults: {},
  hooks: {
    // ROUTES
    'pages:extend'(pages) {
      pages.push(
        // Main projects listing page
        {
          name: 'projects___fr',
          path: '/projets',
          file: resolve(__dirname, 'pages/projects.vue'),
        },
        {
          name: 'projects___en',
          path: '/en/projects',
          file: resolve(__dirname, 'pages/projects.vue'),
        },
        // Alternative route for projects-references
        {
          name: 'projects-references___fr',
          path: '/projets-references',
          file: resolve(__dirname, 'pages/projects.vue'),
        },
        {
          name: 'projects-references___en',
          path: '/en/projects-references',
          file: resolve(__dirname, 'pages/projects.vue'),
        },
        // Individual project detail pages
        {
          name: 'project-detail___fr',
          path: '/projets/:slug',
          file: resolve(__dirname, 'pages/project-detail.vue'),
        },
        {
          name: 'project-detail___en',
          path: '/en/projects/:slug',
          file: resolve(__dirname, 'pages/project-detail.vue'),
        }
      )
    },

    // COMPONENTS
    'components:dirs'(dirs) {
      dirs.push({
        path: resolve(__dirname, 'components'),
      })
    },
  },
})
