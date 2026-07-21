const PRICE_LABEL = "0,10 EUR je 5 Min";

const scooters = [
  {
    name: "E-Scooter AM-101",
    type: "E-Scooter am Marktplatz",
    range: "44 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44518, 11.85812]
  },
  {
    name: "E-Scooter AM-102",
    type: "E-Scooter in der Georgenstraße",
    range: "37 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44488, 11.85922]
  },
  {
    name: "E-Scooter AM-103",
    type: "E-Scooter in der Bahnhofstraße",
    range: "33 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44672, 11.86024]
  },
  {
    name: "E-Scooter AM-104",
    type: "E-Scooter in der Herrnstraße",
    range: "51 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44431, 11.86058]
  },
  {
    name: "E-Scooter AM-105",
    type: "E-Scooter am Hallplatz",
    range: "29 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44452, 11.85724]
  },
  {
    name: "E-Scooter AM-106",
    type: "E-Scooter am Rossmarkt",
    range: "48 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44416, 11.85642]
  },
  {
    name: "E-Scooter AM-107",
    type: "E-Scooter in der Vilsstraße",
    range: "42 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44384, 11.85588]
  },
  {
    name: "E-Scooter AM-108",
    type: "E-Scooter in der Regierungsstraße",
    range: "39 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44566, 11.85746]
  },
  {
    name: "E-Scooter AM-109",
    type: "E-Scooter in der Zeughausstraße",
    range: "35 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44602, 11.85884]
  },
  {
    name: "E-Scooter AM-110",
    type: "E-Scooter am Schrannenplatz",
    range: "46 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44473, 11.85988]
  },
  {
    name: "E-Scooter AM-111",
    type: "E-Scooter am Kaiser-Wilhelm-Ring",
    range: "31 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44418, 11.86482]
  },
  {
    name: "E-Scooter AM-112",
    type: "E-Scooter in der Kasernstraße",
    range: "53 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44645, 11.85695]
  },
  {
    name: "E-Scooter AM-113",
    type: "E-Scooter an der OTH Amberg-Weiden",
    range: "41 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44482, 11.84788]
  },
  {
    name: "E-Scooter AM-114",
    type: "E-Scooter in der Paradiesgasse",
    range: "36 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44408, 11.85788]
  },
  {
    name: "E-Scooter AM-115",
    type: "E-Scooter in der Mühlgasse",
    range: "47 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44356, 11.85702]
  },
  {
    name: "E-Scooter AM-116",
    type: "E-Scooter am Nabburger Torplatz",
    range: "28 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44684, 11.86208]
  },
  {
    name: "E-Scooter AM-117",
    type: "E-Scooter am Emailfabrikplatz",
    range: "52 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44392, 11.84684]
  },
  {
    name: "E-Scooter AM-118",
    type: "E-Scooter am Kaiser-Ludwig-Ring",
    range: "43 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44624, 11.85486]
  },
  {
    name: "E-Scooter AM-119",
    type: "E-Scooter in der Ringtheaterstraße",
    range: "34 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44706, 11.85858]
  },
  {
    name: "E-Scooter AM-120",
    type: "E-Scooter in der Schiffgasse",
    range: "49 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44438, 11.85862]
  },
  {
    name: "E-Scooter AM-121",
    type: "E-Scooter in der Vilsvorstadt",
    range: "38 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44328, 11.85512]
  },
  {
    name: "E-Scooter AM-122",
    type: "E-Scooter in der Mariansgasse",
    range: "45 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44406, 11.86394]
  },
  {
    name: "E-Scooter AM-123",
    type: "E-Scooter in der Pfarrgasse",
    range: "32 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44534, 11.85954]
  },
  {
    name: "E-Scooter AM-124",
    type: "E-Scooter in der Schießstätte",
    range: "56 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44742, 11.85564]
  },
  {
    name: "E-Scooter AM-125",
    type: "E-Scooter an der Georg-Graner-Straße",
    range: "30 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44552, 11.85092]
  },
  {
    name: "E-Scooter AM-126",
    type: "E-Scooter am Paulanerplatz",
    range: "40 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44588, 11.85608]
  },
  {
    name: "E-Scooter AM-127",
    type: "E-Scooter am Studentenwohnheim",
    range: "54 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44434, 11.84944]
  },
  {
    name: "E-Scooter AM-128",
    type: "E-Scooter in der Fleurystraße",
    range: "35 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44362, 11.86538]
  },
  {
    name: "E-Scooter AM-129",
    type: "E-Scooter am Salzstadelplatz",
    range: "50 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44348, 11.85614]
  },
  {
    name: "E-Scooter AM-130",
    type: "E-Scooter am Kaiser-Wilhelm-Ring Ost",
    range: "54 km Reichweite",
    price: PRICE_LABEL,
    coords: [49.44526, 11.86612]
  }
];

const RESERVATION_MINUTES = 30;

const hubs = [
  { name: "Campus OTH", coords: [49.4448780, 11.8473735] },
  { name: "Marktplatz", coords: [49.4452441, 11.8580549] },
  { name: "Bahnhof", coords: [49.4480826, 11.8611094] }
];

const returnZones = [
  {
    name: "Stadtgebiet Amberg",
    shortName: "Stadtgebiet",
    points: [
      [49.45010, 11.84398],
      [49.45038, 11.84682],
      [49.45052, 11.84992],
      [49.45060, 11.85374],
      [49.45066, 11.85742],
      [49.45064, 11.86112],
      [49.45048, 11.86424],
      [49.44996, 11.86634],
      [49.44886, 11.86760],
      [49.44708, 11.86834],
      [49.44474, 11.86862],
      [49.44222, 11.86842],
      [49.44004, 11.86772],
      [49.43862, 11.86620],
      [49.43808, 11.86402],
      [49.43800, 11.86082],
      [49.43806, 11.85688],
      [49.43814, 11.85298],
      [49.43834, 11.84938],
      [49.43872, 11.84628],
      [49.43962, 11.84434],
      [49.44110, 11.84326],
      [49.44314, 11.84280],
      [49.44544, 11.84268],
      [49.44772, 11.84280],
      [49.44930, 11.84310]
    ]
  }
];

