# Deployment guide — MeinBit landing

Static SPA built with Vite + React. The build output is a folder of static
files (`dist/`) that any web server or static host can serve. Because the app
uses client-side routing (`BrowserRouter`), the server **must** fall back to
`index.html` for unknown paths — otherwise direct links like `/privacy-policy`
return 404.

## 1. Build

```bash
npm ci          # install exact dependency versions from package-lock.json
npm run build   # type-checks, then outputs static files to dist/
```

The production site is the **contents of `dist/`**. Nothing else (no Node
runtime) is needed at serve time.

## 2. Deploy — pick one

### A) Static host (Netlify / Cloudflare Pages / Vercel) — easiest
- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback is already handled by [`public/_redirects`](public/_redirects)
  (`/* /index.html 200`), which is copied into `dist/` on build.

### B) Your own server with nginx
1. Build locally (or in CI): `npm ci && npm run build`
2. Copy the build to the server:
   ```bash
   rsync -avz --delete dist/ user@server:/var/www/meinbit/
   ```
3. Install the server block from [`deploy/nginx.conf`](deploy/nginx.conf):
   ```bash
   sudo cp deploy/nginx.conf /etc/nginx/sites-available/meinbit
   sudo ln -s /etc/nginx/sites-available/meinbit /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```
4. Add HTTPS (Let's Encrypt):
   ```bash
   sudo certbot --nginx -d meinbit.io -d www.meinbit.io
   ```

### C) Quick local check of the production build
```bash
npm run preview     # serves dist/ at http://localhost:4173
```

## 3. Notes

- **Domain root vs subpath.** This build assumes the site is served from the
  domain root (`/`). To serve under a subpath (e.g. `/app/`), set
  `base: "/app/"` in `vite.config.ts` and rebuild.
- **External API.** Live crypto prices come from CoinGecko's public endpoint
  directly from the browser — no backend or API key required.
- **Cookie consent.** The consent choice is stored client-side in
  `localStorage` under `meinbit:cookies`. If you later add real analytics or
  marketing scripts, gate them on `hasConsent(...)` from
  `src/components/CookieBanner/consent.ts`.
- **Caching.** Files under `/assets/` are content-hashed and cached for a year;
  `index.html` is served with `no-cache` so new deploys take effect immediately.
