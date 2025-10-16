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
            // Main Resources Hub
            {
                name: 'resources___fr',
                path: '/ressources',
                file: resolve(__dirname, 'pages/index.vue'),
            },
            {
                name: 'resources___en',
                path: '/en/resources',
                file: resolve(__dirname, 'pages/index.vue'),
            },
            // News/Articles
            {
                name: 'news___fr',
                path: '/actualites',
                file: resolve(__dirname, 'pages/news.vue'),
            },
            {
                name: 'news___en',
                path: '/en/news',
                file: resolve(__dirname, 'pages/news.vue'),
            },
            // News Detail
            {
                name: 'news-detail___fr',
                path: '/actualites/:slug',
                file: resolve(__dirname, 'pages/news-detail.vue'),
            },
            {
                name: 'news-detail___en',
                path: '/en/news/:slug',
                file: resolve(__dirname, 'pages/news-detail.vue'),
            },
            // Publications
            {
                name: 'publications___fr',
                path: '/publications',
                file: resolve(__dirname, 'pages/publications.vue'),
            },
            {
                name: 'publications___en',
                path: '/en/publications',
                file: resolve(__dirname, 'pages/publications.vue'),
            },
            // Gallery
            {
                name: 'gallery___fr',
                path: '/galerie',
                file: resolve(__dirname, 'pages/gallery.vue'),
            },
            {
                name: 'gallery___en',
                path: '/en/gallery',
                file: resolve(__dirname, 'pages/gallery.vue'),
            },
            // Events
            {
                name: 'events___fr',
                path: '/evenements',
                file: resolve(__dirname, 'pages/events.vue'),
            },
            {
                name: 'events___en',
                path: '/en/events',
                file: resolve(__dirname, 'pages/events.vue'),
            })
        },

        // COMPONENTS
        'components:dirs'(dirs) {
            // Add ./components dir to the list
            dirs.push({
                path: resolve(__dirname, 'components'),
            })
        },
    },
    async setup(moduleOptions, nuxt) {
        // -- Add your module logic here --
    },
})
