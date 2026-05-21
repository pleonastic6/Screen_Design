# Wireframe Refinements

Dieses Dokument schärft die bisherigen Wireframes weiter. Ziel ist, Interpretationsspielraum zu reduzieren: Welche Blöcke sind groß? Was ist sticky? Welche Zustände müssen im Wireframe explizit sichtbar sein? Welche Elemente dürfen erst im High-Fidelity-Schritt dekorativ werden?

---

## Generelle Wireframe-Regeln

### 1. Fokus pro Screen
Jeder Screen braucht genau **eine Hauptaufgabe**. Wenn zwei Aktionen gleich wichtig wirken, ist der Screen noch nicht sauber genug.

### 2. Layout-Hierarchie
Für fast alle App-Screens gilt diese vertikale Priorität:

1. Status / Kontext
2. Hauptinhalt
3. Primäre Aktion
4. Sekundäre Aktion
5. Zusätzliche Hilfe / Info

### 3. Wiederkehrende UI-Muster
Im Wireframe schon konsistent halten:

- Header-Höhe gleich
- Bottom Navigation immer gleich
- Primary CTA immer gleich platziert
- Statuschips immer gleicher Stil / gleiche Position
- Bottom Sheet immer mit derselben Logik

### 4. Was Low-Fi bleiben darf
- Icons nur als Platzhalter
- Kartenmarker grob
- Typografie noch generisch
- keine finalen Farben nötig

### 5. Was schon in Low-Fi klar sein muss
- Zustandswechsel
- Sichtbarkeit der Regeln
- CTA-Priorität
- Informationsgruppen
- Rückmeldung nach kritischen Aktionen

---

## A. Home / Karte – detaillierter

### Screen-Ziel
In unter 3 Sekunden muss klar sein:
- Wo bin ich?
- Wo sind Scooter?
- Wie komme ich zur nächsten Aktion?

### Exakte Blockreihenfolge

#### Header
- links: App-Logo / Wortmarke klein
- mitte: Standort „Amberg“
- rechts: Profil / Hilfe

#### Kartenebene
- nimmt ca. **70–75 %** der Screenhöhe ein
- Markergrößen unterscheiden:
  - Scooter normal
  - Ladehubs größer / fester
- eigener Standort optional als kleiner Punkt

#### Floating Controls
- rechts unten über der Karte:
  - Standort zentrieren
  - Filter

#### Bottom Sheet (collapsed)
- Höhe nur ca. **12–15 %** des Screens
- Text: „Scooter in der Nähe auswählen“
- Pfeil / Handle zum Hochziehen

#### Bottom Sheet (expanded)
- zeigt **genau einen** selektierten Scooter
- Inhalte in dieser Reihenfolge:
  1. ID / Name
  2. Statuschip + Akku
  3. Distanz
  4. 2 CTAs

### CTA-Priorität
- frei verfügbar → **Jetzt entsperren** primär
- sekundär → **Reservieren**
- falls reserviert → CTA ändern zu **Reservierung ansehen**

### Zustände, die im Wireframe gezeigt werden sollten
1. kein Scooter ausgewählt
2. verfügbarer Scooter ausgewählt
3. Scooter mit niedrigem Akku ausgewählt
4. Ladehub sichtbar in der Nähe

---

## B. Scooter-Detail – detaillierter

### Screen-Ziel
Nutzer soll ohne Nachdenken entscheiden können:
- jetzt fahren
- reservieren
- abbrechen

### Vertikale Struktur

1. Header
2. Hauptkarte / Scooter-Karte
3. Kontextinfos
4. CTA-Fußbereich sticky

### Scooter Card
Sie ist das zentrale Element und sollte wie eine Info-Karte behandelt werden:
- obere Zeile: Scooter-ID + Statuschip
- mittlere Zeile: Akku groß
- untere Zeile: Reichweite + Distanz

### Info-Sektion darunter
Drei kurze Blöcke statt Fließtext:
- Tarif
- Rückgabe-Regel
- Ladehub-Bonus

### CTA-Leiste
Sticky Bottom Bar mit:
- primär rechts / prominent: **Jetzt entsperren**
- sekundär links oder outlined: **30 Min. reservieren**

### Wireframe-Zustände
- verfügbar
- reservierbar, aber weiter entfernt
- niedriger Akku
- gerade nicht verfügbar

---

## C. Reservierung bestätigt – detaillierter

### Screen-Ziel
Der Nutzer darf nicht vergessen, dass die Zeit läuft.

### Dominantes Element
- **Countdown** als größtes Element auf dem Screen

### Vertikale Reihenfolge
1. Header
2. Reservierungs-Statuskarte
3. Karte
4. Primär-CTA
5. Sekundär-CTA
6. kleiner Hinweistext

### Statuskarte
- Titel: „Reservierung aktiv“
- Scooter-ID
- Countdown
- kurzer Satz: „Danach wird der Scooter wieder freigegeben“

### Wireframe-Variante
- zeigt zusätzlich kleinen Link / Textbutton:
  - „Reservierung aufheben“

---

## D. Scooter-Zuordnung – detaillierter

### Screen-Ziel
Fehlbedienung verhindern.

### Struktur
1. Header
2. Hinweisblock
3. Liste lokaler Scooter
4. Sticky CTA unten

### Scooter-Liste
Jede Karte zeigt nur:
- Scooter-ID
- Akku
- Distanz / Lagehinweis
- Selektionszustand

### Was NICHT rein sollte
- große Karte
- lange Regeltexte
- zu viele technische Daten

