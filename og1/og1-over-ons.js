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
og1-over-ons { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-over-ons * { box-sizing: border-box; margin: 0; padding: 0; }
og1-over-ons img { max-width: 100%; display: block; }
og1-over-ons a { text-decoration: none; color: inherit; }
og1-over-ons ul { list-style: none; }
og1-over-ons button { cursor: pointer; font-family: inherit; border: none; background: none; }

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

/* ════════════ HERO ════════════ */
.og1o-hero {
  background: var(--navy);
  padding: 80px 0 64px;
  position: relative; overflow: hidden;
}
.og1o-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.og1o-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.og1o-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -100px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.2;
}
.og1o-hero-inner { position: relative; z-index: 1; }
.og1o-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1o-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1o-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1o-hero-h1 { color: var(--white); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1rem; }
.og1o-hero-lead { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 560px; line-height: 1.7; margin-bottom: 2rem; }
.og1o-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* ════════════ ABOUT JOERI ════════════ */
.og1o-about { background: var(--warm-white); }
.og1o-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

/* Tag chip */
.og1o-tag {
  display: inline-flex; align-items: center; padding: 5px 12px;
  border-radius: 100px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em;
  background: rgba(92,79,246,0.1); color: var(--indigo); margin-bottom: 1rem;
}
.og1o-about-h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; color: var(--navy); margin-bottom: 1rem; }
.og1o-about-p { color: var(--text-mid); line-height: 1.75; font-size: 1rem; margin-bottom: 0.75rem; }
.og1o-skill-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 1.5rem; }
.og1o-skill-chip {
  background: rgba(13,22,48,0.07); color: var(--navy);
  font-size: 0.8rem; font-weight: 600; padding: 6px 14px;
  border-radius: 100px; border: 1px solid rgba(13,22,48,0.12);
}

/* Avatar card — dark */
.og1o-avatar-card {
  background: var(--navy); border-radius: var(--radius-xl);
  padding: 3rem 2.5rem; display: flex; flex-direction: column;
  align-items: center; text-align: center; gap: 1rem;
  position: relative; overflow: hidden;
}
.og1o-avatar-card::before {
  content: ''; position: absolute; top: -60px; right: -60px;
  width: 200px; height: 200px; background: var(--indigo);
  border-radius: 50%; filter: blur(60px); opacity: 0.2;
}
.og1o-avatar-ring {
  width: 96px; height: 96px; border-radius: 50%;
  border: 2px solid rgba(92,79,246,0.6);
  background: linear-gradient(135deg, rgba(92,79,246,0.35), rgba(13,22,48,0.6));
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 48px rgba(92,79,246,0.35); position: relative; z-index: 1;
}
.og1o-avatar-letters { font-size: 2rem; font-weight: 900; color: var(--white); letter-spacing: -0.02em; }
.og1o-avatar-name { color: var(--white); font-size: 1.05rem; font-weight: 700; position: relative; z-index: 1; }
.og1o-avatar-role { color: rgba(255,255,255,0.55); font-size: 0.8rem; position: relative; z-index: 1; }
.og1o-avatar-badges { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; position: relative; z-index: 1; }
.og1o-avatar-badge {
  background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85);
  font-size: 0.78rem; font-weight: 600; padding: 5px 12px;
  border-radius: 100px; border: 1px solid rgba(255,255,255,0.15);
}
.og1o-avatar-quote {
  font-size: 0.85rem; color: rgba(255,255,255,0.55); line-height: 1.65;
  max-width: 220px; font-style: italic; position: relative; z-index: 1;
}

/* ════════════ BUSINESSBAAS ════════════ */
.og1o-bb { background: var(--navy-deep); }
.og1o-bb-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-lg); padding: 3rem;
  display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;
}
.og1o-bb-title { color: var(--white); font-size: 1.6rem; font-weight: 800; margin-bottom: 1rem; }
.og1o-bb-desc { color: rgba(255,255,255,0.65); line-height: 1.75; font-size: 0.95rem; margin-bottom: 1.5rem; }
.og1o-bb-visual {
  background: var(--navy); border-radius: var(--radius-lg);
  padding: 2.5rem; text-align: center; display: flex;
  flex-direction: column; gap: 1rem; align-items: center;
  border: 1px solid rgba(255,255,255,0.08);
}
.og1o-bb-visual-icon { font-size: 3rem; }
.og1o-bb-visual-name { color: var(--white); font-weight: 700; font-size: 1.05rem; }
.og1o-bb-visual-desc { color: rgba(255,255,255,0.55); font-size: 0.875rem; line-height: 1.6; }

