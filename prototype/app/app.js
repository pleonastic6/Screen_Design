const scooters = {
  "A-07": {
    id: "SCOOTER A-07",
    name: "Scooter A-07",
    battery: "82 %",
    rideBattery: "71 %",
    range: "18 km",
    distance: "120 m",
    status: "Verfuegbar",
    statusClass: "available",
    returnRule: "Rueckgabe im Stadtgebiet moeglich",
    note: "Ladehub-Bonus verfuegbar.",
    pickup: "Akku 64 % - direkt vor dir",
    coords: [49.44375, 11.8612]
  },
  "A-12": {
    id: "SCOOTER A-12",
    name: "Scooter A-12",
    battery: "76 %",
    rideBattery: "69 %",
    range: "16 km",
    distance: "210 m",
    status: "Verfuegbar",
    statusClass: "available",
    returnRule: "Rueckgabe nur an erlaubten Flaechen",
    note: "Stabiler Akkustand fuer die Innenstadt.",
    pickup: "Akku 58 % - 8 m entfernt",
    coords: [49.44195, 11.85865]
  },
  "A-19": {
    id: "SCOOTER A-19",
    name: "Scooter A-19",
    battery: "24 %",
    rideBattery: "19 %",
    range: "5 km",
    distance: "180 m",
    status: "Niedriger Akku",
    statusClass: "low",
    returnRule: "Bitte nach der Fahrt am Ladehub zurueckgeben",
    note: "Nur fuer kurze Wege oder Hub-Naehe.",
    pickup: "Akku 24 % - 11 m entfernt",
    coords: [49.44495, 11.86385]
  }
};

const hubs = [
  { name: "Campus OTH", coords: [49.43855, 11.86215] },
  { name: "Marktplatz", coords: [49.44275, 11.86015] },
  { name: "Bahnhof", coords: [49.44615, 11.86655] }
];

const userLocation = [49.4429, 11.86155];
const rideCheckpoint = [49.4414, 11.8577];
const blockedReturnPoint = [49.44065, 11.85665];
const returnOkPoint = [49.4427, 11.86035];

const reserveDurationSeconds = 30 * 60;
const reserveStartedAt = Date.now() - (2 * 60 + 26) * 1000;
const rideStartedAt = Date.now() - (12 * 60 + 10) * 1000;
const parkedStartedAt = Date.now() - (14 * 60 + 25) * 1000;

let currentScreen = "home";
let selectedScooter = null;
let activeFilter = "all";
let searchTerm = "";
let countdownTimer = null;
let toastTimer = null;
let mobileSheetMode = "hidden";
let sheetDrag = null;
let suppressSheetHandleClick = false;

const sheetModeOrder = ["hidden", "peek", "open"];
const sheetDragThreshold = 36;

const maps = {
  main: null
};

const backTargets = {
  home: null,
  detail: "home",
  reserve: "detail",
  pickup: "reserve",
  unlock: "pickup",
  ride: "unlock",
  parked: "ride",
  "return-blocked": "ride",
  "return-ok": "return-blocked",
  summary: "return-ok"
};

const flowSteps = [
  { id: "home", label: "Karte und Auswahl", count: 1 },
  { id: "detail", label: "Scooter pruefen", count: 2 },
  { id: "reserve", label: "Reservierung aktiv", count: 3 },
  { id: "pickup", label: "Vor Ort bestaetigen", count: 4 },
  { id: "unlock", label: "Unlock bestaetigen", count: 5 },
  { id: "ride", label: "Fahrt aktiv", count: 6 },
  { id: "return-blocked", label: "Rueckgabe pruefen", count: 7 },
  { id: "return-ok", label: "Rueckgabe erlauben", count: 8 },
  { id: "summary", label: "Abschluss", count: 8 }
];

