// Prints every photograph slot the site expects, and whether the file exists yet.
//   npm run images
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = readFileSync(join(root, "data/buliTrulku.ts"), "utf8");

// literal paths + the helper-built ones (teachers, places, gallery)
const paths = new Set(data.match(/"\/images\/[^"]+\.(?:jpg|png|webp)"/g)?.map((s) => s.slice(1, -1)) ?? []);

const helper = (re, build) => {
  for (const m of data.matchAll(re)) build(m).forEach((p) => paths.add(p));
};
helper(/T\("([^"]+)"\)/g, (m) => [`/images/teachers/${m[1]}.jpg`]);
helper(/P\("([^"]+)"\)/g, (m) => [`/images/places/${m[1]}.jpg`]);
helper(/G\("([^"]+)",\s*(\d+)\)/g, (m) => [`/images/gallery/${m[1]}/${String(m[2]).padStart(2, "0")}.jpg`]);

let have = 0;
const rows = [...paths].sort().map((p) => {
  const ok = existsSync(join(root, "public", p));
  if (ok) have++;
  return `${ok ? "✔" : "·"}  ${p}`;
});
console.log(rows.join("\n"));
console.log(`\n${have} of ${rows.length} photographs in place. Missing ones show "Photograph coming soon".`);
