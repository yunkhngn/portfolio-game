# Agent Handoff - Portfolio Project

## Project Summary
- Stack: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Contentful SDK
- Package manager currently working: Yarn with `node-modules` linker
- Main goal: Single-page portfolio for Ly Gia Huy with editorial Behance-like style

## Current State
- Landing page is implemented and running
- Contentful integration exists with mock fallback data
- Mock data populated from `Huy_Portfolio.pdf`
- Hero was redesigned to match Behance-style editorial composition
- Projects were changed from card-grid to full-height editorial sections on the same landing page
- Snap scrolling has been applied to landing sections
- Navigation updates:
  - Transparent on top (for dark hero)
  - Becomes light/blur after scroll

## Important Decisions Already Made
1. **No separate project routes**: all projects are shown on one landing page
2. **Projects as full-height sections**: each project is a viewport section
3. **Snap scrolling**: section-to-section snap behavior is expected
4. **Mock-first fallback**: if Contentful is not configured, site still renders complete content

## Files To Know
- `src/app/page.tsx` - landing assembly
- `src/components/Hero.tsx` - editorial hero
- `src/components/Projects.tsx` - full-height project sections
- `src/components/Navigation.tsx` - transparent-to-solid nav behavior
- `src/lib/mock-data.ts` - seeded portfolio content (Huy)
- `src/lib/contentful.ts` - CMS fetch + fallback logic
- `src/app/globals.css` - theme + snap-scroll classes
- `contentful/setup-content-models.md` - CMS schema guide
- `.yarnrc.yml` - `nodeLinker: node-modules`

## Recent User Request Trend
User wants visual fidelity close to Behance references and strong section-based storytelling.
Latest requests focused on:
- Hero fidelity
- Nav blending with dark hero
- Full-height project sections on single landing
- Snap scrolling behavior

## Run Locally
```bash
yarn install
yarn dev
```

## Notes / Caution
- Do **not** re-introduce separate project routes unless user explicitly asks
- Keep one-page structure
- Keep high-contrast editorial style
- If changing scroll behavior, ensure nav scroll detection still works with snap container

## Suggested Next Checks (if continuing)
1. Fine-tune snap behavior on mobile (iOS momentum + section heights)
2. Polish spacing/typography per section to match reference closer
3. Replace placeholder media with real assets once user provides them
4. Wire Contentful entries for project-specific decorative fields if needed
