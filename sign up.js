const pwdInput = document.getElementById('signup-password');
const strengthBar = document.getElementById('strength-bar');

// Dynamic Password Strength Meter
pwdInput.addEventListener('input', () => {
  const val = pwdInput.value;
  let score = 0;
  if (val.length >= 8) score += 33;
  if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score += 34;
  if (/[^A-Za-z0-9]/.test(val)) score += 33;

  strengthBar.style.width = `${score}%`;
  if (score < 40) strengthBar.style.backgroundColor = '#EF4444';
  else if (score < 70) strengthBar.style.backgroundColor = '#F59E0B';
  else strengthBar.style.backgroundColor = '#10B981';
});

// Form Validation & Registration
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById('signup-name');
  const email = document.getElementById('signup-email');
  const pwd = document.getElementById('signup-password');
  const confirmPwd = document.getElementById('signup-confirm-password');
  const terms = document.getElementById('terms-agree');
  const confirmError = document.getElementById('confirm-error-msg');
  const termsError = document.getElementById('terms-error-msg');

  if (!name.value.trim()) { name.parentElement.classList.add('error'); valid = false; }
  else { name.parentElement.classList.remove('error'); }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) { email.parentElement.classList.add('error'); valid = false; }
  else { email.parentElement.classList.remove('error'); }

  if (pwd.value.length < 8) { pwd.closest('.form-group').classList.add('error'); valid = false; }
  else { pwd.closest('.form-group').classList.remove('error'); }

  if (pwd.value !== confirmPwd.value) {
    confirmError.style.display = 'block';
    confirmPwd.style.borderColor = '#EF4444';
    valid = false;
  } else {
    confirmError.style.display = 'none';
    confirmPwd.style.borderColor = '';
  }

  if (!terms.checked) {
    termsError.style.display = 'block';
    valid = false;
  } else {
    termsError.style.display = 'none';
  }

  if (valid) {
    localStorage.setItem('stride_user', JSON.stringify({
      name: name.value.trim(),
      email: email.value.trim(),
      role: 'Member'
    }));
    this.style.display = 'none';
    document.getElementById('signup-success-view').style.display = 'block';
    STRIDE_APP.showToast('Account successfully created! Welcome.', 'success');
  }
});