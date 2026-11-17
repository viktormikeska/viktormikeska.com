// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://viktormikeska.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});