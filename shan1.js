// Homepage Dynamic Product Card Renderer with Currency Conversion Support
function renderHomeProducts() {
  const featuredGrid = document.getElementById('featured-products-grid');
  const trendingGrid = document.getElementById('trending-products-grid');

  // Update hero stat price
  const heroPriceEl = document.querySelector('.hero-price-val');
  if (heroPriceEl && typeof STRIDE_APP !== 'undefined') {
    heroPriceEl.textContent = STRIDE_APP.formatPrice(190);
  }

  function createProductCardHTML(p) {
    const isFav = STRIDE_APP.isWishlisted(p.id);
    const badgeClass = p.badge === 'GRAIL' ? 'badge-grail' : (p.condition === 'Deadstock' ? 'badge-deadstock' : 'badge-vnds');

    return `
      <div class="product-card">
        <div class="product-card-thumb">
          <div class="product-card-badges">
            <span class="badge ${badgeClass}">${p.badge || p.condition}</span>
            <span class="badge badge-verified">🛡️ VERIFIED</span>
          </div>
          <button 
            class="product-card-fav ${isFav ? 'active' : ''}" 
            data-wishlist-id="${p.id}" 
            onclick="STRIDE_APP.toggleWishlist('${p.id}')"
            aria-label="Save to Wishlist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <img src="${p.image}" alt="${p.name}" class="product-card-img">
          <button class="product-card-quickview" onclick="STRIDE_INTERACTIONS.openQuickView('${p.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            QUICK VIEW
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-card-brand">${p.brand} • ${p.releaseYear}</div>
          <h3 class="product-card-title">${p.name}</h3>
          <div class="product-card-meta">
            <div class="product-card-price">
              <span class="price-label">Current Resale</span>
              <span class="price-val" data-price-usd="${p.price}">${STRIDE_APP.formatPrice(p.price)}</span>
            </div>
            <a href="pages/product-detail.html?id=${p.id}" class="btn btn-secondary product-card-cta">
              DETAILS
            </a>
          </div>
        </div>
      </div>
    `;
  }

  if (featuredGrid && typeof STRIDE_DATA !== 'undefined') {
    const featured = STRIDE_DATA.products.filter(p => p.isFeatured).slice(0, 4);
    featuredGrid.innerHTML = featured.map(createProductCardHTML).join('');
  }

  if (trendingGrid && typeof STRIDE_DATA !== 'undefined') {
    const trending = STRIDE_DATA.products.filter(p => p.isTrending).slice(0, 4);
    trendingGrid.innerHTML = trending.map(createProductCardHTML).join('');
  }

  // Re-trigger card tilt for newly created cards
  STRIDE_INTERACTIONS.initCardTilt();
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeProducts();
  window.addEventListener('stride:currencychange', renderHomeProducts);
});