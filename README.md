# OpenSense — Giveth Donation Landing

A polished bilingual (EN / PT-BR) landing page and donation guide built to help OpenSense recruit **real, verified donors** during the Ethereum Security Fund round on Giveth.

> Goal: 100 verified donors. Even $1 from a verified wallet matters more than it looks.

**Live donation link:** <https://qf.giveth.io/project/opensense-open-web3-security?roundId=16>

---

## What's in this project

```
.
├── index.html         # Single entry — landing + guide (hash routes)
├── styles.css         # All styles (CSS variables, dark theme)
├── content.js         # 🟡 ALL bilingual copy + campaign stats live here
├── placeholders.jsx   # Tutorial mockups (SVG) — replace with real screenshots later
├── app.jsx            # React app (nav, hero, sections, FAQ, share, footer, guide)
└── README.md
```

The site is a static, single-page React app. No build step required — React, ReactDOM, and Babel are loaded via `<script>` tags. It deploys cleanly to Vercel, Netlify, GitHub Pages, or any static host.

### Routes
- `/` → Landing page (hero, status, why, QF, steps, warning, FAQ, share)
- `#/how-to-donate` → Detailed bilingual donation guide
- `#/docs` → Alias for the guide

(Routes use hash routing for static-host friendliness. If you migrate to Next.js, see the **Migration to Next.js** section below.)

---

## Run locally

It's a static site. Pick any:

```bash
# Python
python3 -m http.server 5173

# Node (one-off)
npx serve .

# Or just open index.html in a browser (some browsers will block the modules — prefer a server)
```

Then visit `http://localhost:5173`.

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
| 6 step cards | `en.steps.list[…]` / `pt.steps.list[…]` |
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
  suggestedRange: "$1–$10",
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

## 🖼️ Replacing placeholder tutorial images

Right now, each step uses a hand-crafted SVG mockup defined in `placeholders.jsx`. They're labeled to match the names in `content.js`:

| `image` key | Component in placeholders.jsx |
|---|---|
| `check-eligibility` | `PlaceholderCheckEligibility` |
| `go-to-passport` | `PlaceholderGoToPassport` |
| `passport-wallet` | `PlaceholderPassportWallet` |
| `refresh-score` | `PlaceholderRefreshScore` |
| `add-to-cart` | `PlaceholderAddToCart` |
| `checkout` | `PlaceholderCheckout` |

### To swap with real screenshots:

1. Drop the PNGs into `public/placeholders/` (create the folder), naming them after the keys above (`check-eligibility.png`, `go-to-passport.png`, etc.).
2. Open `placeholders.jsx` and replace the `Placeholder` lookup at the bottom:

```js
const Placeholder = ({ name }) => (
  <img
    src={`public/placeholders/${name}.png`}
    alt={name}
    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
  />
);
window.Placeholder = Placeholder;
```

Recommended source aspect ratio: **16:10**, ~1280×800 or larger. Keep the highlighted button visually obvious (a colored outline or arrow works great).

---

## 🌐 EN / PT-BR toggle

The toggle lives in the top nav. The user's choice is persisted to `localStorage` under key `os-lang`. On first visit, the language defaults to **PT-BR** if the browser language starts with `pt`, otherwise **EN**.

---

## 🚀 Deploying to Vercel

This is a fully static site, so the simplest path is:

1. Push the repo to GitHub.
2. Import into Vercel — choose **"Other"** as the framework preset (no build step needed).
3. Leave **Build Command** empty.
4. Set **Output Directory** to the project root (`.`).
5. Deploy.

For Netlify / GitHub Pages / Cloudflare Pages, the same applies — no build step, serve the project root.

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