const restrictedZones = [
  {
    name: "Bahnhofsvorplatz",
    shortName: "Bahnhof",
    points: [
      [49.44890, 11.85992],
      [49.44896, 11.86086],
      [49.44896, 11.86192],
      [49.44876, 11.86250],
      [49.44824, 11.86270],
      [49.44766, 11.86264],
      [49.44726, 11.86218],
      [49.44718, 11.86130],
      [49.44722, 11.86034],
      [49.44748, 11.85982],
      [49.44810, 11.85968]
    ]
  },
  {
    name: "Vilsufer an der Schiffgasse",
    shortName: "Vilsufer",
    points: [
      [49.44488, 11.85764],
      [49.44492, 11.85824],
      [49.44484, 11.85892],
      [49.44456, 11.85928],
      [49.44412, 11.85934],
      [49.44372, 11.85918],
      [49.44356, 11.85872],
      [49.44356, 11.85798],
      [49.44368, 11.85750],
      [49.44410, 11.85736],
      [49.44458, 11.85740]
    ]
  }
];

const hubZones = [
  {
    name: "Campus OTH Ladehub",
    shortName: "Campus OTH",
    center: [49.4448780, 11.8473735],
    points: [
      [49.44510, 11.84705],
      [49.44510, 11.84770],
      [49.44466, 11.84770],
      [49.44466, 11.84705]
    ]
  },
  {
    name: "Marktplatz Ladehub",
    shortName: "Marktplatz",
    center: [49.4452441, 11.8580549],
    points: [
      [49.44547, 11.85770],
      [49.44547, 11.85840],
      [49.44500, 11.85840],
      [49.44500, 11.85770]
    ]
  },
  {
    name: "Bahnhof Ladehub",
    shortName: "Bahnhof",
    center: [49.4480826, 11.8611094],
    points: [
      [49.44828, 11.86075],
      [49.44828, 11.86148],
      [49.44788, 11.86148],
      [49.44788, 11.86075]
    ]
  }
];

const summaryRouteTemplates = [
  {
    id: "marktplatz-loop",
    anchor: [49.4452441, 11.8580549],
    label: "Innenstadt-Loop",
    waypoints: [
      [49.44492, 11.85918],
      [49.44428, 11.85994],
      [49.44388, 11.85878],
      [49.44422, 11.85718],
      [49.44502, 11.85636],
      [49.44592, 11.85682],
      [49.44628, 11.85806]
    ]
  },
  {
    id: "bahnhof-arc",
    anchor: [49.4480826, 11.8611094],
    label: "Bahnhof-Bogen",
    waypoints: [
      [49.44724, 11.86042],
      [49.44646, 11.85936],
      [49.44572, 11.85822],
      [49.44518, 11.85688],
      [49.44592, 11.85534],
      [49.44704, 11.85614],
      [49.44808, 11.85808]
    ]
  },
  {
    id: "campus-swing",
    anchor: [49.4448780, 11.8473735],
    label: "Campus-Swing",
    waypoints: [
      [49.44418, 11.84824],
      [49.44404, 11.84966],
      [49.44452, 11.85104],
      [49.44534, 11.85166],
      [49.44610, 11.85072],
      [49.44594, 11.84896],
      [49.44526, 11.84768]
    ]
  },
  {
    id: "weststadt-link",
    anchor: [49.44588, 11.85608],
    label: "Weststadt-Link",
    waypoints: [
      [49.44638, 11.85488],
      [49.44592, 11.85372],
      [49.44488, 11.85342],
      [49.44406, 11.85430],
      [49.44386, 11.85588],
      [49.44474, 11.85694],
      [49.44574, 11.85732]
    ]
  }
];

