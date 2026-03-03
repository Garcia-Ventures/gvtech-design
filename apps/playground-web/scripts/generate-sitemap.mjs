import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(process.cwd());
const ROUTES_FILE = resolve(ROOT, 'src/routes/doc-routes.tsx');
const SITEMAP_FILE = resolve(ROOT, 'public/sitemap.xml');

const DEFAULT_SITE_URL = 'https://gvtech-design.pages.dev';
const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

const routesSource = readFileSync(ROUTES_FILE, 'utf8');
const routePattern = /path:\s*'([^']+)'/g;

const docSlugs = new Set();
for (const match of routesSource.matchAll(routePattern)) {
  if (match[1]) {
    docSlugs.add(match[1]);
  }
}

const staticPaths = ['/'];
const docPaths = [...docSlugs].sort((first, second) => first.localeCompare(second)).map((slug) => `/docs/${slug}`);

const urls = [...staticPaths, ...docPaths];
const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')}\n</urlset>\n`;

writeFileSync(SITEMAP_FILE, xml, 'utf8');
console.log(`Sitemap generated with ${urls.length} URLs at ${SITEMAP_FILE}`);
