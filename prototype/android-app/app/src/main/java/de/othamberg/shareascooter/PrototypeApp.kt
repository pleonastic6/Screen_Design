package de.othamberg.shareascooter

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

private val BgTop = Color(0xFF071116)
private val BgBottom = Color(0xFF0C1B22)
private val Panel = Color(0xFF12242C)
private val PanelAlt = Color(0xFF18323A)
private val Lime = Color(0xFFACF1BA)
private val LimeSoft = Color(0xFF2B5241)
private val Cyan = Color(0xFF8DE4FF)
private val TextMain = Color(0xFFEFF8F2)
private val TextMuted = Color(0xFF9CB7AD)
private val Orange = Color(0xFFFFB36B)
private val Red = Color(0xFFFF8277)

@Composable
fun ShareAScooterPrototypeApp() {
    var currentScreen by remember { mutableStateOf(PrototypeScreen.Home) }
    var selectedScooter by remember { mutableStateOf(demoScooters.first()) }

    MaterialTheme {
        Surface {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .background(
                        brush = Brush.verticalGradient(
                            colors = listOf(BgTop, BgBottom),
                        ),
                    ),
            ) {
                when (currentScreen) {
                    PrototypeScreen.Home -> HomeScreen(
                        selectedScooter = selectedScooter,
                        onScooterSelected = { selectedScooter = it },
                        onDetail = { currentScreen = PrototypeScreen.Detail },
                        onReserve = { currentScreen = PrototypeScreen.Reserve },
                    )

                    PrototypeScreen.Detail -> DetailScreen(
                        scooter = selectedScooter,
                        onBack = { currentScreen = PrototypeScreen.Home },
                        onReserve = { currentScreen = PrototypeScreen.Reserve },
                        onUnlock = { currentScreen = PrototypeScreen.Pickup },
                    )

                    PrototypeScreen.Reserve -> ReserveScreen(
                        scooter = selectedScooter,
                        onBack = { currentScreen = PrototypeScreen.Detail },
                        onNavigate = { currentScreen = PrototypeScreen.Pickup },
                        onCancel = { currentScreen = PrototypeScreen.Home },
                    )

                    PrototypeScreen.Pickup -> PickupScreen(
                        selectedScooter = selectedScooter,
                        onScooterSelected = { selectedScooter = it },
                        onBack = { currentScreen = PrototypeScreen.Reserve },
                        onUnlock = { currentScreen = PrototypeScreen.Ride },
                    )

                    PrototypeScreen.Ride -> RideScreen(
                        scooter = selectedScooter,
                        onPause = { currentScreen = PrototypeScreen.Return },
                        onReturn = { currentScreen = PrototypeScreen.Return },
                    )

                    PrototypeScreen.Return -> ReturnScreen(
                        scooter = selectedScooter,
                        onHome = { currentScreen = PrototypeScreen.Home },
                        onRide = { currentScreen = PrototypeScreen.Ride },
                    )
                }
            }
        }
    }
}

@Composable
private fun AppShell(
    title: String,
    subtitle: String,
    content: @Composable () -> Unit,
) {
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        item {
            Column {
                Text(
                    text = subtitle,
                    color = Lime,
                    style = MaterialTheme.typography.labelMedium,
                    fontWeight = FontWeight.Bold,
                )
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    text = title,
                    color = TextMain,
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.ExtraBold,
                )
            }
        }
        item { content() }
    }
}

@Composable
private fun HomeScreen(
    selectedScooter: Scooter,
    onScooterSelected: (Scooter) -> Unit,
    onDetail: () -> Unit,
    onReserve: () -> Unit,
) {
    AppShell(
        title = "Finde den naechsten freien Scooter",
        subtitle = "Live Map",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                Text("Standort: Amberg Mitte", color = TextMain, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("3 Scooter sichtbar, 3 Ladehubs im Umkreis.", color = TextMuted)
                Spacer(modifier = Modifier.height(16.dp))
                FakeMap(selectedScooter = selectedScooter)
            }

            Text("Scooter in der Naehe", color = TextMain, fontWeight = FontWeight.Bold)

            demoScooters.forEach { scooter ->
                ScooterRow(
                    scooter = scooter,
                    selected = scooter.id == selectedScooter.id,
                    onClick = { onScooterSelected(scooter) },
                )
            }

            PanelCard {
                Text("Auswahl", color = Lime, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(8.dp))
                Text("${selectedScooter.id} · ${selectedScooter.distance} · ${selectedScooter.battery}", color = TextMain)
                Text(selectedScooter.returnRule, color = TextMuted)
                Spacer(modifier = Modifier.height(12.dp))
                PrimaryActions(
                    primaryLabel = "Details",
                    onPrimary = onDetail,
                    secondaryLabel = "Reservieren",
                    onSecondary = onReserve,
                )
            }
        }
    }
}

