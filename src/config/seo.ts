// SEO Configuration for Türkel Global Stands
export const SEO_CONFIG = {
  // Site Information
  siteName: 'Türkel Global Stands',
  siteUrl: 'https://turkelglobal.com',
  defaultLanguage: 'tr',
  languages: ['tr', 'en'],
  
  // Company Information
  company: {
    name: 'Türkel Global Stands',
    legalName: 'Türkel Global Stand Tasarım ve Üretim A.Ş.',
    foundingDate: '2000',
    email: 'globalstand@turkel.com.tr',
    phone: '+90 (212) 284 23 00',
    address: {
      street: '4.Levent Plaza',
      city: 'İstanbul',
      region: 'Sarıyer',
      postalCode: '34000',
      country: 'TR',
      countryName: 'Türkiye'
    },
    geo: {
      latitude: '41.0884',
      longitude: '29.0165'
    }
  },
  
  // Social Media
  social: {
    linkedin: 'https://www.linkedin.com/company/turkel-global',
    instagram: 'https://www.instagram.com/turkelglobal',
    twitter: '',
    facebook: '',
    youtube: ''
  },
  
  // Default Meta Tags
  defaultMeta: {
    author: 'Türkel Global Stands',
    keywords: [
      'fuar standı',
      'stand tasarımı',
      'fuar stand üretimi',
      'özel dekor stant',
      'modüler stant',
      'premium stant',
      'milli katılım standı',
      'podyum üretimi',
      'exhibition stand',
      'stand design',
      'trade fair stand',
      'custom stand',
      'modular stand',
      'national pavilion'
    ],
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googlebot: 'index, follow',
    revisitAfter: '7 days'
  },
  
  // Open Graph Defaults
  og: {
    type: 'website',
    siteName: 'Türkel Global Stands',
    locale: {
      tr: 'tr_TR',
      en: 'en_US'
    }
  },
  
  // Twitter Card Defaults
  twitter: {
    card: 'summary_large_image',
    site: '@turkelglobal',
    creator: '@turkelglobal'
  },
  
  // Page-specific SEO
  pages: {
    home: {
      tr: {
        title: 'Türkel Global Stands - Fuar Standı Tasarımı ve Üretimi',
        description: 'Fuar standı tasarımı ve üretiminde 25+ yıllık deneyim. Özel dekor stant, modüler stant, premium ahşap stant ve milli katılım standı çözümleri. Türkiye\'nin lider fuar stand şirketi.',
        keywords: 'fuar standı, stand tasarımı, fuar stand üretimi, özel stant, modüler stant, İstanbul fuar standı'
      },
      en: {
        title: 'Türkel Global Stands - Exhibition Stand Design & Construction',
        description: '25+ years of experience in exhibition stand design and construction. Custom stands, modular stands, premium wooden stands and national pavilion solutions. Turkey\'s leading trade fair stand company.',
        keywords: 'exhibition stand, stand design, trade fair stand, custom stand, modular stand, Istanbul exhibition stand'
      }
    },
    about: {
      tr: {
        title: 'Hakkımızda - Türkel Global Stands',
        description: '25+ yıldır fuar standı sektöründe öncü. 500+ başarılı proje, 50+ ülkede hizmet ve dünya çapında güvenilen partnerlikleri ile sektörün lideri.',
        keywords: 'türkel global, fuar standı şirketi, stand tasarım firması, türkiye stand üretimi'
      },
      en: {
        title: 'About Us - Türkel Global Stands',
        description: 'Leading the exhibition stand industry for 25+ years. 500+ successful projects, services in 50+ countries and trusted partnerships worldwide.',
        keywords: 'turkel global, exhibition stand company, stand design firm, turkey stand construction'
      }
    },
    services: {
      tr: {
        title: 'Hizmetlerimiz - Fuar Standı Tasarımı ve Üretimi | Türkel Global',
        description: 'Özel dekor stant, standart stant, premium modüler, premium ahşap, milli katılım stant, podyum üretimi ve özel tasarım hizmetleri. Tasarımdan kuruluma tüm süreçleri yönetiyoruz.',
        keywords: 'özel dekor stant, standart stant, premium modüler stant, premium ahşap stant, milli katılım stant, podyum üretimi'
      },
      en: {
        title: 'Our Services - Exhibition Stand Design & Construction | Türkel Global',
        description: 'Custom decor stand, standard stand, premium modular, premium wood, national participation stand, podium production and custom design services. We manage all processes from design to installation.',
        keywords: 'custom decor stand, standard stand, premium modular stand, premium wood stand, national pavilion, podium production'
      }
    },
    projects: {
      tr: {
        title: 'Projelerimiz - Başarılı Fuar Standı Çalışmalarımız | Türkel Global',
        description: '500+ başarılı fuar standı projesi. Elektrik, enerji, otomotiv, tekstil ve daha fazla sektörde gerçekleştirdiğimiz özel tasarım stantlarımızı keşfedin.',
        keywords: 'fuar standı projeleri, stand referansları, başarılı stand tasarımları, fuar stand örnekleri'
      },
      en: {
        title: 'Our Projects - Successful Exhibition Stand Works | Türkel Global',
        description: '500+ successful exhibition stand projects. Discover our custom design stands in electrical, energy, automotive, textile and many more sectors.',
        keywords: 'exhibition stand projects, stand references, successful stand designs, trade fair stand examples'
      }
    },
    contact: {
      tr: {
        title: 'İletişim - Türkel Global Stands',
        description: 'Fuar standı tasarımı ve üretimi için bizimle iletişime geçin. Ücretsiz teklif alın, projelerinizi görüşelim. İstanbul merkezli, dünya çapında hizmet.',
        keywords: 'fuar standı iletişim, stand teklifi, fuar stand fiyatı, türkel iletişim'
      },
      en: {
        title: 'Contact - Türkel Global Stands',
        description: 'Contact us for exhibition stand design and construction. Get a free quote, let\'s discuss your projects. Based in Istanbul, serving worldwide.',
        keywords: 'exhibition stand contact, stand quote, trade fair stand price, turkel contact'
      }
    }
  },
  
  // Structured Data Templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://turkelglobal.com/#organization',
      name: 'Türkel Global Stands',
      legalName: 'Türkel Global Stand Tasarım ve Üretim A.Ş.',
      url: 'https://turkelglobal.com',
      logo: 'https://turkelglobal.com/logo.png',
      foundingDate: '2000',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 50
      },
      slogan: 'Fuarlarda Güçlü İmaj',
      description: 'Fuar standı tasarımı ve üretiminde uzman şirket. Özel dekor stant, modüler stant ve grup stant çözümleri.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4.Levent Plaza',
        addressLocality: 'Sarıyer',
        addressRegion: 'İstanbul',
        postalCode: '34000',
        addressCountry: 'TR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '41.0884',
        longitude: '29.0165'
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+90-212-284-23-00',
          contactType: 'customer service',
          email: 'globalstand@turkel.com.tr',
          availableLanguage: ['Turkish', 'English'],
          areaServed: 'Worldwide'
        },
        {
          '@type': 'ContactPoint',
          telephone: '+90-212-284-23-00',
          contactType: 'sales',
          email: 'globalstand@turkel.com.tr',
          availableLanguage: ['Turkish', 'English']
        }
      ],
      sameAs: [
        'https://www.linkedin.com/company/turkel-global',
        'https://www.instagram.com/turkelglobal'
      ],
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '41.0884',
          longitude: '29.0165'
        },
        geoRadius: 'worldwide'
      }
    }
  },
  
  // Verification Codes (to be filled)
  verification: {
    google: '', // Google Search Console
    bing: '',   // Bing Webmaster Tools
    yandex: ''  // Yandex Webmaster
  }
};

// Helper function to get page SEO data
export function getPageSEO(page: keyof typeof SEO_CONFIG.pages, lang: 'tr' | 'en' = 'tr') {
  return SEO_CONFIG.pages[page][lang];
}

// Helper function to get full URL
export function getFullUrl(path: string) {
  return `${SEO_CONFIG.siteUrl}${path}`;
}
