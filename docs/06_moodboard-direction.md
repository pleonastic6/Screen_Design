# Moodboard Direction

Dieses Dokument übersetzt Briefing, Wireframes und Microcopy in eine belastbare visuelle Richtung. Ziel ist kein loses "sieht cool aus", sondern ein Stil, aus dem sich konsistente Screens bauen lassen.

---

## Leitidee

**Share-A-Scooter Amberg** soll wirken wie:
- urban und mobil
- technisch zuverlässig
- ruhig statt verspielt
- modern, aber nicht anonym
- klar genug für schnelle Entscheidungen im Stadtverkehr

Die App ist kein Lifestyle-Feed. Sie ist ein Mobilitätswerkzeug. Deshalb muss sie zuerst Orientierung und Vertrauen liefern, erst danach Atmosphäre.

---

## Markenwirkung

### Die App soll ausstrahlen
- **Sofort verständlich:** Nutzer müssen in Sekunden erkennen, wo Scooter stehen und was der nächste sinnvolle Schritt ist.
- **Verlässlich:** Status, Regeln und Kosten dürfen nie dekorativ versteckt sein.
- **Städtisch:** Nicht generic Silicon-Valley-App, sondern ein System für Bewegung durch die Stadt.
- **Energetisch:** Verfügbarkeit, Bewegung und Freischalten dürfen sich leicht "aktiv" anfühlen.

### Die App soll nicht ausstrahlen
- verspielt
- freundlich-weich ohne Kante
- futuristisch übertrieben
- billig-techno
- stockfoto-lastige Sharing-Marke ohne Substanz

---

## Visuelle Richtung

### Stilformel

**Dark transit UI + klare Statusfarben + ruhige Kartenoberfläche**

Die Richtung ist:
- flach und modern
- kontrastreich
- präzise statt ornamental
- mit wenigen, gezielten Leuchteffekten
- stark über Formen, Flächen und Statusfarben organisiert

### Visuelle Referenz in Worten

Wenn man die Richtung sprachlich beschreiben müsste:
- Nachtkarte einer Mobilitäts-App
- urbane Leitstelle, aber freundlich genug für Alltagsnutzung
- leichte Public-Transport- / Navigation-Anmutung
- nicht Gaming, nicht Neomorphism, nicht Corporate-Banking

---

## Farbwelt

### Primärpalette

Die bisherige Richtung aus Repo und Wireframes ist sinnvoll und kann weiterverwendet werden:

- **Petrol / Deep Teal** als Grundfläche
  - Beispiel: `#071116`
  - Beispiel: `#0c1b22`
- **Lime / Electric Mint** als positiver Akzent
  - Beispiel: `#acf1ba`
  - Beispiel: `#7ee892`
- **Off-White** für Primärtext
  - Beispiel: `#eff8f2`
- **Muted Green-Grey** für Sekundärtext
  - Beispiel: `#9cb7ad`

### Statusfarben

- **Verfügbar / aktiv / bestätigter Schritt**
  - Lime / Mint
- **Lädt / Infrastruktur / Hubs**
  - helles Cyan / Blaugrün
  - Beispiel: `#8de4ff`
- **Niedriger Akku / Achtung**
  - warmes Orange
  - Beispiel: `#ffb36b`
- **Blockiert / Fehler / nicht erlaubt**
  - gedämpftes Rot
  - Beispiel: `#ff8277`

### Farbregel

- Maximal **eine echte Primärakzentfarbe** pro Screen.
- Lime ist die Aktions- und Verfügbarkeitsfarbe.
- Orange und Rot sind reine Zustandsfarben, nicht Brandingfarben.
- Die Karte darf nicht bunter sein als die UI-Aktionslogik.

---

## Kontrast und Licht

Die Oberfläche darf dunkel sein, aber nicht matschig.

### Deshalb wichtig
- hohe Kontraste zwischen Hintergrund und Text
- Panels leicht aufgehellt gegenüber der Grundfläche
- weiche Leuchtpunkte nur an wichtigen Stellen
- Glow nur bei:
  - aktiver Auswahl
  - positiver Statusbestätigung
  - Primäraktion

### Nicht tun
- alles glühen lassen
- große Neonflächen
- dunkle Hintergründe mit zu schwachem Text

---

## Typografie

### Ziel

Die Typografie muss auf kleinen Displays schnell erfassbar sein und Statuslogik tragen.

### Empfehlung

- moderne Sans Serif
- neutral, klar, leicht technisch
- gute Differenzierung zwischen:
  - Titel
  - Status
  - Kennzahlen
  - CTA
  - Hilfstext

### Typografische Hierarchie

1. **Große Zahlen / Countdown / Preis / Akku**
2. **Screen-Titel**
3. **Karten- und Aktionslabels**
4. **Sekundärinfos / Regeln**
5. **Hinweise / Zusatztexte**

### Stilhinweise

- große Kennzahlen eher kräftig und kompakt
- Fließtexte kurz halten
- Statuschips in klarer, kleiner All-Caps- oder semibold-Sprache denkbar
- keine experimentellen Display-Fonts

---

## Formen und Oberflächen

### Formensprache

- abgerundete Rechtecke
- klare Kartenblöcke
- runde Marker
- weiche, kontrollierte Eckenradien

### Oberflächen

- dunkle Basisflächen
- leicht transluzente Overlays möglich
- feine Borders statt dicker Outlines
- Panels dürfen glassy wirken, aber nur leicht

