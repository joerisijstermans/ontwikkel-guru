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
  --transition:   0.25s cubic-bezier(0.4,0,0.2,1);
  --container-max:1200px;
  --section-pad:  100px;
}
og1-privacy { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-privacy * { box-sizing: border-box; margin: 0; padding: 0; }
og1-privacy a { text-decoration: none; color: var(--indigo); }
og1-privacy a:hover { text-decoration: underline; }

.og1pr-container { max-width: 860px; margin: 0 auto; padding: 0 2rem; }

/* ════════════ HERO ════════════ */
.og1pr-hero {
  background: var(--navy); padding: 80px 0 56px;
  position: relative; overflow: hidden;
}
.og1pr-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px; pointer-events: none;
}
.og1pr-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -120px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.18; pointer-events: none;
}
.og1pr-hero-inner { position: relative; z-index: 1; }
.og1pr-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1pr-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1pr-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1pr-hero-h1 { color: var(--white); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
.og1pr-hero-sub { color: rgba(255,255,255,0.55); font-size: 0.9rem; }

/* ════════════ CONTENT ════════════ */
.og1pr-content { background: var(--warm-white); padding: 72px 0 96px; }
.og1pr-doc {
  background: var(--white); border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.06); box-shadow: var(--shadow-card);
  padding: 3rem 3.5rem;
}
.og1pr-intro { font-size: 0.95rem; color: var(--text-mid); line-height: 1.75; margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(0,0,0,0.07); }

.og1pr-section { margin-bottom: 2.5rem; }
.og1pr-section:last-child { margin-bottom: 0; }
.og1pr-section-title {
  font-size: 1.05rem; font-weight: 800; color: var(--navy);
  margin-bottom: 0.75rem; padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(92,79,246,0.15);
  display: flex; align-items: baseline; gap: 0.75rem;
}
.og1pr-sec-num {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--indigo); text-transform: uppercase; white-space: nowrap;
}
.og1pr-section p { font-size: 0.925rem; color: var(--text-mid); line-height: 1.8; margin-bottom: 0.6rem; }
.og1pr-section p:last-child { margin-bottom: 0; }
.og1pr-section ul { margin: 0.5rem 0 0.6rem 1.25rem; }
.og1pr-section ul li { font-size: 0.925rem; color: var(--text-mid); line-height: 1.75; margin-bottom: 0.25rem; list-style: disc; }

.og1pr-table-wrap { overflow-x: auto; margin: 0.75rem 0; }
.og1pr-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.og1pr-table th { background: var(--navy); color: var(--white); padding: 10px 14px; text-align: left; font-weight: 700; }
.og1pr-table td { padding: 9px 14px; border-bottom: 1px solid rgba(0,0,0,0.06); color: var(--text-mid); vertical-align: top; }
.og1pr-table tr:nth-child(even) td { background: rgba(92,79,246,0.03); }

.og1pr-meta {
  margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.07);
  font-size: 0.8rem; color: rgba(74,85,104,0.6); line-height: 1.7;
}

