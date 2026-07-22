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

  // Render Relationship Timeline Milestones
  if (data.milestones && Array.isArray(data.milestones)) {
    renderTimeline(data.milestones);
  }
}

function renderTimeline(milestones) {
  const container = document.getElementById('timeline-grid');
  const dotsContainer = document.getElementById('slider-dots');
  const viewport = document.getElementById('timeline-slider-viewport');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  if (!container) return;

  container.innerHTML = '';
  if (dotsContainer) dotsContainer.innerHTML = '';

  milestones.forEach((m, idx) => {
    const card = document.createElement('div');
    card.className = `timeline-item-card ${idx === 0 ? 'active-slide' : ''}`;
    card.dataset.index = idx;

    const photoHtml = m.photo
      ? `<div class="timeline-img-wrap"><img src="${m.photo}" alt="${m.title}" loading="lazy"></div>`
      : '';

    card.innerHTML = `
      <span class="timeline-card-badge memory-unlocked-anim">${m.badge || 'Memory Unlocked'}</span>
      ${photoHtml}
      <div class="timeline-date">${m.displayDate || m.date}</div>
      <h3 class="timeline-title">${m.title}</h3>
      <p class="timeline-caption">${m.caption}</p>
    `;

    container.appendChild(card);

    if (dotsContainer) {
      const dot = document.createElement('button');
      dot.className = `slider-dot ${idx === 0 ? 'active' : ''}`;
      dot.ariaLabel = `Go to milestone ${idx + 1}`;
      dot.addEventListener('click', () => scrollToSlide(idx));
      dotsContainer.appendChild(dot);
    }
  });

  function scrollToSlide(index) {
    const cards = container.querySelectorAll('.timeline-item-card');
    if (!cards[index] || !viewport) return;
    
    cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    updateActiveSlide(index);
  }

  function updateActiveSlide(index) {
    const cards = container.querySelectorAll('.timeline-item-card');
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];

    cards.forEach((c, i) => c.classList.toggle('active-slide', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));

    // Cat Companion Reaction
    const catBubble = document.getElementById('trail-cat-bubble');
    if (catBubble && milestones[index]) {
      catBubble.textContent = `✦ Checkpoint: ${milestones[index].title} 🐾`;
    }
  }

  if (prevBtn && viewport) {
    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -320, behavior: 'smooth' });
    });
  }

  if (nextBtn && viewport) {
    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // Update active slide on scroll
  if (viewport) {
    let scrollTimeout;
    viewport.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const cards = container.querySelectorAll('.timeline-item-card');
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(viewportCenter - cardCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIndex = i;
          }
        });

        updateActiveSlide(closestIndex);
      }, 80);
    }, { passive: true });
  }
}

/* --------------------------------------------------------------------------
   3. Smart Dual Countdown Engine for Mehedi, Holud, Cholon & Boubad
   -------------------------------------------------------------------------- */
