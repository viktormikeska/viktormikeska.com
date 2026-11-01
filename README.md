# viktormikeska.com

Personal site and security writeups of Viktor Mikeska — a fully static site built with [Astro](https://astro.build).

## Tech stack

- [Astro](https://astro.build) — static output, no UI framework; interactive bits are plain TypeScript
- Self-hosted fonts via [Fontsource](https://fontsource.org) (JetBrains Mono)
- `@astrojs/sitemap` and `@astrojs/rss` (`/rss.xml`)
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions on every push to `main`

## Development

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Commands

| Command             | Action                                         |
| :------------------ | :--------------------------------------------- |
| `npm install`       | Install dependencies                           |
| `npm run dev`       | Start the local dev server                     |
| `npm run build`     | Build the production site to `./dist/`         |
| `npm run preview`   | Preview the production build locally           |
| `npm run astro ...` | Run any Astro CLI command (e.g. `astro check`) |

## Writing a writeup

Add a Markdown file to `src/content/writeups/` — the filename becomes the URL slug (`/writeups/<slug>/`).

```md
---
title: 'My writeup'
date: 2026-11-01
tags: ['web', 'idor']
summary: 'One or two sentences shown in lists, RSS and social previews.'
draft: false
# image: '/og/my-writeup.png'   # optional social preview, path in /public
---
```

Drafts (`draft: true`) show up in `npm run dev` with a draft badge, but are excluded from the production build, RSS feed and sitemap.

## Project structure

```
src/
├── content/writeups/  # Markdown writeups
├── content.config.ts  # writeup frontmatter schema
├── components/        # Header, Footer, CommandLine, WriteupList, SocialLinks, …
├── data/              # site config, nav, social links
├── layouts/           # BaseLayout (head/SEO), WriteupsIndexLayout (archive), WriteupLayout (article)
├── lib/               # writeups query, command-line typing timings
├── pages/             # /, /writeups/ (+ /writeups/page/<n>/), /writeups/<slug>/, /contact/, /rss.xml
└── styles/            # global CSS — theme tokens, reset, reveal animation
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages, served at [viktormikeska.com](https://viktormikeska.com).
