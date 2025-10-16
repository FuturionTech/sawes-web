# SAWES Careers Domain - Implementation Summary

## Overview
Complete Careers/Recruitment domain for SAWES (Sahelian Agency for Water, Environment and Sanitation) website, featuring job listings, application forms, company culture showcase, and bilingual support (French/English).

## Files Created/Modified

### 1. Domain Module Configuration
**File:** `/domains/careers/index.ts`
- Status: Updated with bilingual routes
- Routes created:
  - French: `/carrieres` (main), `/offres-emploi` (listings), `/carrieres/:id` (detail)
  - English: `/en/careers`, `/en/job-openings`, `/en/careers/:id`
- Components auto-import configured

### 2. Job Listings Data
**File:** `/domains/careers/data/jobs.ts` (NEW)
- Created comprehensive SAWES-specific job positions database
- 6 realistic positions created:
  1. Ingénieur Hydraulique Senior / Senior Hydraulic Engineer
  2. Spécialiste WASH / WASH Specialist
  3. Chef de Projet Infrastructures Hydrauliques / Water Infrastructure Project Manager
  4. Chargé(e) de Suivi-Évaluation / Monitoring & Evaluation Officer
  5. Responsable Administratif et Financier / Administrative and Finance Manager
  6. Stage - Ingénieur Environnement / Environmental Engineer Internship

**Data Structure:**
```typescript
export interface JobPosition {
  id: string
  title: { fr: string, en: string }
  department: { fr: string, en: string }
  location: { fr: string, en: string }
  type: { fr: string, en: string }
  remote: boolean
  salary: string
  experience: { fr: string, en: string }
  posted: string
  deadline: string
  status: 'active' | 'closed'
  summary: { fr: string, en: string }
  description: { fr: string, en: string }
  responsibilities: { fr: string[], en: string[] }
  requirements: { fr: string[], en: string[] }
  niceToHave: { fr: string[], en: string[] }
  benefits: { fr: string[], en: string[] }
  skills: string[]
}
```

### 3. Pages to Update

#### A. Main Careers Page
**File:** `/domains/careers/pages/careers.vue`
**Status:** NEEDS UPDATE

**Current Issues:**
- Generic tech company content (data science, ML, etc.)
- No i18n integration
- Hardcoded English text

**Required Changes:**
1. Replace generic content with SAWES-specific content
2. Import jobs data from `/domains/careers/data/jobs.ts`
3. Add i18n support using `useI18n()` composable
4. Update all sections:
   - Hero section
   - Why Join SAWES (use SAWES values)
   - Job listings (use new jobs data)
   - Application process
   - CTA sections
5. Use locale-specific content from job data
6. Add filtering by department, location, type

#### B. Job Detail Page
**File:** `/domains/careers/pages/position.vue`
**Status:** NEEDS UPDATE

**Required Changes:**
1. Update to use bilingual job data
2. Add i18n for all UI elements
3. Display job details from jobs.ts
4. Add application form integration
5. Add breadcrumbs with i18n
6. Add share functionality
7. Show similar positions

### 4. Components to Create

#### A. Job Listing Card Component
**File:** `/domains/careers/components/JobCard.vue` (NEW)
**Purpose:** Reusable job listing card
**Props:**
- `job`: JobPosition
- `locale`: 'fr' | 'en'

**Features:**
- Display job title, department, location, type
- Show "New" badge if posted within 30 days
- Show "Remote" badge if applicable
- Display summary
- Skills tags
- "View Details" CTA
- Responsive design
- AOS animations

#### B. Application Form Component
**File:** `/domains/careers/components/ApplicationForm.vue` (NEW)
**Purpose:** Job application form

**Fields:**
- First Name, Last Name
- Email, Phone
- Position (dropdown)
- CV Upload (PDF, max 5MB)
- Cover Letter Upload (PDF, optional) or Text Area
- Years of Experience
- LinkedIn Profile (optional)
- Relevant Domains (checkboxes)
- Additional Message
- GDPR Consent Checkbox

