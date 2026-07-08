import { SITE_URL } from '$lib/site.js';
import { articles } from '$lib/articles.js';

// Dynamic sitemap. It always reflects the current set of articles, so new
// stories are discoverable by search engines the moment they ship — no manual
// upkeep. Served as a serverless function; Vercel caches the response.
export function GET() {
  const pages = [
    { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'daily' },
    ...Object.keys(articles).map((slug) => ({
      loc: `${SITE_URL}/news/${slug}`,
      priority: '0.8',
      changefreq: 'weekly'
    }))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url>\n    <loc>${p.loc}</loc>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
