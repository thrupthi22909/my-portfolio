// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// replace 'your-username' and 'repo-name' accordingly
export default defineConfig({
  base: '/my-portfolio/', // this is your repo name
  plugins: [react()],
});