### Was passt
- große Kartenflächen
- kompakte KPI-Karten
- Bottom Sheets mit klarer Trennung
- Sticky CTA-Bars

### Was nicht passt
- verspielte Bubble-UI
- übertriebene 3D-Schatten
- Candy-Gradienten
- zu viele verschiedene Box-Stile auf einem Screen

---

## Kartenästhetik

Die Karte ist das wichtigste visuelle Element der App. Sie muss nach Mobilität aussehen, nicht nach GIS-Tool und nicht nach Kinderillustration.

### Kartenstil

- reduziert
- leicht abstrahiert
- ruhige Straßenstruktur
- genug Tiefe, um Bewegung zu suggerieren
- nicht zu viele Labels

### Markerlogik

- Scooter als kleiner, klarer Punkt / Marker
- Ladehubs als eigene, größere Markerform
- selektierter Scooter deutlich größer oder heller
- Warnzustände über Farbe, nicht über zusätzliche Formkomplexität

### Wichtig

Man muss auf einen Blick unterscheiden können:
- verfügbar
- reserviert
- niedriger Akku
- lädt
- Ladehub
- ausgewählter Scooter

---

## Komponentenstil

### Buttons

Buttons sollen wirken:
- direkt
- modern
- kompakt
- nicht verspielt

**Primärbutton**
- Lime / Mint
- hohe Lesbarkeit
- klarer Fokuspunkt auf dem Screen

**Sekundärbutton**
- dunkle oder transparente Fläche
- sichtbare Border
- zurückhaltender als Primärbutton

### Statuschips

- kompakt
- schnell lesbar
- kleine farbliche Marker oder Punkte
- nicht wie Marketing-Tags, sondern wie echte Zustandsindikatoren

### Bottom Sheets

- wichtig für Home / Karte
- collapsed: minimal, klar, nicht zu hoch
- expanded: genau ein Scooter im Fokus
- Handle sichtbar, aber dezent

### KPI-Kacheln

Für Akku, Dauer, Preis, Countdown:
- kompakte Info-Karten
- klarer Zahlenfokus
- Sekundärlabel klein darüber oder darunter

---

## Bildsprache und Illustration

### Empfehlung

- eher UI-zentriert als bildgetrieben
- wenn Illustrationen: einfache Piktogramme oder technische, reduzierte Shapes
- Scooter als Symbol klar erkennbar
- keine Stockfotos als Hauptträger der Gestaltung

### Gute Motive
- Kartenstruktur
- Markercluster
- Bewegungspfade
- Ladepunkte / Hubs
- Schloss / Unlock / Checkmark als reduzierte Funktionssymbole

---

## Motion-Richtung

Falls im Prototyp Bewegung eine Rolle spielt:

- kurz
- funktional
- richtungsbezogen
- keine verspielten Bounces

### Passende Motion
- Bottom Sheet fährt sauber hoch
- Marker-Selection leicht skaliert oder leuchtet
- Reservierungs-Countdown wirkt präsent, aber nicht hektisch
- Zustandswechsel wie Unlock / Erfolg klar und kurz

### Nicht passend
- lange Splash-Animationen
- übertriebene Microinteractions
- permanente Leuchteffekte

---

## Tonalität im UI

Die Microcopy im Repo ist schon passend. Das Moodboard sollte denselben Ton tragen:

- knapp
- direkt
- handlungsorientiert
- statusklar

Visuell heißt das:
- wenig Fließtext
- kurze Labels
- starke CTA-Verben
- Regeln in klaren Blöcken statt in Textwänden

---

## Do / Don't

### Do
- dunkle, klare Grundfläche
- Petrol als Systembasis
- Lime als starke Aktionsfarbe
- hohe Lesbarkeit
- Kartenfokus
- klare Statushierarchie
- reduzierte, technische Icons
- einheitliche Eckenradien und Panel-Logik

### Don't
- generisches App-White-UI ohne Charakter
- violett/pink als Primärstil nur weil es "digital" aussieht
- Neon überall
- zu viele gleich starke Buttons
- überfüllte Karten
- Deko, die Regeln und Status überlagert

---

## Ergebnisbild

Wenn das Moodboard später als Screen funktioniert, sollte ein Betrachter sofort denken:

> "Das ist eine moderne, urbane Mobilitäts-App. Ich sehe sofort, wo Scooter sind, was verfügbar ist und was ich als Nächstes tun kann."

Wenn der Eindruck stattdessen ist:
- "cooles Interface, aber unklar"
- "zu verspielt"
- "zu generisch"
- "zu viele Farben"

dann ist die Richtung noch nicht sauber genug.

---

## Konkrete Designentscheidung für den nächsten Schritt

Für die weitere Arbeit würde ich diese Richtung festziehen:

### Visuelle Kurzform
- **Basis:** Deep Petrol
- **Akzent:** Lime / Mint
- **Warnung:** Orange
- **Fehler:** gedämpftes Rot
- **Typo:** moderne Sans Serif
- **UI:** klare Karten, weiche Glass-Panels, reduzierte Marker
- **Mood:** urban transit, technisch, zugänglich

### Praktische Folge

Auf dieser Basis können als Nächstes entstehen:
1. ein echtes Moodboard-Board mit Farb- und Stilreferenzen
2. ein UI-Styleframe für Home / Karte
3. eine definierte Komponentenbibliothek für Buttons, Chips, KPI-Karten und Bottom Sheets
