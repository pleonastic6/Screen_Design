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
    copy: "Rueckgabe im Stadtgebiet moeglich. Ladehub-Bonus verfuegbar.",
    note: "Am Ladehub Marktplatz bekommst du 30 Freiminuten.",
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
    copy: "Etwas weiter weg, aber stabiler Akkustand und freie Rueckgabe.",
    note: "Marktplatz-Hub liegt auf dem Rueckweg und bringt den Bonus.",
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
    copy: "Niedriger Akku. Sinnvoll nur fuer kurze Strecken oder Hub-Naehe.",
    note: "Dieser Scooter sollte nach der Fahrt wieder an einen Ladehub.",
    pickup: "Akku 24 % - 11 m entfernt",
    coords: [49.44495, 11.86385]
  }
};

const hubs = [
  { id: "oth", name: "Campus OTH", coords: [49.43855, 11.86215] },
  { id: "markt", name: "Marktplatz", coords: [49.44275, 11.86015] },
  { id: "bahnhof", name: "Bahnhof", coords: [49.44615, 11.86655] }
];

const userLocation = [49.4429, 11.86155];
const rideCheckpoint = [49.4414, 11.8577];
const blockedReturnPoint = [49.44065, 11.85665];

const scenarios = {
  home: {
    title: "Spontane Fahrt ab Bahnhof",
    copy: "Waehle einen verfuegbaren Scooter auf der Karte und geh den kompletten Pfad bis zur Rueckgabe durch."
  },
  detail: {
    title: "Entscheidung vor dem Unlock",
    copy: "Hier muessen Akku, Preis und Rueckgaberegeln sofort lesbar sein."
  },
  reserve: {
    title: "Reservierung vor dem Losgehen",
    copy: "Countdown und Verbindlichkeit sind wichtiger als schicke Deko."
  },
  pickup: {
    title: "Mehrere Scooter vor Ort",
    copy: "Der richtige Scooter muss eindeutig identifizierbar sein, sonst wird der Flow peinlich."
  },
  unlock: {
    title: "Kurze Vertrauensphase",
    copy: "Entsperren darf keine bloede Schwebe erzeugen. Kurz, klar, fertig."
  },
  ride: {
    title: "Aktive Fahrt",
    copy: "Zeit, Kosten und Rueckgabeoptionen bleiben im Fokus. Keine Spielerei."
  },
  parked: {
    title: "Zwischenstopp",
    copy: "Parken darf nicht mit Rueckgabe verwechselt werden. Darum der harte Hinweis."
  },
  "return-blocked": {
    title: "Rueckgabe blockiert",
    copy: "Fehlermeldung plus naechste Aktion. Sonst frustriert der Nutzer sofort."
  },
  "return-ok": {
    title: "Rueckgabe erlaubt",
    copy: "Bonus und Regelkonformitaet werden direkt bestaetigt."
  },
  summary: {
    title: "Ride Summary",
    copy: "Der Abschluss muss sauber sagen: Fahrt vorbei, Kosten klar, Bonus gebucht."
  }
};

const screenOrder = ["home", "detail", "reserve", "pickup", "unlock", "ride", "return-ok"];
const maps = {};
const reserveDurationSeconds = 30 * 60;
const reserveStartedAt = Date.now() - (2 * 60 + 26) * 1000;
let currentScreen = "home";
let selectedScooter = "A-07";
let activeFilter = "all";
let searchTerm = "";
let countdownTimer = null;
let toastTimer = null;

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

function showToast(message) {
  const toast = document.getElementById("app-toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("visible");

  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2200);
}

