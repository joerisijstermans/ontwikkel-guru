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
  --color-white: #ffffff;
  --color-text-muted: #555566;
  --transition: 0.22s ease;
  --container-max: 1180px;
}
og1-footer { display: block; font-family: 'Inter', sans-serif; }
og1-footer * { box-sizing: border-box; margin: 0; padding: 0; }
og1-footer a { color: inherit; text-decoration: none; }
.og1f-footer { background: #0f1629; padding: 56px 0 32px; }
.og1f-container { max-width: var(--container-max); margin: 0 auto; padding: 0 24px; }
.og1f-inner { display: flex; flex-direction: column; gap: 40px; }
.og1f-top { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; align-items: start; }
.og1f-brand-name { font-size: 1rem; font-weight: 800; color: var(--color-white); letter-spacing: -0.01em; display: block; margin-bottom: 8px; }
.og1f-tagline { color: rgba(255,255,255,0.5); font-size: 0.875rem; line-height: 1.6; }
.og1f-col-title { color: rgba(255,255,255,0.4); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 14px; display: block; }
.og1f-links { display: flex; flex-direction: column; gap: 10px; }
.og1f-links a { color: rgba(255,255,255,0.6); font-size: 0.9rem; transition: var(--transition); }
.og1f-links a:hover { color: var(--color-white); }
.og1f-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
.og1f-copy { color: rgba(255,255,255,0.35); font-size: 0.8rem; }
@media (max-width: 1024px) {
  .og1f-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .og1f-top { grid-template-columns: 1fr; gap: 24px; }
  .og1f-bottom { flex-direction: column; align-items: flex-start; gap: 4px; }
}
@media (max-width: 480px) {
  .og1f-container { padding: 0 16px; }
}
`;

  if (!document.getElementById('og1-footer-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-footer-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1Footer extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <footer class="og1f-footer">
          <div class="og1f-container">
            <div class="og1f-inner">
              <div class="og1f-top">
                <div>
                  <span class="og1f-brand-name">Ontwikkel Guru</span>
                  <p class="og1f-tagline">AI die werkt voor mensen &mdash;<br>Praktisch, concreet en toepasbaar voor het MKB.</p>
                </div>
                <div>
                  <span class="og1f-col-title">Navigatie</span>
                  <div class="og1f-links">
                    <a href="https://www.ontwikkel.guru/home">Home</a>
                    <a href="https://www.ontwikkel.guru/portfolio">Portfolio</a>
                    <a href="https://www.ontwikkel.guru/aanbod">Aanbod</a>
                    <a href="https://www.ontwikkel.guru/over-ons">Over ons</a>
                    <a href="https://www.ontwikkel.guru/contact">Contact</a>
                  </div>
                </div>
                <div>
                  <span class="og1f-col-title">Contact</span>
                  <div class="og1f-links">
                    <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>
                    <a href="https://businessbaas.com" target="_blank" rel="noopener">BusinessBaas</a>
                  </div>
                </div>
              </div>
              <div class="og1f-bottom">
                <span class="og1f-copy">&copy; 2026 Ontwikkel Guru. Alle rechten voorbehouden.</span>
                <div style="display:flex;gap:16px;flex-wrap:wrap;">
                  <a href="https://www.ontwikkel.guru/privacybeleid" class="og1f-copy" style="text-decoration:none;">Privacybeleid</a>
                  <a href="https://www.ontwikkel.guru/algemene-voorwaarden" class="og1f-copy" style="text-decoration:none;">Algemene Voorwaarden</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      `;
    }
  }

  if (!customElements.get('og1-footer')) {
    customElements.define('og1-footer', Og1Footer);
  }
})();
