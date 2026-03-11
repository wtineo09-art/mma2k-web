import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel'; // <--- Añade esto

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel() // <--- Añade esto también
});