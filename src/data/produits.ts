// Les 8 catégories de produits (grille 4 × 2 de la page d'accueil, mega-menu,
// pages /produits/<slug>/). Source : notes manuscrites + wireframe.
//
// Photos : déposer les images dans src/assets/produits/<slug>/ — elles sont
// détectées automatiquement (src/lib/media.ts). La première par ordre
// alphabétique sert de visuel de carte ; nommer par ex. `01-xxx.jpg`.
//
// Deux pôles : « menuiserie » (ligne 06 86 84 89 70) et « agencement »
// (ligne 06 86 95 85 61) — cf. src/config/business.ts.

export type Pole = "menuiserie" | "agencement";

/** Icônes du jeu `Icon.astro` utilisables pour une catégorie. */
export type IconeProduit = "door" | "window" | "blinds" | "sun" | "kitchen" | "wardrobe" | "sofa" | "fence";

export interface SousProduit {
  nom: string;
  texte?: string;
}

export interface Produit {
  slug: string;
  /** Libellé court (carte, menu). */
  nom: string;
  /** Titre H1 de la page. */
  titre: string;
  /** Meta description + chapô. */
  description: string;
  pole: Pole;
  /** Icône (cartes produits, mega-menu). */
  icone: IconeProduit;
  sousProduits: SousProduit[];
  /** Matériaux / gammes affichés en badges. */
  materiaux?: string[];
  /** Page porte d'entrée : configurateur MéO intégré. */
  configurateurMeo?: boolean;
  /** Gamme bois-aluminium MéO et extension de garantie affichées sur la page. */
  gammeMeo?: boolean;
  /** Paragraphes de contenu (TODO : à enrichir avec le client). */
  contenu: string[];
}

