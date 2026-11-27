function renderCartPage() {
  const cart = STRIDE_APP.getCart();
  const container = document.getElementById('cart-items-container');
  const emptyView = document.getElementById('cart-empty-view');
  const checkoutBtn = document.getElementById('proceed-checkout-btn');

  if (cart.length === 0) {
    container.style.display = 'none';
    emptyView.style.display = 'block';
    checkoutBtn.style.pointerEvents = 'none';
    checkoutBtn.style.opacity = '0.5';
    updateSummary(0);
    return;
  }

  container.style.display = 'block';
  emptyView.style.display = 'none';
  checkoutBtn.style.pointerEvents = 'auto';
  checkoutBtn.style.opacity = '1';

  container.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div>
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F; text-transform: uppercase;">${item.brand} • ${item.condition}</div>
        <h4 style="font-size: 1.05rem; font-weight: 800; color: #FFFFFF; line-height: 1.3;">${item.name}</h4>
        <div style="font-size: 0.85rem; color: #A0A4AE; margin-top: 0.25rem;">Size: <strong style="color: #FFFFFF;">${item.size}</strong></div>
      </div>
      <div class="quantity-control">
        <button class="quantity-btn" onclick="updateQty('${item.id}', '${item.size}', -1)">-</button>
        <span class="quantity-display">${item.qty}</span>
        <button class="quantity-btn" onclick="updateQty('${item.id}', '${item.size}', 1)">+</button>
      </div>
      <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 800; text-align: right;">
        ${STRIDE_APP.formatPrice(item.price * item.qty)}
      </div>
      <button onclick="removeItem('${item.id}', '${item.size}')" style="color: #626775; font-size: 1.1rem; cursor: pointer;" title="Remove Item">✕</button>
    </div>
  `).join('');

  const subtotal = STRIDE_APP.getCartSubtotal();
  updateSummary(subtotal);

  // Shipping Progress
  const shippingMsg = document.getElementById('cart-page-shipping-msg');
  const shippingFill = document.getElementById('cart-page-shipping-fill');
  if (subtotal >= 200) {
    shippingFill.style.width = '100%';
    shippingMsg.innerHTML = `⚡ You qualify for <strong>FREE Insured Express Shipping!</strong>`;
  } else {
    const remaining = 200 - subtotal;
    shippingFill.style.width = `${Math.min(100, (subtotal / 200) * 100)}%`;
    shippingMsg.innerHTML = `Add <strong>${STRIDE_APP.formatPrice(remaining)}</strong> more to qualify for Free Express Insured Shipping.`;
  }
}

function updateSummary(subtotal) {
  const subtotalEl = document.getElementById('summary-subtotal');
  const shippingEl = document.getElementById('summary-shipping');
  const totalEl = document.getElementById('summary-total');
  const discountRow = document.getElementById('summary-discount-row');
  const discountLabel = document.getElementById('discount-label');
  const discountEl = document.getElementById('summary-discount');

  subtotalEl.textContent = STRIDE_APP.formatPrice(subtotal);

  const shipping = subtotal >= 200 || subtotal === 0 ? 0 : 25;
  shippingEl.textContent = shipping === 0 ? 'FREE' : STRIDE_APP.formatPrice(shipping);

  const promo = STRIDE_APP.getActiveDiscount();
  let discountAmount = 0;

  if (promo.code && subtotal > 0) {
    discountAmount = promo.amount || 0;
    discountRow.style.display = 'flex';
    discountLabel.textContent = promo.code;
    discountEl.textContent = `-${STRIDE_APP.formatPrice(discountAmount)}`;
  } else {
    discountRow.style.display = 'none';
  }

  const total = Math.max(0, subtotal + shipping - discountAmount);
  totalEl.textContent = STRIDE_APP.formatPrice(total);
}

window.updateQty = function(id, size, change) {
  STRIDE_APP.updateQuantity(id, size, change);
  renderCartPage();
};

window.removeItem = function(id, size) {
  STRIDE_APP.removeFromCart(id, size);
  renderCartPage();
};

document.getElementById('apply-promo-btn').addEventListener('click', () => {
  const input = document.getElementById('promo-code-input');
  if (STRIDE_APP.applyPromoCode(input.value)) {
    renderCartPage();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
  window.addEventListener('stride:currencychange', renderCartPage);
});