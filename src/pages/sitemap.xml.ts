import type { APIRoute } from 'astro';
import { generateSitemapUrls } from '../utils/seo';

export const GET: APIRoute = () => {
  const urls = generateSitemapUrls();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map(url => `  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>${url.alternates.map((alt: { lang: string; url: string }) => `
    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`).join('')}
    <xhtml:link rel="alternate" hreflang="${url.lang}" href="${url.url}" />
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
