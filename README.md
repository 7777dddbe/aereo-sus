# 🛩️ Canadair CL-415 — Simulatore antincendio 3D

Simulatore realistico (non arcade) del **Canadair CL-415 "Superscooper"** che gira nel browser.
Pesca l'acqua dal **Lago di Garda nord** (ricostruito dal vero: Riva, Torbole, Limone, Malcesine, Monte Baldo, Valle di Ledro), vola sugli incendi e sgancia. L'aereo e la cabina sono generati dal codice; il mondo viene da dati satellitari aperti.

## ▶️ Come si avvia

| Modo | Cosa fare |
|---|---|
| **Subito** | Apri `index.html` con doppio clic (Chrome, Edge, Firefox, Safari) |
| **Da sorgente** | `npm install` → `npm run build` → apri `index.html` |
| **Sviluppo** | `npm run dev` (ricompila a ogni modifica) + `npm run serve` |
| **Test fisica** | `npm run test:physics` (banco prova del modello di volo) |

## 🗺️ Il mondo: Garda nord dal vero

| Cosa | Fonte |
|---|---|
| ⛰️ Altitudini (Monte Baldo, Altissimo, Brione, valle del Sarca, Ledro) | Copernicus DEM GLO-30 (30 m) |
| 🌲 Boschi, paesi, prati, roccia, laghi (Garda, Ledro, Tenno) | ESA WorldCover 2021 (10 m) |
| 🛰️ Colore del terreno | Sentinel-2 L2A del 31/07/2024 (10 m), ombre del satellite attenuate |
| 🏔️ Orizzonte: Alpi, Brenta, Adamello, Garda sud | anello lontano 80 × 80 km dagli stessi dati |
| 🏘️ 33.000 edifici con la sagoma vera, strade (senza le gallerie della Gardesana), vigneti, uliveti, spiagge, il Sarca, moli e porti | Overture Maps (release 2026-10-21), dati OpenStreetMap |

- 🏘️ Edifici veri (Riva vecchia, la Rocca, la zona industriale, gli alberghi di Torbole) con tetti in coppi; capannoni con tetti piani chiari.
- 🛣️ Strade e ferrovie disegnate sul terreno, filari dei vigneti e uliveti nella piana del Sarca.
- ⛵ Barche ormeggiate nei porti, vele e windsurf con l'Ora, traghetti Riva – Limone – Malcesine.
- 🌳 Alberi dove ci sono boschi veri: lecci e pini vicino al lago, faggi e abeti più in alto, ulivi in campagna.
- 🛬 La pista è **fittizia**: nella realtà non c'è un aeroporto qui, quindi è nel punto più piano della piana del Sarca, tra Riva e Arco.
- 🔥 Incendi su Monte Brione, sopra Limone, sul Monte Baldo (Navene) e al Ponale.
- 💨 Vento: l'"Ora" da sud, tipica dei pomeriggi del Garda.
- 🔁 Per rigenerare i dati: `npm run garda` (terreno, satellite) e `NODE_USE_ENV_PROXY=1 node tools/garda/overture.mjs` (edifici, strade, campi).

**Crediti dei dati**: altezza della vegetazione a 1 m © Meta e World Resources Institute, High Resolution Canopy Height Maps (CC BY 4.0) · Copernicus DEM GLO-30 © DLR e.V. 2010-2014 e © Airbus Defence and Space GmbH 2014-2018, fornito nell'ambito del programma Copernicus dall'Unione Europea e dall'ESA · © ESA WorldCover project 2021, contiene dati Copernicus Sentinel modificati (2021) elaborati dal consorzio ESA WorldCover (CC BY 4.0) · contiene dati Copernicus Sentinel modificati (2024) · edifici, strade, uso del suolo, acque e moli: © OpenStreetMap contributors (ODbL), distribuiti da Overture Maps Foundation.

## 🎮 Comandi principali

| Tasto | Azione |
|---|---|
| 🖱️ **Mouse** | **Cloche**: porta il puntatore nel cerchio al centro per prenderla, poi su = picchiare, giù = cabrare, lati = rollio |
| 🖱️ **Rotella** | **Manette** + / − (al minimo, in acqua o a terra, continua giù = reverse) |
| 🖱️ **Tasto destro** (trascina) · **Shift+rotella** | Guardati intorno · zoom |
| **W / S** (↑ / ↓) | Cloche avanti / indietro |
| **A / D** (← / →) | Alettoni |
| **Q / E** | Pedaliera (timone + ruotino) |
| **R / F** | Manette + / − (F tenuto al minimo in acqua = reverse) |
| **Y** | Cloche col mouse on/off |
| **V** | Flap: scende 0→10→15→25°, poi risale 25→15→10→0° (Shift+V = sempre su) |
| **G** | Carrello anfibio |
| **P** | Sonde di pescaggio |
| **SPAZIO** | 💧 Sgancio |
| **M** | Modalità sgancio: salvo, 2+2, sequenza, 1 porta |
| **N** | Quantità di pescaggio preselezionata |
| **J** | Schiumogeno |
| **T / Shift+T** | Trim |
| **B** | Freni |
| **C / 1-7** | Visuali: cabina, inseguimento, orbita, passaggio, sotto lo scafo, ala, torre |
| **H** | Aiuto · **O** pannello dati · **Esc** pausa |

