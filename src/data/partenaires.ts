// Partenaires et fournisseurs (bandeau de logos en page d'accueil).
// Source : wireframe manuscrit. Déposer les logos dans src/assets/partenaires/
// avec le nom de fichier `<slug>.png|svg|webp` : ils sont détectés automatiquement
// (voir src/lib/media.ts). Sans logo, le nom est affiché en texte.

export interface Partenaire {
  slug: string;
  nom: string;
  /** Rôle / spécialité affiché au survol. */
  role: string;
  /** Lien : page du site (chemin) ou site du fournisseur (URL). */
  url?: string;
  /** Mise en avant (badge « Menuisier d'Excellence »). */
  principal?: boolean;
}

export const partenaires: Partenaire[] = [
  {
    slug: "meo",
    nom: "MéO",
    role: "Menuiseries bois-alu — Menuisier d'Excellence",
    url: "/menuisier-excellence-meo/",
    principal: true,
  },
  { slug: "cedmat", nom: "Cedmat", role: "Fermetures et portes de garage" },
  { slug: "somfy", nom: "Somfy", role: "Motorisation et domotique", url: "https://www.somfy.fr/" },
  // TODO client : nom complet de « S.B ».
  { slug: "sb", nom: "S.B", role: "Fournisseur" },
  // TODO client : nom complet de « Men 85 » (Menuiseries 85 ?).
  { slug: "men85", nom: "Men 85", role: "Menuiseries" },
  { slug: "batistyl", nom: "Batistyl", role: "Menuiseries PVC et aluminium" },
  { slug: "sybaie", nom: "SyBaie", role: "Menuiseries aluminium" },
  { slug: "jde", nom: "JDE", role: "Fournisseur" },
  { slug: "a-l-envers-du-decor", nom: "À l'envers du décor", role: "Agencement et décoration" },
  { slug: "leroux", nom: "Leroux", role: "Fournisseur" },
];
