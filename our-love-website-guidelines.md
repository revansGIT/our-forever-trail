# 💛 AI Build Guidelines — "Our Forever Trail"
### A romantic, expandable website for Khabbab & Oaeshi

> **Feed this whole file to an AI coding tool (Claude Code, Cowork, Cursor, etc.) as the project brief.** It contains the concept, design system, feature list, free-tool stack, and a phase-by-phase build order. Everything marked ✅ is a decision already made for you; everything marked ✏️ is a placeholder you should fill in with your real content before or during the build.

---

## ⏰ 0. Read this first — you're on a tight clock

Today is **July 22, 2026**. Holud is **tomorrow**, and Cholon/Boubad follow right after. A full "dream" website cannot realistically be finished in a few hours — and that's okay, because **this site is designed to keep growing forever anyway** (that's the whole point of Phase 11+). So:

- **Tonight:** build the fast MVP in Phase 0 — hero, countdown, love message, one photo. Ship it. Send her the link before Holud.
- **Over the wedding week:** add photos from each event as they happen (holud → cholon → boubad), so the site visibly "comes alive" day by day — that's a romantic feature in itself, not a compromise.
- **After the dust settles:** go back through Phases 5–11 at a relaxed pace and turn it into the full experience.

Don't wait for "perfect" before you share it. A short, sincere, working page tonight beats a flawless page next month.

---

## 1. Project Snapshot

