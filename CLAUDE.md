# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SAWES (Sahelian Agency for Water, Environment and Sanitation) website - a professional Nuxt 3 application for a water, environment, and sanitation consulting company founded in 2000 in Burkina Faso. The site showcases services, projects, expertise, and company information.

**Mission:** Promote quality of life in water, sanitation, and environmental domains
**Primary Languages:** French (default) and English
**Package Manager:** pnpm (based on lock file)

## Common Commands

### Development
```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Generate static site
pnpm run prd

# Validate homepage sections
pnpm run check:sections
```

## Architecture

### Domain-Driven Structure

This project uses a **modular domain architecture** where each feature area is self-contained. Each domain is a Nuxt module located in `domains/` with its own:

- **Pages** (`pages/`) - Route components
- **Components** (`components/`) - Domain-specific Vue components
- **Stores** (`stores/`) - Pinia state management
- **GraphQL** (`graphql/`) - API queries/mutations (optional)
- **Data** (`data/`) - Static domain data (optional)
- **Module Definition** (`index.ts`) - Nuxt module configuration

**Current domains:**
- `aboutus` - Company information, team, methodology, QHSE certificates
- `careers` - Job listings and recruitment
- `contactus` - Contact forms and information
- `faq` - Frequently asked questions
- `homepage` - Landing page
- `privacy-policy` - Privacy policy
- `services` - Service offerings and expertise
- `solutions` - Solutions and industry applications

**Domain module pattern** (`domains/*/index.ts`):
```typescript
export default defineNuxtModule({
  defaults: {},
  hooks: {
    'pages:extend'(pages) {
      // Register routes with i18n support
      pages.push({
        name: 'route-name___fr',
        path: '/path',
        file: resolve(__dirname, 'pages/page.vue'),
      })
    },
    'components:dirs'(dirs) {
      // Auto-import domain components
      dirs.push({
        path: resolve(__dirname, 'components'),
      })
    },
  },
})
```

### Global Structure

```
├── app/                    # Root app component
├── assets/                 # Static assets, SCSS, vendor libraries
├── components/             # Global shared components (Header, Footer, etc.)
├── composables/            # Global composables
├── domains/                # Feature modules (see above)
├── layouts/                # Nuxt layouts (default, overflow-hidden)
├── locales/                # i18n translations (en.json, fr.json)
├── plugins/                # Nuxt plugins (vue-i18n.ts)
├── public/                 # Public static files
├── server/                 # Server middleware/API
├── stores/                 # Global Pinia stores (theme.js)
├── docs/                   # Project documentation
└── scripts/                # Utility scripts
```

## Key Technical Decisions

### SSR Disabled
Currently configured with `ssr: false` in `nuxt.config.ts` for stable production builds. This is a temporary measure - consider re-enabling SSR for better SEO and performance when stability issues are resolved.

### Internationalization (i18n)
- Uses Vue I18n v11 in Composition API mode
- Locale files: `locales/en.json` and `locales/fr.json`
- Routes support language prefixes (e.g., `/en/about`)
- Plugin: `plugins/vue-i18n.ts`
- Default locale: English, fallback: English

### Image Optimization
- Provider: Cloudinary (`nuxt/image` module)
- Base URL: `https://res.cloudinary.com/dsj9xpvap/image/fetch/`
- Auto quality optimization and lazy loading enabled
- Allowed domains include AWS S3 bucket

### Styling
- Bootstrap 5.3.3 as base framework
- Custom SCSS in `assets/scss/theme.scss`
- SCSS variables imported globally
- Icon libraries: Bootstrap Icons, Font Awesome, Around Icons
- AOS (Animate On Scroll) for animations
- Swiper for carousels

### External Dependencies
The project loads several vendor libraries from CDN and `/public/assets/vendor/`:
- Bootstrap 5.3.3 (JS)
- Swiper (carousel)
- Parallax.js
- AOS (animations)
- Lottie Player
- img-comparison-slider
- PDF.js (for document viewing)
- Custom theme scripts: `theme.js`, `theme-switcher.js`

## Development Workflow

### Adding a New Domain

