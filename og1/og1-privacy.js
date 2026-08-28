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

.og1pr-note {
  background: rgba(92,79,246,0.05); border-left: 3px solid var(--indigo);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  padding: 0.75rem 1rem; margin: 0.75rem 0;
  font-size: 0.875rem; color: var(--text-mid); line-height: 1.7;
}

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
                Dit beleid is opgesteld in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG /
                GDPR) en is van toepassing op alle bezoekers van onze website en op (potenti&euml;le) opdrachtgevers.
              </p>

              <!-- Artikel 1 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 1</span>
                  Verwerkingsverantwoordelijke
                </div>
                <p>De verwerkingsverantwoordelijke voor uw persoonsgegevens is:</p>
                <p>
                  <strong>Ontwikkel Guru</strong> (eenmanszaak)<br>
                  KvK: 90226801 &nbsp;&middot;&nbsp; Echt, Nederland<br>
                  E-mail: <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a><br>
                  Website: <a href="https://www.ontwikkel.guru" target="_blank" rel="noopener">www.ontwikkel.guru</a>
                </p>
              </div>

              <!-- Artikel 2 -->
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
                      <tr><td>Betalingsgegevens</td><td>Facturering (via boekhoudsoftware)</td></tr>
                      <tr><td>Beeldmateriaal / videomateriaal</td><td>Indien aangeleverd voor AI-videoproductie of avatar-diensten</td></tr>
                      <tr><td>Stem- en geluidmateriaal</td><td>Indien aangeleverd voor AI-stemkloning (uitsluitend op verzoek en met expliciete toestemming)</td></tr>
                      <tr><td>IP-adres en technische gegevens</td><td>Automatisch via Wix-websitebezoek (zie artikel 8)</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Wij verwerken uitsluitend gegevens die u actief aan ons verstrekt of die noodzakelijk zijn voor de uitvoering van de overeengekomen dienst.</p>
                <div class="og1pr-note">
                  <strong>Bijzondere persoonsgegevens:</strong> Wij verwerken geen bijzondere categorie&euml;n van persoonsgegevens zoals medische gegevens, politieke opvattingen of gegevens over ras of etniciteit. Stem- en beeldmateriaal dat uitsluitend voor contentcreatie wordt gebruikt, wordt niet voor identificatiedoeleinden verwerkt.
                </div>
              </div>

              <!-- Artikel 3 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 3</span>
                  Doeleinden en rechtsgrondslag
                </div>
                <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
                <ul>
                  <li><strong>Uitvoering van de overeenkomst</strong> &mdash; om onze diensten (workshops, automatisering, AI-video) te kunnen leveren (rechtsgrondslag: art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Facturering en administratie</strong> &mdash; voor het opstellen en verwerken van facturen en het bijhouden van onze boekhouding (rechtsgrondslag: art. 6 lid 1 sub c AVG &mdash; wettelijke verplichting).</li>
                  <li><strong>Communicatie</strong> &mdash; om uw vragen te beantwoorden en u te informeren over de voortgang van uw opdracht (rechtsgrondslag: art. 6 lid 1 sub b/f AVG).</li>
                  <li><strong>AI-dienstverlening</strong> &mdash; bij de uitvoering van AI-gerelateerde opdrachten delen wij minimale, relevant projectinformatie met AI-dienstverleners. Wij vermijden het doorgeven van onnodige persoonsgegevens aan deze systemen (rechtsgrondslag: art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Stem- en beeldproducties</strong> &mdash; wanneer u materiaal aanlevert voor AI-video of stemkloning, verwerken wij dit uitsluitend ten behoeve van de overeengekomen productie, op basis van uw toestemming (art. 6 lid 1 sub a AVG) of de uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG).</li>
                </ul>
                <p>Wij versturen geen commerci&euml;le nieuwsbrief zonder uw uitdrukkelijke toestemming. Indien verwerking plaatsvindt op basis van toestemming, heeft u te allen tijde het recht deze toestemming in te trekken (zie artikel 7).</p>
              </div>

              <!-- Artikel 4 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 4</span>
                  Bewaartermijnen
                </div>
                <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verwerkt:</p>
                <ul>
                  <li><strong>Klantgegevens, offertes en projectdocumentatie:</strong> 2 jaar na afronding van de zakelijke relatie.</li>
                  <li><strong>Facturen en boekhoudkundige gegevens:</strong> 7 jaar conform de wettelijke bewaarplicht van de Belastingdienst.</li>
                  <li><strong>Contactformulierberichten (zonder vervolgopdracht):</strong> maximaal 1 jaar.</li>
                  <li><strong>Beeldmateriaal en videoproducties:</strong> wordt na oplevering van de opdracht verwijderd van onze systemen en die van subverwerkers, tenzij schriftelijk anders overeengekomen.</li>
                  <li><strong>Stem- en geluidmateriaal:</strong> wordt direct na de productie verwijderd, tenzij de opdrachtgever schriftelijk heeft verzocht dit te bewaren voor toekomstige producties.</li>
                </ul>
              </div>

              <!-- Artikel 5 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 5</span>
                  Subverwerkers en derden
                </div>
                <p>Voor de uitvoering van onze diensten maken wij gebruik van de volgende verwerkers. Met alle subverwerkers zijn, voor zover de AVG dit vereist, verwerkersovereenkomsten of vergelijkbare passende afspraken gemaakt:</p>
                <div class="og1pr-table-wrap">
                  <table class="og1pr-table">
                    <thead>
                      <tr><th>Partij</th><th>Doel</th><th>Land</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Wix.com</strong></td><td>Website hosting, contactformulieren en cookie-/analytics-functionaliteit</td><td>VS / EU</td></tr>
                      <tr><td><strong>Web3Forms</strong></td><td>Doorsturen van contactformulierberichten naar onze e-mail</td><td>VS</td></tr>
                      <tr><td><strong>HeyGen</strong></td><td>AI-avatarvideos en stemkloning (uitsluitend bij opdrachten die dit vereisen)</td><td>VS</td></tr>
                      <tr><td><strong>Higgsfield.ai</strong></td><td>AI-videoproductie (uitsluitend bij opdrachten die dit vereisen)</td><td>VS</td></tr>
                      <tr><td><strong>Anthropic (Claude AI)</strong></td><td>AI-automatiseringen, contentontwikkeling en werkstromen</td><td>VS</td></tr>
                      <tr><td><strong>OpenAI (ChatGPT)</strong></td><td>AI-automatiseringen en contentontwikkeling</td><td>VS</td></tr>
                    </tbody>
                  </table>
                </div>
                <div class="og1pr-note">
                  Bij het gebruik van AI-tools (Anthropic, OpenAI) delen wij uitsluitend de minimaal benodigde projectinformatie. Wij verstrekken geen klantnamen, contactgegevens of andere direct identificerende persoonsgegevens aan AI-systemen, tenzij dit uitdrukkelijk noodzakelijk is voor de opdracht en de opdrachtgever hier schriftelijk mee heeft ingestemd.
                </div>
                <p>Gegevens worden nooit aan derden verstrekt voor commerci&euml;le doeleinden zonder uw toestemming. Overdracht naar landen buiten de EU/EER vindt uitsluitend plaats op basis van passende waarborgen, zoals Standard Contractual Clauses (SCC) of het EU-VS Data Privacy Framework, voor zover van toepassing.</p>
              </div>

              <!-- Artikel 6 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 6</span>
                  Beveiliging
                </div>
                <p>Ontwikkel Guru neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies, vernietiging of ongeoorloofde openbaarmaking. Dit omvat onder andere:</p>
                <ul>
                  <li>Gebruik van versleutelde verbindingen (HTTPS) voor alle communicatie;</li>
                  <li>Toegangsbeveiliging met sterke wachtwoorden en twee-factor-authenticatie op systemen die persoonsgegevens bevatten;</li>
                  <li>Minimale gegevensdeling: wij geven derden alleen toegang tot gegevens die zij strikt nodig hebben.</li>
                </ul>
                <p>Bij een datalek dat waarschijnlijk nadelige gevolgen heeft voor uw rechten en vrijheden, zullen wij dit melden bij de Autoriteit Persoonsgegevens (binnen 72 uur) en u informeren conform de wettelijke meldplicht.</p>
              </div>

              <!-- Artikel 7 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 7</span>
                  Uw rechten
                </div>
                <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
                <ul>
                  <li><strong>Inzagerecht</strong> &mdash; u kunt opvragen welke persoonsgegevens wij van u verwerken.</li>
                  <li><strong>Correctierecht</strong> &mdash; u kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
                  <li><strong>Recht op vergetelheid</strong> &mdash; u kunt verzoeken uw gegevens te verwijderen, voor zover wij niet wettelijk verplicht zijn deze te bewaren.</li>
                  <li><strong>Recht op beperking</strong> &mdash; u kunt verzoeken de verwerking tijdelijk te beperken, bijvoorbeeld terwijl een bezwaar wordt beoordeeld.</li>
                  <li><strong>Recht op overdraagbaarheid</strong> &mdash; u kunt uw gegevens in een gestructureerd, gangbaar en machine-leesbaar formaat opvragen.</li>
                  <li><strong>Recht van bezwaar</strong> &mdash; u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang (art. 6 lid 1 sub f AVG).</li>
                  <li><strong>Recht om toestemming in te trekken</strong> &mdash; indien de verwerking is gebaseerd op uw toestemming, kunt u deze te allen tijde intrekken zonder opgave van reden. Het intrekken doet geen afbreuk aan de rechtmatigheid van de verwerking v&oacute;&oacute;r de intrekking.</li>
                </ul>
                <p>U kunt uw verzoek sturen naar <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>. Wij reageren binnen <strong>30 dagen</strong>. U heeft ook het recht om een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>
              </div>

              <!-- Artikel 8 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 8</span>
                  Cookies en tracking
                </div>
                <p>Onze website wordt gehost via <strong>Wix.com</strong>. Wix plaatst functionele cookies die noodzakelijk zijn voor het correct functioneren van de website (zoals sessiebeheer). Daarnaast kan Wix analytische cookies plaatsen om websiteverkeer te meten. Wij hebben zelf geen Google Analytics, Meta Pixel of andere externe advertentienetwerken ge&iuml;nstalleerd.</p>
                <p>Bij uw eerste bezoek toont de website een cookiebanner. U kunt uw cookievoorkeuren aanpassen of intrekken via deze banner. Houd er rekening mee dat het uitschakelen van functionele cookies de werking van de website kan be&iuml;nvloeden.</p>
                <p>Voor een volledig overzicht van de cookies die Wix gebruikt, verwijzen wij u naar het <a href="https://support.wix.com/nl/article/cookies-en-je-wix-site" target="_blank" rel="noopener">cookiebeleid van Wix</a>.</p>
              </div>

              <!-- Artikel 9 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 9</span>
                  Wijzigingen
                </div>
                <p>Ontwikkel Guru behoudt zich het recht voor dit privacybeleid te wijzigen. Wijzigingen worden gepubliceerd op deze pagina met vermelding van de nieuwe ingangsdatum. Bij wezenlijke wijzigingen die van invloed zijn op de verwerking van uw gegevens, informeren wij bestaande opdrachtgevers hierover per e-mail. Wij adviseren u dit beleid periodiek te raadplegen.</p>
              </div>

              <!-- Artikel 10 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 10</span>
                  Contact
                </div>
                <p>Heeft u vragen of opmerkingen over dit privacybeleid, of wilt u een beroep doen op een van uw rechten? Neem dan contact met ons op:</p>
                <p>
                  <strong>Ontwikkel Guru</strong><br>
                  E-mail: <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a><br>
                  Website: <a href="https://www.ontwikkel.guru/contact" target="_blank" rel="noopener">www.ontwikkel.guru/contact</a>
                </p>
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
