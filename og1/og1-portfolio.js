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
og1-portfolio { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-portfolio * { box-sizing: border-box; margin: 0; padding: 0; }
og1-portfolio img { max-width: 100%; display: block; }
og1-portfolio a { text-decoration: none; color: inherit; }
og1-portfolio ul { list-style: none; }
og1-portfolio button { cursor: pointer; font-family: inherit; border: none; background: none; }

.og1-container  { max-width: var(--container-max); margin: 0 auto; padding: 0 2rem; }
.og1-section    { padding: var(--section-pad) 0; }

/* Typography */
.og1-display-xl { font-size: clamp(3rem,6vw,5.5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; }
.og1-display-md { font-size: clamp(1.6rem,3vw,2.5rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
.og1-eyebrow    { display: block; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--indigo); margin-bottom: 1rem; }

/* Section header */
.og1-section-header { text-align: center; margin-bottom: 4rem; }
.og1-section-header h2 { color: var(--navy); margin-bottom: 1rem; }
.og1-section-header p  { color: var(--text-mid); max-width: 560px; margin: 0 auto; font-size: 1.05rem; }

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
.og1-btn-indigo-outline { background: transparent; color: var(--indigo); border-color: var(--indigo); }
.og1-btn-indigo-outline:hover { background: var(--indigo); color: var(--white); transform: translateY(-2px); }
.og1-btn svg { width: 18px; height: 18px; flex-shrink: 0; }

/* Tags */
.og1-tag { display: inline-flex; align-items: center; padding: 5px 12px; border-radius: 100px; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; }
.og1-tag-indigo { background: rgba(92,79,246,0.12); color: var(--indigo); }
.og1-tag-sand   { background: var(--sand); color: var(--navy); }

/* ════════════ HERO ════════════ */
.og1p-hero {
  background: var(--navy);
  padding: 80px 0 64px;
  position: relative; overflow: hidden;
}
.og1p-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.og1p-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.og1p-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -100px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.2;
}
.og1p-hero-inner { position: relative; z-index: 1; }
.og1p-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1p-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1p-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1p-hero-h1 { color: var(--white); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1rem; }
.og1p-hero-lead { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 520px; line-height: 1.7; margin-bottom: 2rem; }
.og1p-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* ════════════ FILTER BAR ════════════ */
.og1p-filter-bar {
  position: sticky; top: 0; z-index: 100;
  background: var(--warm-white);
  border-bottom: 1px solid rgba(0,0,0,0.08); padding: 16px 0;
}
.og1p-filter-buttons { display: flex; gap: 8px; flex-wrap: wrap; }
.og1p-filter-btn {
  background: transparent; color: var(--text-mid);
  border: 1.5px solid rgba(0,0,0,0.12); border-radius: var(--radius-xl);
  padding: 8px 18px; font-size: 0.875rem; font-weight: 600;
  cursor: pointer; transition: var(--transition); font-family: 'Inter', sans-serif;
}
.og1p-filter-btn:hover { border-color: var(--indigo); color: var(--indigo); }
.og1p-filter-btn.active { background: var(--indigo); color: var(--white); border-color: var(--indigo); }

/* ════════════ PORTFOLIO GRID ════════════ */
.og1p-intro-note {
  background: rgba(92,79,246,0.06); border: 1px solid rgba(92,79,246,0.15);
  border-radius: var(--radius-sm); padding: 12px 18px;
  font-size: 0.85rem; color: var(--text-mid); margin-bottom: 2rem; font-style: italic;
}
.og1p-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

/* Portfolio cards — white on light section */
.og1p-card {
  background: var(--white); border-radius: var(--radius-md);
  border: 1px solid rgba(0,0,0,0.06); box-shadow: var(--shadow-card);
  overflow: hidden; cursor: pointer; position: relative;
  transition: var(--transition);
}
.og1p-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--indigo); transform: scaleX(0); transform-origin: left;
  transition: transform var(--transition); z-index: 1;
}
.og1p-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1p-card:hover::before { transform: scaleX(1); }

