// Communes ciblées pour le SEO local — carte de la page d'accueil, hub
// /zones-intervention/ et pages /menuisier-<slug>/.
//
// Les slugs DOIVENT exister dans src/data/communes-geo.ts (généré).
//
// ⚠️ Anti-doorway : avant mise en ligne, chaque commune doit recevoir une
// intro réellement unique (quartiers, type de bâti, chantiers réalisés).
// Le champ `intro` ci-dessous est un texte provisoire à remplacer.
//
// TODO client : valider la liste. Les communes de Loire-Atlantique (Ancenis,
// Vallet, Clisson…) et de Vendée (Les Herbiers…) ne sont pas sur la carte du
// 49 : à ajouter en liste simple si elles sont desservies.

import { agence } from "../config/business";

export interface Commune {
  /** slug d'URL : /menuisier-<slug>/ — identique à la clé de communes-geo.ts */
  slug: string;
  nom: string;
  codePostal: string;
  lat: number;
  lng: number;
  /** Distance routière approx. depuis Le Pin-en-Mauges (km). */
  distanceKm: number;
  /** 2-3 phrases UNIQUES en lead du hero. TODO : à rédiger par commune. */
  intro: string;
  /** Libellé toujours visible sur la carte (les autres apparaissent au survol). */
  labelPermanent?: boolean;
}

