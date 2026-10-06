# Photos « Agencement » — lot reçu le 06/10/2026

99 fichiers bruts (96 HEIC, 3 JPG) dans `src/assets/photo/Agencement/`, conservés tels quels. Aucun doublon exact.

Chaque photo a été convertie une fois en JPEG (sRGB, orientation appliquée, 2400 px maxi, EXIF et GPS retirés) puis rangée :

- **34 sur le site** : `src/assets/produits/<slug>/` (cuisine 10, mobilier-sur-mesure 16, dressing 7, extérieur 1) ;
- **65 en réserve** : `src/assets/photo/reserve/`, que le site ne lit pas (doublons, chantiers en cours, sujets à confirmer).

Pour publier une photo de la réserve, la déplacer dans `src/assets/produits/<slug>/` avec un préfixe `NN-`.

Critère retenu pour publier : meuble terminé et pièce présentable (ni cartons, ni placo brut dominant, ni personne visible). Les photos de chantier en cours sont en réserve, même quand le meuble est beau (habillages de cheminée du groupe G et R, verrière du groupe V, meuble bar du groupe AI) : demander au client s'il a des photos après finitions.

## Changements dans les galeries existantes

- **Cuisines** : la cuisine verte à îlot marbre (`IMG_2799`, 2024) devient la couverture ; les 5 photos du lot Menuiserie sont renumérotées (`02` à `04`, `14`, `15`).
- **Mobilier sur mesure** : la grande bibliothèque murale d'Angers (`IMG_1662`) devient la couverture ; le bureau et les trois photos de sol passent en fin de galerie (`17` à `20`).
- **Dressings** : 7 vraies photos remplacent les 2 illustrations IA, déplacées dans `src/assets/photo/reserve/ia/dressing/` (le site ne les lit plus). Toutes les photos de dressing sont en portrait : la couverture 16/9 de la page produit recadre la bande centrale des portes coulissantes, ce qui reste lisible.
- **Extérieur** : la seule vraie photo (portail bois, 756 × 1008 px, sans métadonnées) est en 2e position ; l'illustration IA du portail aluminium reste en couverture tant qu'une photo en haute définition n'est pas fournie.

## Ce que disent les métadonnées

- **Date de prise de vue** : présente sur les 96 HEIC, de décembre 2018 à novembre 2025. Appareils : iPhone XR (2018-2025), iPhone 16 Pro pour `IMG_0157` (novembre 2025). Le lot couvre donc sept ans d'agencement, ce qui est très différent du lot Menuiserie.
- **Lieu (GPS)** : présent sur les 96 HEIC. Commune obtenue par l'API Adresse (data.gouv.fr), au niveau commune uniquement ; seule la commune est reportée ici. 86 photos dans le Maine-et-Loire, 6 en Loire-Atlantique (Basse-Goulaine), 7 en Charente-Maritime (Périgny, Le Bois-Plage-en-Ré : résidences secondaires ?).
- **3 JPG sans métadonnées** : `Resized_20221216_163006.jpg` (date dans le nom, autre téléphone), `image0000001.jpg` et `image0000011.jpg` (messagerie).
- ⚠️ Les HEIC d'origine contiennent les coordonnées précises des domiciles des clients. Les JPEG du site en sont débarrassés. Le dépôt GitHub étant public, le lot brut est exclu de git (`.gitignore`) et reste uniquement sur le poste de travail, contrairement au lot Menuiserie (2 photos localisées seulement, près de l'atelier).

## Regroupement par chantier

Regroupement déduit de la date, du lieu et du contenu. La commune indiquée vient du GPS (commune déléguée entre parenthèses).