@Composable
private fun DetailScreen(
    scooter: Scooter,
    onBack: () -> Unit,
    onReserve: () -> Unit,
    onUnlock: () -> Unit,
) {
    AppShell(
        title = "Scooter-Details",
        subtitle = "Detail",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                Text("Scooter ${scooter.id}", color = Lime, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(12.dp))
                MetricRow("Akku", scooter.battery, "Reichweite", scooter.range, "Distanz", scooter.distance)
                Spacer(modifier = Modifier.height(12.dp))
                Text("Status: ${scooter.status}", color = TextMain)
                Text(scooter.returnRule, color = TextMuted)
            }

            PanelCard {
                Text("Preis", color = TextMain, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("0,10 EUR pro 5 Minuten", color = TextMuted)
            }

            PrimaryActions(
                primaryLabel = "Jetzt entsperren",
                onPrimary = onUnlock,
                secondaryLabel = "30 Min. reservieren",
                onSecondary = onReserve,
            )

            TextButton(onClick = onBack) {
                Text("Zurueck zur Karte", color = Cyan)
            }
        }
    }
}

@Composable
private fun ReserveScreen(
    scooter: Scooter,
    onBack: () -> Unit,
    onNavigate: () -> Unit,
    onCancel: () -> Unit,
) {
    AppShell(
        title = "Reservierung aktiv",
        subtitle = "Reservation",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                Text("Scooter ${scooter.id}", color = Lime, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(10.dp))
                Text("27:34", color = TextMain, style = MaterialTheme.typography.displaySmall, fontWeight = FontWeight.ExtraBold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Dein Scooter bleibt 30 Minuten fuer dich reserviert.", color = TextMuted)
            }

            PanelCard {
                Text("Naechster Schritt", color = TextMain, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Gehe zum Scooter und pruefe die Nummer am Lenker oder Schloss.", color = TextMuted)
            }

            PrimaryActions(
                primaryLabel = "Navigation starten",
                onPrimary = onNavigate,
                secondaryLabel = "Reservierung aufheben",
                onSecondary = onCancel,
            )

            TextButton(onClick = onBack) {
                Text("Zurueck zu den Details", color = Cyan)
            }
        }
    }
}

@Composable
private fun PickupScreen(
    selectedScooter: Scooter,
    onScooterSelected: (Scooter) -> Unit,
    onBack: () -> Unit,
    onUnlock: () -> Unit,
) {
    AppShell(
        title = "Scooter auswaehlen",
        subtitle = "On Site",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                Text("Pruefe die Nummer am Lenker oder Schloss.", color = TextMain, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Mehrere Scooter vor Ort? Hier muss die Zuordnung idiotensicher sein.", color = TextMuted)
            }

            itemsList@ run {
                demoScooters.forEach { scooter ->
                    ScooterRow(
                        scooter = scooter,
                        selected = scooter.id == selectedScooter.id,
                        onClick = { onScooterSelected(scooter) },
                    )
                }
            }

            Button(
                onClick = onUnlock,
                modifier = Modifier.fillMaxWidth(),
            ) {
                Text("Diesen Scooter entsperren")
            }

            TextButton(onClick = onBack) {
                Text("Zurueck zur Reservierung", color = Cyan)
            }
        }
    }
}

@Composable
private fun RideScreen(
    scooter: Scooter,
    onPause: () -> Unit,
    onReturn: () -> Unit,
) {
    AppShell(
        title = "Aktive Fahrt",
        subtitle = "Ride",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                MetricRow("Zeit", "12:10", "Kosten", "0,30 EUR", "Akku", scooter.battery)
            }

            PanelCard {
                Text("Hinweis", color = Orange, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Rueckgabe am Ladehub bringt 30 Freiminuten.", color = TextMuted)
            }

            PrimaryActions(
                primaryLabel = "Fahrt beenden",
                onPrimary = onReturn,
                secondaryLabel = "Temporaer parken",
                onSecondary = onPause,
            )
        }
    }
}

@Composable
private fun ReturnScreen(
    scooter: Scooter,
    onHome: () -> Unit,
    onRide: () -> Unit,
) {
    AppShell(
        title = "Rueckgabepruefung",
        subtitle = "Return",
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
            PanelCard {
                Text("Scooter ${scooter.id}", color = Lime, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(8.dp))
                Text("Rueckgabe hier erlaubt", color = TextMain, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Ladehub Marktplatz in der Naehe. Bonus: 30 Freiminuten.", color = TextMuted)
            }

            PanelCard {
                Text("Wichtig", color = Red, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(6.dp))
                Text("Temporeres Parken und endgueltige Rueckgabe muessen klar getrennt bleiben.", color = TextMuted)
            }

            PrimaryActions(
                primaryLabel = "Rueckgabe bestaetigen",
                onPrimary = onHome,
                secondaryLabel = "Weiterfahren",
                onSecondary = onRide,
            )
        }
    }
}