const communesToutes: Commune[] = [
  {
    slug: "beaupreau-en-mauges",
    nom: "Beaupréau-en-Mauges",
    codePostal: "49110",
    lat: 47.203865,
    lng: -0.982956,
    distanceKm: 0,
    labelPermanent: true,
    intro:
      "Malinge & Associés est installé au Pin-en-Mauges, commune déléguée de Beaupréau-en-Mauges. Notre showroom et notre atelier sont à quelques minutes de chez vous.",
  },
  {
    slug: "cholet",
    nom: "Cholet",
    codePostal: "49300",
    lat: 47.036408,
    lng: -0.875399,
    distanceKm: 28,
    labelPermanent: true,
    intro:
      "À Cholet et dans son agglomération, nous posons fenêtres, portes d'entrée et fermetures et réalisons cuisines, dressings et mobilier sur mesure.",
  },
  {
    slug: "chemille-en-anjou",
    nom: "Chemillé-en-Anjou",
    codePostal: "49120",
    lat: 47.216653,
    lng: -0.689179,
    distanceKm: 20,
    labelPermanent: true,
    intro:
      "Chemillé-en-Anjou et ses communes déléguées sont à vingt minutes de notre atelier : intervention rapide en neuf comme en rénovation.",
  },
  {
    slug: "sevremoine",
    nom: "Sèvremoine",
    codePostal: "49230",
    lat: 47.083353,
    lng: -1.10451,
    distanceKm: 30,
    labelPermanent: true,
    intro:
      "De Saint-Macaire-en-Mauges à Saint-Germain-sur-Moine, nous accompagnons les habitants de Sèvremoine dans leurs projets de menuiserie et d'agencement.",
  },
  {
    slug: "montrevault-sur-evre",
    nom: "Montrevault-sur-Èvre",
    codePostal: "49110",
    lat: 47.247975,
    lng: -1.020829,
    distanceKm: 12,
    intro:
      "Montrevault-sur-Èvre est notre voisine directe : menuiseries, fermetures et agencements sur mesure, posés par nos équipes.",
  },
  {
    slug: "mauges-sur-loire",
    nom: "Mauges-sur-Loire",
    codePostal: "49110",
    lat: 47.346899,
    lng: -0.934451,
    distanceKm: 15,
    labelPermanent: true,
    intro:
      "Entre Loire et Mauges, nous intervenons à La Pommeraye, Saint-Florent-le-Vieil et dans toutes les communes de Mauges-sur-Loire.",
  },
  {
    slug: "oree-d-anjou",
    nom: "Orée d'Anjou",
    codePostal: "49270",
    lat: 47.306797,
    lng: -1.218144,
    distanceKm: 30,
    intro:
      "À l'ouest des Mauges, Orée d'Anjou bénéficie de nos prestations de menuiserie et d'agencement sur mesure.",
  },
  {
    slug: "angers",
    nom: "Angers",
    codePostal: "49000",
    lat: 47.467471,
    lng: -0.561615,
    distanceKm: 45,
    labelPermanent: true,
    intro:
      "Nous intervenons sur l'agglomération angevine pour les projets de menuiserie sur mesure et d'agencement intérieur.",
  },
  {
    slug: "chalonnes-sur-loire",
    nom: "Chalonnes-sur-Loire",
    codePostal: "49290",
    lat: 47.350135,
    lng: -0.772108,
    distanceKm: 22,
    intro:
      "Chalonnes-sur-Loire et les bords de Loire : nous y posons fenêtres, portes et volets, et y réalisons vos agencements.",
  },
  {
    slug: "val-du-layon",
    nom: "Val-du-Layon",
    codePostal: "49190",
    lat: 47.317212,
    lng: -0.65375,
    distanceKm: 25,
    intro:
      "Saint-Aubin-de-Luigné, Saint-Lambert-du-Lattay : nous accompagnons les habitants du Layon dans leurs projets de menuiserie.",
  },
  {
    slug: "bellevigne-en-layon",
    nom: "Bellevigne-en-Layon",
    codePostal: "49380",
    lat: 47.265276,
    lng: -0.534428,
    distanceKm: 32,
    intro:
      "Thouarcé, Faye-d'Anjou, Rablay-sur-Layon : menuiseries et agencements sur mesure pour les maisons de Bellevigne-en-Layon.",
  },
  {
    slug: "lys-haut-layon",
    nom: "Lys-Haut-Layon",
    codePostal: "49310",
    lat: 47.148701,
    lng: -0.466075,
    distanceKm: 38,
    intro:
      "Vihiers et les communes de Lys-Haut-Layon : fenêtres, portes, fermetures et mobilier sur mesure.",
  },
  {
    slug: "trementines",
    nom: "Trémentines",
    codePostal: "49340",
    lat: 47.124726,
    lng: -0.798958,
    distanceKm: 18,
    intro:
      "Trémentines, entre Beaupréau et Cholet : nos équipes interviennent rapidement pour vos menuiseries et agencements.",
  },
  {
    slug: "la-seguiniere",
    nom: "La Séguinière",
    codePostal: "49280",
    lat: 47.076275,
    lng: -0.960266,
    distanceKm: 24,
    intro:
      "Aux portes de Cholet, La Séguinière profite de notre savoir-faire en menuiserie et agencement sur mesure.",
  },
  {
    slug: "le-may-sur-evre",
    nom: "Le May-sur-Èvre",
    codePostal: "49122",
    lat: 47.133127,
    lng: -0.881301,
    distanceKm: 16,
    intro:
      "Le May-sur-Èvre est à un quart d'heure du Pin-en-Mauges : menuiseries, fermetures et agencements posés par nos équipes.",
  },
  {
    slug: "begrolles-en-mauges",
    nom: "Bégrolles-en-Mauges",
    codePostal: "49122",
    lat: 47.138777,
    lng: -0.934507,
    distanceKm: 15,
    intro:
      "Bégrolles-en-Mauges : fenêtres, portes d'entrée, volets et mobilier sur mesure, avec un interlocuteur unique.",
  },
];

export const communes: Commune[] = communesToutes;

export const getCommune = (slug: string): Commune | undefined =>
  communes.find((c) => c.slug === slug);

/** Communes triées A → Z (listes). */
export const communesTriees: Commune[] = [...communes].sort((a, b) =>
  a.nom.localeCompare(b.nom, "fr"),
);

/** Slug de la commune où se trouve l'agence (marqueur sur la carte). */
export const AGENCE_SLUG = "beaupreau-en-mauges";

export { agence };