| Groupe | Date | Commune | Photos d'origine | Contenu | Rangement |
|---|---|---|---|---|---|
| A | 19/12/2018 et 14/02/2019 | Beaupréau | IMG_0006, 0051, 0052 | Entrée d'une maison neuve : meuble suspendu blanc et chêne, puis claustra à tasseaux de chêne posée deux mois plus tard | mobilier (2), réserve (1) |
| B | 26/03/2019 | Le Pin-en-Mauges | IMG_0074, 0075 | Cloison-bibliothèque à casiers en panneaux bruts, sol protégé : en cours de pose | réserve (2) |
| C | 23/04/2019 | Bégrolles-en-Mauges | IMG_0085 | Composition murale de caissons chêne et blanc | mobilier (1) |
| D | 29/11/2019 et 16/01/2020 | Ingrandes-le-Fresne-sur-Loire | IMG_0393 à 0395, 0427 | Cuisine blanche à plan chêne sur mur bleu, table chêne sur pied noir, colonne à niche ; meuble d'entrée suspendu | cuisine (2), réserve (2) |
| E | 19/12/2019 | Chemillé-en-Anjou (Saint-Georges-des-Gardes) | IMG_0408 | Meuble TV chêne et blanc avec étagères | mobilier (1) |
| F | 10/03/2020 | Beaupréau | IMG_0492 | Meuble TV laqué blanc à niches en bois vieilli, cadre bois ; plafond non fini | réserve (1) |
| G | 24/07/2020 et 19/10/2020 | Beaupréau | IMG_0579 à 0582, 0682, 0683 | Escalier à marches suspendues en chêne ; cuisine blanche à niche chêne et table dans le prolongement de l'îlot ; habillage de cheminée chêne et tasseaux (cartons au sol) | cuisine (1), réserve (5) |
| H | 12/02/2021 | Montrevault-sur-Èvre (La Salle-et-Chapelle-Aubry) | IMG_0788, 0789 | Bibliothèque séparatrice blanc et chêne à fonds colorés, claustra à tasseaux | mobilier (1), réserve (1) |
| I | 17/02/2021 | Jallais | IMG_0792 | Composition de rangement blanc et anthracite à niches | dressing (1) |
| J | 01/03/2021 | Jallais | IMG_0806 | Local avec bar en acier et tabourets, moto exposée en hauteur, voiture ancienne : sujet à confirmer | réserve (1) |
| K | 12/03/2021 | Le Pin-en-Mauges | IMG_0818 | Cuisine chêne et noir avec îlot ; plafond non fini | réserve (1) |
| L | 10/06/2021 | Chemillé-en-Anjou (La Tourlandry) | IMG_0929 | Cuisine crème à plan noir et hotte noire | cuisine (1) |
| M | 01/10/2021 et 04/11/2021 | Le Pin-en-Mauges | IMG_1048, 1099 | Cuisine blanche et chêne : colonnes, îlot à plateau chêne, fours ; fils apparents, murs bruts | réserve (2) |
| N | 20/10/2021 et 09/11/2021 | La Jubaudière | IMG_1069, 1070, 1105 | Kitchenette noir et chêne avec bar, dans une dépendance à charpente apparente | réserve (3) |
| O | 21/10/2021 | Beaupréau | IMG_1073 | Chevets suspendus, chambre en cours | réserve (1) |
| P | 20/01/2022 | Bégrolles-en-Mauges | IMG_1186 à 1193 | Cuisine blanche à plan chêne ; meuble d'entrée à console suspendue ; composition murale de caissons chêne et blanc | cuisine (1), mobilier (2), réserve (5) |
| Q | 23/03/2022 | Saint-Macaire-en-Mauges | IMG_1259 | Salle de bain : douche à l'italienne, meuble vasque chêne | réserve (1) |
| R | 31/03/2022 et 13/01/2023 | Le Pin-en-Mauges | IMG_1264, 1265, 1735 à 1737 | Même maison : cuisine blanche à plan noir et table pivotante, puis banc de cheminée en chêne massif ; placo non peint | réserve (5) |
| S | 21/04/2022 | Saint-Macaire-en-Mauges | IMG_1281 à 1284 | Salon : colonne bibliothèque blanc et noir, mur de tasseaux derrière la TV, meuble bas, poêle suspendu | mobilier (1), réserve (3) |
| T | 22/04/2022 | Le Pin-en-Mauges | IMG_1287 | Cuisine noire et chêne, hotte de plafond ; caisson en panneaux bruts | réserve (1) |
| U | 06 et 10/05/2022 | Saint-Macaire-en-Mauges | IMG_1292, 1294 | Meuble TV bibliothèque chêne et blanc, avant et après installation de la TV | mobilier (1), réserve (1) |
| V | 30/05/2022 | Montfaucon-Montigné (Sèvremoine) | IMG_1315, 1316 | Verrière bois à motifs géométriques entre cuisine et séjour ; murs en attente de peinture | réserve (2) |
| W | 22/09/2022 | Périgny (Charente-Maritime) | IMG_1589 à 1591 | Meuble TV bas noir et chêne sous les fenêtres, colonne bibliothèque chêne | mobilier (1), réserve (2) |
| X | 21 et 29/11/2022 | Angers | IMG_1662, 1685, 1687, 1689, 1690 | Bibliothèque murale chêne et blanc autour de la TV ; meuble d'entrée à niche bleu nuit et banc chêne au pied de l'escalier ; placards d'entrée avec miroir et tasseaux | mobilier (2), dressing (1), réserve (2) |
| Y | 02/12/2022 | Cholet | IMG_1696 | Meuble d'entrée : colonnes, console suspendue, miroir rond | mobilier (1) |
| Z | 15/12/2022 | La Poitevinière | IMG_1714 à 1716 | Claustra décorative chêne et panneaux noirs avec meuble bas, près d'un escalier métallique | mobilier (1), réserve (2) |
| AA | 16/12/2022 (nom du fichier) | sans lieu | Resized_20221216_163006 | Portail à lames de bois sur cadre métallique, fourgon derrière ; 756 × 1008 px | extérieur (1) |
| AB | 16/01/2023 | Saint-Florent-le-Vieil (Mauges-sur-Loire) | IMG_1741, 1742 | Escalier chêne à garde-corps câbles, claustra géométrique ; cartons et panneaux bruts | réserve (2) |
| AC | 23/02/2023 | Mazières-en-Mauges | IMG_1797, 1798, 1800 à 1802 | Claustra à tasseaux et niches blanches ; vestiaire d'entrée à banc chêne sur fond vert sauge | mobilier (1), dressing (1), réserve (3) |
| AD | 06/03/2023 et 10/10/2023 | Basse-Goulaine (Loire-Atlantique) | IMG_1812, 2142, 2148 à 2151 | Meuble à chaussures dans un garage ; dressing à portes coulissantes chêne et cadre noir, penderie escamotable, tiroirs blancs | dressing (3), réserve (3) |
| AE | 31/03/2023 et 21/04/2023 | Cholet | IMG_1838, 1839, 1872 | Séparateur à casiers chêne entre cuisine et séjour ; cuisine blanche à plan chêne, habitée | mobilier (1), réserve (2) |
| AF | 07 et 09/06/2023 | Cholet | IMG_1928, 1929, 1931 | Cuisine blanche à plan chêne et table, escalier ancien ; cartons, puis débris résiduels | cuisine (1), réserve (2) |
| AG | 29/06/2023 | Chemillé-en-Anjou (Chemillé) | IMG_1950 | Claustra à tasseaux en mezzanine sous poutre ancienne ; bandeau en panneaux bruts | réserve (1) |
| AH | 20/03/2024 | Bégrolles-en-Mauges | IMG_2394 à 2396 | Cuisine blanche à plan chêne sur murs vert sauge, colonnes autour du passage | cuisine (2), réserve (1) |
| AI | 24/04/2024 et 03/06/2024 | Le Bois-Plage-en-Ré (Charente-Maritime) | IMG_2449, 2473, 2474, 2511 | Porte à lames de bois ; placard à étagères chêne sur fond vert ; meuble bar taupe à niches éclairées (canapé bâché devant) | dressing (1), réserve (3) |
| AJ | 28/06/2024 | Montrevault-sur-Èvre (La Salle-et-Chapelle-Aubry) | IMG_2555 | Cuisine blanche à îlot chêne ; sol protégé, cartons | réserve (1) |
| AK | 30/10/2024 | Saint-Macaire-en-Mauges | IMG_2799 | Cuisine vert foncé et noyer, îlot à plan marbre, table bois | cuisine (1, couverture) |
| AL | 18/07/2025 | Saint-Macaire-en-Mauges | IMG_3185 | Cuisine blanche et chêne, îlot noir, crédence marbre ; fils apparents, cartons | réserve (1) |
| AM | 12/11/2025 | Chemillé-en-Anjou (Chemillé) | IMG_0157 | Cuisine vert-gris à plan pierre sous plafond lambrissé | cuisine (1) |
| AN | sans date | sans lieu | image0000001, image0000011 | WC : meuble suspendu anthracite à niche chêne, lave-mains noir ; 1200 × 1600 px | réserve (2) |

