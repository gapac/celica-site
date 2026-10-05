# site — public company website

Everything in this repo is public. Never copy anything from `../CelicaSystems`
(ADRs, market notes, offers, outreach) into it; write public-safe text fresh.

- Brand name/URL/email only in `src/brand.js`.
- Both languages live together in each component's `copy` object; change SL and
  EN in the same edit. Slovene uses formal *vi*.
- Follow `../CelicaSystems/marketing/brand/voice.md`: concrete, no buzzwords,
  AI is a tool in the method, never the headline. The lab page recruits
  conversations and must not sell or make diagnostic claims.
- Notes go in `src/content/notes/<lang>/`; keep `draft: true` until the founder
  approves. No invented results, customers or numbers.
- `just check` (= `npm run build`) must pass before anything is called done.
