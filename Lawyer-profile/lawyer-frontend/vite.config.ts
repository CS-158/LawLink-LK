import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disable the error overlay if needed
    },
  },
  css: {
    postcss: './postcss.config.cjs', // Point to the correct PostCSS config file
  },
});