const screenConfigs = {
  home: (scooter) => ({
    kicker: "Live Map",
    badge: "01 Map",
    title: "Finde deinen naechsten Ride",
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Karte, Auswahl, Start.",
    metrics: [
      ["Akku", scooter.battery],
      ["Reichweite", scooter.range],
      ["Distanz", scooter.distance]
    ],
    info: [
      ["Rueckgabe", scooter.returnRule],
      ["Hinweis", "Preis steckt direkt im CTA."]
    ],
    focus: ["Empfohlen", `${scooter.name} ist dein schnellster Start`, "Akku, Distanz, dann direkt buchen oder unlocken.", "calm"],
    mapContext: `${scooter.distance} entfernt`,
    actionHint: "Erst kurz ansehen, dann buchen oder direkt starten.",
    primary: ["Scooter ansehen", "detail", "Akku, Distanz, Rueckgabe"],
    secondary: ["Reservieren", "reserve", "30 Minuten halten"],
    showSearch: true
  }),
  detail: (scooter) => ({
    kicker: "Scooter Detail",
    badge: "02 Detail",
    title: scooter.id,
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Nur die Sachen, die jetzt zaehlen.",
    metrics: [
      ["Akku", scooter.battery],
      ["Reichweite", scooter.range],
      ["Distanz", scooter.distance]
    ],
    info: [
      ["Start", "Preis direkt im Unlock-Button"],
      ["Rueckgabe", scooter.returnRule]
    ],
    focus: ["Entscheidung", "Kurz pruefen, dann los", "Keine Tarifboxen, kein Extra-Layer.", "calm"],
    mapContext: "Route + Rueckgabehub",
    actionHint: "Hier passiert die eigentliche Entscheidung.",
    primary: ["Jetzt entsperren", "unlock", "Unlock 1,00 EUR"],
    secondary: ["Reservieren", "reserve", "30 Minuten halten"]
  }),
  reserve: (scooter) => ({
    kicker: "Reservierung",
    badge: "03 Reserve",
    title: "Reservierung aktiv",
    status: "Laeuft",
    statusClass: "available",
    copy: "Scooter ist kurz fuer dich blockiert.",
    metrics: [
      ["Timer", formatCountdown(getReserveSecondsLeft())],
      ["Fussweg", scooter.distance],
      ["Scooter", scooter.id.replace("SCOOTER ", "")]
    ],
    info: [
      ["Navigation", "Direkter Weg zum reservierten Scooter."],
      ["Status", "Nach Ablauf wird er wieder freigegeben."]
    ],
    focus: ["Timer laeuft", `Noch ${formatCountdown(getReserveSecondsLeft())}`, "Jetzt nur noch hingehen und bestaetigen.", "warning"],
    mapContext: formatCountdown(getReserveSecondsLeft()),
    actionHint: "Erst am Scooter weitermachen, nicht vorher.",
    primary: ["Ich bin am Scooter", "pickup", "QR oder Nummer pruefen"],
    secondary: ["Abbrechen", "home", "Scooter wieder freigeben"]
  }),
  pickup: (scooter) => ({
    kicker: "Vor Ort",
    badge: "04 Pickup",
    title: "Richtigen Scooter bestaetigen",
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Kurz Nummer pruefen, dann aufmachen.",
    metrics: [
      ["Gewaehlt", scooter.name],
      ["Naehe", scooter.distance],
      ["Akku", scooter.battery]
    ],
    info: [
      ["Identifikation", scooter.pickup],
      ["Wichtig", "Falscher Unlock muss ausgeschlossen sein."]
    ],
    focus: ["Vor Ort", "Nur der richtige Scooter", "Nummer checken, dann entsperren.", "warning"],
    mapContext: "Mehrere Scooter vor Ort",
    actionHint: "Primaer erst druecken, wenn Nummer und Standort passen.",
    primary: ["Diesen Scooter entsperren", "unlock", "Unlock 1,00 EUR"],
    secondary: ["Nicht der richtige", "home", "Zurueck zur Karte"]
  }),
  unlock: (scooter) => ({
    kicker: "Unlock",
    badge: "05 Unlock",
    title: "Scooter entsperrt",
    status: "Bereit",
    statusClass: "available",
    copy: "Unlock bestaetigt, jetzt los.",
    metrics: [
      ["Scooter", scooter.name],
      ["Akku", scooter.battery],
      ["Status", "Bereit"]
    ],
    info: [
      ["Hinweis", "Fahre vorsichtig und beachte die Verkehrsregeln."],
      ["Naechster Schritt", "Jetzt startet die aktive Fahrt."]
    ],
    focus: ["Freigabe", "Jetzt ist der Scooter offen", "Von hier aus direkt in die Fahrt.", "success"],
    mapContext: "Fahrbereit",
    actionHint: "Keine Extra-Optionen mehr. Jetzt faehrst du los.",
    primary: ["Fahrt starten", "ride", "Ab jetzt laeuft die Zeit"],
    secondary: null
  }),
  ride: (scooter) => ({
    kicker: "Ride Active",
    badge: "06 Ride",
    title: "Fahrt aktiv",
    status: "Aktiv",
    statusClass: "available",
    copy: "Zeit und Kosten laufen live mit.",
    metrics: [
      ["Dauer", formatElapsedTime(rideStartedAt)],
      ["Kosten", formatRideCost(rideStartedAt, 0.06)],
      ["Akku", scooter.rideBattery]
    ],
    info: [
      ["Bonus", "Rueckgabe am Hub bringt 30 Freiminuten."],
      ["Optionen", "Parken sichert kurz, Rueckgabe beendet final."]
    ],
    focus: ["Ride live", "Weiterfahren oder beenden", "Die Rueckgabezone bleibt klar sichtbar.", "calm"],
    mapContext: "Ride live",
    actionHint: "Primaer beendet die Fahrt, sekundaer haelt sie nur an.",
    primary: ["Fahrt beenden", "return-blocked", "Rueckgabezone pruefen"],
    secondary: ["Temporaer parken", "parked", "Abrechnung laeuft weiter"]
  }),
  parked: () => ({
    kicker: "Pause",
    badge: "07 Pause",
    title: "Scooter temporaer geparkt",
    status: "Pause",
    statusClass: "low",
    copy: "Pause ist nicht kostenlos.",
    metrics: [
      ["Zeit", formatElapsedTime(parkedStartedAt)],
      ["Kosten", formatRideCost(parkedStartedAt, 0.11)],
      ["Status", "Pause"]
    ],
    info: [
      ["Achtung", "Pause ist nicht gleich Rueckgabe."],
      ["Weiter", "Du kannst jederzeit wieder losfahren."]
    ],
    focus: ["Pause", "Kosten laufen weiter", "Entweder weiterfahren oder sauber beenden.", "warning"],
    mapContext: "Abrechnung laeuft",
    actionHint: "Pause ist Ausnahmezustand, nicht dein neues Zuhause.",
    primary: ["Weiterfahren", "ride", "Ride sofort fortsetzen"],
    secondary: ["Jetzt zurueckgeben", "return-blocked", "Rueckgabezone finden"]
  }),
  "return-blocked": () => ({
    kicker: "Return Check",
    badge: "08 Blocked",
    title: "Rueckgabe hier nicht moeglich",
    status: "Blockiert",
    statusClass: "low",
    copy: "Hier darfst du nicht final abstellen.",
    metrics: [
      ["Hub", "240 m"],
      ["Akku", "62 %"],
      ["Regel", "Nicht erlaubt"]
    ],
    info: [
      ["Naechster Schritt", "Zum Marktplatz-Hub fahren."],
      ["Grund", "Hier ist keine regulaere Rueckgabe erlaubt."]
    ],
    focus: ["Rueckgabe blockiert", "Hier endet die Fahrt nicht", "Rote Zone verlassen und zum Hub fahren.", "danger"],
    mapContext: "240 m bis Hub",
    actionHint: "Nicht bestaetigen koennen ist hier korrekt. Erst Hub erreichen.",
    primary: ["Zum Ladehub", "return-ok", "240 m bis zur Freigabe"],
    secondary: ["Zurueck zur Fahrt", "ride", "Noch nicht beenden"]
  }),
  "return-ok": () => ({
    kicker: "Return Check",
    badge: "09 Return",
    title: "Rueckgabe moeglich",
    status: "Erlaubt",
    statusClass: "available",
    copy: "Hub erkannt, hier darfst du beenden.",
    metrics: [
      ["Hub", "Marktplatz"],
      ["Bonus", "30 Min"],
      ["Regel", "Erfuellt"]
    ],
    info: [
      ["Rueckgabe", "Freier Ladepunkt verfuegbar."],
      ["Bonus", "Freiminuten werden direkt gebucht."]
    ],
    focus: ["Rueckgabe erlaubt", "Gruene Zone erreicht", "Jetzt wird der Abschluss-Button final.", "success"],
    mapContext: "Hub erkannt",
    actionHint: "Jetzt darf der Primaer-Button final werden.",
    primary: ["Rueckgabe bestaetigen", "summary", "30 Freiminuten sichern"],
    secondary: ["Weiterfahren", "ride", "Noch nicht beenden"]
  }),
  summary: () => ({
    kicker: "Abschluss",
    badge: "10 Done",
    title: "Fahrt beendet",
    status: "Erledigt",
    statusClass: "available",
    copy: "Fahrt fertig, alles erledigt.",
    metrics: [
      ["Dauer", "18:25"],
      ["Kosten", "0,40 EUR"],
      ["Bonus", "30 Min"]
    ],
    info: [
      ["Rueckgabeort", "Marktplatz Ladehub"],
      ["Status", "Keine offenen Posten."]
    ],
    focus: ["Abgeschlossen", "Ride sauber beendet", "Kosten klar, Bonus gutgeschrieben.", "success"],
    mapContext: "Flow abgeschlossen",
    actionHint: "Fahrt ist durch. Von hier aus beginnt nur ein neuer Ride.",
    primary: ["Zur Karte", "home", "Neuen Scooter finden"],
    secondary: null
  })
};

