// @ts-check
import { defineConfig } from 'astro/config';
import { brand } from './src/brand.js';

// Until the custom domain is attached, GitHub Pages serves the site under
// https://<user>.github.io/<repo>/ — the workflow sets these two variables in
// that case so links and assets resolve. With a CNAME present they are unset
// and the canonical brand URL is used.
const site = process.env.ASTRO_SITE ?? brand.url;
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'sl',
    locales: ['sl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
