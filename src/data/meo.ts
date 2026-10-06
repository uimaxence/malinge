// MéO, fabricant partenaire principal : Malinge & Associés est membre du Club
// des Menuisiers d'Excellence MéO. Source unique des textes et liens MéO du
// site (aucune URL MéO en dur dans un composant).
// Faits relevés sur fenetremeo.com et portemeo.com le 1er octobre 2026.

export interface ProduitMeo {
  nom: string;
  texte: string;
  /** Page du produit sur le site MéO. */
  url: string;
  /** Catégorie Malinge correspondante (slug de produits.ts). */
  produit?: string;
}

export interface Meo {
  nom: string;
  site: string;
  configurateur: string;
  catalogues: string;
  club: string;
  extensionGarantie: string;
  conditionsGarantie: string;
  presentation: string;
  alliance: string[];
  gamme: ProduitMeo[];
  clubDepuis: number;
  engagements: string[];
  garantie: { duree: string; texte: string; activation: string };
}

export const meo: Meo = {
  nom: "MéO",
  site: "https://www.fenetremeo.com/",
  /** Configurateur de porte d'entrée MéO (site dédié). */
  configurateur: "https://www.portemeo.com/",
  catalogues: "https://www.fenetremeo.com/nos-catalogues/",
  club: "https://www.fenetremeo.com/menuisiers-dexcellence/",
  extensionGarantie: "https://www.fenetremeo.com/extension-de-garantie/",
  conditionsGarantie: "https://www.fenetremeo.com/conditions-relatives-a-lextension-de-garantie/",

  presentation:
    "Créateur de la fenêtre bois-aluminium en 1983, MéO fabrique ses fenêtres, portes d'entrée et baies sur mesure à Cugand, en Vendée. Le bois à l'intérieur pour la chaleur, l'aluminium à l'extérieur pour la résistance et l'absence d'entretien.",

  /** Ce que MéO publie sur l'alliance bois-aluminium. */
  alliance: [
    "Le bois à l'intérieur : 13 finitions, chêne ou pin",
    "L'aluminium à l'extérieur : 28 couleurs, un simple nettoyage à l'éponge",
    "Bois issu de forêts gérées durablement (PEFC), menuiseries certifiées NF",
  ],

  gamme: [
    {
      nom: "Fenêtres bois-aluminium",
      texte: "Ouvrant à la française, oscillo-battant ou fixe, sur mesure, dans toutes les finitions bois et couleurs aluminium de la gamme.",
      url: "https://www.fenetremeo.com/produit/fenetres-bois-aluminium/",
      produit: "fenetres",
    },
    {
      nom: "Portes d'entrée bois-aluminium",
      texte: "82 modèles pleins, vitrés ou semi-vitrés, à composer en ligne : forme, couleurs, vitrage, poignée.",
      url: "https://www.fenetremeo.com/porte-entree/",
      produit: "porte-entree",
    },
    {
      nom: "Baies coulissantes bois-aluminium",
      texte: "De grandes ouvertures, fines et résistantes, avec une version motorisée et connectée.",
      url: "https://www.fenetremeo.com/produit/baies-coulissantes-bois-aluminium/",
      produit: "fenetres",
    },
    {
      nom: "Verrières et murs-rideaux",
      texte: "Pour les extensions et les grandes surfaces vitrées, en bois-aluminium.",
      url: "https://www.fenetremeo.com/produit/verrieres-murs-rideaux-bois-aluminium/",
    },
    {
      nom: "MéO Connect",
      texte: "Baie coulissante motorisée, volets, brise-soleil et poignée connectés, pilotés avec Somfy.",
      url: "https://www.fenetremeo.com/produit/produits-connectes/",
      produit: "fermetures",
    },
  ],

  /** Ce que le label engage, tel que MéO le présente. */
  clubDepuis: 2012,
  engagements: [
    "Installateur formé par MéO sur toute la gamme bois-aluminium",
    "Pose dans les règles de l'art, conforme aux normes en vigueur",
    "Un interlocuteur unique, du devis à la pose",
    "Service après-vente en lien direct avec MéO",
  ],

  /** Extension de garantie réservée aux clients des Menuisiers d'Excellence. */
  garantie: {
    duree: "15 ans",
    texte:
      "Les fenêtres, baies et portes d'entrée MéO posées par un Menuisier d'Excellence ouvrent droit à l'extension de garantie MéO : certaines garanties structurelles sont portées à 15 ans à compter de la réception du chantier.",
    activation:
      "Elle se demande sur le site de MéO, par le propriétaire, dans les 14 jours qui suivent la signature du procès-verbal de fin de chantier. Nous vous remettons le lien avec le PV.",
  },
};
