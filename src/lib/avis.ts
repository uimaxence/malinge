// Couche d'accès aux avis Google (src/data/avis-google.json, généré par
// `npm run avis:fetch`). Tant que le Place ID n'est pas renseigné, le JSON
// est vide : les composants affichent uniquement le lien « Laisser un avis ».
import data from "../data/avis-google.json";
import { googleBusiness } from "../config/business";

export interface AvisGoogle {
  auteur: string;
  note: number;
  texte: string;
  dateRelative: string | null;
}

interface AvisData {
  rating: number | null;
  count: number;
  reviews: AvisGoogle[];
}

const d = data as unknown as AvisData;
const note = d.rating ? Math.round(d.rating * 10) / 10 : 0;

export const avisGlobal = {
  /** true dès qu'une note réelle est disponible. */
  disponible: Boolean(d.rating) && d.count > 0,
  note,
  noteAffichee: note ? note.toFixed(1).replace(".", ",") : "",
  total: d.count,
  mapsUrl: googleBusiness.mapsUrl,
  writeReviewUrl: googleBusiness.writeReviewUrl,
} as const;

export const avisGoogle: AvisGoogle[] = d.reviews ?? [];
