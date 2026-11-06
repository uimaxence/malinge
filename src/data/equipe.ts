// L'équipe (page L'entreprise, frise de l'accueil, pages du pôle agencement).
//
// Sources : noms de fichiers du lot « personnel » fourni par le client le
// 06/11/2026 (prénom, nom, fonction, pôle), carte de visite de Maxime Veron,
// orthographe des noms vérifiée dans l'Annuaire des entreprises
// (SIREN 483 109 849 : Mickaël Malinge, Timothy Blon et Maxime Veron).
//
// Photos (détectées par src/lib/media.ts, nom de fichier = slug) :
//   src/assets/equipe/<slug>.jpg          portrait serré, 4:5
//   src/assets/equipe/atelier/<slug>.jpg  vue large à l'atelier, 3:4
// Sans portrait, la carte affiche un emplacement « Photo à venir ».
//
// TODO client : portrait de Maxime Veron ; prénoms, fonctions et photos des
// autres collaborateurs (8 au total) ; accord de chacun pour la publication
// de sa photo (accord des parents si l'apprenti est mineur).

import type { Pole } from "./produits";

export interface Membre {
  /** Nom des fichiers photo. */
  slug: string;
  prenom: string;
  /** Absent : seul le prénom est affiché. */
  nom?: string;
  fonction: string;
  poles: Pole[];
  /** Ce que montre la photo, à la suite du nom (« … à la scie à format »). */
  geste?: string;
}

export const equipe: Membre[] = [
  {
    slug: "mickael-malinge",
    prenom: "Mickaël",
    nom: "Malinge",
    fonction: "Fondateur et associé",
    poles: ["agencement"],
    geste: "à la scie à format",
  },
  {
    slug: "maxime-veron",
    prenom: "Maxime",
    nom: "Veron",
    fonction: "Gérant, chargé d'affaires",
    poles: ["menuiserie"],
  },
  {
    slug: "timothy-blon",
    prenom: "Timothy",
    nom: "Blon",
    fonction: "Associé",
    poles: ["agencement"],
    geste: "à la dégauchisseuse",
  },
  {
    slug: "nathan",
    prenom: "Nathan",
    fonction: "Apprenti",
    poles: ["menuiserie", "agencement"],
    geste: "à la raboteuse",
  },
];

export const nomComplet = (m: Membre): string => (m.nom ? `${m.prenom} ${m.nom}` : m.prenom);

/** « Pôle agencement », « Pôles menuiserie et agencement ». */
export const libellePoles = (m: Membre): string =>
  `${m.poles.length > 1 ? "Pôles" : "Pôle"} ${m.poles.join(" et ")}`;

/** « Mickaël, Timothy et Nathan ». */
export function enumerer(noms: string[]): string {
  if (noms.length <= 1) return noms.join("");
  return `${noms.slice(0, -1).join(", ")} et ${noms[noms.length - 1]}`;
}
