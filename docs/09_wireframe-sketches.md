# Low-Fidelity Wireframe Sketches

Dieses Dokument beschreibt die Wireframes so konkret, dass sie direkt in Figma, auf Papier oder in HTML-Blöcke übersetzt werden können.

Notation:
- **[Block]** = UI-Bereich
- **CTA** = primäre Aktion
- Reihenfolge von oben nach unten

---

## 1. Home / Karte

### Ziel
- Scooter schnell finden
- Statuslage in der Stadt verstehen
- direkt in einen relevanten Flow springen

### Layout

1. **[Top Bar]**
   - App-Name / Logo klein
   - Standort / „Amberg“
   - Profil-Icon oder Benachrichtigung

2. **[Map Area – Full Width, dominant]**
   - Scooter-Marker
   - Ladehub-Marker
   - optional eigener Standort

3. **[Floating Controls rechts]**
   - Standort zentrieren
   - Filter öffnen

4. **[Legend / Status Chips oben oder als Overlay]**
   - verfügbar
   - reserviert
   - niedriger Akku
   - lädt

5. **[Bottom Sheet collapsed]**
   - Text: „Scooter in der Nähe auswählen“
   - beim Marker-Tap erweitert sich das Sheet

6. **[Bottom Navigation]**
   - Karte
   - Fahrt
   - Buchungen
   - Profil

### Expanded State des Bottom Sheets
- Scooter-ID
- Distanz
- Akkustand
- Statuschip
- CTA: **Jetzt entsperren**
- CTA sekundär: **Reservieren**

### Wichtig
- Karte ist der Held des Screens
- Bottom Sheet nicht zu hoch im collapsed state

---

## 2. Scooter-Detail

### Ziel
- Nutzer soll sicher entscheiden können: reservieren oder direkt fahren

### Layout

1. **[Header]**
   - Zurück
   - Titel: Scooter-Details

2. **[Scooter Card]**
   - Scooter-ID / Name
   - großer Akkustand
   - geschätzte Reichweite
   - Distanz
   - Status

3. **[Mini Map / Standortausschnitt]**
   - aktueller Standort des Scooters
   - evtl. nächster Ladehub in Reichweite

4. **[Info Block]**
   - Rückgabe im Stadtgebiet möglich?
   - Bonus bei Ladehub-Rückgabe
   - Preislogik: 0,10 € / 5 Min

5. **[CTA Area sticky unten]**
   - Primär: **Jetzt entsperren**
   - Sekundär: **30 Min reservieren**

### Wichtig
- keine unnötigen Datenmassen
- die Entscheidung muss ohne Scroll-Orgie möglich sein

---

## 3. Reservierung bestätigt

### Ziel
- Reservierung absichern
- Zeitdruck und nächster Schritt klar machen

### Layout

1. **[Header]**
   - Zurück oder Schließen
   - Titel: Reservierung aktiv

2. **[Status Card]**
   - Scooter-ID
   - Countdown groß und dominant
   - Text: „Reservierung endet in …“

3. **[Mini Map]**
   - Standort des Scooters
   - Nutzerposition optional

4. **[Action Area]**
   - Primär: **Navigation starten**
   - Sekundär: **Reservierung aufheben**

5. **[Info Hint]**
   - kurzer Hinweis, was nach Ablauf passiert

### Wichtig
- Countdown visuell klar
- kein Zweifel, dass Reservierung bereits aktiv ist

---

## 4. Scooter-Zuordnung vor Ort

### Ziel
- richtigen Scooter bei mehreren lokalen Fahrzeugen auswählen

### Layout

1. **[Header]**
   - Zurück
   - Titel: Deinen Scooter auswählen

2. **[Instruction Block]**
   - Text: „Prüfe die Nummer am Lenker oder Schloss.“

3. **[Scooter List / Cards]**
   - 2–4 lokale Scooter
   - jeweils:
     - Scooter-ID
     - Akkustand
     - Distanz / „direkt vor dir“
     - kleiner Statuspunkt

4. **[Selected State]**
   - ausgewählte Karte deutlich markiert

5. **[Bottom CTA]**
   - **Diesen Scooter entsperren**

### Wichtig
- kein Kartenchaos mehr
- Fokus nur auf sichere Auswahl

---

## 5. Unlock / Startstatus

### Ziel
- Übergang in aktive Fahrt bestätigen

### Layout

1. **[Centered Status Area]**
   - Icon / Schlossgrafik
   - „Scooter wird entsperrt…“
   - danach: „Erfolgreich entsperrt“

2. **[Short Hint]**
   - kleiner Text zu Verkehrs- oder Sicherheitsregel

3. **[CTA]**
   - **Fahrt starten**
   - oder Auto-Weiterleitung nach 1–2 Sekunden

### Wichtig
- minimal halten
- kein unnötiger Screen-Ballast

---

## 6. Aktive Fahrt

### Ziel
- laufende Fahrt kontrollieren
- zwei kritische Aktionen anbieten: Pause oder Rückgabe

### Layout

1. **[Top Summary Bar]**
   - Fahrtdauer
   - aktuelle Kosten
   - Akkustand

2. **[Map / Route Area]**
   - aktueller Standort
   - ggf. nächster Ladehub

3. **[Status Info Card]**
   - Tarifhinweis
   - optional Bonus-Hinweis bei Rückgabe an Ladehub

4. **[Sticky Bottom Actions]**
   - CTA sekundär: **Temporär parken**
   - CTA primär: **Fahrt beenden**

