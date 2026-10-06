// Frise chronologique de l'entreprise (page d'accueil + page L'entreprise).
// Source : notes manuscrites « Histoire Malinge » (sept. 2026).
// Icônes : clés de src/components/sections/HistoireFrise.astro.

export interface Etape {
  annee: string;
  titre: string;
  texte: string;
  icone: "home" | "tag" | "building" | "users";
}

export const etapes: Etape[] = [
  {
    annee: "2005",
    titre: "Création de l'entreprise",
    texte: "Michaël Malinge fonde l'entreprise de menuiserie au Pin-en-Mauges.",
    icone: "home",
  },
  {
    annee: "2021",
    titre: "Malinge & Associés",
    texte: "L'entreprise change de nom et devient Malinge & Associés, avec l'arrivée de nouveaux associés.",
    icone: "tag",
  },
  {
    annee: "2023",
    titre: "Achat du bâtiment et création du showroom",
    texte: "L'entreprise acquiert ses locaux, rue Louis Raimbault, et y ouvre un showroom pour présenter menuiseries et agencements.",
    icone: "building",
  },
  {
    annee: "2026",
    titre: "Une équipe de 8 collaborateurs",
    texte: "Associés, salariés, apprenti et secrétaire : une équipe complète, de l'étude à la pose.",
    icone: "users",
  },
];

/** Piliers « Expertise sur mesure » — notes manuscrites. */
export const expertise = [
  {
    titre: "Conseil personnalisé",
    texte: "Au showroom ou chez vous : nous étudions votre projet et dessinons vos plans sur mesure.",
  },
  {
    titre: "Accompagnement technique",
    texte: "Choix des matériaux, performances thermiques, contraintes de pose : nous vous guidons à chaque étape.",
  },
  {
    titre: "Pose par nos équipes",
    texte: "Fabrication ou fourniture, puis pose réalisée par nos propres menuisiers, sans sous-traitance.",
  },
];

/** Engagements « Entreprise responsable » — notes manuscrites. */
export const engagements = [
  {
    titre: "Produits certifiés et recyclables",
    texte: "Sélection de menuiseries et matériaux certifiés, conçus pour durer et être recyclés.",
  },
  {
    titre: "Éco-retour des anciennes menuiseries",
    texte: "Nous récupérons vos anciennes menuiseries lors de la dépose pour les orienter vers les bonnes filières.",
  },
  {
    titre: "Tri des déchets",
    texte: "Tri systématique des déchets de chantier et d'atelier.",
  },
];
