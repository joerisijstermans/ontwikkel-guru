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
.og1-hero-simple { background: var(--color-navy); min-height: 280px; display: flex; align-items: center; padding: 48px 0 64px; }
.og1-hero-simple h1 { font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; color: white; }
.og1-hero-simple p { color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-top: 14px; }
.og1-service-section { padding: var(--section-pad) 0; }
.og1-service-section-odd { background: var(--color-warm-white); }
.og1-service-section-even { background: var(--color-sand); }
.og1-service-section-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.og1-service-tag { display: inline-block; font-size: 0.7rem; font-weight: 700; color: var(--color-indigo); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 10px; background: rgba(92,79,246,0.08); padding: 4px 10px; border-radius: 20px; }
.og1-service-section h2 { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.025em; margin-bottom: 14px; }
.og1-service-section p { color: var(--color-text-muted); line-height: 1.75; }
.og1-service-benefits { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.og1-service-benefit { display: flex; align-items: flex-start; gap: 10px; font-size: 0.95rem; }
.og1-benefit-check { color: var(--color-indigo); font-weight: 700; flex-shrink: 0; margin-top: 2px; }
.og1-deliverables-box { background: var(--color-white); border: 1px solid var(--color-border); border-radius: 10px; padding: 20px 24px; margin-top: 24px; }
.og1-deliverables-box h4 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--color-text-muted); margin-bottom: 8px; font-weight: 600; }
.og1-deliverables-box p { font-size: 0.9rem; color: var(--color-text); }
.og1-service-visual { border-radius: 16px; background: var(--color-navy); aspect-ratio: 4/3; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-card); }
.og1-service-visual-icon { font-size: 5rem; opacity: 0.35; }
.og1-faq-section { background: var(--color-navy); padding: var(--section-pad) 0; }
.og1-faq-section h2 { color: var(--color-white); margin-bottom: 40px; text-align: center; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.025em; }
.og1-faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
.og1-faq-item { border-bottom: 1px solid rgba(255,255,255,0.1); }
.og1-faq-question { display: flex; justify-content: space-between; align-items: center; padding: 22px 4px; cursor: pointer; color: var(--color-white); font-weight: 600; font-size: 1rem; gap: 16px; user-select: none; background: none; border: none; width: 100%; text-align: left; font-family: 'Inter', sans-serif; }
.og1-faq-chevron { color: var(--color-indigo); font-size: 1.1rem; transition: transform 0.25s; flex-shrink: 0; }
.og1-faq-item.open .og1-faq-chevron { transform: rotate(180deg); }
.og1-faq-answer { overflow: hidden; max-height: 0; transition: max-height 0.35s ease; }
.og1-faq-answer p { color: rgba(255,255,255,0.7); font-size: 0.95rem; padding: 0 4px 20px; line-height: 1.75; }
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
  .og1-service-section-inner { grid-template-columns: 1fr; gap: 32px; }
  .og1-footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  :root { --section-pad: 56px; }
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

  const SERVICES = [
    {
      num: '01', icon: '🎓', title: 'AI Workshops',
      desc: 'Wij verzorgen praktische AI-workshops voor teams van elke omvang en elk niveau. Na afloop weet je team precies welke AI-tools relevant zijn en hoe je ze inzet in je dagelijkse werk.',
      benefits: ['Hands-on op locatie of online', 'Volledig afgestemd op jouw branche', 'Resultaat: je team gebruikt AI direct erna'],
      deliverables: 'Workshopmateriaal, praktijkopdrachten, naslag-gids.'
    },
    {
      num: '02', icon: '⚡', title: 'AI Automatisering',
      desc: 'Wij brengen in kaart welke processen in jouw organisatie voor automatisering in aanmerking komen en bouwen slimme AI-workflows die je direct tijd en geld besparen.',
      benefits: ['Tijdsbesparing van 5–20 uur per week', 'Minder fouten, meer consistentie', 'Schaalbaar en aanpasbaar'],
      deliverables: 'Werkende automatisering, documentatie, instructievideo.'
    },
    {
      num: '03', icon: '🎭', title: 'AI Avatar & Personalisatie',
      desc: 'Wij maken voor jou een AI-avatar van jezelf of een medewerker. Vervolgens genereren wij gepersonaliseerde video\'s op maat — in elke taal, voor elke doelgroep.',
      benefits: ['Eenmalig opnemen, onbeperkt inzetten', 'Gepersonaliseerd op naam, rol of branche', 'White label beschikbaar'],
      deliverables: 'Avatar-setup, video\'s op maat, white label optie.'
    },
    {
      num: '04', icon: '🎬', title: 'AI Campagnevideo',
      desc: 'Wij genereren cinematic video-content voor social media, campagnes en events. Geen camera, geen crew, geen locatie — wel spectaculair resultaat.',
      benefits: ['Sneller dan traditionele productie', 'Flexibel in stijl en formaat', 'Geschikt voor social, campagne en events'],
      deliverables: 'Video\'s in gewenste formaten, aangeleverd als MP4.'
    },
    {
      num: '05', icon: '🧭', title: 'AI Strategie & Advies',
      desc: 'Wij denken strategisch met je mee over hoe AI past bij jouw organisatie. Geen advies dat in een la verdwijnt — wél een concreet plan dat je direct kunt uitvoeren.',
      benefits: ['Onafhankelijk advies, jouw belang centraal', 'Concreet en uitvoerbaar', 'Inclusief prioriteitenmatrix'],
      deliverables: 'AI-scan, roadmap, implementatieplan, prioriteitenmatrix.'
    }
  ];

  const FAQS = [
    { q: 'Voor welke bedrijven werken jullie?', a: 'Voor MKB-bedrijven in Nederland die serieus aan de slag willen met AI. Van 5 tot 500 medewerkers — de schaal maakt niet uit, de wil om te verbeteren wel.' },
    { q: 'Wat kost een project?', a: 'Dat hangt af van de dienst en omvang. Een intake is altijd gratis. Daarna maken we een voorstel op maat — zonder verrassingen.' },
    { q: 'Hoe snel zien we resultaat?', a: 'Bij workshops en video: binnen dagen. Bij automatisering: doorgaans binnen 2–4 weken. Bij strategie: de roadmap lever je uit in de eerste sessie.' },
    { q: 'Is mijn data veilig?', a: 'Ja. We werken met vertrouwde, GDPR-conforme tools en gebruiken nooit klantdata voor training van AI-modellen.' },
    { q: 'Kunnen jullie ook White Label leveren?', a: 'Ja. Zowel de avatar-video\'s als de workshop-content kunnen volledig worden geleverd onder de huisstijl van jouw organisatie.' }
  ];

  class Og1Aanbod extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';

      const serviceHTML = SERVICES.map((s, i) => {
        const bgClass = i % 2 === 0 ? 'og1-service-section-odd' : 'og1-service-section-even';
        const benefitsHTML = s.benefits.map(b => `
          <div class="og1-service-benefit">
            <span class="og1-benefit-check">✓</span>
            <span>${b}</span>
          </div>
        `).join('');
        const reverse = i % 2 === 1 ? 'direction:rtl' : '';
        const contentDir = i % 2 === 1 ? 'direction:ltr' : '';
        return `
          <section class="og1-service-section ${bgClass}">
            <div class="og1-container">
              <div class="og1-service-section-inner" style="${reverse}">
                <div style="${contentDir}" class="og1-fade-in">
                  <span class="og1-service-tag">${s.num} — ${s.title}</span>
                  <h2>${s.title}</h2>
                  <p>${s.desc}</p>
                  <div class="og1-service-benefits">${benefitsHTML}</div>
                  <div class="og1-deliverables-box">
                    <h4>Wat je ontvangt</h4>
                    <p>${s.deliverables}</p>
                  </div>
                  <a href="#" class="og1-btn og1-btn-primary" style="margin-top:24px;">Meer weten →</a>
                </div>
                <div class="og1-service-visual og1-fade-in og1-fade-in-delay-1" style="${contentDir}">
                  <span class="og1-service-visual-icon">${s.icon}</span>
                </div>
              </div>
            </div>
          </section>
        `;
      }).join('');

      const faqHTML = FAQS.map(f => `
        <div class="og1-faq-item">
          <button class="og1-faq-question">
            <span>${f.q}</span>
            <span class="og1-faq-chevron">&#8964;</span>
          </button>
          <div class="og1-faq-answer">
            <p>${f.a}</p>
          </div>
        </div>
      `).join('');

      this.innerHTML = `
        <!-- HERO -->
        <div class="og1-hero-simple">
          <div class="og1-container">
            <h1>Wat wij voor je doen</h1>
            <p>Vijf diensten, één doel: AI die concreet resultaat oplevert voor jouw organisatie.</p>
          </div>
        </div>

        <!-- SERVICE SECTIONS -->
        ${serviceHTML}

        <!-- FAQ -->
        <section class="og1-faq-section">
          <div class="og1-container">
            <h2>Veelgestelde vragen</h2>
            <div class="og1-faq-list">${faqHTML}</div>
          </div>
        </section>

        <!-- CTA -->
        <section class="og1-cta-section">
          <div class="og1-container">
            <h2>Klaar om te beginnen?</h2>
            <p>Plan een gratis intakegesprek en ontdek wat AI voor jouw organisatie kan betekenen.</p>
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
      `;
      this._setup();
    }

    _setup() {
      // FAQ accordion
      this.querySelectorAll('.og1-faq-item').forEach(item => {
        const btn = item.querySelector('.og1-faq-question');
        const answer = item.querySelector('.og1-faq-answer');
        if (btn && answer) {
          btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close all
            this.querySelectorAll('.og1-faq-item').forEach(i => {
              i.classList.remove('open');
              const a = i.querySelector('.og1-faq-answer');
              if (a) a.style.maxHeight = '0';
            });
            if (!isOpen) {
              item.classList.add('open');
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }
          });
        }
      });

      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
      }, { threshold: 0.08 });
      this.querySelectorAll('.og1-fade-in').forEach(el => observer.observe(el));
    }
  }

  if (!customElements.get('og1-aanbod')) {
    customElements.define('og1-aanbod', Og1Aanbod);
  }
})();
