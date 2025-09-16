import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://turkelglobal.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Block admin/private areas (if any in future)
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /package.json
Disallow: /node_modules/

# Allow all images
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.svg$
Allow: /*.webp$
Allow: /*.avif$`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
