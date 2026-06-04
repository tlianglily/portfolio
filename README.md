# Lily Liang Portfolio

Personal portfolio site for Lily Liang, built with Next.js, React, and TypeScript.

## Project Structure

- `src/app/page.tsx` - homepage and selected work
- `src/app/about/page.tsx` - about page content from `Lily_Liang_About_Page.docx`
- `src/app/projects/` - individual case study pages and the project index
- `src/app/resume/page.tsx` - resume page
- `src/components/` - shared navigation, footer, project layout, and reusable cards
- `public/images/` - optimized portfolio images and media
- `public/uploads/` - downloadable resume assets

## Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Verification

Use these checks before shipping changes:

```bash
npm run lint
npm run build
```

## Content Notes

The site uses the existing visual system defined in `src/app/globals.css`: Fraunces display type, DM Sans body type, the cream background, red accent, thin rules, and shared CTA/button treatments. Keep new pages aligned with those tokens and patterns instead of introducing a separate design system.
