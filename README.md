# Mayflower Catering Services — Website

Marketing website for **Mayflower Catering Services**, a catering business on Rev Dagadu Street, Community 10, Tema, Greater Accra Region, Ghana.

Static site — plain HTML, CSS and JavaScript. No build step, no dependencies.

**Live site:** https://joel3541.github.io/Mayflower-Catering-Website/

---

## Business details

These are sourced from the [Google Business Profile listing](https://maps.app.goo.gl/qygeEPNkcp6LCpkb8).

| | |
|---|---|
| **Name** | Mayflower Catering Services |
| **Address** | Rev Dagadu Street, Community 10, Tema, Greater Accra Region, Ghana |
| **Plus Code** | MX4G+PP Accra |
| **Coordinates** | 5.6568432, -0.0232444 |
| **Phone / WhatsApp** | +233 50 019 4301 |
| **Google rating** | 4.2 |
| **Category** | Catering service / Restaurant |
| **Facebook** | https://www.facebook.com/MayflowerGhana/ |
| **Hours** | Mon–Sat 8:00 AM – 9:00 PM · Sun 2:00 PM – 8:00 PM |

> **Note on hours:** Google's public listing only exposes the *current day's* hours to signed-out visitors, and it confirmed **Tuesday 8 am – 9 pm**. The rest of the week above is carried over from the original draft and is consistent with what Google shows, but it has not been verified day-by-day. Confirm with the business before relying on it.

---

## Project structure

```
Mayflower-Catering-Website/
├── index.html          # Entire page (single-page site)
├── css/style.css       # All styling, responsive at 1050 / 800 / 520px
├── js/script.js        # Mobile menu, scroll-spy nav, back-to-top, WhatsApp booking form
├── assets/
│   ├── favicon.svg     # Site icon
│   └── img/            # Drop real photography here
├── robots.txt
└── sitemap.xml
```

## Running locally

Open `index.html` in a browser, or serve it:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

Hosted on **GitHub Pages** from the `main` branch, root folder. Any push to `main` redeploys automatically.

---

## Still to do before this is fully live

These are genuine gaps, not nitpicks:

1. **Photography.** Every `.image-placeholder` block (about, gallery, packages) is still a brown gradient placeholder. Replace with real photos in `assets/img/`. This is the single biggest visual upgrade available.
2. **Testimonials are invented.** The three quotes in `#testimonials` are placeholder copy with made-up names. Replace them with real, permissioned customer quotes — or delete the section. Publishing fabricated reviews is a real legal and trust risk.
3. **Package prices are placeholders.** GH₵50 / 75 / 120 / 150+ are illustrative. Confirm the actual rates.
4. **No email address.** The original draft used `info@mayflowercatering.com`, which does not resolve to a verified mailbox, so it was removed rather than left as a dead contact route. Add a real one when available.
5. **About copy** is factual but generic. Add the business's real history and signature dishes.
6. **Booking form has no backend.** It opens WhatsApp with the enquiry pre-filled. That works, but nothing is stored. Consider Formspree, Netlify Forms, or a Google Form if you want an enquiry record.
7. **Add the website URL to the Google listing.** The Google Business Profile currently has no website and is unclaimed ("Claim this business"). Claiming it and adding this URL is the highest-leverage local-SEO step available.

## Structured data

`index.html` includes JSON-LD (`CateringService` / `Restaurant`) with the address, coordinates, opening hours, service area and Facebook profile. `aggregateRating` is deliberately **omitted** — Google shows a 4.2 rating but does not publicly expose a review count, and publishing a rating without a verifiable count risks a structured-data penalty. Add it once the real count is known.
