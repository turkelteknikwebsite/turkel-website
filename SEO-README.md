# SEO Yapılandırması - Türkel Global Stands

## 📋 İçindekiler
1. [Genel Bakış](#genel-bakış)
2. [SEO Özellikleri](#seo-özellikleri)
3. [Yapılandırma](#yapılandırma)
4. [Kullanım](#kullanım)
5. [Kontrol Listesi](#kontrol-listesi)

---

## 🎯 Genel Bakış

Türkel Global Stands web sitesi için kapsamlı SEO altyapısı kurulmuştur. Bu dokümantasyon, SEO ayarlarının nasıl çalıştığını ve nasıl yönetileceğini açıklar.

### Temel SEO Özellikleri

✅ **Meta Tags**
- Title, Description, Keywords
- Author, Language
- Robots directives
- Geo-location tags

✅ **Open Graph (Facebook)**
- OG Title, Description, Image
- Locale settings
- Image dimensions

✅ **Twitter Cards**
- Card type: summary_large_image
- Twitter specific meta tags

✅ **Çoklu Dil Desteği (i18n)**
- Hreflang tags (TR/EN)
- Alternate language links
- Language-specific sitemap

✅ **Structured Data (JSON-LD)**
- Organization schema
- Service schema
- Local business data

✅ **Sitemap & Robots.txt**
- XML sitemap with hreflang
- Robots.txt configuration
- Automatic lastmod dates

---

## 🔧 SEO Özellikleri

### 1. Meta Tags

Her sayfada otomatik olarak eklenen meta taglar:

```html
<!-- Temel SEO -->
<title>Sayfa Başlığı</title>
<meta name="description" content="Sayfa açıklaması" />
<meta name="keywords" content="anahtar, kelimeler" />
<meta name="author" content="Türkel Global Stands" />

<!-- Robots -->
<meta name="robots" content="index, follow, max-image-preview:large" />
<meta name="googlebot" content="index, follow" />

<!-- Geo Location -->
<meta name="geo.region" content="TR-34" />
<meta name="geo.placename" content="Istanbul" />
```

### 2. Hreflang Tags

Çoklu dil desteği için:

```html
<link rel="alternate" hreflang="tr" href="https://turkelglobal.com/" />
<link rel="alternate" hreflang="en" href="https://turkelglobal.com/en" />
<link rel="alternate" hreflang="x-default" href="https://turkelglobal.com/" />
```

### 3. Open Graph Tags

Sosyal medya paylaşımları için:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Sayfa Başlığı" />
<meta property="og:description" content="Açıklama" />
<meta property="og:image" content="https://turkelglobal.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="tr_TR" />
```

### 4. Structured Data (JSON-LD)

Arama motorları için yapılandırılmış veri:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Türkel Global Stands",
  "url": "https://turkelglobal.com",
  "logo": "https://turkelglobal.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4.Levent Plaza",
    "addressLocality": "Sarıyer",
    "addressRegion": "İstanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  }
}
```

---

## ⚙️ Yapılandırma

### SEO Config Dosyası

`src/config/seo.ts` dosyasında tüm SEO ayarları merkezi olarak yönetilir:

```typescript
import { SEO_CONFIG } from '../config/seo';

// Şirket bilgileri
SEO_CONFIG.company.name
SEO_CONFIG.company.email
SEO_CONFIG.company.phone

// Sayfa bazlı SEO
SEO_CONFIG.pages.home.tr.title
SEO_CONFIG.pages.home.tr.description
SEO_CONFIG.pages.home.tr.keywords
```

### Sayfa Bazlı Ayarlar

Her sayfa için özel SEO ayarları:

```astro
---
import { getPageKeywords } from '../utils/seo';

const lang = 'tr'; // veya 'en'
---

<BaseLayout 
  title="Sayfa Başlığı"
  description="Sayfa açıklaması"
  keywords={getPageKeywords('home', lang)}
/>
```

---

## 📝 Kullanım

### Yeni Sayfa Eklerken

1. **SEO Config'e sayfa ekleyin** (`src/config/seo.ts`):

```typescript
pages: {
  newPage: {
    tr: {
      title: 'Yeni Sayfa - Türkel Global',
      description: 'Sayfa açıklaması',
      keywords: 'anahtar kelimeler'
    },
    en: {
      title: 'New Page - Türkel Global',
      description: 'Page description',
      keywords: 'keywords'
    }
  }
}
```

2. **Sitemap'e ekleyin** (`src/utils/seo.ts`):

```typescript
const trPages = [
  // ... mevcut sayfalar
  { url: '/yeni-sayfa', priority: 0.8, changefreq: 'monthly', lang: 'tr', alternates: { en: '/en/new-page' } }
];

const enPages = [
  // ... mevcut sayfalar
  { url: '/en/new-page', priority: 0.8, changefreq: 'monthly', lang: 'en', alternates: { tr: '/yeni-sayfa' } }
];
```

3. **BaseLayout'da kullanın**:

```astro
<BaseLayout 
  title={getPageSEO('newPage', lang).title}
  description={getPageSEO('newPage', lang).description}
  keywords={getPageKeywords('newPage', lang)}
/>
```

### OG Image Değiştirme

```astro
<BaseLayout 
  title="Sayfa Başlığı"
  description="Açıklama"
  ogImage="/custom-og-image.jpg"  <!-- Özel görsel -->
/>
```

**OG Image Gereksinimleri:**
- Boyut: 1200x630 px
- Format: JPG, PNG
- Dosya boyutu: Max 8 MB
- Konum: `/public/` klasörü

---

## ✅ Kontrol Listesi

### SEO Temel Kontrolleri

- [x] Title tags (50-60 karakter)
- [x] Meta descriptions (150-160 karakter)
- [x] Keywords meta tags
- [x] Canonical URLs
- [x] Robots meta tags
- [x] Hreflang tags (TR/EN)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured Data (JSON-LD)
- [x] XML Sitemap
- [x] Robots.txt
- [x] Favicon set
- [x] Mobile-friendly meta viewport
- [x] Language tags

### Teknik SEO

- [x] SSL/HTTPS enabled
- [x] Sitemap.xml configured
- [x] Robots.txt configured
- [x] 404 error handling
- [x] Page load optimization
- [x] Image alt tags
- [x] Semantic HTML structure
- [x] Clean URL structure
- [x] Internal linking

### İçerik SEO

- [x] Unique titles per page
- [x] Unique descriptions per page
- [x] H1 tags on every page
- [x] Proper heading hierarchy (H1-H6)
- [x] Keyword optimization
- [x] Content quality
- [x] Mobile responsiveness

---

## 🔍 SEO Araçları ile Test

### Google Search Console
1. Site ekleyin: `https://search.google.com/search-console`
2. Sitemap gönderin: `https://turkelglobal.com/sitemap.xml`
3. URL inspection ile sayfaları kontrol edin

### Diğer Araçlar
- **Google PageSpeed Insights**: Performans testi
- **Google Rich Results Test**: Structured data testi
- **Google Mobile-Friendly Test**: Mobil uyumluluk
- **Screaming Frog**: Site crawl
- **Ahrefs/SEMrush**: Kapsamlı SEO analizi

---

## 📊 Sitemap Yapısı

Sitemap otomatik olarak şu sayfaları içerir:

### Türkçe Sayfalar
- `/` (Ana Sayfa)
- `/hakkimizda`
- `/hizmetler`
- `/projeler`
- `/iletisim`

### İngilizce Sayfalar
- `/en` (Home)
- `/en/about`
- `/en/services`
- `/en/projects`
- `/en/contact`

Her URL için:
- `lastmod`: Otomatik güncellenir
- `changefreq`: Sayfa tipine göre ayarlanmış
- `priority`: 0.7 - 1.0 arası
- `hreflang`: TR/EN alternatifleri

---

## 🚀 Robots.txt Yapısı

```txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://turkelglobal.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Blocked paths
Disallow: /admin/
Disallow: /api/
```

---

## 📈 SEO Performans Metrikleri

### Takip Edilmesi Gerekenler

1. **Organic Traffic**
   - Google Analytics ile izleyin
   - Hedef: Aylık %10+ artış

2. **Keyword Rankings**
   - Ana keywords: fuar standı, stand tasarımı, etc.
   - Takip aracı: Google Search Console

3. **Click-Through Rate (CTR)**
   - Hedef: %3-5+
   - İyileştirme: Title/description optimizasyonu

4. **Bounce Rate**
   - Hedef: %40 altı
   - İyileştirme: İçerik kalitesi, sayfa hızı

5. **Page Load Speed**
   - Hedef: < 3 saniye
   - Tool: Google PageSpeed Insights

---

## 🔄 Güncelleme Notları

### Son Güncellemeler
- ✅ Çoklu dil desteği eklendi (TR/EN)
- ✅ Hreflang tags eklendi
- ✅ Structured data genişletildi
- ✅ Sitemap hreflang desteği
- ✅ Geo-location tags eklendi
- ✅ Twitter Card tags eklendi

### Planlanan İyileştirmeler
- [ ] Blog structured data
- [ ] FAQ structured data
- [ ] Product structured data (projeler için)
- [ ] Video structured data
- [ ] Breadcrumb structured data
- [ ] Review/Rating schema

---

## 📞 Destek ve İletişim

SEO ile ilgili sorularınız için:
- Email: globalstand@turkel.com.tr
- Tel: +90 (212) 284 23 00

---

## 📚 Kaynaklar

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Hreflang Guide](https://developers.google.com/search/docs/advanced/crawling/localized-versions)

---

**Son Güncelleme:** 30 Eylül 2025
**Versiyon:** 1.0.0
