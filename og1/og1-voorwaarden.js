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
og1-voorwaarden { display: block; font-family: 'Inter', system-ui, sans-serif; }
og1-voorwaarden * { box-sizing: border-box; margin: 0; padding: 0; }
og1-voorwaarden a { text-decoration: none; color: var(--indigo); }
og1-voorwaarden a:hover { text-decoration: underline; }

.og1v-container { max-width: 860px; margin: 0 auto; padding: 0 2rem; }

/* ════════════ HERO ════════════ */
.og1v-hero {
  background: var(--navy); padding: 80px 0 56px;
  position: relative; overflow: hidden;
}
.og1v-hero-grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px; pointer-events: none;
}
.og1v-hero-orb {
  position: absolute; width: 400px; height: 400px;
  background: var(--indigo); top: -120px; right: -100px;
  border-radius: 50%; filter: blur(80px); opacity: 0.18; pointer-events: none;
}
.og1v-hero-inner { position: relative; z-index: 1; }
.og1v-eyebrow-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.25rem; }
.og1v-eyebrow-line { width: 32px; height: 2px; background: var(--indigo); flex-shrink: 0; }
.og1v-eyebrow-text { color: var(--sand); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.og1v-hero-h1 { color: var(--white); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 0.75rem; }
.og1v-hero-sub { color: rgba(255,255,255,0.55); font-size: 0.9rem; }

/* ════════════ CONTENT ════════════ */
.og1v-content { background: var(--warm-white); padding: 72px 0 96px; }
.og1v-doc {
  background: var(--white); border-radius: var(--radius-lg);
  border: 1px solid rgba(0,0,0,0.06); box-shadow: var(--shadow-card);
  padding: 3rem 3.5rem;
}
.og1v-intro { font-size: 0.95rem; color: var(--text-mid); line-height: 1.75; margin-bottom: 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid rgba(0,0,0,0.07); }

.og1v-article { margin-bottom: 2.5rem; }
.og1v-article:last-child { margin-bottom: 0; }
.og1v-article-title {
  font-size: 1.05rem; font-weight: 800; color: var(--navy);
  margin-bottom: 0.75rem; padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(92,79,246,0.15);
  display: flex; align-items: baseline; gap: 0.75rem;
}
.og1v-art-num {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  color: var(--indigo); text-transform: uppercase; white-space: nowrap;
}
.og1v-article p { font-size: 0.925rem; color: var(--text-mid); line-height: 1.8; margin-bottom: 0.6rem; }
.og1v-article p:last-child { margin-bottom: 0; }
.og1v-article ul { margin: 0.5rem 0 0.6rem 1.25rem; }
.og1v-article ul li { font-size: 0.925rem; color: var(--text-mid); line-height: 1.75; margin-bottom: 0.25rem; list-style: disc; }

.og1v-meta {
  margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.07);
  font-size: 0.8rem; color: rgba(74,85,104,0.6); line-height: 1.7;
}