@media (max-width: 768px) {
  .og1pr-doc { padding: 2rem 1.5rem; }
  .og1pr-hero { padding: 64px 0 40px; }
  :root { --section-pad: 64px; }
}
@media (max-width: 480px) {
  .og1pr-container { padding: 0 1rem; }
  .og1pr-doc { padding: 1.5rem 1rem; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1Privacy extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- ══ HERO ══ -->
        <section class="og1pr-hero">
          <div class="og1pr-hero-grid"></div>
          <div class="og1pr-hero-orb"></div>
          <div class="og1pr-container">
            <div class="og1pr-hero-inner">
              <div class="og1pr-eyebrow-row">
                <div class="og1pr-eyebrow-line"></div>
                <span class="og1pr-eyebrow-text">Juridisch</span>
              </div>
              <h1 class="og1pr-hero-h1">Privacybeleid</h1>
              <p class="og1pr-hero-sub">Geldig vanaf 1 september 2026 &mdash; Ontwikkel Guru, Echt</p>
            </div>
          </div>
        </section>

        <!-- ══ CONTENT ══ -->
        <section class="og1pr-content">
          <div class="og1pr-container">
            <div class="og1pr-doc">

              <p class="og1pr-intro">
                Ontwikkel Guru, gevestigd te Echt en ingeschreven bij de Kamer van Koophandel onder nummer 90226801,
                hecht veel waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid leggen wij uit welke
                gegevens wij verzamelen, waarom, hoe lang wij deze bewaren en met wie wij ze delen.
                Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
              </p>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 1</span>
                  Verantwoordelijke
                </div>
                <p>De verwerkingsverantwoordelijke voor uw persoonsgegevens is:</p>
                <p><strong>Ontwikkel Guru</strong> (eenmanszaak)<br>
                KvK: 90226801 &nbsp;&middot;&nbsp; Echt, Nederland<br>
                E-mail: <a href="mailto:info@businessbaas.com">info@businessbaas.com</a><br>
                Website: <a href="https://www.ontwikkel.guru" target="_blank" rel="noopener">www.ontwikkel.guru</a></p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 2</span>
                  Welke persoonsgegevens verwerken wij?
                </div>
                <p>Wij verwerken de volgende persoonsgegevens, afhankelijk van de situatie:</p>
                <div class="og1pr-table-wrap">
                  <table class="og1pr-table">
                    <thead>
                      <tr><th>Gegeven</th><th>Wanneer</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Naam</td><td>Contactformulier, offerte, opdrachtverstrekking</td></tr>
                      <tr><td>E-mailadres</td><td>Contactformulier, offertetraject, facturering</td></tr>
                      <tr><td>Telefoonnummer</td><td>Indien vrijwillig opgegeven via contactformulier of e-mail</td></tr>
                      <tr><td>Bedrijfsnaam en -gegevens</td><td>Zakelijke opdrachten en facturering</td></tr>
                      <tr><td>Betalingsgegevens</td><td>Facturering (via onze boekhoudsoftware)</td></tr>
                      <tr><td>Beeldmateriaal / videomateriaal</td><td>Indien u ons uw beeldmateriaal aanlevert voor AI-videoproductie</td></tr>
                      <tr><td>IP-adres / cookiedata</td><td>Wix websitebezoek (zie artikel 8)</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Wij verwerken uitsluitend gegevens die u actief aan ons verstrekt of die noodzakelijk zijn voor de uitvoering van de overeengekomen dienst.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 3</span>
                  Doeleinden en rechtsgrondslag
                </div>
                <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
                <ul>
                  <li><strong>Uitvoering van de overeenkomst</strong> &mdash; om onze diensten te kunnen leveren (rechtsgrondslag: uitvoering overeenkomst, art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Facturering en administratie</strong> &mdash; voor het opstellen en verwerken van facturen (rechtsgrondslag: wettelijke verplichting, art. 6 lid 1 sub c AVG).</li>
                  <li><strong>Communicatie</strong> &mdash; om uw vragen te beantwoorden en u te informeren over de voortgang van uw opdracht (rechtsgrondslag: uitvoering overeenkomst of gerechtvaardigd belang, art. 6 lid 1 sub b/f AVG).</li>
                  <li><strong>Producties met beeldmateriaal</strong> &mdash; wanneer u beeldmateriaal aanlevert voor AI-videowerk, verwerken wij dit uitsluitend ten behoeve van de opdracht (rechtsgrondslag: uitvoering overeenkomst).</li>
                </ul>
                <p>Wij versturen geen commerci&euml;le nieuwsbrief zonder uw uitdrukkelijke toestemming.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 4</span>
                  Bewaartermijnen
                </div>
                <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk:</p>
                <ul>
                  <li><strong>Klantgegevens en offertes:</strong> 2 jaar na het einde van de zakelijke relatie.</li>
                  <li><strong>Facturen en boekhoudkundige gegevens:</strong> 7 jaar conform de wettelijke bewaarplicht (Belastingdienst).</li>
                  <li><strong>Contactformulierberichten (zonder opdracht):</strong> maximaal 1 jaar.</li>
                  <li><strong>Beeldmateriaal voor producties:</strong> wordt na oplevering van de opdracht verwijderd, tenzij schriftelijk anders overeengekomen.</li>
                </ul>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 5</span>
                  Subverwerkers en derden
                </div>
                <p>Voor de uitvoering van onze diensten maken wij gebruik van de volgende verwerkers. Met alle subverwerkers zijn, voor zover vereist, verwerkersovereenkomsten of vergelijkbare afspraken gemaakt:</p>
                <div class="og1pr-table-wrap">
                  <table class="og1pr-table">
                    <thead>
                      <tr><th>Partij</th><th>Doel</th><th>Land</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Wix.com</strong></td><td>Website hosting en contactformulieren</td><td>VS / EU</td></tr>
                      <tr><td><strong>Web3Forms</strong></td><td>Verwerking contactformulierberichten</td><td>VS</td></tr>
                      <tr><td><strong>GitHub / jsDelivr</strong></td><td>Hosting van websitecomponenten (JS-bestanden)</td><td>VS</td></tr>
                      <tr><td><strong>HeyGen</strong></td><td>AI-avatarvideos (indien opdracht dit vereist)</td><td>VS</td></tr>
                      <tr><td><strong>Higgsfield.ai</strong></td><td>AI-videoproductie (indien opdracht dit vereist)</td><td>VS</td></tr>
                      <tr><td><strong>Anthropic (Claude)</strong></td><td>AI-automatiseringen en contentcreatie</td><td>VS</td></tr>
                      <tr><td><strong>OpenAI</strong></td><td>AI-automatiseringen en contentcreatie</td><td>VS</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Gegevens worden uitsluitend gedeeld met derden voor zover dit noodzakelijk is voor de uitvoering van uw opdracht. Wij verstrekken uw gegevens nooit aan derden voor commerci&euml;le doeleinden zonder uw toestemming.</p>
                <p>Overdracht naar landen buiten de EU vindt uitsluitend plaats op basis van passende waarborgen (Standard Contractual Clauses of adequaatheidsbesluit).</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 6</span>
                  Beveiliging
                </div>
                <p>Ontwikkel Guru neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies of misbruik. Dit omvat onder andere het gebruik van versleutelde verbindingen (HTTPS) en toegangsbeveiliging voor systemen die persoonsgegevens bevatten.</p>
                <p>Bij een datalek dat mogelijk gevolgen heeft voor uw rechten en vrijheden, zullen wij u en de Autoriteit Persoonsgegevens informeren conform de wettelijke meldplicht.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 7</span>
                  Uw rechten
                </div>
                <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
                <ul>
                  <li><strong>Inzagerecht</strong> &mdash; u kunt opvragen welke gegevens wij van u verwerken.</li>
                  <li><strong>Correctierecht</strong> &mdash; u kunt onjuiste gegevens laten corrigeren.</li>
                  <li><strong>Recht op vergetelheid</strong> &mdash; u kunt verzoeken uw gegevens te verwijderen, voor zover wij niet wettelijk verplicht zijn deze te bewaren.</li>
                  <li><strong>Recht op beperking</strong> &mdash; u kunt verzoeken de verwerking van uw gegevens te beperken.</li>
                  <li><strong>Recht op overdraagbaarheid</strong> &mdash; u kunt uw gegevens in een gestructureerd formaat opvragen.</li>
                  <li><strong>Recht van bezwaar</strong> &mdash; u kunt bezwaar maken tegen de verwerking op basis van gerechtvaardigd belang.</li>
                </ul>
                <p>U kunt uw verzoek sturen naar <a href="mailto:info@businessbaas.com">info@businessbaas.com</a>. Wij reageren binnen 30 dagen. U heeft ook het recht een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 8</span>
                  Cookies
                </div>
                <p>Onze website wordt gehost via <strong>Wix.com</strong>. Wix plaatst functionele en analytische cookies die noodzakelijk zijn voor het goed functioneren van de website. Wij plaatsen zelf geen aanvullende tracking- of advertentiecookies (zoals Google Analytics of Meta Pixel).</p>
                <p>Voor meer informatie over de cookies die Wix plaatst, verwijzen wij u naar het <a href="https://support.wix.com/nl/article/cookies-en-je-wix-site" target="_blank" rel="noopener">cookiebeleid van Wix</a>.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 9</span>
                  Wijzigingen
                </div>
                <p>Ontwikkel Guru behoudt zich het recht voor dit privacybeleid te wijzigen. Wijzigingen worden gepubliceerd op deze pagina met vermelding van de ingangsdatum. Wij adviseren u dit beleid periodiek te raadplegen.</p>
              </div>

              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 10</span>
                  Contact
                </div>
                <p>Heeft u vragen of opmerkingen over dit privacybeleid of over de verwerking van uw persoonsgegevens? Neem dan contact met ons op:</p>
                <p><strong>Ontwikkel Guru</strong><br>
                E-mail: <a href="mailto:info@businessbaas.com">info@businessbaas.com</a><br>
                Website: <a href="https://www.ontwikkel.guru/contact" target="_blank" rel="noopener">www.ontwikkel.guru/contact</a></p>
              </div>

              <div class="og1pr-meta">
                <p>Handelsnaam: Ontwikkel Guru &nbsp;&middot;&nbsp; KvK: 90226801 &nbsp;&middot;&nbsp; Echt, Nederland</p>
                <p>Versie: september 2026 &nbsp;&middot;&nbsp; <a href="https://www.ontwikkel.guru/algemene-voorwaarden">Algemene Voorwaarden</a></p>
              </div>

            </div>
          </div>
        </section>
      `;
    }
  }

  if (!customElements.get('og1-privacy')) {
    customElements.define('og1-privacy', Og1Privacy);
  }
})();
