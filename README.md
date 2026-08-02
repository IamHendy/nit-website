# Network Intelligence Technologies (NIT) — Next.js rebuild

A Next.js (App Router) recreation of https://networkintelligence.co.ke/,
originally a WordPress site.

## 1. Requirements

- Node.js 18.18+ (Node 20 LTS recommended)
- npm (comes with Node)

Check your version:

```bash
node -v
npm -v
```

## 2. Install & run

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site hot-reloads as you edit files.

Production build:

```bash
npm run build
npm start
```

## 3. Project structure

```
src/
  app/
    layout.js          Root layout — wraps every page in Header + Footer
    globals.css         Tailwind + small shared CSS (section divider/dot motif)
    page.js             Home page
    about/page.js        /about
    services/page.js     /services  (image cards, bordered READ MORE buttons)
    solutions/page.js    /solutions (8 text cards, two rows)
    contact/page.js      /contact   (consultation form + map)
    news/page.js         /news      (blog post grid)
  components/
    Header.jsx           Top contact strip + logo/location bar + navy nav
    Footer.jsx           4-column footer with embedded Google Map
    HeroCarousel.jsx      Rotating homepage banner (5 slides, dot indicators)
    PageBanner.jsx        Dark banner strip used on every interior page
    AboutBlock.jsx        Tabbed About Us / Our Mission / Our Vision + stat cards
    StatsStrip.jsx        1000 / 10000 / 100 / 1000 counter strip
    ConsultationSection.jsx  "Request a free consultation" split section + form
    SectionHeading.jsx    Reusable heading + divider/dot
    ServiceCardSimple.jsx   Text-only card (Home services grid)
    ServiceCardImage.jsx    Image + bordered button card (Services page)
    SolutionCard.jsx        Text card used on Solutions page
    NewsCard.jsx             Blog post card (meta bar + title + excerpt)
public/
  images/
    hero-network.svg              Placeholder hero background — replace with a real photo
    services/*.svg                Placeholder service thumbnails — replace with real photos
```

## 4. Replacing the placeholder images

I generated simple SVG placeholders so the project builds and runs without any
external assets. Swap these for the real photography from the live site:

1. Drop your real files into `public/images/` (e.g. `hero-network.jpg`,
   `services/cyber-security-training.jpg`).
2. Update the paths in `src/components/HeroCarousel.jsx`,
   `src/components/PageBanner.jsx`, and `src/app/services/page.js`.

## 5. Content notes

Copy (headings, service/solution descriptions, blog excerpts, contact details)
was transcribed directly from the live site and the screenshots you provided,
so it should match verbatim. A few things to double check / finish once you
have the real WordPress backend content:

- The **News** page only has the 3 posts visible in your screenshots —
  if there are more posts on the live site, add them to the `NEWS` array in
  `src/app/news/page.js` (or wire it up to a CMS/WordPress REST API — see
  below).
- The consultation/contact **form** currently just prevents default submit
  (no backend). Wire it to an API route (`src/app/api/contact/route.js`) or
  a service like Formspree/Resend once you're ready to receive submissions.
- The embedded Google Map uses a generic address query — swap in the real
  Google Maps "Share > Embed a map" iframe URL from the original site for a
  pixel-perfect pin.

## 6. Going further: pulling live content from WordPress

Since the original site is WordPress, you could keep WordPress purely as a
headless CMS (for the News section, or all page content) and have Next.js
fetch it via the built-in WordPress REST API, e.g.:

```js
const res = await fetch("https://networkintelligence.co.ke/wp-json/wp/v2/posts");
const posts = await res.json();
```

That's a bigger step (decoupled/headless WordPress) — happy to set that up
if you want the News page to stay in sync with the WordPress admin instead of
being hard-coded.

## 7. Deploying

The easiest path is [Vercel](https://vercel.com) (made by the Next.js team):

```bash
npx vercel
```

Or any Node host that can run `npm run build && npm start`.