.og1p-thumb-wrap { position: relative; overflow: hidden; aspect-ratio: 16/9; }
.og1p-thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.og1p-card:hover .og1p-thumb { transform: scale(1.04); }
.og1p-play-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(13,22,48,0); transition: background 0.3s;
}
.og1p-card:hover .og1p-play-overlay { background: rgba(13,22,48,0.45); }
.og1p-play-btn {
  width: 52px; height: 52px; background: rgba(255,255,255,0.92);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; color: var(--navy); padding-left: 3px;
  opacity: 0; transform: scale(0.8); transition: var(--transition);
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
}
.og1p-card:hover .og1p-play-btn { opacity: 1; transform: scale(1); }
.og1p-card-footer { background: var(--white); padding: 14px 16px; }
.og1p-card-title { font-size: 0.9rem; font-weight: 700; color: var(--text-dark); margin-bottom: 4px; }
.og1p-card-meta { display: flex; gap: 6px; align-items: center; flex-wrap: wrap; }
.og1p-card-brand { font-size: 0.75rem; color: var(--text-mid); font-weight: 500; }
.og1p-card-description { font-size: 0.78rem; color: var(--text-mid); margin-top: 6px; line-height: 1.5; }
.og1p-badge { display: inline-flex; align-items: center; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
.og1p-badge-demo { border: 1.5px solid var(--indigo); color: var(--indigo); }
.og1p-badge-brand { background: var(--sand); color: var(--navy); }
.og1p-card-hidden { display: none !important; }

/* ════════════ CTA ════════════ */
.og1p-cta { background: var(--navy); padding: var(--section-pad) 0; text-align: center; position: relative; overflow: hidden; }
.og1p-cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2; width: 500px; height: 500px; background: var(--indigo); top: -100px; right: -100px; pointer-events: none; }
.og1p-cta-inner { position: relative; z-index: 1; }
.og1p-cta-inner h2 { color: var(--white); margin-bottom: 1rem; }
.og1p-cta-inner p  { color: rgba(255,255,255,0.65); font-size: 1.05rem; margin-bottom: 2.5rem; max-width: 540px; margin-left: auto; margin-right: auto; }

/* ════════════ VIDEO MODAL ════════════ */
.og1p-modal { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); align-items: center; justify-content: center; padding: 24px; }
.og1p-modal.open { display: flex; }
.og1p-modal-inner { position: relative; width: 100%; max-width: 900px; }
.og1p-modal-inner.portrait { max-width: 400px; }
.og1p-modal-inner video { width: 100%; border-radius: 12px; display: block; max-height: 85vh; }
.og1p-modal-close { position: absolute; top: -48px; right: 0; background: rgba(255,255,255,0.15); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); font-family: inherit; }
.og1p-modal-close:hover { background: rgba(255,255,255,0.3); }
.og1p-modal-title { color: white; text-align: center; margin-top: 16px; font-size: 0.95rem; font-weight: 600; }

