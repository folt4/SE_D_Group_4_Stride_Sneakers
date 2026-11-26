/**
 * STRIDE — CORE APPLICATION CONTROLLER
 * Reactive Cart, Wishlist, Search Engine, Drawer, Toasts, Navigation
 */

const STRIDE_APP = {
  // Determine if running from /pages/ or root
  isPagesDir: window.location.pathname.includes('/pages/'),

  getRootPath(path) {
    if (this.isPagesDir) {
      return path.startsWith('/') ? '..' + path : '../' + path;
    }
    return path;
  },

  getPagePath(page) {
    if (this.isPagesDir) {
      return page;
    }
    return 'pages/' + page;
  },

  // --- REGIONAL CURRENCY & PRICE CONVERTER ENGINE ---
  getCurrency() {
    return localStorage.getItem('stride_currency') || 'USD';
  },

  getCurrencies() {
    return (typeof STRIDE_DATA !== 'undefined' && STRIDE_DATA.currencies) ? STRIDE_DATA.currencies : {
      USD: { code: "USD", name: "USD ($)", symbol: "$", rate: 1.0, flag: "🇺🇸", region: "United States / Global" },
      PKR: { code: "PKR", name: "PKR (Rs)", symbol: "Rs ", rate: 278.0, flag: "🇵🇰", region: "Pakistan" },
      AED: { code: "AED", name: "AED (د.إ)", symbol: "AED ", rate: 3.67, flag: "🇦🇪", region: "United Arab Emirates / Middle East" },
      SAR: { code: "SAR", name: "SAR (﷼)", symbol: "SAR ", rate: 3.75, flag: "🇸🇦", region: "Saudi Arabia / Arab Gulf" },
      EUR: { code: "EUR", name: "EUR (€)", symbol: "€", rate: 0.92, flag: "🇪🇺", region: "Europe / EU" },
      GBP: { code: "GBP", name: "GBP (£)", symbol: "£", rate: 0.79, flag: "🇬🇧", region: "United Kingdom" },
      CAD: { code: "CAD", name: "CAD (CA$)", symbol: "CA$", rate: 1.36, flag: "🇨🇦", region: "Canada" },
      KWD: { code: "KWD", name: "KWD (KD)", symbol: "KD ", rate: 0.31, flag: "🇰🇼", region: "Kuwait / Middle East" }
    };
  },

  getCurrencyData() {
    const currencies = this.getCurrencies();
    const code = this.getCurrency();
    return currencies[code] || currencies['USD'] || { code: "USD", name: "USD ($)", symbol: "$", rate: 1.0, flag: "🇺🇸", region: "Global" };
  },

  formatPrice(usdAmount) {
    if (usdAmount === null || usdAmount === undefined || isNaN(usdAmount)) return '$0';
    const num = Number(usdAmount);
    const curr = this.getCurrencyData();
    const converted = Math.round(num * curr.rate);
    const formatted = converted.toLocaleString();
    return `${curr.symbol}${formatted}`;
  },

  setCurrency(code) {
    const currencies = this.getCurrencies();
    if (!currencies[code]) return;
    localStorage.setItem('stride_currency', code);
    const curr = currencies[code];

    // Synchronize all currency selectors / badges on page
    document.querySelectorAll('.currency-trigger-label').forEach(el => {
      el.innerHTML = `${curr.flag} <span>${curr.code} (${curr.symbol.trim()})</span>`;
    });

    document.querySelectorAll('.currency-select-input').forEach(sel => {
      sel.value = code;
    });

    document.querySelectorAll('.currency-dropdown-option').forEach(opt => {
      if (opt.getAttribute('data-code') === code) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Update all elements with data-price-usd
    document.querySelectorAll('[data-price-usd]').forEach(el => {
      const usd = parseFloat(el.getAttribute('data-price-usd'));
      if (!isNaN(usd)) {
        el.textContent = this.formatPrice(usd);
      }
    });

    // Update cart drawer
    this.renderCartDrawer();

    // Broadcast custom event for pages with specialized catalogs (e.g. shop.html, cart.html)
    window.dispatchEvent(new CustomEvent('stride:currencychange', {
      detail: { currency: code, currencyData: curr }
    }));

    // Toast notification
    this.showToast(`Region & Currency set to ${curr.flag} ${curr.name} — ${curr.region}`, 'success');
  },

  // --- LOCALSTORAGE CART ENGINE ---
  getCart() {
    try {
      const stored = localStorage.getItem('stride_cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  saveCart(cart) {
    localStorage.setItem('stride_cart', JSON.stringify(cart));
    this.updateBadges();
    this.renderCartDrawer();
  },

  addToCart(product, size = "US 10", condition = "Deadstock", qty = 1) {
    let cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        condition: condition || product.condition,
        size: size,
        qty: qty
      });
    }

    this.saveCart(cart);
    this.showToast(`Added ${product.name} (${size}) to bag!`, 'success');
  },

  removeFromCart(id, size) {
    let cart = this.getCart();
    cart = cart.filter(item => !(item.id === id && item.size === size));
    this.saveCart(cart);
    this.showToast("Item removed from bag", 'info');
  },

  updateQuantity(id, size, change) {
    let cart = this.getCart();
    const item = cart.find(i => i.id === id && i.size === size);
    if (item) {
      item.qty += change;
      if (item.qty <= 0) {
        this.removeFromCart(id, size);
        return;
      }
      this.saveCart(cart);
    }
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.qty, 0);
  },

  getCartSubtotal() {
    return this.getCart().reduce((sum, item) => sum + (item.price * item.qty), 0);
  },

  // Promo Code Engine
  getActiveDiscount() {
    const code = localStorage.getItem('stride_promo_code');
    const subtotal = this.getCartSubtotal();
    if (code === 'STRIDE10') {
      return { code: 'STRIDE10', rate: 0.10, amount: Math.round(subtotal * 0.10) };
    } else if (code === 'FIRSTDROP') {
      return { code: 'FIRSTDROP', amount: 50 };
    }
    return { code: null, amount: 0 };
  },

  applyPromoCode(rawCode) {
    const code = rawCode.trim().toUpperCase();
    if (code === 'STRIDE10') {
      localStorage.setItem('stride_promo_code', 'STRIDE10');
      this.showToast("Promo code 'STRIDE10' applied (10% OFF)!", 'success');
      return true;
    } else if (code === 'FIRSTDROP') {
      localStorage.setItem('stride_promo_code', 'FIRSTDROP');
      this.showToast("Promo code 'FIRSTDROP' applied ($50 OFF)!", 'success');
      return true;
    } else {
      this.showToast("Invalid promo code. Try STRIDE10 or FIRSTDROP", 'error');
      return false;
    }
  },

  // --- LOCALSTORAGE WISHLIST ENGINE ---
  getWishlist() {
    try {
      const stored = localStorage.getItem('stride_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  },

  isWishlisted(id) {
    return this.getWishlist().includes(id);
  },

  toggleWishlist(id) {
    let list = this.getWishlist();
    const index = list.indexOf(id);
    let added = false;

    if (index > -1) {
      list.splice(index, 1);
      this.showToast("Removed from Wishlist", 'info');
    } else {
      list.push(id);
      added = true;
      this.showToast("Saved to Wishlist!", 'success');
    }

    localStorage.setItem('stride_wishlist', JSON.stringify(list));
    this.updateBadges();

    // Toggle heart visual if present on page
    document.querySelectorAll(`[data-wishlist-id="${id}"]`).forEach(btn => {
      btn.classList.toggle('active', added);
    });

    return added;
  },

  getWishlistCount() {
    return this.getWishlist().length;
  },

  // --- REPAIR / SYNC BADGES ---
  updateBadges() {
    const cartCount = this.getCartCount();
    const wishCount = this.getWishlistCount();

    document.querySelectorAll('.cart-badge-count').forEach(badge => {
      badge.textContent = cartCount;
      badge.style.display = cartCount > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('.wishlist-badge-count').forEach(badge => {
      badge.textContent = wishCount;
      badge.style.display = wishCount > 0 ? 'flex' : 'none';
    });
  },

  // --- TOAST NOTIFICATIONS ---
  showToast(message, type = 'info') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // Icon
    const icon = type === 'success' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A1F" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  },

  // --- CART DRAWER CONTROLLER ---
  initCartDrawer() {
    const backdrop = document.querySelector('.cart-drawer-backdrop');
    const drawer = document.querySelector('.cart-drawer');
    const triggers = document.querySelectorAll('.trigger-cart');
    const closes = document.querySelectorAll('.close-cart');

    if (!drawer) return;

    triggers.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      drawer.classList.add('open');
      if (backdrop) backdrop.classList.add('open');
      this.renderCartDrawer();
    }));

    const closeHandler = () => {
      drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
    };

    closes.forEach(c => c.addEventListener('click', closeHandler));
    if (backdrop) backdrop.addEventListener('click', closeHandler);
  },

  renderCartDrawer() {
    const container = document.querySelector('.cart-drawer-items');
    const subtotalEl = document.querySelector('.cart-drawer-subtotal');
    const freeShippingProgress = document.querySelector('.free-shipping-fill');
    const freeShippingText = document.querySelector('.free-shipping-text');

    if (!container) return;

    const cart = this.getCart();
    const subtotal = this.getCartSubtotal();

    if (cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem;">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#626775" stroke-width="1.5" style="margin: 0 auto 1rem;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Your Bag is Empty</h4>
          <p style="font-size: 0.85rem; color: #A0A4AE; margin-bottom: 1.5rem;">Discover exclusive grails and express your identity.</p>
          <a href="${this.getPagePath('shop.html')}" class="btn btn-outline btn-sm">Browse Collection</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = this.formatPrice(0);
      return;
    }

    container.innerHTML = cart.map(item => `
      <div style="display: flex; gap: 1rem; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid #292D38;">
        <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 60px; object-fit: contain; background: #171A22; border-radius: 8px; padding: 4px;">
        <div style="flex-grow: 1;">
          <h5 style="font-size: 0.85rem; font-weight: 700; color: #FFFFFF; line-height: 1.3;">${item.name}</h5>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F; margin: 2px 0;">${item.size} • ${item.condition}</div>
          <div style="font-weight: 800; font-size: 0.95rem;">${this.formatPrice(item.price * item.qty)}</div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem;">
          <button onclick="STRIDE_APP.removeFromCart('${item.id}', '${item.size}')" style="color: #626775; font-size: 0.8rem; cursor: pointer;" title="Remove">✕</button>
          <div class="quantity-control" style="transform: scale(0.85); transform-origin: right;">
            <button class="quantity-btn" onclick="STRIDE_APP.updateQuantity('${item.id}', '${item.size}', -1)">-</button>
            <span class="quantity-display">${item.qty}</span>
            <button class="quantity-btn" onclick="STRIDE_APP.updateQuantity('${item.id}', '${item.size}', 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');

    if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);

    // Free shipping threshold ($200 USD base)
    if (freeShippingProgress && freeShippingText) {
      const remaining = 200 - subtotal;
      if (remaining <= 0) {
        freeShippingProgress.style.width = '100%';
        freeShippingText.innerHTML = `⚡ You've unlocked <strong>FREE Express Insured Shipping!</strong>`;
      } else {
        const percent = Math.min(100, Math.round((subtotal / 200) * 100));
        freeShippingProgress.style.width = `${percent}%`;
        freeShippingText.innerHTML = `Add <strong>${this.formatPrice(remaining)}</strong> more for Free Express Shipping`;
      }
    }
  },

  // --- SEARCH MODAL ENGINE ---
  initSearchModal() {
    const backdrop = document.querySelector('.search-modal-backdrop');
    const input = document.querySelector('.search-input');
    const resultsContainer = document.querySelector('.search-results-list');
    const triggers = document.querySelectorAll('.trigger-search');
    const closeBtn = document.querySelector('.close-search');

    if (!backdrop || !input) return;

    const openSearch = () => {
      backdrop.classList.add('open');
      input.focus();
    };

    const closeSearch = () => {
      backdrop.classList.remove('open');
      input.value = '';
    };

    triggers.forEach(t => t.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    }));

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeSearch();
    });

    // Keyboard shortcut Ctrl + K
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        backdrop.classList.contains('open') ? closeSearch() : openSearch();
      }
      if (e.key === 'Escape' && backdrop.classList.contains('open')) {
        closeSearch();
      }
    });

    // Live Instant Autocomplete Search
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!resultsContainer) return;

      if (q.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; color: #626775; padding: 2rem;">Search by model, brand, or SKU (e.g. Travis Scott, Chicago, Dunk)</p>`;
        return;
      }

      if (typeof STRIDE_DATA === 'undefined') return;

      const matches = STRIDE_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="text-align: center; color: #A0A4AE; padding: 2rem;">No matching grails found for "${q}".</p>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(p => `
        <a href="${this.getPagePath(`product-detail.html?id=${p.id}`)}" class="search-result-item">
          <img src="${p.image}" alt="${p.name}">
          <div style="flex-grow: 1;">
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F; text-transform: uppercase;">${p.brand} • ${p.condition}</div>
            <div style="font-weight: 700; color: #FFFFFF; font-size: 0.95rem;">${p.name}</div>
          </div>
          <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; color: #FFFFFF;">
            ${this.formatPrice(p.price)}
          </div>
        </a>
      `).join('');
    });
  },

  // --- REGIONAL CURRENCY SELECTOR CONTROLLER ---
  initCurrencySelector() {
    const currencies = this.getCurrencies();
    const currentCode = this.getCurrency();
    const currentCurr = this.getCurrencyData();

    // 1. Inject into Top Announcement Bar (if exists and not yet injected)
    const announcementBar = document.querySelector('.announcement-bar');
    if (announcementBar && !document.querySelector('.announcement-currency-wrap')) {
      const barWrap = document.createElement('div');
      barWrap.className = 'announcement-currency-wrap';
      barWrap.innerHTML = `
        <span class="announcement-currency-title">REGION:</span>
        <select class="announcement-currency-select currency-select-input" aria-label="Select Region & Currency">
          ${Object.values(currencies).map(c => `
            <option value="${c.code}" ${c.code === currentCode ? 'selected' : ''}>
              ${c.flag} ${c.code} (${c.symbol.trim()}) — ${c.region}
            </option>
          `).join('')}
        </select>
      `;
      announcementBar.appendChild(barWrap);
      
      const selectEl = barWrap.querySelector('.announcement-currency-select');
      selectEl.addEventListener('change', (e) => {
        this.setCurrency(e.target.value);
      });
    }

    // 2. Inject sleek luxury dropdown button into .nav-actions (Header)
    const navActions = document.querySelector('.nav-actions');
    if (navActions && !document.querySelector('.currency-selector-nav')) {
      const navWrap = document.createElement('div');
      navWrap.className = 'currency-selector-nav';
      navWrap.innerHTML = `
        <button class="currency-nav-btn" type="button" aria-haspopup="true" aria-expanded="false" title="Switch Country/Region & Currency">
          <span class="currency-trigger-label">${currentCurr.flag} <span>${currentCurr.code} (${currentCurr.symbol.trim()})</span></span>
          <svg class="currency-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="currency-dropdown-panel">
          <div class="currency-dropdown-header">
            <span>SELECT REGION & CURRENCY</span>
            <span class="currency-rates-badge">LIVE RATES</span>
          </div>
          <div class="currency-dropdown-list">
            ${Object.values(currencies).map(c => `
              <div class="currency-dropdown-option ${c.code === currentCode ? 'active' : ''}" data-code="${c.code}">
                <div class="curr-opt-flag">${c.flag}</div>
                <div class="curr-opt-info">
                  <div class="curr-opt-title">${c.code} (${c.symbol.trim()})</div>
                  <div class="curr-opt-region">${c.region}</div>
                </div>
                <div class="curr-opt-active-dot"></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      // Insert right before search button
      const searchBtn = navActions.querySelector('.trigger-search');
      if (searchBtn) {
        navActions.insertBefore(navWrap, searchBtn);
      } else {
        navActions.prepend(navWrap);
      }

      const btn = navWrap.querySelector('.currency-nav-btn');
      const panel = navWrap.querySelector('.currency-dropdown-panel');

      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = panel.classList.contains('open');
        document.querySelectorAll('.currency-dropdown-panel.open').forEach(p => p.classList.remove('open'));
        if (!isOpen) {
          panel.classList.add('open');
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      panel.querySelectorAll('.currency-dropdown-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
          e.stopPropagation();
          const code = opt.getAttribute('data-code');
          this.setCurrency(code);
          panel.classList.remove('open');
          btn.classList.remove('active');
        });
      });

      document.addEventListener('click', () => {
        panel.classList.remove('open');
        btn.classList.remove('active');
      });
    }

    // 3. Inject into Mobile Navigation Drawer
    const mobileLinks = document.querySelector('.mobile-nav-links');
    if (mobileLinks && !document.querySelector('.mobile-currency-box')) {
      const mobileBox = document.createElement('div');
      mobileBox.className = 'mobile-currency-box';
      mobileBox.innerHTML = `
        <div class="mobile-currency-title">🌐 REGION & CURRENCY:</div>
        <select class="mobile-currency-select currency-select-input" aria-label="Select Region & Currency">
          ${Object.values(currencies).map(c => `
            <option value="${c.code}" ${c.code === currentCode ? 'selected' : ''}>
              ${c.flag} ${c.code} (${c.symbol.trim()}) — ${c.region}
            </option>
          `).join('')}
        </select>
      `;
      mobileLinks.parentNode.insertBefore(mobileBox, mobileLinks);
      
      const mobileSelect = mobileBox.querySelector('.mobile-currency-select');
      mobileSelect.addEventListener('change', (e) => {
        this.setCurrency(e.target.value);
      });
    }
  },

  // --- HEADER SCROLL DETECTOR ---
  initHeaderScroll() {
    const header = document.querySelector('.stride-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  },

  // --- MOBILE HAMBURGER MENU ---
  initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const drawer = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (!toggle || !drawer) return;

    const openMenu = () => {
      drawer.classList.add('open');
      if (overlay) overlay.classList.add('open');
    };

    const closeMenu = () => {
      drawer.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
    };

    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
  },

  // --- BOOTSTRAP MASTER INIT ---
  init() {
    this.initCurrencySelector();
    this.updateBadges();
    this.initHeaderScroll();
    this.initMobileMenu();
    this.initCartDrawer();
    this.initSearchModal();
  }
};

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  STRIDE_APP.init();
});
