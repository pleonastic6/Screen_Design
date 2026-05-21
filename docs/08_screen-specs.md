# Screen Specs

Dieses Dokument übersetzt die bisherigen Personas, User Stories und die Informationsarchitektur in konkrete Screens. Ziel ist nicht Final Design, sondern ein belastbares Wireframe-Briefing.

---

## Screen 1 – Splash / Einstieg

### Zweck
- schneller Einstieg in die App
- Branding setzen
- Nutzer in Login / Registrierung oder direkt in die App führen

### Inhalte
- App-Logo / Wortmarke
- Claim oder kurze Funktionsbeschreibung
- Primärer CTA: **Einloggen**
- Sekundärer CTA: **Registrieren**
- optional kleiner Link: **Gastmodus / Demo ansehen**

### Wichtige Entscheidung
- Wenn das Projekt primär den Servicefluss zeigen soll, darf dieser Screen sehr reduziert bleiben.

---

## Screen 2 – Registrierung / Konto anlegen

### Zweck
- einmalige Registrierung
- möglichst wenig Friktion

### Inhalte
- Vorname / Nachname
- E-Mail
- Telefonnummer
- Passwort
- Zahlungsmethode anlegen oder vorbereiten
- Checkboxen für AGB / Datenschutz
- CTA: **Konto erstellen**

### UX-Hinweise
- nur wirklich nötige Felder zeigen
- Fortschritt klein visualisieren
- Vertrauen durch kurze Hinweise zu Abrechnung und Sicherheit

---

## Screen 3 – Home / Karte

### Zweck
- zentraler Einstieg für fast alle Kernaufgaben
- verfügbare Scooter und Ladehubs sichtbar machen

### Inhalte
- große Kartenfläche
- Marker für Scooter
- feste Marker für Ladehubs:
  - Campus OTH
  - Marktplatz
  - Bahnhof
- Such-/Standortbutton
- Filter oder Legende für Status:
  - verfügbar
  - reserviert
  - niedriger Akku
  - lädt
- Bottom Sheet oder Info-Panel für selektierten Scooter
- Bottom Navigation:
  - Karte
  - Fahrt
  - Buchungen
  - Profil

### Primäre Interaktion
- Marker antippen → Scooter-Detail öffnen

### Kritisch
- Karte darf nicht überladen sein
- Statusfarben und Markerform müssen sofort lesbar sein

---

## Screen 4 – Scooter-Detail

### Zweck
- Entscheidung ermöglichen: reservieren oder direkt entsperren

### Inhalte
- Scooter-ID / Name
- Akkustand
- geschätzte Reichweite
- Distanz zum Nutzer
- Status (frei / reserviert / lädt)
- Hinweis, ob Rückgabe im freien Stadtgebiet möglich ist
- CTA 1: **Jetzt entsperren**
- CTA 2: **30 Minuten reservieren**
- optional: **Navigation starten**

### Zustände
- freier Scooter
- reservierter Scooter
- Scooter mit zu niedrigem Akku
- Scooter am Ladehub

---

## Screen 5 – Reservierung bestätigt

### Zweck
- Reservierung transparent machen
- Zeitdruck sichtbar machen

### Inhalte
- reservierter Scooter
- Countdown (max. 30 Minuten)
- Standortkarte oder Mini-Map
- CTA: **Navigation zum Scooter**
- CTA: **Reservierung aufheben**

### Kritisch
- Countdown muss visuell dominant sein
- keine Unsicherheit, ob Reservierung aktiv ist

---

## Screen 6 – Scooter-Zuordnung vor Ort

### Zweck
- Problem App <-> Scooter lösen, wenn mehrere Scooter lokal stehen

### Inhalte
- Liste oder Scan-/Auswahlansicht der lokalen Scooter
- sichtbare Scooter-ID / Nummer
- Hinweis: „Bitte Nummer am Lenker / Schloss prüfen“
- CTA: **Diesen Scooter entsperren**

### Mögliche UI-Variante
- Karten-/Listen-Hybrid ist hier unnötig
- besser: klarer Identifikationsscreen mit 2–4 lokalen Optionen

### Kritisch
- falscher Scooter darf nicht versehentlich entsperrt werden

---

## Screen 7 – Unlock / Start der Fahrt

### Zweck
- Übergang von Auswahl zu aktiver Nutzung