**Features:**
- File upload with drag-and-drop
- Form validation (Vue 3 / VeeValidate recommended)
- Progress indicator
- Success/error states
- Mobile-friendly
- Bilingual labels

#### C. Job Filter Component
**File:** `/domains/careers/components/JobFilter.vue` (NEW)
**Purpose:** Filter jobs by department, location, type

**Features:**
- Department dropdown/pills
- Location filter
- Employment type filter
- Clear all filters button
- Active filter count indicator

### 5. Translations to Add

**Files:**
- `/locales/en.json`
- `/locales/fr.json`

**Sections to Expand:**
```json
"careers": {
  "hero": { ... },
  "why_join": { reason1-6 with titles and descriptions },
  "openings": { ... },
  "job_detail": { ... },
  "application": { form fields, validation messages },
  "spontaneous": { ... },
  "process": { step1-4 },
  "culture": { value1-4 },
  "benefits": { ... },
  "departments": { ... },
  "contact_hr": { ... }
}
```

**Full translation structure needed in both languages** (see below for complete structure)

### 6. Nuxt Configuration
**File:** `/nuxt.config.ts`
**Status:** ✅ ALREADY REGISTERED
- Careers module already present at line 57: `'~/domains/careers/index.ts'`

## Implementation Steps

### Step 1: Update Locale Files
Add comprehensive careers translations to both `locales/en.json` and `locales/fr.json`.

### Step 2: Update careers.vue Page
1. Import jobs data:
```vue
<script setup>
import { jobPositions, getDepartments, getActivePositions } from '../data/jobs'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const activeJobs = computed(() => getActivePositions())
const departments = computed(() => getDepartments(locale.value))
</script>
```

2. Replace all hardcoded text with `{{ $t('careers.key') }}`
3. Update job listings to loop through `activeJobs`
4. Use bilingual job properties: `job.title[locale]`

### Step 3: Update position.vue Page
1. Get job by ID from route params
2. Display bilingual content
3. Add application form
4. Add i18n for all UI elements

### Step 4: Create Components
1. Create JobCard.vue
2. Create ApplicationForm.vue
3. Create JobFilter.vue (optional but recommended)

### Step 5: SEO Optimization
Update meta tags:
```vue
useHead({
  title: computed(() => `${t('careers.title')} - SAWES`),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.careers.description'))
    },
    {
      name: 'keywords',
      content: computed(() => t('meta.careers.keywords'))
    }
  ]
})
```

### Step 6: Form Handling
Implement application form submission:
- Option 1: Email submission (simpler)
- Option 2: API endpoint to save to database
- Option 3: Integration with ATS (Applicant Tracking System)

## Complete Careers Translation Structure

