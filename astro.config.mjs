import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO client : confirmer le nom de domaine définitif (malingeassocies.fr ?).
  site: "https://www.malingeassocies.fr",
  // Forme canonique unique : trailing slash partout (canonical, sitemap et
  // liens internes alignés).
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
