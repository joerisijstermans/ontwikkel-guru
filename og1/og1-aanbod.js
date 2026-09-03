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
og1-aanbod { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-aanbod * { box-sizing: border-box; margin: 0; padding: 0; }
og1-aanbod img { max-width: 100%; display: block; }
og1-aanbod a { text-decoration: none; color: inherit; }
og1-aanbod ul { list-style: none; }
og1-aanbod button { cursor: pointer; font-family: inherit; border: none; background: none; }

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
.og1a-hero {
  background: var(--navy);
  padding: 80px 0 64px;
  position: relative; overflow: hidden;
}
.og1a-hero-bg { position: absolute; inset: 0; pointer-events: none; }
.og1a-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
.og1a-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -100px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.2;
}
.og1a-hero-inner { position: relative; z-index: 1; }
.og1a-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1a-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1a-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1a-hero-h1 { color: var(--white); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1rem; }
.og1a-hero-lead { color: rgba(255,255,255,0.7); font-size: 1.1rem; max-width: 520px; line-height: 1.7; margin-bottom: 2rem; }
.og1a-hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

/* ════════════ SERVICE SECTIONS ════════════ */
.og1a-service-section { padding: var(--section-pad) 0; }
.og1a-service-section-light { background: var(--warm-white); }
.og1a-service-section-alt   { background: var(--sand-light); }
.og1a-service-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

/* Service tag */
.og1a-service-tag {
  display: inline-flex; align-items: center; padding: 5px 12px;
  border-radius: 100px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.05em;
  background: rgba(92,79,246,0.1); color: var(--indigo); margin-bottom: 1rem;
}
.og1a-service-h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.02em; color: var(--navy); margin-bottom: 1rem; }
.og1a-service-desc { color: var(--text-mid); line-height: 1.75; font-size: 1rem; margin-bottom: 1.25rem; }

/* Benefits list */
.og1a-benefits { display: flex; flex-direction: column; gap: 10px; margin: 1.25rem 0; }
.og1a-benefit { display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; color: var(--text-dark); }
.og1a-benefit-check { color: var(--indigo); font-weight: 700; flex-shrink: 0; margin-top: 2px; }

/* Deliverables box */
.og1a-deliverables {
  background: var(--white); border: 1px solid rgba(0,0,0,0.06);
  border-radius: var(--radius-md); padding: 20px 24px; margin-top: 1.5rem;
  box-shadow: var(--shadow-card);
}
.og1a-deliverables h4 { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-mid); margin-bottom: 8px; font-weight: 700; }
.og1a-deliverables p  { font-size: 0.9rem; color: var(--text-dark); }

/* Visual card */
.og1a-service-visual {
  border-radius: var(--radius-xl);
  aspect-ratio: 4/3; overflow: hidden;
  box-shadow: var(--shadow-card); position: relative;
  background: var(--navy);
}
.og1a-service-visual img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.og1a-service-visual-icon {
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  font-size: 5rem; opacity: 0.35;
}
.og1a-service-visual::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(92,79,246,0.2) 0%, transparent 60%);
  pointer-events: none;
}

/* ════════════ FAQ ════════════ */
.og1a-faq { background: var(--navy-deep); padding: var(--section-pad) 0; }
.og1a-faq-header { text-align: center; margin-bottom: 3rem; }
.og1a-faq-header h2 { color: var(--white); margin-bottom: 0.75rem; }
.og1a-faq-header p  { color: rgba(255,255,255,0.6); font-size: 1rem; }
.og1a-faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; }
.og1a-faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
.og1a-faq-question {
  display: flex; justify-content: space-between; align-items: center;
  padding: 22px 4px; cursor: pointer; color: var(--white); font-weight: 600;
  font-size: 1rem; gap: 16px; user-select: none;
  background: none; border: none; width: 100%; text-align: left; font-family: 'Inter', sans-serif;
}
.og1a-faq-chevron { color: var(--indigo-light); font-size: 1.1rem; transition: transform 0.25s; flex-shrink: 0; }
.og1a-faq-item.open .og1a-faq-chevron { transform: rotate(180deg); }
.og1a-faq-answer { overflow: hidden; max-height: 0; transition: max-height 0.35s ease; }
.og1a-faq-answer p { color: rgba(255,255,255,0.7); font-size: 0.95rem; padding: 0 4px 20px; line-height: 1.75; }