### Zustände
- nichts ausgewählt
- 1 Eintrag ausgewählt
- Scooter inzwischen nicht mehr verfügbar

---

## E. Unlock / Startstatus – detaillierter

### Screen-Ziel
Nur Übergang und Bestätigung.

### Aufbau
- vertikal zentriert
- 1 Status-Icon
- 1 primäre Botschaft
- 1 kleine Hilfszeile
- 1 CTA oder Auto-Weiterleitung

### Zustände
- lädt / verbindet
- erfolgreich
- Fehler

### Wireframe-Regel
Wenn der Screen länger als 3 Kernelemente braucht, ist er schon zu komplex.

---

## F. Aktive Fahrt – detaillierter

### Screen-Ziel
Laufende Fahrt kontrollierbar machen.

### Harte Priorität
Folgende drei Werte müssen immer sichtbar bleiben:
- Zeit
- Kosten
- Akku

### Struktur

#### Top Summary
- drei Kennzahlen nebeneinander oder gestapelt

#### Mittelteil
- Karte / Standort / nächster Ladehub
- optional kleiner Hinweis auf Bonus bei Ladehub-Rückgabe

#### Bottom Action Bar
- links: **Temporär parken**
- rechts: **Fahrt beenden**

### CTA-Priorität
- Rückgabe nicht als einziger riesiger Button
- Parken muss klar erreichbar sein, aber visuell nachgeordnet bleiben

### Zustände, die ihr zeigen solltet
1. normale aktive Fahrt
2. nahe Ladehub
3. niedriger Akku während Fahrt

---

## G. Temporäres Parken – detaillierter

### Screen-Ziel
Verwechslung mit finaler Rückgabe ausschließen.

### Dominante Aussage
- „Abrechnung läuft weiter“ muss das stärkste Textelement sein

### Struktur
1. Status-Icon
2. Titel
3. Kosten- und Zeitblock
4. Warn-/Hinweistext
5. CTA weiterfahren
6. CTA endgültig zurückgeben

### Gute Low-Fi-Lösung
- Kostenblock eingerahmt
- Warntext direkt darunter
- zwei stark getrennte Buttons

---

## H. Rückgabeprüfung – detaillierter

### Screen-Ziel
Regeln anwendbar machen, nicht nur anzeigen.

### Struktur
1. Header
2. Statuskarte
3. Regelblöcke
4. Minimap
5. CTA-Zone

### Statuskarte Varianten
- erlaubt
- nicht erlaubt
- Ladehub erkannt

### Regelblöcke
Jeder als eigener kurzer Block:
- Standortregel
- Akku-Regel
- Bonus-Regel

### CTA-Logik
- erlaubt → **Rückgabe bestätigen** aktiv
- nicht erlaubt → Button deaktiviert oder ersetzt durch **Nächsten Ladehub ansehen**

### Kritisch
Im Wireframe explizit zeigen, wie ein **gesperrter Zustand** aussieht.

---

## I. Ride Summary – detaillierter

### Screen-Ziel
Die Fahrt sauber abschließen.

### Struktur
1. Success-Icon / Titel
2. große Summary Card
3. Bonus-Hinweis optional
4. Primary CTA

### Summary Card Reihenfolge
- Fahrtdauer
- Gesamtpreis
- Rückgabeort
- Bonus / Freiminuten

### Wichtig
Dieser Screen muss „final“ wirken. Keine konkurrierenden Aktionen, keine offenen Fragen.

---

## J. Profil / Hilfe – detaillierter

### Screen-Ziel
Sekundärinformationen bündeln, ohne den Hauptflow zu stören.

### Struktur
1. Header
2. Profilkarte
3. Zahlungsbereich
4. Hilfe / Regeln
5. Support

### Wireframe-Tipp
Hier reichen einfache Listenblöcke völlig aus. Der Screen muss funktional sein, nicht spektakulär.

---

## Welche Wireframes ihr als Zustandsgruppen bauen solltet

Nicht nur 1 Screen pro Funktion. Baut diese Gruppen:

### Gruppe 1 – Karte
- leer / default
- Scooter ausgewählt
- Filter aktiv

### Gruppe 2 – Reservierung
- Reservierung aktiv
- kurz vor Ablauf
- abgelaufen

### Gruppe 3 – Fahrt
- aktive Fahrt
- temporär geparkt
- Rückgabe erlaubt
- Rückgabe nicht erlaubt
- Rückgabe mit Bonus

### Gruppe 4 – Fehlerfälle
- Scooter nicht mehr verfügbar
- Unlock fehlgeschlagen
- Standort nicht präzise genug

---

## Minimum für eine gute Zwischenpräsentation

Wenn ihr wenig Zeit habt, sollten bis zur ersten brauchbaren Review mindestens diese Wireframes stehen:

1. Home / Karte – Default
2. Home / Karte – Scooter ausgewählt
3. Scooter-Detail
4. Reservierung aktiv
5. Scooter-Zuordnung
6. Aktive Fahrt
7. Temporär geparkt
8. Rückgabe erlaubt
9. Rückgabe nicht erlaubt
10. Ride Summary

Damit kann man den Kern schon sehr gut erklären.

---

## Empfehlung für die Figma-Arbeitsweise

### Nicht machen
- direkt High-Fi starten
- schon Buttons pixeln, bevor Zustände stehen
- Karte dekorativ aufhübschen, bevor Logik klar ist

### Stattdessen
1. alle 10 Kernscreens in Low-Fi
2. Zustandsvarianten duplizieren
3. erst dann Visual-Layer aufsetzen
4. dann Klickpfade verbinden

So bleibt das Projekt methodisch sauber.
