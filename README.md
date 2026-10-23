## Ivan Matos — Portfolio

Personal portfolio built with Astro, TypeScript strict mode, Tailwind CSS v4, MDX content collections, and Motion.

### Local development

```bash
pnpm install
pnpm dev
```

### Production build

```bash
pnpm build
pnpm preview
```

The Dockerfile builds the static site in a Node stage and serves it with Nginx, ready for Dokploy.

### Content notes

Project pages live in `src/content/projects/` and are intentionally marked as placeholders until verified project details are available. Replace the placeholder experience entries in `src/data/site.ts` before publishing.

Update the canonical URL in `astro.config.mjs` and the contact address in `src/pages/index.astro` when the final domain and email are confirmed.
