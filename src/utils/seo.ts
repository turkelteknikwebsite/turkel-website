// SEO utilities for Türkel Global Stands

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateStructuredData(page: 'home' | 'about' | 'services' | 'projects' | 'contact') {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Türkel Global Stands",
    "url": "https://turkelglobal.com",
    "logo": "https://turkelglobal.com/logo.png",
    "description": "Fuar standı tasarımı ve üretiminde uzman şirket. Özel dekor stant, modüler stant ve grup stant çözümleri.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressLocality": "İstanbul"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-212-345-67-89",
      "contactType": "customer service",
      "email": "info@turkelglobal.com",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.linkedin.com/company/turkel-global",
      "https://www.instagram.com/turkelglobal"
    ]
  };

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
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'monthly' },
    { url: '/hakkimizda', priority: 0.8, changefreq: 'yearly' },
    { url: '/hizmetler', priority: 0.9, changefreq: 'monthly' },
    { url: '/projeler', priority: 0.8, changefreq: 'weekly' },
    { url: '/iletisim', priority: 0.7, changefreq: 'yearly' },
  ];

  return pages.map(page => ({
    ...page,
    url: `${baseUrl}${page.url}`,
    lastmod: new Date().toISOString().split('T')[0]
  }));
}
