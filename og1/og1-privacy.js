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
.og1pr-datestamp { font-size: 0.8rem; color: #9CA3AF; margin-bottom: 2.5rem; }
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
.og1pr-section ul li { font-size: 0.925rem; color: var(--text-mid); line-height: 1.75; margin-bottom: 0.35rem; list-style: disc; }

.og1pr-table-wrap { overflow-x: auto; margin: 0.75rem 0; }
.og1pr-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
.og1pr-table th { background: var(--navy); color: var(--white); padding: 10px 14px; text-align: left; font-weight: 700; }
.og1pr-table td { padding: 9px 14px; border-bottom: 1px solid rgba(0,0,0,0.06); color: var(--text-mid); vertical-align: top; line-height: 1.65; }
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
              <p class="og1pr-hero-sub">Hoe wij omgaan met uw persoonsgegevens</p>
            </div>
          </div>
        </section>

        <!-- ══ CONTENT ══ -->
        <section class="og1pr-content">
          <div class="og1pr-container">
            <div class="og1pr-doc">

              <p class="og1pr-datestamp">Laatst bijgewerkt: 1 september 2026</p>

              <p class="og1pr-intro">
                Ontwikkel Guru hecht veel waarde aan de bescherming van uw persoonsgegevens.
                In dit privacybeleid leggen wij uit welke gegevens wij verzamelen, voor welke
                doeleinden wij deze verwerken, op welke grondslagen wij ons beroepen, met welke
                partijen wij gegevens delen, hoe lang wij gegevens bewaren en welke rechten u hebt.
                Ontwikkel Guru verwerkt persoonsgegevens in overeenstemming met de Algemene
                Verordening Gegevensbescherming (AVG/GDPR) en de Uitvoeringswet AVG (UAVG).
              </p>

              <!-- Artikel 1 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 1</span>
                  Wie zijn wij
                </div>
                <p>Ontwikkel Guru is een eenmanszaak, ingeschreven bij de Kamer van Koophandel onder nummer 90226801, gevestigd te Echt, Nederland. Wij zijn de verwerkingsverantwoordelijke voor de persoonsgegevens die in dit beleid worden beschreven.</p>
                <ul>
                  <li><strong>Handelsnaam:</strong> Ontwikkel Guru</li>
                  <li><strong>Rechtsvorm:</strong> Eenmanszaak</li>
                  <li><strong>KvK-nummer:</strong> 90226801</li>
                  <li><strong>Adres:</strong> Hulststraat 5, 6101 MH Echt, Nederland</li>
                  <li><strong>E-mail:</strong> <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a></li>
                  <li><strong>Website:</strong> <a href="https://www.ontwikkel.guru" target="_blank" rel="noopener">www.ontwikkel.guru</a></li>
                </ul>
              </div>

              <!-- Artikel 2 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 2</span>
                  Doel van dit privacybeleid
                </div>
                <p>Dit privacybeleid legt uit welke persoonsgegevens wij verzamelen, voor welke doeleinden wij deze verwerken, op welke grondslagen wij ons beroepen, met welke partijen wij gegevens delen, hoe lang wij gegevens bewaren en welke rechten u als betrokkene heeft.</p>
                <p>Dit beleid is van toepassing op alle bezoekers van onze website en op (potenti&euml;le) opdrachtgevers die gebruikmaken van onze diensten.</p>
              </div>

              <!-- Artikel 3 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 3</span>
                  Welke persoonsgegevens verwerken wij?
                </div>
                <p>Afhankelijk van de diensten die u afneemt, kunnen wij de volgende categorie&euml;n persoonsgegevens verwerken:</p>
                <ul>
                  <li><strong>Identificatie- en contactgegevens:</strong> naam, e-mailadres, telefoonnummer (indien opgegeven) en bedrijfsnaam.</li>
                  <li><strong>Bedrijfs- en factuurgegevens:</strong> KvK-nummer, BTW-nummer, factuuradres en betalingsinformatie ten behoeve van de administratie.</li>
                  <li><strong>Communicatiegegevens:</strong> berichten en e-mails die u met ons uitwisselt via het contactformulier of per e-mail.</li>
                  <li><strong>Beeldmateriaal en videomateriaal:</strong> foto's, videobeelden of aangeleverd beeldmateriaal voor AI-videoproductie of campagnecontent.</li>
                  <li><strong>Stem- en geluidmateriaal:</strong> stemopnames die worden aangeleverd voor AI-stemkloning, uitsluitend op basis van expliciete toestemming.</li>
                  <li><strong>Technische gegevens:</strong> IP-adres, browsertype, apparaattype en sessiegegevens via het Wix-platform.</li>
                </ul>
                <div class="og1pr-note">
                  <strong>Bijzondere persoonsgegevens:</strong> Wij verzamelen geen bijzondere categorie&euml;n persoonsgegevens zoals medische gegevens, biometrische identificatiegegevens, politieke opvattingen of gegevens over ras of etniciteit. Stem- en beeldmateriaal dat uitsluitend voor contentcreatie wordt gebruikt, wordt niet voor identificatiedoeleinden verwerkt.
                </div>
              </div>

              <!-- Artikel 4 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 4</span>
                  Doeleinden en rechtsgrondslag
                </div>
                <p>Wij verwerken persoonsgegevens uitsluitend voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden:</p>
                <ul>
                  <li><strong>Dienstverlening en opdrachtuitvoering:</strong> het uitvoeren van workshops, AI-videoproducties, automatiseringen en adviestrajecten. Grondslag: uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Facturering en financieel-administratieve verwerking:</strong> het opstellen en verwerken van offertes en facturen en het bijhouden van de boekhouding. Grondslag: uitvoering van de overeenkomst en wettelijke verplichting (art. 6 lid 1 sub b en c AVG).</li>
                  <li><strong>Communicatie en klantenservice:</strong> het beantwoorden van vragen via het contactformulier of per e-mail en het informeren over de voortgang van opdrachten. Grondslag: uitvoering van de overeenkomst of gerechtvaardigd belang (art. 6 lid 1 sub b/f AVG).</li>
                  <li><strong>AI-dienstverlening:</strong> bij de uitvoering van AI-videoproducties, automatiseringsprojecten en workshops delen wij minimale projectinformatie met AI-dienstverleners. Wij vermijden het doorgeven van onnodige persoonsgegevens. Grondslag: uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Stem- en beeldproducties:</strong> bij het aanleveren van stem- of beeldmateriaal voor AI-avatarproducties verwerken wij dit materiaal uitsluitend voor de overeengekomen productie. Grondslag: toestemming (art. 6 lid 1 sub a AVG) of uitvoering van de overeenkomst (art. 6 lid 1 sub b AVG).</li>
                  <li><strong>Naleving van wettelijke verplichtingen:</strong> belastingadministratie en het voldoen aan andere wettelijke bewaarplichten. Grondslag: wettelijke verplichting (art. 6 lid 1 sub c AVG).</li>
                </ul>
                <p>Wij versturen geen commerci&euml;le nieuwsbrief zonder uw uitdrukkelijke toestemming. Indien verwerking plaatsvindt op basis van toestemming, heeft u het recht deze te allen tijde in te trekken (zie artikel 10).</p>
              </div>

              <!-- Artikel 5 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 5</span>
                  AI-tools en gegevensbescherming
                </div>
                <p>Bij de uitvoering van onze diensten maken wij gebruik van AI-platforms zoals <strong>HeyGen</strong> (AI-avatarproducties en stemkloning), <strong>Higgsfield.ai</strong> (AI-videoproductie), <strong>Anthropic Claude</strong> en <strong>OpenAI ChatGPT</strong> (automatiseringen en contentcreatie). Invoer die wij verstrekken aan deze tools wordt verwerkt via de infrastructuur van de betreffende aanbieders.</p>
                <div class="og1pr-note">
                  Wij delen geen direct identificerende persoonsgegevens (zoals namen, contactgegevens of bedrijfsgevoelige informatie) met AI-systemen, tenzij dit strikt noodzakelijk is voor de uitvoering van de opdracht en de opdrachtgever hier uitdrukkelijk schriftelijk mee heeft ingestemd. Wij adviseren ook u geen gevoelige persoonsgegevens of bijzondere categorie&euml;n persoonsgegevens in te voeren bij het gebruik van AI-tools.
                </div>
                <p>Voor AI-avatarproducties en stemkloning via HeyGen geldt dat stem- en beeldmateriaal na oplevering van de opdracht wordt verwijderd van de HeyGen-servers, tenzij schriftelijk anders overeengekomen.</p>
              </div>

              <!-- Artikel 6 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 6</span>
                  Subverwerkers en derden
                </div>
                <p>Ontwikkel Guru maakt gebruik van de volgende subverwerkers bij de uitvoering van haar diensten. Met alle verwerkers zijn, voor zover de AVG dit vereist, verwerkersovereenkomsten of vergelijkbare passende afspraken gemaakt:</p>
                <div class="og1pr-table-wrap">
                  <table class="og1pr-table">
                    <thead>
                      <tr><th>Partij</th><th>Doel</th><th>Land</th></tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Wix.com</strong></td><td>Website hosting, contactformulieren en analytische functionaliteit</td><td>VS / EU</td></tr>
                      <tr><td><strong>Web3Forms</strong></td><td>Doorsturen van contactformulierberichten naar onze e-mail</td><td>VS</td></tr>
                      <tr><td><strong>HeyGen</strong></td><td>AI-avatarproducties en stemkloning (uitsluitend bij opdrachten die dit vereisen)</td><td>VS</td></tr>
                      <tr><td><strong>Higgsfield.ai</strong></td><td>AI-videoproductie (uitsluitend bij opdrachten die dit vereisen)</td><td>VS</td></tr>
                      <tr><td><strong>Anthropic (Claude AI)</strong></td><td>AI-automatiseringen en contentontwikkeling</td><td>VS</td></tr>
                      <tr><td><strong>OpenAI (ChatGPT)</strong></td><td>AI-automatiseringen en contentontwikkeling</td><td>VS</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Wij verstrekken geen persoonsgegevens aan derden voor commerci&euml;le doeleinden zonder uw uitdrukkelijke toestemming. Overdracht naar landen buiten de EU/EER vindt uitsluitend plaats op basis van passende waarborgen, zoals Standard Contractual Clauses (SCC) of het EU-VS Data Privacy Framework, voor zover van toepassing.</p>
              </div>

              <!-- Artikel 7 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 7</span>
                  Bewaartermijnen
                </div>
                <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld, of zo lang als wettelijk verplicht. De volgende termijnen zijn van toepassing:</p>
                <ul>
                  <li><strong>Klantgegevens, offertes en projectdocumentatie:</strong> 2 jaar na afronding van de zakelijke relatie, waarna gegevens worden verwijderd of geanonimiseerd.</li>
                  <li><strong>Facturen en boekhoudkundige gegevens:</strong> 7 jaar conform de wettelijke bewaarplicht van de Belastingdienst (art. 52 AWR).</li>
                  <li><strong>Contactformulierberichten zonder vervolgopdracht:</strong> maximaal 1 jaar.</li>
                  <li><strong>Beeldmateriaal en videoproducties:</strong> wordt na oplevering verwijderd van onze systemen en die van betrokken subverwerkers, tenzij schriftelijk anders overeengekomen.</li>
                  <li><strong>Stem- en geluidmateriaal:</strong> wordt direct na oplevering verwijderd, tenzij de opdrachtgever schriftelijk heeft verzocht dit te bewaren voor toekomstige producties.</li>
                  <li><strong>AI-invoer bij externe platforms:</strong> conform het beleid van de betreffende aanbieder (Anthropic en OpenAI verwijderen invoerdata doorgaans binnen 30 dagen).</li>
                </ul>
              </div>

              <!-- Artikel 8 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 8</span>
                  Cookies en tracking
                </div>
                <p>Onze website wordt gehost via <strong>Wix.com</strong>. Wij onderscheiden de volgende categorie&euml;n cookies:</p>
                <ul>
                  <li><strong>Functionele cookies:</strong> noodzakelijk voor het correct functioneren van de website (zoals sessiebeheer). Hiervoor is geen toestemming vereist.</li>
                  <li><strong>Analytische cookies:</strong> voor het meten van websitegebruik en verbetering van de gebruikservaring, uitsluitend na expliciete opt-in.</li>
                </ul>
                <p>Wij hebben zelf geen Google Analytics, Meta Pixel of andere externe advertentienetwerken ge&iuml;nstalleerd. Bij uw eerste bezoek toont de website een cookiebanner; u kunt uw voorkeuren te allen tijde aanpassen via die banner of via uw browserinstellingen.</p>
                <p>Voor een volledig overzicht van de cookies die Wix plaatst, verwijzen wij u naar het <a href="https://support.wix.com/nl/article/cookies-en-je-wix-site" target="_blank" rel="noopener">cookiebeleid van Wix</a>.</p>
              </div>

              <!-- Artikel 9 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 9</span>
                  Beveiliging
                </div>
                <p>Ontwikkel Guru neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeautoriseerde toegang, verlies, openbaarmaking of vernietiging. Dit omvat onder meer:</p>
                <ul>
                  <li>Versleutelde gegevensoverdracht via HTTPS/TLS voor alle communicatie;</li>
                  <li>Strikt toegangsbeheer: uitsluitend geautoriseerde personen hebben toegang tot persoonsgegevens;</li>
                  <li>Twee-factor-authenticatie op systemen die persoonsgegevens bevatten;</li>
                  <li>Minimale gegevensdeling: derden ontvangen uitsluitend de informatie die zij strikt nodig hebben.</li>
                </ul>
                <p>In geval van een datalek dat waarschijnlijk nadelige gevolgen heeft voor uw rechten en vrijheden, zullen wij dit melden bij de Autoriteit Persoonsgegevens (binnen 72 uur) en u informeren conform de wettelijke meldplicht.</p>
              </div>

              <!-- Artikel 10 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 10</span>
                  Uw rechten
                </div>
                <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
                <ul>
                  <li><strong>Inzagerecht:</strong> u kunt opvragen welke persoonsgegevens wij van u verwerken.</li>
                  <li><strong>Correctierecht:</strong> u kunt onjuiste of onvolledige gegevens laten corrigeren.</li>
                  <li><strong>Recht op verwijdering:</strong> u kunt verzoeken om verwijdering van uw persoonsgegevens ('recht op vergetelheid'), voor zover wij niet wettelijk verplicht zijn deze te bewaren.</li>
                  <li><strong>Recht op verwerkingsbeperking:</strong> u kunt in bepaalde gevallen verzoeken de verwerking tijdelijk te beperken.</li>
                  <li><strong>Recht van bezwaar:</strong> u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang (art. 6 lid 1 sub f AVG).</li>
                  <li><strong>Recht op intrekking van toestemming:</strong> indien verwerking is gebaseerd op toestemming, kunt u deze te allen tijde intrekken zonder opgave van reden. Het intrekken doet geen afbreuk aan de rechtmatigheid van de verwerking v&oacute;&oacute;r de intrekking.</li>
                  <li><strong>Recht op gegevensoverdraagbaarheid:</strong> u kunt verzoeken om overdracht van uw gegevens in een gestructureerd, gangbaar en machineleesbaar formaat.</li>
                </ul>
                <p>Om een van deze rechten uit te oefenen, kunt u contact met ons opnemen via <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a>. Wij reageren binnen <strong>30 dagen</strong> op uw verzoek. Indien wij uw verzoek niet kunnen inwilligen, lichten wij toe waarom.</p>
                <p>U heeft ook het recht een klacht in te dienen bij de <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener">Autoriteit Persoonsgegevens</a>.</p>
              </div>

              <!-- Artikel 11 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 11</span>
                  Wijzigingen
                </div>
                <p>Ontwikkel Guru behoudt zich het recht voor dit privacybeleid te wijzigen, bijvoorbeeld als gevolg van wijzigingen in wet- of regelgeving, nieuwe diensten of gewijzigde verwerkingsactiviteiten. De meest actuele versie is steeds beschikbaar op onze website.</p>
                <p>Bij wezenlijke wijzigingen die uw rechten of de verwerking van uw gegevens materieel be&iuml;nvloeden, informeren wij bestaande opdrachtgevers hierover per e-mail, minimaal <strong>14 dagen</strong> v&oacute;&oacute;r de ingangsdatum van de wijziging.</p>
              </div>

              <!-- Artikel 12 -->
              <div class="og1pr-section">
                <div class="og1pr-section-title">
                  <span class="og1pr-sec-num">Artikel 12</span>
                  Contact
                </div>
                <p>Voor vragen over dit privacybeleid of de verwerking van uw persoonsgegevens kunt u contact opnemen via:</p>
                <ul>
                  <li><strong>Ontwikkel Guru</strong></li>
                  <li>E-mail: <a href="mailto:info@ontwikkel.guru">info@ontwikkel.guru</a></li>
                  <li>Website: <a href="https://www.ontwikkel.guru/contact" target="_blank" rel="noopener">www.ontwikkel.guru/contact</a></li>
                  <li>KvK: 90226801 &nbsp;&middot;&nbsp; Echt, Nederland</li>
                </ul>
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
