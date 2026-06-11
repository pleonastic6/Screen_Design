package de.othamberg.shareascooter

data class Scooter(
    val id: String,
    val battery: String,
    val range: String,
    val distance: String,
    val status: String,
    val returnRule: String,
)

enum class PrototypeScreen {
    Home,
    Detail,
    Reserve,
    Pickup,
    Ride,
    Return,
}

val demoScooters = listOf(
    Scooter(
        id = "A-07",
        battery = "82%",
        range = "18 km",
        distance = "120 m",
        status = "Verfuegbar",
        returnRule = "Rueckgabe im Stadtgebiet moeglich",
    ),
    Scooter(
        id = "A-12",
        battery = "76%",
        range = "16 km",
        distance = "210 m",
        status = "Verfuegbar",
        returnRule = "Rueckgabe an erlaubten Flaechen",
    ),
    Scooter(
        id = "A-19",
        battery = "24%",
        range = "5 km",
        distance = "180 m",
        status = "Niedriger Akku",
        returnRule = "Bitte am Ladehub zurueckgeben",
    ),
)
