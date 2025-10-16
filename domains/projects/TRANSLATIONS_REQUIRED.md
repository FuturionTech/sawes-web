# Projects Domain - Translation Keys Required

This document lists all the translation keys that need to be added to `locales/en.json` and `locales/fr.json` for the Projects Domain to function correctly.

## Instructions

Add the following keys to the **`projects`** section in both locale files. Some basic project keys already exist, so these additions extend the existing structure.

---

## English Translations (locales/en.json)

Add these keys to the `projects` object (after existing keys):

```json
{
  "projects": {
    // ... existing keys ...

    "hero": {
      "badge": "Our Portfolio",
      "title": "Projects & Achievements",
      "subtitle": "Over 25 years of delivering impactful water, sanitation, and environment projects across West Africa",
      "stats": {
        "total_projects": "Completed Projects",
        "years_experience": "Years Experience",
        "partners": "Partners"
      }
    },

    "categories": {
      "studies": "Studies & Feasibility",
      "evaluations": "Project Evaluations",
      "management": "Project Management",
      "urban_services": "Urban Services",
      "other": "Other Services"
    },

    "filters": {
      "title": "Filter Projects",
      "by_category": "By Category",
      "by_status": "By Status",
      "by_year": "By Year",
      "search": "Search Projects",
      "search_placeholder": "Search by title, location, or partner...",
      "all": "All Projects",
      "all_status": "All Status",
      "all_years": "All Years",
      "clear_all": "Clear Filters",
      "featured_only": "Featured Projects",
      "showing_results": "Showing {count} projects filtered by {filters}"
    },

    "status": {
      "completed": "Completed",
      "ongoing": "Ongoing"
    },

    "featured_label": "Featured",
    "featured": {
      "title": "Featured Projects"
    },

    "view_details": "View Details",

    "results": {
      "title": "Project Results",
      "showing": "Showing",
      "of": "of",
      "projects": "projects"
    },

    "sort": {
      "newest": "Newest First",
      "oldest": "Oldest First",
      "title_az": "Title A-Z",
      "title_za": "Title Z-A"
    },

    "no_results": {
      "title": "No Projects Found",
      "message": "Try adjusting your filter criteria or search query",
      "clear_filters": "Clear All Filters"
    },

    "cta": {
      "title": "Ready to Start Your Project?",
      "description": "Our team of experts is ready to support your water, sanitation and environment initiatives",
      "contact": "Contact Us",
      "services": "Our Services"
    },

    "detail": {
      "overview": "Project Overview",
      "scope": "Scope of Work",
      "outcomes": "Outcomes & Impact",
      "related_topics": "Related Topics",
      "partners": "Partners & Collaborators",
      "main_partners": "Main Partners",
      "execution_partners": "Execution Partners",
      "technical_partners": "Technical & Financial Partners",
      "project_info": "Project Information",
      "category": "Category",
      "region": "Region",
      "year": "Year",
      "status": "Status",
      "date": "Date",
      "duration": "Duration",
      "location": "Location",
      "capacity": "Capacity",
      "share": "Share Project",
      "related_projects": "Related Projects",
      "link_copied": "Link copied to clipboard!",
      "cta": {
        "title": "Interested in Similar Projects?",
        "description": "Contact us to discuss how we can support your initiatives",
        "contact": "Contact Us",
        "back_to_projects": "Back to All Projects"
      },
      "not_found": {
        "title": "Project Not Found",
        "message": "The project you're looking for doesn't exist or has been removed",
        "back_to_projects": "Back to Projects"
      }
    }
  }
}
```

---

## French Translations (locales/fr.json)

Add these keys to the `projects` object (after existing keys):