/* ════════════ REVEAL ════════════ */
.og1p-r { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1p-r.visible { opacity: 1; transform: none; }
.og1p-r-d1 { transition-delay: 0.1s; }
.og1p-r-d2 { transition-delay: 0.2s; }
.og1p-r-d3 { transition-delay: 0.3s; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 1024px) {
  .og1p-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  :root { --section-pad: 64px; }
  .og1p-hero { padding: 64px 0 48px; }
  .og1p-grid { grid-template-columns: 1fr; }
  .og1p-filter-buttons { gap: 6px; }
  .og1p-filter-btn { padding: 6px 12px; font-size: 0.8rem; }
  .og1p-hero-actions { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 480px) {
  .og1-container { padding: 0 1rem; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  const VIDEOS = [
    { id:1,
      title:'Campagne: "Groen Begint Hier"',
      brand:'GreenBite', category:'campagne', aspect:'16:9', demo:true,
      description:'Cinematic brand film voor een duurzaam food-merk. Laat zien hoe je in 60 seconden je missie vertelt — zonder voice-over, puur op beeld en muziek.',
      url:'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg'},
    { id:2,
      title:'Campagne: "Luxe Huid, Pure Natuur"',
      brand:'Lumion Beauty', category:'product', aspect:'16:9', demo:true,
      description:'Productvideo voor een luxe skincare lijn. Toepasbaar als webshop-hero, social ad of productlancering — zonder fotostudio of filmploeg.',
      url:'https://video.wixstatic.com/video/6c17f4_ace8978932e24fb9a8aedacdfa0c234d/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ace8978932e24fb9a8aedacdfa0c234df001.jpg'},
    { id:3,
      title:'Campagne: "Voelen, Niet Praten"',
      brand:'Lumion Beauty', category:'product', aspect:'16:9', demo:true,
      description:'Lifestyle video die de beleving verkoopt, niet het product. Ideaal als aanvulling op een productpagina of als Instagram-campagne die de zin in het gebruik wekt.',
      url:'https://video.wixstatic.com/video/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_cc26d20dae9a45538c3d8b09d0f557c0f001.jpg'},
    { id:4,
      title:'Social Reel: "De Slimste Werkdag"',
      brand:'Nexora', category:'corporate', aspect:'9:16', demo:true,
      description:'Verticale reel voor LinkedIn en Instagram Stories. Toont hoe je een B2B-softwareproduct menselijk en herkenbaar positioneert bij de doelgroep die je wil bereiken.',
      url:'https://video.wixstatic.com/video/6c17f4_c33775070f99478e93b3ed01ebc82ff4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_c33775070f99478e93b3ed01ebc82ff4f001.jpg'},
    { id:5,
      title:'Social Reel: "Vers, Elke Dag"',
      brand:'GreenBite', category:'campagne', aspect:'9:16', demo:true,
      description:'Dynamische vertical reel voor Reels, Stories en TikTok. Laat zien hoe je een markt-sfeer vastlegt zonder filmcrew — authentiek, snel en deelbaar.',
      url:'https://video.wixstatic.com/video/6c17f4_e574a6a90cb14cb6b6a6633e48179914/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e574a6a90cb14cb6b6a6633e48179914f001.jpg'},
    { id:6,
      title:'Campagne: "Zomerhuid" — Deel 1',
      brand:'Lumion Beauty', category:'campagne', aspect:'16:9', demo:true,
      description:'Eerste clip van een tweedelige seizoenscampagne. Geeft structuur en herkenbaarheid aan je merk door de campagneperiode heen — ideaal voor merken die consistent zichtbaar willen zijn.',
      url:'https://video.wixstatic.com/video/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_8c6323abeb1747d8a3ba2f91f7ab35f4f001.jpg'},
    { id:7,
      title:'Campagne: "Zomerhuid" — Deel 2',
      brand:'Lumion Beauty', category:'campagne', aspect:'16:9', demo:true,
      description:'Tweede clip van de zomercampagne. Dezelfde visuele taal, nieuwe invalshoek. Samen sterker dan apart — een reeks werkt als een merk.',
      url:'https://video.wixstatic.com/video/6c17f4_c755d780e51f41d2947b4b032ef009c0/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_c755d780e51f41d2947b4b032ef009c0f001.jpg'},
    { id:8,
      title:'Corporate Video: "Modern Werken"',
      brand:'Nexora', category:'corporate', aspect:'16:9', demo:true,
      description:'Kantoor-b-roll voor gebruik in presentaties, pitch decks of video-advertenties. Geeft je merk een professionele visuele uitstraling — zonder duur filmteam.',
      url:'https://video.wixstatic.com/video/6c17f4_2326b4d923b249fda29aaa8824b6f475/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_2326b4d923b249fda29aaa8824b6f475f001.jpg'},
    { id:9,
      title:'Corporate Video: "Samen Verder"',
      brand:'Nexora', category:'corporate', aspect:'16:9', demo:true,
      description:'B-roll over samenwerking en teamdynamiek. Universeel inzetbaar als achtergrond bij thought leadership content, employee advocacy of interne communicatie.',
      url:'https://video.wixstatic.com/video/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_8e821b5ca9cf46cfaa1f1645cf0e8bf4f001.jpg'},
    { id:10,
      title:'AI Avatar Sales Pitch — Joeri Sijstermans',
      brand:'Ontwikkel Guru', category:'avatar', aspect:'16:9', demo:false,
      description:'Gepersonaliseerde salespitch via AI-avatar. Eén opname, oneindig veel versies — elk op naam van de ontvanger. Verhoogt openingsratio\'s en geeft je acquisitie een gezicht.',
      url:'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg'},
    { id:11,
      title:'Onboarding Avatar: "Welkom bij Nexora"',
      brand:'Nexora', category:'onboarding', aspect:'16:9', demo:true,
      description:'AI-avatar Emma verwelkomt nieuwe medewerkers. Bespaart HR-uren en geeft elke nieuwe collega een warme, consistente start — schaalbaar naar elke afdeling of locatie.',
      url:'https://video.wixstatic.com/video/6c17f4_4279c45016d34a2ea81ad8053a6598b9/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_4279c45016d34a2ea81ad8053a6598b9f001.jpg'},
    { id:12,
      title:'AI-trainer Avatar: Workshop "Aan de Slag met AI"',
      brand:'Verdant Group', category:'onboarding', aspect:'16:9', demo:true,
      description:'AI-avatar als workshoptrainer. Ideaal voor bedrijven die een kennissessie willen schalen naar meerdere teams of locaties — zelfde kwaliteit, elke keer opnieuw.',
      url:'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg'},
    { id:13,
      title:'Platform Onboarding: Bodhi verwelkomt BusinessBaas-leden',
      brand:'BusinessBaas', category:'onboarding', aspect:'16:9', demo:false,
      description:'AI-avatar Bodhi leidt nieuwe platformleden door de eerste stappen. Vermindert drop-off in de onboarding en geeft elk lid een persoonlijk welkom — geautomatiseerd en schaalbaar.',
      url:'https://video.wixstatic.com/video/6c17f4_2c41b196c8564667bc00791ab2650d2d/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_2c41b196c8564667bc00791ab2650d2df001.jpg'},
    { id:14,
      title:'AI Coach Avatar: Nova stelt zich voor',
      brand:'BusinessBaas', category:'coaching', aspect:'9:16', demo:false,
      description:'Nova is de AI business coach van BusinessBaas. Deze introductievideo toont hoe een coaching-relatie via een video-avatar eruitziet — persoonlijk, toegankelijk en altijd beschikbaar.',
      url:'https://video.wixstatic.com/video/6c17f4_ea9a4440158c4778a249a2d9a059fc82/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ea9a4440158c4778a249a2d9a059fc82f001.jpg'},
    { id:15,
      title:'Aankondiging: BusinessBaas × Starterscentrum Limburg',
      brand:'BusinessBaas', category:'aankondiging', aspect:'9:16', demo:false,
      description:'Verticale aankondigingsvideo voor een strategische samenwerking. Inzetbaar als social post of e-mailcampagne — laat zien hoe je een partnership krachtig en snel naar buiten brengt.',
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
        <!-- ══ HERO ══ -->
        <section class="og1p-hero">
          <div class="og1p-hero-bg">
            <div class="og1p-hero-grid"></div>
            <div class="og1p-hero-orb"></div>
          </div>
          <div class="og1-container">
            <div class="og1p-hero-inner">
              <div class="og1p-eyebrow-row">
                <div class="og1p-eyebrow-line"></div>
                <span class="og1p-eyebrow-text">Ons werk</span>
              </div>
              <h1 class="og1p-hero-h1">Ons portfolio</h1>
              <p class="og1p-hero-lead">15 video's — van campagnevideo tot AI-avatar en onboarding. Zien is geloven.</p>
              <div class="og1p-hero-actions">
                <a href="#" class="og1-btn og1-btn-primary">
                  Gratis intake plannen
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="#" class="og1-btn og1-btn-outline">Bekijk het aanbod</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ FILTER BAR ══ -->
        <div class="og1p-filter-bar">
          <div class="og1-container">
            <div class="og1p-filter-buttons" id="og1p-filters"></div>
          </div>
        </div>

        <!-- ══ PORTFOLIO GRID ══ -->
        <section class="og1-section" style="background: var(--warm-white);">
          <div class="og1-container">
            <p class="og1p-intro-note">De meeste video's in dit portfolio zijn demo's gemaakt voor fictieve merken. Ze tonen de kwaliteit en stijl van ons werk.</p>
            <div class="og1p-grid" id="og1p-grid"></div>
          </div>
        </section>

        <!-- ══ CTA ══ -->
        <section class="og1p-cta">
          <div class="og1p-cta-orb"></div>
          <div class="og1-container">
            <div class="og1p-cta-inner">
              <span class="og1-eyebrow" style="color:var(--sand)">Jouw merk in beeld?</span>
              <h2 class="og1-display-md og1p-r">Plan een gratis intake</h2>
              <p class="og1p-r og1p-r-d1">Ontdek wat AI-video voor jouw organisatie kan betekenen — zonder verplichtingen.</p>
              <div class="og1p-r og1p-r-d2">
                <a href="#" class="og1-btn og1-btn-primary og1-btn-lg">Gratis intake plannen</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ VIDEO MODAL ══ -->
        <div class="og1p-modal" id="og1p-video-modal">
          <div class="og1p-modal-inner" id="og1p-modal-inner">
            <button class="og1p-modal-close" id="og1p-modal-close">&#x2715;</button>
            <video id="og1p-modal-video" controls playsinline></video>
            <p class="og1p-modal-title" id="og1p-modal-title"></p>
          </div>
        </div>
      `;
      this._setup();
    }

    _setup() {
      const filterContainer = this.querySelector('#og1p-filters');
      FILTERS.forEach((f, i) => {
        const btn = document.createElement('button');
        btn.className = 'og1p-filter-btn' + (i === 0 ? ' active' : '');
        btn.textContent = f.label;
        btn.dataset.filter = f.key;
        btn.addEventListener('click', () => {
          this.querySelectorAll('.og1p-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this._filterCards(f.key);
        });
        filterContainer.appendChild(btn);
      });

      const grid = this.querySelector('#og1p-grid');
      VIDEOS.forEach(v => {
        const card = document.createElement('div');
        card.className = 'og1p-card og1p-r';
        card.dataset.category = getFilterKey(v.category);
        const thumbHtml = '<div class="og1p-thumb-wrap">'
          + '<img class="og1p-thumb" src="' + v.poster + '" alt="' + v.title + '" loading="lazy">'
          + '<div class="og1p-play-overlay"><div class="og1p-play-btn">&#9654;</div></div>'
          + '</div>';
        const footerHtml = '<div class="og1p-card-footer">'
          + '<div class="og1p-card-title">' + v.title + '</div>'
          + '<div class="og1p-card-meta">'
          + '<span class="og1p-card-brand">' + v.brand + '</span>'
          + (v.demo ? '<span class="og1p-badge og1p-badge-demo">Demo</span>' : '')
          + '</div>'
          + '<p class="og1p-card-description">' + v.description + '</p>'
          + '</div>';
        card.innerHTML = thumbHtml + footerHtml;
        card.addEventListener('click', () => this._openModal(v));
        grid.appendChild(card);
      });

      const modal = this.querySelector('#og1p-video-modal');
      const modalClose = this.querySelector('#og1p-modal-close');
      if (modalClose) modalClose.addEventListener('click', () => this._closeModal());
      if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) this._closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') this._closeModal(); });

      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1p-r').forEach(el => io.observe(el));
    }

    _filterCards(filterKey) {
      this.querySelectorAll('.og1p-card').forEach(card => {
        if (filterKey === 'all' || card.dataset.category === filterKey) {
          card.classList.remove('og1p-card-hidden');
        } else {
          card.classList.add('og1p-card-hidden');
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
