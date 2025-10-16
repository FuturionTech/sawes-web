import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { defineNuxtModule } from "@nuxt/kit";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtModule({
    // Default configuration options for your module
    defaults: {},
    hooks: {
        // ROUTES
        'pages:extend'(pages) {
            pages.push(
                {
                    name: 'partners___fr',
                    path: '/partenaires',
                    file: resolve(__dirname, 'pages/partners.vue'),
                },
                {
                    name: 'partners___en',
                    path: '/en/partners',
                    file: resolve(__dirname, 'pages/partners.vue'),
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