## Réalisations créées (06/10/2026)

23 fiches dans `src/content/realisations/`, une par chantier localisé ayant au moins une photo publiable, avec commune et année tirées des métadonnées. Photos recopiées dans `src/assets/realisations/<slug>/` (couverture en paysage quand le chantier en a une), légendes dans `gallery`. Textes limités à ce que montrent les photos ; les finitions (chêne, pierre, marbre) décrivent l'aspect, pas la nature du matériau. Chaque fiche porte un `TODO client` pour l'accord des propriétaires.

| Groupe | Fiche | Photos |
|---|---|---|
| A | `entree-claustra-meuble-suspendu-beaupreau` | 2 |
| C | `composition-murale-begrolles` | 1 |
| D | `cuisine-blanche-mur-bleu-ingrandes` | 4 |
| E | `meuble-tv-chene-blanc-saint-georges-des-gardes` | 1 |
| G | `cuisine-blanche-niche-chene-beaupreau` | 3 |
| H | `bibliotheque-separatrice-la-salle-et-chapelle-aubry` | 2 |
| I | `rangement-blanc-anthracite-jallais` | 1 |
| L | `cuisine-creme-plan-noir-la-tourlandry` | 1 |
| P | `cuisine-entree-sejour-begrolles` | 4 |
| S | `salon-bibliotheque-tasseaux-saint-macaire` | 3 |
| U | `meuble-tv-bibliotheque-saint-macaire` | 2 |
| W | `meuble-tv-bas-perigny` | 1 |
| X | `bibliotheque-entree-angers` | 5 |
| Y | `meuble-entree-cholet` | 1 |
| Z | `claustra-decorative-la-poiteviniere` | 2 |
| AC | `claustra-vestiaire-mazieres` | 4 |
| AD | `dressing-portes-coulissantes-basse-goulaine` | 3 |
| AE | `separateur-casiers-cuisine-cholet` | 2 |
| AF | `cuisine-blanche-plan-chene-cholet` | 1 |
| AH | `cuisine-vert-sauge-begrolles` | 2 |
| AI | `placard-etageres-chene-ile-de-re` | 2 |
| AK | `cuisine-verte-ilot-marbre-saint-macaire` | 1 |
| AM | `cuisine-vert-gris-plan-pierre-chemille` | 1 |

