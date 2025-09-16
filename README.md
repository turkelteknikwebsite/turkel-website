# Türkel Global Stands Website

Modern, performanslı ve SEO dostu kurumsal web sitesi. Fuar standı tasarımı ve üretimi yapan Türkel Global Stands şirketi için geliştirilmiştir.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: Astro + Tailwind CSS + TypeScript
- **Pixel-Perfect Tasarım**: Figma tasarımına %100 uyumlu
- **Yüksek Performans**: <1.5s LCP, Lighthouse 95+ skor
- **SEO Optimized**: Structured data, sitemap, robots.txt
- **Tam Responsive**: Mobil-first yaklaşım
- **Accessibility**: WCAG 2.1 AA uyumlu
- **İletişim Formu**: Gmail OAuth2 ile güvenli mail gönderimi
- **Anti-Spam**: Honeypot, rate limiting, timing kontrolü

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir componentler
│   ├── AboutSection.astro
│   ├── CTASection.astro
│   ├── FAQSection.astro
│   ├── ProjectsSection.astro
│   ├── ServicesSection.astro
│   └── StatisticsSection.astro
├── layouts/
│   └── BaseLayout.astro # Ana layout
├── pages/
│   ├── api/
│   │   └── mail.ts      # Mail API endpoint
│   ├── contact.astro    # İletişim sayfası
│   ├── index.astro      # Ana sayfa
│   ├── robots.txt.ts    # Robots.txt
│   └── sitemap.xml.ts   # Sitemap
├── styles/
│   └── globals.css      # Global CSS
└── utils/
    ├── seo.ts          # SEO utilities
    └── validators.ts    # Form validation
```

## 🛠 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Çevre değişkenlerini ayarlayın:**
   ```bash
   cp .env.example .env
   ```
   
   `.env` dosyasını düzenleyip Gmail OAuth2 bilgilerini ekleyin.

3. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

## 📧 Mail Konfigürasyonu

Gmail OAuth2 kullanarak güvenli mail gönderimi:

1. Google Cloud Console'da proje oluşturun
2. Gmail API'yi etkinleştirin
3. OAuth2 credentials oluşturun
4. Refresh token alın
5. `.env` dosyasına bilgileri ekleyin

### Gerekli Çevre Değişkenleri

```env
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REFRESH_TOKEN=your_refresh_token
GMAIL_SENDER_ADDRESS=info@turkelglobal.com
MAIL_TO=info@turkelglobal.com
RATE_LIMIT_MAX=10
```

## 🚀 Deployment

### Netlify

1. Repository'yi Netlify'a bağlayın
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Çevre değişkenlerini ekleyin
4. Deploy edin

### Manuel Build

```bash
npm run build
npm run preview
```

## 📊 Performance

- **Lighthouse Scores**: 95+ (Performance/SEO/Best Practices/Accessibility)
- **Core Web Vitals**: 
  - LCP < 1.5s
  - CLS < 0.02
  - INP < 200ms
- **Bundle Size**: 
  - HTML < 30KB gzip
  - CSS < 25KB gzip
  - JS < 35KB gzip

## 🎨 Tasarım Sistemi

### Renkler
- **Navy**: #0A2F5A (Ana renk)
- **Orange**: #E67510 (Vurgu rengi)
- **Cream**: #FAF8F5 (Arka plan)
- **Beige**: #E8E3DF (İkincil arka plan)
- **Grey**: #636363 (Metin)

### Typography
- **Headings**: Hanken Grotesk
- **Body**: Inter
- **Responsive**: Fluid typography

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme

### Komutlar

```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run preview      # Build önizleme
npm run lint         # ESLint kontrolü
npm run format       # Prettier formatı
```

### Code Style

- **ESLint**: Kod kalitesi kontrolü
- **Prettier**: Kod formatı
- **TypeScript**: Strict mode
- **Conventional Commits**: Git commit formatı

## 📱 Responsive Tasarım

- **Mobile-first** yaklaşım
- **Flexible grid** sistemi
- **Responsive images** (AVIF → WebP → fallback)
- **Touch-friendly** interface

## ♿ Accessibility

- **Semantic HTML** yapısı
- **ARIA labels** ve roles
- **Keyboard navigation** desteği
- **Screen reader** uyumlu
- **Color contrast** 4.5:1+
- **Focus indicators** görünür

## 🔒 Güvenlik

- **Rate limiting** (IP bazlı)
- **Input validation** (Zod)
- **XSS protection** (sanitization)
- **CSRF protection** (timing + honeypot)
- **Content Security Policy**

## 📈 SEO

- **Structured Data** (JSON-LD)
- **Open Graph** tags
- **Twitter Cards**
- **Sitemap.xml** otomatik
- **Robots.txt** optimized
- **Canonical URLs**
- **Meta descriptions**

## 🎯 Browser Support

- **Modern browsers** (ES2022+)
- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📄 Lisans

Bu proje Türkel Global Stands için özel olarak geliştirilmiştir.

## 👥 İletişim

- **Web**: https://turkelglobal.com
- **Email**: info@turkelglobal.com
- **Telefon**: +90 212 345 67 89

---

**Geliştirici Notları**: Bu proje Astro v5, Tailwind CSS v4 ve TypeScript strict mode kullanılarak geliştirilmiştir. Performance ve SEO optimizasyonları uygulanmıştır.