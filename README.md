# Share-A-Scooter Amberg

Projektarbeit für **Screendesign SS26**.

Abgeschlossener Design- und Prototyp-Stand für eine Smartphone-App eines fiktiven E-Scooter-Sharingdienstes in Amberg.

## Dokumentation

- [docs/02_personas.md](docs/02_personas.md) – Persona-Entwürfe
- [docs/03_user-story-map.md](docs/03_user-story-map.md) – User Stories und Kernflüsse

## Links

- Hub: [https://pleonastic6.github.io/Screen_Design/](https://pleonastic6.github.io/Screen_Design/)
- Repo: [https://github.com/pleonastic6/Screen_Design.git](https://github.com/pleonastic6/Screen_Design.git)

## Repo-Struktur

- `docs/01_briefing-summary.md` – verdichtete Aufgabenanalyse
- `docs/02_personas.md` – Persona-Entwürfe
- `docs/03_user-story-map.md` – User Stories und Kernflüsse
- `docs/04_information-architecture.md` – App-Struktur und Hauptscreens
- `docs/05_wireframe-plan.md` – geplanter Wireframe-Umfang
- `docs/06_moodboard-direction.md` – visuelle Leitplanken
- `docs/07_prototype-scenarios.md` – zentrale Klickpfade für den Prototypen
- `docs/08_screen-specs.md` – konkrete Screenbeschreibungen für Wireframes und Prototyp
- `docs/09_wireframe-sketches.md` – Low-Fi-Wireframe-Skizzen mit Layout-Hierarchie
- `docs/10_microcopy.md` – UI-Texte für zentrale Screens, Zustände und CTAs
- `docs/11_wireframe-refinements.md` – vertiefte Wireframe-Regeln, Zustände und Layout-Prioritäten
- `assets/reference/briefing.pdf` – Originalbriefing
- `prototype/` – Platzhalter für Figma-Export oder HTML/CSS/JS-Prototyp
  - `prototype/wireframes/index.html` – visuelle Low-Fi-Wireframes im Browser

## GitHub Pages

Für GitHub Pages ist das Repo jetzt so angeordnet, dass du direkt den `docs/`-Ordner publishen kannst.

- In GitHub unter `Settings -> Pages`
- `Source`: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`

Wichtige Pfade:

- `docs/index.html` – Startseite / Projekt-Landing-Page
- `docs/app/index.html` – aktueller klickbarer HTML-Prototyp

Publish-Logik:

- Du entwickelst weiter in `prototype/app/`
- Für den Publish-Stand wird `prototype/app/` nach `docs/app/` gespiegelt
- GitHub Pages zieht dann automatisch den Stand aus `docs/`

Aktueller Abschlussstand:

- `prototype/app/` und `docs/app/` sind synchron
- `docs/app/index.html` ist der finale klickbare Showcase-Stand
- `docs/index.html` ist die Projekt-Landing-Page für Präsentation und Pages

## Kernanforderungen aus dem Briefing

- Übersicht aller Scooter mit Position, Ladezustand und Verfügbarkeit
- Ausleihe / Entsperren / Abstellen / temporäres Parken
- Reservierung bis 30 Minuten im Voraus
- Ladehubs an:
  - Campus OTH
  - Marktplatz
  - Bahnhof
- Rückgabe an freien Ladepunkt belohnt mit 30 Freiminuten
- Abstellen im Stadtgebiet bei Akkustand >30% möglich
- Abrechnung im 5-Minuten-Takt zu 0,10 €

## Finaler Umfang

- klickbarer HTML/CSS/JS-Prototyp mit echter Kartenbasis in `prototype/app/` und `docs/app/`
- Dokumentation von Briefing, Personas, User Story Map, IA, Wireframes, Microcopy und Verfeinerungen in `docs/`
- Showcase-Fluss für:
  - Kartenansicht / Vehicle Card
  - Reservierung / Bestätigung / Entsperren
  - Ride / Pause / Return / Parking Check / Summary
- ergänzende Menu- und Detailansichten für Konto, Fahrten, Bonus, Payment und Hilfe

## Showcase-Hinweis

Bewusst nicht im Fokus des finalen Showcases:

- `Issue`
- `Unlock Error`

Die Screens sind im Prototyp vorhanden, wurden für die gemeinsame Abnahme aber nicht als Kernpfad priorisiert.