Sans fiche : les groupes dont toutes les photos montrent un chantier en cours (B, F, K, M, N, O, Q, R, T, V, AB, AG, AJ, AL), le local à moto (J) et les deux lots sans lieu (AA, AN).

## À demander au client

- [ ] Accord des propriétaires pour les 23 chantiers publiés en Réalisations (commune et année y figurent) ; retirer ou passer en `draft: true` les fiches refusées.
- [ ] Matériaux réels des meubles (chêne massif, placage, mélaminé décor chêne…) pour corriger les textes des fiches, qui ne décrivent que l'aspect.
- [ ] Photos après finitions pour les beaux meubles photographiés en cours de chantier : habillages de cheminée (G, R), verrière (V), meuble TV laqué (F), meuble bar de l'île de Ré (AI), escaliers (G, AB).
- [ ] Escaliers (G, AB) : réalisation Malinge ? Aucune des 8 catégories ne couvre les escaliers ; si oui, à ajouter dans « Mobilier sur mesure » ou créer une entrée.
- [ ] Groupe N : la kitchenette de dépendance relève-t-elle de « Cuisines » ou de « Cuisines d'été » (catégorie Extérieur) ?
- [ ] Groupe J : le bar en acier du local à moto est-il une réalisation Malinge ?
- [ ] Groupe Q (salle de bain) et AN (WC) : faut-il montrer les meubles de salle d'eau ? Aucune catégorie ne les couvre ; un sous-produit « Salles de bain » dans Mobilier sur mesure serait possible.
- [ ] Portail bois (AA) : réalisation Malinge ? Fichier en haute définition ?
- [ ] Chantiers hors zone (Périgny, île de Ré, Basse-Goulaine, Angers) : peut-on les citer ? Cela élargit la zone d'intervention affichée.
- [ ] Toujours aucune photo pour : protection solaire, showroom, équipe, atelier.

## Correspondance fichier par fichier

Chemins relatifs à `src/assets/`.

