import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercelEdge from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercelEdge(),
  integrations: [tailwind(), react()],
});
