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
og1-home { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-home * { box-sizing: border-box; margin: 0; padding: 0; }
og1-home img { max-width: 100%; display: block; }
og1-home a { text-decoration: none; color: inherit; }
og1-home ul { list-style: none; }
og1-home button { cursor: pointer; font-family: inherit; border: none; background: none; }

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
.og1h-hero {
  min-height: 100vh; background: var(--navy);
  display: flex; align-items: center;
  position: relative; overflow: hidden; padding: 60px 0 80px;
}
.og1h-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.og1h-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.25; }
.og1h-orb-1 { width: 600px; height: 600px; background: var(--indigo); top: -100px; right: -100px; }
.og1h-orb-2 { width: 400px; height: 400px; background: #3B82F6; bottom: -50px; left: 5%; opacity: 0.15; }
.og1h-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
                    linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
  background-size: 60px 60px;
}
.og1h-hero-inner {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
.og1h-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; }
.og1h-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1h-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1h-h1 { color: var(--white); margin-bottom: 1.5rem; }
.og1h-h1 .c-indigo { color: var(--indigo-light); }
.og1h-h1 .c-sand   { color: var(--sand); }
.og1h-hero-lead { color: rgba(255,255,255,0.7); font-size: 1.2rem; line-height: 1.7; margin-bottom: 2.5rem; max-width: 480px; }
.og1h-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.og1h-trust { display: flex; flex-wrap: wrap; gap: 20px; }
.og1h-trust-item { display: flex; align-items: center; gap: 6px; color: rgba(255,255,255,0.75); font-size: 0.875rem; font-weight: 500; }
.og1h-trust-check { color: #4ade80; }

/* Hero card (right column) */
.og1h-hero-visual { position: relative; }
.og1h-hero-card {
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(12px); border-radius: var(--radius-lg); overflow: hidden;
}
.og1h-hero-video-wrap { aspect-ratio: 16/10; overflow: hidden; position: relative; cursor: pointer; }
.og1h-hero-video-wrap video { width: 100%; height: 100%; object-fit: cover; }
.og1h-hero-play-overlay {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(13,22,48,0.3); opacity: 0; transition: var(--transition);
}
.og1h-hero-video-wrap:hover .og1h-hero-play-overlay { opacity: 1; }
.og1h-play-circle {
  width: 72px; height: 72px; border-radius: 50%; background: var(--indigo);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 40px rgba(92,79,246,0.5); transition: var(--transition);
}
.og1h-play-circle svg { width: 28px; height: 28px; color: white; margin-left: 4px; }
.og1h-card-foot {
  padding: 1rem 1.5rem; display: flex; align-items: center; justify-content: space-between;
}
.og1h-card-foot-label { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
.og1h-card-foot-tags { display: flex; gap: 6px; }

/* Float badges */
.og1h-float {
  position: absolute; background: var(--white); border-radius: var(--radius-md);
  padding: 14px 18px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  display: flex; align-items: center; gap: 10px;
}
.og1h-float-1 { bottom: -20px; left: -30px; }
.og1h-float-2 { top: -16px; right: -20px; }
.og1h-float-icon {
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.og1h-icon-green  { background: rgba(34,197,94,0.12); color: #16a34a; }
.og1h-icon-indigo { background: rgba(92,79,246,0.12); color: var(--indigo); }
.og1h-float-icon svg { width: 18px; height: 18px; }
.og1h-float-val  { font-weight: 700; font-size: 1rem; color: var(--navy); }
.og1h-float-desc { font-size: 0.72rem; color: var(--text-mid); }

/* ════════════ LOGO BAR ════════════ */
.og1h-logo-bar { background: var(--sand); padding: 20px 0; border-bottom: 1px solid rgba(24,33,69,0.1); }
.og1h-logo-bar-inner { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; }
.og1h-logo-label { font-size: 0.8rem; font-weight: 600; color: var(--text-mid); text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap; }
.og1h-logo-brands { display: flex; gap: 10px; flex-wrap: wrap; }
.og1h-brand-chip { background: rgba(24,33,69,0.08); color: var(--navy); font-size: 0.8rem; font-weight: 600; padding: 5px 12px; border-radius: 20px; border: 1px solid rgba(24,33,69,0.15); }

/* ════════════ STATS BAR ════════════ */
.og1h-stats-bar { background: var(--navy-deep); padding: 40px 0; }
.og1h-stats-inner { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
.og1h-stat { text-align: center; padding: 0 1rem; border-right: 1px solid rgba(255,255,255,0.08); }
.og1h-stat:last-child { border-right: none; }
.og1h-stat-num { font-size: 2.5rem; font-weight: 900; color: var(--white); letter-spacing: -0.04em; }
.og1h-stat-num span { color: var(--indigo-light); }
.og1h-stat-lbl { font-size: 0.8rem; color: var(--sand); margin-top: 4px; }

/* ════════════ PAIN SECTION ════════════ */
.og1h-pain { background: var(--warm-white); }
.og1h-pain-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
.og1h-pain-card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 2rem; border: 1px solid rgba(0,0,0,0.06);
  display: flex; align-items: flex-start; gap: 1.25rem;
  box-shadow: var(--shadow-card); transition: var(--transition);
  position: relative; overflow: hidden;
}
.og1h-pain-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--indigo); transform: scaleX(0); transform-origin: left;
  transition: transform var(--transition);
}
.og1h-pain-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1h-pain-card:hover::before { transform: scaleX(1); }
.og1h-pain-icon { font-size: 2rem; flex-shrink: 0; line-height: 1; }
.og1h-pain-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
.og1h-pain-card p  { font-size: 0.9rem; color: var(--text-mid); line-height: 1.65; }

/* ════════════ PILLARS ════════════ */
.og1h-pillars { background: var(--warm-white); padding-top: 0; }
.og1h-pillars-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; }
.og1h-pillar-card {
  background: var(--white); border-radius: var(--radius-lg);
  padding: 2.5rem; border: 1px solid rgba(0,0,0,0.06);
  transition: var(--transition); position: relative; overflow: hidden;
}
.og1h-pillar-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--indigo); transform: scaleX(0); transform-origin: left;
  transition: transform var(--transition);
}
.og1h-pillar-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1h-pillar-card:hover::before { transform: scaleX(1); }
.og1h-pillar-icon {
  width: 56px; height: 56px; border-radius: 14px;
  background: rgba(92,79,246,0.1); color: var(--indigo);
  display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;
}
.og1h-pillar-icon svg { width: 28px; height: 28px; }
.og1h-pillar-card h3 { font-size: 1.25rem; font-weight: 700; color: var(--navy); margin-bottom: 0.75rem; }
.og1h-pillar-card p  { color: var(--text-mid); font-size: 0.95rem; line-height: 1.65; }