/* ════════════ PARTNERSHIP ════════════ */
.og1o-partnership { background: var(--warm-white); }
.og1o-partnership-card {
  background: var(--white); border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.06); box-shadow: var(--shadow-card);
  padding: 2.5rem; display: flex; gap: 2rem; align-items: flex-start;
  transition: var(--transition); position: relative; overflow: hidden;
}
.og1o-partnership-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: var(--indigo); transform: scaleX(0); transform-origin: left;
  transition: transform var(--transition);
}
.og1o-partnership-card:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
.og1o-partnership-card:hover::before { transform: scaleX(1); }
.og1o-partnership-icon { font-size: 2.5rem; flex-shrink: 0; }
.og1o-partnership-h3 { font-size: 1.2rem; font-weight: 700; color: var(--navy); margin-bottom: 0.5rem; }
.og1o-partnership-p { color: var(--text-mid); line-height: 1.75; font-size: 0.95rem; margin-bottom: 1rem; }

/* ════════════ VALUES ════════════ */
.og1o-values { background: var(--navy); }
.og1o-values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.og1o-value-card {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md); padding: 2rem;
  transition: var(--transition);
}
.og1o-value-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(92,79,246,0.4); transform: translateY(-3px); }
.og1o-value-icon { font-size: 2rem; margin-bottom: 1rem; }
.og1o-value-h3 { font-size: 1.1rem; font-weight: 700; color: var(--white); margin-bottom: 0.5rem; }
.og1o-value-p  { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.65; }

