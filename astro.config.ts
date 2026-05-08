import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  site: 'https://ojo-ai.github.io',
  base: '/liam',
  integrations: [tailwind(), sitemap(), mdx()],
});
