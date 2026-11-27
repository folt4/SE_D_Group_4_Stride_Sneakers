const priceInput = document.getElementById('sell-price');
const grossEl = document.getElementById('payout-gross');
const feeEl = document.getElementById('payout-fee');
const netEl = document.getElementById('payout-net');
const dropzone = document.getElementById('upload-dropzone');
const fileInput = document.getElementById('sneaker-file-input');
const previewGrid = document.getElementById('upload-preview-grid');
const photoError = document.getElementById('photo-error-msg');
let uploadedPhotos = [];

// Live Payout Calculator
function calculatePayout() {
  const val = parseFloat(priceInput.value) || 0;
  if (val <= 0) {
    grossEl.textContent = STRIDE_APP.formatPrice(0);
    feeEl.textContent = -${STRIDE_APP.formatPrice(0)};
    netEl.textContent = STRIDE_APP.formatPrice(0);
    return;
  }
  const fee = Math.round(val * 0.095);
  const net = Math.max(0, val - fee - 5);

  grossEl.textContent = STRIDE_APP.formatPrice(val);
  feeEl.textContent = -${STRIDE_APP.formatPrice(fee)};
  netEl.textContent = STRIDE_APP.formatPrice(net);
}

priceInput.addEventListener('input', calculatePayout);
window.addEventListener('stride:currencychange', calculatePayout);

// Dropzone Click
dropzone.addEventListener('click', () => fileInput.click());

// File Preview Handler
fileInput.addEventListener('change', handleFiles);
dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('dragover'); });
dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();
  dropzone.classList.remove('dragover');
  if (e.dataTransfer.files) {
    handleFiles({ target: { files: e.dataTransfer.files } });
  }
});

function handleFiles(e) {
  const files = Array.from(e.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (event) => {
      uploadedPhotos.push(event.target.result);
      renderPreviews();
    };
    reader.readAsDataURL(file);
  });
  photoError.style.display = 'none';
}

function renderPreviews() {
  previewGrid.innerHTML = uploadedPhotos.map((src, i) => `
    <div class="upload-preview-item">
      <img src="${src}" alt="Preview ${i+1}">
      <button type="button" onclick="removePhoto(${i})" style="position: absolute; top: 2px; right: 2px; background: rgba(0,0,0,0.8); color: #FF5A1F; border-radius: 50%; width: 20px; height: 20px; font-size: 12px; display: flex; align-items: center; justify-content: center; cursor: pointer;">✕</button>
    </div>
  `).join('');
}

window.removePhoto = function(i) {
  uploadedPhotos.splice(i, 1);
  renderPreviews();
};

// Form Submission & Validation
document.getElementById('sell-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const brand = document.getElementById('sell-brand');
  const model = document.getElementById('sell-model');
  const size = document.getElementById('sell-size');
  const price = document.getElementById('sell-price');

  if (!brand.value) { brand.parentElement.classList.add('error'); valid = false; }
  else { brand.parentElement.classList.remove('error'); }

  if (!model.value.trim()) { model.parentElement.classList.add('error'); valid = false; }
  else { model.parentElement.classList.remove('error'); }

  if (!size.value) { size.parentElement.classList.add('error'); valid = false; }
  else { size.parentElement.classList.remove('error'); }

  if (!price.value || parseFloat(price.value) < 50) { price.parentElement.classList.add('error'); valid = false; }
  else { price.parentElement.classList.remove('error'); }

  if (uploadedPhotos.length === 0) {
    photoError.style.display = 'block';
    valid = false;
  }

  if (valid) {
    const randomRef = #CSG-${Math.floor(100000 + Math.random() * 900000)};
    document.getElementById('confirmed-ref-code').textContent = randomRef;
    this.style.display = 'none';
    document.getElementById('sell-confirmation-view').style.display = 'block';
    STRIDE_APP.showToast(Sneaker consignment ${randomRef} queued!, 'success');
  }
});