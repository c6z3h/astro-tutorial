// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: 'https://c6z3h.github.io',
    base: '/astro-tutorial',
    integrations: [mdx(), sitemap(), preact()],
});