| Groupe | Fichier d'origine | Rangé dans |
|---|---|---|
| A | `IMG_0006.HEIC` | `produits/mobilier-sur-mesure/14-meuble-entree-caissons-suspendus.jpg` |
| A | `IMG_0051.HEIC` | `photo/reserve/mobilier-sur-mesure/claustra-tasseaux-entree-2.jpg` |
| A | `IMG_0052.HEIC` | `produits/mobilier-sur-mesure/08-claustra-tasseaux-chene-entree.jpg` |
| B | `IMG_0074.HEIC` | `photo/reserve/mobilier-sur-mesure/cloison-casiers-panneaux-bruts-en-cours-1.jpg` |
| B | `IMG_0075.HEIC` | `photo/reserve/mobilier-sur-mesure/cloison-casiers-panneaux-bruts-en-cours-2.jpg` |
| C | `IMG_0085.HEIC` | `produits/mobilier-sur-mesure/16-composition-murale-chene-blanc.jpg` |
| D | `IMG_0393.HEIC` | `produits/cuisine/06-cuisine-blanche-mur-bleu-colonne-niche.jpg` |
| D | `IMG_0394.HEIC` | `produits/cuisine/05-cuisine-blanche-mur-bleu-table-chene.jpg` |
| D | `IMG_0395.HEIC` | `photo/reserve/cuisine/cuisine-blanche-mur-bleu-3.jpg` |
| D | `IMG_0427.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-entree-suspendu-colonne.jpg` |
| E | `IMG_0408.HEIC` | `produits/mobilier-sur-mesure/05-meuble-tv-chene-blanc-etageres.jpg` |
| F | `IMG_0492.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-tv-laque-niches-bois-en-cours.jpg` |
| G | `IMG_0579.HEIC` | `photo/reserve/a-confirmer/escalier-marches-suspendues-chene.jpg` |
| G | `IMG_0580.HEIC` | `produits/cuisine/07-cuisine-blanche-niche-chene-table-ilot.jpg` |
| G | `IMG_0581.HEIC` | `photo/reserve/cuisine/cuisine-blanche-niche-chene-table-2.jpg` |
| G | `IMG_0582.HEIC` | `photo/reserve/cuisine/cuisine-blanche-meuble-bas-colonne-vitrine.jpg` |
| G | `IMG_0682.HEIC` | `photo/reserve/mobilier-sur-mesure/habillage-cheminee-chene-tasseaux-en-cours-1.jpg` |
| G | `IMG_0683.HEIC` | `photo/reserve/mobilier-sur-mesure/habillage-cheminee-chene-tasseaux-en-cours-2.jpg` |
| H | `IMG_0788.HEIC` | `photo/reserve/mobilier-sur-mesure/bibliotheque-separatrice-claustra-2.jpg` |
| H | `IMG_0789.HEIC` | `produits/mobilier-sur-mesure/10-bibliotheque-separatrice-blanc-chene.jpg` |
| I | `IMG_0792.HEIC` | `produits/dressing/07-rangement-composition-blanc-anthracite.jpg` |
| J | `IMG_0806.HEIC` | `photo/reserve/a-confirmer/bar-acier-local-moto.jpg` |
| K | `IMG_0818.HEIC` | `photo/reserve/cuisine/cuisine-chene-noir-ilot-en-cours.jpg` |
| L | `IMG_0929.HEIC` | `produits/cuisine/12-cuisine-creme-plan-noir-hotte.jpg` |
| M | `IMG_1048.HEIC` | `photo/reserve/cuisine/cuisine-colonnes-chene-ilot-en-cours.jpg` |
| M | `IMG_1099.HEIC` | `photo/reserve/cuisine/cuisine-blanche-plan-noir-fours-en-cours.jpg` |
| N | `IMG_1069.HEIC` | `photo/reserve/cuisine/kitchenette-noir-chene-bar-en-cours-1.jpg` |
| N | `IMG_1070.HEIC` | `photo/reserve/cuisine/kitchenette-noir-chene-bar-en-cours-2.jpg` |
| N | `IMG_1105.HEIC` | `photo/reserve/a-confirmer/kitchenette-noir-chene-bar-dependance.jpg` |
| O | `IMG_1073.HEIC` | `photo/reserve/mobilier-sur-mesure/chevets-suspendus-en-cours.jpg` |
| P | `IMG_1186.HEIC` | `produits/cuisine/08-cuisine-blanche-plan-chene-table.jpg` |
| P | `IMG_1187.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-entree-console-2.jpg` |
| P | `IMG_1188.HEIC` | `produits/mobilier-sur-mesure/13-meuble-entree-console-suspendue.jpg` |
| P | `IMG_1189.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-entree-console-3.jpg` |
| P | `IMG_1190.HEIC` | `produits/mobilier-sur-mesure/15-composition-murale-caissons-chene-blanc.jpg` |
| P | `IMG_1191.HEIC` | `photo/reserve/mobilier-sur-mesure/composition-murale-caissons-2.jpg` |
| P | `IMG_1192.HEIC` | `photo/reserve/mobilier-sur-mesure/composition-murale-colonne-chene-1.jpg` |
| P | `IMG_1193.HEIC` | `photo/reserve/mobilier-sur-mesure/composition-murale-colonne-chene-2.jpg` |
| Q | `IMG_1259.HEIC` | `photo/reserve/a-confirmer/salle-de-bain-douche-meuble-vasque.jpg` |
| R | `IMG_1264.HEIC` | `photo/reserve/cuisine/cuisine-blanche-table-pivotante-en-cours-1.jpg` |
| R | `IMG_1265.HEIC` | `photo/reserve/cuisine/cuisine-blanche-table-pivotante-en-cours-2.jpg` |
| R | `IMG_1735.HEIC` | `photo/reserve/mobilier-sur-mesure/banc-cheminee-chene-massif-en-cours-1.jpg` |
| R | `IMG_1736.HEIC` | `photo/reserve/mobilier-sur-mesure/banc-cheminee-chene-massif-en-cours-2.jpg` |
| R | `IMG_1737.HEIC` | `photo/reserve/mobilier-sur-mesure/banc-cheminee-chene-massif-en-cours-3.jpg` |
| S | `IMG_1281.HEIC` | `photo/reserve/mobilier-sur-mesure/salon-bibliotheque-poele-1.jpg` |
| S | `IMG_1282.HEIC` | `photo/reserve/mobilier-sur-mesure/salon-bibliotheque-poele-2.jpg` |
| S | `IMG_1283.HEIC` | `photo/reserve/mobilier-sur-mesure/salon-bibliotheque-poele-3.jpg` |
| S | `IMG_1284.HEIC` | `produits/mobilier-sur-mesure/02-salon-bibliotheque-mur-tasseaux-poele.jpg` |
| T | `IMG_1287.HEIC` | `photo/reserve/cuisine/cuisine-noire-chene-hotte-plafond-en-cours.jpg` |
| U | `IMG_1292.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-tv-bibliotheque-sans-tv.jpg` |
| U | `IMG_1294.HEIC` | `produits/mobilier-sur-mesure/03-meuble-tv-bibliotheque-chene-blanc.jpg` |
| V | `IMG_1315.HEIC` | `photo/reserve/mobilier-sur-mesure/verriere-bois-geometrique-murs-non-peints-1.jpg` |
| V | `IMG_1316.HEIC` | `photo/reserve/mobilier-sur-mesure/verriere-bois-geometrique-murs-non-peints-2.jpg` |
| W | `IMG_1589.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-tv-bas-noir-chene-2.jpg` |
| W | `IMG_1590.HEIC` | `produits/mobilier-sur-mesure/04-meuble-tv-bas-noir-chene.jpg` |
| W | `IMG_1591.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-tv-bas-noir-chene-3.jpg` |
| X | `IMG_1662.HEIC` | `produits/mobilier-sur-mesure/01-bibliotheque-murale-tv-chene-blanc.jpg` |
| X | `IMG_1685.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-entree-niche-bleue-2.jpg` |
| X | `IMG_1687.HEIC` | `produits/mobilier-sur-mesure/11-meuble-entree-niche-bleue-banc-chene.jpg` |
| X | `IMG_1689.HEIC` | `produits/dressing/05-placards-entree-miroir-console.jpg` |
| X | `IMG_1690.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-entree-niche-bleue-3.jpg` |
| Y | `IMG_1696.HEIC` | `produits/mobilier-sur-mesure/12-meuble-entree-colonnes-console-miroir.jpg` |
| Z | `IMG_1714.HEIC` | `produits/mobilier-sur-mesure/09-claustra-decorative-chene-noir.jpg` |
| Z | `IMG_1715.HEIC` | `photo/reserve/mobilier-sur-mesure/claustra-decorative-chene-noir-2.jpg` |
| Z | `IMG_1716.HEIC` | `photo/reserve/mobilier-sur-mesure/claustra-decorative-chene-noir-3.jpg` |
| AA | `Resized_20221216_163006.jpg` | `produits/exterieur/02-portail-bois-cadre-metal.jpg` |
| AB | `IMG_1741.HEIC` | `photo/reserve/a-confirmer/escalier-chene-garde-corps-cables-en-cours-1.jpg` |
| AB | `IMG_1742.HEIC` | `photo/reserve/a-confirmer/escalier-chene-garde-corps-cables-en-cours-2.jpg` |
| AC | `IMG_1797.HEIC` | `produits/mobilier-sur-mesure/07-claustra-tasseaux-chene-niches.jpg` |
| AC | `IMG_1798.HEIC` | `photo/reserve/mobilier-sur-mesure/claustra-tasseaux-niches-2.jpg` |
| AC | `IMG_1800.HEIC` | `photo/reserve/dressing/vestiaire-entree-tasseaux-2.jpg` |
| AC | `IMG_1801.HEIC` | `produits/dressing/04-vestiaire-entree-banc-tasseaux-vert.jpg` |
| AC | `IMG_1802.HEIC` | `photo/reserve/dressing/vestiaire-entree-tasseaux-3.jpg` |
| AD | `IMG_1812.HEIC` | `photo/reserve/dressing/meuble-chaussures-garage.jpg` |
| AD | `IMG_2142.HEIC` | `produits/dressing/01-placard-portes-coulissantes-chene-noir.jpg` |
| AD | `IMG_2148.HEIC` | `produits/dressing/02-dressing-penderie-tiroirs-blancs.jpg` |
| AD | `IMG_2149.HEIC` | `photo/reserve/dressing/dressing-penderie-doublon.jpg` |
| AD | `IMG_2150.HEIC` | `photo/reserve/dressing/dressing-penderie-photographe-visible.jpg` |
| AD | `IMG_2151.HEIC` | `produits/dressing/03-dressing-penderie-escamotable-detail.jpg` |
| AE | `IMG_1838.HEIC` | `produits/mobilier-sur-mesure/06-separateur-casiers-chene-cuisine.jpg` |
| AE | `IMG_1839.HEIC` | `photo/reserve/mobilier-sur-mesure/separateur-casiers-chene-2.jpg` |
| AE | `IMG_1872.HEIC` | `photo/reserve/cuisine/cuisine-blanche-tasseaux-tv-habitee.jpg` |
| AF | `IMG_1928.HEIC` | `photo/reserve/cuisine/cuisine-blanche-ilot-escalier-en-cours-1.jpg` |
| AF | `IMG_1929.HEIC` | `photo/reserve/cuisine/cuisine-blanche-ilot-escalier-en-cours-2.jpg` |
| AF | `IMG_1931.HEIC` | `produits/cuisine/13-cuisine-blanche-hotte-inox-table-chene.jpg` |
| AG | `IMG_1950.HEIC` | `photo/reserve/a-confirmer/claustra-mezzanine-poutre-en-cours.jpg` |
| AH | `IMG_2394.HEIC` | `produits/cuisine/09-cuisine-blanche-vert-sauge-table-chene.jpg` |
| AH | `IMG_2395.HEIC` | `photo/reserve/cuisine/cuisine-vert-sauge-doublon.jpg` |
| AH | `IMG_2396.HEIC` | `produits/cuisine/10-cuisine-vert-sauge-colonnes-fours.jpg` |
| AI | `IMG_2449.HEIC` | `photo/reserve/dressing/porte-lames-bois.jpg` |
| AI | `IMG_2473.HEIC` | `produits/dressing/06-placard-etageres-chene-fond-vert.jpg` |
| AI | `IMG_2474.HEIC` | `photo/reserve/dressing/placard-colonnes-blanches-ferme.jpg` |
| AI | `IMG_2511.HEIC` | `photo/reserve/mobilier-sur-mesure/meuble-bar-niches-lumineuses-canape-bache.jpg` |
| AJ | `IMG_2555.HEIC` | `photo/reserve/cuisine/cuisine-blanche-ilot-chene-en-cours.jpg` |
| AK | `IMG_2799.HEIC` | `produits/cuisine/01-cuisine-verte-ilot-marbre-table-bois.jpg` |
| AL | `IMG_3185.HEIC` | `photo/reserve/cuisine/cuisine-blanche-chene-ilot-noir-en-cours.jpg` |
| AM | `IMG_0157.HEIC` | `produits/cuisine/11-cuisine-sauge-plan-pierre-plafond-lambris.jpg` |
| AN | `image0000001.jpg` | `photo/reserve/a-confirmer/wc-meuble-suspendu-niche.jpg` |
| AN | `image0000011.jpg` | `photo/reserve/a-confirmer/wc-meuble-suspendu-lave-mains.jpg` |
