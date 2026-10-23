// Runs before `next build` (see package.json "prebuild") and writes public/sitemap.xml from the pages folder.
import { readdirSync, writeFileSync } from "node:fs";

const SITE_URL = "https://www.greanfarm.eu";
const priorities = { "/": "1.0", "/our-solutions/": "0.9", "/our-product/": "0.9", "/contact/": "0.8" };

const routes = readdirSync(new URL("../pages", import.meta.url))
  .filter((f) => /\.tsx?$/.test(f) && !f.startsWith("_") && !f.startsWith("404."))
  .map((f) => (f.startsWith("index.") ? "/" : `/${f.replace(/\.tsx?$/, "")}/`))
  .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorities[r] ?? "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${routes.length} URLs`);