/* ════════════ DIENSTEN ════════════ */
.og1h-diensten { background: var(--navy); }
.og1h-diensten .og1-section-header .og1-eyebrow { color: var(--sand); }
.og1h-diensten .og1-section-header h2 { color: var(--white); }
.og1h-diensten .og1-section-header p  { color: rgba(255,255,255,0.6); }
.og1h-diensten-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
.og1h-dienst-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md); padding: 2rem;
  transition: var(--transition); display: flex; flex-direction: column; gap: 1rem;
}
.og1h-dienst-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(92,79,246,0.4); transform: translateY(-3px); }
.og1h-dienst-card.featured { background: var(--indigo); border-color: transparent; }
.og1h-dienst-card.featured:hover { background: var(--indigo-light); }
.og1h-dienst-card.dashed {
  border-style: dashed; border-color: rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.02);
  align-items: center; text-align: center; justify-content: center;
}
.og1h-dienst-num { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; color: var(--sand); opacity: 0.7; }
.og1h-dienst-card.featured .og1h-dienst-num { color: rgba(255,255,255,0.5); }
.og1h-dienst-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--white); }
.og1h-dienst-card p  { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.6; flex: 1; }
.og1h-dienst-card.featured p { color: rgba(255,255,255,0.8); }
.og1h-dienst-link {
  display: flex; align-items: center; gap: 6px;
  color: var(--indigo-light); font-size: 0.85rem; font-weight: 600; margin-top: auto; transition: var(--transition);
}
.og1h-dienst-card.featured .og1h-dienst-link { color: rgba(255,255,255,0.9); }
.og1h-dienst-link svg { width: 16px; height: 16px; transition: transform var(--transition); }
.og1h-dienst-card:hover .og1h-dienst-link svg { transform: translateX(4px); }

