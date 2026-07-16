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

let currentScreen = "home";
let selectedScooter = "A-07";
let activeFilter = "all";
let searchTerm = "";
let countdownTimer = null;
let toastTimer = null;

const maps = {
  main: null
};

const screenConfigs = {
  home: (scooter) => ({
    kicker: "Live Map",
    badge: "Live Map",
    title: "Finde deinen naechsten Ride",
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Waehle einen Scooter auf der Karte oder starte direkt mit dem empfohlenen Ride.",
    metrics: [
      ["Akku", scooter.battery],
      ["Reichweite", scooter.range],
      ["Distanz", scooter.distance]
    ],
    info: [
      ["Rueckgabe", scooter.returnRule],
      ["Hinweis", scooter.note]
    ],
    primary: ["Jetzt entsperren", "detail"],
    secondary: ["Reservieren", "reserve"],
    showSearch: true
  }),
  detail: (scooter) => ({
    kicker: "Scooter Detail",
    badge: "Detail",
    title: scooter.id,
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Alle Kerninfos fuer die Entscheidung vor dem Unlock.",
    metrics: [
      ["Akku", scooter.battery],
      ["Reichweite", scooter.range],
      ["Distanz", scooter.distance]
    ],
    info: [
      ["Tarif", "0,10 EUR pro 5 Min"],
      ["Rueckgabe", scooter.returnRule]
    ],
    primary: ["Jetzt entsperren", "unlock"],
    secondary: ["Reservieren", "reserve"]
  }),
  reserve: (scooter) => ({
    kicker: "Reservierung",
    badge: "Countdown",
    title: "Reservierung aktiv",
    status: "Laeuft",
    statusClass: "available",
    copy: "Dein Scooter bleibt fuer 30 Minuten exklusiv fuer dich reserviert.",
    metrics: [
      ["Timer", formatCountdown(getReserveSecondsLeft())],
      ["Fussweg", scooter.distance],
      ["Scooter", scooter.id.replace("SCOOTER ", "")]
    ],
    info: [
      ["Navigation", "Direkter Weg zum reservierten Scooter."],
      ["Status", "Nach Ablauf wird er wieder freigegeben."]
    ],
    primary: ["Vor Ort bestaetigen", "pickup"],
    secondary: ["Abbrechen", "home"]
  }),
  pickup: (scooter) => ({
    kicker: "Vor Ort",
    badge: "Zuordnung",
    title: "Richtigen Scooter bestaetigen",
    status: scooter.status,
    statusClass: scooter.statusClass,
    copy: "Pruefe Nummer am Lenker oder Schloss, bevor du entsperrst.",
    metrics: [
      ["Gewaehlt", scooter.name],
      ["Naehe", scooter.distance],
      ["Akku", scooter.battery]
    ],
    info: [
      ["Identifikation", scooter.pickup],
      ["Wichtig", "Falscher Unlock muss ausgeschlossen sein."]
    ],
    primary: ["Diesen Scooter entsperren", "unlock"],
    secondary: ["Zur Reservierung", "reserve"]
  }),
  unlock: (scooter) => ({
    kicker: "Unlock",
    badge: "Freigabe",
    title: "Scooter entsperrt",
    status: "Bereit",
    statusClass: "available",
    copy: "Kurzer Uebergang, dann direkt in die aktive Fahrt.",
    metrics: [
      ["Scooter", scooter.name],
      ["Akku", scooter.battery],
      ["Status", "Bereit"]
    ],
    info: [
      ["Hinweis", "Fahre vorsichtig und beachte die Verkehrsregeln."],
      ["Naechster Schritt", "Jetzt startet die aktive Fahrt."]
    ],
    primary: ["Fahrt starten", "ride"],
    secondary: ["Zur Karte", "home"]
  }),
  ride: (scooter) => ({
    kicker: "Ride Active",
    badge: "LIVE",
    title: "Fahrt aktiv",
    status: "Aktiv",
    statusClass: "available",
    copy: "Zeit, Kosten und Rueckgabe bleiben auf einen Blick erreichbar.",
    metrics: [
      ["Dauer", "12:10"],
      ["Kosten", "0,30 EUR"],
      ["Akku", scooter.rideBattery]
    ],
    info: [
      ["Bonus", "Rueckgabe am Hub bringt 30 Freiminuten."],
      ["Optionen", "Parken sichert kurz, Rueckgabe beendet final."]
    ],
    primary: ["Fahrt beenden", "return-blocked"],
    secondary: ["Temporaer parken", "parked"]
  }),
  parked: () => ({
    kicker: "Pause",
    badge: "Geparkt",
    title: "Scooter temporaer geparkt",
    status: "Pause",
    statusClass: "low",
    copy: "Die Abrechnung laeuft weiter, bis du die Fahrt wirklich beendest.",
    metrics: [
      ["Zeit", "14:25"],
      ["Kosten", "0,40 EUR"],
      ["Status", "Pause"]
    ],
    info: [
      ["Achtung", "Pause ist nicht gleich Rueckgabe."],
      ["Weiter", "Du kannst jederzeit wieder losfahren."]
    ],
    primary: ["Weiterfahren", "ride"],
    secondary: ["Jetzt zurueckgeben", "return-blocked"]
  }),
  "return-blocked": () => ({
    kicker: "Return Check",
    badge: "Blockiert",
    title: "Rueckgabe hier nicht moeglich",
    status: "Blockiert",
    statusClass: "low",
    copy: "Standortregel nicht erfuellt. Fahre zum naechsten Ladehub.",
    metrics: [
      ["Hub", "240 m"],
      ["Akku", "62 %"],
      ["Regel", "Nicht erlaubt"]
    ],
    info: [
      ["Naechster Schritt", "Zum Marktplatz-Hub fahren."],
      ["Grund", "Hier ist keine regulaere Rueckgabe erlaubt."]
    ],
    primary: ["Zum Ladehub", "return-ok"],
    secondary: ["Zurueck zur Fahrt", "ride"]
  }),
  "return-ok": () => ({
    kicker: "Return Check",
    badge: "Freigabe",
    title: "Rueckgabe moeglich",
    status: "Erlaubt",
    statusClass: "available",
    copy: "Ladehub erkannt. Bonus wird bei der Rueckgabe gutgeschrieben.",
    metrics: [
      ["Hub", "Marktplatz"],
      ["Bonus", "30 Min"],
      ["Regel", "Erfuellt"]
    ],
    info: [
      ["Rueckgabe", "Freier Ladepunkt verfuegbar."],
      ["Bonus", "Freiminuten werden direkt gebucht."]
    ],
    primary: ["Rueckgabe bestaetigen", "summary"],
    secondary: ["Zurueck", "return-blocked"]
  }),
  summary: () => ({
    kicker: "Abschluss",
    badge: "Done",
    title: "Fahrt beendet",
    status: "Erledigt",
    statusClass: "available",
    copy: "Sauber abgeschlossen, Bonus gebucht, keine weiteren Kosten offen.",
    metrics: [
      ["Dauer", "18:25"],
      ["Kosten", "0,40 EUR"],
      ["Bonus", "30 Min"]
    ],
    info: [
      ["Rueckgabeort", "Marktplatz Ladehub"],
      ["Status", "Keine offenen Posten."]
    ],
    primary: ["Zur Karte", "home"],
    secondary: ["Erneut ansehen", "detail"]
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
  if (visibleIds.size && !visibleIds.has(selectedScooter)) {
    [selectedScooter] = visibleIds;
  }
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

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(map);

  return map;
}

function lineStyle(color, dashArray = null) {
  return { color, weight: 5, opacity: 0.9, dashArray, lineCap: "round" };
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
  const scooter = scooters[selectedScooter];
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
        icon: markerIcon("scooter", `${item.statusClass} ${key === selectedScooter ? "active" : ""}`)
      });
      marker.on("click", () => {
        selectedScooter = key;
        renderAll();
      });
      marker.addTo(maps.main);
    });

    L.marker(userLocation, { icon: markerIcon("user") }).addTo(maps.main);
    if (visibleScooters.length) {
      L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2", "10 10")).addTo(maps.main);
      fitPoints.push(...visibleScooters.map(([, item]) => item.coords));
    }
    fitPoints.push(...visibleHubs.map((hub) => hub.coords));
    fitMapToPoints(fitPoints, 15);
    return;
  }

  L.marker(userLocation, { icon: markerIcon("user") }).addTo(maps.main);

  if (currentScreen === "detail") {
    L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2", "10 10")).addTo(maps.main);
    L.polyline([scooter.coords, hubs[1].coords], lineStyle("#77dbff", "8 10")).addTo(maps.main);
    fitMapToPoints([userLocation, scooter.coords, hubs[1].coords], 16);
    return;
  }

  if (currentScreen === "reserve") {
    L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
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
    fitMapToPoints([scooter.coords], 18);
    return;
  }

  if (currentScreen === "ride" || currentScreen === "parked") {
    L.marker(rideCheckpoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.polyline([scooter.coords, rideCheckpoint, hubs[1].coords], lineStyle(currentScreen === "parked" ? "#ffbf73" : "#8df7b2")).addTo(maps.main);
    fitMapToPoints([scooter.coords, rideCheckpoint, hubs[1].coords], 15);
    return;
  }

  if (currentScreen === "return-blocked") {
    L.marker(blockedReturnPoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.circle(blockedReturnPoint, {
      radius: 80,
      color: "#ff8f8f",
      fillColor: "#8d1e2d",
      fillOpacity: 0.2,
      weight: 2
    }).addTo(maps.main);
    L.polyline([blockedReturnPoint, hubs[1].coords], lineStyle("#ffbf73", "8 10")).addTo(maps.main);
    fitMapToPoints([blockedReturnPoint, hubs[1].coords], 16);
    return;
  }

  if (currentScreen === "return-ok" || currentScreen === "summary") {
    L.marker(hubs[1].coords, { icon: markerIcon("hub") }).addTo(maps.main);
    L.marker(returnOkPoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(maps.main);
    L.circle(hubs[1].coords, {
      radius: 60,
      color: "#8df7b2",
      fillColor: "#4ddb84",
      fillOpacity: 0.22,
      weight: 2
    }).addTo(maps.main);
    fitMapToPoints([hubs[1].coords, returnOkPoint], 17);
  }
}

function renderPanel() {
  const scooter = scooters[selectedScooter];
  const visibleScooters = getVisibleScooterEntries();
  const hasScooters = visibleScooters.length > 0;
  if (currentScreen === "home" && hasScooters) {
    ensureSelectedScooterVisible();
  }

  const config = screenConfigs[currentScreen](scooter);
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

  setStatusChip(config.status, config.statusClass);

  const searchStrip = document.getElementById("search-strip");
  if (searchStrip) searchStrip.hidden = !config.showSearch;

  const primaryAction = document.getElementById("primary-action");
  const secondaryAction = document.getElementById("secondary-action");
  primaryAction.textContent = config.primary[0];
  primaryAction.dataset.go = config.primary[1];
  secondaryAction.textContent = config.secondary[0];
  secondaryAction.dataset.go = config.secondary[1];

  primaryAction.disabled = currentScreen === "home" && !hasScooters;
  secondaryAction.disabled = false;

  bindText("map-available", `${visibleScooters.filter(([, item]) => item.status === "Verfuegbar").length} frei`);
  bindText("map-focus-id", hasScooters ? scooter.id : "KEIN SCOOTER");
  bindText("map-focus-title", hasScooters ? `${scooter.battery} Akku, ${scooter.distance} entfernt` : "Keine Treffer in dieser Auswahl");
  bindText("map-focus-copy", hasScooters ? "Direkt verfuegbar und fuer die aktuelle Aktion am sinnvollsten." : "Suche oder Filter anpassen.");
}

function renderNav() {
  const navTarget =
    currentScreen === "ride" || currentScreen === "parked" || currentScreen.startsWith("return")
      ? "ride"
      : "map";
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.toggle("active", item.dataset.nav === navTarget);
  });
}

