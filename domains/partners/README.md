# Partners Domain

The Partners domain showcases SAWES's strategic partnerships with international organizations, bilateral agencies, government institutions, private sector, NGOs, and academic institutions.

## Domain Structure

```
domains/partners/
├── components/          # Vue components
│   ├── PartnersHero.vue         # Hero section with stats
│   ├── PartnerCard.vue          # Individual partner card
│   ├── PartnersGrid.vue         # Grid with category filters
│   ├── PartnershipTimeline.vue  # Timeline of key collaborations
│   ├── PartnerTestimonials.vue  # Success stories
│   └── BecomePartner.vue        # CTA for potential partners
├── data/                # Data files
│   └── partners.ts              # Partner data and categories
├── pages/               # Page components
│   └── partners.vue             # Main partners page
├── index.ts             # Domain module definition
└── README.md            # This file
```

## Routes

- **French**: `/partenaires`
- **English**: `/en/partners`

## Features

### 1. Partners Hero Section
- Eye-catching gradient hero with statistics
- Key metrics: 30+ partners, 15 countries, 20+ years, 50+ projects
- Wave decoration and pattern overlay

### 2. Partner Categories
Partners are organized into 6 categories:
- **International Organizations**: UN agencies, World Bank, AfDB, EU
- **Bilateral Cooperation**: GIZ, AFD, USAID, JICA, Taiwan
- **NGOs & Civil Society**: CREPA, WaterAid, PSE/PDM
- **Private Sector**: Consulting firms (SOFRECO, EDE, CODEX, etc.)
- **Government & Public Institutions**: ONEA, State of Burkina Faso, UEMOA
- **Academic & Research**: 2iE, IRD

### 3. PartnersGrid Component
- **Category Filtering**: Filter partners by category
- **Search Functionality**: Search by name, organization, or description
- **Partner Cards**: Display with logo, description, projects, website
- **Featured Partners**: Highlight key strategic partners
- **Responsive Grid**: 3 columns on desktop, 2 on tablet, 1 on mobile

### 4. Partnership Timeline
Shows key milestones from 2000 to 2025:
- Foundation of SAWES (2000)
- Major dam projects (2003-2008)
- VREO Program (2004-2010)
- PNAEPA National Program (2006)
- AFD Evaluations (2009)
- ECOWAS Regional Coordination (2010-2012)
- Bobo-Dioulasso Sanitation (2013-2015)
- Rural Service Management (2021-2025)

### 5. Success Stories
Three featured success stories:
1. **Access to Clean Water**: 1000+ boreholes, 50k+ beneficiaries
2. **Urban Sanitation**: 5000+ households in Bobo-Dioulasso
3. **Regional Development**: VREO program spanning 6 years

### 6. Become a Partner CTA
- Partnership benefits
- Contact information
- Download brochure option
- Visual engagement elements

### 7. Additional Sections
- **Global Reach Map**: Placeholder for interactive partner map
- **Trust Indicators**: Why partner with SAWES
- **Impact Statistics**: Comprehensive metrics

## Partner Data Structure

Each partner includes:
```typescript
{
  id: string                    // Unique identifier
  name: string                  // Short name (e.g., "AFD")
  fullName: {                   // Full organization name
    fr: string
    en: string
  }
  logo?: string                 // Optional logo URL
  category: string              // One of 6 categories
  description: {                // Partnership description
    fr: string
    en: string
  }
  projects?: string[]           // Associated project IDs
  website?: string              // Organization website
  region?: string               // Geographic region
  yearStarted?: number          // Partnership start year
  featured?: boolean            // Featured partner flag
}
```

## Components

### PartnersHero.vue
- Gradient background with SVG pattern
- Statistics cards (partners, countries, years, projects)
- Wave decoration at bottom
- Responsive design with Bootstrap grid

### PartnerCard.vue
- Partner logo or category icon placeholder
- Organization name and full name
- Category badge with color coding
- Description text
- Location and start year
- Project count
- Website link button
- Featured badge (if applicable)
- Hover lift effect

### PartnersGrid.vue
- Category filter buttons with counts
- Search input field
- Responsive grid layout
- No results state
- Featured partners section
- Auto-import of PartnerCard

### PartnershipTimeline.vue
- Vertical timeline with gradient line
- Milestone cards with year, icon, title, description
- Partner badges
- Responsive breakpoints

### PartnerTestimonials.vue
- Success story cards with icons
- Statistics display
- Partner badges
- Impact numbers section
- Hover effects

### BecomePartner.vue
- Split layout (image + content)
- Partnership benefits list
- Contact information
- CTA buttons (contact, download)
- Pattern overlay graphics

## Translations

Comprehensive bilingual support in `locales/en.json` and `locales/fr.json`:

```json
partners: {
  title, subtitle, hero, stats, introduction,
  categories, grid, card, timeline, testimonials,
  cta, map, trust, international, national
}
```

## Styling

- **Bootstrap 5.3.3**: Base framework
- **Custom hover effects**: Lift and shadow transitions
- **Color coding**: Category-specific colors
  - International: Primary (blue)
  - Bilateral: Success (green)
  - NGO: Danger (red)
  - Private: Info (cyan)
  - Government: Warning (yellow)
  - Academic: Secondary (gray)
- **Responsive breakpoints**: Mobile-first design
- **AOS animations**: Fade-up, zoom-in effects

## SEO

Meta tags configured in `partners.vue`:
- Title: "Our Partners - SAWES"
- Description: Strategic collaborations with AFD, AfDB, ECOWAS, ONEA, UNICEF
- Keywords: partners, AFD, AfDB, ECOWAS, ONEA, UNICEF, collaboration
- OpenGraph tags for social sharing

## Usage

The partners page is automatically registered via the domain module system:

```typescript
// nuxt.config.ts
modules: [
  '~/domains/partners/index.ts',
  // ... other modules
]
```

No additional configuration needed. The module auto-registers:
- Routes (French and English)
- Components (auto-import)
- Translations (from locales/)

## Partner Data

Current partners (30+):
- **International (7)**: AFD, AfDB, ECOWAS, UNICEF, EU-EDF, World Bank, UNDP
- **Bilateral (5)**: GIZ, Taiwan, IDB/Kuwait, USAID, JICA
- **NGOs (3)**: PSE/PDM, CREPA, WaterAid
- **Private (5)**: SOFRECO, EDE Senegal, CODEX, BAFRENAH, SEROHS
- **Government (4)**: ONEA, State of Burkina Faso, UEMOA, Rural Municipalities
- **Academic (2)**: 2iE, IRD

## Development

To add new partners:
1. Edit `data/partners.ts`
2. Add partner object to `partners` array
3. Translations auto-generated from data structure
4. No component changes needed

## Future Enhancements

Potential improvements:
- Interactive partner map with geographic locations
- Partner testimonial quotes
- Partnership case studies (detailed pages)
- Partner logos (currently using placeholders)
- Download partnership brochure PDF
- Partner portal/login
- Partnership impact metrics dashboard
- Newsletter subscription for partnership opportunities

## Credits

Built with:
- Nuxt 3
- Vue 3 Composition API
- Bootstrap 5.3.3
- Bootstrap Icons
- AOS (Animate On Scroll)
- TypeScript

## Contact

For partnership inquiries:
- Email: sawes.bf@gmail.com
- Phone: (+226) 25 41 15 56
- Visit: `/partenaires` or `/en/partners`
