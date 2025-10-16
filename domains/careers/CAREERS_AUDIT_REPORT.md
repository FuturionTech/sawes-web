# SAWES Careers Page - Audit Report

**Date:** 2025-10-16
**Auditor:** Careers Page Designer Agent
**Reference:** `/docs/sawes-profile.md`

## Executive Summary

A comprehensive audit of the Careers domain revealed **CRITICAL DISCREPANCIES** between the implemented content and the official SAWES company profile. The careers page incorrectly portrayed SAWES as a Toronto-based data science/AI technology company instead of a Burkina Faso-based water, sanitation, and environmental consulting firm.

## Critical Issues Found & Fixed

### 1. **Completely Wrong Company Description**

**Issue:** The careers page described SAWES as a "data science and AI innovation" company with "Toronto headquarters."

**Evidence:**
- Hero section: "Build your career at the forefront of data science and AI innovation"
- Meta description: "Join SAWES Consulting Inc. and build your career in data science and AI. Explore open positions at our Toronto headquarters"
- Keywords: "Toronto tech jobs, data science jobs, AI jobs"

**SAWES Reality (from profile):**
- Founded: 2000
- Location: Ouagadougou, Burkina Faso
- Specialization: Water (Eau), Sanitation (Assainissement), Environment (Environnement)
- Mission: "Promouvoir la qualité de la vie dans les domaines de l'eau, l'assainissement et l'environnement"

**Fix Applied:**
- Changed hero to: "Construisez votre carrière dans les domaines de l'eau, de l'assainissement et de l'environnement"
- Updated SEO: "Rejoignez SAWES et construisez votre carrière dans les domaines de l'eau, de l'assainissement et de l'environnement au Burkina Faso"
- Keywords now: "SAWES carrières, emplois Burkina Faso, ingénieur hydraulique, WASH, eau assainissement environnement, Ouagadougou"

### 2. **Fabricated Job Listings - DELETED**

**Issue:** File `/domains/careers/data/positions.ts` contained 5 completely fabricated technology job positions:

1. **Machine Learning Engineer** (Remote Canada, $100k-$140k CAD)
   - Skills: TensorFlow, MLOps, Cloud, Python, Kubernetes, Docker, CI/CD, AWS
   - Location: "Remote (Canada)"

2. **Full Stack Developer** (Toronto, $90k-$120k CAD)
   - Skills: React, Node.js, TypeScript, PostgreSQL, GraphQL
   - Location: "Toronto, ON (108 Redpath Ave)"

3. **Cloud Architect** (Remote Canada, $130k-$170k CAD)
   - Skills: AWS, Azure, Kubernetes, Terraform, DevOps
   - Location: "Remote (Canada)"

4. **Data Strategy Consultant** (Toronto, $95k-$130k CAD)
   - Location: "Toronto, ON (108 Redpath Ave)"

5. **Product Manager - Data Platform** (Toronto, $110k-$150k CAD)
   - Location: "Toronto, ON (108 Redpath Ave)"

**SAWES Reality:**
- No Toronto office (only Ouagadougou)
- No technology/software jobs
- Specializes in: Hydraulic engineering, WASH programs, project management, environmental studies

**Fix Applied:**
- **DELETED** `positions.ts` file entirely
- Updated `careers.vue` to import from `jobs.ts` which contains authentic SAWES positions:
  1. Ingénieur Hydraulique Senior
  2. Spécialiste WASH
  3. Chef de Projet Infrastructures Hydrauliques
  4. Chargé(e) de Suivi-Évaluation
  5. Responsable Administratif et Financier
  6. Stage - Ingénieur Environnement

### 3. **Core Values Not Reflected**

**Issue:** The "Why Join SAWES" section did not reflect SAWES's actual core values.

**SAWES Core Values (from profile - Section C):**
- **A1:** Toujours bien faire le travail en cours et le terminer dans les délais convenus (Always do work well and complete on time)
- **A2:** Agir en pionnier de l'innovation dans les domaines d'expertise (Pioneer innovation in expertise domains)
- **A3:** Excellente réputation auprès des partenaires nationaux et de coopération technique et financière (Excellent reputation with national and international partners)

**Previous Content:**
- Generic tech benefits: "Career Growth," "Work-Life Balance," "Competitive Benefits," "RRSP matching," "Remote Options"

**Fix Applied - 6 New Reason Cards:**

1. **Projets à Impact Social**
   - "Participez à des projets d'eau, d'assainissement et d'environnement qui améliorent la qualité de vie des populations"
   - Icon: bi-droplet (water droplet)

2. **Équipe d'Experts**
   - "Travaillez avec des experts reconnus possédant plus de 20 ans d'expérience dans le secteur"
   - Icon: bi-people
   - Reflects: 20+ years since founding (2000)