function renderAll() {
  renderPanel();
  renderNav();
  renderMap();
  window.setTimeout(() => maps.main.invalidateSize(), 0);
}

function showScreen(nextScreen) {
  currentScreen = nextScreen;
  renderAll();
}

function startCountdown() {
  if (countdownTimer) window.clearInterval(countdownTimer);
  const tick = () => {
    if (currentScreen === "reserve") {
      renderPanel();
    }
  };
  tick();
  countdownTimer = window.setInterval(tick, 1000);
}

function initMap() {
  maps.main = createMap();
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
  }
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((chip) => chip.classList.toggle("active", chip === button));
    if (currentScreen !== "home") {
      currentScreen = "home";
    }
    renderAll();
  });
});

document.querySelectorAll("[data-search='map']").forEach((input) => {
  input.addEventListener("input", () => {
    searchTerm = input.value.trim().toLowerCase();
    if (currentScreen !== "home") {
      currentScreen = "home";
    }
    renderAll();
  });
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.nav === "map") {
      showScreen("home");
      return;
    }

    if (item.dataset.nav === "ride") {
      showScreen("ride");
      return;
    }

    showToast("Im Prototyp noch nicht ausgearbeitet.");
  });
});

window.addEventListener("resize", () => {
  maps.main?.invalidateSize();
});

initMap();
startCountdown();
renderAll();
