import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Réalisations : un fichier Markdown par chantier dans src/content/realisations/.
// Les photos vont dans src/assets/realisations/<slug>/ (détection automatique,
// voir src/lib/media.ts). `gallery` = légendes optionnelles, dans l'ordre des
// fichiers (tri alphabétique).
const realisations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/realisations" }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    year: z.number().optional(),
    /** Slugs de catégories produits concernées (src/data/produits.ts). */
    produits: z.array(z.string()).default([]),
    /** Origine du contenu : reportage MéO, photos SyBaie, publication Facebook… */
    source: z.string().optional(),
    description: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { realisations };
