# 🛩️ Canadair CL-415 — Simulatore antincendio 3D

Simulatore realistico (non arcade) del **Canadair CL-415 "Superscooper"** che gira nel browser.
Pesca l'acqua dal lago, vola sugli incendi e sgancia. Tutto è generato dal codice: nessun modello o texture esterna.

## ▶️ Come si avvia

| Modo | Cosa fare |
|---|---|
| **Subito** | Apri `index.html` con doppio clic (Chrome, Edge, Firefox, Safari) |
| **Da sorgente** | `npm install` → `npm run build` → apri `index.html` |
| **Sviluppo** | `npm run dev` (ricompila a ogni modifica) + `npm run serve` |
| **Test fisica** | `npm run test:physics` (banco prova del modello di volo) |

## 🎮 Comandi principali

| Tasto | Azione |
|---|---|
| **W / S** (↑ / ↓) | Cloche avanti / indietro |
| **A / D** (← / →) | Alettoni |
| **Q / E** | Pedaliera (timone + ruotino) |
| **R / F** | Manette + / − (F tenuto al minimo in acqua = reverse) |
| **V / Shift+V** | Flap giù / su (0-10-15-25°) |
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
| **Cabina** | Strumenti funzionanti: orizzonte artificiale, HSI, altimetro, variometro, radioaltimetro, motori, quantità d'acqua, annunciatori; cloche, pedaliera e manette animate |
| **Incendi** | Si propagano con vento e pendenza; l'acqua li spegne in base ai litri per m²; fumo, fiamme, colonne termiche (turbolenza!) |
| **Effetti** | Coda di gallo del pescaggio, spruzzi, scia di schiuma, getto che si frantuma in nebbia, gocce sul parabrezza, audio procedurale |

## 🗂️ Struttura

```
src/aircraft/  modello di volo, impianti, modello 3D, livrea, cabina, strumenti
src/world/     terreno, lago, vegetazione, cielo, incendi
src/fx/        particelle ed effetti d'acqua
src/audio/     suoni procedurali
tools/         banco prova fisica e test automatici con screenshot
```
