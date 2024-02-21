import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import simpleStackStream from "simple-stack-stream";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), simpleStackStream()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});