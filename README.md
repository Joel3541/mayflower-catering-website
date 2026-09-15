# Mayflower Catering Services — Website

Marketing website for **Mayflower Catering Services**, a catering business on Rev Dagadu Street, Community 10, Tema, Greater Accra Region, Ghana.

Static site — plain HTML, CSS and JavaScript. No build step, no dependencies.

**Live site:** https://joel3541.github.io/mayflower-catering-website/

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
│   └── img/            # All photography (15 files, ~1.7 MB total)
├── robots.txt
└── sitemap.xml
```

### Photography

All images are self-hosted in `assets/img/` — nothing is hot-linked, so the site
does not depend on a third-party CDN staying up.

| File | Used by |
|---|---|
| `hero.jpg` | Hero background (set in `css/style.css`, not the HTML) |
| `chef.jpg` | About section, left column |
| `collage-food.jpg` · `collage-event.jpg` · `collage-dish.jpg` | About section collage |
| `package-basic.jpg` · `package-standard.jpg` · `package-premium.jpg` · `package-executive.jpg` | Package cards |
| `gallery-1-event.jpg` … `gallery-6-guests.jpg` | Gallery grid |

**These are stock photographs**, sourced from [Unsplash](https://unsplash.com/license),
whose licence permits commercial use without attribution. They were chosen to lean
West African rather than generic, but **they are not Mayflower's own food.**

Swapping in real photos needs no code changes — replace a file in `assets/img/`
keeping the same name, and update the `alt` text in `index.html` to describe the new
photo. Suggested dimensions: hero 1920×1080, chef 900×1200, gallery/packages
760×540 and 640×340. Keep each file under ~200 KB.

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

1. **The photos are stock, not Mayflower's.** The gradient placeholders are gone and the site looks finished, which makes this easier to forget rather than less important. Catering customers buy what they see in the picture. Real photos of Mayflower's own food and events should replace these — the Facebook page (https://www.facebook.com/MayflowerGhana/) is the most likely existing source. See the Photography section above for how to swap them.
2. **Package prices are placeholders.** GH₵50 / 75 / 120 / 150+ are illustrative. Confirm the actual rates.
3. **No email address.** The original draft used `info@mayflowercatering.com`, which does not resolve to a verified mailbox, so it was removed rather than left as a dead contact route. Add a real one when available.
4. **About copy** is factual but generic. Add the business's real history and signature dishes.
5. **Booking form has no backend.** It opens WhatsApp with the enquiry pre-filled. That works, but nothing is stored. Consider Formspree, Netlify Forms, or a Google Form if you want an enquiry record.
6. **Add the website URL to the Google listing.** The Google Business Profile currently has no website and is unclaimed ("Claim this business"). Claiming it and adding this URL is the highest-leverage local-SEO step available.

## Reviews section

The site previously carried three invented testimonials attributed to named
people. They were removed — publishing fabricated reviews is both a trust and a
legal problem. The `#reviews` section now shows only the real 4.2 Google rating
and links to the listing, so every claim on the page is verifiable.

If you add real testimonials later, use quotes you have permission to publish.

## Structured data

`index.html` includes JSON-LD (`CateringService` / `Restaurant`) with the address, coordinates, opening hours, service area and Facebook profile. `aggregateRating` is deliberately **omitted** — Google shows a 4.2 rating but does not publicly expose a review count, and publishing a rating without a verifiable count risks a structured-data penalty. Add it once the real count is known.
