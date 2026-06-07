// ── NAVBAR SCROLL ─────────────────────────────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 40);
  backTop?.classList.toggle('visible', window.scrollY > 400);
});

// ── MOBILE MENU ───────────────────────────────────────────────────────────
const mobileBtn  = document.querySelector('.nav-mobile-btn');
const mobileMenu = document.querySelector('.mobile-menu');
mobileBtn?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('open');
  mobileBtn.textContent = mobileMenu?.classList.contains('open') ? '✕' : '☰';
});
document.addEventListener('click', (e) => {
  if (!navbar?.contains(e.target) && !mobileMenu?.contains(e.target)) {
    mobileMenu?.classList.remove('open');
    if (mobileBtn) mobileBtn.textContent = '☰';
  }
});

// ── ACTIVE NAV LINK ───────────────────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ── BACK TO TOP ───────────────────────────────────────────────────────────
const backTop = document.querySelector('.back-top');
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── SPECIES FILTER ────────────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const speciesCards = document.querySelectorAll('.species-card[data-status]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    speciesCards.forEach(card => {
      const show = filter === 'all' || card.dataset.status === filter;
      card.style.display = show ? '' : 'none';
      if (show) card.style.animation = 'fadeIn .3s ease';
    });
  });
});

// ── PLEDGE OPTIONS ────────────────────────────────────────────────────────
document.querySelectorAll('.pledge-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    opt.closest('.pledge-options')?.querySelectorAll('.pledge-opt').forEach(o => o.classList.remove('active'));
    opt.classList.add('active');
  });
});

// ── TOAST ─────────────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ── PLEDGE FORM SUBMIT ────────────────────────────────────────────────────
document.querySelector('.pledge-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('🌿 Thank you! Your pledge has been recorded.');
  e.target.reset();
  document.querySelectorAll('.pledge-opt').forEach(o => o.classList.remove('active'));
});

// ── COUNTER ANIMATION ─────────────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
    }, 24);
  });
}

const statsSection = document.querySelector('.impact-section, .hero-stats');
if (statsSection) {
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
  }, { threshold: .3 });
  obs.observe(statsSection);
}

// ── FADE IN ON SCROLL ─────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.species-card, .news-card, .involve-card, .team-card');
if (fadeEls.length) {
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; } });
  }, { threshold: .1 });
  fadeEls.forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    fadeObs.observe(el);
  });
}

// ── NEWSLETTER FORM ────────────────────────────────────────────────────────
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('📧 You have been subscribed. Thank you!');
    form.reset();
  });
});