/* ════════════ CTA ════════════ */
.og1a-cta { background: var(--navy); position: relative; overflow: hidden; padding: var(--section-pad) 0; text-align: center; }
.og1a-cta-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.2; width: 500px; height: 500px; background: var(--indigo); top: -100px; right: -100px; pointer-events: none; }
.og1a-cta-inner { position: relative; z-index: 1; }
.og1a-cta-inner h2 { color: var(--white); margin-bottom: 1rem; }
.og1a-cta-inner p  { color: rgba(255,255,255,0.65); font-size: 1.05rem; margin-bottom: 2.5rem; max-width: 540px; margin-left: auto; margin-right: auto; }
.og1a-cta-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

/* ════════════ REVEAL ════════════ */
.og1a-r { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
.og1a-r.visible { opacity: 1; transform: none; }
.og1a-r-d1 { transition-delay: 0.1s; }
.og1a-r-d2 { transition-delay: 0.2s; }
.og1a-r-d3 { transition-delay: 0.3s; }

/* ════════════ RESPONSIVE ════════════ */
@media (max-width: 1024px) {
  .og1a-service-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .og1a-service-visual { display: none; }
}
@media (max-width: 768px) {
  :root { --section-pad: 64px; }
  .og1a-hero { padding: 64px 0 48px; }
  .og1a-hero-actions { flex-direction: column; align-items: flex-start; }
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

  const SERVICES = [
    {
      num: '01', icon: '🎓', title: 'AI Workshops',
      img: 'https://static.wixstatic.com/media/6c17f4_719f5ec4dff8420e9269e9721a6e5ade~mv2.jpeg',
      desc: 'Wij verzorgen praktische AI-workshops voor teams van elke omvang en elk niveau. Na afloop weet je team precies welke AI-tools relevant zijn en hoe je ze inzet in je dagelijkse werk.',
      benefits: ['Hands-on op locatie of online', 'Volledig afgestemd op jouw branche', 'Resultaat: je team gebruikt AI direct erna'],
      deliverables: 'Workshopmateriaal, praktijkopdrachten, naslag-gids.'
    },
    {
      num: '02', icon: '⚡', title: 'AI Automatisering',
      img: 'https://static.wixstatic.com/media/6c17f4_2f1eb63557614d01a49dd5cbd702fee9~mv2.png',
      desc: 'Wij brengen in kaart welke processen in jouw organisatie voor automatisering in aanmerking komen en bouwen slimme AI-workflows die je direct tijd en geld besparen.',
      benefits: ['Tijdsbesparing van 5–20 uur per week', 'Minder fouten, meer consistentie', 'Schaalbaar en aanpasbaar'],
      deliverables: 'Werkende automatisering, documentatie, instructievideo.'
    },
    {
      num: '03', icon: '🎭', title: 'AI Avatar & Personalisatie',
      img: 'https://static.wixstatic.com/media/6c17f4_1887f4cf830544e5a0a8560a42cfd9af~mv2.png',
      desc: 'Wij maken voor jou een AI-avatar van jezelf of een medewerker. Vervolgens genereren wij gepersonaliseerde video\'s op maat, in elke taal, voor elke doelgroep.',
      benefits: ['Eenmalig opnemen, onbeperkt inzetten', 'Gepersonaliseerd op naam, rol of branche', 'White label beschikbaar'],
      deliverables: 'Avatar-setup, video\'s op maat, white label optie.'
    },
    {
      num: '04', icon: '🎬', title: 'AI Campagnevideo',
      img: 'https://static.wixstatic.com/media/6c17f4_c93477b7326b451e8b1226af0c0420a1~mv2.png',
      desc: 'Wij genereren cinematic video-content voor social media, campagnes en events. Geen camera, geen crew, geen locatie. Wel spectaculair resultaat.',
      benefits: ['Sneller dan traditionele productie', 'Flexibel in stijl en formaat', 'Geschikt voor social, campagne en events'],
      deliverables: 'Video\'s in gewenste formaten, aangeleverd als MP4.'
    },
    {
      num: '05', icon: '🧭', title: 'AI Strategie & Advies',
      img: 'https://static.wixstatic.com/media/6c17f4_1c331282d12a419db33a2a793e9b429f~mv2.png',
      desc: 'Wij denken strategisch met je mee over hoe AI past bij jouw organisatie. Geen advies dat in een la verdwijnt, maar een concreet plan dat je direct kunt uitvoeren.',
      benefits: ['Onafhankelijk advies, jouw belang centraal', 'Concreet en uitvoerbaar', 'Inclusief prioriteitenmatrix'],
      deliverables: 'AI-scan, roadmap, implementatieplan, prioriteitenmatrix.'
    }
  ];

  const FAQS = [
    { q: 'Voor welke bedrijven werken jullie?', a: 'Voor MKB-bedrijven in Nederland die serieus aan de slag willen met AI. Van 5 tot 500 medewerkers. De schaal maakt niet uit, de wil om te verbeteren wel.' },
    { q: 'Wat kost een project?', a: 'Dat hangt af van de dienst en omvang. Een intake is altijd gratis. Daarna maken we een voorstel op maat — zonder verrassingen.' },
    { q: 'Hoe snel zien we resultaat?', a: 'Bij workshops en video: binnen dagen. Bij automatisering: doorgaans binnen 2-4 weken. Bij strategie: in de eerste sessie leveren we een concrete roadmap op, waarna we samen de prioriteiten en termijnen bepalen.' },
    { q: 'Is mijn data veilig?', a: 'Ja. We werken met zakelijke versies van Claude en ChatGPT, aangevuld met HeyGen en Higgsfield voor videoproductie. We zorgen er altijd voor dat klantdata niet wordt gebruikt voor de training van AI-modellen en werken alleen met tools waarbij we dat kunnen garanderen.' },
    { q: 'Kunnen jullie ook White Label leveren?', a: 'Ja. Zowel de avatar-video\'s als de workshop-content kunnen volledig worden geleverd onder de huisstijl van jouw organisatie.' }
  ];

  class Og1Aanbod extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';

      const serviceHTML = SERVICES.map((s, i) => {
        const sectionClass = i % 2 === 0 ? 'og1a-service-section-light' : 'og1a-service-section-alt';
        const benefitsHTML = s.benefits.map(b => `
          <div class="og1a-benefit">
            <span class="og1a-benefit-check">✓</span>
            <span>${b}</span>
          </div>
        `).join('');
        // Alternate layout direction with RTL trick
        const innerStyle = i % 2 === 1 ? 'direction:rtl' : '';
        const contentStyle = i % 2 === 1 ? 'direction:ltr' : '';
        return `
          <section class="og1a-service-section ${sectionClass}">
            <div class="og1-container">
              <div class="og1a-service-inner" style="${innerStyle}">
                <div style="${contentStyle}" class="og1a-r">
                  <span class="og1a-service-tag">${s.num} — ${s.title}</span>
                  <h2 class="og1a-service-h2">${s.title}</h2>
                  <p class="og1a-service-desc">${s.desc}</p>
                  <div class="og1a-benefits">${benefitsHTML}</div>
                  <div class="og1a-deliverables">
                    <h4>Wat je ontvangt</h4>
                    <p>${s.deliverables}</p>
                  </div>
                  <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary og1a-r og1a-r-d1" style="margin-top:1.5rem;">
                    Meer weten
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
                <div class="og1a-service-visual og1a-r og1a-r-d1" style="${contentStyle}">
                  ${s.img ? `<img src="${s.img}" alt="${s.title}" loading="lazy">` : `<span class="og1a-service-visual-icon">${s.icon}</span>`}
                </div>
              </div>
            </div>
          </section>
        `;
      }).join('');

      const faqHTML = FAQS.map(f => `
        <div class="og1a-faq-item">
          <button class="og1a-faq-question">
            <span>${f.q}</span>
            <span class="og1a-faq-chevron">&#8964;</span>
          </button>
          <div class="og1a-faq-answer">
            <p>${f.a}</p>
          </div>
        </div>
      `).join('');

      this.innerHTML = `
        <!-- ══ HERO ══ -->
        <section class="og1a-hero">
          <div class="og1a-hero-bg">
            <div class="og1a-hero-grid"></div>
            <div class="og1a-hero-orb"></div>
          </div>
          <div class="og1-container">
            <div class="og1a-hero-inner">
              <div class="og1a-eyebrow-row">
                <div class="og1a-eyebrow-line"></div>
                <span class="og1a-eyebrow-text">Ons aanbod</span>
              </div>
              <h1 class="og1a-hero-h1">Wat wij voor je doen</h1>
              <p class="og1a-hero-lead">Vijf diensten, één doel: AI die concreet resultaat oplevert voor jouw organisatie.</p>
              <div class="og1a-hero-actions">
                <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary">
                  Gratis intake plannen
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="https://www.ontwikkel.guru/portfolio" class="og1-btn og1-btn-outline">Bekijk het portfolio</a>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ SERVICE SECTIONS ══ -->
        ${serviceHTML}

        <!-- ══ FAQ ══ -->
        <section class="og1a-faq">
          <div class="og1-container">
            <div class="og1a-faq-header og1a-r">
              <span class="og1-eyebrow" style="color:var(--sand)">FAQ</span>
              <h2 class="og1-display-md">Veelgestelde vragen</h2>
              <p>Alles wat je wilt weten, beknopt beantwoord.</p>
            </div>
            <div class="og1a-faq-list">${faqHTML}</div>
          </div>
        </section>

        <!-- ══ CTA ══ -->
        <section class="og1a-cta">
          <div class="og1a-cta-orb"></div>
          <div class="og1-container">
            <div class="og1a-cta-inner">
              <span class="og1-eyebrow" style="color:var(--sand)">Nieuwsgierig?</span>
              <h2 class="og1-display-md og1a-r">Klaar om te beginnen?</h2>
              <p class="og1a-r og1a-r-d1">Plan een gratis intakegesprek en ontdek wat AI voor jouw organisatie kan betekenen.</p>
              <div class="og1a-cta-actions og1a-r og1a-r-d2">
                <a href="https://www.ontwikkel.guru/contact" class="og1-btn og1-btn-primary og1-btn-lg">Gratis intake plannen</a>
                <a href="https://www.ontwikkel.guru/portfolio" class="og1-btn og1-btn-outline og1-btn-lg">Bekijk het portfolio</a>
              </div>
            </div>
          </div>
        </section>
      `;
      this._setup();
    }

    _setup() {
      // FAQ accordion
      this.querySelectorAll('.og1a-faq-item').forEach(item => {
        const btn = item.querySelector('.og1a-faq-question');
        const answer = item.querySelector('.og1a-faq-answer');
        if (btn && answer) {
          btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            this.querySelectorAll('.og1a-faq-item').forEach(i => {
              i.classList.remove('open');
              const a = i.querySelector('.og1a-faq-answer');
              if (a) a.style.maxHeight = '0';
            });
            if (!isOpen) {
              item.classList.add('open');
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }
          });
        }
      });

      // Scroll reveal
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1a-r').forEach(el => io.observe(el));
    }
  }

  if (!customElements.get('og1-aanbod')) {
    customElements.define('og1-aanbod', Og1Aanbod);
  }
})();