/* ════════════ CTA ════════════ */
.og1o-cta { background: var(--navy-deep); position: relative; overflow: hidden; padding: var(--section-pad) 0; text-align: center; }
.og1o-cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2; width: 500px; height: 500px; background: var(--indigo); top: -100px; right: -100px; pointer-events: none; }
.og1o-cta-inner { position: relative; z-index: 1; }
.og1o-cta-inner h2 { color: var(--white); margin-bottom: 1rem; }
.og1o-cta-inner p  { color: rgba(255,255,255,0.65); font-size: 1.05rem; margin-bottom: 2.5rem; max-width: 540px; margin-left: auto; margin-right: auto; }
.og1o-cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ════════════ REVEAL ════════════ */
.og1o-r { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1o-r.visible { opacity: 1; transform: none; }
.og1o-r-d1 { transition-delay: 0.1s; }
.og1o-r-d2 { transition-delay: 0.2s; }
.og1o-r-d3 { transition-delay: 0.3s; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 1024px) {
  .og1o-bb-card { grid-template-columns: 1fr; }
  .og1o-values-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 64px; }
  .og1o-hero { padding: 64px 0 48px; }
  .og1o-about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .og1o-values-grid { grid-template-columns: 1fr; }
  .og1o-partnership-card { flex-direction: column; }
  .og1o-hero-actions { flex-direction: column; align-items: flex-start; }
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

  class Og1OverOns extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- ══ HERO ══ -->
        <section class="og1o-hero">
          <div class="og1o-hero-bg">
            <div class="og1o-hero-grid"></div>
            <div class="og1o-hero-orb"></div>
          </div>
          <div class="og1-container">
            <div class="og1o-hero-inner">
              <div class="og1o-eyebrow-row">
                <div class="og1o-eyebrow-line"></div>
                <span class="og1o-eyebrow-text">Over mij</span>
              </div>
              <h1 class="og1o-hero-h1">Achter Ontwikkel Guru</h1>
              <p class="og1o-hero-lead">Ik ben Joeri Sijstermans, toegepast psycholoog, tech-enthousiasteling en ondernemer. Ik help MKB-bedrijven om AI concreet en werkbaar te maken: niet als project, maar als dagelijks gereedschap.</p>
              <div class="og1o-hero-actions">
                <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary">
                  Plan een kennismaking
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="https://www.ontwikkel.guru/aanbod" class="og1-btn og1-btn-outline">Bekijk het aanbod</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ ABOUT JOERI ══ -->
        <section class="og1-section og1o-about">
          <div class="og1-container">
            <div class="og1o-about-grid">
              <div class="og1o-r">
                <span class="og1o-tag">Oprichter</span>
                <h2 class="og1o-about-h2">Hoi, ik ben Joeri</h2>
                <p class="og1o-about-p">Van huis uit ben ik toegepast psycholoog en heb ik jarenlang in het hoger onderwijs gewerkt. Naast dat werk heb ik altijd ondernemerschap in me gehad — ik heb door de jaren heen diverse bedrijven opgezet, grotendeels in de zakelijke dienstverlening.</p>
                <p class="og1o-about-p">Tech zit me al in mijn bloed vanaf mijn elfde. Ik haalde mijn eerste computer uit elkaar, bouwde op de middelbare school een eigen website waarop klasgenoten spelletjes konden spelen, en hielp iedereen in het dorp met computers en websites. Niet als hobby — gewoon omdat het logisch was.</p>
                <p class="og1o-about-p">Toen ik BusinessBaas startte, een platform dat startende ondernemers van idee naar eerste betalende klanten begeleidt, bouwde ik Nova: de eerste volledig functionele AI businesscoach van Nederland. Dat was het moment dat ik zag hoeveel er mogelijk is — én hoeveel MKB-bedrijven achterblijven omdat ze niet weten waar te beginnen. Daar is Ontwikkel Guru uit voortgekomen.</p>
                <div class="og1o-skill-chips">
                  <span class="og1o-skill-chip">Toegepast Psycholoog</span>
                  <span class="og1o-skill-chip">AI Specialist</span>
                  <span class="og1o-skill-chip">Ondernemer</span>
                  <span class="og1o-skill-chip">Trainer & Coach</span>
                </div>
                <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary" style="margin-top:1.75rem;">
                  Plan een kennismaking
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div class="og1o-avatar-card og1o-r og1o-r-d1">
                <div class="og1o-avatar-ring">
                  <span class="og1o-avatar-letters">JS</span>
                </div>
                <div class="og1o-avatar-name">Joeri Sijstermans</div>
                <div class="og1o-avatar-role">Oprichter — Ontwikkel Guru</div>
                <div class="og1o-avatar-badges">
                  <span class="og1o-avatar-badge">Toegepast Psycholoog</span>
                  <span class="og1o-avatar-badge">AI Specialist</span>
                  <span class="og1o-avatar-badge">Ondernemer</span>
                </div>
                <p class="og1o-avatar-quote">"AI is geen bedreiging en geen magie. Het is een gereedschap, en ik leer je er mee te werken."</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ FOR WHO ══ -->
        <section class="og1-section og1o-values">
          <div class="og1-container">
            <div class="og1-section-header og1o-r">
              <span class="og1-eyebrow" style="color:var(--sand)">Voor wie</span>
              <h2 class="og1-display-md" style="color:var(--white)">Met wie werk ik het liefst?</h2>
              <p style="color:rgba(255,255,255,0.6);max-width:520px;margin:0 auto;">Ik help bedrijven die vooruitstrevend zijn — die nieuwe technologie niet zien als bedreiging, maar als een kans om te groeien.</p>
            </div>
            <div class="og1o-values-grid">
              <div class="og1o-value-card og1o-r">
                <div class="og1o-value-icon">&#128640;</div>
                <h3 class="og1o-value-h3">Vooruitstrevende MKB'ers</h3>
                <p class="og1o-value-p">Je wil niet achter de feiten aanlopen. Je ziet AI als een kans — en zoekt iemand die je helpt die kans concreet te maken voor jouw bedrijf.</p>
              </div>
              <div class="og1o-value-card og1o-r og1o-r-d1">
                <div class="og1o-value-icon">&#128218;</div>
                <h3 class="og1o-value-h3">Teams die willen leren</h3>
                <p class="og1o-value-p">Jouw mensen zijn nieuwsgierig en willen groeien. Ze zijn misschien sceptisch over AI — maar ze staan open. Dat is precies genoeg om mee te werken.</p>
              </div>
              <div class="og1o-value-card og1o-r og1o-r-d2">
                <div class="og1o-value-icon">&#128200;</div>
                <h3 class="og1o-value-h3">Resultaatgericht denkers</h3>
                <p class="og1o-value-p">Je wil geen eindeloos traject of theoretische presentaties. Je wil weten wat AI jou oplevert — en dat liefst zo snel mogelijk ervaren.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ BUSINESSBAAS ══ -->
        <section class="og1-section og1o-bb">
          <div class="og1-container">
            <div class="og1-section-header og1o-r" style="text-align:left;margin-bottom:2.5rem;">
              <span class="og1-eyebrow" style="color:var(--sand)">Zusterorganisatie</span>
              <h2 class="og1-display-md" style="color:var(--white)">Ook actief via BusinessBaas</h2>
            </div>
            <div class="og1o-bb-card og1o-r og1o-r-d1">
              <div>
                <p class="og1o-bb-title">BusinessBaas</p>
                <p class="og1o-bb-desc">BusinessBaas is het platform voor startende ondernemers die van een goed idee naar hun eerste betalende klanten willen. Via workshops en slimme tech — waaronder Nova, de eerste volledig functionele AI businesscoach van Nederland — helpt BusinessBaas ondernemers een vliegende start te maken.</p>
                <p class="og1o-bb-desc" style="margin-top:0.75rem;">Ontwikkel Guru en BusinessBaas zijn zusterorganisaties met dezelfde missie: mensen écht laten profiteren van AI. Waarbij BusinessBaas focust op de starter, en Ontwikkel Guru op het gevestigde MKB.</p>
                <a href="https://www.businessbaas.com" target="_blank" rel="noopener" class="og1-btn og1-btn-primary">
                  Bezoek BusinessBaas
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
              <div class="og1o-bb-visual">
                <span class="og1o-bb-visual-icon">&#129302;</span>
                <p class="og1o-bb-visual-name">Nova — AI Business Coach</p>
                <p class="og1o-bb-visual-desc">De eerste volledig functionele AI businesscoach van Nederland. 24/7 beschikbaar via BusinessBaas.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ PARTNERSHIP ══ -->
        <section class="og1-section og1o-partnership">
          <div class="og1-container">
            <div class="og1-section-header og1o-r" style="text-align:left;margin-bottom:2.5rem;">
              <h2 class="og1-display-md" style="color:var(--navy)">Samenwerking</h2>
              <p style="color:var(--text-mid);font-size:1.05rem;margin-top:0.5rem;">Partnerorganisaties die dezelfde visie delen.</p>
            </div>
            <div class="og1o-partnership-card og1o-r og1o-r-d1">
              <span class="og1o-partnership-icon">&#129309;</span>
              <div>
                <h3 class="og1o-partnership-h3">Starterscentrum Limburg × BusinessBaas</h3>
                <p class="og1o-partnership-p">Starterscentrum Limburg werkt samen met BusinessBaas om startende ondernemers in Limburg te ondersteunen met praktische AI-kennis en begeleiding. Via workshops en tools helpen ze de volgende generatie ondernemers een vliegende start te maken — met slimme tech als fundament.</p>
                <a href="https://www.businessbaas.com" target="_blank" rel="noopener" class="og1-btn og1-btn-indigo-outline">
                  Meer via BusinessBaas
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ CTA ══ -->
        <section class="og1o-cta">
          <div class="og1o-cta-orb"></div>
          <div class="og1-container">
            <div class="og1o-cta-inner">
              <span class="og1-eyebrow" style="color:var(--sand)">Nieuwsgierig?</span>
              <h2 class="og1-display-md og1o-r">Klaar om kennis te maken?</h2>
              <p class="og1o-r og1o-r-d1">Plan een gratis intakegesprek van 30 minuten en ontdek wat AI concreet voor jouw bedrijf kan doen.</p>
              <div class="og1o-cta-actions og1o-r og1o-r-d2">
                <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary og1-btn-lg">Gratis intake plannen</a>
                <a href="https://www.ontwikkel.guru/aanbod" class="og1-btn og1-btn-outline og1-btn-lg">Bekijk het aanbod</a>
              </div>
            </div>
          </div>
        </section>
      `;
      this._setup();
    }

    _setup() {
      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1o-r').forEach(el => io.observe(el));
    }
  }

  if (!customElements.get('og1-over-ons')) {
    customElements.define('og1-over-ons', Og1OverOns);
  }
})();
