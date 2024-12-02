import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: "/Portfolio/", // Chemin correspondant au nom du dépôt
  site: "https://bastien-llorca.github.io/Portfolio",
});