const userLocation = [49.4429, 11.86155];
const mapCenter = [49.4449, 11.8554];
const defaultZoom = 15;
const vehicleCard = document.getElementById("vehicle-card");
const vehicleCardClose = document.getElementById("vehicle-card-close");
const vehicleCardReserve = document.getElementById("vehicle-card-reserve");
const vehicleCardReserveTitle = document.getElementById("vehicle-card-reserve-title");
const vehicleCardType = document.getElementById("vehicle-card-type");
const vehicleCardName = document.getElementById("vehicle-card-name");
const vehicleCardStatus = document.getElementById("vehicle-card-status");
const vehicleCardRange = document.getElementById("vehicle-card-range");
const vehicleCardPrice = document.getElementById("vehicle-card-price");
const vehicleCardBatteryIcon = document.getElementById("vehicle-card-battery-icon");
const bookingScreen = document.getElementById("booking-screen");
const bookingScreenBack = document.getElementById("booking-screen-back");
const bookingScreenCancel = document.getElementById("booking-screen-cancel");
const bookingScreenUnlock = document.getElementById("booking-screen-unlock");
const bookingScreenName = document.getElementById("booking-screen-name");
const bookingScreenType = document.getElementById("booking-screen-type");
const bookingScreenRange = document.getElementById("booking-screen-range");
const bookingScreenPrice = document.getElementById("booking-screen-price");
const bookingScreenTimer = document.getElementById("booking-screen-timer");
const confirmScreen = document.getElementById("confirm-screen");
const confirmScreenBack = document.getElementById("confirm-screen-back");
const confirmScreenBackAction = document.getElementById("confirm-screen-back-action");
const confirmScreenUnlock = document.getElementById("confirm-screen-unlock");
const confirmScreenName = document.getElementById("confirm-screen-name");
const confirmScreenType = document.getElementById("confirm-screen-type");
const confirmScreenBattery = document.getElementById("confirm-screen-battery");
const confirmScreenBatteryIcon = document.getElementById("confirm-screen-battery-icon");
const confirmScreenRange = document.getElementById("confirm-screen-range");
const confirmScreenOptions = document.getElementById("confirm-screen-options");
const confirmScreenSelectionNote = document.getElementById("confirm-screen-selection-note");
const issueScreen = document.getElementById("issue-screen");
const issueScreenBack = document.getElementById("issue-screen-back");
const issueScreenReturn = document.getElementById("issue-screen-return");
const issueScreenSearch = document.getElementById("issue-screen-search");
const issueScreenName = document.getElementById("issue-screen-name");
const unlockScreen = document.getElementById("unlock-screen");
const unlockScreenTitle = document.getElementById("unlock-screen-title");
const unlockScreenHint = document.getElementById("unlock-screen-hint");
const unlockScreenAction = document.getElementById("unlock-screen-action");
const unlockErrorScreen = document.getElementById("unlock-error-screen");
const unlockErrorScreenRetry = document.getElementById("unlock-error-screen-retry");
const unlockErrorScreenSearch = document.getElementById("unlock-error-screen-search");
const rideScreen = document.getElementById("ride-screen");
const rideScreenName = document.getElementById("ride-screen-name");
const rideScreenTimer = document.getElementById("ride-screen-timer");
const rideScreenCost = document.getElementById("ride-screen-cost");
const rideScreenTimerDetail = document.getElementById("ride-screen-timer-detail");
const rideScreenCostDetail = document.getElementById("ride-screen-cost-detail");
const rideScreenBattery = document.getElementById("ride-screen-battery");
const rideScreenBatteryIcon = document.getElementById("ride-screen-battery-icon");
const rideScreenRange = document.getElementById("ride-screen-range");
const rideScreenZone = document.getElementById("ride-screen-zone");
const rideScreenZonePill = document.getElementById("ride-screen-zone-pill");
const rideScreenZoneTitle = document.getElementById("ride-screen-zone-title");
const rideScreenZoneCopy = document.getElementById("ride-screen-zone-copy");
const rideScreenZoneAction = document.getElementById("ride-screen-zone-action");
const rideScreenPause = document.getElementById("ride-screen-pause");
const rideScreenEnd = document.getElementById("ride-screen-end");
const pauseScreen = document.getElementById("pause-screen");
const pauseScreenTime = document.getElementById("pause-screen-time");
const pauseScreenCost = document.getElementById("pause-screen-cost");
const pauseScreenResume = document.getElementById("pause-screen-resume");
const pauseScreenEnd = document.getElementById("pause-screen-end");
const returnScreen = document.getElementById("return-screen");
const returnScreenBack = document.getElementById("return-screen-back");
const returnScreenContinue = document.getElementById("return-screen-continue");
const returnScreenConfirm = document.getElementById("return-screen-confirm");
const returnScreenHero = document.getElementById("return-screen-hero");
const returnScreenStatusLabel = document.getElementById("return-screen-status-label");
const returnScreenStatusTitle = document.getElementById("return-screen-status-title");
const returnScreenTime = document.getElementById("return-screen-time");
const returnScreenCost = document.getElementById("return-screen-cost");
const returnScreenZone = document.getElementById("return-screen-zone");
const returnScreenBattery = document.getElementById("return-screen-battery");
const returnScreenBatteryIcon = document.getElementById("return-screen-battery-icon");
const returnScreenHub = document.getElementById("return-screen-hub");
const returnScreenBonus = document.getElementById("return-screen-bonus");
const summaryScreen = document.getElementById("summary-screen");
const summaryScreenTime = document.getElementById("summary-screen-time");
const summaryScreenCost = document.getElementById("summary-screen-cost");
const summaryScreenZone = document.getElementById("summary-screen-zone");
const summaryScreenBonus = document.getElementById("summary-screen-bonus");
const summaryScreenDistance = document.getElementById("summary-screen-distance");
const summaryScreenStart = document.getElementById("summary-screen-start");
const summaryScreenEnd = document.getElementById("summary-screen-end");
const summaryScreenRouteMap = document.getElementById("summary-screen-route-map");
const summaryScreenClose = document.getElementById("summary-screen-close");
const splashScreen = document.getElementById("splash-screen");

let activeScooterMarker = null;
let activeScooter = null;
let bookingCountdownId = null;
let bookingEndsAt = null;
let unlockTimeoutId = null;
let rideStatusIntervalId = null;
let rideStartedAt = null;
let lastReturnContext = null;
let rideCurrentCoords = null;
let rideStartCoords = null;
let selectedConfirmScooterName = null;
let summaryMap = null;
let summaryRouteLayer = null;
let summaryRouteStartMarker = null;
let summaryRouteEndMarker = null;
let summaryRouteRequestId = 0;

document.body.classList.add("splash-active");
window.setTimeout(() => {
  document.body.classList.add("splash-done");
  splashScreen?.classList.add("is-hidden");
}, 1550);

scooters.forEach((scooter, index) => {
  const batteryPercent = getBatteryPercent(scooter.range);
  if (index === 2 || index === 14 || index === 23) {
    scooter.status = "reserved";
  } else if (index === 0 || index === 12 || index === 17) {
    scooter.status = "charging";
  } else if (batteryPercent <= 35) {
    scooter.status = "low";
  } else {
    scooter.status = "available";
  }

  scooter.price = PRICE_LABEL;
});

