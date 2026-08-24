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
  --color-text: #1a1a2e;
  --color-text-muted: #555566;
  --color-border: #e8e5e0;
  --radius-card: 14px;
  --radius-btn: 8px;
  --shadow-card: 0 4px 24px rgba(24,33,69,0.10);
  --shadow-hover: 0 8px 40px rgba(24,33,69,0.18);
  --transition: 0.22s ease;
  --container-max: 1180px;
  --section-pad: 88px;
}
og1-home, og1-portfolio, og1-aanbod, og1-over-ons, og1-contact, og1-coming-soon { display: block; font-family: 'Inter', sans-serif; }
og1-home *, og1-portfolio *, og1-aanbod *, og1-over-ons *, og1-contact *, og1-coming-soon * { box-sizing: border-box; margin: 0; padding: 0; }
og1-home a, og1-portfolio a, og1-aanbod a, og1-over-ons a, og1-contact a { color: inherit; text-decoration: none; }
og1-home ul, og1-portfolio ul, og1-aanbod ul, og1-over-ons ul, og1-contact ul { list-style: none; }
og1-home button, og1-portfolio button, og1-aanbod button, og1-over-ons button, og1-contact button { cursor: pointer; font-family: inherit; border: none; background: none; }
.og1-container { max-width: var(--container-max); margin: 0 auto; padding: 0 24px; }
.og1-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: var(--radius-btn);
  font-size: 1rem; font-weight: 700; transition: var(--transition);
  cursor: pointer; text-decoration: none; border: 2px solid transparent;
  white-space: nowrap; font-family: 'Inter', sans-serif;
}
.og1-btn-primary { background: var(--color-indigo); color: var(--color-white); border-color: var(--color-indigo); }
.og1-btn-primary:hover { background: #4a3de0; border-color: #4a3de0; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(92,79,246,0.35); }
.og1-hero-simple { background: var(--color-navy); min-height: 280px; display: flex; align-items: center; padding: 48px 0 64px; }
.og1-hero-simple h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; color: white; }
.og1-hero-simple p { color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-top: 14px; }
.og1-contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: start; }
.og1-contact-form-card { background: var(--color-white); border: 1px solid var(--color-border); border-radius: 16px; padding: 40px; box-shadow: var(--shadow-card); }
.og1-contact-form-card h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 28px; color: var(--color-navy); }
.og1-form-group { margin-bottom: 18px; }
.og1-form-label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--color-text); margin-bottom: 6px; }
.og1-form-input, .og1-form-select, .og1-form-textarea {
  width: 100%; padding: 12px 16px; font-size: 0.95rem; font-family: 'Inter', sans-serif;
  border: 1.5px solid var(--color-border); border-radius: 8px;
  background: var(--color-warm-white); color: var(--color-text);
  transition: var(--transition); outline: none; appearance: none;
}
.og1-form-input:focus, .og1-form-select:focus, .og1-form-textarea:focus {
  border-color: var(--color-indigo); background: var(--color-white);
  box-shadow: 0 0 0 3px rgba(92,79,246,0.12);
}
.og1-form-textarea { resize: vertical; min-height: 120px; }
.og1-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.og1-form-submit { width: 100%; margin-top: 8px; justify-content: center; font-size: 1rem; padding: 14px 28px; }
.og1-form-note { font-size: 0.78rem; color: var(--color-text-muted); text-align: center; margin-top: 10px; }
.og1-form-success { display: none; text-align: center; padding: 40px 20px; }
.og1-form-success.show { display: block; }
.og1-form-success-icon { font-size: 3rem; margin-bottom: 16px; }
.og1-form-success h3 { color: var(--color-navy); margin-bottom: 8px; font-size: 1.2rem; font-weight: 700; }
.og1-form-success p { color: var(--color-text-muted); font-size: 0.95rem; }
.og1-contact-info-card { background: var(--color-navy); border-radius: 16px; padding: 36px; color: var(--color-white); position: sticky; top: 24px; }
.og1-contact-info-card h3 { color: var(--color-white); margin-bottom: 8px; font-size: 1.3rem; font-weight: 700; }
.og1-contact-info-card > p { color: rgba(255,255,255,0.65); font-size: 0.9rem; margin-bottom: 24px; line-height: 1.65; }
.og1-contact-detail { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
.og1-contact-detail-icon { width: 38px; height: 38px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.og1-contact-detail-text { font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.og1-contact-detail-text a { color: rgba(255,255,255,0.9); text-decoration: underline; text-underline-offset: 3px; }
.og1-expect-list { margin-top: 28px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 24px; }
.og1-expect-list h4 { color: rgba(255,255,255,0.5); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px; font-weight: 700; }
.og1-expect-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.88rem; color: rgba(255,255,255,0.8); }
.og1-expect-check { color: #4ade80; flex-shrink: 0; font-weight: 700; }
.og1-footer { background: #0f1629; padding: 56px 0 32px; }
.og1-footer-inner { display: flex; flex-direction: column; gap: 40px; }
.og1-footer-top { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; align-items: start; }
.og1-footer-tagline { color: rgba(255,255,255,0.5); font-size: 0.875rem; line-height: 1.6; margin-top: 8px; }
.og1-footer-col-title { color: rgba(255,255,255,0.4); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 14px; }
.og1-footer-links { display: flex; flex-direction: column; gap: 10px; }
.og1-footer-links a { color: rgba(255,255,255,0.6); font-size: 0.9rem; transition: var(--transition); }
.og1-footer-links a:hover { color: var(--color-white); }
.og1-footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
.og1-footer-copyright { color: rgba(255,255,255,0.35); font-size: 0.8rem; }
.og1-fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1-fade-in.visible { opacity: 1; transform: none; }
@media (max-width: 1024px) {
  .og1-contact-grid { grid-template-columns: 1fr; }
  .og1-contact-info-card { position: static; }
  .og1-footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 56px; }
  .og1-form-row { grid-template-columns: 1fr; }
  .og1-footer-top { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 480px) {
  .og1-container { padding: 0 16px; }
  .og1-contact-form-card { padding: 24px 20px; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1Contact extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- HERO -->
        <div class="og1-hero-simple">
          <div class="og1-container">
            <h1>Plan een gratis intakegesprek</h1>
            <p>Vertel ons over je uitdaging en wij nemen binnen 24 uur contact op.</p>
          </div>
        </div>

        <!-- CONTACT SECTION -->
        <section style="background: var(--color-warm-white); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <div class="og1-contact-grid">
              <!-- FORM -->
              <div class="og1-contact-form-card og1-fade-in">
                <h2>Stuur ons een bericht</h2>
                <div id="og1c-form-wrap">
                  <form id="og1c-form" novalidate>
                    <input type="hidden" name="access_key" value="e725eb57-1af1-45a5-87a9-ff25ad540eb0">
                    <input type="hidden" name="subject" value="Nieuwe aanvraag via Ontwikkel Guru website">
                    <input type="hidden" name="redirect" value="false">
                    <input type="hidden" name="to" value="info@ontwikkel.guru">
                    <div class="og1-form-row">
                      <div class="og1-form-group">
                        <label class="og1-form-label" for="og1c-naam">Naam *</label>
                        <input class="og1-form-input" type="text" id="og1c-naam" name="naam" required placeholder="Jouw naam">
                      </div>
                      <div class="og1-form-group">
                        <label class="og1-form-label" for="og1c-bedrijf">Bedrijfsnaam *</label>
                        <input class="og1-form-input" type="text" id="og1c-bedrijf" name="bedrijfsnaam" required placeholder="Naam van je bedrijf">
                      </div>
                    </div>
                    <div class="og1-form-row">
                      <div class="og1-form-group">
                        <label class="og1-form-label" for="og1c-email">E-mailadres *</label>
                        <input class="og1-form-input" type="email" id="og1c-email" name="email" required placeholder="jouw@email.nl">
                      </div>
                      <div class="og1-form-group">
                        <label class="og1-form-label" for="og1c-tel">Telefoonnummer</label>
                        <input class="og1-form-input" type="tel" id="og1c-tel" name="telefoonnummer" placeholder="Optioneel">
                      </div>
                    </div>
                    <div class="og1-form-group">
                      <label class="og1-form-label" for="og1c-dienst">Ik ben ge&iuml;nteresseerd in</label>
                      <select class="og1-form-select" id="og1c-dienst" name="dienst">
                        <option value="">— Selecteer een dienst —</option>
                        <option value="workshops">AI Workshops</option>
                        <option value="automatisering">AI Automatisering</option>
                        <option value="avatar">AI Avatar &amp; Personalisatie</option>
                        <option value="campagnevideo">AI Campagnevideo</option>
                        <option value="strategie">AI Strategie &amp; Advies</option>
                        <option value="onzeker">Weet ik nog niet</option>
                      </select>
                    </div>
                    <div class="og1-form-group">
                      <label class="og1-form-label" for="og1c-uitdaging">Jouw uitdaging *</label>
                      <textarea class="og1-form-textarea" id="og1c-uitdaging" name="uitdaging" required placeholder="Vertel ons kort over je uitdaging of vraag. Hoe meer context, hoe beter wij je kunnen helpen."></textarea>
                    </div>
                    <button type="submit" class="og1-btn og1-btn-primary og1-form-submit" id="og1c-submit">
                      <span id="og1c-btn-text">Verstuur bericht &rarr;</span>
                    </button>
                    <p class="og1-form-note">We reageren altijd binnen 1 werkdag. Intake is altijd gratis.</p>
                  </form>
                </div>
                <div class="og1-form-success" id="og1c-success">
                  <div class="og1-form-success-icon">&#10003;</div>
                  <h3>Bericht ontvangen!</h3>
                  <p>Bedankt voor je bericht. We nemen binnen 1 werkdag contact met je op.</p>
                </div>
              </div>

              <!-- INFO CARD -->
              <div class="og1-contact-info-card og1-fade-in">
                <h3>Liever direct contact?</h3>
                <p>Stuur ons een e-mail en we plannen samen een kort kennismakingsgesprek in.</p>
                <div class="og1-contact-detail">
                  <div class="og1-contact-detail-icon">&#9993;</div>
                  <div class="og1-contact-detail-text">
                    <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>
                  </div>
                </div>
                <div class="og1-contact-detail">
                  <div class="og1-contact-detail-icon">&#127758;</div>
                  <div class="og1-contact-detail-text">Nederland — remote &amp; op locatie</div>
                </div>
                <div class="og1-expect-list">
                  <h4>Wat kun je verwachten</h4>
                  <div class="og1-expect-item">
                    <span class="og1-expect-check">&#10003;</span>
                    <span>Reactie binnen 1 werkdag</span>
                  </div>
                  <div class="og1-expect-item">
                    <span class="og1-expect-check">&#10003;</span>
                    <span>Vrijblijvend kennismakingsgesprek (30 min)</span>
                  </div>
                  <div class="og1-expect-item">
                    <span class="og1-expect-check">&#10003;</span>
                    <span>Voorstel op maat — geen standaard pakket</span>
                  </div>
                  <div class="og1-expect-item">
                    <span class="og1-expect-check">&#10003;</span>
                    <span>Geen verplichtingen, nooit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- FOOTER -->
        <footer class="og1-footer">
          <div class="og1-container">
            <div class="og1-footer-inner">
              <div class="og1-footer-top">
                <div>
                  <span style="font-size:1rem;font-weight:800;color:white;letter-spacing:-0.01em;">Ontwikkel Guru</span>
                  <p class="og1-footer-tagline">AI die werkt voor mensen.</p>
                </div>
                <div>
                  <p class="og1-footer-col-title">Navigatie</p>
                  <div class="og1-footer-links">
                    <a href="#">Home</a><a href="#">Portfolio</a><a href="#">Aanbod</a><a href="#">Over ons</a><a href="#">Contact</a>
                  </div>
                </div>
                <div>
                  <p class="og1-footer-col-title">Contact</p>
                  <div class="og1-footer-links">
                    <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>
                    <a href="https://businessbaas.com" target="_blank" rel="noopener">BusinessBaas</a>
                  </div>
                </div>
              </div>
              <div class="og1-footer-bottom">
                <span class="og1-footer-copyright">&copy; 2026 Ontwikkel Guru. Alle rechten voorbehouden.</span>
                <span class="og1-footer-copyright">Onderdeel van BusinessBaas</span>
              </div>
            </div>
          </div>
        </footer>
      `;
      this._setup();
    }

    _setup() {
      // Form submission
      const form = this.querySelector('#og1c-form');
      const submitBtn = this.querySelector('#og1c-submit');
      const btnText = this.querySelector('#og1c-btn-text');
      const successDiv = this.querySelector('#og1c-success');
      const formWrap = this.querySelector('#og1c-form-wrap');

      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();

          // Basic validation
          const naam = this.querySelector('#og1c-naam');
          const bedrijf = this.querySelector('#og1c-bedrijf');
          const email = this.querySelector('#og1c-email');
          const uitdaging = this.querySelector('#og1c-uitdaging');

          let valid = true;
          [naam, bedrijf, email, uitdaging].forEach(field => {
            if (field && !field.value.trim()) {
              field.style.borderColor = '#dc2626';
              valid = false;
            } else if (field) {
              field.style.borderColor = '';
            }
          });

          if (!valid) return;

          // Loading state
          if (submitBtn) submitBtn.disabled = true;
          if (btnText) btnText.textContent = 'Versturen...';

          try {
            const formData = new FormData(form);
            const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              body: formData
            });
            const data = await response.json();

            if (data.success) {
              if (formWrap) formWrap.style.display = 'none';
              if (successDiv) successDiv.classList.add('show');
            } else {
              throw new Error('Submission failed');
            }
          } catch (err) {
            if (btnText) btnText.textContent = 'Er ging iets mis. Probeer opnieuw.';
            if (submitBtn) submitBtn.disabled = false;
          }
        });

        // Clear red border on input
        form.querySelectorAll('input, textarea').forEach(field => {
          field.addEventListener('input', () => {
            field.style.borderColor = '';
          });
        });
      }

      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1-fade-in').forEach(el => observer.observe(el));
    }
  }

  if (!customElements.get('og1-contact')) {
    customElements.define('og1-contact', Og1Contact);
  }
})();