export const produits: Produit[] = [
  {
    slug: "porte-entree",
    nom: "Portes d'entrée",
    titre: "Portes d'entrée sur mesure",
    description:
      "Portes d'entrée bois, aluminium, bois-alu ou PVC, fabriquées sur mesure et posées par nos menuisiers dans les Mauges. Configurez votre porte MéO en ligne.",
    pole: "menuiserie",
    icone: "door",
    materiaux: ["Bois", "Aluminium", "Bois-alu", "PVC"],
    configurateurMeo: true,
    gammeMeo: true,
    sousProduits: [
      { nom: "Portes pleines et semi-vitrées", texte: "Isolation, sécurité et design : tous les styles, du contemporain au traditionnel." },
      { nom: "Portes bois-alu MéO", texte: "La chaleur du bois à l'intérieur, la résistance de l'aluminium à l'extérieur." },
      { nom: "Serrures multipoints et accessoires", texte: "Poignées, tierces, imposte et vitrages personnalisés." },
    ],
    contenu: [
      "La porte d'entrée est la première impression de votre maison. Nous la concevons sur mesure, en tenant compte de votre façade, de vos besoins d'isolation et de sécurité.",
      "Menuisier d'Excellence MéO, nous vous proposons de configurer votre porte en ligne, puis d'affiner votre projet au showroom du Pin-en-Mauges.",
    ],
  },
  {
    slug: "fenetres",
    nom: "Fenêtres",
    titre: "Fenêtres et baies vitrées sur mesure",
    description:
      "Fenêtres bois-alu, PVC, aluminium et bois, en neuf comme en rénovation. Fabrication sur mesure, pose RGE Qualibat à Beaupréau-en-Mauges et dans les Mauges.",
    pole: "menuiserie",
    icone: "window",
    materiaux: ["Bois-alu", "PVC", "Aluminium", "Bois"],
    gammeMeo: true,
    sousProduits: [
      { nom: "Fenêtres bois-aluminium MéO", texte: "La gamme du fabricant vendéen dont nous sommes Menuisier d'Excellence : bois à l'intérieur, aluminium à l'extérieur." },
      { nom: "Fenêtres et portes-fenêtres", texte: "Ouvrant à la française, oscillo-battant, fixe : toutes les configurations." },
      { nom: "Baies coulissantes et à galandage", texte: "De grandes ouvertures pour faire entrer la lumière." },
      { nom: "Rénovation ou dépose totale", texte: "Nous choisissons avec vous la technique de pose adaptée à votre bâti." },
    ],
    contenu: [
      "Remplacer ses fenêtres, c'est gagner en confort thermique, acoustique et en luminosité. Nous travaillons quatre matériaux pour répondre à chaque budget et chaque style de maison.",
      "Certifiés RGE Qualibat, nos poses ouvrent droit aux aides à la rénovation énergétique et à la TVA réduite.",
    ],
  },
  {
    slug: "fermetures",
    nom: "Fermetures",
    titre: "Volets et portes de garage",
    description:
      "Volets roulants, volets coulissants et battants, portes de garage : fermetures motorisées et sur mesure, posées par Malinge & Associés dans les Mauges.",
    pole: "menuiserie",
    icone: "blinds",
    sousProduits: [
      { nom: "Volets roulants", texte: "Rénovation ou bloc-baie, motorisation Somfy, pilotage à distance." },
      { nom: "Volets coulissants et battants", texte: "Aluminium, bois ou PVC, persiennés ou pleins." },
      { nom: "Portes de garage", texte: "Sectionnelles, enroulables ou battantes, motorisées." },
    ],
    contenu: [
      "Sécurité, occultation et isolation : nos fermetures complètent vos menuiseries et se pilotent du bout des doigts grâce aux motorisations Somfy.",
    ],
  },
  {
    slug: "protection-solaire",
    nom: "Protection solaire",
    titre: "Pergolas, stores et brise-soleil",
    description:
      "Pergolas bioclimatiques, stores screen, brise-soleil orientables (BSO), stores intérieurs et moustiquaires : profitez de vos extérieurs en toute saison.",
    pole: "menuiserie",
    icone: "sun",
    sousProduits: [
      { nom: "Pergolas", texte: "Bioclimatiques à lames orientables ou à toile, en aluminium." },
      { nom: "Stores screen et BSO", texte: "Brise-soleil orientables et stores extérieurs pour maîtriser la chaleur." },
      { nom: "Stores intérieurs", texte: "Stores enrouleurs, vénitiens et bateaux sur mesure." },
      { nom: "Moustiquaires", texte: "Enroulables, plissées ou fixes, adaptées à chaque ouverture." },
    ],
    contenu: [
      "Contrôler la lumière et la chaleur, c'est gagner en confort été comme hiver. Nous installons des solutions de protection solaire sur mesure, motorisées et connectées.",
    ],
  },
  {
    slug: "cuisine",
    nom: "Cuisines",
    titre: "Cuisines sur mesure",
    description:
      "Conception, fabrication et pose de cuisines sur mesure par notre pôle agencement, au Pin-en-Mauges près de Beaupréau et Cholet.",
    pole: "agencement",
    icone: "kitchen",
    sousProduits: [
      { nom: "Conception 3D et plans sur mesure", texte: "Nous dessinons votre cuisine à partir de votre pièce et de vos habitudes." },
      { nom: "Fabrication et finitions", texte: "Façades, plans de travail, quincaillerie : un large choix de matériaux et de coloris." },
      { nom: "Pose et raccordements", texte: "Une installation soignée, coordonnée avec vos autres corps de métier." },
    ],
    contenu: [
      "Une cuisine sur mesure épouse votre espace et votre façon de vivre. Notre pôle agencement vous accompagne du premier plan jusqu'à la pose.",
    ],
  },
  {
    slug: "dressing",
    nom: "Dressings",
    titre: "Dressings et rangements sur mesure",
    description:
      "Dressings, placards et rangements sur mesure, conçus et posés par le pôle agencement de Malinge & Associés dans les Mauges.",
    pole: "agencement",
    icone: "wardrobe",
    sousProduits: [
      { nom: "Dressings ouverts ou fermés", texte: "Sous pente, en angle, en niche : nous exploitons chaque centimètre." },
      { nom: "Placards et portes coulissantes", texte: "Façades sur mesure, miroir, bois ou laquées." },
      { nom: "Aménagements intérieurs", texte: "Tiroirs, penderies, étagères : un rangement pensé pour vous." },
    ],
    contenu: [
      "Un dressing sur mesure optimise vos volumes, même les plus contraints. Chaque projet est dessiné pour votre pièce et vos besoins de rangement.",
    ],
  },
  {
    slug: "mobilier-sur-mesure",
    nom: "Mobilier sur mesure",
    titre: "Mobilier et agencement sur mesure",
    description:
      "Tables, bibliothèques, meubles de salon et de salle à manger, verrières, parquets : du mobilier sur mesure fabriqué par nos menuisiers-agenceurs.",
    pole: "agencement",
    icone: "sofa",
    sousProduits: [
      { nom: "Tables et meubles de salon / salle à manger", texte: "Pièces uniques, dessinées et fabriquées pour votre intérieur." },
      { nom: "Bibliothèques et meubles TV", texte: "Sur mesure, du sol au plafond." },
      { nom: "Verrières", texte: "Séparer les espaces sans perdre la lumière." },
      { nom: "Parquets", texte: "Fourniture et pose de parquets massifs ou contrecollés." },
    ],
    contenu: [
      "Le mobilier sur mesure, c'est le cœur de notre métier d'agenceur : une pièce unique, adaptée à votre intérieur, réalisée avec des matériaux choisis.",
    ],
  },
  {
    slug: "exterieur",
    nom: "Extérieur & autres",
    titre: "Portails, clôtures, carports et aménagements extérieurs",
    description:
      "Portails, clôtures, carports, cuisines d'été et garde-corps : Malinge & Associés aménage vos extérieurs sur mesure dans les Mauges.",
    pole: "menuiserie",
    icone: "fence",
    sousProduits: [
      { nom: "Portails et clôtures", texte: "Aluminium ou bois, battants ou coulissants, motorisés." },
      { nom: "Carports", texte: "Abris de voiture en aluminium ou bois, adossés ou autoportants." },
      { nom: "Cuisines d'été", texte: "Un espace convivial et durable pour profiter du jardin." },
      { nom: "Garde-corps", texte: "Balcons, terrasses, escaliers : sécurité et design." },
    ],
    contenu: [
      "Nous prolongeons notre savoir-faire aux extérieurs : portails, clôtures, carports, cuisines d'été et garde-corps, toujours sur mesure.",
    ],
  },
];

export const getProduit = (slug: string): Produit | undefined =>
  produits.find((p) => p.slug === slug);

export const produitsParPole = (pole: Pole): Produit[] =>
  produits.filter((p) => p.pole === pole);

export const POLES: Record<Pole, { label: string; sousTitre: string }> = {
  menuiserie: { label: "Menuiserie", sousTitre: "Neuf & rénovation" },
  agencement: { label: "Agencement", sousTitre: "Mobilier sur mesure" },
};
