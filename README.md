# Grean — greanfarm.eu

Next.js 16 (Pages Router) + TypeScript + Tailwind CSS 4, exported as a fully static site for Hostinger cPanel.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # strict TypeScript check
```

## Build for Hostinger

```bash
npm run build      # regenerates public/sitemap.xml, then exports everything to out/
```

Upload the **contents** of `out/` (not the folder itself) to `public_html/`:

1. hPanel → **File Manager** → open `public_html` (delete the old site files first).
2. Zip the contents of `out/`, upload the zip, then **Extract** it inside `public_html`.
3. Make sure hidden files are visible — `.htaccess` must be in `public_html`.
4. Enable SSL for the domain (hPanel → Security → SSL); `.htaccess` redirects to `https://www.`.

## Contact form

`public/contact.php` sends the form via PHP `mail()` to `info@greanfarm.eu`.
It only works on the server (not in `npm run dev`). The sender is `no-reply@greanfarm.eu` —
create that mailbox (or change `$FROM`) in hPanel → Emails so messages aren't rejected.

## Editing content

- Text, solutions, timeline, principles, values, contact details: `lib/site.ts`
- Pages: `pages/*.tsx` — each page sets its own title/description via `<Seo />`
- New page? Add `pages/name.tsx`; it is added to the sitemap automatically on build.

## SEO included

Per-page title, meta description, canonical URL, Open Graph/Twitter cards, JSON-LD
(Organization, WebSite, BreadcrumbList, Service list, SoftwareApplication), `sitemap.xml`,
`robots.txt`, web manifest, self-hosted fonts, compressed images, semantic HTML.

Photos: [Pexels](https://www.pexels.com) (free to use), stored locally in `public/images/`.
