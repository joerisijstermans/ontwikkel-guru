(function() {
  if (!document.getElementById('og1-fonts')) {
    const l = document.createElement('link');
    l.id = 'og1-fonts';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    document.head.appendChild(l);
  }

  const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
:root {
  --color-navy: #182145;
  --color-indigo: #5C4FF6;
  --color-sand: #DDD1C4;
  --color-warm-white: #F8F7F3;
  --color-white: #ffffff;
}
og1-coming-soon { display: block; font-family: 'Inter', sans-serif; }
og1-coming-soon * { box-sizing: border-box; margin: 0; padding: 0; }
og1-coming-soon a { color: inherit; text-decoration: none; }
og1-coming-soon button { cursor: pointer; font-family: inherit; border: none; background: none; }
.og1cs-wrap {
  min-height: 100vh;
  background: var(--color-navy);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}
.og1cs-orb1 {
  position: absolute;
  top: -200px; left: -200px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(92,79,246,0.25) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.og1cs-orb2 {
  position: absolute;
  bottom: -150px; right: -150px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(92,79,246,0.18) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.og1cs-orb3 {
  position: absolute;
  top: 40%; left: 60%;
  width: 300px; height: 300px;
  background: radial-gradient(circle, rgba(221,209,196,0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}
.og1cs-inner {
  position: relative;
  z-index: 1;
  max-width: 640px;
  width: 100%;
  text-align: center;
}
.og1cs-logo {
  margin-bottom: 32px;
}
.og1cs-badge {
  display: inline-block;
  background: rgba(92,79,246,0.2);
  border: 1px solid rgba(92,79,246,0.4);
  color: rgba(255,255,255,0.9);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 6px 14px;
  border-radius: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.og1cs-h1 {
  font-size: clamp(2.4rem, 6vw, 4rem);
  font-weight: 900;
  color: white;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}
.og1cs-lead {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}
.og1cs-form {
  display: flex;
  gap: 10px;
  max-width: 420px;
  margin: 0 auto 20px;
  flex-wrap: wrap;
}
.og1cs-input {
  flex: 1;
  min-width: 200px;
  padding: 13px 18px;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  color: white;
  outline: none;
  transition: border-color 0.2s;
}
.og1cs-input::placeholder { color: rgba(255,255,255,0.4); }
.og1cs-input:focus { border-color: rgba(92,79,246,0.8); background: rgba(255,255,255,0.12); }
.og1cs-submit {
  padding: 13px 22px;
  background: var(--color-indigo);
  color: white;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-family: 'Inter', sans-serif;
  white-space: nowrap;
}
.og1cs-submit:hover { background: #4a3de0; transform: translateY(-1px); }
.og1cs-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
.og1cs-form-note { font-size: 0.78rem; color: rgba(255,255,255,0.4); margin-bottom: 40px; }
.og1cs-success { display: none; background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.3); border-radius: 10px; padding: 14px 20px; color: #4ade80; font-size: 0.9rem; font-weight: 600; margin-bottom: 40px; max-width: 420px; margin-left: auto; margin-right: auto; }
.og1cs-success.show { display: block; }
.og1cs-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 40px;
}
.og1cs-pill {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: rgba(255,255,255,0.7);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
}
.og1cs-contact {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.45);
}
.og1cs-contact a {
  color: rgba(255,255,255,0.7);
  text-decoration: underline;
  text-underline-offset: 3px;
}
@media (max-width: 480px) {
  .og1cs-form { flex-direction: column; }
  .og1cs-input, .og1cs-submit { width: 100%; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1ComingSoon extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <div class="og1cs-wrap">
          <div class="og1cs-orb1"></div>
          <div class="og1cs-orb2"></div>
          <div class="og1cs-orb3"></div>

          <div class="og1cs-inner">
            <div class="og1cs-logo">
              <span style="font-size:1.1rem;font-weight:800;color:white;letter-spacing:-0.01em;">Ontwikkel Guru</span>
            </div>

            <div class="og1cs-badge">&#8987; Binnenkort live</div>

            <h1 class="og1cs-h1">AI die werkt<br>voor mensen</h1>

            <p class="og1cs-lead">
              Wij helpen MKB-bedrijven om AI concreet en toepasbaar te maken — met workshops, slimme automatisering, AI-avatars en cinematic videocontent.
            </p>

            <form id="og1cs-form" class="og1cs-form" novalidate>
              <input type="email" class="og1cs-input" id="og1cs-email" placeholder="jouw@email.nl" required>
              <button type="submit" class="og1cs-submit" id="og1cs-btn">Houd me op de hoogte</button>
            </form>
            <div class="og1cs-success" id="og1cs-success">
              &#10003; Je bent aangemeld! We laten het weten zodra we live gaan.
            </div>
            <p class="og1cs-form-note">Geen spam. Alleen een seintje als we live gaan.</p>

            <div class="og1cs-pills">
              <span class="og1cs-pill">&#127891; AI Workshops</span>
              <span class="og1cs-pill">&#9889; AI Automatisering</span>
              <span class="og1cs-pill">&#127917; AI Avatar & Personalisatie</span>
              <span class="og1cs-pill">&#127909; AI Campagnevideo</span>
              <span class="og1cs-pill">&#9889; AI Strategie & Advies</span>
            </div>

            <p class="og1cs-contact">
              Al een vraag? Mail naar <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>
            </p>
          </div>
        </div>
      `;
      this._setup();
    }

    _setup() {
      const form = this.querySelector('#og1cs-form');
      const btn = this.querySelector('#og1cs-btn');
      const successDiv = this.querySelector('#og1cs-success');
      const emailInput = this.querySelector('#og1cs-email');

      if (!form) return;

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = emailInput ? emailInput.value.trim() : '';
        if (!email || !email.includes('@')) {
          if (emailInput) emailInput.style.borderColor = '#dc2626';
          return;
        }

        if (btn) btn.disabled = true;
        if (btn) btn.textContent = 'Bezig...';

        const formData = new FormData();
        formData.append('access_key', 'e725eb57-1af1-45a5-87a9-ff25ad540eb0');
        formData.append('subject', 'Nieuwe aanmelding Coming Soon — Ontwikkel Guru');
        formData.append('email_aanmelding', email);
        formData.append('redirect', 'false');

        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
          });
          const data = await res.json();
          if (data.success) {
            if (form) form.style.display = 'none';
            if (successDiv) successDiv.classList.add('show');
          } else {
            throw new Error('Failed');
          }
        } catch (err) {
          if (btn) btn.disabled = false;
          if (btn) btn.textContent = 'Probeer opnieuw';
        }
      });

      if (emailInput) {
        emailInput.addEventListener('input', () => {
          emailInput.style.borderColor = '';
        });
      }
    }
  }

  if (!customElements.get('og1-coming-soon')) {
    customElements.define('og1-coming-soon', Og1ComingSoon);
  }
})();
