import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: 'https://turkelglobal.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});