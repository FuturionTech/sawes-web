# Projects Domain

Complete portfolio showcase domain for SAWES (Sahelian Agency for Water, Environment and Sanitation) featuring 30+ projects across water, sanitation, and environmental sectors.

## Overview

The Projects Domain provides a comprehensive, filterable portfolio of SAWES's work from 2000 to present, including:
- **Studies & Feasibility** (7 projects)
- **Project Evaluations** (3 projects)
- **Project Management** (6 projects)
- **Urban Services** (1 ongoing project)
- **Other Achievements** (4 services)

## Features

### Main Projects Page (`/projets` or `/en/projects`)
- Filterable project grid with multiple criteria:
  - Category filter (Studies, Evaluations, Management, Urban Services, Other)
  - Status filter (Completed, Ongoing, Featured)
  - Year filter (2000-2025)
  - Full-text search
- Sorting options (Newest, Oldest, Title A-Z, Z-A)
- Pagination (9 projects per page)
- Featured projects section
- Statistics dashboard (total projects, years experience, partners)
- Responsive card-based layout with hover effects

### Project Detail Page (`/projets/:slug` or `/en/projects/:slug`)
- Comprehensive project information:
  - Full description and overview
  - Scope of work (bulleted list)
  - Outcomes and impact
  - Partners breakdown (Main, Execution, Technical/Financial)
  - Project metadata (Category, Region, Year, Status, Duration, Capacity)
  - Related topics/tags
- Social sharing (LinkedIn, Twitter, Facebook, Copy Link)
- Related projects section (same category)
- Breadcrumb navigation
- Bilingual support (French/English)

### Components

**ProjectCard.vue**
- Reusable project card component
- Category badge with color coding
- Featured ribbon
- Status indicator (ongoing/completed)
- Partner logos display (first 2 + count)
- Tags display (first 3)
- Truncated description with "View Details" link
- AOS animations on scroll

**ProjectFilters.vue**
- Comprehensive filtering UI
- Category buttons with project counts
- Status toggles
- Year dropdown
- Search input
- Active filters summary
- Clear filters action

## Routes

**French:**
- `/projets` - Main projects listing
- `/projets-references` - Alternative route (same page)
- `/projets/:slug` - Individual project details

**English:**
- `/en/projects` - Main projects listing
- `/en/projects-references` - Alternative route (same page)
- `/en/projects/:slug` - Individual project details

## Data Structure

### Project Interface
```typescript
interface Project {
  id: string
  slug: string
  title: string
  titleFr: string
  category: 'studies' | 'evaluations' | 'management' | 'urban-services' | 'other'
  date: string
  year: number
  duration?: string
  description: string
  descriptionFr: string
  location: string
  locationFr: string
  region: string
  regionFr: string
  partners: string[]
  partnersFr: string[]
  executionPartners?: string[]
  executionPartnersFr?: string[]
  technicalPartners?: string[]
  technicalPartnersFr?: string[]
  capacity?: string
  budget?: string
  scope?: string[]
  scopeFr?: string[]
  outcomes?: string[]
  outcomesFr?: string[]
  image?: string
  images?: string[]
  featured?: boolean
  status?: 'completed' | 'ongoing'
  tags?: string[]
  tagsFr?: string[]
}
```

### Helper Functions
```typescript
getProjectById(id: string): Project | undefined
getProjectBySlug(slug: string): Project | undefined
getProjectsByCategory(category): Project[]
getFeaturedProjects(): Project[]
getProjectsByYear(year: number): Project[]
getProjectsByRegion(region: string): Project[]
getOngoingProjects(): Project[]
getCompletedProjects(): Project[]
getAllProjects(): Project[]
getProjectYears(): number[]
getProjectStats(): ProjectStats
```

## Featured Projects

Projects marked as `featured: true` are highlighted in a special section:
1. **CEDEAO Water Policy 2012** - Regional planning for West Africa
2. **National PNAEPA Program 2006** - MDG-aligned investment plan
3. **UNICEF School WASH 2007** - Harmonization of school water approaches
4. **Transboundary Basins 2010** - New basin organizations in West Africa
5. **Bagré Dam Evaluation 2009** - AFD retrospective assessment
6. **VREO Program 2004-2010** - Western water resources development
7. **Yakouta Dam 2003-2008** - 26.5M m³ capacity supervision
8. **Soum Dam 2005-2007** - 83M m³ capacity quality control
9. **1000 Boreholes 2004-2008** - National rural water supply
10. **Water Supply Contracts 2021-2025** - Ongoing urban services