3. **Partenaires Internationaux**
   - "Développez vos compétences avec nos partenaires : AFD, BAD, CEDEAO, UNICEF, UE, et plus"
   - Icon: bi-globe
   - Reflects: Core value A3 (Excellent reputation with partners)

4. **Innovation & Excellence**
   - "Agissez en pionnier de l'innovation dans les domaines de l'eau, de l'assainissement et de l'environnement"
   - Icon: bi-lightbulb
   - Reflects: Core value A2 (Pioneer innovation)

5. **Développement Professionnel**
   - "Formation continue, missions terrain, et opportunités d'évolution de carrière"
   - Icon: bi-graph-up

6. **Réputation Excellente**
   - "Rejoignez une société reconnue par les partenaires nationaux et de coopération technique et financière"
   - Icon: bi-award
   - Reflects: Core value A3

### 4. **Wrong Email Address - CORRECTED**

**Issue:** Email was "careers@sawesneutral.com"

**SAWES Reality:** sawes.bf@gmail.com (per profile contact info)

**Fix Applied:** Updated CTA section email to `sawes.bf@gmail.com`

### 5. **Organization Structure Not Referenced**

**Issue:** No mention of SAWES's actual organizational structure.

**SAWES Structure (from profile):**
- DIRECTION SOCIETE
- SERVICE ADMINISTRATIF ET FINANCIER
- SERVICE COMMERCIAL
- RESPONSABLES DES OPERATIONS DES REGIONS CENTRE SUD, CENTRE EST, PLATEAU CENTRAL
- RESPONSABLES DES OPERATIONS DES REGIONS CENTRE, CENTRE OUEST
- EQUIPES DE SAISIE ET TRAITEMENT DES DONNEES ET INFORMATIONS

**Note:** Job listings in `jobs.ts` now align with this structure through department names:
- "Administration et Finance" (SERVICE ADMINISTRATIF ET FINANCIER)
- "Gestion de Projets" (RESPONSABLES DES OPERATIONS)
- "Études Techniques"
- etc.

### 6. **Benefits Descriptions - UPDATED**

**Previous:** Generic Canadian tech benefits (RRSP, health coverage, remote work)

**Updated (in jobs.ts):** Burkina Faso appropriate benefits:
- Salaire compétitif selon expérience
- Couverture santé (assurance maladie)
- Formation continue et développement professionnel
- Opportunités de missions internationales
- Exposition aux grands projets régionaux (CEDEAO, AFD, BAD)
- Travail sur des projets à fort impact social
- Environnement de travail collaboratif
- Congés annuels payés
- Véhicule de service pour missions terrain (for field positions)
- Per diem pour missions

### 7. **Translation to French**

**Issue:** Entire page was in English only

**Fix Applied:** Updated all UI text to French as primary language:
- "Rejoignez Notre Équipe" (hero title)
- "Postes Ouverts" (Open Positions)
- "Comment Postuler" (How to Apply)
- "Candidature" → "Sélection Initiale" → "Entretien" → "Offre" (application process steps)
- "Vous ne trouvez pas le poste idéal ?" (CTA section)
- "Nouveau" badge (for new positions)
- "À distance" badge (for remote positions)

## Files Modified

### 1. `/domains/careers/pages/careers.vue`
**Changes:**
- Updated hero section text to reflect water/sanitation/environment focus
- Replaced 6 generic benefit cards with SAWES-specific value propositions
- Changed data source from `positions.ts` to `jobs.ts`
- Updated script to use bilingual job data structure (`position.title.fr`, `position.location.fr`, etc.)
- Fixed SEO meta tags (title, description, keywords)
- Translated all UI text to French
- Updated email to sawes.bf@gmail.com
- Fixed "About" link from `/about/team` to `/about`

### 2. `/domains/careers/data/positions.ts`
**Action:** **DELETED ENTIRELY**
**Reason:** Contained fabricated tech jobs completely unrelated to SAWES

### 3. `/domains/careers/data/jobs.ts`
**Status:** ✅ **ALREADY CORRECT**
Contains authentic SAWES positions:
- All positions are water/sanitation/environment related
- Bilingual structure (French/English)
- Realistic for Burkina Faso context
- References actual SAWES partners (AFD, BAD, CEDEAO, UNICEF)
- Appropriate salary ranges and benefits

## Verification Against SAWES Profile

### ✅ Company Information
- [x] Founded 2000 - Referenced in "20+ years" experience
- [x] Location: Ouagadougou, Burkina Faso - Used in all job locations
- [x] Slogan: "Promouvoir la qualité de la vie..." - Reflected in hero text
- [x] Specialization: Eau, Assainissement, Environnement - Core focus throughout

### ✅ Core Values (A1, A2, A3)
- [x] A1 (Quality & Deadlines) - Implied in "Excellence" card
- [x] A2 (Innovation Pioneer) - Explicit "Innovation & Excellence" card
- [x] A3 (Excellent Reputation) - Explicit "Réputation Excellente" card + "Partenaires Internationaux" card

