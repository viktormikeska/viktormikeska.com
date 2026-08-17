// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// TODO: remove `base` once the custom domain (viktormikeska.com) is live —
// it's only needed for the interim https://viktormikeska.github.io/viktormikeska.com/
// testing URL, since the repo isn't named <username>.github.io. A custom
// domain always serves from root regardless of repo name.
export default defineConfig({
  site: 'https://viktormikeska.com',
  base: '/viktormikeska.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});