function initCountdowns(data) {
  const mehediStart = data?.dates?.mehediStart || '2026-07-22T10:00:00+06:00';
  const mehediEnd = data?.dates?.mehediEnd || '2026-07-22T23:59:59+06:00';

  const holudStart = data?.dates?.holudStart || '2026-07-23T18:00:00+06:00';
  const holudEnd = data?.dates?.holudEnd || '2026-07-23T23:59:59+06:00';

  const cholonStart = data?.dates?.cholonStart || '2026-07-24T18:00:00+06:00';
  const cholonEnd = data?.dates?.cholonEnd || '2026-07-24T23:59:59+06:00';

  const boubadStart = data?.dates?.boubadStart || '2026-07-25T19:00:00+06:00';
  const boubadEnd = data?.dates?.boubadEnd || '2026-07-25T23:59:59+06:00';

  function updateSmartEvent(prefix, defaultTitle, startIso, endIso) {
    const now = new Date().getTime();
    const startTime = new Date(startIso).getTime();
    const endTime = new Date(endIso).getTime();

    const tagEl = document.getElementById(`${prefix}-tag`);
    const daysEl = document.getElementById(`${prefix}-days`);
    const hoursEl = document.getElementById(`${prefix}-hours`);
    const minsEl = document.getElementById(`${prefix}-mins`);
    const secsEl = document.getElementById(`${prefix}-secs`);

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (now < startTime) {
      // Event hasn't started yet: Countdown to START
      const diff = startTime - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (tagEl) tagEl.innerHTML = `${defaultTitle} • Starts In`;
      daysEl.textContent = String(days).padStart(2, '0');
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    } else if (now >= startTime && now <= endTime) {
      // Event IS IN PROGRESS! Countdown to END
      const diff = endTime - now;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      if (tagEl) tagEl.innerHTML = `<span class="pulse-live">IN PROGRESS 🌿</span> Ends In`;
      daysEl.textContent = '00';
      hoursEl.textContent = String(hours).padStart(2, '0');
      minsEl.textContent = String(mins).padStart(2, '0');
      secsEl.textContent = String(secs).padStart(2, '0');
    } else {
      // Event COMPLETED
      if (tagEl) tagEl.innerHTML = `${defaultTitle} • Completed ✅`;
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
    }
  }

  function tick() {
    updateSmartEvent('mehedi', 'Mehedi 🌿', mehediStart, mehediEnd);
    updateSmartEvent('holud', 'Gaye Holud 🌼', holudStart, holudEnd);
    updateSmartEvent('cholon', 'Cholon 🌹', cholonStart, cholonEnd);
    updateSmartEvent('boubad', 'Boubad ✨', boubadStart, boubadEnd);
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
   6. Dynamic Trail Cat Companion Follower Engine
   -------------------------------------------------------------------------- */
function initCatCompanion() {
  const catFollower = document.getElementById('trail-cat-follower');
  const catAvatar = document.getElementById('trail-cat-avatar');
  const catBubble = document.getElementById('trail-cat-bubble');

  if (!catFollower || !catAvatar) return;

  const nekoQuotes = [
    "Nyan! Walking the trail with Khabbab & Oaeshi~ 🐾",
    "Holud tomorrow! Yellow marigolds everywhere~ 🌼",
    "Hajj & Umrah dream ahead! Makkah & Madinah 🕋✨",
    "Ghuraghuri wandering adventure loading... 🗺️",
    "Napping on a warm cushion... Zzz~ 😸",
    "June 19, 2026: The day it all began! 💍"
  ];

  let quoteIdx = 0;

  catAvatar.addEventListener('click', () => {
    quoteIdx = (quoteIdx + 1) % nekoQuotes.length;
    if (catBubble) {
      catBubble.textContent = nekoQuotes[quoteIdx];
      catBubble.style.transform = 'scale(1.08)';
      setTimeout(() => {
        catBubble.style.transform = 'scale(1)';
      }, 300);
    }
  });

  // Track scroll position and move cat along the trail
  let lastY = 0;
  function updateCatPosition() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;

    const scrollFraction = window.scrollY / scrollableHeight;
    // Move cat smoothly between top offset (20px) and bottom offset (window.innerHeight - 150px)
    const maxTravel = window.innerHeight - 180;
    const catY = scrollFraction * maxTravel;

    catFollower.style.transform = `translateY(${catY}px)`;

    // Spawn paw prints right behind the cat when scrolling
    if (Math.abs(window.scrollY - lastY) > 120) {
      lastY = window.scrollY;
      spawnPawPrintAtCat(catFollower);
    }
  }

  window.addEventListener('scroll', updateCatPosition, { passive: true });
  updateCatPosition();
}

function spawnPawPrintAtCat(catElement) {
  const rect = catElement.getBoundingClientRect();
  const paw = document.createElement('div');
  paw.className = 'scroll-paw-print';
  paw.innerHTML = '🐾';

  paw.style.left = `${rect.left + 10}px`;
  paw.style.top = `${rect.top - 15}px`;

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 1600);
}