## Key Partners

Projects showcase collaborations with:
- **International:** ECOWAS, AfDB, AFD, UNICEF, EU-EDF
- **Bilateral:** Taiwan, Kuwait, France
- **National:** State of Burkina Faso, ONEA, CREPA
- **Consultancies:** SOFRECO, CODEX, BAFRENAH, SEROHS, PACE

## Technical Implementation

### Styling
- Bootstrap 5.3.3 for layout and components
- Custom category color coding
- AOS (Animate On Scroll) for smooth animations
- Responsive grid system (4-3-2-1 columns)
- Wave divider SVG on hero section

### Performance
- Lazy loading for images via Cloudinary
- Pagination (9 items per page)
- Client-side filtering (no page reload)
- Sticky filter sidebar on desktop

### SEO
- Dynamic meta tags per project
- Bilingual routes
- Structured breadcrumbs
- Semantic HTML

## Translations

Translation keys are required in `locales/en.json` and `locales/fr.json`. See `TRANSLATIONS_REQUIRED.md` for the complete list of keys to add.

**Key translation sections:**
- `projects.hero.*` - Hero section text
- `projects.categories.*` - Category labels
- `projects.filters.*` - Filter UI text
- `projects.status.*` - Status labels
- `projects.sort.*` - Sort options
- `projects.detail.*` - Detail page text
- `projects.cta.*` - Call-to-action text

## Usage Examples

### Get all featured projects
```typescript
import { getFeaturedProjects } from '~/domains/projects/data/projects'

const featured = getFeaturedProjects()
```

### Filter projects by category
```typescript
import { getProjectsByCategory } from '~/domains/projects/data/projects'

const studies = getProjectsByCategory('studies')
```

### Get project stats
```typescript
import { getProjectStats } from '~/domains/projects/data/projects'

const stats = getProjectStats()
// { total: 21, studies: 7, evaluations: 3, management: 6, ... }
```

### Find project by slug
```typescript
import { getProjectBySlug } from '~/domains/projects/data/projects'

const project = getProjectBySlug('cedeao-water-policy-2012')
```

## Maintenance

### Adding New Projects

1. Add project data to `data/projects.ts`:
```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: 'English Title',
  titleFr: 'Titre Français',
  category: 'studies', // or evaluations, management, etc.
  date: 'Month Year',
  year: 2025,
  description: 'English description...',
  descriptionFr: 'Description française...',
  location: 'Location',
  locationFr: 'Localisation',
  region: 'Region Name',
  regionFr: 'Nom de la Région',
  partners: ['Partner 1', 'Partner 2'],
  partnersFr: ['Partenaire 1', 'Partenaire 2'],
  scope: ['Item 1', 'Item 2'],
  scopeFr: ['Élément 1', 'Élément 2'],
  featured: false,
  status: 'completed',
  tags: ['Tag1', 'Tag2'],
  tagsFr: ['Balise1', 'Balise2']
}
```

2. Optionally add project images to `public/img/projects/`
3. Update `image` field with path

### Updating Existing Projects

Edit the project object in `data/projects.ts` directly. Changes will reflect immediately thanks to reactive data.

### Customizing Filters

To add new filter criteria:
1. Add state variable in `projects.vue`
2. Add filter UI in `ProjectFilters.vue`
3. Update `filteredProjects` computed property
4. Add translation keys

## Future Enhancements

- Interactive map showing project locations
- Timeline view of projects
- Export to PDF functionality
- Advanced search with multiple field support
- Project comparison tool
- Photo galleries per project
- Client testimonials integration
- Impact metrics visualization

## Dependencies

- Nuxt 3
- Vue 3 Composition API
- Bootstrap 5.3.3
- Bootstrap Icons
- AOS (Animate On Scroll)
- Vue I18n (internationalization)
- Nuxt Image (Cloudinary)

## License

© 2025 SAWES. All rights reserved.
