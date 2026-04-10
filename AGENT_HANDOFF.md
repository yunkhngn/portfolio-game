# Agent Handoff - Open Source Portfolio Template

## Project Summary
- **Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, Contentful SDK
- **Architecture**: Configuration-driven with optional Contentful CMS integration.
- **Main Goal**: A professional, generalized portfolio template for creative strategists and marketers.

## Current State
- **Generalization Complete**: All hardcoded personal branding and content have been moved to a configuration-driven system.
- **Dual Mode Support**:
  - **Local Mode**: Uses `src/config/portfolio.ts` and `src/config/site.ts` if Contentful environment variables are missing.
  - **CMS Mode**: Dynamically fetches data from Contentful if configured.
- **Component Updates**:
  - `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`, `Motto.tsx`, and `MarqueeBand.tsx` are all fully dynamic.
- **Cleanup**: Obsolete files like `Huy_Portfolio.pdf` and `src/lib/mock-data.ts` have been removed.

## Configuration Entry Points
- `src/config/site.ts`: Site-wide settings (Name, Title, SEO, Social Links, Contact Icons).
- `src/config/portfolio.ts`: Portfolio data (Hero, Bio, Projects, Experiences, Services, Motto, Marquee).

## Files To Know
- `src/lib/contentful.ts`: Unified data fetching layer with fallback logic.
- `src/config/`: Local data sources.
- `contentful/setup-content-models.md`: Guide for setting up the CMS schema.
- `README.md`: New professional documentation for the open-source template.

## Important Design Patterns
1. **Fallback Logic**: Always ensure `src/lib/contentful.ts` provides a graceful fallback to `src/config/` for every data fetcher.
2. **Standardized Props**: Components should accept a `data` prop of a type defined in `src/lib/types.ts`.
3. **Responsive Editorial Style**: Maintains high-contrast, Behance-like editorial composition.

## Notes / Caution
- Do **not** re-introduce hardcoded strings in components. Always use the configuration system.
- Ensure any new Contentful models added are documented in `contentful/setup-content-models.md`.
- Maintain the snap-scrolling behavior for the sections as it is a core design feature.
