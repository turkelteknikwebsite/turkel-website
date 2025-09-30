// SEO utilities for Türkel Global Stands
import { SEO_CONFIG, getPageSEO } from '../config/seo';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string;
  author?: string;
}

// Helper to get keywords for a page
export function getPageKeywords(page: keyof typeof SEO_CONFIG.pages, lang: 'tr' | 'en' = 'tr'): string {
  const pageSEO = getPageSEO(page, lang);
  return pageSEO.keywords || SEO_CONFIG.defaultMeta.keywords.join(', ');
}

export function generateStructuredData(page: 'home' | 'about' | 'services' | 'projects' | 'contact') {
  // Use organization data from SEO_CONFIG
  const baseOrganization = SEO_CONFIG.structuredData.organization;

  switch (page) {
    case 'home':
      return {
        ...baseOrganization,
        "@type": ["Organization", "LocalBusiness"],
        "priceRange": "$$",
        "serviceArea": {
          "@type": "Country",
          "name": "Turkey"
        }
      };

    case 'services':
      return [
        baseOrganization,
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Fuar Standı Tasarımı ve Üretimi",
          "provider": {
            "@type": "Organization",
            "name": "Türkel Global Stands"
          },
          "serviceType": "Exhibition Stand Design and Construction",
          "description": "Özel dekor stant, standart stant, premium modüler, premium ahşap ve grup stant tasarım ve üretim hizmetleri.",
          "areaServed": {
            "@type": "Country",
            "name": "Turkey"
          }
        }
      ];

    case 'about':
      return [
        baseOrganization,
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Türkel Global Stands"
          }
        }
      ];

    case 'contact':
      return [
        baseOrganization,
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Türkel Global Stands"
          }
        }
      ];

    default:
      return baseOrganization;
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateProjectStructuredData(project: {
  name: string;
  description: string;
  image: string;
  dateCreated: string;
  location?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.name,
    "description": project.description,
    "image": project.image,
    "dateCreated": project.dateCreated,
    "creator": {
      "@type": "Organization",
      "name": "Türkel Global Stands"
    },
    ...(project.location && {
      "locationCreated": {
        "@type": "Place",
        "name": project.location
      }
    })
  };
}

// Meta tag helpers
export function generateMetaTags(props: SEOProps) {
  const { title, description, canonical, ogImage = '/og-default.jpg', type = 'website' } = props;
  
  return {
    title,
    description,
    canonical,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogType: type,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage,
  };
}

// Sitemap generation helper
export function generateSitemapUrls() {
  const baseUrl = 'https://turkelglobal.com';
  const lastmod = new Date().toISOString().split('T')[0];
  
  // Turkish pages (default, no prefix)
  const trPages = [
    { url: '/', priority: 1.0, changefreq: 'monthly', lang: 'tr', alternates: { en: '/en' } },
    { url: '/hakkimizda', priority: 0.8, changefreq: 'yearly', lang: 'tr', alternates: { en: '/en/about' } },
    { url: '/hizmetler', priority: 0.9, changefreq: 'monthly', lang: 'tr', alternates: { en: '/en/services' } },
    { url: '/projeler', priority: 0.8, changefreq: 'weekly', lang: 'tr', alternates: { en: '/en/projects' } },
    { url: '/iletisim', priority: 0.7, changefreq: 'yearly', lang: 'tr', alternates: { en: '/en/contact' } },
  ];
  
  // English pages
  const enPages = [
    { url: '/en', priority: 1.0, changefreq: 'monthly', lang: 'en', alternates: { tr: '/' } },
    { url: '/en/about', priority: 0.8, changefreq: 'yearly', lang: 'en', alternates: { tr: '/hakkimizda' } },
    { url: '/en/services', priority: 0.9, changefreq: 'monthly', lang: 'en', alternates: { tr: '/hizmetler' } },
    { url: '/en/projects', priority: 0.8, changefreq: 'weekly', lang: 'en', alternates: { tr: '/projeler' } },
    { url: '/en/contact', priority: 0.7, changefreq: 'yearly', lang: 'en', alternates: { tr: '/iletisim' } },
  ];

  const allPages = [...trPages, ...enPages];

  return allPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
    lang: page.lang,
    alternates: Object.entries(page.alternates).map(([lang, url]) => ({
      lang,
      url: `${baseUrl}${url}`
    }))
  }));
}
