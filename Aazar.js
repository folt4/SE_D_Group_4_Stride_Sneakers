// State Filter Store
let selectedBrands = [];
let selectedConditions = [];
let selectedSize = null;
let maxPrice = 6000;
let searchQuery = '';
let sortMode = 'featured';

const grid = document.getElementById('catalogue-products-grid');
const countEl = document.getElementById('filtered-count');
const noResults = document.getElementById('no-results-view');
const slider = document.getElementById('price-range-slider');
const sliderVal = document.getElementById('price-slider-val');
const searchInput = document.getElementById('catalogue-search-input');
const sortSelect = document.getElementById('catalogue-sort-select');

// Parse URL params (e.g. ?brand=Jordan or ?filter=grail)
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const brandParam = params.get('brand');
  const filterParam = params.get('filter');

  if (brandParam) {
    selectedBrands.push(brandParam);
    const checkbox = document.querySelector(`input[name="brand"][value="${brandParam}"]`);
    if (checkbox) checkbox.checked = true;
  }

  if (filterParam === 'grail') {
    selectedConditions.push('Deadstock');
  }
}

function renderCatalogue() {
  if (typeof STRIDE_DATA === 'undefined') return;

  let list = [...STRIDE_DATA.products];

  // 1. Search Query
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.sku.toLowerCase().includes(q)
    );
  }

  // 2. Brand Filter
  if (selectedBrands.length > 0) {
    list = list.filter(p => selectedBrands.includes(p.brand));
  }

  // 3. Condition Filter
  if (selectedConditions.length > 0) {
    list = list.filter(p => selectedConditions.includes(p.condition));
  }

  // 4. Max Price Slider
  list = list.filter(p => p.price <= maxPrice);

  // 5. Sorting
  if (sortMode === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (sortMode === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (sortMode === 'newest') {
    list.sort((a, b) => b.releaseYear - a.releaseYear);
  } else if (sortMode === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  countEl.textContent = list.length;

  if (list.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  noResults.style.display = 'none';

  grid.innerHTML = list.map(p => {
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
            <a href="product-detail.html?id=${p.id}" class="btn btn-secondary product-card-cta">
              DETAILS
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  STRIDE_INTERACTIONS.initCardTilt();
}

function resetFilters() {
  selectedBrands = [];
  selectedConditions = [];
  selectedSize = null;
  maxPrice = 300;
  searchQuery = '';
  slider.value = 300;
  updateSliderLabels();
  searchInput.value = '';
  sortSelect.value = 'featured';

  document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
  document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));

  renderCatalogue();
}

function updateSliderLabels() {
  sliderVal.textContent = STRIDE_APP.formatPrice(maxPrice);
  const minEl = document.getElementById('slider-min-val');
  const maxEl = document.getElementById('slider-max-val');
  if (minEl) minEl.textContent = STRIDE_APP.formatPrice(100);
  if (maxEl) maxEl.textContent = STRIDE_APP.formatPrice(300);
}

// Attach Event Listeners
document.querySelectorAll('input[name="brand"]').forEach(cb => {
  cb.addEventListener('change', (e) => {
    if (e.target.checked) {
      selectedBrands.push(e.target.value);
    } else {
      selectedBrands = selectedBrands.filter(b => b !== e.target.value);
    }
    renderCatalogue();
  });
});

document.querySelectorAll('input[name="condition"]').forEach(cb => {
  cb.addEventListener('change', (e) => {
    if (e.target.checked) {
      selectedConditions.push(e.target.value);
    } else {
      selectedConditions = selectedConditions.filter(c => c !== e.target.value);
    }
    renderCatalogue();
  });
});

document.querySelectorAll('.size-chip').forEach(chip => {
  chip.addEventListener('click', (e) => {
    const sz = e.target.getAttribute('data-size');
    if (selectedSize === sz) {
      selectedSize = null;
      chip.classList.remove('active');
    } else {
      document.querySelectorAll('.size-chip').forEach(c => c.classList.remove('active'));
      selectedSize = sz;
      chip.classList.add('active');
    }
    renderCatalogue();
  });
});

slider.addEventListener('input', (e) => {
  maxPrice = parseInt(e.target.value, 10);
  sliderVal.textContent = STRIDE_APP.formatPrice(maxPrice);
  renderCatalogue();
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderCatalogue();
});

sortSelect.addEventListener('change', (e) => {
  sortMode = e.target.value;
  renderCatalogue();
});

document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);

document.addEventListener('DOMContentLoaded', () => {
  parseUrlParams();
  updateSliderLabels();
  renderCatalogue();

  window.addEventListener('stride:currencychange', () => {
    updateSliderLabels();
    renderCatalogue();
  });
});