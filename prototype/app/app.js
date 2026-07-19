const scooters = [
  {
    name: "E-Scooter AM-101",
    type: "E-Scooter am Marktplatz",
    range: "44 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44518, 11.85812]
  },
  {
    name: "E-Scooter AM-102",
    type: "E-Scooter in der Georgenstrasse",
    range: "37 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44488, 11.85922]
  },
  {
    name: "E-Scooter AM-103",
    type: "E-Scooter in der Bahnhofstrasse",
    range: "33 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44672, 11.86024]
  },
  {
    name: "E-Scooter AM-104",
    type: "E-Scooter in der Herrnstrasse",
    range: "51 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44431, 11.86058]
  },
  {
    name: "E-Scooter AM-105",
    type: "E-Scooter am Hallplatz",
    range: "29 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44452, 11.85724]
  },
  {
    name: "E-Scooter AM-106",
    type: "E-Scooter am Rossmarkt",
    range: "48 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44416, 11.85642]
  },
  {
    name: "E-Scooter AM-107",
    type: "E-Scooter in der Vilsstrasse",
    range: "42 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44384, 11.85588]
  },
  {
    name: "E-Scooter AM-108",
    type: "E-Scooter in der Regierungsstrasse",
    range: "39 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44566, 11.85746]
  },
  {
    name: "E-Scooter AM-109",
    type: "E-Scooter in der Zeughausstrasse",
    range: "35 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44602, 11.85884]
  },
  {
    name: "E-Scooter AM-110",
    type: "E-Scooter am Schrannenplatz",
    range: "46 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44473, 11.85988]
  },
  {
    name: "E-Scooter AM-111",
    type: "E-Scooter am Kaiser-Wilhelm-Ring",
    range: "31 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44418, 11.86482]
  },
  {
    name: "E-Scooter AM-112",
    type: "E-Scooter in der Kasernstrasse",
    range: "53 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44645, 11.85695]
  },
  {
    name: "E-Scooter AM-113",
    type: "E-Scooter an der OTH Amberg-Weiden",
    range: "41 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44482, 11.84788]
  },
  {
    name: "E-Scooter AM-114",
    type: "E-Scooter in der Paradiesgasse",
    range: "36 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44408, 11.85788]
  },
  {
    name: "E-Scooter AM-115",
    type: "E-Scooter in der Muehlgasse",
    range: "47 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44356, 11.85702]
  },
  {
    name: "E-Scooter AM-116",
    type: "E-Scooter am Nabburger Torplatz",
    range: "28 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44684, 11.86208]
  },
  {
    name: "E-Scooter AM-117",
    type: "E-Scooter am Emailfabrikplatz",
    range: "52 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44392, 11.84684]
  },
  {
    name: "E-Scooter AM-118",
    type: "E-Scooter am Kaiser-Ludwig-Ring",
    range: "43 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44624, 11.85486]
  },
  {
    name: "E-Scooter AM-119",
    type: "E-Scooter in der Ringtheaterstrasse",
    range: "34 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44706, 11.85858]
  },
  {
    name: "E-Scooter AM-120",
    type: "E-Scooter in der Schiffgasse",
    range: "49 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44438, 11.85862]
  },
  {
    name: "E-Scooter AM-121",
    type: "E-Scooter in der Vilsvorstadt",
    range: "38 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44328, 11.85512]
  },
  {
    name: "E-Scooter AM-122",
    type: "E-Scooter in der Mariansgasse",
    range: "45 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44406, 11.86394]
  },
  {
    name: "E-Scooter AM-123",
    type: "E-Scooter in der Pfarrgasse",
    range: "32 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44534, 11.85954]
  },
  {
    name: "E-Scooter AM-124",
    type: "E-Scooter in der Schiessstaette",
    range: "56 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44742, 11.85564]
  },
  {
    name: "E-Scooter AM-125",
    type: "E-Scooter an der Georg-Graner-Strasse",
    range: "30 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44552, 11.85092]
  },
  {
    name: "E-Scooter AM-126",
    type: "E-Scooter am Paulanerplatz",
    range: "40 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44588, 11.85608]
  },
  {
    name: "E-Scooter AM-127",
    type: "E-Scooter am Studentenwohnheim",
    range: "54 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44434, 11.84944]
  },
  {
    name: "E-Scooter AM-128",
    type: "E-Scooter in der Fleurystraße",
    range: "35 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44362, 11.86538]
  },
  {
    name: "E-Scooter AM-129",
    type: "E-Scooter am Salzstadelplatz",
    range: "50 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44348, 11.85614]
  },
  {
    name: "E-Scooter AM-130",
    type: "E-Scooter am Kaiser-Wilhelm-Ring Ost",
    range: "54 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44526, 11.86612]
  }
];

