# OpenSense — Giveth Donation Landing

A polished bilingual (EN / PT-BR) landing page and donation guide built to help OpenSense recruit **real, verified donors** during the Ethereum Security Fund round on Giveth.

> Goal: 100 verified donors. Even $1 from a verified wallet matters more than it looks.

**Live donation link:** <https://qf.giveth.io/project/opensense-open-web3-security?roundId=16>

---

## What's in this project

```
.
├── index.html         # Single entry: landing + guide (hash routes)
├── styles.css         # All styles (CSS variables, dark theme, responsive modal)
├── content.js         # ALL bilingual copy + campaign stats live here
├── placeholders.jsx   # Screenshot loader for the donation walkthrough
├── app.jsx            # React app (nav, hero, steps, modal, FAQ, share, footer)
├── vercel.json        # Static Vercel headers + clean URLs
├── package.json       # Optional local preview scripts
└── README.md
```

The site is a static, single-page React app. No build step required — React, ReactDOM, and Babel are loaded via `<script>` tags. It deploys cleanly to Vercel, Netlify, GitHub Pages, or any static host.

### Routes
- `/` → Landing page (hero, quick path, screenshots, warning, status, why, videos, share, FAQ)
- `#/how-to-donate` → Detailed bilingual donation guide
- `#/docs` → Alias for the guide

(Routes use hash routing for static-host friendliness. If you migrate to Next.js, see the **Migration to Next.js** section below.)

---

## Run locally

It's a static site. Pick any:

```bash
# Python
python3 -m http.server 5173

# Node
npm run dev

# Or just open index.html in a browser (some browsers will block the modules — prefer a server)
```

Then visit `http://localhost:5173` for Python or `http://localhost:3002` for the Node script.

---

## ✏️ Editing copy (EN / PT-BR)

**All copy is in `content.js`.** Both languages are side-by-side under `en:` and `pt:` keys. Edit in plain JS — no build step.

```js
// content.js
window.OS_CONTENT = {
  donationUrl: "...",
  links: { youtube: "...", twitter: "..." },
  stats: { ... },
  en: { hero: { title: "...", subtitle: "...", ... }, ... },
  pt: { hero: { title: "...", subtitle: "...", ... }, ... },
};
```

The structure is mirrored between `en` and `pt`, so when you add/change a string in one, do the same in the other.

### Where each section lives
| Section | Path in content.js |
|---|---|
| Hero title / CTAs | `en.hero` / `pt.hero` |
| Status card labels | `en.status` / `pt.status` |
| "Why this matters" + topics | `en.why` / `pt.why` |
| Quadratic Funding explainer | `en.qf` / `pt.qf` |
| Visual walkthrough cards | `en.steps.list[…]` / `pt.steps.list[…]` |
| Warning bullets | `en.warning` / `pt.warning` |
| FAQ Q&As | `en.faq.items[…]` / `pt.faq.items[…]` |
| Share message + buttons | `en.share` / `pt.share` |
| Footer | `en.footer` / `pt.footer` |
| `/how-to-donate` page | `en.guide` / `pt.guide` |

---

## 📊 Updating campaign stats (manual)

Open `content.js` and edit the `stats` block:

```js
stats: {
  raisedUsd: 245,           // shown as "$245+"
  contributors: 32,         // shown as "32+", drives the progress bar
  goalDonors: 100,          // denominator of the progress bar
  youtubeSubscribers: 36851,
  watchHours: 11000,
  suggestedRange: "$1-$10",
},
```

The number on the YouTube tile and watch-hours come from `en.why.stats` / `pt.why.stats` — update both languages there.

The "manual update" disclaimer is rendered automatically below the status card.

---

## 🔗 Updating the donation link

`content.js` → `donationUrl`. It's used in:
- The primary CTA (everywhere)
- The Twitter/Telegram/WhatsApp share buttons
- The share message body (also update `en.share.message` and `pt.share.message`)

If the round ID changes (e.g. `?roundId=17`), update the URL in **three** places:
1. `donationUrl` at the top
2. `en.share.message`
3. `pt.share.message`

---

## 🖼️ Updating tutorial screenshots

Each step screenshot is loaded from `public/placeholders/`. The file names are controlled by the `image` keys in `content.js`:

| `image` key | File |
|---|---|
| `check-eligibility` | `public/placeholders/check-eligibility.png` |
| `go-to-passport` | `public/placeholders/go-to-passport.png` |
| `passport-wallet` | `public/placeholders/passport-wallet.png` |
| `refresh-score` | `public/placeholders/refresh-score.png` |
| `add-to-cart` | `public/placeholders/add-to-cart.png` |
| `checkout` | `public/placeholders/checkout.png` |
| `success` | `public/placeholders/success.png` |

The screenshots are clickable on both the landing page and guide page. They open in a carousel modal with left/right arrows, keyboard navigation, and mobile-friendly controls.

Recommended source aspect ratio: **16:9 or 16:10**, at least ~1280px wide. Keep the highlighted button visually obvious.

---

## 🌐 EN / PT-BR toggle

The toggle lives in the top nav. The user's choice is persisted to `localStorage` under key `os-lang`. On first visit, the language defaults to **EN**.

---

## 🚀 Deploying to Vercel

This is a fully static site. It has no build step.

1. Push the repo to GitHub.
2. Import into Vercel and choose **Other** as the framework preset.
3. Leave **Build Command** empty.
4. Leave **Install Command** empty unless Vercel fills one automatically.
5. Set **Output Directory** to the project root (`.`), or leave it blank if Vercel serves the root for the static project.
6. Deploy.

`vercel.json` adds clean URLs plus static headers. `.vercelignore` keeps local-only files like `uploads/` and `.DS_Store` out of the deployment bundle.

### If Vercel shows `404: NOT_FOUND`

Check the project settings in Vercel:

- **Root Directory:** leave empty, or point it to the folder that contains `index.html`
- **Framework Preset:** `Other`
- **Build Command:** empty
- **Output Directory:** empty or `.`

Do **not** set Output Directory to `public`. In this project, `public/` contains image assets only; the actual site entry is root-level `index.html`.

For Netlify / GitHub Pages / Cloudflare Pages, the same applies: no build step, serve the project root.

### Migration to Next.js (optional)
If you later want a Next.js setup with proper routes (`/`, `/how-to-donate`):
- Move `content.js` to a `lib/content.ts` (or `.js`) and `import` it.
- Split `app.jsx` into `pages/index.tsx` and `pages/how-to-donate.tsx` (or App Router equivalents).
- Replace hash links (`#/how-to-donate`) with `<Link href="/how-to-donate">`.

The current setup keeps things deployable today with zero build chain.

---

## Editorial guardrails

The page is intentionally insistent about three things — keep this energy when editing copy:

1. **Check eligibility BEFORE donating.** This is the single most common mistake. The hero, the warning box, and step 1 all reinforce it.
2. **Use a real wallet.** Step 3, the FAQ, and the warning box all say this. Do not soften it.
3. **Matching is not guaranteed.** Step into this honestly so donors aren't disappointed if estimates change. The `qf.caveat` field already says it.

---

## License

Content © OpenSense / Alexandre Melo. Page scaffolding free to fork and adapt for other Giveth campaigns.
