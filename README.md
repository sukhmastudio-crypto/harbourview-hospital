# Harbourview Private Hospital: Next.js website

An 8-page hospital website built with **Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS 3**.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # run the production build
npm run typecheck  # TypeScript check
```
Requires Node.js 18.18 or newer (Node 20+ recommended).

## Pages
`/` Home · `/services` · `/doctors` · `/visit` (patient info) · `/about` · `/contact` · `/book` · `/privacy`
Plus `/api/enquiry` (form handler), `sitemap.xml`, `robots.txt` and a custom 404.

## Project structure
```
app/            pages, layout, API route, sitemap, robots
components/     Header, Footer, forms, doctor search, checklist, animations
lib/data.ts     ALL content: services, doctors, FAQs, campuses, hospital name and phone
app/globals.css brand colours (CSS variables at the top) and animations
```

## Customise for each client
1. **Hospital name, phone, email**: `CONFIG` in `lib/data.ts` (also search for `Harbourview`, `120 Harbour Street` and `ABN 00 000 000 000` in `components/Footer.tsx` and the pages).
2. **Services, doctors, FAQs, campuses, health funds**: the arrays in `lib/data.ts`. Every page updates from them.
3. **Colours**: variables at the top of `app/globals.css`.
4. **Text on About, Visit, Privacy**: edit the matching file in `app/`.
5. **Photos**: use `next/image` with files in `public/`. The design currently uses shapes and initials.

## Make the forms deliver real submissions
Forms post to `/api/enquiry`, which validates the data on the server, blocks simple bots (hidden honeypot field), and forwards it to a webhook.

1. Copy `.env.example` to `.env.local`.
2. Set `FORM_WEBHOOK_URL` to a Zapier, Make, Formspree or CRM webhook URL (it receives JSON).
3. Redeploy. With the variable empty the site runs in demo mode and nothing is sent.

Appointment JSON: `{type, name, phone, date, specialty, campus, doctor, receivedAt}`
Message JSON: `{type, name, email, message, receivedAt}`

Static hosting only? Set `NEXT_PUBLIC_FORM_ENDPOINT` to a Formspree-style URL and the browser will post there directly.

## Deploy
- **Vercel** (easiest): push to GitHub, import the repo, add the environment variables from `.env.example`.
- **Any Node host**: `npm run build && npm run start`.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain so the sitemap and social previews are correct.

## Before going live (Australia)
- Have a lawyer review `app/privacy/page.tsx` (template based on the Privacy Act 1988 and the Australian Privacy Principles).
- Add a privacy collection notice next to the forms.
- Follow AHPRA advertising rules for claims about doctors and treatments, and confirm permission to name health funds.
- Replace placeholder content: the hospital, doctors, testimonials, ABN and addresses are fictional.
- Consider adding rate limiting (for example Vercel Firewall or Upstash) if you expect heavy form traffic.
- Keep the 000 emergency notice visible.

## Notes
- Animations (scroll reveal, count-up, floating waves) switch off for visitors who choose "reduce motion".
- Light and dark themes follow the visitor's device and can be switched from the header; the choice is remembered.
- Recent booking requests and the packing checklist are stored in the visitor's own browser only.
