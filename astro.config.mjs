import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import simpleStackStream from "simple-stack-stream";
import react from "@astrojs/react";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), simpleStackStream(), react(), simpleStackForm()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});