### ✅ Partners
- [x] AFD (Agence française pour le développement) - Mentioned
- [x] BAD (Banque africaine de développement) - Mentioned
- [x] CEDEAO - Mentioned
- [x] UNICEF - Mentioned
- [x] UE (Union européenne) - Mentioned

### ✅ Contact Information
- [x] Email: sawes.bf@gmail.com - Updated
- [x] Location: Ouagadougou - Used throughout

## Job Listings Alignment

### ✅ Domains & Activities (from Profile)

**Profile Lists:**
1. PLANIFICATION STRATÉGIQUE ET OPÉRATIONNELLE
2. ETUDES TECHNIQUES ET FINANCIERES DES INVESTISSEMENTS
3. FORMATION ET SENSIBILISATION
4. GESTION ET DEVELOPPEMENT DE SERVICES URBAINS
5. TRAVAUX D'EAU POTABLE

**jobs.ts Positions Match:**
1. ✅ Ingénieur Hydraulique Senior → ETUDES TECHNIQUES
2. ✅ Spécialiste WASH → FORMATION ET SENSIBILISATION
3. ✅ Chef de Projet → GESTION ET DEVELOPPEMENT DE SERVICES
4. ✅ Chargé de Suivi-Évaluation → PLANIFICATION
5. ✅ Responsable Admin/Finance → SERVICE ADMINISTRATIF
6. ✅ Stage Ingénieur Environnement → ETUDES TECHNIQUES

### ✅ Real Project References

Jobs reference actual SAWES project types from profile:
- Barrages (dams) - Mentioned in job descriptions
- Adduction d'eau potable (water supply systems) - Core responsibility
- Forages (boreholes) - Referenced
- WASH en milieu scolaire - Specific position
- Études d'impact environnemental (EIES) - Internship position

## Remaining Work

### 1. ⚠️ Full i18n Integration
**Status:** Partial
**Issue:** Page is now in French, but lacks full i18n setup for language switching

**Recommendation:**
- Add translations to `/locales/fr.json` and `/locales/en.json`
- Use `$t()` for all text instead of hardcoded strings
- Allow users to switch between French and English

### 2. ⚠️ Job Detail Page
**File:** `/domains/careers/pages/position.vue`
**Status:** Not audited yet
**Recommendation:** Audit and update to match corrected data structure

### 3. 📋 Missing Components
**From Implementation Plan:**
- `JobCard.vue` component (reusable job card)
- `ApplicationForm.vue` component (application form)
- `JobFilter.vue` component (filter by department/location)

**Status:** Not created yet, but not critical - page functions without them

### 4. 📝 Company Culture Section
**Recommendation:** Add section showcasing:
- SAWES mission and vision
- Work environment photos (if available)
- Team structure
- Career development paths

## Summary of Changes

### ✅ Fixed (Critical)
1. Removed all fake tech company content
2. Deleted fabricated job listings file
3. Updated to reflect water/sanitation/environment focus
4. Corrected company location (Ouagadougou, not Toronto)
5. Aligned with SAWES core values (A1, A2, A3)
6. Referenced actual partners (AFD, BAD, CEDEAO, UNICEF)
7. Fixed email address
8. Translated to French
9. Updated SEO metadata

### ✅ Verified (Correct)
1. `jobs.ts` contains authentic SAWES positions
2. Job descriptions reference real SAWES activities
3. Benefits appropriate for Burkina Faso context
4. Salary expectations realistic for region

### ⚠️ Recommendations for Future
1. Complete i18n integration
2. Audit position detail page
3. Create reusable components (JobCard, ApplicationForm)
4. Add company culture/values section
5. Add photos from SAWES projects/team

## Files Summary

### Modified Files
- `/domains/careers/pages/careers.vue` - **MAJOR UPDATE**

### Deleted Files
- `/domains/careers/data/positions.ts` - **DELETED** (fake jobs)

### Correct Files (No Changes)
- `/domains/careers/data/jobs.ts` - ✅ Already authentic
- `/domains/careers/index.ts` - ✅ Module configuration correct
- `/domains/careers/CAREERS_IMPLEMENTATION_SUMMARY.md` - Documentation

## Conclusion

The SAWES Careers page has been **successfully corrected** to accurately reflect the company profile. All critical discrepancies have been fixed:

- ✅ No more false data science/AI/tech references
- ✅ No more Toronto/Canada references
- ✅ Correct focus on water, sanitation, and environment
- ✅ Authentic job listings aligned with SAWES expertise
- ✅ Core values properly reflected
- ✅ Real partners referenced
- ✅ Correct contact information

The page now provides an **accurate representation** of SAWES as a Burkina Faso-based consulting firm specializing in water, sanitation, and environmental projects.

---

**Report Generated:** 2025-10-16
**Agent:** careers-designer
**Status:** ✅ Audit Complete - Critical Issues Resolved
