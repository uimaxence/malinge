// Récupère les avis Google de la fiche Malinge & Associés via l'API Google
// Places (New) et écrit src/data/avis-google.json, consommé au build par
// src/lib/avis.ts.
//
// Usage :
//   GOOGLE_PLACES_API_KEY=xxx node scripts/fetch-avis-google.mjs
//   (ou `npm run avis:fetch` avec la clé dans .env)
//
// Clé API : console Google Cloud → activer « Places API (New) » → créer une
// clé restreinte à cette API.
//
// Limite connue de l'API : Google ne renvoie que les 5 avis « les plus
// pertinents » par fiche. Les agrégats (note, nombre total) sont exacts.
//
// TODO client : renseigner le Place ID de la fiche Google Business
// (voir src/config/business.ts → googleBusiness.placeId).

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../src/data/avis-google.json", import.meta.url));

// Place ID lu dans src/config/business.ts (chaîne PLACE_ID = "...").
async function lirePlaceId() {
  const src = await readFile(
    fileURLToPath(new URL("../src/config/business.ts", import.meta.url)),
    "utf8",
  );
  const m = src.match(/placeId:\s*"([^"]*)"/);
  return m?.[1] ?? "";
}

if (!process.env.GOOGLE_PLACES_API_KEY) {
  try {
    const env = await readFile(fileURLToPath(new URL("../.env", import.meta.url)), "utf8");
    const m = env.match(/^GOOGLE_PLACES_API_KEY=(.+)$/m);
    if (m) process.env.GOOGLE_PLACES_API_KEY = m[1].trim();
  } catch {
    /* pas de .env */
  }
}

// --soft (utilisé par `npm run build`) : clé ou Place ID absents → on garde
// le JSON existant et on sort en succès pour ne jamais bloquer un déploiement.
const SOFT = process.argv.includes("--soft");
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = await lirePlaceId();

if (!API_KEY || !PLACE_ID) {
  const manque = !API_KEY ? "GOOGLE_PLACES_API_KEY manquante" : "Place ID Google non renseigné";
  console.error(
    (SOFT ? "⚠ " : "✗ ") +
      manque +
      (SOFT ? " — avis non rafraîchis, on garde src/data/avis-google.json." : "."),
  );
  process.exit(SOFT ? 0 : 1);
}

try {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=fr&regionCode=FR`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      Referer: "https://www.malingeassocies.fr/",
    },
  });
  if (!res.ok) throw new Error(`Places API ${res.status} : ${await res.text()}`);
  const place = await res.json();

  const reviews = (place.reviews ?? [])
    .filter((r) => (r.rating ?? 0) >= 4 && r.text?.text?.trim())
    .map((r) => ({
      auteur: r.authorAttribution?.displayName ?? "Client Google",
      note: r.rating,
      texte: r.text.text.trim(),
      dateRelative: r.relativePublishTimeDescription ?? null,
      date: r.publishTime?.slice(0, 10) ?? null,
    }));

  const data = {
    fetchedAt: new Date().toISOString().slice(0, 10),
    note: "Généré par scripts/fetch-avis-google.mjs — ne pas éditer à la main.",
    rating: place.rating ?? null,
    count: place.userRatingCount ?? 0,
    reviews,
  };
  await writeFile(OUT, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log(`✓ avis-google.json : ${data.rating}/5 (${data.count} avis, ${reviews.length} textes).`);
} catch (err) {
  if (SOFT) {
    console.error(`⚠ Récupération des avis échouée (${err.message}) — on garde le JSON existant.`);
    process.exit(0);
  }
  throw err;
}
