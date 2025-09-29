import { ui } from '../i18n/ui';

export const languages = {
  tr: 'Türkçe',
  en: 'English',
};

export const defaultLang = 'tr';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/');
  const lang = parts[1];
  
  if (lang in ui) {
    return '/' + parts.slice(2).join('/');
  }
  return pathname;
}

// URL mappings for different languages
const urlMappings = {
  tr: {
    '/': '/',
    '/hakkimizda': '/hakkimizda',
    '/hizmetler': '/hizmetler', 
    '/projeler': '/projeler',
    '/iletisim': '/iletisim'
  },
  en: {
    '/': '/',
    '/hakkimizda': '/about',
    '/hizmetler': '/services',
    '/projeler': '/projects', 
    '/iletisim': '/contact'
  }
} as const;

export function translatePath(path: string, lang: string): string {
  const mappings = urlMappings[lang as keyof typeof urlMappings] || urlMappings[defaultLang];
  const translatedPath = mappings[path as keyof typeof mappings] || path;
  
  if (lang === defaultLang) {
    return translatedPath;
  }
  return `/${lang}${translatedPath}`;
}

export function getOppositeLanguagePath(currentUrl: URL): string {
  const currentLang = getLangFromUrl(currentUrl);
  const targetLang = currentLang === 'tr' ? 'en' : 'tr';
  
  // Get the current path without language prefix
  let currentPath = currentUrl.pathname;
  
  // Remove language prefix if it exists
  if (currentLang === 'en' && currentPath.startsWith('/en')) {
    currentPath = currentPath.replace('/en', '') || '/';
  }
  
  // Map current path to target language
  const currentMappings = urlMappings[currentLang];
  const targetMappings = urlMappings[targetLang];
  
  // Find the base path key
  let baseKey = '/';
  for (const [key, value] of Object.entries(currentMappings)) {
    if (value === currentPath) {
      baseKey = key;
      break;
    }
  }
  
  // Get target path
  const targetPath = targetMappings[baseKey as keyof typeof targetMappings] || currentPath;
  
  // Return the final URL
  if (targetLang === 'tr') {
    return targetPath;
  } else {
    return `/en${targetPath}`;
  }
}
