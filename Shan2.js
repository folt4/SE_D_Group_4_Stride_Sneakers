// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;

  const name = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');
  const msg = document.getElementById('contact-message');

  // Validate Name
  if (!name.value.trim()) {
    name.parentElement.classList.add('error');
    isValid = false;
  } else {
    name.parentElement.classList.remove('error');
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.parentElement.classList.add('error');
    isValid = false;
  } else {
    email.parentElement.classList.remove('error');
  }

  // Validate Message
  if (msg.value.trim().length < 15) {
    msg.parentElement.classList.add('error');
    isValid = false;
  } else {
    msg.parentElement.classList.remove('error');
  }

  if (isValid) {
    this.style.display = 'none';
    document.getElementById('contact-success').style.display = 'block';
    STRIDE_APP.showToast('VIP Dispatch received. Specialist assigned!', 'success');
  }
});