/* ════════════ PORTFOLIO ════════════ */
.og1h-portfolio { background: var(--warm-white); }
.og1h-portfolio-head { display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem; }
.og1h-portfolio-head h2 { color: var(--navy); }
.og1h-portfolio-head p  { color: var(--text-mid); font-size: 1.05rem; margin-top: 0.5rem; }
.og1h-portfolio-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; margin-bottom: 2rem; }
.og1h-vid-card { border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-card); cursor: pointer; position: relative; background: #111; transition: var(--transition); }
.og1h-vid-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1h-vid-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; transition: opacity 0.3s; }
.og1h-vid-card:hover .og1h-vid-thumb { opacity: 0.75; }
.og1h-vid-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; transition: var(--transition); }
.og1h-vid-card:hover .og1h-vid-play { opacity: 1; }
.og1h-vid-play-btn { width: 56px; height: 56px; background: rgba(255,255,255,0.92); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--navy); padding-left: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); font-size: 1.3rem; }
.og1h-vid-foot { background: var(--white); padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.og1h-vid-title { font-size: 0.875rem; font-weight: 600; color: var(--text-dark); }
.og1h-badge { display: inline-flex; align-items: center; font-size: 0.7rem; font-weight: 700; padding: 3px 8px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
.og1h-badge-demo  { border: 1.5px solid var(--indigo); color: var(--indigo); }
.og1h-badge-brand { background: var(--sand); color: var(--navy); }
.og1h-portfolio-cta { text-align: center; }

/* ════════════ AANPAK ════════════ */
.og1h-aanpak { background: var(--sand-light); }
.og1h-aanpak-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.og1h-aanpak-eyebrow { color: var(--indigo); display: block; text-align: left; margin-bottom: 1rem; }
.og1h-aanpak h2 { color: var(--navy); margin-bottom: 1rem; }
.og1h-aanpak-lead { color: var(--text-mid); margin-bottom: 2rem; font-size: 1.05rem; }
.og1h-steps { display: flex; flex-direction: column; gap: 1rem; }
.og1h-step { display: flex; gap: 1.25rem; align-items: flex-start; background: var(--white); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; }
.og1h-step-num { width: 36px; height: 36px; border-radius: 50%; background: var(--navy); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; }
.og1h-step h4 { font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 3px; }
.og1h-step p  { font-size: 0.85rem; color: var(--text-mid); }
.og1h-aanpak-visual { background: var(--navy); border-radius: var(--radius-xl); padding: 3rem; display: flex; flex-direction: column; gap: 1.5rem; }
.og1h-quote { color: var(--white); font-size: 1.2rem; font-weight: 700; line-height: 1.5; }
.og1h-quote span { color: var(--indigo-light); }
.og1h-quote-author { display: flex; align-items: center; gap: 12px; margin-top: 1.5rem; }
.og1h-quote-avatar { width: 48px; height: 48px; border-radius: 50%; background: var(--indigo); display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 1rem; flex-shrink: 0; }
.og1h-author-name { color: var(--white); font-weight: 600; font-size: 0.9rem; }
.og1h-author-role { color: rgba(255,255,255,0.45); font-size: 0.78rem; }
.og1h-tools-block { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; }
.og1h-tools-label { color: var(--sand); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1rem; }
.og1h-tools-chips { display: flex; gap: 10px; flex-wrap: wrap; }
.og1h-tool-chip { padding: 6px 12px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; color: rgba(255,255,255,0.7); font-size: 0.78rem; font-weight: 500; }

/* ════════════ CTA ════════════ */
.og1h-cta { background: var(--navy); position: relative; overflow: hidden; }
.og1h-cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2; width: 500px; height: 500px; background: var(--indigo); top: -100px; right: -100px; pointer-events: none; }
.og1h-cta-inner { position: relative; z-index: 1; text-align: center; }
.og1h-cta-inner .og1-eyebrow { color: var(--sand); margin-bottom: 1rem; }
.og1h-cta-inner h2 { color: var(--white); margin-bottom: 1rem; }
.og1h-cta-inner p  { color: rgba(255,255,255,0.65); font-size: 1.05rem; margin-bottom: 2.5rem; }
.og1h-cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ════════════ VIDEO MODAL ════════════ */
.og1h-modal { display: none; position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.92); align-items: center; justify-content: center; padding: 24px; }
.og1h-modal.open { display: flex; }
.og1h-modal-inner { position: relative; width: 100%; max-width: 900px; }
.og1h-modal-inner.portrait { max-width: 400px; }
.og1h-modal-inner video { width: 100%; border-radius: 12px; display: block; max-height: 85vh; }
.og1h-modal-close { position: absolute; top: -48px; right: 0; background: rgba(255,255,255,0.15); color: white; width: 40px; height: 40px; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
.og1h-modal-close:hover { background: rgba(255,255,255,0.3); }
.og1h-modal-title { color: white; text-align: center; margin-top: 16px; font-size: 0.95rem; font-weight: 600; }

/* ════════════ REVEAL ════════════ */
.og1h-r { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1h-r.visible { opacity: 1; transform: none; }
.og1h-r-d1 { transition-delay: 0.1s; }
.og1h-r-d2 { transition-delay: 0.2s; }
.og1h-r-d3 { transition-delay: 0.3s; }
.og1h-r-d4 { transition-delay: 0.4s; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 1024px) {
  .og1h-hero-inner   { grid-template-columns: 1fr; }
  .og1h-hero-visual  { display: none; }
  .og1h-stats-inner  { grid-template-columns: repeat(2,1fr); }
  .og1h-stat:nth-child(2) { border-right: none; }
  .og1h-pillars-grid { grid-template-columns: 1fr 1fr; }
  .og1h-diensten-grid { grid-template-columns: 1fr 1fr; }
  .og1h-aanpak-grid  { grid-template-columns: 1fr; }
  .og1h-aanpak-visual { display: none; }
  .og1h-portfolio-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 768px) {
  :root { --section-pad: 64px; }
  .og1h-hero { padding: 80px 0 60px; }
  .og1h-pain-grid { grid-template-columns: 1fr; }
  .og1h-pillars-grid { grid-template-columns: 1fr; }
  .og1h-diensten-grid { grid-template-columns: 1fr; }
  .og1h-portfolio-grid { grid-template-columns: 1fr; }
  .og1h-stats-inner  { grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
  .og1h-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 1.5rem; }
  .og1h-stat:nth-last-child(-n+2) { border-bottom: none; }
  .og1h-hero-actions { flex-direction: column; align-items: flex-start; }
  .og1h-trust { flex-direction: column; gap: 8px; }
  .og1h-logo-bar-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
  .og1h-portfolio-head { flex-direction: column; align-items: flex-start; }
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

  const PREVIEW_VIDEOS = [
    { id:1,  title:'Brand Story GreenBite',    brand:'GreenBite',     demo:true,  aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58/720p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_ce7d9d81dc674bf384f5258ae87f3c58f001.jpg'},
    { id:10, title:'Sales pitch — Joeri',       brand:'Ontwikkel Guru',demo:false, aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_e01c602b707f4e869686a30305f6cd4e/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_e01c602b707f4e869686a30305f6cd4ef001.jpg'},
    { id:12, title:'AI-workshop — Verdant Group',brand:'Verdant Group', demo:true,  aspect:'16:9',
      url:'https://video.wixstatic.com/video/6c17f4_478de56aa9954d85a7210814a3b4e759/1080p/mp4/file.mp4',
      poster:'https://static.wixstatic.com/media/6c17f4_478de56aa9954d85a7210814a3b4e759f001.jpg'}
  ];

  class Og1Home extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `

        <!-- ══ HERO ══ -->
        <section class="og1h-hero">
          <div class="og1h-hero-bg">
            <div class="og1h-orb og1h-orb-1"></div>
            <div class="og1h-orb og1h-orb-2"></div>
            <div class="og1h-grid"></div>
          </div>
          <div class="og1-container">
            <div class="og1h-hero-inner">

              <div class="og1h-hero-content">
                <div class="og1h-eyebrow-row">
                  <div class="og1h-eyebrow-line"></div>
                  <span class="og1h-eyebrow-text">AI voor het MKB</span>
                </div>
                <h1 class="og1-display-xl og1h-h1">
                  AI die werkt<br>
                  <span class="c-indigo">voor</span> <span class="c-sand">mensen</span>
                </h1>
                <p class="og1h-hero-lead">Van AI-workshops en slimme automatisering tot cinematic videocontent en gepersonaliseerde AI-avatars — wij maken AI concreet en toepasbaar voor jouw organisatie.</p>
                <div class="og1h-hero-actions">
                  <a href="#" class="og1-btn og1-btn-primary og1-btn-lg">
                    Bekijk ons werk
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                  <a href="#" class="og1-btn og1-btn-outline og1-btn-lg">Gratis intake plannen</a>
                </div>
                <div class="og1h-trust">
                  <span class="og1h-trust-item"><span class="og1h-trust-check">✓</span> Geen technische voorkennis nodig</span>
                  <span class="og1h-trust-item"><span class="og1h-trust-check">✓</span> Binnen 2 weken resultaat</span>
                  <span class="og1h-trust-item"><span class="og1h-trust-check">✓</span> Intake altijd gratis</span>
                </div>
              </div>

              <div class="og1h-hero-visual">
                <div class="og1h-hero-card">
                  <div class="og1h-hero-video-wrap" id="og1h-hero-trigger">
                    <video autoplay muted loop playsinline>
                      <source src="https://video.wixstatic.com/video/6c17f4_99a1d8b971bb43bfad8b471f85ad2a85/1080p/mp4/file.mp4" type="video/mp4">
                    </video>
                    <div class="og1h-hero-play-overlay">
                      <div class="og1h-play-circle">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div class="og1h-card-foot">
                    <span class="og1h-card-foot-label">AI Video · AI Avatar</span>
                    <div class="og1h-card-foot-tags">
                      <span class="og1-tag og1-tag-indigo">Video</span>
                      <span class="og1-tag og1-tag-sand">Avatar</span>
                    </div>
                  </div>
                </div>
                <div class="og1h-float og1h-float-1">
                  <div class="og1h-float-icon og1h-icon-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <div class="og1h-float-val">3× meer clicks</div>
                    <div class="og1h-float-desc">Email met AI-video</div>
                  </div>
                </div>
                <div class="og1h-float og1h-float-2">
                  <div class="og1h-float-icon og1h-icon-indigo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  </div>
                  <div>
                    <div class="og1h-float-val">40% groei</div>
                    <div class="og1h-float-desc">AI avatar markt</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ LOGO BAR ══ -->
        <div class="og1h-logo-bar">
          <div class="og1-container">
            <div class="og1h-logo-bar-inner">
              <span class="og1h-logo-label">Zij werken al met AI:</span>
              <div class="og1h-logo-brands">
                <span class="og1h-brand-chip">GreenBite</span>
                <span class="og1h-brand-chip">Lumion Beauty</span>
                <span class="og1h-brand-chip">Nexora</span>
                <span class="og1h-brand-chip">Verdant Group</span>
                <span class="og1h-brand-chip">Vantage Partners</span>
                <span class="og1h-brand-chip">BusinessBaas</span>
                <span class="og1h-brand-chip">Starterscentrum Limburg</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ══ STATS BAR ══ -->
        <div class="og1h-stats-bar">
          <div class="og1-container">
            <div class="og1h-stats-inner">
              <div class="og1h-stat og1h-r">
                <div class="og1h-stat-num">65<span>%</span></div>
                <div class="og1h-stat-lbl">van groeiende NL-bedrijven draait AI-pilots</div>
              </div>
              <div class="og1h-stat og1h-r og1h-r-d1">
                <div class="og1h-stat-num">3<span>×</span></div>
                <div class="og1h-stat-lbl">hogere email click-through met video</div>
              </div>
              <div class="og1h-stat og1h-r og1h-r-d2">
                <div class="og1h-stat-num">68<span>%</span></div>
                <div class="og1h-stat-lbl">kostenbesparing contentproductie door AI</div>
              </div>
              <div class="og1h-stat og1h-r og1h-r-d3">
                <div class="og1h-stat-num">40<span>%</span></div>
                <div class="og1h-stat-lbl">jaarlijkse groei AI avatar markt</div>
              </div>
            </div>
          </div>
        </div>

        <!-- ══ PAIN ══ -->
        <section class="og1-section og1h-pain">
          <div class="og1-container">
            <div class="og1-section-header">
              <span class="og1-eyebrow">Herken je dit?</span>
              <h2 class="og1-display-md og1h-r">Je weet dat AI belangrijk is —<br>maar je weet niet waar te beginnen.</h2>
            </div>
            <div class="og1h-pain-grid">
              <div class="og1h-pain-card og1h-r">
                <span class="og1h-pain-icon">😓</span>
                <div>
                  <h3>Geen tijd voor experimenten</h3>
                  <p>Je wil AI inzetten, maar wie gaat dat uitzoeken terwijl het bedrijf gewoon doorloopt?</p>
                </div>
              </div>
              <div class="og1h-pain-card og1h-r og1h-r-d1">
                <span class="og1h-pain-icon">🌊</span>
                <div>
                  <h3>Overspoeld door keuzes</h3>
                  <p>Honderden AI-tools, duizenden beloftes — maar wat werkt écht voor jouw organisatie?</p>
                </div>
              </div>
              <div class="og1h-pain-card og1h-r og1h-r-d2">
                <span class="og1h-pain-icon">💸</span>
                <div>
                  <h3>Hoge productiekosten</h3>
                  <p>Video laten maken kost duizenden euro's en weken planning. Dat kan slimmer.</p>
                </div>
              </div>
              <div class="og1h-pain-card og1h-r og1h-r-d3">
                <span class="og1h-pain-icon">🔁</span>
                <div>
                  <h3>Steeds repetitief werk</h3>
                  <p>Je team doet dezelfde taken steeds opnieuw — terwijl AI dat in seconden kan afhandelen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ PILLARS ══ -->
        <section class="og1-section og1h-pillars">
          <div class="og1-container">
            <div class="og1-section-header">
              <span class="og1-eyebrow">Wat wij doen</span>
              <h2 class="og1-display-md og1h-r">De brug tussen mens en machine</h2>
              <p class="og1h-r og1h-r-d1">Wij combineren jarenlange ervaring in organisatieontwikkeling met de nieuwste AI-technologie. Praktisch, meetbaar en mensgericht.</p>
            </div>
            <div class="og1h-pillars-grid">
              <div class="og1h-pillar-card og1h-r">
                <div class="og1h-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>AI Workshops & Training</h3>
                <p>Hands-on sessies waarbij medewerkers écht leren werken met AI. Geen buzzwords, wel resultaat. Van halve dag tot meerdaags trainingsprogramma.</p>
              </div>
              <div class="og1h-pillar-card og1h-r og1h-r-d1">
                <div class="og1h-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>AI Content & Video</h3>
                <p>Van AI-gegenereerde productvideo's tot gepersonaliseerde avatar-presentaties. Professioneel videomateriaal zonder filmcrew of studio.</p>
              </div>
              <div class="og1h-pillar-card og1h-r og1h-r-d2">
                <div class="og1h-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <h3>Procesautomatisering</h3>
                <p>Tijdrovende taken automatiseren met AI-agents en slimme workflows. Wij analyseren, adviseren en implementeren — jij houdt tijd over voor wat echt telt.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ DIENSTEN ══ -->
        <section class="og1-section og1h-diensten">
          <div class="og1-container">
            <div class="og1-section-header">
              <span class="og1-eyebrow" style="color:var(--sand)">Ons aanbod</span>
              <h2 class="og1-display-md og1h-r" style="color:white">Vijf manieren waarop AI<br>jouw bedrijf versterkt</h2>
              <p class="og1h-r og1h-r-d1" style="color:rgba(255,255,255,0.6)">Van strategie tot uitvoering — wij leveren concrete AI-toepassingen die vandaag al impact maken.</p>
            </div>
            <div class="og1h-diensten-grid">
              <div class="og1h-dienst-card og1h-r">
                <div class="og1h-dienst-num">01</div>
                <h3>AI Workshops</h3>
                <p>Praktische workshops voor teams van elke omvang — hands-on, direct toepasbaar, afgestemd op jouw branche.</p>
                <a href="#" class="og1h-dienst-link">Meer info <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
              <div class="og1h-dienst-card featured og1h-r og1h-r-d1">
                <div class="og1h-dienst-num">02</div>
                <h3>AI Automatisering</h3>
                <p>Slimme AI-workflows die je 5–20 uur per week besparen. Minder fouten, meer consistentie, direct schaalbaar.</p>
                <a href="#" class="og1h-dienst-link">Meer info <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
              <div class="og1h-dienst-card og1h-r og1h-r-d2">
                <div class="og1h-dienst-num">03</div>
                <h3>AI Avatar & Video</h3>
                <p>Eenmalig opnemen, onbeperkt inzetten. Gepersonaliseerde video's op naam, rol of branche — in elke taal.</p>
                <a href="#" class="og1h-dienst-link">Meer info <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
              <div class="og1h-dienst-card og1h-r og1h-r-d1">
                <div class="og1h-dienst-num">04</div>
                <h3>AI Campagnevideo</h3>
                <p>Cinematic videocontent voor social media en campagnes — geen crew, geen locatie, wél spectaculair resultaat.</p>
                <a href="#" class="og1h-dienst-link">Meer info <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
              <div class="og1h-dienst-card og1h-r og1h-r-d2">
                <div class="og1h-dienst-num">05</div>
                <h3>AI Strategie & Advies</h3>
                <p>Concreet AI-plan dat je direct kunt uitvoeren. Inclusief AI-scan, roadmap en prioriteitenmatrix.</p>
                <a href="#" class="og1h-dienst-link">Meer info <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
              </div>
              <div class="og1h-dienst-card dashed og1h-r og1h-r-d3">
                <span style="font-size:2rem;margin-bottom:12px;">🤔</span>
                <h3>Weet je niet waar te beginnen?</h3>
                <p>Dat begrijpen we. Onze gratis intake helpt je de juiste keuze te maken — zonder verplichtingen.</p>
                <a href="#" class="og1-btn og1-btn-outline" style="margin-top:16px;">Gratis intake →</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ PORTFOLIO ══ -->
        <section class="og1-section og1h-portfolio">
          <div class="og1-container">
            <div class="og1h-portfolio-head">
              <div>
                <span class="og1-eyebrow" style="text-align:left">Portfolio</span>
                <h2 class="og1-display-md og1h-r">Zien is geloven</h2>
                <p class="og1h-r og1h-r-d1">Voorbeelden uit onze praktijk — van campagnevideo tot AI-avatar.</p>
              </div>
              <a href="#" class="og1-btn og1-btn-indigo-outline og1h-r">Volledig portfolio →</a>
            </div>
            <div class="og1h-portfolio-grid" id="og1h-preview-grid"></div>
          </div>
        </section>

        <!-- ══ AANPAK ══ -->
        <section class="og1-section og1h-aanpak">
          <div class="og1-container">
            <div class="og1h-aanpak-grid">
              <div>
                <span class="og1-eyebrow og1h-aanpak-eyebrow">Onze aanpak</span>
                <h2 class="og1-display-md og1h-r" style="color:var(--navy);margin-bottom:1rem;">In vier stappen van<br>idee naar AI-resultaat</h2>
                <p class="og1h-aanpak-lead og1h-r og1h-r-d1">Geen eindeloze trajecten. Wij starten snel, leveren concreet, en schalen wat werkt.</p>
                <div class="og1h-steps">
                  <div class="og1h-step og1h-r og1h-r-d1">
                    <div class="og1h-step-num">1</div>
                    <div>
                      <h4>Kennismakingsgesprek</h4>
                      <p>Gratis 30 minuten. Wij leren jouw organisatie kennen en signaleren de kansen.</p>
                    </div>
                  </div>
                  <div class="og1h-step og1h-r og1h-r-d2">
                    <div class="og1h-step-num">2</div>
                    <div>
                      <h4>AI Scan & Routekaart</h4>
                      <p>Welke processen lenen zich voor AI? Welke tools, welk tijdpad, welke ROI?</p>
                    </div>
                  </div>
                  <div class="og1h-step og1h-r og1h-r-d3">
                    <div class="og1h-step-num">3</div>
                    <div>
                      <h4>Pilot of Workshop</h4>
                      <p>We starten klein maar krachtig. Snel resultaat, snel leren, snel schalen.</p>
                    </div>
                  </div>
                  <div class="og1h-step og1h-r og1h-r-d4">
                    <div class="og1h-step-num">4</div>
                    <div>
                      <h4>Uitrol & Borging</h4>
                      <p>Implementatie in de organisatie, training van het team, blijvend effect.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="og1h-aanpak-visual og1h-r">
                <div class="og1h-quote">
                  "AI is niet de toekomst — <span>het is het heden.</span> Wie nu begint, heeft morgen de voorsprong."
                  <div class="og1h-quote-author">
                    <div class="og1h-quote-avatar">JS</div>
                    <div>
                      <div class="og1h-author-name">Joeri — Ontwikkel Guru</div>
                      <div class="og1h-author-role">Oprichter & AI-strateeg</div>
                    </div>
                  </div>
                </div>
                <div class="og1h-tools-block">
                  <div class="og1h-tools-label">Tools die wij inzetten</div>
                  <div class="og1h-tools-chips">
                    <span class="og1h-tool-chip">Higgsfield AI</span>
                    <span class="og1h-tool-chip">HeyGen</span>
                    <span class="og1h-tool-chip">ChatGPT</span>
                    <span class="og1h-tool-chip">Make.com</span>
                    <span class="og1h-tool-chip">Midjourney</span>
                    <span class="og1h-tool-chip">Claude AI</span>
                    <span class="og1h-tool-chip">Zapier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ CTA ══ -->
        <section class="og1-section og1h-cta">
          <div class="og1h-cta-orb"></div>
          <div class="og1-container">
            <div class="og1h-cta-inner">
              <span class="og1-eyebrow" style="color:var(--sand)">Nieuwsgierig?</span>
              <h2 class="og1-display-md og1h-r">Klaar om te beginnen?</h2>
              <p class="og1h-r og1h-r-d1">Plan een gratis intakegesprek en ontdek wat AI voor jouw organisatie kan betekenen — zonder verplichtingen.</p>
              <div class="og1h-cta-actions og1h-r og1h-r-d2">
                <a href="#" class="og1-btn og1-btn-primary og1-btn-lg">Gratis intake plannen</a>
                <a href="#" class="og1-btn og1-btn-outline og1-btn-lg">Bekijk het aanbod</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ VIDEO MODAL ══ -->
        <div class="og1h-modal" id="og1h-modal">
          <div class="og1h-modal-inner" id="og1h-modal-inner">
            <button class="og1h-modal-close" id="og1h-modal-close">&#x2715;</button>
            <video id="og1h-modal-video" controls playsinline></video>
            <p class="og1h-modal-title" id="og1h-modal-title"></p>
          </div>
        </div>
      `;
      this._setup();
    }

    _setup() {
      // Render portfolio cards
      const grid = this.querySelector('#og1h-preview-grid');
      if (grid) {
        PREVIEW_VIDEOS.forEach(v => {
          const card = document.createElement('div');
          card.className = 'og1h-vid-card og1h-r';
          card.innerHTML = `
            <img class="og1h-vid-thumb" src="${v.poster}" alt="${v.title}" loading="lazy">
            <div class="og1h-vid-play"><div class="og1h-vid-play-btn">&#9654;</div></div>
            <div class="og1h-vid-foot">
              <span class="og1h-vid-title">${v.title}</span>
              ${v.demo
                ? '<span class="og1h-badge og1h-badge-demo">Demo</span>'
                : '<span class="og1h-badge og1h-badge-brand">' + v.brand + '</span>'}
            </div>
          `;
          card.addEventListener('click', () => this._openModal(v));
          grid.appendChild(card);
        });
      }

      // Hero video → open in modal at full quality
      const heroTrigger = this.querySelector('#og1h-hero-trigger');
      if (heroTrigger) {
        heroTrigger.addEventListener('click', () => this._openModal({
          title: 'Ontwikkel Guru — AI die werkt voor mensen',
          aspect: '16:9',
          url: 'https://video.wixstatic.com/video/6c17f4_99a1d8b971bb43bfad8b471f85ad2a85/1080p/mp4/file.mp4'
        }));
      }

      // Modal
      const modal      = this.querySelector('#og1h-modal');
      const modalClose = this.querySelector('#og1h-modal-close');
      if (modalClose) modalClose.addEventListener('click', () => this._closeModal());
      if (modal) modal.addEventListener('click', e => { if (e.target === modal) this._closeModal(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') this._closeModal(); });

      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      this.querySelectorAll('.og1h-r').forEach(el => io.observe(el));
    }

    _openModal(v) {
      const modal = this.querySelector('#og1h-modal');
      const inner = this.querySelector('#og1h-modal-inner');
      const video = this.querySelector('#og1h-modal-video');
      const title = this.querySelector('#og1h-modal-title');
      if (!modal || !video) return;
      inner.classList.toggle('portrait', v.aspect === '9:16');
      video.src = v.url;
      if (v.poster) video.poster = v.poster;
      if (title) title.textContent = v.title;
      modal.classList.add('open');
      video.play();
    }

    _closeModal() {
      const modal = this.querySelector('#og1h-modal');
      const video = this.querySelector('#og1h-modal-video');
      if (modal) modal.classList.remove('open');
      if (video) { video.pause(); video.src = ''; }
    }
  }

  if (!customElements.get('og1-home')) {
    customElements.define('og1-home', Og1Home);
  }
})();
