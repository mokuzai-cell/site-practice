import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';


// https://astro.build/config
export default defineConfig({
  site:'https://mokuzai-cell.guthub.io',
  base:'site-practice',
  integrations: [vue()],
});