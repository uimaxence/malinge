# Brief site Malinge & Associés — transcription des notes et décisions

Transcription des documents manuscrits fournis le 21/09/2026 (dossier `brief/`),
puis structure retenue pour le squelette. Les points marqués **TODO client**
attendent une information.

## 1. Notes « Histoire Malinge » (`brief/notes-histoire-et-categories.pdf`, p. 1)

- Fondée en **2005** par **Michaël Malinge**.
- L'entreprise change de nom et devient **Malinge & Associés en 2021**.
- **Achat du bâtiment en 2023** et création du **showroom**.
- **2026** : l'entreprise compte **8 collaborateurs** (associés, salariés, apprenti, secrétaire).
- Agréés **Qualibat** pour les demandes de **TVA réduite** (→ affiché « RGE Qualibat »).
- **MéO** : partenaire **Menuisier d'Excellence**.

**Expertise sur mesure**
- Conseil personnalisé (showroom, plan sur mesure).
- Accompagnement technique.

**Entreprise responsable**
- Sélection de produits certifiés et recyclables.
- Éco-retour avec récupération des menuiseries.
- Tri des déchets.

## 2. Catégories (p. 2, feuille tournée)

| # | Catégorie | Sous-produits notés | Pôle |
|---|-----------|---------------------|------|
| 1 | Porte d'entrée | lien vers **configurateur MéO** | Menuiserie |
| 2 | Fenêtres | bois-alu, PVC, alu, bois | Menuiserie |
| 3 | Fermetures | volet roulant, volet coulissant et battant, porte de garage | Menuiserie |
| 4 | Protection solaire | pergola, store screen, BSO, store intérieur (+ moustiquaire sur le wireframe) | Menuiserie |
| 5 | Cuisine | — | Agencement |
| 6 | Dressing | — | Agencement |
| 7 | Mobilier sur mesure | table, bibliothèque, meuble salon / salle à manger, verrière, parquet | Agencement |
| 8 | Autres | portail, clôture, carport, cuisine d'été (+ garde-corps sur le wireframe) | Menuiserie |

Décisions :
- Slugs : `porte-entree`, `fenetres`, `fermetures`, `protection-solaire`, `cuisine`, `dressing`, `mobilier-sur-mesure`, `exterieur`.
- Le **carport** apparaît dans « Protection solaire » sur le wireframe et dans « Autres » sur la liste : placé dans **Extérieur & autres** (`exterieur`).
- Le **configurateur MéO** est intégré à la page Portes d'entrée (`src/components/sections/MeoConfigurateur.astro`). **TODO client / MéO** : URL exacte du configurateur (et code revendeur éventuel). Lien provisoire vers fenetremeo.com.
- Le pôle détermine la ligne téléphonique affichée sur la page (menuiserie / agencement).

## 3. Wireframe page d'accueil (`brief/wireframe-page-accueil.pdf`)

```
Logo | Tel agencement 06 86 95 85 61 · menuiserie 06 86 84 89 70 | contact@malingeassocies.fr | FB / Insta
L'Entreprise (Historique) | Nos Produits | Réalisations | Zone d'Intervention
Histoire sous forme de frise                         | Menuisier d'Excellence · RGE
[Porte d'entrée] [Fenêtre] [Fermeture] [Protection solaire]
[Cuisine]        [Dressing] [Meuble/Mesure] [Autres]
Zone d'intervention avec la carte, comme Fenêtres sur Loir
Avis Google
Partenaires : Méo, Cedmat, Somfy, S.B, Men 85, Batistyl, SyBaie, JDE, À l'envers du décor, Leroux
```

Ordre des sections implémenté dans `src/pages/index.astro` :
hero → bandeau labels → frise → grille 8 produits → expertise / responsable → carte → avis Google → partenaires → formulaire.

## 4. Carte de visite (`brief/carte-de-visite-maxime-veron.png`)

- Maxime VERON — Gérant, chargé d'affaires menuiserie.
- 06 86 84 89 70 / 06 18 87 96 41 — veron.m@malingeassocies.fr.
- 1 rue Louis Raimbault, Le Pin-en-Mauges, 49110 Beaupréau-en-Mauges (géocodé : 47.256193, -0.896167).
- Baseline logo : « Menuiserie – Agencement · Neuf – Rénovation · Mobilier sur mesure ».
- Couleurs du logo : bleu `#4f8dc1`, taupe `#786b5a`.

## 5. Réalisations

Sources annoncées : 2 articles MéO (dont 1 reportage photo), photos SyBaie, publications Facebook.
Quatre fiches créées dans `src/content/realisations/` (`reportage-meo`, `article-meo`, `chantier-sybaie`, `publication-facebook` en brouillon). Photos à déposer dans `src/assets/realisations/<slug>/`.

## 6. Zone d'intervention

Même principe que Fenêtres sur Loir : carte SVG du Maine-et-Loire (cantons teintés selon la distance à l'atelier), communes cliquables → pages `/menuisier-<commune>/`, liste recherchable en mobile.
16 communes pré-remplies dans `src/data/communes.ts` (Mauges, Choletais, Layon, Angers). **TODO client** : valider la liste ; communes 44 / 85 hors carte.
Les pages communes sont en `noindex` tant que le contenu n'est pas unique.

## 7. Ce qu'il manque pour finaliser

- [ ] Photos (voir conventions dans `CLAUDE.md`). Lot Menuiserie trié le 05/10/2026 (`docs/photos-menuiserie.md`) : hero, portes d'entrée, fenêtres, fermetures, cuisines et mobilier sont pourvus. Restent : équipe/atelier, showroom, protection solaire, dressing, extérieur, lot agencement, photos classées par chantier pour les réalisations.
- [ ] Logos partenaires (`src/assets/partenaires/<slug>.png`), noms complets de « S.B » et « Men 85 ».
- [ ] URL du configurateur MéO + éventuel code revendeur.
- [ ] Place ID Google Business (avis) ; URLs Facebook / Instagram exactes.
- [ ] Horaires d'ouverture ; nom du chargé d'affaires agencement.
- [ ] Raison sociale, SIREN/SIRET (mentions légales) ; nom de domaine définitif.
- [ ] Clé Web3Forms (formulaire) — `.env` → `PUBLIC_WEB3FORMS_KEY`.
- [ ] Image Open Graph `public/og.jpg` (1200 × 630).
- [ ] Textes uniques par commune avant de retirer `noindex`.
