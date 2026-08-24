import { initNav, initScrollAnimations } from './shared.js';

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.form-submit');
  const successEl = document.getElementById('form-success');

  function showError(fieldId, msg) {
    const errEl = document.getElementById(fieldId + '-error');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('show'); }
    const input = document.getElementById(fieldId);
    if (input) input.style.borderColor = '#dc2626';
  }

  function clearErrors() {
    form.querySelectorAll('.form-error').forEach(el => {
      el.classList.remove('show'); el.textContent = '';
    });
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(el => {
      el.style.borderColor = '';
    });
  }

  function validate() {
    clearErrors();
    let valid = true;
    const naam = document.getElementById('naam');
    const bedrijf = document.getElementById('bedrijf');
    const email = document.getElementById('email');
    const bericht = document.getElementById('bericht');

    if (!naam || !naam.value.trim()) { showError('naam', 'Vul je naam in.'); valid = false; }
    if (!bedrijf || !bedrijf.value.trim()) { showError('bedrijf', 'Vul je bedrijfsnaam in.'); valid = false; }
    if (!email || !email.value.trim()) {
      showError('email', 'Vul je e-mailadres in.'); valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError('email', 'Vul een geldig e-mailadres in.'); valid = false;
    }
    if (!bericht || !bericht.value.trim()) { showError('bericht', 'Vul je bericht in.'); valid = false; }
    return valid;
  }

  // Clear error on input
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      const errEl = document.getElementById(el.id + '-error');
      if (errEl) { errEl.classList.remove('show'); }
      el.style.borderColor = '';
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Versturen...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        if (successEl) successEl.classList.add('show');
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Verstuur bericht →';
        alert('Er ging iets mis. Probeer het opnieuw of stuur een e-mail naar info@ontwikkelguru.nl');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Verstuur bericht →';
      alert('Geen verbinding. Controleer je internet en probeer opnieuw.');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initContactForm();
});
