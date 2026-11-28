function renderOrders() {
  const container = document.getElementById('orders-list-container');
  
  // Merge localStorage orders and demoOrders
  let orders = [];
  try {
    const stored = JSON.parse(localStorage.getItem('stride_orders') || '[]');
    orders = [...stored];
  } catch(e) {}

  if (typeof STRIDE_DATA !== 'undefined' && STRIDE_DATA.demoOrders) {
    STRIDE_DATA.demoOrders.forEach(demo => {
      if (!orders.some(o => o.orderId === demo.orderId)) {
        orders.push(demo);
      }
    });
  }

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 2rem; background: #171A22; border-radius: 16px; border: 1px solid #292D38;">
        <h3>No Prior Orders Found</h3>
        <p style="color: #A0A4AE; margin-top: 0.5rem;">When you secure grails on STRIDE, your authentication status and tracking appear here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => {
    let badgeColor = '#FF5A1F';
    let badgeClass = 'badge-grail';
    if (order.status.toLowerCase().includes('delivered')) {
      badgeColor = '#34D399';
      badgeClass = 'badge-deadstock';
    } else if (order.status.toLowerCase().includes('authenticated')) {
      badgeColor = '#00E5FF';
      badgeClass = 'badge-vnds';
    }

    return `
      <div class="glass-card" style="padding: 2rem;">
        <!-- Order Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #292D38; padding-bottom: 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap;">
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #A0A4AE; text-transform: uppercase;">Order Number</div>
              <div style="font-family: var(--font-mono); font-weight: 800; font-size: 1.05rem; color: #FFFFFF;">#${order.orderId.replace('#', '')}</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #A0A4AE; text-transform: uppercase;">Order Date</div>
              <div style="font-size: 0.95rem; color: #FFFFFF;">${order.date}</div>
            </div>
            <div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #A0A4AE; text-transform: uppercase;">Total</div>
              <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; color: #FFFFFF;">${STRIDE_APP.formatPrice(order.total)}</div>
            </div>
          </div>

          <div>
            <span class="badge ${badgeClass}" style="font-size: 0.8rem; padding: 0.4rem 0.85rem;">
              ${order.status.toUpperCase()}
            </span>
          </div>
        </div>

        <!-- Items in this order -->
        <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
          ${order.items.map(item => `
            <div style="display: flex; gap: 1.25rem; align-items: center;">
              <img src="${item.image}" alt="${item.name}" style="width: 75px; height: 60px; object-fit: contain; background: #11131A; border-radius: 8px; padding: 4px;">
              <div style="flex-grow: 1;">
                <h4 style="font-size: 0.95rem; font-weight: 800; color: #FFFFFF; line-height: 1.3;">${item.name}</h4>
                <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #FF5A1F; margin-top: 2px;">
                  ${item.size} • ${item.condition || 'Deadstock'} • Qty: ${item.qty || 1}
                </div>
              </div>
              <div style="font-family: var(--font-display); font-weight: 800; font-size: 1.1rem; color: #FFFFFF;">
                ${STRIDE_APP.formatPrice(item.price * (item.qty || 1))}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Footer Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #292D38; padding-top: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #A0A4AE;">
            Carrier: <strong style="color: #FFFFFF;">${order.carrier || 'FedEx Express'}</strong> (${order.trackingNumber || 'FX-998241042-US'})
          </div>
          <div style="display: flex; gap: 0.75rem;">
            <a href="track-order.html?tracking=${order.orderId}" class="btn btn-primary btn-sm">
              Track Delivery
            </a>
            <a href="order-confirmation.html?orderId=${order.orderId}" class="btn btn-secondary btn-sm">
              View Receipt
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderOrders();
  window.addEventListener('stride:currencychange', renderOrders);
});