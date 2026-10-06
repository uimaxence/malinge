// Constructeurs de JSON-LD partagés : un graphe d'entité unique et relié
// (@graph + @id) — toutes les pages pointent vers les mêmes identifiants.
import {
  business,
  agence,
  telephones,
  sameAs,
  SITE_URL,
  toE164,
  postalAddress,
  openingHoursSpecification,
  googleBusiness,
} from "../config/business";
import { communes } from "../data/communes";
import { avisGlobal } from "./avis";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const rgeCredential = {
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "certification",
  name: "RGE Qualibat",
};

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: business.name,
    legalName: business.legalName,
    ...(business.siret && {
      identifier: { "@type": "PropertyValue", propertyID: "SIRET", value: business.siret },
    }),
    url: business.url,
    logo: { "@type": "ImageObject", url: business.logo },
    image: business.image,
    foundingDate: business.foundingDate,
    founder: { "@type": "Person", name: business.fondateur },
    email: business.email,
    telephone: toE164(telephones.menuiserie.numero),
    address: postalAddress(),
    areaServed: { "@type": "AdministrativeArea", name: "Maine-et-Loire" },
    ...(sameAs.length && { sameAs }),
    knowsAbout: [
      "Menuiserie",
      "Agencement",
      "Fenêtres sur mesure",
      "Portes d'entrée",
      "Volets roulants",
      "Pergolas",
      "Cuisines sur mesure",
      "Dressings",
      "Mobilier sur mesure",
    ],
    hasCredential: rgeCredential,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: toE164(telephones.menuiserie.numero),
        contactType: "sales",
        name: "Menuiserie",
        areaServed: "FR",
        availableLanguage: "French",
      },
      {
        "@type": "ContactPoint",
        telephone: toE164(telephones.agencement.numero),
        contactType: "sales",
        name: "Agencement",
        areaServed: "FR",
        availableLanguage: "French",
      },
    ],
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: business.url,
    name: business.name,
    inLanguage: "fr-FR",
    publisher: { "@id": ORG_ID },
  };
}

export function localBusinessNode() {
  return {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: business.name,
    description: business.baseline,
    url: business.url,
    image: business.image,
    logo: business.logo,
    telephone: toE164(telephones.menuiserie.numero),
    email: business.email,
    priceRange: business.priceRange,
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", latitude: agence.lat, longitude: agence.lng },
    openingHoursSpecification,
    areaServed: communes.map((c) => ({ "@type": "City", name: c.nom })),
    hasCredential: rgeCredential,
    sameAs: [...sameAs, googleBusiness.mapsUrl],
    ...(avisGlobal.disponible && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: avisGlobal.note,
        reviewCount: avisGlobal.total,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

/** Graphe complet du site (page d'accueil). */
export function siteGraph(extra: Array<Record<string, unknown>> = []) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), localBusinessNode(), ...extra],
  };
}

/** Graphe d'une page commune : LocalBusiness + Service localisé. */
export function communeGraph(commune: { nom: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      localBusinessNode(),
      {
        "@type": "Service",
        "@id": `${SITE_URL}/menuisier-${commune.slug}/#service`,
        serviceType: "Menuiserie et agencement sur mesure",
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: commune.nom },
        url: `${SITE_URL}/menuisier-${commune.slug}/`,
      },
    ],
  };
}
