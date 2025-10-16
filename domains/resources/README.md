# Resources Domain

## Overview

The Resources Domain provides a comprehensive resource center for SAWES (Sahelian Agency for Water, Environment and Sanitation), including news, publications, photo gallery, and events management.

## Structure

```
domains/resources/
├── index.ts                    # Domain module definition with routes
├── README.md                   # This file
├── components/                 # Domain-specific components
│   ├── NewsCard.vue           # News article card component
│   ├── PublicationCard.vue    # Publication card component
│   └── EventCard.vue          # Event card component
├── data/                       # Static data files
│   ├── news.ts                # News articles data and utilities
│   ├── publications.ts        # Publications data and utilities
│   ├── gallery.ts             # Gallery images data and utilities
│   └── events.ts              # Events data and utilities
└── pages/                      # Page components
    ├── index.vue              # Main resources hub
    ├── news.vue               # News listing page
    ├── news-detail.vue        # Individual news article page
    ├── publications.vue       # Publications library page
    ├── gallery.vue            # Photo gallery page
    └── events.vue             # Events and workshops page
```

## Routes

### French Routes
- `/ressources` - Main resources hub
- `/actualites` - News listing
- `/actualites/:slug` - Individual news article
- `/publications` - Publications library
- `/galerie` - Photo gallery
- `/evenements` - Events and workshops

### English Routes
- `/en/resources` - Main resources hub
- `/en/news` - News listing
- `/en/news/:slug` - Individual news article
- `/en/publications` - Publications library
- `/en/gallery` - Photo gallery
- `/en/events` - Events and workshops

## Components

### NewsCard
Displays a news article in card format with:
- Featured image
- Type badge (news, press-release, announcement, event-coverage)
- Featured indicator
- Publication date
- Categories
- Title and excerpt
- Author information
- Read more link

### PublicationCard
Displays a publication with:
- Type badge (technical-report, case-study, policy-brief, etc.)
- Language indicator
- PDF icon
- Title and description
- Meta information (date, file size, downloads)
- Partner information
- Download and preview buttons
- Category tags

### EventCard
Displays an event with:
- Event image (optional)
- Status badge (upcoming, ongoing, completed)
- Type badge (workshop, training, conference, etc.)
- Event details (date, location, organizer, participants)
- Registration/learn more button

## Data Structure

### News Articles
Each news article includes:
- Unique ID and slug
- Type and featured flag
- Bilingual title, excerpt, and content
- Image URL
- Publication date
- Categories and tags
- Author and related projects

### Publications
Each publication includes:
- Unique ID
- Type (technical-report, case-study, etc.)
- Bilingual title and description
- File information (URL, size)
- Publication date and year
- Categories and tags
- Language(s)
- Authors and partners
- Download count

### Gallery Images
Each image includes:
- Unique ID
- Bilingual title and description
- Image URLs (full and thumbnail)
- Date
- Categories and tags
- Project association
- Location and photographer

### Events
Each event includes:
- Unique ID
- Type and status
- Bilingual title, description, and location
- Start and end dates
- Organizer and participant count
- Registration URL and contact

## Translations

Comprehensive translations are provided in:
- `/locales/en.json` - English translations
- `/locales/fr.json` - French translations

Translation keys are namespaced under `resources.*`:
- `resources.news.*` - News-related translations
- `resources.publications.*` - Publications-related translations
- `resources.gallery.*` - Gallery-related translations
- `resources.events.*` - Events-related translations
- `resources.cta.*` - Call-to-action translations

## Features

### News Section
- Featured news highlighting
- Category filtering
- Responsive card grid
- Individual article pages with full content
- Related articles suggestions
- Social sharing capabilities

### Publications Library
- Advanced filtering (type, category, year)
- Search functionality
- Download tracking
- PDF preview support
- Sortable by date, popularity, title
- File size and language indicators

### Photo Gallery
- Responsive image grid
- Category filtering
- Lightbox modal viewing
- Image metadata display
- Project association
- Location tagging

### Events & Workshops
- Upcoming and past events separation
- Event registration integration
- Status indicators
- Detailed event information
- Calendar integration ready

## Sample Data

The domain includes realistic sample data for:
- 6 news articles covering various SAWES activities
- 12 publications (technical reports, case studies, guidelines)
- 12 gallery images from various projects
- 8 events (workshops, trainings, conferences)

All sample data is relevant to water, sanitation, and environment sector in West Africa and Burkina Faso.

## Usage

The resources domain is automatically registered in `nuxt.config.ts` and follows the standard domain-driven architecture pattern used throughout the SAWES website.

Components are auto-imported and can be used directly in templates:
```vue
<NewsCard :article="article" />
<PublicationCard :publication="publication" />
<EventCard :event="event" />
```

Data utilities can be imported as needed:
```javascript
import { getRecentNews, getFeaturedNews } from '~/domains/resources/data/news'
import { getPublicationsByType } from '~/domains/resources/data/publications'
import { getUpcomingEvents } from '~/domains/resources/data/events'
```

## Future Enhancements

Potential improvements include:
- Newsletter subscription system
- Blog integration
- RSS feed generation
- Social media integration
- Comment system
- Content recommendation engine
- Email sharing
- Advanced search with Algolia or similar
- Content management system integration
- Multi-file uploads for publications
- Video library integration
- Podcast section
- Interactive maps for project locations

## Dependencies

- Bootstrap 5.3.3 for styling
- Bootstrap Icons for iconography
- Nuxt Image for image optimization (Cloudinary)
- Vue I18n for internationalization
- PDF.js for document preview (already available globally)

## SEO

Each page includes proper meta tags for:
- Page title
- Description
- Keywords
- Open Graph tags (ready for implementation)
- Twitter Card tags (ready for implementation)

Meta translations are provided in the locale files under `meta.resources.*`.
