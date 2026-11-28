document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('orderId') || 'STR-882914';

  document.getElementById('order-confirm-id').textContent = `#${orderId.replace('#', '')}`;
  document.getElementById('track-order-btn').href = `track-order.html?tracking=${orderId}`;

  // Look up order in localStorage or STRIDE_DATA
  let order = null;
  try {
    const storedOrders = JSON.parse(localStorage.getItem('stride_orders') || '[]');
    order = storedOrders.find(o => o.orderId === orderId);
  } catch(e) {}

  if (!order && typeof STRIDE_DATA !== 'undefined') {
    order = STRIDE_DATA.demoOrders.find(o => o.orderId === orderId) || STRIDE_DATA.demoOrders[0];
  }

  function renderOrderReceipt() {
    if (!order) return;
    document.getElementById('confirmed-total').textContent = STRIDE_APP.formatPrice(order.total);
    const itemsList = document.getElementById('confirmed-items-list');

    itemsList.innerHTML = order.items.map(item => `
      <div style="display: flex; gap: 1.25rem; align-items: center;">
        <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 60px; object-fit: contain; background: #171A22; border-radius: 8px; padding: 4px;">
        <div style="flex-grow: 1;">
          <h5 style="font-size: 0.95rem; font-weight: 800; color: #FFFFFF; line-height: 1.3;">${item.name}</h5>
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F; margin-top: 2px;">
            ${item.size} • ${item.condition || 'Deadstock'} • Qty: ${item.qty || 1}
          </div>
        </div>
        <div style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 800; color: #FFFFFF;">
          ${STRIDE_APP.formatPrice(item.price * (item.qty || 1))}
        </div>
      </div>
    `).join('');
  }

  renderOrderReceipt();
  window.addEventListener('stride:currencychange', renderOrderReceipt);
});