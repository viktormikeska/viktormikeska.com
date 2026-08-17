# viktormikeska.com

Personal portfolio site for Viktor Mikeska — a single-page, fully static site built with [Astro](https://astro.build).

## Tech stack

- [Astro](https://astro.build) — static output, no UI framework; interactive bits are plain TypeScript
- Self-hosted fonts via [Fontsource](https://fontsource.org) (Inter, JetBrains Mono)
- Deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions on every push to `main`

## Development

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Commands

| Command             | Action                                         |
| :------------------ | :---------------------------------------------- |
| `npm install`        | Install dependencies                            |
| `npm run dev`         | Start the local dev server                      |
| `npm run build`       | Build the production site to `./dist/`          |
| `npm run preview`     | Preview the production build locally            |
| `npm run astro ...`   | Run any Astro CLI command (e.g. `astro check`)  |

## Project structure

```
src/
├── assets/       # images processed through Astro's image pipeline
├── components/   # page sections — Hero, Bio, Experience, Contact, etc.
├── data/         # typed content — nav links, socials, work history, etc.
├── layouts/      # BaseLayout — head/meta/SEO
├── pages/        # index.astro, the single page
└── styles/       # global CSS — theme tokens, reset
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages, served at [viktormikeska.com](https://viktormikeska.com).
