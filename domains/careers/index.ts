import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import {defineNuxtModule} from "@nuxt/kit";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push(
                // Main careers page
                {
                    name: 'careers___fr',
                    path: '/carrieres',
                    file: resolve(__dirname, 'pages/careers.vue'),
                },
                {
                    name: 'careers___en',
                    path: '/en/careers',
                    file: resolve(__dirname, 'pages/careers.vue'),
                },
                // Job openings listing (alternative view)
                {
                    name: 'job-openings___fr',
                    path: '/offres-emploi',
                    file: resolve(__dirname, 'pages/careers.vue'),
                },
                {
                    name: 'job-openings___en',
                    path: '/en/job-openings',
                    file: resolve(__dirname, 'pages/careers.vue'),
                },
                // Individual job detail pages (dynamic route)
                {
                    name: 'job-detail___fr',
                    path: '/carrieres/:id',
                    file: resolve(__dirname, 'pages/position.vue'),
                },
                {
                    name: 'job-detail___en',
                    path: '/en/careers/:id',
                    file: resolve(__dirname, 'pages/position.vue'),
                }
            )
        },

        // COMPONENTS
        'components:dirs'(dirs) {
            // Add ./components dir to the list
            dirs.push({
                path: resolve(__dirname, 'components'),
            })
        },
    },
})