function formatCountdown(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getReserveSecondsLeft() {
  const elapsedSeconds = Math.floor((Date.now() - reserveStartedAt) / 1000);
  return Math.max(0, reserveDurationSeconds - elapsedSeconds);
}

function formatElapsedTime(startedAt) {
  const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function formatRideCost(startedAt, unlockFee = 0) {
  const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
  const rideCost = unlockFee + elapsedSeconds * (0.1 / (5 * 60));
  return `${rideCost.toFixed(2).replace(".", ",")} EUR`;
}

function bindText(key, value) {
  document.querySelectorAll(`[data-bind="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function setStatusChip(label, statusClass) {
  const chip = document.querySelector('[data-bind="panel-status"]');
  if (!chip) return;
  chip.textContent = label;
  chip.classList.remove("available", "low");
  chip.classList.add(statusClass);
}

function showToast(message) {
  const toast = document.getElementById("app-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function setActiveFilter(nextFilter) {
  activeFilter = nextFilter;
  document.querySelectorAll("[data-filter]").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === nextFilter);
  });
}

function matchesSearch(itemName) {
  return !searchTerm || itemName.toLowerCase().includes(searchTerm);
}

function getVisibleScooterEntries() {
  return Object.entries(scooters).filter(([, item]) => {
    const filterMatch =
      activeFilter === "all" ||
      (activeFilter === "available" && item.statusClass === "available") ||
      (activeFilter === "low" && item.statusClass === "low");
    return filterMatch && matchesSearch(`${item.name} ${item.id}`);
  });
}

function getVisibleHubs() {
  return hubs.filter((hub) => {
    const filterMatch = activeFilter === "all" || activeFilter === "hub";
    return filterMatch && matchesSearch(hub.name);
  });
}

function ensureSelectedScooterVisible() {
  const visibleIds = new Set(getVisibleScooterEntries().map(([key]) => key));
  if (!selectedScooter && visibleIds.size) {
    return;
  }

  if (visibleIds.size && !visibleIds.has(selectedScooter)) {
    [selectedScooter] = visibleIds;
  }
}

function getContextScooter(hasScooters) {
  if (!hasScooters) return null;
  if (selectedScooter && scooters[selectedScooter]) {
    return scooters[selectedScooter];
  }

  const [firstVisibleKey] = getVisibleScooterEntries()[0] || [];
  return firstVisibleKey ? scooters[firstVisibleKey] : null;
}

function getFlowMeta(screen) {
  if (screen === "parked") {
    return { count: 6, total: 8, label: "Fahrt pausiert", progress: 75 };
  }

  const match = flowSteps.find((step) => step.id === screen) || flowSteps[0];
  return {
    count: match.count,
    total: 8,
    label: match.label,
    progress: (match.count / 8) * 100
  };
}

function getMobileNavTarget(screen) {
  if (screen === "home" || screen === "reserve" || screen === "pickup") {
    return screen === "reserve" ? "reserve" : "home";
  }

  if (screen === "detail" || screen === "unlock") {
    return "detail";
  }

  if (screen === "ride" || screen === "parked" || screen === "return-blocked") {
    return "ride";
  }

  if (screen === "return-ok" || screen === "summary") {
    return "return-ok";
  }

  return "home";
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 980px)").matches;
}

function getDefaultSheetMode() {
  return currentScreen === "home" ? "hidden" : "open";
}

function getSheetModeIndex(mode) {
  return Math.max(0, sheetModeOrder.indexOf(mode));
}

function setSheetMode(nextMode) {
  mobileSheetMode = nextMode;
  const shell = document.querySelector(".app-shell");
  if (!shell || !isMobileViewport()) return;
  shell.dataset.sheetMode = nextMode;
  shell.dataset.sheetOpen = String(nextMode !== "hidden");
}

function resetSheetOffset() {
  const dock = document.getElementById("control-dock");
  if (dock) {
    dock.style.setProperty("--sheet-offset", "0px");
  }
}

function snapSheetMode() {
  if (!isMobileViewport()) return;
  setSheetMode(mobileSheetMode);
  resetSheetOffset();
  window.setTimeout(() => maps.main?.invalidateSize(), 0);
}

function markerIcon(type, extraClass = "") {
  return L.divIcon({
    className: "",
    html: `<span class="map-marker ${type} ${extraClass}"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
}

function labelIcon(label) {
  return L.divIcon({
    className: "",
    html: `<span class="map-label">${label}</span>`,
    iconSize: [120, 24],
    iconAnchor: [10, 30]
  });
}

function createMap() {
  const map = L.map("main-map", {
    zoomControl: false,
    attributionControl: false,
    dragging: true,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: true
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(map);

  return map;
}

function lineStyle(color, dashArray = null) {
  return { color, weight: 5, opacity: 0.9, dashArray, lineCap: "round" };
}

function zoneStyle(tone) {
  if (tone === "danger") {
    return {
      color: "#ff8f8f",
      fillColor: "#8d1e2d",
      fillOpacity: 0.2,
      weight: 2
    };
  }

  if (tone === "success") {
    return {
      color: "#8df7b2",
      fillColor: "#4ddb84",
      fillOpacity: 0.22,
      weight: 2
    };
  }

  return {
    color: "#ffbf73",
    fillColor: "#8a531e",
    fillOpacity: 0.16,
    weight: 2
  };
}

function fitMapToPoints(points, zoom = 15) {
  if (!points.length) return;
  const bounds = L.latLngBounds(points);
  maps.main.fitBounds(bounds, { padding: [36, 36] });
  if (maps.main.getZoom() > zoom) {
    maps.main.setZoom(zoom);
  }
}

function clearMap() {
  maps.main.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      maps.main.removeLayer(layer);
    }
  });
}

function renderMap() {
  clearMap();
  const scooter = selectedScooter ? scooters[selectedScooter] : null;
  const visibleScooters = getVisibleScooterEntries();
  const visibleHubs = getVisibleHubs();
  const fitPoints = [userLocation];

  if (currentScreen === "home") {
    visibleHubs.forEach((hub) => {
      L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(maps.main);
      L.marker(hub.coords, { icon: labelIcon(hub.name), interactive: false }).addTo(maps.main);
    });

    visibleScooters.forEach(([key, item]) => {
      const marker = L.marker(item.coords, {
        icon: markerIcon("scooter", item.statusClass)
      });
      marker.on("click", () => {
        selectedScooter = key;
        showScreen("detail");
      });
      marker.addTo(maps.main);
    });

    L.marker(userLocation, { icon: markerIcon("user") }).addTo(maps.main);
    fitPoints.push(...visibleScooters.map(([, item]) => item.coords));
    fitPoints.push(...visibleHubs.map((hub) => hub.coords));
    fitMapToPoints(fitPoints, 15);
    return;
  }

  L.marker(userLocation, { icon: markerIcon("user") }).addTo(maps.main);

  if (currentScreen === "detail") {
    L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.circle(hubs[1].coords, { radius: 65, ...zoneStyle("success") }).addTo(maps.main);
    L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2", "10 10")).addTo(maps.main);
    L.polyline([scooter.coords, hubs[1].coords], lineStyle("#77dbff", "8 10")).addTo(maps.main);
    fitMapToPoints([userLocation, scooter.coords, hubs[1].coords], 16);
    return;
  }

  if (currentScreen === "reserve") {
    L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.circle(scooter.coords, { radius: 55, ...zoneStyle("warning") }).addTo(maps.main);
    L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2")).addTo(maps.main);
    fitMapToPoints([userLocation, scooter.coords], 16);
    return;
  }

  if (currentScreen === "pickup") {
    [["A-07", [49.44375, 11.8612]], ["A-12", [49.44355, 11.86148]], ["A-19", [49.44402, 11.86162]]].forEach(([key, coords]) => {
      const item = scooters[key];
      const marker = L.marker(coords, {
        icon: markerIcon("scooter", `${item.statusClass} ${key === selectedScooter ? "active" : ""}`)
      });
      marker.on("click", () => {
        selectedScooter = key;
        renderAll();
      });
      marker.addTo(maps.main);
      fitPoints.push(coords);
    });
    fitMapToPoints(fitPoints, 18);
    return;
  }

  if (currentScreen === "unlock") {
    L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.circle(scooter.coords, { radius: 45, ...zoneStyle("success") }).addTo(maps.main);
    fitMapToPoints([scooter.coords], 18);
    return;
  }

  if (currentScreen === "ride" || currentScreen === "parked") {
    L.marker(rideCheckpoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.circle(hubs[1].coords, { radius: 75, ...zoneStyle(currentScreen === "parked" ? "warning" : "success") }).addTo(maps.main);
    L.polyline([scooter.coords, rideCheckpoint, hubs[1].coords], lineStyle(currentScreen === "parked" ? "#ffbf73" : "#8df7b2")).addTo(maps.main);
    fitMapToPoints([scooter.coords, rideCheckpoint, hubs[1].coords], 15);
    return;
  }

  if (currentScreen === "return-blocked") {
    L.marker(blockedReturnPoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.circle(blockedReturnPoint, { radius: 80, ...zoneStyle("danger") }).addTo(maps.main);
    L.circle(hubs[1].coords, { radius: 65, ...zoneStyle("success") }).addTo(maps.main);
    L.polyline([blockedReturnPoint, hubs[1].coords], lineStyle("#ffbf73", "8 10")).addTo(maps.main);
    fitMapToPoints([blockedReturnPoint, hubs[1].coords], 16);
    return;
  }

  if (currentScreen === "return-ok" || currentScreen === "summary") {
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.marker(returnOkPoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.circle(hubs[1].coords, { radius: 60, ...zoneStyle("success") }).addTo(maps.main);
    L.polyline([returnOkPoint, hubs[1].coords], lineStyle("#8df7b2", "5 8")).addTo(maps.main);
    fitMapToPoints([hubs[1].coords, returnOkPoint], 17);
  }
}

function renderPanel() {
  const visibleScooters = getVisibleScooterEntries();
  const hasScooters = visibleScooters.length > 0;
  ensureSelectedScooterVisible();

  const scooter = getContextScooter(hasScooters);
  const isCleanMapState = currentScreen === "home";
  const shell = document.querySelector(".app-shell");
  if (shell) {
    if (isMobileViewport()) {
      const defaultMode = getDefaultSheetMode();
      if (mobileSheetMode === "hidden" && defaultMode === "open") {
        mobileSheetMode = "open";
      }
      if (defaultMode === "hidden") {
        mobileSheetMode = "hidden";
      }
      shell.dataset.sheetMode = mobileSheetMode;
      shell.dataset.sheetOpen = String(mobileSheetMode !== "hidden");
    } else {
      shell.dataset.sheetMode = !isCleanMapState ? "open" : "hidden";
      shell.dataset.sheetOpen = String(!isCleanMapState);
    }
  }

  if (!scooter && !isCleanMapState) {
    currentScreen = "home";
    if (shell) {
      if (isMobileViewport()) {
        mobileSheetMode = "hidden";
        shell.dataset.sheetMode = "hidden";
      }
      shell.dataset.sheetOpen = "false";
    }
  }

  const config = screenConfigs[currentScreen](scooter || scooters["A-07"]);
  bindText("screen-badge", config.badge);
  bindText("panel-kicker", config.kicker);
  bindText("panel-title", config.title);
  bindText("panel-copy", config.copy);
  bindText("metric-1-label", config.metrics[0][0]);
  bindText("metric-1-value", config.metrics[0][1]);
  bindText("metric-2-label", config.metrics[1][0]);
  bindText("metric-2-value", config.metrics[1][1]);
  bindText("metric-3-label", config.metrics[2][0]);
  bindText("metric-3-value", config.metrics[2][1]);
  bindText("info-1-title", config.info[0][0]);
  bindText("info-1-copy", config.info[0][1]);
  bindText("info-2-title", config.info[1][0]);
  bindText("info-2-copy", config.info[1][1]);
  bindText("focus-kicker", config.focus[0]);
  bindText("focus-title", config.focus[1]);
  bindText("focus-copy", config.focus[2]);
  bindText("map-context", config.mapContext);
  bindText("action-hint", config.actionHint);

  setStatusChip(config.status, config.statusClass);

  const flowMeta = getFlowMeta(currentScreen);
  bindText("flow-step", `Schritt ${flowMeta.count} von ${flowMeta.total}`);
  bindText("flow-title", flowMeta.label);
  const flowBar = document.getElementById("flow-bar-fill");
  if (flowBar) {
    flowBar.style.width = `${flowMeta.progress}%`;
  }

  const searchStrip = document.getElementById("search-strip");
  if (searchStrip) searchStrip.hidden = !config.showSearch;

  const focusBanner = document.getElementById("focus-banner");
  if (focusBanner) {
    focusBanner.dataset.tone = config.focus[3];
  }

  const backAction = document.getElementById("back-action");
  if (backAction) {
    const target = backTargets[currentScreen];
    backAction.hidden = !target;
    if (target) backAction.dataset.go = target;
  }

  const primaryAction = document.getElementById("primary-action");
  const secondaryAction = document.getElementById("secondary-action");
  const primaryActionLabel = document.getElementById("primary-action-label");
  const primaryActionMeta = document.getElementById("primary-action-meta");
  const secondaryActionLabel = document.getElementById("secondary-action-label");
  const secondaryActionMeta = document.getElementById("secondary-action-meta");

  primaryAction.dataset.go = config.primary[1];
  primaryActionLabel.textContent = config.primary[0];
  primaryActionMeta.textContent = config.primary[2];

  if (config.secondary) {
    secondaryAction.hidden = false;
    secondaryAction.dataset.go = config.secondary[1];
    secondaryActionLabel.textContent = config.secondary[0];
    secondaryActionMeta.textContent = config.secondary[2];
  } else {
    secondaryAction.hidden = true;
    delete secondaryAction.dataset.go;
    secondaryActionLabel.textContent = "";
    secondaryActionMeta.textContent = "";
  }

  primaryAction.disabled = currentScreen === "home" && !hasScooters;
  secondaryAction.disabled = false;
  if (secondaryAction.hidden) {
    secondaryAction.disabled = true;
  }

  bindText("map-available", `${visibleScooters.filter(([, item]) => item.status === "Verfuegbar").length} frei`);
  bindText("map-focus-id", scooter ? scooter.id : "KEIN SCOOTER");
  bindText("map-focus-title", scooter ? config.focus[1] : "Keine Treffer in dieser Auswahl");
  bindText("map-focus-copy", scooter ? config.focus[2] : "Suche oder Filter anpassen.");
  bindText("selection-pill-id", scooter && selectedScooter ? selectedScooter : "--");
  bindText("selection-pill-title", scooter ? `${scooter.battery} Akku` : "Keine Auswahl");
  bindText("selection-pill-meta", scooter ? scooter.distance : "Filter oder Suche anpassen");
}

function renderMobileNav() {
  const activeTarget = getMobileNavTarget(currentScreen);
  document.querySelectorAll("[data-mobile-nav]").forEach((item) => {
    item.classList.toggle("active", item.dataset.mobileNav === activeTarget);
  });
}

function renderAll() {
  renderPanel();
  renderMobileNav();
  renderMap();
  window.setTimeout(() => maps.main.invalidateSize(), 0);
}

function showScreen(nextScreen) {
  if (nextScreen === "home") {
    selectedScooter = null;
  }
  currentScreen = nextScreen;
  mobileSheetMode = getDefaultSheetMode();
  resetSheetOffset();
  renderAll();
}

function startCountdown() {
  if (countdownTimer) window.clearInterval(countdownTimer);
  const tick = () => {
    if (currentScreen === "reserve" || currentScreen === "ride" || currentScreen === "parked") {
      renderPanel();
    }
  };
  tick();
  countdownTimer = window.setInterval(tick, 1000);
}

function initMap() {
  maps.main = createMap();
}

function initSheetDrag() {
  const handle = document.getElementById("sheet-handle");
  const dock = document.getElementById("control-dock");
  if (!handle || !dock) return;

  const onPointerMove = (event) => {
    if (!sheetDrag || sheetDrag.pointerId !== event.pointerId) return;
    const deltaY = event.clientY - sheetDrag.startY;
    sheetDrag.lastDeltaY = deltaY;
    dock.style.setProperty("--sheet-offset", `${deltaY}px`);
  };

  const getSnapTarget = (startMode, deltaY) => {
    const startIndex = getSheetModeIndex(startMode);
    if (Math.abs(deltaY) < sheetDragThreshold) {
      return startMode;
    }

    if (deltaY < 0) {
      return sheetModeOrder[Math.min(startIndex + 1, sheetModeOrder.length - 1)];
    }

    return sheetModeOrder[Math.max(startIndex - 1, 0)];
  };

  const finishDrag = (pointerId, commit = true) => {
    if (!sheetDrag || sheetDrag.pointerId !== pointerId) return;
    const deltaY = sheetDrag.lastDeltaY || 0;
    const startMode = sheetDrag.startMode;
    handle.releasePointerCapture?.(pointerId);
    sheetDrag = null;
    resetSheetOffset();

    if (commit) {
      mobileSheetMode = getSnapTarget(startMode, deltaY);
    }

    snapSheetMode();
  };

  handle.addEventListener("click", () => {
    if (!isMobileViewport()) return;
    if (suppressSheetHandleClick) {
      suppressSheetHandleClick = false;
      return;
    }
    if (mobileSheetMode === "hidden") {
      if (!selectedScooter && currentScreen === "home") return;
      mobileSheetMode = "peek";
    } else if (mobileSheetMode === "peek") {
      mobileSheetMode = "open";
    } else {
      mobileSheetMode = "peek";
    }
    snapSheetMode();
  });

  handle.addEventListener("pointerdown", (event) => {
    if (!isMobileViewport()) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    sheetDrag = {
      pointerId: event.pointerId,
      startMode: mobileSheetMode,
      startY: event.clientY,
      lastDeltaY: 0
    };
    suppressSheetHandleClick = false;
    handle.setPointerCapture?.(event.pointerId);
  });

  handle.addEventListener("pointermove", (event) => {
    if (sheetDrag && Math.abs(event.clientY - sheetDrag.startY) > 8) {
      suppressSheetHandleClick = true;
    }
    onPointerMove(event);
  });
  handle.addEventListener("pointerup", (event) => finishDrag(event.pointerId, true));
  handle.addEventListener("pointercancel", (event) => finishDrag(event.pointerId, false));
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-go]");
  if (button) {
    showScreen(button.dataset.go);
    return;
  }

  const locate = event.target.closest("[data-action='locate']");
  if (locate) {
    maps.main.flyTo(userLocation, 16, { duration: 0.8 });
    showToast("Karte auf deinen Standort zentriert.");
    return;
  }

  const filterCycle = event.target.closest("[data-action='filter-cycle']");
  if (filterCycle) {
    const order = ["all", "available", "low", "hub"];
    const labels = {
      all: "Alle Fahrzeuge",
      available: "Nur verfuegbare Scooter",
      low: "Niedriger Akku",
      hub: "Nur Hubs"
    };
    const currentIndex = order.indexOf(activeFilter);
    const nextFilter = order[(currentIndex + 1) % order.length];
    setActiveFilter(nextFilter);
    if (currentScreen !== "home") {
      currentScreen = "home";
      selectedScooter = null;
    }
    renderAll();
    showToast(labels[nextFilter]);
  }
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveFilter(button.dataset.filter);
    if (currentScreen !== "home") {
      currentScreen = "home";
      selectedScooter = null;
    }
    renderAll();
  });
});

document.querySelectorAll("[data-search='map']").forEach((input) => {
  input.addEventListener("input", () => {
    searchTerm = input.value.trim().toLowerCase();
    if (currentScreen !== "home") {
      currentScreen = "home";
      selectedScooter = null;
    }
    renderAll();
  });
});

document.querySelectorAll("[data-mobile-nav]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.mobileNav;
    if (!target) return;
    if (target !== "home" && !selectedScooter) {
      showToast("Erst einen Scooter auf der Karte auswaehlen.");
      return;
    }
    showScreen(target);
  });
});

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    mobileSheetMode = getDefaultSheetMode();
    resetSheetOffset();
  } else {
    snapSheetMode();
  }
  maps.main?.invalidateSize();
});

initMap();
initSheetDrag();
startCountdown();
renderAll();