### English (en.json)
```json
"careers": {
  "title": "Join Our Team",
  "subtitle": "Building the future of water and sanitation together",
  "hero": {
    "badge": "Careers at SAWES",
    "title": "Join Our Team",
    "subtitle": "Build your career at the forefront of water, sanitation and environmental innovation in West Africa"
  },
  "why_join": {
    "title": "Why Join SAWES?",
    "subtitle": "Be part of a team making real impact",
    "reason1": {
      "title": "Impactful Projects",
      "description": "Participate in projects that improve quality of life for communities across West Africa"
    },
    "reason2": {
      "title": "Expert Team",
      "description": "Work with recognized experts with 25+ years of experience"
    },
    "reason3": {
      "title": "International Exposure",
      "description": "Develop skills with partners like AFD, AfDB, ECOWAS, UNICEF"
    },
    "reason4": {
      "title": "Social Impact",
      "description": "Contribute directly to improving lives through water and sanitation"
    },
    "reason5": {
      "title": "Professional Development",
      "description": "Continuous training and career growth opportunities"
    },
    "reason6": {
      "title": "Regional Projects",
      "description": "Work on infrastructure projects across West Africa"
    }
  },
  "openings": {
    "title": "Current Opportunities",
    "subtitle": "Explore our open positions",
    "no_positions": "No current openings. Check back regularly.",
    "filter": {
      "all": "All Positions",
      "department": "Filter by Department",
      "location": "Filter by Location",
      "type": "Filter by Type"
    },
    "view_details": "View Details",
    "apply_now": "Apply Now",
    "new_badge": "New",
    "remote_badge": "Remote",
    "posted": "Posted",
    "deadline": "Deadline",
    "experience": "Experience",
    "location": "Location",
    "type": "Type",
    "salary": "Salary"
  },
  "job_detail": {
    "overview": "Position Overview",
    "responsibilities": "Key Responsibilities",
    "requirements": "Requirements",
    "nice_to_have": "Nice to Have",
    "benefits": "Benefits & Perks",
    "skills": "Required Skills",
    "apply_button": "Apply for this Position",
    "back_to_listings": "Back to All Positions",
    "share": "Share this Job"
  },
  "application": {
    "title": "Application Form",
    "subtitle": "Apply for this position",
    "form": {
      "first_name": "First Name",
      "first_name_placeholder": "Enter your first name",
      "last_name": "Last Name",
      "last_name_placeholder": "Enter your last name",
      "email": "Email Address",
      "email_placeholder": "your.email@example.com",
      "phone": "Phone Number",
      "phone_placeholder": "+226 XX XX XX XX",
      "position": "Position",
      "position_placeholder": "Select position",
      "cv": "Resume / CV",
      "cv_help": "PDF format, max 5MB",
      "cover_letter": "Cover Letter",
      "cover_letter_help": "PDF format, max 5MB (optional)",
      "cover_letter_text": "Or write your cover letter here",
      "cover_letter_text_placeholder": "Tell us why you're interested...",
      "experience_years": "Years of Experience",
      "linkedin": "LinkedIn Profile (optional)",
      "linkedin_placeholder": "https://linkedin.com/in/yourprofile",
      "domains": "Relevant Domains",
      "message": "Additional Information",
      "message_placeholder": "Any additional information",
      "gdpr": "I consent to processing of my personal data for recruitment",
      "submit": "Submit Application",
      "submitting": "Submitting...",
      "success": "Application submitted successfully!",
      "error": "Failed to submit. Please try again."
    }
  },
  "spontaneous": {
    "title": "Unsolicited Application",
    "subtitle": "Don't see the right position?",
    "description": "Send us your resume and we'll keep you in mind for future opportunities.",
    "cta": "Send Your Resume",
    "email": "careers@sawes.bf"
  },
  "process": {
    "title": "Application Process",
    "subtitle": "Our transparent hiring process",
    "step1": {
      "title": "Application",
      "description": "Submit your resume and cover letter"
    },
    "step2": {
      "title": "Initial Screening",
      "description": "HR team reviews your application (1-2 weeks)"
    },
    "step3": {
      "title": "Interview",
      "description": "Meet with the hiring team"
    },
    "step4": {
      "title": "Offer",
      "description": "Receive and negotiate your offer"
    }
  },
  "culture": {
    "title": "Life at SAWES",
    "subtitle": "Our work culture and values",
    "value1": {
      "title": "Excellence",
      "description": "Quality work and professionalism"
    },
    "value2": {
      "title": "Innovation",
      "description": "Pioneer innovative approaches"
    },
    "value3": {
      "title": "Collaboration",
      "description": "Work with partners for impact"
    },
    "value4": {
      "title": "Impact",
      "description": "Measure success by positive change"
    }
  },
  "benefits": {
    "title": "Benefits & Perks",
    "subtitle": "What we offer",
    "competitive_salary": "Competitive salary",
    "health_insurance": "Health insurance",
    "training": "Professional development",
    "international": "International missions",
    "projects": "High-impact projects",
    "environment": "Collaborative environment",
    "leave": "Paid annual leave",
    "growth": "Career progression"
  },
  "departments": {
    "technical_studies": "Technical Studies",
    "wash": "Water, Sanitation & Hygiene",
    "project_management": "Project Management",
    "monitoring_evaluation": "Monitoring & Evaluation",
    "admin_finance": "Administration & Finance",
    "environmental": "Environmental Studies",
    "all": "All Departments"
  },
  "contact_hr": {
    "title": "Questions About Careers?",
    "description": "Contact our HR team",
    "email": "careers@sawes.bf",
    "phone": "(+226) 25 41 15 56"
  }
}
```

