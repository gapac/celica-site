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

1. Repo settings → Pages → Source: **GitHub Actions**. Every push to `main` then
   deploys to `https://gapac.github.io/celica-site/`.
2. Register `celicasystems.si` (brand is set in `src/brand.js`).
3. Custom domain, in this order:
   1. DNS at the registrar: `A` records for the apex pointing at
      `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
      (and the matching `AAAA` records `2606:50c0:8000::153` … `8003::153`), plus
      `CNAME www -> gapac.github.io`.
   2. GitHub → Settings → Pages → Verified domains: add `celicasystems.si` and
      create the `TXT` record it shows. This stops anyone else from claiming the
      domain on Pages.
   3. Commit `public/CNAME` containing `celicasystems.si`. The workflow then
      builds with the real URL and no `/celica-site/` base.
   4. Settings → Pages → Custom domain: enter the domain, wait for the DNS check,
      tick **Enforce HTTPS** once the certificate is issued (up to an hour).
4. Set up email on the domain with SPF, DKIM and DMARC before sending outreach.

No analytics, no cookies, no form backend by design. Add Plausible (or nothing)
and a form service only when there is a reason.
