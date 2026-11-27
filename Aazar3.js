function renderCheckoutSummary() {
  const cart = STRIDE_APP.getCart();
  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  document.getElementById('checkout-item-count').textContent = cart.reduce((s, i) => s + i.qty, 0);

  const itemsList = document.getElementById('checkout-items-list');
  itemsList.innerHTML = cart.map(item => `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <img src="${item.image}" alt="${item.name}" style="width: 58px; height: 50px; object-fit: contain; background: #11131A; border-radius: 8px; padding: 4px;">
      <div style="flex-grow: 1;">
        <div style="font-weight: 700; color: #FFFFFF; font-size: 0.85rem; line-height: 1.2;">${item.name}</div>
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #FF5A1F;">${item.size} • Qty: ${item.qty}</div>
      </div>
      <div style="font-family: var(--font-display); font-weight: 800; font-size: 0.95rem; color: #FFFFFF;">
        ${STRIDE_APP.formatPrice(item.price * item.qty)}
      </div>
    </div>
  `).join('');

  const subtotal = STRIDE_APP.getCartSubtotal();
  const promo = STRIDE_APP.getActiveDiscount();
  let discountAmount = promo.amount || 0;

  document.getElementById('checkout-subtotal').textContent = STRIDE_APP.formatPrice(subtotal);

  if (discountAmount > 0) {
    document.getElementById('checkout-discount-row').style.display = 'flex';
    document.getElementById('checkout-discount').textContent = `-${STRIDE_APP.formatPrice(discountAmount)}`;
  }

  const total = Math.max(0, subtotal - discountAmount);
  document.getElementById('checkout-total').textContent = STRIDE_APP.formatPrice(total);
}

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  window.addEventListener('stride:currencychange', renderCheckoutSummary);
});

// Form Validation & Place Order
document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const email = document.getElementById('checkout-email');
  const phone = document.getElementById('checkout-phone');
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const address = document.getElementById('address');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zip = document.getElementById('zip');

  const inputs = [email, phone, firstName, lastName, address, city, state, zip];
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.parentElement.classList.add('error');
      valid = false;
    } else {
      input.parentElement.classList.remove('error');
    }
  });

  if (valid) {
    const orderId = `STR-${Math.floor(100000 + Math.random() * 900000)}`;
    const cart = STRIDE_APP.getCart();
    const subtotal = STRIDE_APP.getCartSubtotal();

    const newOrder = {
      orderId: orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Authenticated by Stride',
      total: subtotal,
      carrier: 'FedEx Express Priority',
      trackingNumber: `FX-${Math.floor(100000000 + Math.random() * 900000000)}-US`,
      estimatedDelivery: 'In 2 Business Days',
      currentStep: 1,
      items: cart,
      shippingAddress: {
        name: `${firstName.value} ${lastName.value}`,
        address: address.value,
        city: city.value,
        state: state.value,
        zip: zip.value,
        country: 'United States'
      }
    };

    // Save order to localStorage
    let orders = [];
    try {
      const stored = localStorage.getItem('stride_orders');
      orders = stored ? JSON.parse(stored) : [];
    } catch(e) {}
    orders.unshift(newOrder);
    localStorage.setItem('stride_orders', JSON.stringify(orders));

    // Clear cart
    localStorage.setItem('stride_cart', JSON.stringify([]));
    localStorage.removeItem('stride_promo_code');
    STRIDE_APP.updateBadges();

    // Redirect to Order Confirmation
    window.location.href = `order-confirmation.html?orderId=${orderId}`;
  }
});