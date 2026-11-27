// Password visibility toggle
const toggleBtn = document.getElementById('toggle-password');
const pwdInput = document.getElementById('login-password');
toggleBtn.addEventListener('click', () => {
  const isPassword = pwdInput.type === 'password';
  pwdInput.type = isPassword ? 'text' : 'password';
  toggleBtn.style.color = isPassword ? '#FF5A1F' : '#626775';
});

// Demo Fill Shortcut
document.getElementById('demo-fill-btn').addEventListener('click', () => {
  document.getElementById('login-email').value = 'collector@stride.com';
  document.getElementById('login-password').value = 'stride2026';
  STRIDE_APP.showToast('Demo collector credentials populated!', 'info');
});

// Form Validation & Demonstration Login
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;
  const email = document.getElementById('login-email');
  const pwd = document.getElementById('login-password');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    email.parentElement.classList.add('error');
    valid = false;
  } else {
    email.parentElement.classList.remove('error');
  }

  if (pwd.value.length < 6) {
    pwd.closest('.form-group').classList.add('error');
    valid = false;
  } else {
    pwd.closest('.form-group').classList.remove('error');
  }

  if (valid) {
    localStorage.setItem('stride_user', JSON.stringify({
      name: 'Alex Vance',
      email: email.value.trim(),
      role: 'Verified VIP Collector'
    }));
    STRIDE_APP.showToast('Welcome back, Alex Vance! Vault unlocked.', 'success');
    setTimeout(() => {
      window.location.href = 'orders.html';
    }, 1200);
  }
});