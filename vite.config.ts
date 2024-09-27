import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/art-museum',
  plugins: [react()],
  resolve: {
    alias: {
      tests: '/src/tests',
      helpers: '/src/helpers',
      api: '/src/api',
      components: '/src/components',
      constants: '/src/constants',
      hooks: '/src/hooks',
      assets: '/src/assets',
      pages: '/src/pages',
      layouts: '/src/layouts',
    },
  },
});
