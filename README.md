# Company website

Public. Astro static site, Slovene at the root and English under `/en`, deployed
to GitHub Pages by `.github/workflows/deploy.yml`. One site, two doors
(manufacturing, lab) and a notes section that doubles as the public engineering
log.

```bash
npm install
npm run dev      # http://localhost:4321
just check       # = npm run build
```

## Where things are

| Path | What |
|---|---|
| `src/brand.js` | Name, URL, email — the only place the brand is spelled out |
| `src/i18n.js` | Nav strings and route map for both languages |
| `src/components/*.astro` | Page content, both languages side by side in one `copy` object |
| `src/pages/` | Thin route wrappers (`/`, `/proizvodnja`, `/laboratorij`, `/zapiski`, `/kontakt`, and `/en/...`) |
| `src/content/notes/<lang>/` | Markdown notes; `draft: true` keeps one out of the build |

## Going live

1. Register `celicasystems.si` (brand is set in `src/brand.js`).
2. Repo settings → Pages → Source: **GitHub Actions**. Push to `main`.
3. Custom domain: add it under Pages, create the DNS records at the registrar,
   add `public/CNAME` containing `celicasystems.si`.
4. Set up email on the domain with SPF, DKIM and DMARC before sending outreach.

No analytics, no cookies, no form backend by design. Add Plausible (or nothing)
and a form service only when there is a reason.
