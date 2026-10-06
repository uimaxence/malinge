// Génère public/patterns/bois.svg : un motif « veines de bois » en lignes
// fines, raccordable (tuile répétable horizontalement et verticalement).
//
// Usage : npm run pattern:gen
//
// Le SVG est utilisé comme *masque* CSS (classe `.pattern-bois` dans
// src/styles/global.css) : la couleur vient du CSS (bleu du logo par défaut),
// seule l'alpha du motif compte. Il reste néanmoins tracé dans le bleu
// #4f8dc1 pour pouvoir servir directement en background-image.
import { writeFileSync } from "node:fs";

const W = 720; // largeur de la tuile
const H = 480; // hauteur de la tuile
const STEP = 5; // échantillonnage en x
const COLOR = "#4f8dc1";

// Générateur pseudo-aléatoire déterministe (même motif à chaque exécution).
let seed = 20260921;
const rnd = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const between = (a, b) => a + (b - a) * rnd();
const r1 = (n) => Math.round(n * 10) / 10;

// --- Nœuds du bois : les veines s'écartent autour --------------------------
// Placés loin des bords horizontaux pour ne pas casser le raccord.
const knots = [
  { x: 210, y: 150, rx: 96, ry: 62, R: 32, rings: 6 },
  { x: 520, y: 340, rx: 80, ry: 50, R: 24, rings: 5 },
];

// --- Veines : ondulations périodiques (k entier → raccord horizontal) ------
// Phases partagées par toutes les veines (fil du bois cohérent), avec une
// dérive légère par veine pour qu'elles ne soient pas parallèles.
const basePhase = [between(0, 6.28), between(0, 6.28), between(0, 6.28), between(0, 6.28)];
const harmonics = [
  { k: 1, a: 8 },
  { k: 2, a: 3.6 },
  { k: 3, a: 2 },
  { k: 5, a: 1.1 },
];

const GAP = 30;
const veins = [];
let y = between(8, 14);
let idx = 0;
while (y < H - 6) {
  veins.push({
    y0: y,
    ampScale: between(0.55, 1.6),
    drift: basePhase.map(() => between(-0.45, 0.45)),
    width: r1(between(0.5, 1.6)),
    opacity: r1(between(0.3, 0.9)),
    // certaines veines se dédoublent : trait secondaire plus fin, très proche
    twin: rnd() < 0.3 ? between(2.5, 4.5) : 0,
  });
  // espacement qui respire (zones serrées / zones lâches, comme le fil du bois)
  y += GAP * (1 + 0.35 * Math.sin(idx * 0.9)) + between(-8, 8);
  idx++;
}

function veinY(v, x) {
  let yy = v.y0;
  harmonics.forEach((h, i) => {
    yy += h.a * v.ampScale * Math.sin((2 * Math.PI * h.k * x) / W + basePhase[i] + v.drift[i]);
  });
  for (const k of knots) {
    const d = v.y0 - k.y;
    const sign = d >= 0 ? 1 : -1;
    const amp = k.R * Math.exp(-Math.pow(Math.abs(d) / k.ry, 1.15));
    const bump = Math.exp(-Math.pow((x - k.x) / k.rx, 2));
    yy += sign * amp * bump;
  }
  return yy;
}

function pathFor(v, offset = 0) {
  const pts = [];
  for (let x = 0; x <= W; x += STEP) pts.push(`${x} ${r1(veinY(v, x) + offset)}`);
  // Le dernier point (x = W) a la même ordonnée que x = 0 : raccord horizontal.
  return "M" + pts.join(" L");
}

let body = "";
for (const v of veins) {
  body += `<path d="${pathFor(v)}" stroke-width="${v.width}" stroke-opacity="${v.opacity}"/>\n`;
  if (v.twin) {
    body += `<path d="${pathFor(v, v.twin)}" stroke-width="${r1(v.width * 0.6)}" stroke-opacity="${r1(v.opacity * 0.6)}"/>\n`;
  }
}

// Fragments : veines courtes et fines, irrégularités du fil (loin des bords
// horizontaux pour conserver le raccord).
for (let i = 0; i < 9; i++) {
  const v = veins[Math.floor(rnd() * veins.length)];
  const len = between(90, 240);
  const x0 = between(24, W - 24 - len);
  const offset = (rnd() < 0.5 ? -1 : 1) * between(6, 13);
  const pts = [];
  for (let x = x0; x <= x0 + len; x += STEP) {
    // amorti aux extrémités : le fragment s'efface en fondu
    const t = (x - x0) / len;
    const fade = Math.sin(Math.PI * t);
    pts.push(`${r1(x)} ${r1(veinY(v, x) + offset * (0.6 + 0.4 * fade))}`);
  }
  body += `<path d="M${pts.join(" L")}" stroke-width="${r1(between(0.4, 0.8))}" stroke-opacity="${r1(between(0.25, 0.5))}"/>\n`;
}

// Cernes des nœuds : ellipses concentriques légèrement inclinées.
for (const k of knots) {
  const tilt = r1(between(-14, 14));
  for (let i = 0; i < k.rings; i++) {
    const rx = 4 + i * 6.2;
    const ry = 2.6 + i * 3.7;
    body += `<ellipse cx="${k.x}" cy="${k.y}" rx="${r1(rx)}" ry="${r1(ry)}" transform="rotate(${tilt} ${k.x} ${k.y})" stroke-width="${r1(1.2 - i * 0.12)}" stroke-opacity="${r1(0.85 - i * 0.1)}"/>\n`;
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none" stroke="${COLOR}" stroke-linecap="round" stroke-linejoin="round">
<!-- Motif « veines de bois » — généré par scripts/gen-pattern-bois.mjs, ne pas éditer à la main. -->
${body}</svg>
`;

writeFileSync("public/patterns/bois.svg", svg);
console.log(`bois.svg : ${veins.length} veines, ${knots.length} nœuds, ${(svg.length / 1024).toFixed(1)} Ko`);