1. Create domain directory: `domains/new-domain/`
2. Create `index.ts` module definition (follow pattern above)
3. Add pages in `domains/new-domain/pages/`
4. Add components in `domains/new-domain/components/`
5. Register module in `nuxt.config.ts` modules array (keep alphabetical order)
6. Add translations to `locales/en.json` and `locales/fr.json`

### Creating Routes

Routes are defined in each domain's `index.ts` module using the `pages:extend` hook. Support both French (default) and English variants:

```typescript
pages.push(
  {
    name: 'route-name___fr',
    path: '/french-path',
    file: resolve(__dirname, 'pages/page.vue'),
  },
  {
    name: 'route-name___en',
    path: '/en/english-path',
    file: resolve(__dirname, 'pages/page.vue'),
  }
)
```

### Component Auto-Import

- Domain components are auto-imported via `components:dirs` hook
- Global components in `/components` are auto-imported by Nuxt
- Use PascalCase for component names

### Working with Translations

1. Add keys to both `locales/en.json` and `locales/fr.json`
2. Access in templates: `{{ $t('key.path') }}`
3. Access in script: `const { t } = useI18n()`

### Scripts

**check-sections.cjs**: Validates homepage section structure
- Checks SectionWrapper usage
- Verifies component files exist
- Validates spacing and background configurations
- Use: `pnpm run check:sections`

## Environment Variables

Required variables (see `.env.example`):
- `APPLICATION_ID` - Application identifier
- `NUXT_PUBLIC_SITE_URL` - Public site URL (for sitemap, meta tags)

Optional (for MCP integrations):
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- `OPENAI_API_KEY`
- `STABILITY_AI_API_KEY`
- `RECRAFT_API_KEY`

## Specialized Agents

This repository has custom Claude Code agents in `.claude/agents/` for designing specific pages:
- `homepage-designer.md` - Homepage/landing page design
- `about-designer.md` - About Us page design
- `partners-designer.md` - Partners page design
- `projects-designer.md` - Projects & References page design
- `careers-designer.md` - Careers/Jobs page design
- `contact-designer.md` - Contact page design
- `resources-designer.md` - Resources/News page design
- `expertise-designer.md` - Services/Expertise page design
- `knowledge-updater.md` - Meta-agent for updating other agents with new knowledge

These agents specialize in their respective domains and should be used when working on those pages.

### Using the Knowledge Updater Agent

When you discover new patterns, implementations, or make architectural decisions:
1. Use the `knowledge-updater` agent to identify which agents need updates
2. The knowledge-updater will propose specific changes to keep agent knowledge current
3. This ensures consistency across all specialized agents

## Important Notes

### Bootstrap and Styling
- Bootstrap 5.3.3 JS is loaded from CDN via `nuxt.config.ts`
- Custom theme styles extend Bootstrap in `assets/scss/`
- Theme switcher supports dark/light modes
- Use Bootstrap utility classes where possible

### Performance
- Images are lazy-loaded and optimized through Cloudinary
- SectionPerformanceMonitor component available in development
- Check browser console for component loading errors
- Test responsive behavior across screen sizes

### Debugging
- Use `Ctrl+Shift+D` to toggle debug mode (when implemented)
- Check section structure: `pnpm run check:sections`
- Performance monitor shows in development builds

### Imagery Guidelines

**IMPORTANT: Cultural Representation**
- SAWES is a Burkina Faso company - always use images featuring Black African professionals
- Show authentic African contexts: Burkina Faso landscapes, infrastructure, communities
- Focus on professional imagery: engineers, consultants, field workers in action
- Image topics: water infrastructure (dams, boreholes), sanitation facilities, environmental projects
- Store all images in `/public/assets/images/` directory structure
- Optimize images for performance (reasonable file sizes, appropriate formats)

**Image Generation Prompts:**
When generating images with AI tools (ChatGPT/DALL-E), use prompts like:
```
"Professional photograph of Black African [engineer/consultant] at [water/sanitation/environmental] site in Burkina Faso context, photorealistic, high quality"
```

### When Adding Features
1. Determine which domain the feature belongs to
2. If creating a new domain, follow the modular structure
3. Add components to domain-specific `components/` folder
4. Add routes via domain's `index.ts` module
5. Update translations in both locale files
6. Test both French and English routes
7. Ensure any imagery follows the cultural representation guidelines above
