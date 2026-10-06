import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO client : confirmer le nom de domaine définitif (malingeassocies.fr ?).
  site: "https://www.malingeassocies.fr",
  // Forme canonique unique : trailing slash partout (canonical, sitemap et
  // liens internes alignés).
  trailingSlash: "always",
  // Les pages /apercu/ (variantes de hero) restent hors sitemap et noindex.
  integrations: [sitemap({ filter: (page) => !page.includes("/apercu/") })],
  vite: {
    plugins: [tailwindcss()],
  },
});
