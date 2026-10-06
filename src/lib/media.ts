// Détection automatique des images déposées dans src/assets/.
//
// Convention : un dossier par entité, les fichiers sont triés par nom
// (préfixer `01-`, `02-`… pour contrôler l'ordre). Aucune importation à
// écrire : déposer les photos suffit.
//
//   src/assets/produits/<slug>/*.{jpg,png,webp}     → pages et cartes produits
//   src/assets/realisations/<slug>/*.{jpg,png,webp} → réalisations (1re = couverture)
//   src/assets/partenaires/<slug>.{png,svg,webp}    → logos partenaires
//   src/assets/hero/*.{jpg,png,webp}                → visuel du hero d'accueil
//   src/assets/showroom/*.{jpg,png,webp}            → showroom (entreprise, contact)
//   src/assets/histoire/*.{jpg,png,webp}            → page L'entreprise

import type { ImageMetadata } from "astro";

type Glob = Record<string, { default: ImageMetadata }>;

const produitsGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/produits/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);
const realisationsGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/realisations/**/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);
const partenairesGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/partenaires/*.{jpg,jpeg,png,webp,svg,avif}",
  { eager: true },
);
const heroGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/hero/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);
const showroomGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/showroom/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);
const histoireGlob = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/histoire/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

function sorted(glob: Glob, filter: (path: string) => boolean): ImageMetadata[] {
  return Object.entries(glob)
    .filter(([p]) => filter(p))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);
}

export const imagesProduit = (slug: string): ImageMetadata[] =>
  sorted(produitsGlob, (p) => p.includes(`/produits/${slug}/`));

export const imagesRealisation = (slug: string): ImageMetadata[] =>
  sorted(realisationsGlob, (p) => p.includes(`/realisations/${slug}/`));

export const logoPartenaire = (slug: string): ImageMetadata | undefined =>
  sorted(partenairesGlob, (p) => new RegExp(`/partenaires/${slug}\\.[a-z]+$`).test(p))[0];

export const imagesHero = (): ImageMetadata[] => sorted(heroGlob, () => true);
export const imagesShowroom = (): ImageMetadata[] => sorted(showroomGlob, () => true);
export const imagesHistoire = (): ImageMetadata[] => sorted(histoireGlob, () => true);