const hubs = [
  { name: "Campus OTH", coords: [49.4448780, 11.8473735] },
  { name: "Marktplatz", coords: [49.4452441, 11.8580549] },
  { name: "Bahnhof", coords: [49.4480826, 11.8611094] }
];

const userLocation = [49.4429, 11.86155];
const mapCenter = [49.4449, 11.8554];
const defaultZoom = 15;
const vehicleCard = document.getElementById("vehicle-card");
const vehicleCardClose = document.getElementById("vehicle-card-close");
const vehicleCardReserve = document.getElementById("vehicle-card-reserve");
const vehicleCardType = document.getElementById("vehicle-card-type");
const vehicleCardName = document.getElementById("vehicle-card-name");
const vehicleCardRange = document.getElementById("vehicle-card-range");
const vehicleCardPrice = document.getElementById("vehicle-card-price");
const bookingScreen = document.getElementById("booking-screen");
const bookingScreenBack = document.getElementById("booking-screen-back");
const bookingScreenCancel = document.getElementById("booking-screen-cancel");
const bookingScreenUnlock = document.getElementById("booking-screen-unlock");
const bookingScreenName = document.getElementById("booking-screen-name");
const bookingScreenType = document.getElementById("booking-screen-type");
const bookingScreenRange = document.getElementById("booking-screen-range");
const bookingScreenPrice = document.getElementById("booking-screen-price");
const bookingScreenTimer = document.getElementById("booking-screen-timer");
const unlockScreen = document.getElementById("unlock-screen");
const unlockScreenTitle = document.getElementById("unlock-screen-title");
const unlockScreenHint = document.getElementById("unlock-screen-hint");
const unlockScreenAction = document.getElementById("unlock-screen-action");
const rideStatus = document.getElementById("ride-status");
const rideStatusName = document.getElementById("ride-status-name");
const rideStatusTimer = document.getElementById("ride-status-timer");
const rideStatusCost = document.getElementById("ride-status-cost");

let activeScooterMarker = null;
let activeScooter = null;
let bookingCountdownId = null;
let bookingEndsAt = null;
let unlockTimeoutId = null;
let rideStatusIntervalId = null;
let rideStartedAt = null;

