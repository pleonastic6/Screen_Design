const scooters = [
  { name: "A-07", coords: [49.44375, 11.8612] },
  { name: "A-12", coords: [49.44195, 11.85865] },
  { name: "A-19", coords: [49.44495, 11.86385] }
];

const hubs = [
  { name: "Campus OTH", coords: [49.43855, 11.86215] },
  { name: "Marktplatz", coords: [49.44275, 11.86015] },
  { name: "Bahnhof", coords: [49.44615, 11.86655] }
];

const userLocation = [49.4429, 11.86155];

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
  scrollWheelZoom: false
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 20
}).addTo(map);

L.marker(userLocation, { icon: markerIcon("user") }).addTo(map);

scooters.forEach((scooter) => {
  L.marker(scooter.coords, { icon: markerIcon("scooter") }).addTo(map);
});

hubs.forEach((hub) => {
  L.marker(hub.coords, { icon: markerIcon("hub") }).addTo(map);
});

map.fitBounds(L.latLngBounds([userLocation, ...scooters.map((item) => item.coords), ...hubs.map((item) => item.coords)]), {
  padding: [48, 48]
});
