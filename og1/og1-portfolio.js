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
.og1-btn-outline { background: transparent; color: var(--color-indigo); border-color: var(--color-indigo); }
.og1-btn-outline:hover { background: var(--color-indigo); color: var(--color-white); transform: translateY(-1px); }
.og1-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  transition: background var(--transition), backdrop-filter var(--transition), box-shadow var(--transition);
}
.og1-nav-scrolled { background: rgba(24,33,69,0.97); backdrop-filter: blur(12px); box-shadow: 0 2px 20px rgba(0,0,0,0.2); }
.og1-nav-solid { background: var(--color-navy); }
.og1-nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; padding: 0 24px; max-width: 1220px; margin: 0 auto; }
.og1-nav-logo { display: flex; align-items: center; gap: 10px; }
.og1-nav-links { display: flex; align-items: center; gap: 8px; }
.og1-nav-links a { color: rgba(255,255,255,0.85); font-size: 0.9rem; font-weight: 500; padding: 8px 12px; border-radius: 6px; transition: var(--transition); }
.og1-nav-links a:hover, .og1-nav-links a.active { color: var(--color-white); background: rgba(255,255,255,0.1); }
.og1-nav-cta { background: var(--color-indigo) !important; color: var(--color-white) !important; padding: 9px 18px !important; border-radius: var(--radius-btn) !important; font-weight: 700 !important; }
.og1-nav-hamburger { display: none; flex-direction: column; gap: 5px; padding: 8px; background: none; border: none; cursor: pointer; }
.og1-nav-hamburger span { display: block; width: 24px; height: 2px; background: var(--color-white); border-radius: 2px; transition: var(--transition); }
.og1-nav-hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.og1-nav-hamburger.active span:nth-child(2) { opacity: 0; }
.og1-nav-hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.og1-nav-mobile { display: none; position: fixed; top: 68px; left: 0; right: 0; background: var(--color-navy); z-index: 999; padding: 16px 24px 24px; flex-direction: column; gap: 4px; border-top: 1px solid rgba(255,255,255,0.1); }
.og1-nav-mobile.open { display: flex; }
.og1-nav-mobile a { color: rgba(255,255,255,0.85); font-size: 1rem; font-weight: 500; padding: 12px 16px; border-radius: 8px; transition: var(--transition); }
.og1-nav-mobile a:hover { color: var(--color-white); background: rgba(255,255,255,0.08); }
.og1-nav-mobile .og1-nav-cta { background: var(--color-indigo) !important; color: var(--color-white) !important; margin-top: 8px; text-align: center; display: block; }
.og1-hero-simple { background: var(--color-navy); min-height: 280px; display: flex; align-items: center; padding: 120px 0 64px; }
.og1-hero-simple h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; color: white; }
.og1-hero-simple p { color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-top: 14px; }
.og1-portfolio-filter-bar { position: sticky; top: 68px; z-index: 100; background: var(--color-warm-white); border-bottom: 1px solid var(--color-border); padding: 16px 0; }
.og1-filter-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
.og1-filter-btn { background: transparent; color: var(--color-text-muted); border: 1.5px solid var(--color-border); border-radius: 20px; padding: 8px 18px; font-size: 0.875rem; font-weight: 600; cursor: pointer; transition: var(--transition); font-family: 'Inter', sans-serif; }
.og1-filter-btn:hover { border-color: var(--color-indigo); color: var(--color-indigo); }
.og1-filter-btn.active { background: var(--color-indigo); color: white; border-color: var(--color-indigo); }
.og1-portfolio-intro-note { background: rgba(92,79,246,0.06); border: 1px solid rgba(92,79,246,0.15); border-radius: 8px; padding: 12px 18px; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 32px; font-style: italic; }
.og1-portfolio-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.og1-portfolio-card { border-radius: var(--radius-card); overflow: hidden; box-shadow: var(--shadow-card); cursor: pointer; position: relative; background: #0a0a0a; transition: var(--transition); }
.og1-portfolio-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1-card-thumb-wrap { position: relative; overflow: hidden; }
.og1-card-thumb-wrap.aspect-16-9 { aspect-ratio: 16/9; }
.og1-card-thumb-wrap.aspect-9-16 { aspect-ratio: 9/16; max-height: 320px; }
.og1-card-thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.og1-portfolio-card:hover .og1-card-thumb { transform: scale(1.04); }
.og1-card-play-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(24,33,69,0); transition: background 0.3s; }
.og1-portfolio-card:hover .og1-card-play-overlay { background: rgba(24,33,69,0.45); }
.og1-card-play-btn { width: 52px; height: 52px; background: rgba(255,255,255,0.92); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--color-navy); padding-left: 3px; opacity: 0; transform: scale(0.8); transition: var(--transition); box-shadow: 0 4px 16px rgba(0,0,0,0.25); }
.og1-portfolio-card:hover .og1-card-play-btn { opacity: 1; transform: scale(1); }
.og1-card-footer { background: var(--color-white); padding: 14px 16px; }
.og1-card-title { font-size: 0.9rem; font-weight: 700; color: var(--color-text); margin-bottom: 4px; }
.og1-card-meta { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.og1-card-brand { font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500; }
.og1-card-description { font-size: 0.78rem; color: var(--color-text-muted); margin-top: 6px; line-height: 1.5; }
.og1-badge { display: inline-flex; align-items: center; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
.og1-badge-demo { border: 1.5px solid var(--color-indigo); color: var(--color-indigo); }
.og1-badge-brand { background: var(--color-sand); color: var(--color-navy); }
.og1-card-hidden { display: none !important; }
.og1-video-modal { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); align-items: center; justify-content: center; padding: 24px; }
.og1-video-modal.open { display: flex; }
.og1-video-modal-inner { position: relative; width: 100%; max-width: 900px; }
.og1-video-modal-inner.portrait { max-width: 400px; }
.og1-video-modal video { width: 100%; border-radius: 12px; display: block; max-height: 85vh; }
.og1-video-modal-close { position: absolute; top: -48px; right: 0; background: rgba(255,255,255,0.15); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); font-family: inherit; }
.og1-video-modal-close:hover { background: rgba(255,255,255,0.3); }
.og1-video-modal-title { color: white; text-align: center; margin-top: 16px; font-size: 0.95rem; font-weight: 600; }
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
.og1-fade-in { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1-fade-in.visible { opacity: 1; transform: none; }
@media (max-width: 1024px) {
  .og1-portfolio-grid { grid-template-columns: repeat(2, 1fr); }
  .og1-footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 56px; }
  .og1-nav-links { display: none; }
  .og1-nav-hamburger { display: flex; }
  .og1-portfolio-grid { grid-template-columns: 1fr; }
  .og1-footer-top { grid-template-columns: 1fr; gap: 24px; }
  .og1-filter-buttons { gap: 6px; }
  .og1-filter-btn { padding: 6px 12px; font-size: 0.8rem; }
}
@media (max-width: 480px) {
  .og1-container { padding: 0 16px; }
  .og1-nav-inner { padding: 0 16px; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  const VIDEOS = [
    { id:1, title:'Brand Story GreenBite', brand:'GreenBite', category:'campagne', aspect:'16:9', demo:true,
      description:'Cinematic brand story voor een duurzaam food-merk.',
      url:'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg'},
    { id:2, title:'Productvideo Lumion', brand:'Lumion Beauty', category:'product', aspect:'16:9', demo:true,
      description:'Klassieke productvideo voor een luxe skincare merk.',
      url:'https://video.wixstatic.com/video/6c17f4_ace8978932e24fb9a8aedacdfa0c234d/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ace8978932e24fb9a8aedacdfa0c234df001.jpg'},
    { id:3, title:'Lifestyle Lumion (V1)', brand:'Lumion Beauty', category:'product', aspect:'16:9', demo:true,
      description:'Lifestyle-video met model voor luxe skincare campagne.',
      url:'https://video.wixstatic.com/video/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0f001.jpg'},
    { id:4, title:'Nexora Reel', brand:'Nexora', category:'corporate', aspect:'9:16', demo:true,
      description:'Social media reel voor een B2B HR-softwarebedrijf.',
      url:'https://video.wixstatic.com/video/6c17f4_c33775070f99478e93b3ed01ebc82ff4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_c33775070f99478e93b3ed01ebc82ff4f001.jpg'},
    { id:5, title:'GreenBite Markt', brand:'GreenBite', category:'campagne', aspect:'9:16', demo:true,
      description:'Markt-reel voor social media — vers, dynamisch.',
      url:'https://video.wixstatic.com/video/6c17f4_e574a6a90cb14cb6b6a6633e48179914/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e574a6a90cb14cb6b6a6633e48179914f001.jpg'},
    { id:6, title:'Lumion Zomercampagne — Clip 1', brand:'Lumion Beauty', category:'campagne', aspect:'16:9', demo:true,
      description:'Eerste clip van tweedelige zomercampagne voor skincare.',
      url:'https://video.wixstatic.com/video/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4f001.jpg'},
    { id:7, title:'Lumion Zomercampagne — Clip 2', brand:'Lumion Beauty', category:'campagne', aspect:'16:9', demo:true,
      description:'Tweede clip — huidverzorging in luxe setting.',
      url:'https://video.wixstatic.com/video/6c17f4_c755d780e51f41d2947b4b032ef009c0/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_c755d780e51f41d2947b4b032ef009c0f001.jpg'},
    { id:8, title:'Nexora B-roll — Werkplek', brand:'Nexora', category:'corporate', aspect:'16:9', demo:true,
      description:'B-roll footage van een moderne kantooromgeving.',
      url:'https://video.wixstatic.com/video/6c17f4_2326b4d923b249fda29aaa8824b6f475/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_2326b4d923b249fda29aaa8824b6f475f001.jpg'},
    { id:9, title:'Nexora B-roll — Verbinding', brand:'Nexora', category:'corporate', aspect:'16:9', demo:true,
      description:'B-roll footage over samenwerking en verbinding.',
      url:'https://video.wixstatic.com/video/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4f001.jpg'},
    { id:10, title:'Sales pitch — Joeri', brand:'Ontwikkel Guru', category:'avatar', aspect:'16:9', demo:false,
      description:'AI-avatar salespitch: gepersonaliseerde video op naam van de ontvanger.',
      url:'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg'},
    { id:11, title:'Onboarding — Emma', brand:'Nexora', category:'onboarding', aspect:'16:9', demo:true,
      description:'AI-avatar onboarding video voor nieuwe medewerkers.',
      url:'https://video.wixstatic.com/video/6c17f4_4279c45016d34a2ea81ad8053a6598b9/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_4279c45016d34a2ea81ad8053a6598b9f001.jpg'},
    { id:12, title:'AI-workshop — Verdant Group', brand:'Verdant Group', category:'onboarding', aspect:'16:9', demo:true,
      description:'Introworkshop AI gegeven door AI-avatar workshoptrainer Alex.',
      url:'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg'},
    { id:13, title:'BusinessBaas Onboarding — Bodhi', brand:'BusinessBaas', category:'onboarding', aspect:'16:9', demo:false,
      description:'AI-onboarding avatar Bodhi verwelkomt nieuwe leden van BusinessBaas.',
      url:'https://video.wixstatic.com/video/6c17f4_2c41b196c8564667bc00791ab2650d2d/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_2c41b196c8564667bc00791ab2650d2df001.jpg'},
    { id:14, title:'Nova stelt zich voor', brand:'BusinessBaas', category:'coaching', aspect:'9:16', demo:false,
      description:'Nova, de AI businesscoach van BusinessBaas, stelt zichzelf voor.',
      url:'https://video.wixstatic.com/video/6c17f4_ea9a4440158c4778a249a2d9a059fc82/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ea9a4440158c4778a249a2d9a059fc82f001.jpg'},
    { id:15, title:'Starterscentrum Limburg × BusinessBaas', brand:'BusinessBaas', category:'aankondiging', aspect:'9:16', demo:false,
      description:'Aankondiging van de samenwerking tussen Starterscentrum Limburg en BusinessBaas.',
      url:'https://video.wixstatic.com/video/6c17f4_e34bc46b435943d9aec671eb72b18f3b/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e34bc46b435943d9aec671eb72b18f3bf001.jpg'}
  ];

  const FILTERS = [
    { label: 'Alles', key: 'all' },
    { label: 'Campagne & Product', key: 'campagne-product' },
    { label: 'Corporate Video', key: 'corporate' },
    { label: 'Avatar & Sales', key: 'avatar' },
    { label: 'Onboarding & Training', key: 'onboarding' },
    { label: 'AI Coaching', key: 'coaching' },
    { label: 'Aankondiging', key: 'aankondiging' }
  ];

  function getFilterKey(category) {
    if (category === 'campagne' || category === 'product') return 'campagne-product';
    return category;
  }

  class Og1Portfolio extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- NAV -->
        <nav class="og1-nav og1-nav-solid" id="og1p-nav">
          <div class="og1-nav-inner">
            <a href="#" class="og1-nav-logo">
              <span style="font-size:1rem;font-weight:800;color:white;letter-spacing:-0.01em;">Ontwikkel Guru</span>
            </a>
            <div class="og1-nav-links">
              <a href="#">Home</a>
              <a href="#" class="active">Portfolio</a>
              <a href="#">Aanbod</a>
              <a href="#">Over ons</a>
              <a href="#" class="og1-nav-cta">Gratis intake</a>
            </div>
            <button class="og1-nav-hamburger" id="og1p-hamburger" aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </nav>
        <div class="og1-nav-mobile" id="og1p-mobile-menu">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Aanbod</a>
          <a href="#">Over ons</a>
          <a href="#" class="og1-nav-cta">Gratis intake</a>
        </div>

        <!-- HERO -->
        <div class="og1-hero-simple">
          <div class="og1-container">
            <h1>Ons portfolio</h1>
            <p>15 video's — van campagnevideo tot AI-avatar en onboarding.</p>
          </div>
        </div>

        <!-- FILTER BAR -->
        <div class="og1-portfolio-filter-bar">
          <div class="og1-container">
            <div class="og1-filter-buttons" id="og1p-filters"></div>
          </div>
        </div>

        <!-- PORTFOLIO GRID -->
        <section style="background: var(--color-warm-white); padding: var(--section-pad) 0;">
          <div class="og1-container">
            <p class="og1-portfolio-intro-note">De meeste video's in dit portfolio zijn demo's gemaakt voor fictieve merken. Ze tonen de kwaliteit en stijl van ons werk.</p>
            <div class="og1-portfolio-grid" id="og1p-grid"></div>
          </div>
        </section>

        <!-- CTA -->
        <section class="og1-cta-section">
          <div class="og1-container">
            <h2>Jouw merk in beeld?</h2>
            <p>Plan een gratis intake en ontdek wat AI-video voor jouw organisatie kan betekenen.</p>
            <a href="#" class="og1-btn og1-btn-primary" style="padding:16px 36px;font-size:1.05rem;">Gratis intake plannen</a>
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

        <!-- VIDEO MODAL -->
        <div class="og1-video-modal" id="og1p-video-modal">
          <div class="og1-video-modal-inner" id="og1p-modal-inner">
            <button class="og1-video-modal-close" id="og1p-modal-close">&#x2715;</button>
            <video id="og1p-modal-video" controls playsinline></video>
            <p class="og1-video-modal-title" id="og1p-modal-title"></p>
          </div>
        </div>
      `;
      this._setup();
    }

    _setup() {
      // Render filter buttons
      const filterContainer = this.querySelector('#og1p-filters');
      FILTERS.forEach((f, i) => {
        const btn = document.createElement('button');
        btn.className = 'og1-filter-btn' + (i === 0 ? ' active' : '');
        btn.textContent = f.label;
        btn.dataset.filter = f.key;
        btn.addEventListener('click', () => {
          this.querySelectorAll('.og1-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this._filterCards(f.key);
        });
        filterContainer.appendChild(btn);
      });

      // Render portfolio cards
      const grid = this.querySelector('#og1p-grid');
      VIDEOS.forEach(v => {
        const aspectClass = v.aspect === '9:16' ? 'aspect-9-16' : 'aspect-16-9';
        const card = document.createElement('div');
        card.className = 'og1-portfolio-card og1-fade-in';
        card.dataset.category = getFilterKey(v.category);
        card.innerHTML = `
          <div class="og1-card-thumb-wrap ${aspectClass}">
            <img class="og1-card-thumb" src="${v.poster}" alt="${v.title}" loading="lazy">
            <div class="og1-card-play-overlay">
              <div class="og1-card-play-btn">&#9654;</div>
            </div>
          </div>
          <div class="og1-card-footer">
            <div class="og1-card-title">${v.title}</div>
            <div class="og1-card-meta">
              <span class="og1-card-brand">${v.brand}</span>
              ${v.demo ? '<span class="og1-badge og1-badge-demo">Demo</span>' : ''}
            </div>
            <p class="og1-card-description">${v.description}</p>
          </div>
        `;
        card.addEventListener('click', () => this._openModal(v));
        grid.appendChild(card);
      });

      // Nav scroll
      const nav = this.querySelector('#og1p-nav');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          nav.classList.add('og1-nav-scrolled');
        }
      });

      // Hamburger
      const hamburger = this.querySelector('#og1p-hamburger');
      const mobileMenu = this.querySelector('#og1p-mobile-menu');
      if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          mobileMenu.classList.toggle('open');
        });
      }

      // Modal
      const modal = this.querySelector('#og1p-video-modal');
      const modalClose = this.querySelector('#og1p-modal-close');
      if (modalClose) modalClose.addEventListener('click', () => this._closeModal());
      if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) this._closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this._closeModal(); });

      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1-fade-in').forEach(el => observer.observe(el));
    }

    _filterCards(filterKey) {
      this.querySelectorAll('.og1-portfolio-card').forEach(card => {
        if (filterKey === 'all' || card.dataset.category === filterKey) {
          card.classList.remove('og1-card-hidden');
        } else {
          card.classList.add('og1-card-hidden');
        }
      });
    }

    _openModal(v) {
      const modal = this.querySelector('#og1p-video-modal');
      const inner = this.querySelector('#og1p-modal-inner');
      const video = this.querySelector('#og1p-modal-video');
      const title = this.querySelector('#og1p-modal-title');
      if (!modal || !video) return;
      if (v.aspect === '9:16') inner.classList.add('portrait');
      else inner.classList.remove('portrait');
      video.src = v.url;
      video.poster = v.poster;
      if (title) title.textContent = v.title;
      modal.classList.add('open');
      video.play();
    }

    _closeModal() {
      const modal = this.querySelector('#og1p-video-modal');
      const video = this.querySelector('#og1p-modal-video');
      if (modal) modal.classList.remove('open');
      if (video) { video.pause(); video.src = ''; }
    }
  }

  if (!customElements.get('og1-portfolio')) {
    customElements.define('og1-portfolio', Og1Portfolio);
  }
})();
