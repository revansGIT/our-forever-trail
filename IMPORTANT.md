# 🌟 IMPORTANT: Customization, Asset Map & Post-Wedding Handoff Guide — "Our Forever Trail"

> **Welcome Khabbab!** This master guide details everything you can easily customize, edit, or switch on your website anytime — before tonight's Holud, during the wedding week, or years into the future as your marriage grows. It also includes step-by-step instructions for **100% Free Hosting on GitHub Pages** and **Post-Wedding Living Scrapbook mode**!

---

## 📸 1. Complete Image & Asset Replacement Directory

All images used across the site live inside the **`assets/images/`** folder. You can swap any illustration image with your real couple photos anytime by dropping your new image into `assets/images/` and using the matching file name or updating the path in `content.json`.

| Image File Location | Purpose / Where it Appears | Recommended Resolution | How to Replace |
|---|---|---|---|
| **`assets/images/hero-couple.png`** | Main Hero Photo Frame at the top of the homepage & default gallery cover | 1000 x 1000px (JPG/PNG/WebP) | Drop your real couple photo into `assets/images/` named `hero-couple.png` |
| **`assets/images/milestone-met.png`** | *First Meeting & Kabin* milestone card | 800 x 600px | Replace file or edit `"photo"` in `content.json` |
| **`assets/images/milestone-umrah.png`** | *Hajj & Umrah Sacred Dream* milestone card | 800 x 600px | Replace file or edit `"photo"` in `content.json` |
| **`assets/images/milestone-ghuraghuri.png`** | *Wandering & Traveling Trips* milestone card | 800 x 600px | Replace file or edit `"photo"` in `content.json` |
| **`assets/images/milestone-cats.png`** | *Adopting A Cat Companion* milestone card | 800 x 600px | Replace file or edit `"photo"` in `content.json` |

> **💡 How to Add New Gallery Photos:**
> 1. Save your photo into `assets/images/holud-photo-1.jpg`.
> 2. Open `content.json` and add a new item under `"gallery"`:
> ```json
> {
>   "id": "g8",
>   "category": "events",
>   "photo": "assets/images/holud-photo-1.jpg",
>   "title": "Gaye Holud Marigold Memories 🌼",
>   "caption": "Celebrated on July 23 with family & friends!"
> }
> ```

---

## 🎨 2. Text, Dates, Venues & Passphrase Customization (`content.json`)

Everything on the website is powered by **`content.json`**. Open `content.json` in VS Code or Notepad to update:

1. **Couple Names & Taglines**:
   - `him`, `himNickname`, `her`, `herNickname`, `tagline` in `"couple"`.
2. **Event Dates & Times**:
   - Change start/end ISO timestamps for Mehedi, Holud, Cholon, and Boubad under `"dates"`.
3. **Event Venues, Maps & Outfits**:
   - Update venue names, full addresses, dress codes, and timetables under `"eventDetails"`.
4. **"Why I Love You" Reasons**:
   - Add or edit any line inside the `"reasons"` array.
5. **Secret Chamber Passphrase & Love Letter**:
   - Change `"passphrase"` under `"lockedChamber"` (default: `oaeshi`).
   - Edit `"content"` to update the private typewriter letter for Oaeshi.

---

## 🎨 3. Theme Colors & Styling (`styles/main.css`)

To adjust theme colors to match outfit shades, open **`styles/main.css`** and tweak CSS variables at the top:
```css
:root {
  --bg-night: #0E2E30;        /* Deep teal-black background */
  --text-moonlight: #F7EFE3;   /* Warm ivory text */
  --gold-turmeric: #E8A33D;    /* Holud gold accent */
  --rose-cholon: #D8546F;      /* Cholon rose accent */
  --red-boubad: #A3243F;       /* Boubad red accent */
  --leaf-whisper: #5C8B72;     /* Mehedi botanical green accent */
}
```

---

## 🚀 4. Free Deployment on GitHub Pages

The website is hosted **100% free** on GitHub Pages. Whenever you make edits:
```bash
git add .
git commit -m "Update website content and photos"
git push origin main
```
Your live link **`https://revansgit.github.io/our-forever-trail/`** will update automatically within 60 seconds!

---

## 🗓️ 5. Post-Wedding Living Scrapbook Mode (Future Anniversaries & Travel)

After the wedding celebrations conclude:
1. Open `content.json` and add new milestone items to `"milestones"` for future anniversaries, Umrah trips, or travel adventures.
2. The **Smart Dual Countdown Engine** will automatically show `"Completed Checkpoint ✅"` for past wedding dates and showcase your new upcoming journey milestones!
