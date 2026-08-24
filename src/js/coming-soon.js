const form = document.getElementById('notify-form');
const success = document.getElementById('notify-success');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = 'Versturen...';
    btn.disabled = true;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        form.style.display = 'none';
        if (success) success.classList.add('show');
      } else {
        btn.textContent = 'Probeer opnieuw';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Probeer opnieuw';
      btn.disabled = false;
    }
  });
}