### Wichtig
- Kosten immer sichtbar
- keine gleichwertigen Designebenen für Parken und Rückgabe; Rückgabe darf zwar klar, aber nicht versehentlich triggerbar sein

---

## 7. Temporäres Parken

### Ziel
- Zwischenstopp klar von endgültiger Rückgabe trennen

### Layout

1. **[Status Header]**
   - Icon: pausiert / gesichert
   - Titel: Scooter temporär geparkt

2. **[Running Cost Panel]**
   - Zeit läuft weiter
   - Kosten laufen weiter

3. **[Explanation Block]**
   - kurzer Satz: „Die Fahrt ist nicht beendet.“

4. **[CTA Area]**
   - Primär: **Weiterfahren**
   - Sekundär: **Jetzt endgültig zurückgeben**

### Wichtig
- Missverständnisse vermeiden
- „läuft weiter“ muss unübersehbar sein

---

## 8. Rückgabeprüfung

### Ziel
- Rückgabe erlauben oder blockieren
- Bonus transparent zeigen

### Layout

1. **[Header]**
   - Titel: Rückgabe prüfen

2. **[Location Status Card]**
   - Icon + Text:
     - erlaubt
     - nicht erlaubt
     - Ladehub erkannt

3. **[Battery Rule Block]**
   - Akku >30 %?
   - falls nein: Hinweis zur Pflicht-Rückgabe an Ladepunkt

4. **[Bonus Block]**
   - wenn Ladehub frei und passend:
     - „Du erhältst 30 Freiminuten“

5. **[Mini Map]**
   - Standort mit Umgebung

6. **[Bottom CTA]**
   - **Rückgabe bestätigen**
   - falls unzulässig: deaktiviert oder ersetzt durch Hinweis

### Wichtig
- dieser Screen muss regelbasiert funktionieren
- am besten mit klaren Success / Warning / Error-Zuständen

---

## 9. Ride Summary / Abschluss

### Ziel
- Fahrtabschluss sauber beenden
- Vertrauen in die Abrechnung schaffen

### Layout

1. **[Success Header]**
   - Icon / Checkmark
   - „Fahrt beendet“

2. **[Summary Card]**
   - Dauer
   - Preis
   - Start / Ende
   - Bonus / Freiminuten, falls vorhanden

3. **[Optional Detail Link]**
   - „Zur Fahrtübersicht“

4. **[CTA]**
   - **Zur Karte**

### Wichtig
- keine Unsicherheit über laufende Kosten
- Abschluss muss final wirken

---

## 10. Profil / Hilfe

### Ziel
- sekundäre, aber notwendige Informationen bündeln

### Layout

1. **[Header]**
   - Profil

2. **[Account Section]**
   - Name
   - Zahlungsmethode
   - Kontaktinfos

3. **[Usage Rules Section]**
   - Parken vs. Rückgabe
   - Stadtgebiet-Regeln
   - Ladehub-Bonus

4. **[Support Section]**
   - Hilfe / FAQ
   - Kontakt

### Wichtig
- kein überdesignter Screen
- eher sachlich und klar

---

## Aktueller Wireframe-Umfang

Der HTML-Wireframe-Stand bildet jetzt den aktuellen App-Prototyp deutlich vollständiger ab. Zusätzlich zu den klassischen Kernscreens sind auch die Begleit- und Zustandsflows enthalten:

1. Registrierung / Einstieg
2. Home / Karte
3. Menü / Dein Bereich
4. Menü-Detail / Hilfe
5. Scooter-Detail
6. Reservierung bestätigt
7. Scooter-Bestätigung vor Ort
8. Scooter-Zuordnung
9. Issue / Problem vor Ort
10. Unlock / Startstatus
11. Unlock Error
12. Aktive Fahrt
13. Temporäres Parken
14. Return / Entscheidungsscreen
15. Rückgabeprüfung – erlaubt
16. Rückgabeprüfung – gesperrt
17. Parking Check
18. Ride Summary

Damit decken die Low-Fi-Wireframes jetzt nicht mehr nur fast, sondern praktisch den kompletten präsentierten Servicefluss des aktuellen Web-Prototyps ab.

## Priorisierte Wireframe-Reihenfolge

Wenn ihr wenig Zeit habt, baut zuerst genau diese 10 Screens:

1. Registrierung / Einstieg
2. Home / Karte
3. Scooter-Detail
4. Reservierung bestätigt
5. Scooter-Bestätigung vor Ort
6. Aktive Fahrt
7. Temporäres Parken
8. Return / Entscheidungsscreen
9. Rückgabeprüfung
10. Ride Summary

Die übrigen Screens sichern Sonderfälle, Navigationslogik und Fehlerzustände ab.

---

## Empfehlung für Figma-Aufbau

### Page 1 – Foundations
- Farben
- Typo
- Buttons
- Statuschips
- Marker

### Page 2 – Low-Fi Wireframes
- alle Hauptscreens und relevanten Zustandsflows in Grau / Schwarzweiß

### Page 3 – Mid/Hi-Fi
- visuelle Ausarbeitung der finalen Kernscreens

### Page 4 – Prototype Flow
- Einstieg → Registrierung / Demo
- Start → Reservieren → Bestätigen → Unlock
- Start → Scooter prüfen / Issue / anderer Scooter
- Fahrt → Parken → Weiterfahren
- Fahrt → Return → Parking Check → Summary
- Fehlerpfad: Unlock Error

So bleibt das Projekt sauber strukturiert statt chaotisch zu wachsen.
