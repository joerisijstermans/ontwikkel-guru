(function() {
  if (!document.getElementById('og1-fonts')) {
    const l = document.createElement('link');
    l.id = 'og1-fonts';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    document.head.appendChild(l);
  }

  const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
:root {
  --navy:         #182145;
  --navy-deep:    #0d1630;
  --indigo:       #5C4FF6;
  --indigo-light: #7c72f8;
  --sand:         #DDD1C4;
  --sand-light:   #eceae1;
  --warm-white:   #F8F7F3;
  --white:        #ffffff;
  --text-dark:    #0d1526;
  --text-mid:     #4a5568;
  --radius-sm:    8px;
  --radius-md:    16px;
  --radius-lg:    24px;
  --radius-xl:    40px;
  --shadow-card:  0 4px 24px rgba(13,22,48,0.08);
  --shadow-hover: 0 12px 48px rgba(13,22,48,0.16);
  --transition:   0.25s cubic-bezier(0.4,0,0.2,1);
  --container-max:1200px;
  --section-pad:  100px;
}
og1-contact { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-contact * { box-sizing: border-box; margin: 0; padding: 0; }
og1-contact img { max-width: 100%; display: block; }
og1-contact a { text-decoration: none; color: inherit; }
og1-contact ul { list-style: none; }
og1-contact button { cursor: pointer; font-family: inherit; border: none; background: none; }

.og1-container  { max-width: var(--container-max); margin: 0 auto; padding: 0 2rem; }
.og1-section    { padding: var(--section-pad) 0; }

/* Typography */
.og1-display-xl { font-size: clamp(3rem,6vw,5.5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; }
.og1-display-md { font-size: clamp(1.6rem,3vw,2.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
.og1-eyebrow    { display: block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--indigo); margin-bottom: 1rem; }

/* Buttons — pill shape */
.og1-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 14px 28px; border-radius: var(--radius-xl);
  font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 600;
  cursor: pointer; border: 2px solid transparent; transition: var(--transition);
  white-space: nowrap; text-decoration: none;
}
.og1-btn-lg { padding: 18px 36px; font-size: 1.05rem; }
.og1-btn-primary  { background: var(--indigo); color: var(--white); border-color: var(--indigo); }
.og1-btn-primary:hover  { background: var(--indigo-light); border-color: var(--indigo-light); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(92,79,246,0.35); }
.og1-btn-outline  { background: transparent; color: var(--white); border-color: rgba(255,255,255,0.4); }
.og1-btn-outline:hover  { border-color: var(--white); background: rgba(255,255,255,0.08); transform: translateY(-2px); }
.og1-btn svg { width: 18px; height: 18px; flex-shrink: 0; }

/* ════════════ HERO ════════════ */
.og1c-hero {
  background: var(--navy);
  padding: 80px 0 64px;
  position: relative; overflow: hidden;
}
.og1c-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.og1c-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.og1c-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -100px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.2;
}
.og1c-hero-inner { position: relative; z-index: 1; }
.og1c-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1c-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1c-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1c-hero-h1 { color: var(--white); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1rem; }
.og1c-hero-lead { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 520px; line-height: 1.7; }

/* ════════════ CONTACT SECTION ════════════ */
.og1c-section { background: var(--warm-white); }
.og1c-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: start; }

/* Form card */
.og1c-form-card {
  background: var(--white); border: 1px solid rgba(0,0,0,0.06);
  border-radius: var(--radius-lg); padding: 2.5rem;
  box-shadow: var(--shadow-card);
}
.og1c-form-card h2 { font-size: 1.5rem; font-weight: 800; margin-bottom: 1.75rem; color: var(--navy); }
.og1c-form-group { margin-bottom: 1.1rem; }
.og1c-form-label { display: block; font-size: 0.875rem; font-weight: 600; color: var(--text-dark); margin-bottom: 6px; }
.og1c-form-input, .og1c-form-select, .og1c-form-textarea {
  width: 100%; padding: 12px 16px; font-size: 0.95rem; font-family: 'Inter', sans-serif;
  border: 1.5px solid rgba(0,0,0,0.12); border-radius: var(--radius-sm);
  background: var(--warm-white); color: var(--text-dark);
  transition: var(--transition); outline: none; appearance: none;
}
.og1c-form-input:focus, .og1c-form-select:focus, .og1c-form-textarea:focus {
  border-color: var(--indigo); background: var(--white);
  box-shadow: 0 0 0 3px rgba(92,79,246,0.12);
}
.og1c-form-textarea { resize: vertical; min-height: 120px; }
.og1c-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.og1c-form-submit {
  width: 100%; margin-top: 0.5rem; justify-content: center;
  font-size: 1rem; padding: 14px 28px; border-radius: var(--radius-xl);
}
.og1c-form-note { font-size: 0.78rem; color: var(--text-mid); text-align: center; margin-top: 10px; }
.og1c-form-success { display: none; text-align: center; padding: 40px 20px; }
.og1c-form-success.show { display: block; }
.og1c-form-success-icon { font-size: 3rem; margin-bottom: 1rem; color: #4ade80; }
.og1c-form-success h3 { color: var(--navy); margin-bottom: 0.5rem; font-size: 1.2rem; font-weight: 700; }
.og1c-form-success p { color: var(--text-mid); font-size: 0.95rem; }

/* Info card — dark */
.og1c-info-card {
  background: var(--navy); border-radius: var(--radius-lg);
  padding: 2.5rem; color: var(--white);
  position: sticky; top: 24px; overflow: hidden;
}
.og1c-info-card::before {
  content: ''; position: absolute; top: -60px; right: -60px;
  width: 200px; height: 200px; background: var(--indigo);
  border-radius: 50%; filter: blur(60px); opacity: 0.2;
}
.og1c-info-card h3 { color: var(--white); margin-bottom: 0.5rem; font-size: 1.3rem; font-weight: 700; position: relative; z-index: 1; }
.og1c-info-lead { color: rgba(255,255,255,0.65); font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.65; position: relative; z-index: 1; }
.og1c-detail { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; position: relative; z-index: 1; }
.og1c-detail-icon {
  width: 38px; height: 38px; background: rgba(255,255,255,0.1);
  border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;
  font-size: 1rem; flex-shrink: 0;
}
.og1c-detail-text { font-size: 0.9rem; color: rgba(255,255,255,0.8); }
.og1c-detail-text a { color: rgba(255,255,255,0.9); text-decoration: underline; text-underline-offset: 3px; }
.og1c-expect { margin-top: 1.75rem; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 1.5rem; position: relative; z-index: 1; }
.og1c-expect h4 { color: rgba(255,255,255,0.45); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.875rem; font-weight: 700; }
.og1c-expect-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.88rem; color: rgba(255,255,255,0.8); }
.og1c-expect-check { color: #4ade80; flex-shrink: 0; font-weight: 700; }

/* ════════════ REVEAL ════════════ */
.og1c-r { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1c-r.visible { opacity: 1; transform: none; }
.og1c-r-d1 { transition-delay: 0.1s; }
.og1c-r-d2 { transition-delay: 0.2s; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 1024px) {
  .og1c-grid { grid-template-columns: 1fr; }
  .og1c-info-card { position: static; }
}
@media (max-width: 768px) {
  :root { --section-pad: 64px; }
  .og1c-hero { padding: 64px 0 48px; }
  .og1c-form-row { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .og1-container { padding: 0 1rem; }
  .og1c-form-card { padding: 1.5rem 1.25rem; }
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
        <!-- ══ HERO ══ -->
        <section class="og1c-hero">
          <div class="og1c-hero-bg">
            <div class="og1c-hero-grid"></div>
            <div class="og1c-hero-orb"></div>
          </div>
          <div class="og1-container">
            <div class="og1c-hero-inner">
              <div class="og1c-eyebrow-row">
                <div class="og1c-eyebrow-line"></div>
                <span class="og1c-eyebrow-text">Contact</span>
              </div>
              <h1 class="og1c-hero-h1">Plan een gratis intakegesprek</h1>
              <p class="og1c-hero-lead">Vertel ons over je uitdaging en wij nemen binnen 24 uur contact op.</p>
            </div>
          </div>
        </section>

        <!-- ══ CONTACT SECTION ══ -->
        <section class="og1-section og1c-section">
          <div class="og1-container">
            <div class="og1c-grid">
              <!-- FORM -->
              <div class="og1c-form-card og1c-r">
                <h2>Stuur ons een bericht</h2>
                <div id="og1c-form-wrap">
                  <form id="og1c-form" novalidate>
                    <input type="hidden" name="access_key" value="e725eb57-1af1-45a5-87a9-ff25ad540eb0">
                    <input type="hidden" name="subject" value="Nieuwe aanvraag via Ontwikkel Guru website">
                    <input type="hidden" name="redirect" value="false">
                    <input type="hidden" name="to" value="info@ontwikkel.guru">
                    <div class="og1c-form-row">
                      <div class="og1c-form-group">
                        <label class="og1c-form-label" for="og1c-naam">Naam *</label>
                        <input class="og1c-form-input" type="text" id="og1c-naam" name="naam" required placeholder="Jouw naam">
                      </div>
                      <div class="og1c-form-group">
                        <label class="og1c-form-label" for="og1c-bedrijf">Bedrijfsnaam *</label>
                        <input class="og1c-form-input" type="text" id="og1c-bedrijf" name="bedrijfsnaam" required placeholder="Naam van je bedrijf">
                      </div>
                    </div>
                    <div class="og1c-form-row">
                      <div class="og1c-form-group">
                        <label class="og1c-form-label" for="og1c-email">E-mailadres *</label>
                        <input class="og1c-form-input" type="email" id="og1c-email" name="email" required placeholder="jouw@email.nl">
                      </div>
                      <div class="og1c-form-group">
                        <label class="og1c-form-label" for="og1c-tel">Telefoonnummer</label>
                        <input class="og1c-form-input" type="tel" id="og1c-tel" name="telefoonnummer" placeholder="Optioneel">
                      </div>
                    </div>
                    <div class="og1c-form-group">
                      <label class="og1c-form-label" for="og1c-dienst">Ik ben ge&iuml;nteresseerd in</label>
                      <select class="og1c-form-select" id="og1c-dienst" name="dienst">
                        <option value="">— Selecteer een dienst —</option>
                        <option value="workshops">AI Workshops</option>
                        <option value="automatisering">AI Automatisering</option>
                        <option value="avatar">AI Avatar &amp; Personalisatie</option>
                        <option value="campagnevideo">AI Campagnevideo</option>
                        <option value="strategie">AI Strategie &amp; Advies</option>
                        <option value="onzeker">Weet ik nog niet</option>
                      </select>
                    </div>
                    <div class="og1c-form-group">
                      <label class="og1c-form-label" for="og1c-uitdaging">Jouw uitdaging *</label>
                      <textarea class="og1c-form-textarea" id="og1c-uitdaging" name="uitdaging" required placeholder="Vertel ons kort over je uitdaging of vraag. Hoe meer context, hoe beter wij je kunnen helpen."></textarea>
                    </div>
                    <button type="submit" class="og1-btn og1-btn-primary og1c-form-submit" id="og1c-submit">
                      <span id="og1c-btn-text">Verstuur bericht</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                    <p class="og1c-form-note">We reageren altijd binnen 1 werkdag. Intake is altijd gratis.</p>
                  </form>
                </div>
                <div class="og1c-form-success" id="og1c-success">
                  <div class="og1c-form-success-icon">&#10003;</div>
                  <h3>Bericht ontvangen!</h3>
                  <p>Bedankt voor je bericht. We nemen binnen 1 werkdag contact met je op.</p>
                </div>
              </div>

              <!-- INFO CARD -->
              <div class="og1c-info-card og1c-r og1c-r-d1">
                <h3>Liever direct contact?</h3>
                <p class="og1c-info-lead">Stuur ons een e-mail en we plannen samen een kort kennismakingsgesprek in.</p>
                <div class="og1c-detail">
                  <div class="og1c-detail-icon">&#9993;</div>
                  <div class="og1c-detail-text">
                    <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>
                  </div>
                </div>
                <div class="og1c-detail">
                  <div class="og1c-detail-icon">&#127758;</div>
                  <div class="og1c-detail-text">Nederland — remote &amp; op locatie</div>
                </div>
                <div class="og1c-expect">
                  <h4>Wat kun je verwachten</h4>
                  <div class="og1c-expect-item">
                    <span class="og1c-expect-check">&#10003;</span>
                    <span>Reactie binnen 1 werkdag</span>
                  </div>
                  <div class="og1c-expect-item">
                    <span class="og1c-expect-check">&#10003;</span>
                    <span>Vrijblijvend kennismakingsgesprek (30 min)</span>
                  </div>
                  <div class="og1c-expect-item">
                    <span class="og1c-expect-check">&#10003;</span>
                    <span>Voorstel op maat — geen standaard pakket</span>
                  </div>
                  <div class="og1c-expect-item">
                    <span class="og1c-expect-check">&#10003;</span>
                    <span>Geen verplichtingen, nooit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1c-r').forEach(el => io.observe(el));
    }
  }

  if (!customElements.get('og1-contact')) {
    customElements.define('og1-contact', Og1Contact);
  }
})();
