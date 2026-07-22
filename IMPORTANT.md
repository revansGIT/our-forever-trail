# 🌟 IMPORTANT: Customization & Deployment Guide — "Our Forever Trail"

> **Welcome Khabbab!** This document explains everything you can easily change, update, and customize on your website anytime — before tonight's Holud, during the wedding week, or years into the future. It also includes instructions for **100% Free Hosting on GitHub Pages**.

---

## 🎨 1. What You Can Change & How To Edit Anything

The entire website is designed with a **decoupled data engine (`content.json`)**, meaning **you do NOT need to code** to edit text, dates, photos, or love notes!

### 📝 Editing Text, Dates & Venue Details
Open `content.json` in any text editor. You can change:
- **Names & Tagline**: Edit `him`, `her`, `tagline`.
- **Event Venues & Dress Codes**: Change `"venue"` and `"dressCode"` for Holud, Cholon, and Boubad.
- **Love Message & Bengali Quote**: Change `"loveMessage"` and `"bengaliQuote"`.
- **"Why I Love You" Reasons**: Add, edit, or remove lines inside the `"reasons"` array.
- **Locked Chamber Letter & Passphrase**:
  - Update `"passphrase"` (the secret word Oaeshi types to unlock the letter).
  - Update `"content"` (your private love letter).

### 📸 Changing / Swapping Photos
- **Hero Couple Photo**:
  - Simply place your real photo inside `assets/images/` and name it `hero-couple.png` (or `.jpg`).
  - Or edit `index.html` line referencing `assets/images/hero-couple.png`.
- **Event / Gallery Photos**:
  - Save your photos from Holud, Cholon, and Boubad in `assets/images/`.
  - Reference them in `content.json` under `milestones` or `gallery`.

### 🎨 Changing Theme Colors & Fonts
Open `styles/main.css`. At the top of the file, you will find all design tokens as CSS variables:
```css
:root {
  --bg-night: #0E2E30;        /* Deep teal-black background */
  --text-moonlight: #F7EFE3;   /* Warm ivory text */
  --gold-turmeric: #E8A33D;    /* Holud accent & glow */
  --rose-cholon: #D8546F;      /* Cholon accent */
  --red-boubad: #A3243F;       /* Boubad accent */
  --leaf-whisper: #5C8B72;     /* Nature & Cat details */
}
```
You can tweak any color code to match your exact wedding outfit shades!

---

## 🚀 2. How to Deploy Free on GitHub Pages (Step-by-Step)

GitHub Pages gives you **100% free hosting**, automatic HTTPS security, and instant global access.

### Step 1: Push code to your GitHub repository
Run these commands in your project terminal:
```bash
git add .
git commit -m "Build Phase 0 MVP for Khabbab & Oaeshi"
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository page on [GitHub.com](https://github.com).
2. Click **Settings** (top right tab).
3. Scroll down the left sidebar to **Pages** (under Code and automation).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` branch and `/ (root)` folder.
5. Click **Save**.

### Step 3: View & Share Your Live Link! 🎉
- In 1–2 minutes, GitHub will give you a live link like:
  `https://yourusername.github.io/our-forever-trail/`
- Open it on your phone to test it, then send the link to Oaeshi over WhatsApp!

---

## ⚡ 3. Modern Technology Architecture

This website is built with **cutting-edge modern web standards**:
- **HTML5 Semantic Canvas**: For floating fireflies and night sky animations.
- **CSS3 Design System**: CSS Custom Properties, Glassmorphism backdrop filters, Flexbox/Grid responsive layouts, and smooth animations.
- **Vanilla ES6+ JavaScript**: Modern Fetch API, live dynamic event countdown calculations, interactive milestone unlocks, confetti triggers, and mobile gesture support.
- **Zero Heavy Build Tooling**: Loads instantly without bundle bloat, perfect for mobile data connections during wedding events.

---

## 🔮 4. Future Expansion (Phase 11+)
Whenever an anniversary, birthday, or spontaneous *ghuraghuri* trip happens in the future, simply add a new object to `"milestones"` inside `content.json`. The trail will automatically extend forward! 💛