### Inhalte
- kurzer Status: „Scooter wird entsperrt…“
- Erfolgsmeldung
- kurzer Hinweis zu Verkehrs- oder Parkregeln
- CTA: **Fahrt starten** oder direkt Weiterleitung in den Fahrtstatus

### UX-Hinweis
- dieser Screen darf sehr kurz sein
- wichtig ist primär Bestätigung und Vertrauen

---

## Screen 8 – Aktive Fahrt

### Zweck
- Fahrtstatus transparent machen
- zentrale Aktionen erreichbar halten

### Inhalte
- Fahrtdauer
- aktuelle Kosten
- Akkustand des Scooters
- Mini-Karte oder Standortinformation
- CTA: **Temporär parken**
- CTA: **Fahrt beenden**

### Kritisch
- klare Trennung zwischen Pause und finaler Rückgabe
- Kosten müssen gut sichtbar sein

---

## Screen 9 – Temporäres Parken

### Zweck
- Zwischenstopp absichern
- klar kommunizieren, dass Kosten weiterlaufen

### Inhalte
- Status: „Scooter ist temporär gesichert“
- Hinweis: „Abrechnung läuft weiter“
- aktuelle Kosten / Zeit weiter sichtbar
- CTA: **Weiterfahren**
- CTA: **Jetzt endgültig zurückgeben**

### Kritisch
- Nutzer darf Pause nicht mit Rückgabe verwechseln

---

## Screen 10 – Rückgabeprüfung

### Zweck
- vor endgültiger Rückgabe prüfen, ob Standort zulässig ist

### Inhalte
- Standortstatus:
  - Rückgabe hier erlaubt
  - oder: nicht erlaubt
- Akku-Check (>30 %?)
- Hinweis, ob ein Ladehub in der Nähe ist
- Bonus-Hinweis bei Ladehub-Rückgabe: **30 Freiminuten**
- CTA: **Rückgabe bestätigen**

### Zustände
- freie Rückgabe im Stadtgebiet erlaubt
- freie Rückgabe nicht erlaubt
- Ladehub-Rückgabe mit Bonus

### Kritisch
- Regeln müssen hier extrem klar sein

---

## Screen 11 – Ride Summary / Abrechnung

### Zweck
- Fahrtabschluss transparent machen

### Inhalte
- Fahrtdauer
- Gesamtkosten
- evtl. Freiminuten-Bonus
- Rückgabeort
- Status: „Fahrt erfolgreich beendet“
- CTA: **Zur Karte**

### Optional
- Verlauf speichern oder nächste Fahrt anregen

---

## Screen 12 – Buchungen / Historie

### Zweck
- Reservierungen und vergangene Fahrten zentral erreichbar machen

### Inhalte
- aktive Reservierung
- letzte Fahrten
- Kostenübersicht
- evtl. gesammelte Freiminuten

### Nutzen
- schafft Vertrauen in das System
- hilft bei Nachvollziehbarkeit der Abrechnung

---

## Screen 13 – Profil / Hilfe

### Zweck
- Konto- und Supportbereich

### Inhalte
- persönliche Daten
- Zahlungsmethode
- FAQ / Regeln
- Kontakt / Support
- Nutzungsbedingungen

### Besonders relevant
- kurze Hilfe zu:
  - Reservierung
  - Parken vs. Rückgabe
  - Stadtgebiet-Regeln
  - Ladehub-Bonus

---

## Priorität für Wireframes

### Muss in den ersten Wireframe-Durchlauf
1. Home / Karte
2. Scooter-Detail
3. Reservierung bestätigt
4. Scooter-Zuordnung
5. Aktive Fahrt
6. Temporäres Parken
7. Rückgabeprüfung
8. Ride Summary

### Kann im zweiten Durchlauf kommen
- Splash
- Registrierung
- Buchungen
- Profil / Hilfe

---

## Kritische Übergänge

Die Wireframes müssen besonders diese Wechsel sauber zeigen:

1. **Karte → Scooter-Detail**
2. **Scooter-Detail → Reservierung**
3. **Scooter-Detail → Unlock**
4. **Aktive Fahrt → Temporäres Parken**
5. **Aktive Fahrt → Rückgabeprüfung**
6. **Rückgabeprüfung → Ride Summary**

Wenn diese Übergänge sauber funktionieren, steht der Kern des Projekts.