```json
{
  "projects": {
    // ... existing keys ...

    "hero": {
      "badge": "Notre Portfolio",
      "title": "Projets & Réalisations",
      "subtitle": "Plus de 25 ans de réalisation de projets impactants en eau, assainissement et environnement en Afrique de l'Ouest",
      "stats": {
        "total_projects": "Projets Réalisés",
        "years_experience": "Ans d'Expérience",
        "partners": "Partenaires"
      }
    },

    "categories": {
      "studies": "Études & Faisabilité",
      "evaluations": "Évaluations de Projets",
      "management": "Gestion de Projets",
      "urban_services": "Services Urbains",
      "other": "Autres Services"
    },

    "filters": {
      "title": "Filtrer les Projets",
      "by_category": "Par Catégorie",
      "by_status": "Par Statut",
      "by_year": "Par Année",
      "search": "Rechercher des Projets",
      "search_placeholder": "Rechercher par titre, lieu ou partenaire...",
      "all": "Tous les Projets",
      "all_status": "Tous les Statuts",
      "all_years": "Toutes les Années",
      "clear_all": "Effacer les Filtres",
      "featured_only": "Projets Vedettes",
      "showing_results": "Affichage de {count} projets filtrés par {filters}"
    },

    "status": {
      "completed": "Terminé",
      "ongoing": "En Cours"
    },

    "featured_label": "Vedette",
    "featured": {
      "title": "Projets Vedettes"
    },

    "view_details": "Voir Détails",

    "results": {
      "title": "Résultats des Projets",
      "showing": "Affichage de",
      "of": "sur",
      "projects": "projets"
    },

    "sort": {
      "newest": "Plus Récents",
      "oldest": "Plus Anciens",
      "title_az": "Titre A-Z",
      "title_za": "Titre Z-A"
    },

    "no_results": {
      "title": "Aucun Projet Trouvé",
      "message": "Essayez d'ajuster vos critères de filtre ou votre requête de recherche",
      "clear_filters": "Effacer Tous les Filtres"
    },

    "cta": {
      "title": "Prêt à Démarrer Votre Projet?",
      "description": "Notre équipe d'experts est prête à soutenir vos initiatives en eau, assainissement et environnement",
      "contact": "Nous Contacter",
      "services": "Nos Services"
    },

    "detail": {
      "overview": "Aperçu du Projet",
      "scope": "Portée des Travaux",
      "outcomes": "Résultats & Impact",
      "related_topics": "Sujets Connexes",
      "partners": "Partenaires & Collaborateurs",
      "main_partners": "Partenaires Principaux",
      "execution_partners": "Partenaires d'Exécution",
      "technical_partners": "Partenaires Techniques & Financiers",
      "project_info": "Informations sur le Projet",
      "category": "Catégorie",
      "region": "Région",
      "year": "Année",
      "status": "Statut",
      "date": "Date",
      "duration": "Durée",
      "location": "Localisation",
      "capacity": "Capacité",
      "share": "Partager le Projet",
      "related_projects": "Projets Connexes",
      "link_copied": "Lien copié dans le presse-papiers!",
      "cta": {
        "title": "Intéressé par des Projets Similaires?",
        "description": "Contactez-nous pour discuter de comment nous pouvons soutenir vos initiatives",
        "contact": "Nous Contacter",
        "back_to_projects": "Retour à Tous les Projets"
      },
      "not_found": {
        "title": "Projet Non Trouvé",
        "message": "Le projet que vous recherchez n'existe pas ou a été supprimé",
        "back_to_projects": "Retour aux Projets"
      }
    }
  }
}
```

---

## Notes

- The existing `projects` section already contains individual project data (studies, evaluations, management, urban_services, other_achievements)
- These new keys add the UI/UX text for the Projects Domain pages
- Insert these translations carefully to avoid duplicating any existing keys
- The filter placeholder uses `{count}` and `{filters}` as dynamic interpolation variables

## Implementation Status

- ✅ Project data file created with 30+ projects
- ✅ Domain module registered in nuxt.config.ts
- ✅ Vue components created (ProjectCard, ProjectFilters, projects page, project-detail page)
- ⏳ Translations need to be manually added to locale files (see above)
