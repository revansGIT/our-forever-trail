/* ==========================================================================
   OUR FOREVER TRAIL — Core Application Engine
   Khaled Osama Khabbab & Fahmida Sheikh Oaeshi
   ========================================================================== */

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialize Canvas Firefly Particles Engine
  initFireflies();

  // 2. Load Data from content.json
  let appData = null;
  try {
    const response = await fetch('./content.json');
    appData = await response.json();
    populateData(appData);
  } catch (err) {
    console.warn('Using default fallback content engine:', err);
  }

  // 3. Initialize Live Countdown Engines
  initCountdowns(appData);

  // 4. Initialize Interactive Features
  initReasonGenerator(appData);
  initLockedChamber(appData);
  initCatCompanion();
});

/* --------------------------------------------------------------------------
   1. Fireflies Canvas Particle System
   -------------------------------------------------------------------------- */
function initFireflies() {
  const canvas = document.getElementById('fireflies-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Reduce count on mobile screens for performance
  const particleCount = window.innerWidth < 768 ? 35 : 75;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      alpha: Math.random(),
      speedAlpha: Math.random() * 0.02 + 0.005,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4 - 0.2, // slight upward float
      color: Math.random() > 0.4 ? '#E8A33D' : '#F7EFE3'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += p.speedAlpha;

      if (p.alpha <= 0.1 || p.alpha >= 0.9) {
        p.speedAlpha = -p.speedAlpha;
      }

      // Wrap edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------------------------------
   2. Dynamic Content Population
   -------------------------------------------------------------------------- */
function populateData(data) {
  if (!data) return;

  // Names & Tagline
  const heroNames = document.getElementById('hero-names');
  if (heroNames && data.couple) {
    heroNames.textContent = `${data.couple.himNickname} & ${data.couple.herNickname}`;
  }

  const heroTagline = document.getElementById('hero-tagline');
  if (heroTagline && data.couple) {
    heroTagline.textContent = data.couple.tagline;
  }

  const loveMessage = document.getElementById('love-message');
  if (loveMessage && data.loveMessage) {
    loveMessage.textContent = `"${data.loveMessage}"`;
  }

  const bengaliQuote = document.getElementById('bengali-quote');
  if (bengaliQuote && data.bengaliQuote) {
    bengaliQuote.textContent = data.bengaliQuote;
  }
}

/* --------------------------------------------------------------------------
   3. Live Countdown Engine for Holud, Cholon & Boubad
   -------------------------------------------------------------------------- */
function initCountdowns(data) {
  // Target event dates (Dhaka Time GMT+6)
  const defaultTargetHolud = new Date('2026-07-23T18:00:00+06:00').getTime();
  const defaultTargetCholon = new Date('2026-07-24T18:00:00+06:00').getTime();
  const defaultTargetBoubad = new Date('2026-07-25T19:00:00+06:00').getTime();

  const targetHolud = data?.dates?.holud ? new Date(data.dates.holud).getTime() : defaultTargetHolud;
  const targetCholon = data?.dates?.cholon ? new Date(data.dates.cholon).getTime() : defaultTargetCholon;
  const targetBoubad = data?.dates?.boubad ? new Date(data.dates.boubad).getTime() : defaultTargetBoubad;

  function updateCard(prefix, targetTime) {
    const now = new Date().getTime();
    const diff = targetTime - now;

    const daysEl = document.getElementById(`${prefix}-days`);
    const hoursEl = document.getElementById(`${prefix}-hours`);
    const minsEl = document.getElementById(`${prefix}-mins`);
    const secsEl = document.getElementById(`${prefix}-secs`);

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  function tick() {
    updateCard('holud', targetHolud);
    updateCard('cholon', targetCholon);
    updateCard('boubad', targetBoubad);
  }

  tick();
  setInterval(tick, 1000);
}

/* --------------------------------------------------------------------------
   4. Interactive "Why I Love You" Generator
   -------------------------------------------------------------------------- */
function initReasonGenerator(data) {
  const btn = document.getElementById('draw-reason-btn');
  const box = document.getElementById('reason-display');

  const defaultReasons = [
    "The way your eyes light up whenever we go on a random ghuraghuri trip.",
    "How you love cats and notice every kitten along our walking path.",
    "Your patient smile even when I get us lost on purpose just to spend more time with you.",
    "The peaceful feeling in my heart when our Kabin was signed on June 19.",
    "How you make every ordinary day feel like a magical fairy tale."
  ];

  const reasons = data?.reasons || defaultReasons;
  let lastIdx = -1;

  if (btn && box) {
    btn.addEventListener('click', () => {
      let idx;
      do {
        idx = Math.floor(Math.random() * reasons.length);
      } while (idx === lastIdx && reasons.length > 1);
      lastIdx = idx;

      box.style.opacity = 0;
      setTimeout(() => {
        box.textContent = `"${reasons[idx]}"`;
        box.style.opacity = 1;
      }, 200);
    });
  }
}

/* --------------------------------------------------------------------------
   5. Passphrase Locked Chamber Gate
   -------------------------------------------------------------------------- */
function initLockedChamber(data) {
  const form = document.getElementById('passphrase-form');
  const input = document.getElementById('passphrase-input');
  const errorMsg = document.getElementById('passphrase-error');
  const contentBox = document.getElementById('locked-content');
  const letterText = document.getElementById('letter-text-el');

  const correctPassphrase = (data?.lockedChamber?.passphrase || 'oaeshi').toLowerCase().trim();

  if (form && input && contentBox) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = input.value.toLowerCase().trim();

      if (value === correctPassphrase) {
        if (errorMsg) errorMsg.style.display = 'none';
        form.style.display = 'none';
        contentBox.classList.add('unlocked');
        if (letterText && data?.lockedChamber?.content) {
          letterText.textContent = data.lockedChamber.content;
        }
      } else {
        if (errorMsg) {
          errorMsg.textContent = 'Incorrect passphrase! Hint: Try her nickname ("oaeshi")';
          errorMsg.style.display = 'block';
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
   6. Cat Companion Easter Egg
   -------------------------------------------------------------------------- */
function initCatCompanion() {
  const catBar = document.getElementById('cat-companion');
  const bubble = document.getElementById('cat-bubble');

  const catPuns = [
    "Meow! You two are purr-fect together! 🐾",
    "Khabbab + Oaeshi = Forever Love! 😸",
    "Paw-sitively excited for Holud tomorrow! 🌼",
    "Nap time completed. Trail walk resumed! 🐾",
    "Keep walking hand in hand! 🐈"
  ];

  let catIdx = 0;

  if (catBar && bubble) {
    catBar.addEventListener('click', () => {
      catIdx = (catIdx + 1) % catPuns.length;
      bubble.textContent = catPuns[catIdx];
    });
  }
}