function markerIcon(type) {
  return L.divIcon({
    className: "",
    html: `<span class="map-marker ${type}"></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
}

const map = L.map("main-map", {
  zoomControl: false,
  attributionControl: false,
  scrollWheelZoom: false,
  dragging: true,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20
}).addTo(map);

map.setView(mapCenter, defaultZoom);

L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);

scooters.forEach((scooter) => {
  const marker = L.marker(scooter.coords, { icon: markerIcon("scooter") }).addTo(map);
  marker.on("click", () => {
    openVehicleCard(scooter, marker);
  });
});

hubs.forEach((hub) => {
  L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
});

vehicleCardClose.addEventListener("click", closeVehicleCard);
vehicleCardReserve.addEventListener("click", openBookingScreen);
bookingScreenBack.addEventListener("click", closeBookingScreen);
bookingScreenCancel.addEventListener("click", closeBookingScreen);
bookingScreenUnlock.addEventListener("click", openUnlockScreen);
unlockScreenAction.addEventListener("click", startRideSession);
map.on("click", closeVehicleCard);

function openVehicleCard(scooter, marker) {
  activeScooter = scooter;
  vehicleCardType.textContent = scooter.type;
  vehicleCardName.textContent = scooter.name;
  vehicleCardRange.textContent = scooter.range;
  vehicleCardPrice.textContent = scooter.price;
  vehicleCard.dataset.open = "true";
  vehicleCard.setAttribute("aria-hidden", "false");
  setActiveScooterMarker(marker);
  keepMarkerVisible(marker);
}

function closeVehicleCard() {
  vehicleCard.dataset.open = "false";
  vehicleCard.setAttribute("aria-hidden", "true");
  clearActiveScooterMarker();
}

function openBookingScreen() {
  if (!activeScooter) {
    return;
  }

  bookingScreenName.textContent = activeScooter.name;
  bookingScreenType.textContent = activeScooter.type;
  bookingScreenRange.textContent = activeScooter.range;
  bookingScreenPrice.textContent = activeScooter.price;
  vehicleCard.dataset.open = "false";
  vehicleCard.setAttribute("aria-hidden", "true");
  bookingScreen.dataset.open = "true";
  bookingScreen.setAttribute("aria-hidden", "false");
  startBookingCountdown();
}

function closeBookingScreen(reopenVehicleCard = true) {
  bookingScreen.dataset.open = "false";
  bookingScreen.setAttribute("aria-hidden", "true");
  stopBookingCountdown();
  bookingEndsAt = null;
  bookingScreenTimer.textContent = "10:00 Min";
  if (reopenVehicleCard && activeScooter && activeScooterMarker) {
    vehicleCard.dataset.open = "true";
    vehicleCard.setAttribute("aria-hidden", "false");
    keepMarkerVisible(activeScooterMarker);
  }
}

function openUnlockScreen() {
  if (!activeScooter) {
    return;
  }

  closeBookingScreen(false);
  resetUnlockScreen();
  unlockScreen.dataset.open = "true";
  unlockScreen.dataset.state = "unlocking";
  unlockScreen.setAttribute("aria-hidden", "false");
  unlockTimeoutId = window.setTimeout(finishUnlockScreen, 1600);
}

function finishUnlockScreen() {
  unlockScreen.dataset.state = "success";
  unlockScreenTitle.textContent = "Scooter ist bereit";
  unlockScreenHint.textContent = "Das Schloss ist offen. Halt den Lenker fest und starte deine Fahrt.";
  unlockScreenAction.disabled = false;
}

function closeUnlockScreen() {
  if (unlockTimeoutId) {
    window.clearTimeout(unlockTimeoutId);
    unlockTimeoutId = null;
  }
  unlockScreen.dataset.open = "false";
  unlockScreen.setAttribute("aria-hidden", "true");
}

function resetUnlockScreen() {
  closeUnlockScreen();
  unlockScreen.dataset.state = "unlocking";
  unlockScreenTitle.textContent = "Scooter wird entsperrt";
  unlockScreenHint.textContent = "Wir verbinden uns mit dem Schloss. Das dauert nur einen Moment.";
  unlockScreenAction.disabled = true;
}

function startRideSession() {
  if (!activeScooter) {
    return;
  }

  closeUnlockScreen();
  vehicleCard.dataset.open = "false";
  vehicleCard.setAttribute("aria-hidden", "true");
  clearActiveScooterMarker();
  rideStartedAt = Date.now();
  rideStatusName.textContent = activeScooter.name;
  rideStatus.dataset.active = "true";
  rideStatus.setAttribute("aria-hidden", "false");
  updateRideStatus();
  stopRideStatus();
  rideStatusIntervalId = window.setInterval(updateRideStatus, 1000);
}

function startBookingCountdown() {
  bookingEndsAt = Date.now() + 10 * 60 * 1000;
  stopBookingCountdown();
  updateBookingCountdown();
  bookingCountdownId = window.setInterval(updateBookingCountdown, 1000);
}

function stopBookingCountdown() {
  if (bookingCountdownId) {
    window.clearInterval(bookingCountdownId);
    bookingCountdownId = null;
  }
}

function updateBookingCountdown() {
  if (!bookingEndsAt) {
    bookingScreenTimer.textContent = "10:00 Min";
    return;
  }

  const remainingMs = Math.max(bookingEndsAt - Date.now(), 0);
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  bookingScreenTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} Min`;

  if (remainingSeconds === 0) {
    stopBookingCountdown();
  }
}

function stopRideStatus() {
  if (rideStatusIntervalId) {
    window.clearInterval(rideStatusIntervalId);
    rideStatusIntervalId = null;
  }
}

function updateRideStatus() {
  if (!rideStartedAt) {
    rideStatusTimer.textContent = "00:00";
    rideStatusCost.textContent = "1,00 EUR";
    return;
  }

  const elapsedSeconds = Math.max(Math.floor((Date.now() - rideStartedAt) / 1000), 0);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const cost = 1 + (elapsedSeconds / 60) * 0.19;

  rideStatusTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  rideStatusCost.textContent = `${cost.toFixed(2).replace(".", ",")} EUR`;
}

function setActiveScooterMarker(marker) {
  clearActiveScooterMarker();
  activeScooterMarker = marker;
  const markerNode = marker.getElement()?.querySelector(".map-marker.scooter");
  if (markerNode) {
    markerNode.classList.add("is-active");
  }
}

function clearActiveScooterMarker() {
  const markerNode = activeScooterMarker?.getElement()?.querySelector(".map-marker.scooter");
  if (markerNode) {
    markerNode.classList.remove("is-active");
  }
  activeScooterMarker = null;
}

function keepMarkerVisible(marker) {
  const cardHeight = vehicleCard.getBoundingClientRect().height;
  const mapWidth = map.getSize().x;
  const mapHeight = map.getSize().y;
  const markerPoint = map.latLngToContainerPoint(marker.getLatLng());
  const visibleMapHeight = Math.max(mapHeight - cardHeight, 0);
  const targetPoint = {
    x: mapWidth / 2,
    y: Math.max(visibleMapHeight * 0.46, 120)
  };
  const panOffsetX = markerPoint.x - targetPoint.x;
  const panOffsetY = markerPoint.y - targetPoint.y;

  map.panBy([panOffsetX, panOffsetY], { animate: true, duration: 0.3 });
}