@media (max-width: 768px) {
  .og1v-doc { padding: 2rem 1.5rem; }
  .og1v-hero { padding: 64px 0 40px; }
  :root { --section-pad: 64px; }
}
@media (max-width: 480px) {
  .og1v-container { padding: 0 1rem; }
  .og1v-doc { padding: 1.5rem 1rem; }
}
`;

  if (!document.getElementById('og1-styles')) {
    const s = document.createElement('style');
    s.id = 'og1-styles';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  class Og1Voorwaarden extends HTMLElement {
    connectedCallback() {
      if (this._init) return;
      this._init = true;
      this.style.display = 'block';
      this.innerHTML = `
        <!-- ══ HERO ══ -->
        <section class="og1v-hero">
          <div class="og1v-hero-grid"></div>
          <div class="og1v-hero-orb"></div>
          <div class="og1v-container">
            <div class="og1v-hero-inner">
              <div class="og1v-eyebrow-row">
                <div class="og1v-eyebrow-line"></div>
                <span class="og1v-eyebrow-text">Juridisch</span>
              </div>
              <h1 class="og1v-hero-h1">Algemene Voorwaarden</h1>
              <p class="og1v-hero-sub">Geldig vanaf 1 september 2026 &mdash; Ontwikkel Guru, Echt</p>
            </div>
          </div>
        </section>

        <!-- ══ CONTENT ══ -->
        <section class="og1v-content">
          <div class="og1v-container">
            <div class="og1v-doc">

              <p class="og1v-intro">
                Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten en overeenkomsten van Ontwikkel Guru,
                gevestigd te Echt en ingeschreven bij de Kamer van Koophandel onder nummer 90226801.
                Door een opdracht te verstrekken of een offerte te accepteren, gaat de opdrachtgever akkoord met deze voorwaarden.
              </p>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 1</span>
                  Identiteit van de ondernemer
                </div>
                <p><strong>Handelsnaam:</strong> Ontwikkel Guru</p>
                <p><strong>Rechtsvorm:</strong> Eenmanszaak</p>
                <p><strong>KvK-nummer:</strong> 90226801</p>
                <p><strong>Vestigingsplaats:</strong> Echt, Nederland</p>
                <p><strong>E-mail:</strong> <a href="mailto:info@businessbaas.com">info@businessbaas.com</a></p>
                <p><strong>Website:</strong> <a href="https://www.ontwikkel.guru" target="_blank" rel="noopener">www.ontwikkel.guru</a></p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 2</span>
                  Toepasselijkheid
                </div>
                <p>2.1 &nbsp;Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Ontwikkel Guru en de opdrachtgever, tenzij schriftelijk uitdrukkelijk anders is overeengekomen.</p>
                <p>2.2 &nbsp;Afwijking van of aanvulling op deze voorwaarden is slechts geldig indien dit uitdrukkelijk en schriftelijk is overeengekomen.</p>
                <p>2.3 &nbsp;De toepasselijkheid van eventuele inkoopvoorwaarden of andere voorwaarden van de opdrachtgever wordt uitdrukkelijk van de hand gewezen.</p>
                <p>2.4 &nbsp;Indien de opdrachtgever handelt als consument, zijn, voor zover relevant, tevens de wettelijke bepalingen inzake consumentenbescherming van toepassing.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 3</span>
                  Offertes en totstandkoming overeenkomst
                </div>
                <p>3.1 &nbsp;Alle offertes van Ontwikkel Guru zijn vrijblijvend en geldig gedurende 30 dagen, tenzij in de offerte een andere termijn is vermeld.</p>
                <p>3.2 &nbsp;Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk (inclusief per e-mail) accepteert of een opdracht verstrekt.</p>
                <p>3.3 &nbsp;Mondelinge toezeggingen binden Ontwikkel Guru uitsluitend nadat en voor zover deze schriftelijk zijn bevestigd.</p>
                <p>3.4 &nbsp;Alle diensten zijn maatwerk en worden op basis van een offerte aangeboden. Er zijn geen vaste prijslijsten.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 4</span>
                  Uitvoering van de opdracht
                </div>
                <p>4.1 &nbsp;Ontwikkel Guru zal de opdracht naar beste inzicht en vermogen uitvoeren, overeenkomstig de eisen van goed vakmanschap.</p>
                <p>4.2 &nbsp;Ontwikkel Guru heeft het recht bepaalde werkzaamheden te laten verrichten door derden. Dit ontslaat Ontwikkel Guru niet van haar verplichtingen jegens de opdrachtgever.</p>
                <p>4.3 &nbsp;De opdrachtgever is verantwoordelijk voor het tijdig aanleveren van alle informatie, materialen en medewerking die Ontwikkel Guru nodig heeft voor de uitvoering van de opdracht. Vertraging als gevolg van het niet tijdig aanleveren van benodigde informatie komt voor rekening van de opdrachtgever.</p>
                <p>4.4 &nbsp;Eventuele (op)leverings- of uitvoeringstermijnen zijn indicatief, tenzij schriftelijk uitdrukkelijk als fatale termijn overeengekomen.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 5</span>
                  Prijzen en meerwerk
                </div>
                <p>5.1 &nbsp;Alle prijzen zijn exclusief btw, tenzij uitdrukkelijk anders vermeld.</p>
                <p>5.2 &nbsp;Indien de opdrachtgever wijzigingen aanbrengt in de oorspronkelijke opdracht die leiden tot meer werk, is Ontwikkel Guru gerechtigd de meerkosten in rekening te brengen. Ontwikkel Guru zal de opdrachtgever zo spoedig mogelijk informeren over mogelijke meerkosten.</p>
                <p>5.3 &nbsp;Gemaakte reiskosten en andere out-of-pocket kosten worden, tenzij anders overeengekomen, separaat in rekening gebracht.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 6</span>
                  Betaling en aanbetaling
                </div>
                <p>6.1 &nbsp;Facturen dienen te worden voldaan binnen <strong>14 kalenderdagen</strong> na factuurdatum, tenzij schriftelijk anders overeengekomen.</p>
                <p>6.2 &nbsp;Bij opdrachten boven &euro; 500,- (excl. btw) is Ontwikkel Guru gerechtigd een <strong>aanbetaling van 30%</strong> van het offertebedrag te verlangen bij het verstrekken van de opdracht. Het resterende bedrag wordt gefactureerd bij of na oplevering.</p>
                <p>6.3 &nbsp;Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en is Ontwikkel Guru gerechtigd de wettelijke (handels)rente in rekening te brengen, alsmede buitengerechtelijke incassokosten conform de staffel van het Besluit vergoeding voor buitengerechtelijke incassokosten.</p>
                <p>6.4 &nbsp;Bezwaren tegen de hoogte van een factuur schorten de betalingsverplichting niet op.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 7</span>
                  Annulering en opzegging
                </div>
                <p>7.1 &nbsp;Annulering van een opdracht of workshop dient schriftelijk te geschieden. De volgende annuleringsregeling is van toepassing:</p>
                <ul>
                  <li><strong>Meer dan 14 kalenderdagen</strong> voor de geplande datum of startdatum: geen kosten.</li>
                  <li><strong>Tussen 7 en 14 kalenderdagen</strong> voor de geplande datum: 50% van het overeengekomen bedrag is verschuldigd.</li>
                  <li><strong>Minder dan 7 kalenderdagen</strong> voor de geplande datum of bij no-show: 100% van het overeengekomen bedrag is verschuldigd.</li>
                </ul>
                <p>7.2 &nbsp;Reeds betaalde aanbetalingen worden verrekend met eventueel verschuldigde annuleringskosten.</p>
                <p>7.3 &nbsp;Ontwikkel Guru heeft het recht een opdracht te annuleren in geval van overmacht. In dat geval worden reeds betaalde bedragen, voor zover geen kosten zijn gemaakt, gerestitueerd.</p>
                <p>7.4 &nbsp;Bij doorlopende opdrachten geldt een opzegtermijn van <strong>30 kalenderdagen</strong>, tenzij schriftelijk anders overeengekomen.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 8</span>
                  Vertrouwelijkheid
                </div>
                <p>8.1 &nbsp;Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst van elkaar hebben ontvangen. Informatie geldt als vertrouwelijk als dit door de andere partij is medegedeeld of als dit voortvloeit uit de aard van de informatie.</p>
                <p>8.2 &nbsp;Deze geheimhoudingsplicht geldt niet voor informatie die reeds openbaar was of is geworden buiten toedoen van de ontvangende partij, of die de ontvangende partij uit een andere rechtmatige bron heeft verkregen.</p>
                <p>8.3 &nbsp;Ontwikkel Guru behoudt zich het recht voor om met toestemming van de opdrachtgever gerealiseerde projecten te gebruiken als referentie of in het portfolio.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 9</span>
                  Intellectueel eigendom
                </div>
                <p>9.1 &nbsp;Alle door Ontwikkel Guru vervaardigd materiaal — waaronder video's, teksten, ontwerpen, scripts en automatiseringen — blijft eigendom van Ontwikkel Guru totdat de opdrachtgever de bijbehorende factuur volledig heeft voldaan.</p>
                <p>9.2 &nbsp;Na volledige betaling verkrijgt de opdrachtgever een niet-exclusief, niet-overdraagbaar gebruiksrecht voor het overeengekomen doel en de overeengekomen periode, tenzij uitdrukkelijk anders overeengekomen.</p>
                <p>9.3 &nbsp;Het is de opdrachtgever niet toegestaan het opgeleverde materiaal zonder voorafgaande schriftelijke toestemming van Ontwikkel Guru te bewerken, te sub-licenseren of te verveelvoudigen voor andere doeleinden dan waarvoor het is geleverd.</p>
                <p>9.4 &nbsp;Ontwikkel Guru mag de door de opdrachtgever aangeleverde materialen, logo's en content gebruiken uitsluitend ten behoeve van de uitvoering van de opdracht.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 10</span>
                  Aansprakelijkheid
                </div>
                <p>10.1 &nbsp;Ontwikkel Guru is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming, en slechts voor zover dit door haar verzekering wordt gedekt, dan wel tot maximaal het bedrag van de betreffende factuur (excl. btw).</p>
                <p>10.2 &nbsp;Ontwikkel Guru is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst, gemiste besparingen of schade door bedrijfsstagnatie.</p>
                <p>10.3 &nbsp;De opdrachtgever vrijwaart Ontwikkel Guru voor aanspraken van derden die verband houden met door de opdrachtgever aangeleverd materiaal of inbreuk op rechten van derden.</p>
                <p>10.4 &nbsp;De aansprakelijkheidsbeperking geldt niet in geval van opzet of bewuste roekeloosheid van Ontwikkel Guru.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 11</span>
                  Overmacht
                </div>
                <p>11.1 &nbsp;Onder overmacht wordt verstaan iedere omstandigheid buiten de macht van Ontwikkel Guru die nakoming van de overeenkomst verhindert of ernstig bemoeilijkt, waaronder maar niet beperkt tot: ziekte, storingen bij AI-platforms of hostingproviders, internetuitval, overheidsbeslissingen of andere externe calamiteiten.</p>
                <p>11.2 &nbsp;In geval van overmacht worden de verplichtingen van Ontwikkel Guru opgeschort. Indien de overmacht langer dan 30 dagen duurt, hebben beide partijen het recht de overeenkomst schriftelijk te ontbinden zonder recht op schadevergoeding.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 12</span>
                  Klachten
                </div>
                <p>12.1 &nbsp;Klachten over de geleverde diensten dienen binnen <strong>14 dagen</strong> na ontdekking schriftelijk en gemotiveerd te worden gemeld bij Ontwikkel Guru via <a href="mailto:info@businessbaas.com">info@businessbaas.com</a>.</p>
                <p>12.2 &nbsp;Ontwikkel Guru zal binnen 14 dagen op de klacht reageren. Indien een klacht gegrond is, zal Ontwikkel Guru de werkzaamheden kosteloos herstellen of een passende oplossing aanbieden.</p>
                <p>12.3 &nbsp;Het indienen van een klacht schort de betalingsverplichting niet op.</p>
              </div>

              <div class="og1v-article">
                <div class="og1v-article-title">
                  <span class="og1v-art-num">Artikel 13</span>
                  Toepasselijk recht en geschillen
                </div>
                <p>13.1 &nbsp;Op alle overeenkomsten tussen Ontwikkel Guru en de opdrachtgever is uitsluitend <strong>Nederlands recht</strong> van toepassing.</p>
                <p>13.2 &nbsp;Geschillen worden in eerste instantie zoveel mogelijk in onderling overleg opgelost. Indien partijen er niet uitkomen, worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement Limburg, tenzij dwingend recht een andere rechter voorschrijft.</p>
              </div>

              <div class="og1v-meta">
                <p>Handelsnaam: Ontwikkel Guru &nbsp;&middot;&nbsp; KvK: 90226801 &nbsp;&middot;&nbsp; Echt, Nederland</p>
                <p>Versie: september 2026 &nbsp;&middot;&nbsp; <a href="https://www.ontwikkel.guru/privacybeleid">Privacybeleid</a></p>
              </div>

            </div>
          </div>
        </section>
      `;
    }
  }

  if (!customElements.get('og1-voorwaarden')) {
    customElements.define('og1-voorwaarden', Og1Voorwaarden);
  }
})();
