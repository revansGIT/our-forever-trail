# 🌟 IMPORTANT: Customization & Deployment Guide — "Our Forever Trail"

> **Welcome Khabbab!** This document explains everything you can easily change, update, and customize on your website anytime — before tonight's Holud, during the wedding week, or years into the future. It also includes instructions for **100% Free Hosting on GitHub Pages**.

---

## 📸 1. Complete Image & Asset Replacement Directory

All image files used on the website live inside the **`assets/images/`** folder. You can swap any generated illustration image with your real photos anytime by dropping your new photo into `assets/images/` and giving it the matching filename!

| Image File Location | Purpose / Where it Appears | Recommended Size | How to Replace |
|---|---|---|---|
| **`assets/images/hero-couple.png`** | Main Hero Photo Frame at the top of the homepage | 1000 x 1000px (JPG/PNG/WebP) | Save your real couple photo as `hero-couple.png` inside `assets/images/` |
| **`assets/images/milestone-met.png`** | *First Meeting & Kabin* milestone card | 800 x 600px | Replace file or change `"photo"` path in `content.json` |
| **`assets/images/milestone-umrah.png`** | *Hajj & Umrah Dream* milestone card | 800 x 600px | Replace file or change `"photo"` path in `content.json` |
| **`assets/images/milestone-ghuraghuri.png`** | *Traveling & Wandering Adventure* milestone card | 800 x 600px | Replace file or change `"photo"` path in `content.json` |
| **`assets/images/milestone-cats.png`** | *Cozy Cat Companion Wish* milestone card | 800 x 600px | Replace file or change `"photo"` path in `content.json` |

> **💡 How to Add Brand New Photos to Milestones:**
> 1. Copy your new photo into `assets/images/my-photo.jpg`.
> 2. Open `content.json` and update the `"photo"` property of any milestone to `"assets/images/my-photo.jpg"`.

---

## 🎨 2. Text, Event Dates & Passphrase Customization

The entire website is powered by **`content.json`**. You can edit:
- **Names & Taglines**: Edit `him`, `her`, and `tagline` in `couple`.
- **Event Dates & Times**: Change start/end ISO dates in `dates` (for Mehedi, Holud, Cholon, Boubad).
- **Event Venues & Outfits**: Update `"venue"` and `"dressCode"` properties for each event.
- **Why I Love You Reasons**: Add, edit, or remove lines in the `"reasons"` array.
- **Secret Chamber Passphrase & Letter**:
  - Change `"passphrase"` (default: `oaeshi`).
  - Edit `"content"` to update your private love letter for Oaeshi.

---

## 🎨 3. Theme Colors & Styling Tokens

Open **`styles/main.css`**. At the top of the file, tweak the CSS variables to match your exact outfit shades:
```css
:root {
  --bg-night: #0E2E30;        /* Deep teal-black background */
  --text-moonlight: #F7EFE3;   /* Warm ivory text */
  --gold-turmeric: #E8A33D;    /* Holud accent & glow */
  --rose-cholon: #D8546F;      /* Cholon accent */
  --red-boubad: #A3243F;       /* Boubad accent */
  --leaf-whisper: #5C8B72;     /* Mehedi green & Cat details */
}
```

---

## 🚀 4. Free Deployment on GitHub Pages

1. Run these commands in your project terminal:
   ```bash
   git add .
   git commit -m "Update website content and photos"
   git push origin main
   ```
2. Your live website at **`https://revansgit.github.io/our-forever-trail/`** will update automatically within 1 minute! 🎉
