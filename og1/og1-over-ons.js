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
.og1-btn-white { background: var(--color-white); color: var(--color-navy); border-color: var(--color-white); }
.og1-btn-white:hover { background: var(--color-sand); transform: translateY(-1px); }
.og1-hero { position: relative; min-height: 60vh; display: flex; align-items: center; overflow: hidden; }
.og1-hero-video-bg { position: absolute; inset: 0; z-index: 0; }
.og1-hero-video-bg video { width: 100%; height: 100%; object-fit: cover; }
.og1-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(24,33,69,0.85) 0%, rgba(24,33,69,0.70) 100%); }
.og1-hero-content { position: relative; z-index: 1; width: 100%; padding: 60px 0 80px; }
.og1-hero-content h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; color: white; }
.og1-hero-content p { color: rgba(255,255,255,0.75); font-size: 1.1rem; margin-top: 14px; max-width: 560px; line-height: 1.65; }
.og1-about-split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.og1-about-avatar { background: var(--color-navy); border-radius: 20px; padding: 48px 32px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; }
.og1-avatar-initials { width: 96px; height: 96px; background: var(--color-indigo); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; color: var(--color-white); }
.og1-avatar-name { font-size: 1.1rem; font-weight: 700; color: var(--color-white); }
.og1-avatar-role { font-size: 0.875rem; color: rgba(255,255,255,0.6); }
.og1-about-trust-badge { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 0.8rem; font-weight: 600; padding: 6px 14px; border-radius: 20px; display: inline-block; margin: 3px; }
.og1-bb-card { background: var(--color-white); border-radius: var(--radius-card); padding: 40px; box-shadow: var(--shadow-card); display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
.og1-partnership-card { background: var(--color-white); border-radius: var(--radius-card); padding: 36px; box-shadow: var(--shadow-card); display: flex; gap: 28px; align-items: flex-start; }
.og1-partnership-icon { font-size: 2.5rem; flex-shrink: 0; }
.og1-values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.og1-value-card { background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 28px 24px; box-shadow: var(--shadow-card); }
.og1-value-icon { font-size: 2rem; margin-bottom: 14px; }
.og1-value-card h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
.og1-value-card p { font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.65; }
.og1-cta-section { background: var(--color-navy); padding: var(--section-pad) 0; text-align: center; }
.og1-cta-section h2 { color: var(--color-white); margin-bottom: 16px; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; }
.og1-cta-section p { color: rgba(255,255,255,0.75); font-size: 1.1rem; max-width: 540px; margin: 0 auto 36px; line-height: 1.75; }
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
.og1-fade-in-delay-1 { transition-delay: 0.1s; }
.og1-fade-in-delay-2 { transition-delay: 0.2s; }
@media (max-width: 1024px) {
  .og1-bb-card { grid-template-columns: 1fr; }
  .og1-values-grid { grid-template-columns: 1fr 1fr; }
  .og1-footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 56px; }
  .og1-about-split { grid-template-columns: 1fr; gap: 32px; }
  .og1-values-grid { grid-template-columns: 1fr; }
  .og1-partnership-card { flex-direction: column; }
  .og1-footer-top { grid-template-columns: 1fr; gap: 24px; }
}
@media (max-width: 480px) {
  .og1-container { padding: 0 16px; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1OverOns extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- HERO WITH VIDEO -->
        <section class="og1-hero">
          <div class="og1-hero-video-bg">
            <video autoplay muted loop playsinline>
              <source src="https://video.wixstatic.com/video/6c17f4_99a1d8b971bb43bfad8b471f85ad2a85/1080p/mp4/file.mp4" type="video/mp4">
            </video>
          </div>
          <div class="og1-hero-overlay"></div>
          <div class="og1-hero-content">
            <div class="og1-container">
              <h1>Over Ontwikkel Guru</h1>
              <p>Wij helpen MKB-bedrijven om AI concreet en toepasbaar te maken — met workshops, automatisering, video en strategie.</p>
            </div>
          </div>
        </section>

        <!-- ABOUT JOERI -->
        <section style="background: var(--color-warm-white); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <div class="og1-about-split">
              <div class="og1-fade-in">
                <span style="display:inline-block;font-size:0.75rem;font-weight:700;color:var(--color-indigo);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;background:rgba(92,79,246,0.1);padding:4px 10px;border-radius:20px;">Oprichter</span>
                <h2 style="font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;letter-spacing:-0.025em;margin-bottom:16px;">Hoi, ik ben Joeri Schilders</h2>
                <p style="color:var(--color-text-muted);line-height:1.75;margin-bottom:12px;">Ik ben trainer, oprichter en AI-enthousiasteling. Met een achtergrond in training en organisatieontwikkeling help ik bedrijven om AI niet als bedreiging, maar als kans te zien.</p>
                <p style="color:var(--color-text-muted);line-height:1.75;margin-bottom:12px;">Ontwikkel Guru is mijn praktijk voor concrete AI-inzet bij MKB-bedrijven in Nederland. Geen vage beloftes, geen ingewikkeld jargon — gewoon aan de slag met wat werkt.</p>
                <p style="color:var(--color-text-muted);line-height:1.75;">Naast Ontwikkel Guru ben ik ook actief via BusinessBaas — een platform voor ondernemers die serieus willen groeien met AI als partner.</p>
                <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:24px;">
                  <span style="background:rgba(24,33,69,0.08);color:var(--color-navy);font-size:0.8rem;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid rgba(24,33,69,0.15);">Trainer & Coach</span>
                  <span style="background:rgba(24,33,69,0.08);color:var(--color-navy);font-size:0.8rem;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid rgba(24,33,69,0.15);">AI Specialist</span>
                  <span style="background:rgba(24,33,69,0.08);color:var(--color-navy);font-size:0.8rem;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid rgba(24,33,69,0.15);">MKB Expert</span>
                  <span style="background:rgba(24,33,69,0.08);color:var(--color-navy);font-size:0.8rem;font-weight:600;padding:6px 14px;border-radius:20px;border:1px solid rgba(24,33,69,0.15);">Organisatieontwikkeling</span>
                </div>
                <a href="#" class="og1-btn og1-btn-primary" style="margin-top:28px;">Plan een kennismaking →</a>
              </div>
              <div class="og1-about-avatar og1-fade-in og1-fade-in-delay-1">
                <div class="og1-avatar-initials">JS</div>
                <div class="og1-avatar-name">Joeri Schilders</div>
                <div class="og1-avatar-role">Oprichter & AI Trainer</div>
                <div>
                  <span class="og1-about-trust-badge">Ontwikkel Guru</span>
                  <span class="og1-about-trust-badge">BusinessBaas</span>
                </div>
                <p style="font-size:0.85rem;color:rgba(255,255,255,0.55);text-align:center;line-height:1.65;max-width:220px;">"AI is geen magie — het is een gereedschap. En wij leren je er mee te werken."</p>
              </div>
            </div>
          </div>
        </section>

        <!-- BUSINESSBAAS -->
        <section style="background: var(--color-sand); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <div class="og1-section-header og1-fade-in" style="margin-bottom:40px;">
              <span style="display:inline-block;font-size:0.75rem;font-weight:700;color:var(--color-indigo);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;background:rgba(92,79,246,0.1);padding:4px 10px;border-radius:20px;">Zusterorganisatie</span>
              <h2 style="font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;letter-spacing:-0.025em;">Ook actief via BusinessBaas</h2>
            </div>
            <div class="og1-bb-card og1-fade-in">
              <div>
                <p style="font-size:1.5rem;font-weight:800;color:var(--color-navy);margin-bottom:12px;">BusinessBaas</p>
                <p style="color:var(--color-text-muted);line-height:1.75;margin-bottom:16px;">BusinessBaas is het platform voor ondernemers die willen groeien met AI als partner. Van AI-coaching door Nova tot praktische tools en een actieve community — alles om je bedrijf slimmer te laten draaien.</p>
                <a href="https://businessbaas.com" target="_blank" rel="noopener" class="og1-btn og1-btn-primary">Bezoek BusinessBaas →</a>
              </div>
              <div style="background:var(--color-navy);border-radius:16px;padding:36px;text-align:center;display:flex;flex-direction:column;gap:16px;align-items:center;">
                <span style="font-size:3rem;">🤖</span>
                <p style="color:white;font-weight:700;font-size:1.1rem;">Nova — AI Business Coach</p>
                <p style="color:rgba(255,255,255,0.65);font-size:0.875rem;line-height:1.6;">24/7 beschikbaar, volledig op jouw bedrijf afgestemd.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- PARTNERSHIP -->
        <section style="background: var(--color-warm-white); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <div style="margin-bottom:40px;" class="og1-fade-in">
              <h2 style="font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;letter-spacing:-0.025em;margin-bottom:8px;">Samenwerking</h2>
              <p style="color:var(--color-text-muted);font-size:1.05rem;">Wij werken samen met betrouwbare partners die onze visie delen.</p>
            </div>
            <div class="og1-partnership-card og1-fade-in">
              <span class="og1-partnership-icon">🤝</span>
              <div>
                <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:8px;">Samen met Starterscentrum Limburg</h3>
                <p style="color:var(--color-text-muted);line-height:1.75;margin-bottom:12px;">Ontwikkel Guru werkt samen met Starterscentrum Limburg om startende ondernemers in Limburg te ondersteunen met praktische AI-kennis en tools. Via workshops en begeleiding helpen we de volgende generatie ondernemers om met AI een vliegende start te maken.</p>
                <a href="#" class="og1-btn og1-btn-primary" style="padding:10px 20px;font-size:0.9rem;">Meer over de samenwerking →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- VALUES -->
        <section style="background: var(--color-navy); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <div style="text-align:center;margin-bottom:48px;" class="og1-fade-in">
              <h2 style="font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;line-height:1.15;letter-spacing:-0.025em;color:white;margin-bottom:12px;">Onze waarden</h2>
              <p style="color:rgba(255,255,255,0.65);font-size:1.05rem;">Hier staan wij voor.</p>
            </div>
            <div class="og1-values-grid">
              <div class="og1-value-card og1-fade-in">
                <div class="og1-value-icon">🔧</div>
                <h3>Praktisch boven theoretisch</h3>
                <p>Wij geven geen lezingen over AI. We rollen onze mouwen op en gaan met je aan de slag — met tastbaar resultaat als doel.</p>
              </div>
              <div class="og1-value-card og1-fade-in og1-fade-in-delay-1">
                <div class="og1-value-icon">👥</div>
                <h3>Mensen centraal</h3>
                <p>AI is een middel, geen doel. Wij zorgen ervoor dat de technologie de mens ondersteunt — niet andersom.</p>
              </div>
              <div class="og1-value-card og1-fade-in og1-fade-in-delay-2">
                <div class="og1-value-icon">🎯</div>
                <h3>Op maat</h3>
                <p>Geen kant-en-klare oplossingen die toch niet passen. Alles wat wij doen is specifiek afgestemd op jouw organisatie, team en doelen.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="og1-cta-section">
          <div class="og1-container">
            <h2>Klaar om kennis te maken?</h2>
            <p>Plan een gratis intakegesprek en ontdek wat wij voor jouw organisatie kunnen betekenen.</p>
            <a href="#" class="og1-btn og1-btn-primary" style="padding:16px 36px;font-size:1.05rem;">Gratis intake plannen</a>
          </div>
        </section>

      `;
      this._setup();
    }

    _setup() {
      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1-fade-in').forEach(el => observer.observe(el));
    }
  }

  if (!customElements.get('og1-over-ons')) {
    customElements.define('og1-over-ons', Og1OverOns);
  }
})();
