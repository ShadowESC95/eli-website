# geteli.tech

The website for [ELI](https://github.com/ShadowESC95/ELI_v2.0) — an AI assistant
that runs entirely on your own machine.

Static Next.js site, exported to plain HTML and published to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```bash
npm install
npm run dev        # http://localhost:3000
npx next build     # static export -> out/
```

## Notes

The palette is sampled from ELI's own mark (`public/eli-icon.png`) rather than
chosen: canvas `#001015`, ring `#00fefe` → `#00d1fd`, wordmark `#f8f9f9`. The
canvas is blue-shifted, not neutral black — using true black puts the logo in a
faintly wrong-coloured hole.

Every figure on the page is checked against the ELI repository (capability counts
come from `capability_manifest.json`). Please don't add one that can't be
reproduced from source.

This site was previously deployed from Vercel, whose git integration silently
stopped firing in January 2026 — no webhook, no deployment, no error anywhere,
and the live site served a seven-month-old build. The deploy now lives in this
repo so a failure is visible.