function bindText(key, value) {
  document.querySelectorAll(`[data-bind="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function setStatusChip(target, label, statusClass) {
  document.querySelectorAll(`[data-bind="${target}"]`).forEach((node) => {
    node.textContent = label;
    node.classList.remove("available", "low");
    node.classList.add(statusClass);
  });
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

function createMap(id) {
  const map = L.map(id, {
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
  return {
    color,
    weight: 5,
    opacity: 0.9,
    dashArray,
    lineCap: "round"
  };
}

function fitMapToPoints(map, points, zoom = 15) {
  if (!points.length) {
    return;
  }

  const bounds = L.latLngBounds(points);
  map.fitBounds(bounds, { padding: [36, 36] });
  if (map.getZoom() > zoom) {
    map.setZoom(zoom);
  }
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

function renderHomeMap() {
  const map = maps.home;
  ensureSelectedScooterVisible();
  const scooter = scooters[selectedScooter];
  const visibleScooters = getVisibleScooterEntries();
  const visibleHubs = getVisibleHubs();

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  visibleHubs.forEach((hub) => {
    L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
    L.marker(hub.coords, { icon: labelIcon(hub.name), interactive: false }).addTo(map);
  });

  visibleScooters.forEach(([key, item]) => {
    const marker = L.marker(item.coords, {
      icon: markerIcon("scooter", `${item.statusClass} ${key === selectedScooter ? "active" : ""}`)
    });

    marker.on("click", () => {
      selectedScooter = key;
      renderScooter();
      renderMapScreens();
    });

    marker.addTo(map);
  });

  L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);

  const fitPoints = [userLocation];

  if (visibleScooters.length) {
    L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2", "10 10")).addTo(map);
    fitPoints.push(...visibleScooters.map(([, item]) => item.coords));
  }

  fitPoints.push(...visibleHubs.map((hub) => hub.coords));
  fitMapToPoints(map, fitPoints, 15);
}

function renderDetailMap() {
  const map = maps.detail;
  const scooter = scooters[selectedScooter];
  const nearestHub = hubs[1];

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);
  L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(map);
  L.marker(nearestHub.coords, { icon: markerIcon("hub") }).addTo(map);
  L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2", "10 10")).addTo(map);
  L.polyline([scooter.coords, nearestHub.coords], lineStyle("#77dbff", "8 10")).addTo(map);
  fitMapToPoints(map, [userLocation, scooter.coords, nearestHub.coords], 16);
}

function renderReserveMap() {
  const map = maps.reserve;
  const scooter = scooters[selectedScooter];

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);
  L.marker(scooter.coords, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(map);
  L.polyline([userLocation, scooter.coords], lineStyle("#8df7b2")).addTo(map);
  fitMapToPoints(map, [userLocation, scooter.coords], 16);
}

function renderRideMap() {
  const map = maps.ride;
  const scooter = scooters[selectedScooter];
  const hub = hubs[1];

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  L.marker(rideCheckpoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(map);
  L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
  L.polyline([scooter.coords, rideCheckpoint, hub.coords], lineStyle("#8df7b2")).addTo(map);
  fitMapToPoints(map, [scooter.coords, rideCheckpoint, hub.coords], 15);
}

function renderBlockedReturnMap() {
  const map = maps["return-blocked"];
  const hub = hubs[1];
  const scooter = scooters[selectedScooter];

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  L.marker(blockedReturnPoint, { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(map);
  L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
  L.circle(blockedReturnPoint, {
    radius: 80,
    color: "#ff8f8f",
    fillColor: "#8d1e2d",
    fillOpacity: 0.2,
    weight: 2
  }).addTo(map);
  L.polyline([blockedReturnPoint, hub.coords], lineStyle("#ffbf73", "8 10")).addTo(map);
  fitMapToPoints(map, [blockedReturnPoint, hub.coords], 16);
}

function renderOkReturnMap() {
  const map = maps["return-ok"];
  const hub = hubs[1];
  const scooter = scooters[selectedScooter];

  map.eachLayer((layer) => {
    if (!(layer instanceof L.TileLayer)) {
      map.removeLayer(layer);
    }
  });

  L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
  L.marker([49.4427, 11.86035], { icon: markerIcon("scooter", `active ${scooter.statusClass}`) }).addTo(map);
  L.circle(hub.coords, {
    radius: 60,
    color: "#8df7b2",
    fillColor: "#4ddb84",
    fillOpacity: 0.22,
    weight: 2
  }).addTo(map);
  fitMapToPoints(map, [hub.coords, [49.4427, 11.86035]], 17);
}

function renderMapScreens() {
  renderHomeMap();
  renderDetailMap();
  renderReserveMap();
  renderRideMap();
  renderBlockedReturnMap();
  renderOkReturnMap();

  Object.values(maps).forEach((map) => {
    window.setTimeout(() => map.invalidateSize(), 0);
  });
}

function renderScooter() {
  const visibleScooters = getVisibleScooterEntries();
  const hasScooters = visibleScooters.length > 0;
  if (hasScooters) {
    ensureSelectedScooterVisible();
  }
  const scooter = scooters[selectedScooter];
  const availableCount = visibleScooters.filter(([, item]) => item.status === "Verfuegbar").length;
  const emptyState = document.getElementById("map-empty-state");
  const actionButtons = document.querySelectorAll(".selection-panel .primary-btn, .selection-panel .secondary-btn");

  bindText("map-available", `${availableCount} frei`);
  bindText("home-id", hasScooters ? scooter.id : "KEIN SCOOTER");
  bindText("home-name", hasScooters ? scooter.name : "Keine Auswahl");
  bindText("home-headline", hasScooters ? `${scooter.battery} Akku, ${scooter.distance} entfernt` : "Nutze Suche oder Filter fuer neue Treffer.");
  bindText("home-battery", hasScooters ? scooter.battery : "--");
  bindText("home-range", hasScooters ? scooter.range : "--");
  bindText("home-distance", hasScooters ? scooter.distance : "--");
  bindText("home-copy", hasScooters ? scooter.copy : "Aktuell ist in dieser Auswahl nichts verfuegbar.");
  bindText("home-note", hasScooters ? scooter.note : "Tipp: Zurueck auf 'Alle' oder nach Hub/Scooter-ID suchen.");

  bindText("detail-id", scooter.id);
  bindText("detail-status", scooter.status);
  bindText("detail-battery", scooter.battery);
  bindText("detail-range", scooter.range);
  bindText("detail-distance", scooter.distance);
  bindText("detail-return", scooter.returnRule);

  bindText("reserve-id", scooter.id);
  bindText("reserve-distance", `${scooter.distance} Fussweg`);
  bindText("reserve-timer", formatCountdown(getReserveSecondsLeft()));

  bindText("ride-battery", scooter.rideBattery);

  bindText("desktop-scooter-name", hasScooters ? scooter.name : "Keine Auswahl");
  bindText("desktop-scooter-copy", hasScooters
    ? `${scooter.battery} Akku, ${scooter.distance} entfernt, ${scooter.status.toLowerCase()}.`
    : "Keine Treffer in der aktuellen Filterung.");
  bindText("desktop-scooter-range", hasScooters ? `${scooter.range} Reichweite` : "--");
  bindText("desktop-scooter-distance", hasScooters ? `${scooter.distance} Fussweg` : "--");

  setStatusChip("home-status", scooter.status, scooter.statusClass);
  setStatusChip("desktop-scooter-status", scooter.status, scooter.statusClass);

  if (!hasScooters) {
    setStatusChip("home-status", "Leer", "low");
    setStatusChip("desktop-scooter-status", "Leer", "low");
  }

  document.querySelectorAll(".choice-card[data-pickup]").forEach((card) => {
    card.classList.toggle("selected", card.dataset.pickup === selectedScooter);
  });

  actionButtons.forEach((button) => {
    button.disabled = !hasScooters;
  });

  if (emptyState) {
    emptyState.hidden = hasScooters;
    emptyState.classList.toggle("visible", !hasScooters);
  }
}

function renderScenario() {
  const scenario = scenarios[currentScreen] || scenarios.home;
  bindText("scenario-title", scenario.title);
  bindText("scenario-copy", scenario.copy);
}

function renderFlow() {
  const activeIndex = screenOrder.indexOf(currentScreen);

  document.querySelectorAll(".flow-step").forEach((step, index) => {
    const isActive = step.dataset.step === currentScreen;
    const isPassed = activeIndex !== -1 && index < activeIndex;
    step.classList.toggle("active", isActive);
    step.classList.toggle("passed", isPassed);
  });
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

function startCountdown() {
  if (countdownTimer) {
    window.clearInterval(countdownTimer);
  }

  const tick = () => {
    bindText("reserve-timer", formatCountdown(getReserveSecondsLeft()));
  };

  tick();
  countdownTimer = window.setInterval(tick, 1000);
}

function showScreen(nextScreen) {
  currentScreen = nextScreen;

  document.querySelectorAll(".app-screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === nextScreen);
  });

  renderFlow();
  renderScenario();
  renderNav();
  document.querySelector(".app-surface")?.scrollIntoView({ behavior: "smooth", block: "start" });

  Object.values(maps).forEach((map) => {
    window.setTimeout(() => map.invalidateSize(), 0);
  });
}

function resetFlow() {
  selectedScooter = "A-07";
  renderScooter();
  renderMapScreens();
  showScreen("home");
  showToast("Flow zurueckgesetzt.");
}

function initMaps() {
  maps.home = createMap("home-map");
  maps.detail = createMap("detail-map");
  maps.reserve = createMap("reserve-map");
  maps.ride = createMap("ride-map");
  maps["return-blocked"] = createMap("return-blocked-map");
  maps["return-ok"] = createMap("return-ok-map");
  renderMapScreens();
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

document.querySelectorAll("[data-action='reset']").forEach((button) => {
  button.addEventListener("click", resetFlow);
});

document.querySelectorAll(".choice-card[data-pickup]").forEach((card) => {
  card.addEventListener("click", () => {
    selectedScooter = card.dataset.pickup;
    renderScooter();
    renderMapScreens();
    showToast(`${scooters[selectedScooter].name} ausgewaehlt.`);
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });
    renderScooter();
    renderMapScreens();
    showToast(`Filter: ${button.textContent}`);
  });
});

document.querySelectorAll("[data-search='map']").forEach((input) => {
  input.addEventListener("input", () => {
    searchTerm = input.value.trim().toLowerCase();
    renderScooter();
    renderMapScreens();
  });
});

document.querySelectorAll("[data-action='locate']").forEach((button) => {
  button.addEventListener("click", () => {
    maps.home.flyTo(userLocation, 16, { duration: 0.8 });
    showToast("Karte auf deinen Standort zentriert.");
  });
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.dataset.nav === "map") {
      showScreen("home");
      return;
    }

    if (item.dataset.nav === "ride") {
      showScreen(currentScreen === "parked" ? "parked" : "ride");
      return;
    }

    showToast("Dieser Bereich ist im Prototyp noch nicht ausgearbeitet.");
  });
});

window.addEventListener("resize", () => {
  Object.values(maps).forEach((map) => map.invalidateSize());
});

initMaps();
renderScooter();
startCountdown();
showScreen("home");
