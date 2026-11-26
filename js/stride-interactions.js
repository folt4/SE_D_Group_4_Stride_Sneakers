/**
 * STRIDE — 3D VISUALS & INTERACTIVE EFFECTS
 * 3D Card Tilt, Hero Sneaker Parallax, Ambient Particle Canvas, Quick View Modal
 */

const STRIDE_INTERACTIONS = {
  // --- 1. 3D PRODUCT CARD TILT ---
  initCardTilt() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8; // max 8 deg
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
      });
    });
  },

  // --- 2. HERO SNEAKER 3D PARALLAX & LIGHTING ---
  initHeroParallax() {
    const hero = document.querySelector('.hero-section');
    const sneakerWrap = document.querySelector('.hero-sneaker-wrapper');
    const glowOrb = document.querySelector('.sneaker-glow-orb');

    if (!hero || !sneakerWrap) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const tiltX = -y * 22; // 22 deg tilt
      const tiltY = x * 28;

      sneakerWrap.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(30px)`;

      if (glowOrb) {
        glowOrb.style.transform = `translate(${x * 60}px, ${y * 60}px) scale(1.08)`;
      }
    });

    hero.addEventListener('mouseleave', () => {
      sneakerWrap.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
      if (glowOrb) glowOrb.style.transform = 'translate(0, 0) scale(1)';
    });
  },

  // --- 3. AMBIENT PARTICLES CANVAS ---
  initParticles() {
    const canvas = document.querySelector('.hero-particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const particleCount = Math.min(45, Math.floor(width / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.7 - 0.2, // Drift upward
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.4 ? 'rgba(255, 90, 31,' : 'rgba(255, 140, 66,'
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#FF5A1F';
        ctx.fill();
      });

      requestAnimationFrame(render);
    }

    render();
  },

  // --- 4. QUICK VIEW MODAL ---
  openQuickView(productId) {
    if (typeof STRIDE_DATA === 'undefined') return;
    const product = STRIDE_DATA.products.find(p => p.id === productId);
    if (!product) return;

    let modal = document.querySelector('.quickview-modal-backdrop');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'quickview-modal-backdrop search-modal-backdrop';
      document.body.appendChild(modal);
    }

    const isPages = window.location.pathname.includes('/pages/');
    const pdpUrl = isPages ? `product-detail.html?id=${product.id}` : `pages/product-detail.html?id=${product.id}`;

    modal.innerHTML = `
      <div class="search-modal-box" style="max-width: 780px; padding: 2rem; position: relative;">
        <button class="close-quickview" style="position: absolute; top: 1.25rem; right: 1.5rem; color: #A0A4AE; font-size: 1.2rem; cursor: pointer;">✕</button>
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2rem; align-items: center;">
          <div style="background: radial-gradient(circle, #1F2430 0%, #151821 100%); border-radius: 14px; padding: 2rem; display: flex; align-items: center; justify-content: center;">
            <img src="${product.image}" alt="${product.name}" style="max-height: 220px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.8));">
          </div>
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F; text-transform: uppercase; font-weight: 700; margin-bottom: 0.35rem;">${product.brand} • ${product.condition}</div>
            <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.75rem; line-height: 1.2;">${product.name}</h3>
            <div style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 900; color: #FFFFFF; margin-bottom: 1rem;">$${product.price.toLocaleString()}</div>
            <p style="font-size: 0.85rem; color: #A0A4AE; margin-bottom: 1.5rem; line-height: 1.5;">${product.description.slice(0, 140)}...</p>
            
            <div style="margin-bottom: 1.5rem;">
              <label style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; color: #A0A4AE; display: block; margin-bottom: 0.4rem;">Select Size</label>
              <select id="quickview-size-select" class="custom-select" style="width: 100%;">
                <option value="US 8">US 8 • $${product.price.toLocaleString()}</option>
                <option value="US 8.5">US 8.5 • $${product.price.toLocaleString()}</option>
                <option value="US 9">US 9 • $${product.price.toLocaleString()}</option>
                <option value="US 9.5">US 9.5 • $${product.price.toLocaleString()}</option>
                <option value="US 10" selected>US 10 • $${product.price.toLocaleString()}</option>
                <option value="US 10.5">US 10.5 • $${product.price.toLocaleString()}</option>
                <option value="US 11">US 11 • $${product.price.toLocaleString()}</option>
                <option value="US 12">US 12 • $${product.price.toLocaleString()}</option>
              </select>
            </div>

            <div style="display: flex; gap: 0.75rem;">
              <button id="quickview-add-cart-btn" class="btn btn-primary" style="flex-grow: 1;">Add to Bag</button>
              <a href="${pdpUrl}" class="btn btn-secondary">Full Details</a>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');

    modal.querySelector('.close-quickview').addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });

    document.getElementById('quickview-add-cart-btn').addEventListener('click', () => {
      const selectedSize = document.getElementById('quickview-size-select').value;
      STRIDE_APP.addToCart(product, selectedSize, product.condition);
      modal.classList.remove('open');
    });
  },

  init() {
    this.initCardTilt();
    this.initHeroParallax();
    this.initParticles();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  STRIDE_INTERACTIONS.init();
});
