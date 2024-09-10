// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  devToolbar: { enabled: false },
  site: 'https://tacoenjoyer.github.io',
  base: 'gdvnps-web-but-page-idk',
});