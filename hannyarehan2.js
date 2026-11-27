let activeCategory = 'all';
let searchQuery = '';

function renderFaqs() {
  if (typeof STRIDE_DATA === 'undefined') return;
  const container = document.getElementById('faq-accordion-list');

  let list = STRIDE_DATA.faqs;

  if (activeCategory !== 'all') {
    list = list.filter(f => f.category === activeCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: #A0A4AE; padding: 2rem;">No matching questions found for "${searchQuery}".</div>`;
    return;
  }

  container.innerHTML = list.map((item, idx) => `
    <div class="faq-accordion-item ${idx === 0 ? 'active' : ''}">
      <div class="faq-accordion-header" onclick="this.parentElement.classList.toggle('active')">
        <span>${item.q}</span>
        <span class="faq-accordion-icon">+</span>
      </div>
      <div class="faq-accordion-body">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.faq-category-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.faq-category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-cat');
    renderFaqs();
  });
});

document.getElementById('faq-search').addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  renderFaqs();
});

document.addEventListener('DOMContentLoaded', renderFaqs);