function markerIcon(type) {
  const isScooter = type.includes("scooter");
  const isHub = type.includes("hub");
  return L.divIcon({
    className: "",
    html: isScooter
      ? `<span class="map-marker ${type}"><img class="map-marker__scooter-icon" src="escooter-mint.svg" alt="" /></span>`
      : isHub
        ? `<span class="map-marker ${type}"><img class="map-marker__hub-icon" src="hub-plug-blue.svg" alt="" /></span>`
        : `<span class="map-marker ${type}"></span>`,
    iconSize: isScooter ? [42, 42] : isHub ? [34, 42] : [24, 24],
    iconAnchor: isScooter ? [21, 21] : isHub ? [17, 21] : [12, 12]
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

returnZones.forEach((zone) => {
  L.polygon(zone.points, {
    color: "#67c85e",
    weight: 2,
    fillColor: "#8fe27a",
    fillOpacity: 0.16
  }).addTo(map);
});

restrictedZones.forEach((zone) => {
  L.polygon(zone.points, {
    color: "#f06d6d",
    weight: 2,
    fillColor: "#f39a9a",
    fillOpacity: 0.18
  }).addTo(map);
});

L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);

scooters.forEach((scooter) => {
  const marker = L.marker(scooter.coords, { icon: markerIcon(`scooter ${scooter.status}`) }).addTo(map);
  marker.on("click", () => {
    openVehicleCard(scooter, marker);
  });
});

hubs.forEach((hub) => {
  L.marker(hub.coords, { icon: markerIcon("hub"), zIndexOffset: 1000 }).addTo(map);
});

vehicleCardClose.addEventListener("click", closeVehicleCard);
vehicleCardReserve.addEventListener("click", openBookingScreen);
bookingScreenBack.addEventListener("click", closeBookingScreen);
bookingScreenCancel.addEventListener("click", closeBookingScreen);
bookingScreenUnlock.addEventListener("click", openConfirmScreen);
confirmScreenBack.addEventListener("click", closeConfirmScreen);
confirmScreenBackAction.addEventListener("click", closeConfirmScreen);
confirmScreenUnlock.addEventListener("click", openUnlockScreen);
confirmScreenOptions.addEventListener("click", handleConfirmOptionClick);
issueScreenBack.addEventListener("click", closeIssueScreen);
issueScreenReturn.addEventListener("click", closeIssueScreen);
issueScreenSearch.addEventListener("click", searchAnotherScooter);
unlockScreenAction.addEventListener("click", startRideSession);
unlockErrorScreenRetry.addEventListener("click", retryUnlockFlow);
unlockErrorScreenSearch.addEventListener("click", searchAnotherScooter);
rideScreenZoneAction.addEventListener("click", moveRideToNearestHub);
rideScreenPause.addEventListener("click", openPauseScreen);
rideScreenEnd.addEventListener("click", openReturnScreen);
pauseScreenResume.addEventListener("click", closePauseScreen);
pauseScreenEnd.addEventListener("click", openReturnScreenFromPause);
returnScreenBack.addEventListener("click", closeReturnScreen);
returnScreenContinue.addEventListener("click", closeReturnScreen);
returnScreenConfirm.addEventListener("click", confirmReturn);
summaryScreenClose.addEventListener("click", closeSummaryScreen);
map.on("click", closeVehicleCard);

function openVehicleCard(scooter, marker) {
  activeScooter = scooter;
  vehicleCardType.textContent = scooter.type;
  vehicleCardName.textContent = scooter.name;
  vehicleCardStatus.textContent = getAvailabilityLabel(scooter.status);
  vehicleCard.dataset.status = scooter.status;
  vehicleCardRange.textContent = scooter.range;
  setBatteryIcon(vehicleCardBatteryIcon, scooter);
  vehicleCardPrice.textContent = PRICE_LABEL;
  vehicleCardReserve.disabled = scooter.status === "reserved";
  vehicleCardReserveTitle.textContent = scooter.status === "reserved" ? "Derzeit reserviert" : "30 Min reservieren";
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
  if (!activeScooter || activeScooter.status === "reserved") {
    return;
  }

  bookingScreenName.textContent = activeScooter.name;
  bookingScreenType.textContent = activeScooter.type;
  bookingScreenRange.textContent = activeScooter.range;
  bookingScreenPrice.textContent = PRICE_LABEL;
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
  bookingScreenTimer.textContent = "30:00 Min";
  if (reopenVehicleCard && activeScooter && activeScooterMarker) {
    vehicleCard.dataset.open = "true";
    vehicleCard.setAttribute("aria-hidden", "false");
    keepMarkerVisible(activeScooterMarker);
  }
}

function openConfirmScreen() {
  if (!activeScooter) {
    return;
  }

  bookingScreen.dataset.open = "false";
  bookingScreen.setAttribute("aria-hidden", "true");
  confirmScreenName.textContent = activeScooter.name;
  confirmScreenType.textContent = activeScooter.type;
  confirmScreenBattery.textContent = getBatteryLabel(activeScooter.range);
  setBatteryIcon(confirmScreenBatteryIcon, activeScooter);
  confirmScreenRange.textContent = activeScooter.range;
  renderConfirmScooterOptions();
  updateConfirmSelection(activeScooter.name);
  confirmScreen.dataset.open = "true";
  confirmScreen.setAttribute("aria-hidden", "false");
}

function closeConfirmScreen(reopenBooking = true) {
  confirmScreen.dataset.open = "false";
  confirmScreen.setAttribute("aria-hidden", "true");
  if (reopenBooking) {
    bookingScreen.dataset.open = "true";
    bookingScreen.setAttribute("aria-hidden", "false");
  }
}

function openIssueScreen() {
  if (!activeScooter) {
    return;
  }

  issueScreenName.textContent = activeScooter.name;
  confirmScreen.dataset.open = "false";
  confirmScreen.setAttribute("aria-hidden", "true");
  issueScreen.dataset.open = "true";
  issueScreen.setAttribute("aria-hidden", "false");
}

function closeIssueScreen(reopenConfirm = true) {
  issueScreen.dataset.open = "false";
  issueScreen.setAttribute("aria-hidden", "true");
  if (reopenConfirm) {
    confirmScreen.dataset.open = "true";
    confirmScreen.setAttribute("aria-hidden", "false");
  }
}

function searchAnotherScooter() {
  closeUnlockErrorScreen();
  closeIssueScreen(false);
  closeConfirmScreen(false);
  closeBookingScreen(false);
  closeUnlockScreen();
  closeVehicleCard();
}

function openUnlockScreen() {
  if (!activeScooter || selectedConfirmScooterName !== activeScooter.name) {
    return;
  }

  closeUnlockErrorScreen();
  closeIssueScreen(false);
  closeConfirmScreen(false);
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

function openUnlockErrorScreen() {
  closeUnlockScreen();
  unlockErrorScreen.dataset.open = "true";
  unlockErrorScreen.setAttribute("aria-hidden", "false");
}

function closeUnlockErrorScreen() {
  unlockErrorScreen.dataset.open = "false";
  unlockErrorScreen.setAttribute("aria-hidden", "true");
}

function retryUnlockFlow() {
  closeUnlockErrorScreen();
  openUnlockScreen();
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
  rideStartCoords = activeScooter.coords;
  rideCurrentCoords = activeScooter.coords;
  rideScreenName.textContent = activeScooter.name;
  rideScreenBattery.textContent = getBatteryLabel(activeScooter.range);
  setBatteryIcon(rideScreenBatteryIcon, activeScooter);
  rideScreenRange.textContent = activeScooter.range;
  updateRideZoneUI();
  rideScreen.dataset.open = "true";
  rideScreen.setAttribute("aria-hidden", "false");
  closePauseScreen();
  closeReturnScreen();
  closeSummaryScreen();
  updateRideStatus();
  stopRideStatus();
  rideStatusIntervalId = window.setInterval(updateRideStatus, 1000);
}

function openPauseScreen() {
  pauseScreen.dataset.open = "true";
  pauseScreen.setAttribute("aria-hidden", "false");
  updateRideStatus();
}

function closePauseScreen() {
  pauseScreen.dataset.open = "false";
  pauseScreen.setAttribute("aria-hidden", "true");
}

function openReturnScreenFromPause() {
  closePauseScreen();
  openReturnScreen();
}

function openReturnScreen() {
  if (!activeScooter) {
    return;
  }

  const batteryPercent = getBatteryPercent(activeScooter.range);
  const zoneContext = getZoneContext(activeScooter, rideCurrentCoords);
  const needsHubBecauseLowBattery = batteryPercent <= 30 && !zoneContext.nearHub;
  const returnAllowed = zoneContext.returnAllowed && !needsHubBecauseLowBattery;
  lastReturnContext = {
    batteryPercent,
    zoneLabel: zoneContext.summaryLabel,
    nearHub: zoneContext.nearHub,
    returnAllowed
  };

  returnScreenHero.classList.toggle("return-sheet__hero--success", returnAllowed);
  returnScreenHero.classList.toggle("return-sheet__hero--danger", !returnAllowed);
  returnScreenTime.textContent = rideScreenTimer.textContent;
  returnScreenCost.textContent = rideScreenCost.textContent;
  returnScreenStatusLabel.textContent = returnAllowed ? "Rückgabe erlaubt" : "Rückgabe gesperrt";
  returnScreenStatusTitle.textContent = needsHubBecauseLowBattery
    ? "Akku zu niedrig. Bitte direkt an einem Ladehub abstellen."
    : zoneContext.returnTitle;
  returnScreenZone.textContent = `${zoneContext.label} · ${returnAllowed ? "Abstellen möglich" : "nicht freigegeben"}`;
  returnScreenBattery.textContent = `${batteryPercent} % · ${needsHubBecauseLowBattery ? "unter 30 %, bitte Ladehub nutzen" : zoneContext.batteryHint}`;
  setBatteryIcon(returnScreenBatteryIcon, activeScooter);
  returnScreenHub.textContent = zoneContext.hubHint;
  returnScreenBonus.textContent = needsHubBecauseLowBattery
    ? `${zoneContext.hubHint}. Dort ist die Rückgabe trotz niedrigem Akku möglich.`
    : zoneContext.returnCopy;
  returnScreenConfirm.disabled = !returnAllowed;
  returnScreen.dataset.open = "true";
  returnScreen.setAttribute("aria-hidden", "false");
}

function closeReturnScreen() {
  returnScreen.dataset.open = "false";
  returnScreen.setAttribute("aria-hidden", "true");
}

function confirmReturn() {
  const durationLabel = rideScreenTimer.textContent;
  const costLabel = rideScreenCost.textContent;
  const context = lastReturnContext ?? {
    zoneLabel: getZoneLabel(activeScooter?.type ?? ""),
    nearHub: false
  };

  stopRideStatus();
  rideStartedAt = null;
  const finalCoords = rideCurrentCoords ?? activeScooter?.coords ?? rideStartCoords;
  const startCoords = rideStartCoords ?? activeScooter?.coords;
  rideCurrentCoords = null;
  rideStartCoords = null;
  closeReturnScreen();
  rideScreen.dataset.open = "false";
  rideScreen.setAttribute("aria-hidden", "true");
  closePauseScreen();
  summaryScreenTime.textContent = durationLabel;
  summaryScreenCost.textContent = costLabel;
  summaryScreenZone.textContent = context.nearHub ? `${context.zoneLabel} Ladehub` : `${context.zoneLabel} Stadtgebiet`;
  summaryScreenBonus.textContent = context.nearHub
    ? "30 Freiminuten gutgeschrieben"
    : "Kein Bonus, aber Rückgabe war gültig";
  summaryScreen.dataset.open = "true";
  summaryScreen.setAttribute("aria-hidden", "false");
  window.requestAnimationFrame(() => {
    renderSummaryRoute(startCoords, finalCoords, context).catch(() => {});
  });
}

function closeSummaryScreen() {
  summaryScreen.dataset.open = "false";
  summaryScreen.setAttribute("aria-hidden", "true");
}

async function renderSummaryRoute(startCoords, endCoords, context) {
  if (!startCoords || !endCoords) {
    summaryScreenDistance.textContent = "0,0 km";
    summaryScreenStart.textContent = "Startpunkt";
    summaryScreenEnd.textContent = context.nearHub ? `${context.zoneLabel} Ladehub` : `${context.zoneLabel} Stadtgebiet`;
    return;
  }

  const routeTemplate = getSummaryRouteTemplate(startCoords, endCoords, context);
  const routeCoords = buildGenericStreetRoute(startCoords, endCoords, routeTemplate);
  const distanceKm = getRouteDistanceKm(routeCoords);
  summaryScreenDistance.textContent = `${distanceKm.toFixed(1).replace(".", ",")} km`;
  summaryScreenStart.textContent = getStartLabel(startCoords);
  summaryScreenEnd.textContent = context.nearHub ? `${context.zoneLabel} Ladehub` : `${context.zoneLabel} Stadtgebiet`;
  drawSummaryRoute(routeCoords, startCoords, endCoords);
}

function getStartLabel(coords) {
  const nearestHub = getNearestHub(coords);
  if (nearestHub && map.distance(coords, nearestHub.center) < 280) {
    return nearestHub.shortName ?? nearestHub.name;
  }

  return "Scooter-Standort";
}

function getSummaryRouteTemplate(startCoords, endCoords, context) {
  const routeAnchor = context.nearHub
    ? getNearestHub(endCoords)?.center ?? endCoords
    : endCoords;

  return summaryRouteTemplates.reduce((best, template) => {
    if (!best) {
      return template;
    }

    return map.distance(routeAnchor, template.anchor) < map.distance(routeAnchor, best.anchor) ? template : best;
  }, null);
}

function buildGenericStreetRoute(startCoords, endCoords, template) {
  if (!template) {
    return [startCoords, endCoords];
  }

  const route = [startCoords];
  const startToTemplate = map.distance(startCoords, template.waypoints[0]);
  const endToTemplate = map.distance(endCoords, template.waypoints[template.waypoints.length - 1]);

  if (startToTemplate > endToTemplate) {
    route.push(...template.waypoints);
  } else {
    route.push(...template.waypoints.slice().reverse());
  }

  route.push(endCoords);
  return route;
}

function getRouteDistanceKm(routeCoords) {
  if (routeCoords.length < 2) {
    return 0;
  }

  let meters = 0;
  for (let index = 1; index < routeCoords.length; index += 1) {
    meters += map.distance(routeCoords[index - 1], routeCoords[index]);
  }

  return meters / 1000;
}

function ensureSummaryMap() {
  if (summaryMap) {
    return summaryMap;
  }

  summaryMap = L.map(summaryScreenRouteMap, {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20
  }).addTo(summaryMap);

  return summaryMap;
}

function drawSummaryRoute(routeCoords, startCoords, endCoords) {
  const routeMap = ensureSummaryMap();

  if (summaryRouteLayer) {
    summaryRouteLayer.remove();
  }

  summaryRouteLayer = L.polyline(routeCoords, {
    color: "#7ee892",
    weight: 5,
    opacity: 0.95,
    lineCap: "round",
    lineJoin: "round"
  }).addTo(routeMap);

  if (summaryRouteStartMarker) {
    summaryRouteStartMarker.remove();
  }

  if (summaryRouteEndMarker) {
    summaryRouteEndMarker.remove();
  }

  summaryRouteStartMarker = L.marker(startCoords, {
    icon: L.divIcon({
      className: "",
      html: '<img class="summary-route-marker summary-route-marker--start" src="route-pin-coral.svg" alt="" />',
      iconSize: [24, 32],
      iconAnchor: [12, 30]
    })
  }).addTo(routeMap);

  summaryRouteEndMarker = L.marker(endCoords, {
    icon: L.divIcon({
      className: "",
      html: '<img class="summary-route-marker summary-route-marker--end" src="route-pin-coral.svg" alt="" />',
      iconSize: [24, 32],
      iconAnchor: [12, 30]
    })
  }).addTo(routeMap);

  const bounds = L.latLngBounds(routeCoords);
  routeMap.fitBounds(bounds.pad(0.22), { animate: false });
  window.setTimeout(() => routeMap.invalidateSize(false), 0);
}

function startBookingCountdown() {
  bookingEndsAt = Date.now() + RESERVATION_MINUTES * 60 * 1000;
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
    bookingScreenTimer.textContent = "30:00 Min";
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
    rideScreenTimer.textContent = "00:00";
    rideScreenCost.textContent = "0,00 EUR";
    rideScreenTimerDetail.textContent = "00:00";
    rideScreenCostDetail.textContent = "0,00 EUR";
    pauseScreenTime.textContent = "00:00";
    pauseScreenCost.textContent = "0,00 EUR";
    returnScreenTime.textContent = "00:00";
    returnScreenCost.textContent = "0,00 EUR";
    return;
  }

  const elapsedSeconds = Math.max(Math.floor((Date.now() - rideStartedAt) / 1000), 0);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;
  const billingBlocks = Math.ceil(elapsedSeconds / 300);
  const cost = billingBlocks * 0.10;
  const elapsedLabel = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const costLabel = `${cost.toFixed(2).replace(".", ",")} EUR`;

  rideScreenTimer.textContent = elapsedLabel;
  rideScreenCost.textContent = costLabel;
  rideScreenTimerDetail.textContent = elapsedLabel;
  rideScreenCostDetail.textContent = costLabel;
  pauseScreenTime.textContent = elapsedLabel;
  pauseScreenCost.textContent = costLabel;
  returnScreenTime.textContent = elapsedLabel;
  returnScreenCost.textContent = costLabel;
}

function updateRideZoneUI() {
  const zoneContext = getZoneContext(activeScooter, rideCurrentCoords);
  rideScreenZone.textContent = zoneContext.label;
  rideScreenZonePill.dataset.state = zoneContext.state;
  rideScreenZonePill.textContent = zoneContext.pill;
  rideScreenZoneTitle.textContent = zoneContext.title;
  rideScreenZoneCopy.textContent = zoneContext.copy;
  rideScreenZoneAction.textContent = zoneContext.nearHub ? "Am Ladehub angekommen" : "Zum nächsten Ladehub bringen";
  rideScreenZoneAction.disabled = zoneContext.nearHub;
}

function getBatteryLabel(rangeText) {
  return `${getBatteryPercent(rangeText)} %`;
}

function getBatteryIconSource(scooter) {
  if (!scooter) {
    return "battery-full-green.svg";
  }

  if (scooter.status === "charging") {
    return "battery-charging-blue.svg";
  }

  const batteryPercent = getBatteryPercent(scooter.range);
  if (batteryPercent >= 75) {
    return "battery-full-green.svg";
  }

  if (batteryPercent >= 45) {
    return "battery-high-orange.svg";
  }

  return "battery-half-red.svg";
}

function setBatteryIcon(element, scooter) {
  if (!element) {
    return;
  }

  element.src = getBatteryIconSource(scooter);
}

function getAvailabilityLabel(status) {
  if (status === "reserved") {
    return "Reserviert";
  }

  if (status === "charging") {
    return "Lädt am Hub";
  }

  if (status === "low") {
    return "Verfügbar mit wenig Akku";
  }

  return "Verfügbar";
}

function renderConfirmScooterOptions() {
  if (!activeScooter) {
    confirmScreenOptions.innerHTML = "";
    return;
  }

  const nearbyScooters = scooters
    .filter((scooter) => scooter.name !== activeScooter.name)
    .sort((left, right) => map.distance(activeScooter.coords, left.coords) - map.distance(activeScooter.coords, right.coords))
    .slice(0, 3);

  const options = [activeScooter, ...nearbyScooters];
  confirmScreenOptions.innerHTML = options.map((scooter) => {
    const isReserved = scooter.name === activeScooter.name;
    const meta = isReserved ? "Reserviert für dich" : getAvailabilityLabel(scooter.status);
    return `
      <button
        class="confirm-sheet__option"
        type="button"
        data-scooter-name="${scooter.name}"
        data-reserved="${isReserved ? "true" : "false"}"
      >
        <span class="confirm-sheet__option-top">
          <span class="confirm-sheet__option-name">${scooter.name}</span>
          <span class="confirm-sheet__option-badge ${isReserved ? "is-reserved" : ""}">${meta}</span>
        </span>
        <span class="confirm-sheet__option-bottom">
          <span>${getBatteryLabel(scooter.range)}</span>
          <span>${scooter.range}</span>
        </span>
      </button>
    `;
  }).join("");
}

function handleConfirmOptionClick(event) {
  const option = event.target.closest(".confirm-sheet__option");
  if (!option) {
    return;
  }

  updateConfirmSelection(option.dataset.scooterName);
}

function updateConfirmSelection(scooterName) {
  selectedConfirmScooterName = scooterName;
  const options = confirmScreenOptions.querySelectorAll(".confirm-sheet__option");
  options.forEach((option) => {
    const isSelected = option.dataset.scooterName === scooterName;
    option.dataset.selected = isSelected ? "true" : "false";
  });

  const isReservedScooter = scooterName === activeScooter?.name;
  confirmScreenUnlock.disabled = !isReservedScooter;
  confirmScreenSelectionNote.textContent = isReservedScooter
    ? "Nummer stimmt. Diesen Scooter kannst du jetzt sicher entsperren."
    : "Das ist nicht dein reservierter Scooter. Bitte wähle die passende Nummer.";
}

function getBatteryPercent(rangeText) {
  const rangeKm = Number.parseInt(rangeText, 10);
  if (Number.isNaN(rangeKm)) {
    return 72;
  }

  return Math.max(18, Math.min(100, Math.round((rangeKm / 56) * 100)));
}

function getZoneLabel(locationText) {
  if (locationText.includes("OTH")) {
    return "Campus";
  }

  if (
    locationText.includes("Bahnhof") ||
    locationText.includes("Ring") ||
    locationText.includes("Emailfabrik")
  ) {
    return "Nordring";
  }

  return "Stadtgebiet";
}

function getZoneContext(scooter, currentCoords = null) {
  if (!scooter) {
    return {
      label: "Stadtgebiet Amberg",
      summaryLabel: "Stadtgebiet",
      nearHub: false,
      state: "default",
      pill: "Im Rückgabegebiet",
      title: "Freie Rückgabe ist hier möglich.",
      copy: "Wenn du an einem markierten Ladehub parkst, bekommst du 30 Freiminuten gutgeschrieben.",
      returnTitle: "Du stehst in einer gültigen Rückgabezone.",
      returnCopy: "Wenn du am Ladehub abstellst, bekommst du 30 Freiminuten gutgeschrieben.",
      batteryHint: "freie Rückgabe möglich",
      hubHint: "Marktplatz Ladehub in 2 Min Entfernung",
      returnAllowed: true
    };
  }

  const referenceCoords = currentCoords ?? scooter.coords;
  const nearestHub = getNearestHub(referenceCoords);
  const restrictedZone = findContainingZone(referenceCoords, restrictedZones);
  const hubZone = findContainingZone(referenceCoords, hubZones);
  const returnZone = findContainingZone(referenceCoords, returnZones);

  if (restrictedZone) {
    return {
      label: restrictedZone.name,
      summaryLabel: restrictedZone.shortName,
      nearHub: false,
      state: "restricted",
      pill: "Sperrzone",
      title: `${restrictedZone.name} ist gesperrt.`,
      copy: "Hier darfst du den Scooter nicht abstellen. Fahr bitte in eine grüne Rückgabezone oder direkt an einen Ladehub.",
      returnTitle: `${restrictedZone.name} ist als Sperrzone markiert.`,
      returnCopy: "Bitte aus der roten Fläche herausfahren und dann erneut prüfen.",
      batteryHint: "Sperrzone, hier nie abstellen",
      hubHint: nearestHub ? `${nearestHub.name} Ladehub als nächstes Ziel` : "Nächsten Ladehub anfahren",
      returnAllowed: false
    };
  }

  if (hubZone) {
    return {
      label: hubZone.name,
      summaryLabel: hubZone.shortName,
      nearHub: true,
      state: "hub",
      pill: "Ladehub erreicht",
      title: `Am ${hubZone.shortName} gibt es Bonus für sauberes Abstellen.`,
      copy: "Hier kannst du direkt abgeben und bekommst 30 Freiminuten für die nächste Runde.",
      returnTitle: `Am ${hubZone.name} ist die Rückgabe sofort möglich.`,
      returnCopy: "Perfekt: Hier gibt es einen klar markierten Ladehub plus Bonus.",
      batteryHint: "Hub-Regel erfüllt",
      hubHint: `${hubZone.name} direkt am Standort`,
      returnAllowed: true
    };
  }

  if (returnZone) {
    return {
      label: returnZone.name,
      summaryLabel: returnZone.shortName,
      nearHub: false,
      state: "default",
      pill: "Rückgabezone",
      title: `${returnZone.shortName} ist als grüne Rückgabezone freigegeben.`,
      copy: "Du kannst hier sauber abstellen. Ein markierter Ladehub bringt dir zusätzlich Bonus.",
      returnTitle: `Du stehst in der Zone ${returnZone.name}.`,
      returnCopy: nearestHub
        ? `Optional: ${nearestHub.name} Ladehub bringt dir zusätzlich 30 Freiminuten.`
        : "Hier ist Rückgabe okay, auch ohne Ladehub.",
      batteryHint: "freie Rückgabe möglich",
      hubHint: nearestHub ? `${nearestHub.name} Ladehub in kurzer Nähe` : "Kein Ladehub in direkter Nähe",
      returnAllowed: true
    };
  }

  return {
    label: "Außerhalb der Rückgabezonen",
    summaryLabel: getZoneLabel(scooter.type),
    nearHub: false,
    state: "outside",
    pill: "Keine Freigabe",
    title: "Hier endet die Fahrt noch nicht.",
    copy: "Du stehst außerhalb der markierten Flächen. Fahr bitte in eine grüne Zone oder an einen markierten Ladehub.",
    returnTitle: "Außerhalb der freigegebenen Rückgabezonen.",
    returnCopy: nearestHub
      ? `Als nächstes bietet sich ${nearestHub.name} Ladehub an.`
      : "Bitte eine markierte Rückgabezone anfahren.",
    batteryHint: "außerhalb, bitte weiterfahren",
    hubHint: nearestHub ? `${nearestHub.name} Ladehub als nächstes Ziel` : "Nächsten Ladehub anfahren",
    returnAllowed: false
  };
}

function getNearestHub(coords) {
  return hubZones.reduce((nearest, hub) => {
    if (!nearest) {
      return hub;
    }

    return map.distance(coords, hub.center) < map.distance(coords, nearest.center) ? hub : nearest;
  }, null);
}

function moveRideToNearestHub() {
  if (!activeScooter) {
    return;
  }

  const nearestHub = getNearestHub(rideCurrentCoords ?? activeScooter.coords);
  if (!nearestHub) {
    return;
  }

  rideCurrentCoords = nearestHub.center;
  updateRideZoneUI();
}

function findContainingZone(coords, zones) {
  return zones.find((zone) => pointInPolygon(coords, zone.points)) ?? null;
}

function pointInPolygon(coords, polygon) {
  const [lat, lng] = coords;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [latI, lngI] = polygon[i];
    const [latJ, lngJ] = polygon[j];
    const intersects =
      (lngI > lng) !== (lngJ > lng) &&
      lat < ((latJ - latI) * (lng - lngI)) / (lngJ - lngI) + latI;

    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
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
