const scooters = {
  "A-07": {
    id: "SCOOTER A-07",
    name: "Scooter A-07",
    battery: "82 %",
    rideBattery: "71 %",
    range: "18 km",
    distance: "120 m",
    status: "Verfuegbar",
    returnRule: "Rueckgabe im Stadtgebiet moeglich",
    copy: "Rueckgabe im Stadtgebiet moeglich. Ladehub-Bonus verfuegbar.",
    pickup: "Akku 64 % · direkt vor dir"
  },
  "A-12": {
    id: "SCOOTER A-12",
    name: "Scooter A-12",
    battery: "76 %",
    rideBattery: "69 %",
    range: "16 km",
    distance: "210 m",
    status: "Verfuegbar",
    returnRule: "Rueckgabe nur an erlaubten Flaechen",
    copy: "Etwas weiter weg, aber stabiler Akkustand und freie Rueckgabe.",
    pickup: "Akku 58 % · 8 m entfernt"
  },
  "A-19": {
    id: "SCOOTER A-19",
    name: "Scooter A-19",
    battery: "24 %",
    rideBattery: "19 %",
    range: "5 km",
    distance: "180 m",
    status: "Niedriger Akku",
    returnRule: "Bitte nach der Fahrt am Ladehub zurueckgeben",
    copy: "Niedriger Akku. Sinnvoll nur fuer kurze Strecken oder Hub-Naehe.",
    pickup: "Akku 24 % · 11 m entfernt"
  }
};

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

let currentScreen = "home";
let selectedScooter = "A-07";

const screenOrder = ["home", "detail", "reserve", "pickup", "unlock", "ride", "return-ok"];

function bindText(key, value) {
  document.querySelectorAll(`[data-bind="${key}"]`).forEach((node) => {
    node.textContent = value;
  });
}

function renderScooter() {
  const scooter = scooters[selectedScooter];
  bindText("home-id", scooter.id);
  bindText("home-headline", `${scooter.distance} entfernt · Akku ${scooter.battery}`);
  bindText("home-copy", scooter.copy);
  bindText("home-status", scooter.status);
  bindText("detail-id", scooter.id);
  bindText("detail-status", scooter.status);
  bindText("detail-battery", scooter.battery);
  bindText("detail-range", scooter.range);
  bindText("detail-distance", scooter.distance);
  bindText("detail-return", scooter.returnRule);
  bindText("reserve-id", scooter.id);
  bindText("pickup-name", scooter.name);
  bindText("pickup-copy", scooter.pickup);
  bindText("ride-battery", scooter.rideBattery);
  bindText("scooter-name", scooter.name);
  bindText("scooter-copy", `${scooter.battery} Akku · ${scooter.distance} entfernt · ${scooter.status.toLowerCase()}`);

  document.querySelectorAll(".scooter-node[data-scooter]").forEach((node) => {
    node.classList.toggle("active", node.dataset.scooter === selectedScooter);
  });
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

function showScreen(nextScreen) {
  currentScreen = nextScreen;
  document.querySelectorAll(".app-screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === nextScreen);
  });
  renderFlow();
  renderScenario();
}

function resetFlow() {
  selectedScooter = "A-07";
  renderScooter();
  showScreen("home");
}

document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.go);
  });
});

document.querySelectorAll("[data-action='reset']").forEach((button) => {
  button.addEventListener("click", resetFlow);
});

document.querySelectorAll(".scooter-node[data-scooter]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedScooter = button.dataset.scooter;
    renderScooter();
  });
});

renderScooter();
showScreen("home");