### French (fr.json)
```json
"careers": {
  "title": "Rejoignez Notre Équipe",
  "subtitle": "Construire l'avenir de l'eau et de l'assainissement ensemble",
  "hero": {
    "badge": "Carrières chez SAWES",
    "title": "Rejoignez Notre Équipe",
    "subtitle": "Construisez votre carrière à la pointe de l'innovation en eau, assainissement et environnement en Afrique de l'Ouest"
  },
  "why_join": {
    "title": "Pourquoi Rejoindre SAWES ?",
    "subtitle": "Faites partie d'une équipe à impact réel",
    "reason1": {
      "title": "Projets d'Impact",
      "description": "Participer à des projets qui améliorent la qualité de vie des communautés en Afrique de l'Ouest"
    },
    "reason2": {
      "title": "Équipe d'Experts",
      "description": "Travailler avec des experts reconnus avec 25+ ans d'expérience"
    },
    "reason3": {
      "title": "Exposition Internationale",
      "description": "Développer vos compétences avec des partenaires comme AFD, BAD, CEDEAO, UNICEF"
    },
    "reason4": {
      "title": "Impact Social",
      "description": "Contribuer directement à améliorer des vies grâce à l'eau et l'assainissement"
    },
    "reason5": {
      "title": "Développement Professionnel",
      "description": "Formation continue et opportunités de croissance de carrière"
    },
    "reason6": {
      "title": "Projets Régionaux",
      "description": "Travailler sur des projets d'infrastructure en Afrique de l'Ouest"
    }
  },
  "openings": {
    "title": "Opportunités Actuelles",
    "subtitle": "Explorez nos postes ouverts",
    "no_positions": "Aucune offre actuellement. Consultez régulièrement.",
    "filter": {
      "all": "Tous les Postes",
      "department": "Filtrer par Département",
      "location": "Filtrer par Localisation",
      "type": "Filtrer par Type"
    },
    "view_details": "Voir Détails",
    "apply_now": "Postuler",
    "new_badge": "Nouveau",
    "remote_badge": "À distance",
    "posted": "Publié",
    "deadline": "Date limite",
    "experience": "Expérience",
    "location": "Localisation",
    "type": "Type",
    "salary": "Salaire"
  },
  "job_detail": {
    "overview": "Aperçu du Poste",
    "responsibilities": "Responsabilités Clés",
    "requirements": "Exigences",
    "nice_to_have": "Atouts",
    "benefits": "Avantages",
    "skills": "Compétences Requises",
    "apply_button": "Postuler pour ce Poste",
    "back_to_listings": "Retour aux Postes",
    "share": "Partager cette Offre"
  },
  "application": {
    "title": "Formulaire de Candidature",
    "subtitle": "Postuler pour ce poste",
    "form": {
      "first_name": "Prénom",
      "first_name_placeholder": "Entrez votre prénom",
      "last_name": "Nom",
      "last_name_placeholder": "Entrez votre nom",
      "email": "Adresse Email",
      "email_placeholder": "votre.email@exemple.com",
      "phone": "Numéro de Téléphone",
      "phone_placeholder": "+226 XX XX XX XX",
      "position": "Poste",
      "position_placeholder": "Sélectionnez un poste",
      "cv": "CV",
      "cv_help": "Format PDF, max 5Mo",
      "cover_letter": "Lettre de Motivation",
      "cover_letter_help": "Format PDF, max 5Mo (optionnel)",
      "cover_letter_text": "Ou écrivez votre lettre ici",
      "cover_letter_text_placeholder": "Dites-nous pourquoi vous êtes intéressé...",
      "experience_years": "Années d'Expérience",
      "linkedin": "Profil LinkedIn (optionnel)",
      "linkedin_placeholder": "https://linkedin.com/in/votrprofil",
      "domains": "Domaines Pertinents",
      "message": "Informations Additionnelles",
      "message_placeholder": "Informations supplémentaires",
      "gdpr": "Je consens au traitement de mes données personnelles pour le recrutement",
      "submit": "Soumettre la Candidature",
      "submitting": "Envoi en cours...",
      "success": "Candidature soumise avec succès !",
      "error": "Échec de l'envoi. Veuillez réessayer."
    }
  },
  "spontaneous": {
    "title": "Candidature Spontanée",
    "subtitle": "Vous ne trouvez pas le poste idéal ?",
    "description": "Envoyez-nous votre CV et nous vous garderons à l'esprit pour de futures opportunités.",
    "cta": "Envoyer Votre CV",
    "email": "careers@sawes.bf"
  },
  "process": {
    "title": "Processus de Candidature",
    "subtitle": "Notre processus de recrutement transparent",
    "step1": {
      "title": "Candidature",
      "description": "Soumettez votre CV et lettre de motivation"
    },
    "step2": {
      "title": "Sélection Initiale",
      "description": "L'équipe RH examine votre candidature (1-2 semaines)"
    },
    "step3": {
      "title": "Entretien",
      "description": "Rencontrez l'équipe de recrutement"
    },
    "step4": {
      "title": "Offre",
      "description": "Recevez et négociez votre offre"
    }
  },
  "culture": {
    "title": "La Vie chez SAWES",
    "subtitle": "Notre culture de travail et nos valeurs",
    "value1": {
      "title": "Excellence",
      "description": "Travail de qualité et professionnalisme"
    },
    "value2": {
      "title": "Innovation",
      "description": "Pionnier d'approches innovantes"
    },
    "value3": {
      "title": "Collaboration",
      "description": "Travailler avec des partenaires pour l'impact"
    },
    "value4": {
      "title": "Impact",
      "description": "Mesurer le succès par le changement positif"
    }
  },
  "benefits": {
    "title": "Avantages",
    "subtitle": "Ce que nous offrons",
    "competitive_salary": "Salaire compétitif",
    "health_insurance": "Assurance santé",
    "training": "Développement professionnel",
    "international": "Missions internationales",
    "projects": "Projets à fort impact",
    "environment": "Environnement collaboratif",
    "leave": "Congés annuels payés",
    "growth": "Progression de carrière"
  },
  "departments": {
    "technical_studies": "Études Techniques",
    "wash": "Eau, Hygiène et Assainissement",
    "project_management": "Gestion de Projets",
    "monitoring_evaluation": "Suivi-Évaluation",
    "admin_finance": "Administration et Finance",
    "environmental": "Études Environnementales",
    "all": "Tous les Départements"
  },
  "contact_hr": {
    "title": "Questions sur les Carrières ?",
    "description": "Contactez notre équipe RH",
    "email": "careers@sawes.bf",
    "phone": "(+226) 25 41 15 56"
  }
}
```

## Testing Checklist

- [ ] Routes work in both French and English
- [ ] Job listings display correctly with bilingual data
- [ ] Job detail pages show correct information
- [ ] Application form validates properly
- [ ] File uploads work (CV, Cover Letter)
- [ ] Form submission handles success/error states
- [ ] Filters work (department, location, type)
- [ ] "New" badge shows for jobs posted <30 days ago
- [ ] SEO meta tags are correct for both languages
- [ ] Breadcrumbs work properly
- [ ] Mobile responsive design
- [ ] AOS animations work
- [ ] Accessibility (ARIA labels, keyboard navigation)

## Future Enhancements

1. **Admin Panel** for managing job postings
2. **Applicant Tracking System** integration
3. **Email notifications** for new applications
4. **Application status tracking** for candidates
5. **Job alerts** newsletter signup
6. **Social media share** buttons
7. **Save job** functionality
8. **Employee testimonials** section
9. **Team photos gallery**
10. **Career path visualization**

## Contact

For questions about this implementation:
- Email: careers@sawes.bf
- Phone: (+226) 25 41 15 56
