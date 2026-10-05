// Shared UI strings. Page copy lives in each page component; only navigation
// and chrome are here so the layout stays language-agnostic.
export const ui = {
  sl: {
    nav: { home: 'Domov', manufacturing: 'Proizvodnja', lab: 'Laboratorij', notes: 'Zapiski', contact: 'Kontakt' },
    footer: { rights: 'Vse pravice pridržane.', privacy: 'Brez piškotkov in brez sledenja.' },
    switch: { label: 'English' },
  },
  en: {
    nav: { home: 'Home', manufacturing: 'Manufacturing', lab: 'Lab', notes: 'Notes', contact: 'Contact' },
    footer: { rights: 'All rights reserved.', privacy: 'No cookies, no tracking.' },
    switch: { label: 'Slovensko' },
  },
};

// Slovene and English slugs differ, so language switching goes through page
// keys rather than string-replacing a prefix. Paths are relative to the Astro
// base (e.g. "/celica-site" on the github.io preview, "/" on the real domain).
const paths = {
  sl: { home: '/', manufacturing: '/proizvodnja', lab: '/laboratorij', notes: '/zapiski', contact: '/kontakt' },
  en: { home: '/en', manufacturing: '/en/manufacturing', lab: '/en/lab', notes: '/en/notes', contact: '/en/contact' },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a site-relative path with the deployment base. */
export function withBase(path) {
  return `${base}${path}` || '/';
}

/** Route (with base) for a page key in a given language. */
export function route(lang, key) {
  return withBase(paths[lang][key]);
}

/** Strip the base from a pathname, so it can be compared with the route table. */
export function stripBase(pathname) {
  const p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p.replace(/\/$/, '') || '/';
}

/** Same page in the other language. Individual notes have no 1:1 twin, so they fall back to the notes index. */
export function altRoute(lang, path) {
  const other = lang === 'sl' ? 'en' : 'sl';
  const key = Object.keys(paths[lang]).find((k) => paths[lang][k] === path)
    ?? (path.startsWith(paths[lang].notes) ? 'notes' : 'home');
  return route(other, key);
}