| | |
|---|---|
| **Him** | Khaled Osama Khabbab — "Khabbab" (his wife's nickname for him), 26, b. April 19, 2000. Loves gaming, going out/exploring. |
| **Her** | Fahmida Sheikh Oaeshi — called "Oaeshi", "love", "bby", b. May 30, 2006. Loves traveling/wandering (*ghuraghuri*), nature, cats. |
| **Faith / culture** | Muslim, Bangladeshi couple |
| **Kabin (nikah)** | June 19, 2026 ✅ already happened |
| **Holud** | July 23, 2026 |
| **Cholon** | July 24, 2026 |
| **Boubad (Bou-Bhat)** | July 25, 2026 |
| **Site purpose** | Express love now, and become a living scrapbook for every anniversary, birthday, and date night after |
| **Budget** | ৳0 — 100% free tools, free hosting |
| **Devices** | Must look great on phone (guests will open it from a WhatsApp link) and desktop |

---

## 2. The Concept: "The Firefly Trail"

Generic "pink hearts + Valentine template" would undersell this. Instead, build the whole site as **a journey/map you walk together at night** — because it naturally ties together everything true about you two:

- **Her love of wandering & nature** → the site is structured as a path through scenes (not flat sections), like walking a garden trail at dusk.
- **Her love of cats** → a small illustrated cat companion (SVG/CSS, not a photo of a real cat) walks/sits along the trail, leaving paw prints as you scroll, and "naps" at milestone stops.
- **His love of gaming** → milestones unlock like game checkpoints: a soft chime, a glowing badge, "Memory Unlocked" — a level-up feeling instead of a plain scroll.
- **Fireflies** → soft glowing particles drift across every section, brightening near text, thinning out in photo areas so they never obscure a face.

This single idea (trail + firefly light + cat companion + unlockable milestones) is your **signature element** — the one thing this site will be remembered for. Everything else should stay quiet and let it shine.

### Two layers of the site
Because family and guests will also open this link, split the experience:
1. **Public trail** (default view): love story, event details, gallery, RSVP/guestbook — anyone with the link can see this.
2. **"Just for her" chamber** ✏️: a gently locked section (a simple front-end passphrase gate is enough — this is romance, not banking security) containing your private love letter, inside jokes, and anything you don't want her cousins reading first. Suggested unlock word: something only she'd know (a pet name, an inside joke, her cat's name).

---

## 3. Visual Identity

Avoid the three "AI default" looks (cream+terracotta, black+neon, newspaper columns). This palette instead comes straight from the wedding itself and the trail concept:

| Token | Hex | Use |
|---|---|---|
| Night Garden (base) | `#0E2E30` deep teal-black | Backgrounds, night-sky sections |
| Moonlight | `#F7EFE3` warm ivory | Body text on dark, card backgrounds |
| Turmeric Gold | `#E8A33D` | Holud accent, buttons, firefly glow |
| Cholon Rose | `#D8546F` | Cholon accent, hover states |
| Boubad Red | `#A3243F` | Boubad accent, key CTAs |
| Leaf Whisper | `#5C8B72` | Nature motifs, dividers, cat illustration |

**Typography**
- Display/headline: a romantic serif with real character — **Cormorant Garamond** or **Playfair Display** (Google Fonts, free).
- Body: a warm, easy-to-read sans — **Poppins** or **Nunito** (Google Fonts, free).
- Signature accent (your names, hand-written feel): **Great Vibes** or **Alex Brush** (Google Fonts, free) — use sparingly, only for names/titles, never for paragraphs.
- Bengali support: if you want any Bangla text (a line of poetry, "চিরকাল" = *forever*, "ভালোবাসা" = *love*), pair with **Hind Siliguri** or **Noto Serif Bengali** (Google Fonts, free, proper Bangla glyph support).

**Motion principles**
- One orchestrated moment per section (a milestone unlocking, a firefly swarm gathering) beats scattered effects everywhere.
- Respect `prefers-reduced-motion` — fireflies and parallax should calm down automatically for anyone who needs that.
- Mobile: fewer simultaneous particles, simpler parallax (phones shouldn't fight to render 200 fireflies).

---

## 4. Site Map (sections along the trail)

1. **Hero / Gate** — your names, a soft firefly-lit intro, one line that captures "us," a "Begin the Trail" scroll cue.
2. **Kabin marker** — June 19, 2026 already achieved (a completed checkpoint, glowing solid, not blinking — it's done).
3. **Countdown trio** — live countdowns to Holud (7/23), Cholon (7/24), Boubad (7/25), each in its own accent color, each revealing event details (time, venue ✏️, dress color ✏️) on tap.
4. **Our Story timeline** — a horizontal or vertical scroll-slider (see §6) of real milestones with photos + short captions. This is the single highest-impact romantic feature — see §5.
5. **Gallery** — photos from holud/cholon/boubad, added progressively during the wedding week.
6. **Why I Love You** — an interactive "draw a reason" button (see §5).
7. **The Locked Chamber** — private love letter (see §2).
8. **Guestbook / RSVP** — for family well-wishes (see §8 EmailJS).
9. **Next Chapter** — an intentionally *unfinished* checkpoint on the trail ("More memories loading...") that becomes the seed for Phase 11 expansion (anniversaries, birthdays, dates).

---

## 5. How to actually express the love (researched, concrete ideas)

Real couple-website "our story" pages work best as a **milestone timeline with a photo + one short caption each**, not a wall of text — guests and partners alike engage far more with dated, captioned moments than paragraphs. Translate that into features:

- **Milestone timeline/slider** (§4.4): each stop = one photo + one date + one sentence. Include the small, ordinary moments alongside the big ones (a fight you made up from, a random Tuesday, not just the proposal) — that's what makes it feel true instead of a highlight reel.
- **"Why I Love You" generator**: a button she can press that reveals one reason at a time from a list you write (mix real specific things — *"the way you plan a trip three weeks in advance and still get us lost"* — with sincere ones). Specific beats generic every time.
- **Level-up milestones**: gamify the timeline stops with a soft "✦ Memory Unlocked" animation — a genuine nod to your gaming side that she'll recognize as *your* voice, not a template.
- **Cat companion Easter eggs**: clicking the cat at certain points reveals a hidden note or a cat pun — playful, low-effort, high-charm.
- **Ambient soundtrack toggle**: "your song" (or a soft instrumental) playing quietly, mutable — never autoplay loud.
- **Weather-of-the-day widget**: light touch — show the actual weather for the wedding city on Boubad day (see §7 OpenWeather), a small "even the sky's excited" detail.
- **Locked love letter** (§2): the most personal thing you write goes here, not in the public feed.
- **"Reasons this isn't perfect but it's real" honesty note**: you said it yourself — you're not perfect, she's not perfect, you fight and you love. A short, honest paragraph admitting that (rather than only performing perfection) tends to land far more romantically than an idealized script. Real vulnerability is the thing generic sites can't fake.
- **Next Chapter placeholder** (§4.9): literally leave a visibly "in progress" spot on the trail — it signals "this isn't finished because *we're* not finished," which is exactly the eternal-love framing you want.

---

## 6. Tech Stack (recommended)

Given the timeline and 100%-free-hosting requirement, keep this simple and fast to ship:

- **Plain HTML + CSS + vanilla JS** (or a tiny static-site helper like **Astro**, still free) — no backend, no database needed. A single-page app with smooth-scroll sections is plenty for this brief and deploys instantly to any free static host.
- Content (timeline milestones, event details, gallery captions) lives in **one JSON file** (`content.json`), not hard-coded in HTML — this is what makes Phase 11 (adding an anniversary next year) a five-minute edit instead of a rebuild.
- If you're already comfortable with React, that's fine too — just keep it a static export (no server) so free hosting stays simple.

---

## 7. Free Animation Libraries (verified, no paid tier needed)

| Tool | What it's for | Cost |
|---|---|---|
| **GSAP** (incl. all plugins: SplitText, MorphSVG, ScrollTrigger) | Scroll-triggered reveals, the milestone "unlock" animation, smooth timeline scrubbing | As of GSAP 3.13 (May 2025), the *entire* toolset — including every plugin that used to require a paid Club GSAP membership — is now **100% free, including commercial use**. |
| **AOS (Animate on Scroll)** | Simple fade/slide-in reveals for cards and text | Free, open-source |
| **Swiper.js** | The Our-Story slider/carousel, mobile-friendly swipe gestures | Free, open-source |
| **tsParticles** (or particles.js) | The firefly particle field | Free, open-source |
| **Lottie / lottie-web** + free animations from LottieFiles' free tier | Small vector animations (a firefly glow, a heart pulse, the cat blinking) | Free tier is generous for this use |
| **Lenis** or **Locomotive Scroll** | Smooth/inertia scrolling for the trail feel | Free, open-source |
| **canvas-confetti** | A burst effect on the countdown hitting zero each event day | Free, open-source |
| **Typed.js** | Typewriter effect for a love-letter reveal | Free, open-source |

All of the above are MIT-licensed or equivalent — no attribution required beyond what's in the repo, no cost at any usage tier.

---

## 8. Free APIs & Content Services

Your own real photos and words are the heart of this site — nothing below should replace them. These are for the *supplementary* decorative/functional layer.

| Service | Use | Free tier | Auth |
|---|---|---|---|
| **Google Fonts** | All typography in §3 | Fully free, unlimited | None |
| **Pexels API** | Backup nature/garden background textures if you need stock imagery | 200 requests/hour, 20,000/month | Free API key |
| **Unsplash API** | Alternative stock imagery source | 50 requests/hour | Free API key |
| **TheCatAPI** | Fun decorative cat images for the cat-companion Easter eggs | Free tier (500 req/day) | Free API key |
| **Cat Facts API** | Random cat fact pop-ups as a lighthearted Easter egg | Free, unlimited | No key needed |
| **ZenQuotes** | Rotating love/inspirational quote widget | Free | No key needed |
| **OpenWeatherMap** | "Weather on our big day" widget | Free tier (1,000 calls/day) | Free API key |
| **EmailJS** | Powers the Guestbook/RSVP form straight from the static site, no backend | Free tier: 200 emails/month, 2 templates — plenty for a wedding guest list | Public key only, safe for front-end |

For icons, **Lucide** or **Phosphor Icons** (both free, open-source, SVG) fit a soft romantic style better than default emoji sets.

---

## 9. Free Hosting Plan

**Recommended: Cloudflare Pages** — connect your GitHub repo, it auto-deploys on every push, gives you unlimited bandwidth and free automatic HTTPS on the free tier, and supports up to 100 custom domains if you ever want `oureternal.love` instead of the default `*.pages.dev` link.

Steps:
1. Push your site folder to a new GitHub repository.
2. Go to `pages.cloudflare.com` → "Create a project" → connect the repo.
3. Framework preset: "None" (for plain HTML) or your framework if you used one.
4. Deploy — you get a free `yourproject.pages.dev` link instantly, shareable over WhatsApp tonight.
5. (Optional, later) Add a custom domain under the project's "Custom domains" tab — free SSL included.

**Backup/alternative: GitHub Pages** — even simpler if you're short on time: enable Pages in your repo's Settings, no separate account needed. Slightly more limited (1GB size, ~100GB/month bandwidth) but more than enough for a personal site.

---

## 10. Phase-by-Phase Roadmap

### Phase 0 — Tonight's MVP (ship before Holud)
- [ ] Hero section with both your names + one heartfelt line
- [ ] Live countdown to Holud/Cholon/Boubad
- [ ] One real photo of you two
- [ ] Deploy to Cloudflare Pages, get a shareable link

### Phase 1 — Content collection (ongoing, can happen alongside other phases)
- [ ] Gather 8–15 photos spanning your relationship (not just posed ones — ordinary moments too)
- [ ] Write 6–10 timeline milestone captions (one sentence each)
- [ ] Write your "Why I Love You" list (aim for 15–20 specific reasons)
- [ ] Write the private love letter for the Locked Chamber
- [ ] Confirm venue/time/dress-color details for each of the 3 events ✏️

### Phase 2 — Design system setup
- [ ] Set up color/type tokens from §3 as CSS variables
- [ ] Build the cat-companion SVG (simple, flat illustration style — not a real photo)
- [ ] Set up `content.json` structure for milestones/events/gallery

### Phase 3 — Hero + countdown (if not already done in Phase 0)
- [ ] Firefly particle background (tsParticles)
- [ ] Three live countdowns with accent colors per event

### Phase 4 — Our Story timeline
- [ ] Build the Swiper.js/GSAP-driven milestone slider
- [ ] "Memory Unlocked" reveal animation per stop
- [ ] Cat companion walks/naps along the trail

### Phase 5 — Event detail pages
- [ ] Holud, Cholon, Boubad cards with time/venue/what-to-wear
- [ ] Weather widget for Boubad day

### Phase 6 — Gallery + interactive love section
- [ ] Responsive photo grid, lightbox on tap
- [ ] "Why I Love You" reveal button

### Phase 7 — The Locked Chamber
- [ ] Simple front-end passphrase gate
- [ ] Love letter with typewriter reveal (Typed.js)

### Phase 8 — Guestbook / RSVP
- [ ] EmailJS-powered form for well-wishes
- [ ] Optional: display recent messages on-page

### Phase 9 — Polish & QA
- [ ] Test on real phone (not just browser resize)
- [ ] `prefers-reduced-motion` fallback
- [ ] Image compression/lazy-loading for fast mobile load
- [ ] Cross-check all dates/times/names are correct

### Phase 10 — Deploy & share
- [ ] Final Cloudflare Pages deploy
- [ ] (Optional) custom domain
- [ ] Share the link — with her, then with family for RSVP

### Phase 11 — Future expansion (this is the whole point)
- [ ] Turn "Next Chapter" into a real new checkpoint for your first anniversary
- [ ] Add a "Birthdays" chapter (hers May 30, his April 19)
- [ ] Add a "Random Adventures" chapter for spontaneous date nights / trips — feeds her love of *ghuraghuri*
- [ ] Because content lives in `content.json`, each of these is just adding a new entry, not a redesign

---

## 11. Future-Proofing Architecture

Keep one growing data file so the site never needs a rebuild for new content:

```
content.json
├── milestones: [ { date, title, caption, photo, type: "story" | "anniversary" | "birthday" | "adventure" } ]
├── events: [ { name: "Holud", date, venue, notes } ]
├── gallery: [ { photo, caption, event } ]
├── reasons: [ "string", "string", ... ]
└── lockedLetter: { passphraseHint, content }
```

Every future occasion — anniversary, her birthday, a random Tuesday you want to remember — is just a new object appended to `milestones`. The trail visually keeps extending forward, which mirrors the "eternal love" framing you wanted.

---

## 12. Accessibility & Performance Notes
- Respect `prefers-reduced-motion`: turn off parallax/fireflies, keep fades instant.
- Keep text contrast readable against the Night Garden background (Moonlight `#F7EFE3` on `#0E2E30` passes comfortably).
- Compress all photos (WebP, lazy-loaded) — guests will open this on mobile data.
- Keyboard focus states visible on all interactive elements (countdown toggles, gallery lightbox, guestbook form).

---

## 13. Quick Reference Cheat Sheet

| Need | Free tool |
|---|---|
| Scroll animation | GSAP + ScrollTrigger |
| Simple reveal-on-scroll | AOS |
| Timeline slider | Swiper.js |
| Particle fireflies | tsParticles |
| Small vector animations | Lottie (lottie-web) |
| Smooth scroll feel | Lenis |
| Confetti on countdown | canvas-confetti |
| Fonts | Google Fonts |
| Icons | Lucide / Phosphor |
| Stock imagery backup | Pexels / Unsplash API |
| Cat images | TheCatAPI |
| Quotes | ZenQuotes |
| Weather widget | OpenWeatherMap |
| RSVP/guestbook form | EmailJS |
| Hosting | Cloudflare Pages (backup: GitHub Pages) |

---

*Made with the goal of getting one honest, working page in front of Oaeshi tonight — and a growing trail of memories after. Good luck, Khabbab.* 🪔