🎮 Gamepad e 📱 comandi touch supportati.

## 👥 Multiplayer a due (pilota + copilota)

Funziona dentro l'**Artifact condiviso**: tu e un amico aprite lo stesso link, scrivete lo **stesso codice stanza** nel menu e premete **ENTRA IN STANZA**. Chi entra per primo crea la partita (e sceglie il ruolo).

| Ruolo | Sedile | Cosa fa |
|---|---|---|
| 👨‍✈️ **Pilota** | sinistra | Solo volo: cloche, pedali, manette, trim, freni |
| 🧑‍✈️ **Copilota** | destra | Impianti: carrello **G**, flap **V**, sonde **P**, sgancio **SPAZIO**, modo **M**, quantità **N**, schiuma **J**, fari **L** |

- 🔄 **Scambio ruoli**: guarda il compagno (ruota la testa verso il suo sedile) e premi il pulsante, oppure premi **X**. Lui deve accettare.
- 🧑 Vedi il compagno seduto nell'altro sedile, con la testa che segue il suo sguardo.
- ⏸️ In coppia la pausa è solo un menu: l'aereo continua a volare.
- 🖥️ Funziona solo su un Artifact con la capability `room`; in locale (`index.html`) resta la partita singola.

## 🌊 Procedure (come quelle vere)

1. **Pescaggio** — flap 15°, carrello **SU** (con carrello giù in acqua si capotta!), ammara a ~80 kt, tieni ~5° di assetto sul redan, premi **P** e dai tutta potenza: 6137 L in circa 12 s su ~430 m. Le sonde si ritraggono da sole alla quantità preselezionata.
2. **Decollo dall'acqua** — con 6 t d'acqua serve spazio: ruota a ~80 kt.
3. **Sgancio** — a 100-150 ft sopra gli alberi, ~110 kt, controvento rispetto al fumo. L'aereo "salta" verso l'alto quando perde 6 tonnellate.

## ✅ Cosa c'è di realistico

| Area | Dettagli |
|---|---|
| **Fisica di volo** | 6 gradi di libertà a 240 Hz, ala a strisce con stallo progressivo, soffio delle eliche, effetto suolo, downwash, diedro, coppia e giroscopia delle eliche |
| **Acqua** | Scafo a V con redan: galleggiamento, planata, resistenza d'onda, galleggianti alari, sonde con portata e resistenza reali |
| **Prestazioni** | Tarate sui dati del CL-415: pescaggio 12 s/410 m, max ~200 kt TAS, stallo ~68-72 kt flap 25 |
| **Impianti** | Motori PW123AF con inerzia, 4 serbatoi e portelli (Torricelli), schiuma, carburante, avvisi |
| **Cabina** | Disposizione del vero CL-415: orologi LED e altoparlanti, anemometro/EADI/altimetro, EHSI/variometro, radar meteo che vede le montagne vere, display motori, GPS con i paesi vicini, idraulica/carburante/flap, display dell'acqua, carrello, glareshield con AOA, accelerometro e WATER DROP CONTROL, quadrante POWER/PROP con pomelli bianchi, maniglie rosse EMERG WATER DUMP, due CDU, trim, overhead completo, cloche ad anello col mozzo blu |
| **Incendi** | Si propagano con vento e pendenza; l'acqua li spegne in base ai litri per m²; fumo, fiamme, colonne termiche (turbolenza!) |
| **Grafica** | Rendering HDR con antialiasing, bloom sui riflessi e sulle fiamme, tonemapping cinematografico, correzione colore, vignettatura, grana di pellicola (qualità media e alta; la bassa è senza post-elaborazione per i telefoni) |
| **Effetti** | Coda di gallo del pescaggio, spruzzi, scia di schiuma, getto che si frantuma in nebbia, gocce sul parabrezza, audio procedurale |

## 🗂️ Struttura

```
src/aircraft/  modello di volo, impianti, modello 3D, livrea, cabina, strumenti
src/world/     terreno reale del Garda, lago, laghi in quota, paesi, vegetazione, cielo, incendi
src/world/garda/  dati cotti (altitudini, copertura del suolo, satellite, edifici)
tools/garda/   script che scarica e prepara i dati reali
src/fx/        particelle ed effetti d'acqua
src/net/       multiplayer (pilota + copilota)
src/audio/     suoni procedurali
tools/         banco prova fisica e test automatici con screenshot
```
