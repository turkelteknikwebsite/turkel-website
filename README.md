# Türkel Global Stands Website

Modern, responsive web sitesi for Türkel Global Stands - Professional Exhibition Stand Design & Manufacturing company.

## 🚀 Features

- **Modern Design**: Clean, professional design with Astro and Tailwind CSS
- **Responsive**: Mobile-first approach with optimized layouts for all devices
- **Project Gallery**: Interactive modal galleries with image sliders
- **SEO Optimized**: Structured data, meta tags, and sitemap
- **Performance**: Fast loading with optimized images and assets
- **Contact Integration**: Contact form with Google Maps integration
- **Multi-language Ready**: Turkish language support with easy internationalization

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Deployment**: Netlify
- **Package Manager**: npm

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/turkelteknikwebsite/turkel-website.git

# Navigate to project directory
cd turkel-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── projects/          # Project images and galleries
│   ├── favicon files      # Various favicon sizes
│   └── assets/           # Static assets
├── src/
│   ├── components/       # Reusable Astro components
│   ├── data/            # JSON data files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
└── package.json
```

## 🎨 Pages

- **Homepage** (`/`) - Hero section, services overview, featured projects
- **About** (`/hakkimizda`) - Company information, mission, vision
- **Services** (`/hizmetler`) - Detailed service offerings
- **Projects** (`/projeler`) - Project gallery with filtering
- **Contact** (`/iletisim`) - Contact form and location

## 📊 Project Management

Projects are managed through JSON files in `src/data/projects.json`. Each project includes:

- Basic information (title, location, date, company)
- Main image and gallery images
- Project type and fair information
- Featured status for homepage display

## 🚀 Deployment

The site is configured for automatic deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The site will auto-deploy on every push to master

## 📧 Contact

- **Website**: [Türkel Global Stands](https://turkel.com.tr)
- **Email**: info@turkel.com.tr
- **Phone**: +90 (212) 284 23 00

## 📄 License

© 2025 Türkel Global Stands. All rights reserved.