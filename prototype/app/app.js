const scooters = [
  {
    name: "E-Scooter AM-207",
    type: "E-Scooter am Marktplatz",
    range: "41 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44375, 11.8612]
  },
  {
    name: "E-Scooter AM-184",
    type: "E-Scooter am Bahnhof",
    range: "32 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44195, 11.85865]
  },
  {
    name: "E-Scooter AM-311",
    type: "E-Scooter nahe OTH",
    range: "54 km Reichweite",
    price: "1,00 EUR entsperren, 0,19 EUR/Min",
    coords: [49.44495, 11.86385]
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
const bookingScreenName = document.getElementById("booking-screen-name");
const bookingScreenType = document.getElementById("booking-screen-type");
const bookingScreenRange = document.getElementById("booking-screen-range");
const bookingScreenPrice = document.getElementById("booking-screen-price");

let activeScooterMarker = null;
let activeScooter = null;

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
}

function closeBookingScreen() {
  bookingScreen.dataset.open = "false";
  bookingScreen.setAttribute("aria-hidden", "true");
  if (activeScooter && activeScooterMarker) {
    vehicleCard.dataset.open = "true";
    vehicleCard.setAttribute("aria-hidden", "false");
    keepMarkerVisible(activeScooterMarker);
  }
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
  const mapHeight = map.getSize().y;
  const markerPoint = map.latLngToContainerPoint(marker.getLatLng());
  const maxVisibleY = mapHeight - cardHeight - 36;
  if (markerPoint.y > maxVisibleY) {
    map.panBy([0, markerPoint.y - maxVisibleY], { animate: true, duration: 0.25 });
  }
}