@Composable
private fun PanelCard(content: @Composable ColumnScope.() -> Unit) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = Panel),
        shape = RoundedCornerShape(24.dp),
    ) {
        Column(
            modifier = Modifier.padding(18.dp),
            content = content,
        )
    }
}

@Composable
private fun MetricRow(
    firstLabel: String,
    firstValue: String,
    secondLabel: String,
    secondValue: String,
    thirdLabel: String,
    thirdValue: String,
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        MetricCard(firstLabel, firstValue, Modifier.weight(1f))
        MetricCard(secondLabel, secondValue, Modifier.weight(1f))
        MetricCard(thirdLabel, thirdValue, Modifier.weight(1f))
    }
}

@Composable
private fun MetricCard(label: String, value: String, modifier: Modifier = Modifier) {
    Column(
        modifier = modifier
            .background(PanelAlt, RoundedCornerShape(18.dp))
            .padding(12.dp),
    ) {
        Text(text = label, color = TextMuted, style = MaterialTheme.typography.labelSmall)
        Spacer(modifier = Modifier.height(6.dp))
        Text(text = value, color = TextMain, fontWeight = FontWeight.Bold)
    }
}

@Composable
private fun ScooterRow(
    scooter: Scooter,
    selected: Boolean,
    onClick: () -> Unit,
) {
    val borderColor = if (selected) Lime else Color.Transparent
    val backgroundColor = if (selected) LimeSoft else Panel

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .border(1.dp, borderColor, RoundedCornerShape(22.dp))
            .background(backgroundColor, RoundedCornerShape(22.dp))
            .clickable(onClick = onClick)
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column {
            Text("Scooter ${scooter.id}", color = TextMain, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(4.dp))
            Text("${scooter.battery} · ${scooter.distance}", color = TextMuted)
            Text(scooter.status, color = if (scooter.status == "Niedriger Akku") Orange else Lime)
        }
        Dot(selected = selected)
    }
}

@Composable
private fun Dot(selected: Boolean) {
    Box(
        modifier = Modifier
            .size(16.dp)
            .background(if (selected) Lime else PanelAlt, CircleShape),
    )
}

@Composable
private fun FakeMap(selectedScooter: Scooter) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(260.dp)
            .background(PanelAlt, RoundedCornerShape(24.dp)),
    ) {
        Text(
            text = "Map Preview",
            color = TextMuted,
            modifier = Modifier
                .align(Alignment.TopStart)
                .padding(16.dp),
        )

        listOf(
            0.20f to 0.28f,
            0.54f to 0.48f,
            0.78f to 0.22f,
        ).forEach { (x, y) ->
            Box(
                modifier = Modifier
                    .offsetFraction(x, y)
                    .size(16.dp)
                    .background(Cyan, CircleShape),
            )
        }

        demoScooters.forEachIndexed { index, scooter ->
            val positions = listOf(0.47f to 0.62f, 0.30f to 0.56f, 0.66f to 0.44f)
            val (x, y) = positions[index]
            Box(
                modifier = Modifier
                    .offsetFraction(x, y)
                    .size(if (scooter.id == selectedScooter.id) 22.dp else 18.dp)
                    .background(
                        when {
                            scooter.id == selectedScooter.id -> Lime
                            scooter.status == "Niedriger Akku" -> Orange
                            else -> TextMain
                        },
                        CircleShape,
                    ),
            )
        }
    }
}

@Composable
private fun PrimaryActions(
    primaryLabel: String,
    onPrimary: () -> Unit,
    secondaryLabel: String,
    onSecondary: () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Button(
            onClick = onPrimary,
            modifier = Modifier.fillMaxWidth(),
        ) {
            Text(primaryLabel)
        }
        TextButton(
            onClick = onSecondary,
            modifier = Modifier.fillMaxWidth(),
        ) {
            Text(secondaryLabel, color = Cyan)
        }
    }
}

private fun Modifier.offsetFraction(x: Float, y: Float): Modifier {
    return this.padding(start = (x * 260).dp, top = (y * 220).dp)
}

@Preview(showBackground = true, backgroundColor = 0x071116)
@Composable
private fun PreviewPrototype() {
    ShareAScooterPrototypeApp()
}
