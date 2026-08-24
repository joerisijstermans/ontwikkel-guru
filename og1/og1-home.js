(function() {
  // 1. Inject Google Fonts (once per document)
  if (!document.getElementById('og1-fonts')) {
    const l = document.createElement('link');
    l.id = 'og1-fonts';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    document.head.appendChild(l);
  }

  // 2. Inject shared CSS (once per document)
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
og1-home img, og1-portfolio img, og1-aanbod img, og1-over-ons img, og1-contact img { max-width: 100%; display: block; }
og1-home a, og1-portfolio a, og1-aanbod a, og1-over-ons a, og1-contact a { color: inherit; text-decoration: none; }
og1-home ul, og1-portfolio ul, og1-aanbod ul, og1-over-ons ul, og1-contact ul { list-style: none; }
og1-home button, og1-portfolio button, og1-aanbod button, og1-over-ons button, og1-contact button { cursor: pointer; font-family: inherit; border: none; background: none; }
.og1-container { max-width: var(--container-max); margin: 0 auto; padding: 0 24px; }
.og1-h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; }
.og1-h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.025em; }
.og1-h3 { font-size: 1.2rem; font-weight: 700; line-height: 1.3; }
.og1-p { line-height: 1.75; }
.og1-section-pad { padding: var(--section-pad) 0; }
.og1-section-warm-white { background: var(--color-warm-white); }
.og1-section-sand { background: var(--color-sand); }
.og1-section-navy { background: var(--color-navy); }
.og1-section-header { margin-bottom: 48px; }
.og1-section-header.centered { text-align: center; }
.og1-section-title { margin-bottom: 12px; }
.og1-section-subtitle { font-size: 1.1rem; color: var(--color-text-muted); margin-top: 8px; }
.og1-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: var(--radius-btn);
  font-size: 1rem; font-weight: 700; transition: var(--transition);
  cursor: pointer; text-decoration: none; border: 2px solid transparent;
  white-space: nowrap; font-family: 'Inter', sans-serif;
}
.og1-btn-lg { padding: 16px 36px; font-size: 1.05rem; }
.og1-btn-sm { padding: 9px 18px; font-size: 0.875rem; }
.og1-btn-primary { background: var(--color-indigo); color: var(--color-white); border-color: var(--color-indigo); }
.og1-btn-primary:hover { background: #4a3de0; border-color: #4a3de0; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(92,79,246,0.35); }
.og1-btn-secondary { background: transparent; color: var(--color-white); border-color: rgba(255,255,255,0.7); }
.og1-btn-secondary:hover { background: rgba(255,255,255,0.12); border-color: var(--color-white); }
.og1-btn-outline { background: transparent; color: var(--color-indigo); border-color: var(--color-indigo); }
.og1-btn-outline:hover { background: var(--color-indigo); color: var(--color-white); transform: translateY(-1px); }
.og1-btn-white { background: var(--color-white); color: var(--color-navy); border-color: var(--color-white); }
.og1-btn-white:hover { background: var(--color-sand); transform: translateY(-1px); }
.og1-hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
.og1-hero-video-bg { position: absolute; inset: 0; z-index: 0; }
.og1-hero-video-bg video { width: 100%; height: 100%; object-fit: cover; }
.og1-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(24,33,69,0.82) 0%, rgba(24,33,69,0.65) 100%); }
.og1-hero-content { position: relative; z-index: 1; width: 100%; padding: 60px 0 80px; }
.og1-hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 32px; margin-bottom: 40px; }
.og1-trust-signal { display: flex; flex-wrap: wrap; gap: 20px; }
.og1-trust-item { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.8); font-size: 0.875rem; font-weight: 500; }
.og1-trust-item-check { color: #4ade80; font-size: 1rem; }
.og1-hero-subtitle { color: rgba(255,255,255,0.8); font-size: 1.2rem; margin-top: 20px; max-width: 560px; line-height: 1.65; }
.og1-hero-label { display: inline-block; background: rgba(92,79,246,0.25); border: 1px solid rgba(92,79,246,0.5); color: rgba(255,255,255,0.9); font-size: 0.8rem; font-weight: 700; padding: 6px 14px; border-radius: 20px; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 20px; }
.og1-logo-bar { background: var(--color-sand); padding: 20px 0; border-bottom: 1px solid rgba(24,33,69,0.1); }
.og1-logo-bar-inner { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.og1-logo-bar-label { font-size: 0.8rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap; }
.og1-logo-bar-brands { display: flex; gap: 10px; flex-wrap: wrap; }
.og1-brand-badge { background: rgba(24,33,69,0.08); color: var(--color-navy); font-size: 0.8rem; font-weight: 600; padding: 5px 12px; border-radius: 20px; border: 1px solid rgba(24,33,69,0.15); }
.og1-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.og1-pain-card { background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 28px 24px; display: flex; align-items: flex-start; gap: 16px; box-shadow: var(--shadow-card); transition: var(--transition); }
.og1-pain-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-2px); }
.og1-pain-icon { font-size: 1.8rem; flex-shrink: 0; line-height: 1; }
.og1-services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.og1-service-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-card); padding: 32px 28px; color: var(--color-white); transition: var(--transition); }
.og1-service-card:hover { background: rgba(255,255,255,0.1); border-color: rgba(92,79,246,0.5); transform: translateY(-2px); }
.og1-service-card.dashed { border-style: dashed; border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.03); }
.og1-service-number { display: block; font-size: 0.75rem; font-weight: 700; color: var(--color-indigo); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; }
.og1-service-card h3 { color: var(--color-white); margin-bottom: 10px; font-size: 1.1rem; font-weight: 700; }
.og1-service-card p { color: rgba(255,255,255,0.7); font-size: 0.9rem; line-height: 1.65; margin-bottom: 16px; }
.og1-service-link { color: var(--color-indigo); font-size: 0.875rem; font-weight: 600; transition: var(--transition); }
.og1-service-link:hover { color: #7c6ef8; }
.og1-portfolio-preview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 32px; }
.og1-preview-card { border-radius: var(--radius-card); overflow: hidden; box-shadow: var(--shadow-card); cursor: pointer; position: relative; background: #111; transition: var(--transition); }
.og1-preview-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1-preview-card-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: opacity 0.3s; }
.og1-preview-card:hover .og1-preview-card-thumb { opacity: 0.75; }
.og1-preview-card-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: var(--transition); }
.og1-preview-card:hover .og1-preview-card-play { opacity: 1; }
.og1-play-btn { width: 56px; height: 56px; background: rgba(255,255,255,0.92); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; color: var(--color-navy); padding-left: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
.og1-preview-card-footer { background: var(--color-white); padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.og1-preview-card-title { font-size: 0.875rem; font-weight: 600; color: var(--color-text); }
.og1-badge { display: inline-flex; align-items: center; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
.og1-badge-demo { border: 1.5px solid var(--color-indigo); color: var(--color-indigo); }
.og1-badge-brand { background: var(--color-sand); color: var(--color-navy); }
.og1-about-split { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.og1-about-avatar { background: var(--color-navy); border-radius: 20px; padding: 48px 32px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 16px; }
.og1-avatar-initials { width: 96px; height: 96px; background: var(--color-indigo); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; color: var(--color-white); }
.og1-avatar-name { font-size: 1.1rem; font-weight: 700; color: var(--color-white); }
.og1-avatar-role { font-size: 0.875rem; color: rgba(255,255,255,0.6); }
.og1-trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.og1-trust-badge { background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.85); font-size: 0.8rem; font-weight: 600; padding: 6px 14px; border-radius: 20px; }
.og1-stats-bar { background: var(--color-indigo); padding: 56px 0; }
.og1-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: center; }
.og1-stat-number { display: block; font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: var(--color-white); line-height: 1; margin-bottom: 6px; }
.og1-stat-label { font-size: 0.875rem; color: rgba(255,255,255,0.75); font-weight: 500; }
.og1-cta-section { background: var(--color-navy); padding: var(--section-pad) 0; text-align: center; }
.og1-cta-section h2 { color: var(--color-white); margin-bottom: 16px; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.025em; }
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
.og1-video-modal { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); align-items: center; justify-content: center; padding: 24px; }
.og1-video-modal.open { display: flex; }
.og1-video-modal-inner { position: relative; width: 100%; max-width: 900px; }
.og1-video-modal-inner.portrait { max-width: 400px; }
.og1-video-modal video { width: 100%; border-radius: 12px; display: block; max-height: 85vh; }
.og1-video-modal-close { position: absolute; top: -48px; right: 0; background: rgba(255,255,255,0.15); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); font-family: inherit; }
.og1-video-modal-close:hover { background: rgba(255,255,255,0.3); }
.og1-video-modal-title { color: white; text-align: center; margin-top: 16px; font-size: 0.95rem; font-weight: 600; }
.og1-fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1-fade-in.visible { opacity: 1; transform: none; }
.og1-fade-in-delay-1 { transition-delay: 0.1s; }
.og1-fade-in-delay-2 { transition-delay: 0.2s; }
.og1-fade-in-delay-3 { transition-delay: 0.3s; }
@media (max-width: 1024px) {
  .og1-services-grid { grid-template-columns: repeat(2, 1fr); }
  .og1-portfolio-preview-grid { grid-template-columns: repeat(2, 1fr); }
  .og1-stats-grid { grid-template-columns: repeat(2, 1fr); }
  .og1-footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 56px; }
  .og1-grid-2 { grid-template-columns: 1fr; }
  .og1-about-split { grid-template-columns: 1fr; gap: 32px; }
  .og1-portfolio-preview-grid { grid-template-columns: 1fr; }
  .og1-stats-grid { grid-template-columns: 1fr 1fr; }
  .og1-footer-top { grid-template-columns: 1fr; gap: 24px; }
  .og1-hero-buttons { flex-direction: column; align-items: flex-start; }
  .og1-trust-signal { flex-direction: column; gap: 8px; }
  .og1-logo-bar-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
  .og1-services-grid { grid-template-columns: 1fr; }
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

  const PREVIEW_VIDEOS = [
    { id:1, title:'Brand Story GreenBite', brand:'GreenBite', demo:true, aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg'},
    { id:10, title:'Sales pitch — Joeri', brand:'Ontwikkel Guru', demo:false, aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg'},
    { id:12, title:'AI-workshop — Verdant Group', brand:'Verdant Group', demo:true, aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg'}
  ];

  class Og1Home extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- HERO -->
        <section class="og1-hero">
          <div class="og1-hero-video-bg">
            <video autoplay muted loop playsinline poster="https://static.wixstatic.com/media/6c17f4_2c41b196c8564667bc00791ab2650d2df001.jpg">
              <source src="https://video.wixstatic.com/video/6c17f4_99a1d8b971bb43bfad8b471f85ad2a85/1080p/mp4/file.mp4" type="video/mp4">
            </video>
          </div>
          <div class="og1-hero-overlay"></div>
          <div class="og1-hero-content">
            <div class="og1-container">
              <span class="og1-hero-label">AI Video & Automatisering voor het MKB</span>
              <h1 class="og1-h1" style="color:white;max-width:700px;">AI die werkt<br>voor mensen</h1>
              <p class="og1-hero-subtitle">Van AI-workshops en slimme automatisering tot cinematic videocontent en gepersonaliseerde AI-avatars — wij maken AI concreet en toepasbaar voor jouw organisatie.</p>
              <div class="og1-hero-buttons">
                <a href="#" class="og1-btn og1-btn-primary og1-btn-lg">Bekijk ons werk</a>
                <a href="#" class="og1-btn og1-btn-secondary og1-btn-lg">Gratis intake plannen</a>
              </div>
              <div class="og1-trust-signal">
                <span class="og1-trust-item"><span class="og1-trust-item-check">✓</span> Geen technische voorkennis nodig</span>
                <span class="og1-trust-item"><span class="og1-trust-item-check">✓</span> Binnen 2 weken resultaat</span>
                <span class="og1-trust-item"><span class="og1-trust-item-check">✓</span> Intake altijd gratis</span>
              </div>
            </div>
          </div>
        </section>

        <!-- LOGO BAR -->
        <div class="og1-logo-bar">
          <div class="og1-container">
            <div class="og1-logo-bar-inner">
              <span class="og1-logo-bar-label">Zij werken al met AI:</span>
              <div class="og1-logo-bar-brands">
                <span class="og1-brand-badge">GreenBite</span>
                <span class="og1-brand-badge">Lumion Beauty</span>
                <span class="og1-brand-badge">Nexora</span>
                <span class="og1-brand-badge">Verdant Group</span>
                <span class="og1-brand-badge">Vantage Partners</span>
                <span class="og1-brand-badge">BusinessBaas</span>
                <span class="og1-brand-badge">Starterscentrum Limburg</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PAIN SECTION -->
        <section class="og1-section-pad og1-section-warm-white">
          <div class="og1-container">
            <div class="og1-section-header centered">
              <h2 class="og1-h2 og1-section-title og1-fade-in">Herken je dit?</h2>
              <p class="og1-section-subtitle og1-fade-in og1-fade-in-delay-1">Je weet dat AI belangrijk is — maar je weet niet waar te beginnen.</p>
            </div>
            <div class="og1-grid-2">
              <div class="og1-pain-card og1-fade-in">
                <span class="og1-pain-icon">😓</span>
                <div>
                  <h3 class="og1-h3" style="margin-bottom:6px;">Geen tijd voor experimenten</h3>
                  <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.65;">Je wil AI inzetten, maar wie gaat dat uitzoeken terwijl het bedrijf gewoon doorloopt?</p>
                </div>
              </div>
              <div class="og1-pain-card og1-fade-in og1-fade-in-delay-1">
                <span class="og1-pain-icon">🌊</span>
                <div>
                  <h3 class="og1-h3" style="margin-bottom:6px;">Overspoeld door keuzes</h3>
                  <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.65;">Honderden AI-tools, duizenden beloftes — maar wat werkt écht voor jouw organisatie?</p>
                </div>
              </div>
              <div class="og1-pain-card og1-fade-in og1-fade-in-delay-2">
                <span class="og1-pain-icon">💸</span>
                <div>
                  <h3 class="og1-h3" style="margin-bottom:6px;">Hoge productiekosten</h3>
                  <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.65;">Video laten maken kost duizenden euro's en weken planning. Dat kan slimmer.</p>
                </div>
              </div>
              <div class="og1-pain-card og1-fade-in og1-fade-in-delay-3">
                <span class="og1-pain-icon">🔁</span>
                <div>
                  <h3 class="og1-h3" style="margin-bottom:6px;">Steeds repetitief werk</h3>
                  <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.65;">Je team doet dezelfde taken steeds opnieuw — terwijl AI dat in seconden kan afhandelen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- SERVICES -->
        <section class="og1-section-pad og1-section-navy">
          <div class="og1-container">
            <div class="og1-section-header centered">
              <h2 class="og1-h2 og1-section-title og1-fade-in" style="color:white;">Wat wij voor je doen</h2>
              <p class="og1-section-subtitle og1-fade-in og1-fade-in-delay-1" style="color:rgba(255,255,255,0.65);">Vijf diensten, één doel: AI die concreet resultaat oplevert.</p>
            </div>
            <div class="og1-services-grid">
              <div class="og1-service-card og1-fade-in">
                <span class="og1-service-number">01</span>
                <h3>AI Workshops</h3>
                <p>Praktische workshops voor teams van elke omvang — hands-on, direct toepasbaar, afgestemd op jouw branche.</p>
                <a href="#" class="og1-service-link">Meer info →</a>
              </div>
              <div class="og1-service-card og1-fade-in og1-fade-in-delay-1">
                <span class="og1-service-number">02</span>
                <h3>AI Automatisering</h3>
                <p>Slimme AI-workflows die je 5–20 uur per week besparen. Minder fouten, meer consistentie, direct schaalbaar.</p>
                <a href="#" class="og1-service-link">Meer info →</a>
              </div>
              <div class="og1-service-card og1-fade-in og1-fade-in-delay-2">
                <span class="og1-service-number">03</span>
                <h3>AI Avatar & Personalisatie</h3>
                <p>Eenmalig opnemen, onbeperkt inzetten. Gepersonaliseerde video's op naam, rol of branche — in elke taal.</p>
                <a href="#" class="og1-service-link">Meer info →</a>
              </div>
              <div class="og1-service-card og1-fade-in og1-fade-in-delay-1">
                <span class="og1-service-number">04</span>
                <h3>AI Campagnevideo</h3>
                <p>Cinematic videocontent voor social media en campagnes — geen crew, geen locatie, wél spectaculair resultaat.</p>
                <a href="#" class="og1-service-link">Meer info →</a>
              </div>
              <div class="og1-service-card og1-fade-in og1-fade-in-delay-2">
                <span class="og1-service-number">05</span>
                <h3>AI Strategie & Advies</h3>
                <p>Concreet AI-plan dat je direct kunt uitvoeren. Inclusief AI-scan, roadmap en prioriteitenmatrix.</p>
                <a href="#" class="og1-service-link">Meer info →</a>
              </div>
              <div class="og1-service-card dashed og1-fade-in og1-fade-in-delay-3" style="display:flex;flex-direction:column;justify-content:center;text-align:center;">
                <span style="font-size:2rem;margin-bottom:12px;">🤔</span>
                <h3>Weet je niet waar te beginnen?</h3>
                <p>Dat begrijpen we. Onze gratis intake helpt je de juiste keuze te maken — zonder verplichtingen.</p>
                <a href="#" class="og1-btn og1-btn-secondary" style="margin-top:16px;justify-content:center;">Gratis intake →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- PORTFOLIO PREVIEW -->
        <section class="og1-section-pad og1-section-warm-white">
          <div class="og1-container">
            <div class="og1-section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:48px;">
              <div>
                <h2 class="og1-h2 og1-section-title og1-fade-in">Bekijk ons werk</h2>
                <p class="og1-section-subtitle og1-fade-in og1-fade-in-delay-1">Voorbeelden uit onze praktijk — van campagnevideo tot AI-avatar.</p>
              </div>
              <a href="#" class="og1-btn og1-btn-outline og1-fade-in">Volledig portfolio →</a>
            </div>
            <div class="og1-portfolio-preview-grid" id="og1-preview-grid"></div>
          </div>
        </section>

        <!-- ABOUT -->
        <section class="og1-section-pad og1-section-sand">
          <div class="og1-container">
            <div class="og1-about-split">
              <div class="og1-fade-in">
                <span style="display:inline-block;font-size:0.75rem;font-weight:700;color:var(--color-indigo);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;background:rgba(92,79,246,0.1);padding:4px 10px;border-radius:20px;">Over ons</span>
                <h2 class="og1-h2 og1-section-title">Hoi, ik ben Joeri</h2>
                <p style="color:var(--color-text-muted);margin-top:16px;line-height:1.75;">Ik ben trainer, oprichter en AI-enthousiasteling. Met een achtergrond in training en organisatieontwikkeling help ik bedrijven om AI niet als bedreiging, maar als kans te zien.</p>
                <p style="color:var(--color-text-muted);margin-top:12px;line-height:1.75;">Ontwikkel Guru is mijn praktijk voor concrete AI-inzet bij MKB-bedrijven. Geen vage beloftes, geen ingewikkeld jargon — gewoon aan de slag.</p>
                <div class="og1-trust-badges" style="margin-top:24px;">
                  <span class="og1-brand-badge" style="background:rgba(24,33,69,0.1);">Trainer & Coach</span>
                  <span class="og1-brand-badge" style="background:rgba(24,33,69,0.1);">AI Specialist</span>
                  <span class="og1-brand-badge" style="background:rgba(24,33,69,0.1);">MKB Expert</span>
                </div>
                <a href="#" class="og1-btn og1-btn-primary" style="margin-top:28px;">Meer over ons →</a>
              </div>
              <div class="og1-about-avatar og1-fade-in og1-fade-in-delay-1">
                <div class="og1-avatar-initials">JS</div>
                <div class="og1-avatar-name">Joeri Schilders</div>
                <div class="og1-avatar-role">Oprichter & AI Trainer</div>
                <div class="og1-trust-badges" style="justify-content:center;">
                  <span class="og1-trust-badge">Ontwikkel Guru</span>
                  <span class="og1-trust-badge">BusinessBaas</span>
                </div>
                <p style="font-size:0.85rem;color:rgba(255,255,255,0.55);text-align:center;line-height:1.6;">"AI is geen magie — het is een gereedschap. En wij leren je er mee te werken."</p>
              </div>
            </div>
          </div>
        </section>

        <!-- STATS -->
        <div class="og1-stats-bar">
          <div class="og1-container">
            <div class="og1-stats-grid">
              <div class="og1-fade-in">
                <span class="og1-stat-number">50+</span>
                <span class="og1-stat-label">Projecten afgerond</span>
              </div>
              <div class="og1-fade-in og1-fade-in-delay-1">
                <span class="og1-stat-number">15</span>
                <span class="og1-stat-label">AI-video's in portfolio</span>
              </div>
              <div class="og1-fade-in og1-fade-in-delay-2">
                <span class="og1-stat-number">7+</span>
                <span class="og1-stat-label">Tevreden klanten</span>
              </div>
              <div class="og1-fade-in og1-fade-in-delay-3">
                <span class="og1-stat-number">2 wkn</span>
                <span class="og1-stat-label">Gemiddelde doorlooptijd</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <section class="og1-cta-section">
          <div class="og1-container">
            <h2 class="og1-fade-in">Klaar om te beginnen?</h2>
            <p class="og1-fade-in og1-fade-in-delay-1">Plan een gratis intakegesprek en ontdek wat AI voor jouw organisatie kan betekenen — zonder verplichtingen.</p>
            <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
              <a href="#" class="og1-btn og1-btn-primary og1-btn-lg og1-fade-in og1-fade-in-delay-1">Gratis intake plannen</a>
              <a href="#" class="og1-btn og1-btn-secondary og1-btn-lg og1-fade-in og1-fade-in-delay-2">Bekijk het aanbod</a>
            </div>
          </div>
        </section>

        <!-- VIDEO MODAL -->
        <div class="og1-video-modal" id="og1-video-modal">
          <div class="og1-video-modal-inner" id="og1-modal-inner">
            <button class="og1-video-modal-close" id="og1-modal-close">&#x2715;</button>
            <video id="og1-modal-video" controls playsinline></video>
            <p class="og1-video-modal-title" id="og1-modal-title"></p>
          </div>
        </div>
      `;
      this._setup();
    }

    _setup() {
      // Render preview cards
      const grid = this.querySelector('#og1-preview-grid');
      if (grid) {
        PREVIEW_VIDEOS.forEach(v => {
          const card = document.createElement('div');
          card.className = 'og1-preview-card og1-fade-in';
          card.innerHTML = `
            <img class="og1-preview-card-thumb" src="${v.poster}" alt="${v.title}" loading="lazy">
            <div class="og1-preview-card-play"><div class="og1-play-btn">&#9654;</div></div>
            <div class="og1-preview-card-footer">
              <span class="og1-preview-card-title">${v.title}</span>
              ${v.demo ? '<span class="og1-badge og1-badge-demo">Demo</span>' : '<span class="og1-badge og1-badge-brand">' + v.brand + '</span>'}
            </div>
          `;
          card.addEventListener('click', () => this._openModal(v));
          grid.appendChild(card);
        });
      }

      // Modal
      const modal = this.querySelector('#og1-video-modal');
      const modalClose = this.querySelector('#og1-modal-close');
      const modalVideo = this.querySelector('#og1-modal-video');
      if (modalClose) {
        modalClose.addEventListener('click', () => this._closeModal());
      }
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this._closeModal();
        });
      }
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this._closeModal();
      });

      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      this.querySelectorAll('.og1-fade-in').forEach(el => observer.observe(el));
    }

    _openModal(v) {
      const modal = this.querySelector('#og1-video-modal');
      const inner = this.querySelector('#og1-modal-inner');
      const video = this.querySelector('#og1-modal-video');
      const title = this.querySelector('#og1-modal-title');
      if (!modal || !video) return;
      if (v.aspect === '9:16') {
        inner.classList.add('portrait');
      } else {
        inner.classList.remove('portrait');
      }
      video.src = v.url;
      video.poster = v.poster;
      if (title) title.textContent = v.title;
      modal.classList.add('open');
      video.play();
    }

    _closeModal() {
      const modal = this.querySelector('#og1-video-modal');
      const video = this.querySelector('#og1-modal-video');
      if (modal) modal.classList.remove('open');
      if (video) { video.pause(); video.src = ''; }
    }
  }

  if (!customElements.get('og1-home')) {
    customElements.define('og1-home', Og1Home);
  }
})();
