// Source UNIQUE des informations d'entreprise (NAP, identité, réseaux, horaires).
//
// ⚠️ Plus aucune adresse / téléphone / email en dur dans un composant :
// tout consomme ce fichier.
//
// Sources : carte de visite Maxime Veron + notes manuscrites (sept. 2026).

export const SITE_URL = "https://www.malingeassocies.fr";

/** Convertit un numéro français « 06 86 84 89 70 » en E.164 « +33686848970 ». */
export function toE164(fr: string): string {
  const digits = fr.replace(/[^\d+]/g, "");
  return digits.startsWith("0") ? "+33" + digits.slice(1) : digits;
}

/** Siège / showroom (une seule implantation). */
export const agence = {
  nom: "Le Pin-en-Mauges",
  adresse: "1 rue Louis Raimbault",
  lieuDit: "Le Pin-en-Mauges",
  codePostal: "49110",
  ville: "Beaupréau-en-Mauges",
  /** Coordonnées géocodées (API Adresse, sept. 2026). */
  lat: 47.256193,
  lng: -0.896167,
} as const;

/** Deux pôles, deux lignes directes (cf. wireframe : « Tel agencement / menuiserie »). */
export const telephones = {
  menuiserie: {
    label: "Menuiserie",
    numero: "06 86 84 89 70",
    contact: "Maxime Veron — Gérant, chargé d'affaires menuiserie",
  },
  agencement: {
    label: "Agencement",
    numero: "06 86 95 85 61",
    // TODO client : nom du chargé d'affaires agencement.
    contact: "Chargé d'affaires agencement",
  },
} as const;

/** Identité de l'entreprise (niveau Organization). */
export const business = {
  name: "Malinge & Associés",
  shortName: "Malinge",
  tagline: "Menuiserie · Agencement",
  baseline: "Neuf, rénovation et mobilier sur mesure dans les Mauges",
  // TODO client : raison sociale, forme juridique, SIREN / SIRET, capital.
  legalName: "Malinge & Associés",
  legalForm: "SARL",
  siren: null as string | null,
  siret: null as string | null,
  url: SITE_URL,
  foundingDate: "2005",
  fondateur: "Michaël Malinge",
  email: "contact@malingeassocies.fr",
  priceRange: "€€",
  logo: `${SITE_URL}/logo-malinge.png`,
  image: `${SITE_URL}/og.jpg`,
  certification: "RGE Qualibat",
  labels: ["Menuisier d'Excellence MéO", "RGE Qualibat"],
  effectif: 8,
} as const;

/**
 * Fiche Google Business Profile.
 * TODO client : renseigner le Place ID (Google Maps → partager la fiche →
 * l'identifiant apparaît dans l'URL, ou via https://developers.google.com/maps/documentation/places/web-service/place-id).
 * Sans Place ID, la section « Avis Google » affiche seulement le lien
 * « Laisser un avis » (pas de note ni de faux avis).
 */
export const googleBusiness = {
  placeId: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Malinge+%26+Associ%C3%A9s+Le+Pin-en-Mauges",
  get writeReviewUrl(): string {
    return this.placeId
      ? `https://search.google.com/local/writereview?placeid=${this.placeId}`
      : this.mapsUrl;
  },
} as const;

/** Profils sociaux. `null` = pas de profil réel → non rendu, non injecté en sameAs. */
export const social = {
  // TODO client : URLs exactes des pages Facebook et Instagram.
  facebook: "https://www.facebook.com/" as string | null,
  instagram: "https://www.instagram.com/" as string | null,
  linkedin: null as string | null,
} as const;

/** URLs de profils réellement renseignés — pour le champ `sameAs` des schémas. */
export const sameAs: string[] = [social.facebook, social.instagram, social.linkedin].filter(
  (u): u is string => Boolean(u),
);

/** Horaires showroom (format machine, schema.org). TODO client : confirmer. */
export const openingHoursSpec = [
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "12:30",
  },
  {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "14:00",
    closes: "18:00",
  },
] as const;

/** Horaires en clair (affichage). TODO client : confirmer. */
export const openingHoursHuman = [
  "Lun – Ven : 8h30 – 12h30 / 14h – 18h",
  "Showroom sur rendez-vous",
] as const;

/** Adresse formatée sur une ligne. */
export function addressOneLine(): string {
  return `${agence.adresse}, ${agence.lieuDit}, ${agence.codePostal} ${agence.ville}`;
}

/** PostalAddress schema.org. */
export function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: `${agence.adresse}, ${agence.lieuDit}`,
    postalCode: agence.codePostal,
    addressLocality: agence.ville,
    addressRegion: "Maine-et-Loire",
    addressCountry: "FR",
  };
}

/** openingHoursSpecification schema.org. */
export const openingHoursSpecification = openingHoursSpec.map((s) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [...s.dayOfWeek],
  opens: s.opens,
  closes: s.closes,
}));
