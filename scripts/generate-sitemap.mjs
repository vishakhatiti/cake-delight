import fs from "node:fs";
import path from "node:path";

const siteUrl =
  process.env.VITE_SITE_URL ||
  "https://cake-delight-shewalewadi.vercel.app";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

const outputDirectory = path.resolve("dist");
const outputFile = path.join(outputDirectory, "sitemap.xml");

fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(outputFile, sitemap, "utf8");

console.log(`Sitemap generated: ${outputFile}`);