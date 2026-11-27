let currentProduct = null;
let selectedSize = "US 10";

document.addEventListener('DOMContentLoaded', () => {
  if (typeof STRIDE_DATA === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'travis-scott-jordan-1-reverse-mocha';
  
  currentProduct = STRIDE_DATA.products.find(p => p.id === productId) || STRIDE_DATA.products[0];

  // Populate DOM elements
  document.title = `${currentProduct.name} — STRIDE Resale Marketplace`;
  document.getElementById('pdp-breadcrumb-name').textContent = currentProduct.name;
  document.getElementById('pdp-title').textContent = currentProduct.name;
  document.getElementById('pdp-brand').textContent = `${currentProduct.brand} • ${currentProduct.releaseYear}`;
  
  function updatePdpPrices() {
    document.getElementById('pdp-price').textContent = STRIDE_APP.formatPrice(currentProduct.price);
    document.getElementById('pdp-retail-compare').textContent = `Original Retail: ${STRIDE_APP.formatPrice(currentProduct.retailPrice)}`;
  }
  updatePdpPrices();
  window.addEventListener('stride:currencychange', () => {
    updatePdpPrices();
    renderRelated();
  });

  document.getElementById('pdp-description').textContent = currentProduct.description;
  document.getElementById('pdp-sku').textContent = currentProduct.sku;
  document.getElementById('pdp-box').textContent = currentProduct.box;
  document.getElementById('pdp-colorway').textContent = currentProduct.colorway;
  document.getElementById('pdp-authenticity').textContent = currentProduct.authenticity;
  document.getElementById('pdp-condition-badge').textContent = currentProduct.condition;
  document.getElementById('pdp-rating').textContent = currentProduct.rating;
  document.getElementById('pdp-reviews-count').textContent = `${currentProduct.reviewsCount} verified transactions`;

  // Set Main Image
  const mainImg = document.getElementById('pdp-main-image');
  mainImg.src = currentProduct.image;
  mainImg.alt = currentProduct.name;

  // Populate Thumbnails
  const thumbStrip = document.getElementById('pdp-thumbnails');
  const gallery = currentProduct.gallery && currentProduct.gallery.length > 0 ? currentProduct.gallery : [currentProduct.image];
  
  thumbStrip.innerHTML = gallery.map((imgUrl, idx) => `
    <div class="pdp-thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchPdpImage('${imgUrl}', this)">
      <img src="${imgUrl}" alt="Angle ${idx + 1}">
    </div>
  `).join('');

  // Populate Size Grid
  const sizeGrid = document.getElementById('pdp-size-grid');
  const defaultSizes = ["US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 11.5", "US 12", "US 13"];
  
  sizeGrid.innerHTML = defaultSizes.map(sz => `
    <button class="pdp-size-btn ${sz === selectedSize ? 'selected' : ''}" onclick="selectSize('${sz}', this)">
      ${sz.replace('US ', '')}
    </button>
  `).join('');

  // Wishlist Button state
  const wishBtn = document.getElementById('pdp-wishlist-btn');
  if (STRIDE_APP.isWishlisted(currentProduct.id)) {
    wishBtn.classList.add('btn-primary');
    wishBtn.classList.remove('btn-secondary');
  }

  wishBtn.addEventListener('click', () => {
    const added = STRIDE_APP.toggleWishlist(currentProduct.id);
    wishBtn.classList.toggle('btn-primary', added);
    wishBtn.classList.toggle('btn-secondary', !added);
  });

  // Add to Bag Button
  document.getElementById('pdp-add-cart-btn').addEventListener('click', () => {
    STRIDE_APP.addToCart(currentProduct, selectedSize, currentProduct.condition);
    // Open drawer
    document.querySelector('.cart-drawer').classList.add('open');
    document.querySelector('.cart-drawer-backdrop').classList.add('open');
  });

  // Render Related Products
  function renderRelated() {
    const relatedGrid = document.getElementById('related-products-grid');
    const related = STRIDE_DATA.products.filter(p => p.id !== currentProduct.id).slice(0, 4);
    
    relatedGrid.innerHTML = related.map(p => `
      <div class="product-card">
        <div class="product-card-thumb">
          <span class="badge badge-grail" style="position: absolute; top: 1rem; left: 1rem;">${p.condition}</span>
          <img src="${p.image}" alt="${p.name}" class="product-card-img">
        </div>
        <div class="product-card-body">
          <div class="product-card-brand">${p.brand}</div>
          <h3 class="product-card-title">${p.name}</h3>
          <div class="product-card-meta">
            <div class="product-card-price">
              <span class="price-val" data-price-usd="${p.price}">${STRIDE_APP.formatPrice(p.price)}</span>
            </div>
            <a href="product-detail.html?id=${p.id}" class="btn btn-secondary product-card-cta">VIEW</a>
          </div>
        </div>
      </div>
    `).join('');

    STRIDE_INTERACTIONS.initCardTilt();
  }
  renderRelated();
});

function switchPdpImage(url, el) {
  document.getElementById('pdp-main-image').src = url;
  document.querySelectorAll('.pdp-thumb-item').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectSize(sz, btn) {
  selectedSize = sz;
  document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  STRIDE_APP.showToast(`Selected size ${sz}`, 'info');
}