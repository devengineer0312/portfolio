// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  text, projects, links and images — no component changes
//  needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Maria Monica Loiola',
  shortName: 'M. Loiola',
  initials: 'ML',
  // ── Images (put the files in the /public folder) ──────────
  // Logo: shown top-left in the menu bar. Square or wide, PNG/SVG with a
  // transparent background works best. Falls back to the initials.
  logo: '/logo.png',
  // Main image: shown large in the opening section. Square, ~800×800 px.
  // Falls back to the initials.
  photo: '/profile.jpg',
  title: 'Hardware & Embedded Systems Engineer',
  location: 'São Paulo, Brazil',
  github: 'https://github.com/devengineer0312',
  upwork: 'https://www.upwork.com/freelancers/~014ba1cc7c87f5dbc7?mp_source=share',
  headline: 'Turning complex electronic ideas into production-ready products.',
  tagline:
    'Advanced PCB design, high-speed digital systems, industrial IoT, embedded firmware and end-to-end electronics product development — from concept through manufacturing.',
  summary: [
    'Hardware & Embedded Systems Engineer with 8 years of real-world experience transforming complex electronic concepts into robust, high-performance, manufacturing-ready products.',
    'My professional experience includes developing commercial products at TRACTIAN and Carmel Tecnologia, combining advanced engineering expertise with practical product development.',
    'I help startups, engineering teams and technology companies bring their ideas to life through electrical design, embedded firmware, mechanical integration and manufacturing.',
  ],
  whyMe: [
    'I bring more than PCB design: commercial product development experience and a full understanding of how hardware, firmware, mechanical design and manufacturing work together.',
    'My multidisciplinary background lets me identify design challenges early, minimise development risk, and optimise products for performance, reliability, cost and manufacturability.',
    'Whether you need a complex PCB designed from scratch, an existing system optimised, an embedded platform developed or a prototype prepared for mass production, I support the entire product lifecycle.',
  ],
  expect: [
    'Reliable, high-quality, manufacturing-ready designs',
    'Clear communication and transparent project progress',
    'Thorough technical documentation and organised deliverables',
    'Engineering solutions optimised for performance and cost',
    'Professional support from concept through production',
  ],
}

export const expertise = [
  {
    title: 'PCB Design & Hardware Engineering',
    items: [
      'Complex multilayer PCB design (4–14 layers) and HDI',
      'High-speed digital, analog and mixed-signal circuit design',
      'Schematic capture, component selection and BOM optimisation',
      'Controlled impedance, differential pairs and length matching',
      'Signal integrity, power integrity and EMI/EMC mitigation',
      'Power management, DC-DC converters and low-power hardware',
    ],
  },
  {
    title: 'Embedded Systems & Firmware',
    items: [
      'STM32, ESP32, ARM Cortex and FPGA-based hardware',
      'Embedded Linux and SoM carrier board development',
      'Embedded C/C++ firmware and low-level peripheral drivers',
      'Hardware/firmware integration, debugging and optimisation',
      'USB 2.0/3.0, Ethernet, DDR, SPI, I²C, UART and CAN',
      'Industrial protocols: Modbus, MQTT, J1939 and OBD-II',
    ],
  },
  {
    title: 'IoT & Wireless Hardware',
    items: [
      'Industrial IoT devices, wireless sensors and condition monitoring',
      'Wi-Fi, 4G LTE, NB-IoT and Sub-GHz RF integration',
      'Battery-powered, energy-efficient embedded systems',
      'Industrial gateways, telemetry and data acquisition modules',
    ],
  },
]

export const stats = [
  { value: '8', unit: 'yrs', label: 'Hardware design experience' },
  { value: '4–14', unit: 'layers', label: 'PCB stack-ups designed' },
  { value: '50+', unit: 'sites', label: 'Industrial sites running my gateway' },
  { value: 'FCC · CE · Anatel', unit: '', label: 'EMI/EMC compliance achieved' },
]

export const projects = [
  {
    id: 'multi-radio-iot',
    title: 'Multi-Radio IoT Sensor Node',
    subtitle: 'BLE · LTE-M/NB-IoT · LoRa environmental monitoring device',
    category: 'IoT / RF',
    cover: '/projects/iot-tracker/1.jpg',
    summary:
      'Round, enclosure-fit environmental sensor node combining three radios — LoRa for long-range private networks, LTE-M/NB-IoT for cellular backhaul and BLE for local commissioning — around an STM32 host MCU. Designed, fabricated, assembled and brought up.',
    specs: [
      ['Host MCU', 'STM32 (ARM Cortex-M, LQFP-64)'],
      ['Cellular', 'Quectel LTE-M / NB-IoT module + nano-SIM'],
      ['Sub-GHz', 'LoRa transceiver module (RFM96-class)'],
      ['Short range', 'BLE SoC for configuration & local data'],
      ['Antennas', '3 × U.FL (LTE, LoRa, BLE)'],
      ['Storage', 'SPI NOR flash (32 Mbit)'],
      ['Power', 'Battery input, load switching per radio'],
      ['I/O', 'I²C / ADC sensor ports, SWD, UART, USB'],
    ],
    highlights: [
      'Three independent RF paths on one compact circular board, each with its own matching network, U.FL feed and keep-out — radios placed at the board edge, away from the MCU clock and switching circuitry.',
      'Solid reference planes under RF and high-speed nets with via-stitching along board edges and around the RF sections.',
      'Per-radio power gating (MOSFET load switches) so the node can sleep between transmissions — the main driver of battery life.',
      'Sensor and debug connectors on the bottom side keep the top side clean for RF and allow a low-profile enclosure.',
      'Labelled test points (TP1–TP10) on every rail and critical signal to speed up bring-up and production test.',
    ],
    tools: ['Altium Designer', 'RF layout', 'Power gating', 'DFM/DFA', 'Bring-up'],
    gallery: [
      {
        src: '/projects/iot-tracker/1.jpg',
        caption: '3D render — top side component placement',
      },
      { src: '/projects/iot-tracker/2.jpg', caption: 'Assembled prototype — top side' },
      { src: '/projects/iot-tracker/3.jpg', caption: 'Layout — copper pours, RF sections and fan-out (all layers)' },
      { src: '/projects/iot-tracker/4.jpg', caption: '3D render — bottom side with sensor, display and battery connectors' },
      { src: '/projects/iot-tracker/5.jpg', caption: 'Assembled prototype — bottom side' },
    ],
  },
  {
    id: 'am625-carrier',
    title: 'TI AM625 SoM + Carrier Board',
    subtitle: 'Linux edge-compute platform with dual display, dual GbE and audio',
    category: 'High-Speed / Linux SoM',
    cover: '/projects/am625/3d-top.jpg',
    summary:
      'A 10-layer System-on-Module built around the TI AM625 (quad Cortex-A53) and a 6-layer carrier board for AI and Full-HD dual-display applications. The carrier breaks the SoM out to HDMI, two Gigabit Ethernet ports, USB, audio and industrial peripherals.',
    specs: [
      ['Processor', 'TI AM625 (Sitara, Cortex-A53)'],
      ['Stack-up', '10-layer SoM · 6-layer carrier'],
      ['Storage', 'eMMC up to 32 GB (HS400) + microSD'],
      ['Display', 'LVDS → RGB (SN75LVDS82) → HDMI transmitter'],
      ['Ethernet', '2 × RTL8211F GbE PHY (RGMII) + RJ45 w/ magnetics'],
      ['Audio', 'TLV320AIC3106 codec, in/out jack'],
      ['USB', 'USB 2.0 Type-A host + Type-C'],
      ['Power', 'USB-C input → protection → TLV62595 DC-DC'],
      ['Debug', 'JTAG (TC2050 Tag-Connect), UART, boot-mode straps'],
      ['Peripherals', 'UART, SPI, I²C, CAN on headers'],
    ],
    highlights: [
      'Controlled-impedance routing: 90 Ω USB and 100 Ω differential pairs for Ethernet MDI and LVDS, single-ended 50 Ω for RGMII/eMMC with length matching inside each group.',
      'HS400 eMMC routed with tight length-matching and an unbroken reference plane; RGMII TX/RX groups matched per clock domain.',
      'Two independent Gigabit Ethernet PHYs placed close to their RJ45 jacks to keep MDI pairs short.',
      'Hierarchical schematic split into functional sheets (DC-DC, eMMC & SD, HDMI, bootstrap, GbE1/GbE2 PHY, USB, audio, JTAG, buttons/LEDs, SoC pin-out) for reviewability.',
      'Power entry with protection ahead of a high-efficiency DC-DC stage sized for the SoM peak load.',
    ],
    tools: ['Altium Designer', 'Impedance control', 'DDR / eMMC', 'RGMII', 'LVDS', 'Hierarchical schematics'],
    gallery: [
      {
        src: '/projects/am625/3d-top.jpg',
        caption: '3D render — carrier board with AM625 SoM mounted',
      },
      { src: '/projects/am625/block-diagram.jpg', caption: 'System block diagram' },
      { src: '/projects/am625/layout.jpg', caption: 'Top-layer routing with ground pours and fan-out' },
      { src: '/projects/am625/3d-bottom.jpg', caption: '3D render — bottom side with eMMC and microSD' },
    ],
  },
  {
    id: 'nrf5340-audio',
    title: '10-Layer BGA Audio & RF Platform',
    subtitle: 'i.MX 8 + nRF5340 board for IoT audio processing and wireless communication',
    category: 'High-Speed / Linux SoM',
    cover: '/projects/nrf5340/top-layer.jpg',
    summary:
      'A round, 10-layer high-density board pairing an NXP i.MX 8 application processor and LPDDR4 memory with a Nordic nRF5340 wireless MCU. It handles audio capture, processing and playback alongside BLE/RF links, with a PMIC, eMMC, audio amplifier, IR transmitter and USB power on one compact circular outline.',
    specs: [
      ['Processor', 'NXP i.MX 8 (BGA) application processor'],
      ['Memory', 'LPDDR4 + eMMC'],
      ['Wireless MCU', 'Nordic nRF5340 (dual-core Cortex-M33, BLE 5)'],
      ['Wi-Fi', 'nRF7002 companion IC + transmitter module'],
      ['Audio', 'ADC, audio amplifier, speaker connector'],
      ['Other I/O', 'IR transmitter, boost switch, USB power input'],
      ['Stack-up', '10 layers: 4 signal · 4 GND · 2 power, 1.6 mm'],
      ['Impedance', '50 Ω single-ended · 100 Ω differential (±10%)'],
    ],
    highlights: [
      'Symmetric 10-layer stack-up: every signal layer sits next to a solid ground plane, and the impedance profiles were solved in the Layer Stack Manager (≈4.6 mil inner, 7.6 mil outer traces for 50 Ω).',
      'BGA fan-out with microvias, escaping the i.MX 8 and LPDDR4 balls into the inner signal layers.',
      'LPDDR4 byte lanes routed with serpentine length-matching, each group kept on one reference plane to hold timing and return paths.',
      'Dedicated power layers split into islands for the processor, memory and RF rails, fed from the PMIC with short, wide connections.',
      'RF section (nRF5340 / nRF7002) at the board edge, away from the DDR and switching power, with its own ground stitching and keep-outs.',
    ],
    tools: ['Altium Designer', 'BGA fan-out', 'LPDDR4', 'Microvias', 'Impedance control', 'RF layout'],
    gallery: [
      { src: '/projects/nrf5340/top-layer.jpg', caption: 'Top layer — component placement and routing on the round outline' },
      { src: '/projects/nrf5340/lpddr4.jpg', caption: 'LPDDR4 routing — length-matched byte lanes from the i.MX 8' },
      { src: '/projects/nrf5340/stackup.jpg', caption: '10-layer stack-up with 50 Ω single-ended impedance profile' },
      { src: '/projects/nrf5340/length-match.jpg', caption: 'Inner-layer detail — serpentine length matching around the BGA' },
      { src: '/projects/nrf5340/signal2.jpg', caption: 'Inner signal layer (Signal2) — memory and peripheral routing' },
      { src: '/projects/nrf5340/power-plane.jpg', caption: 'Power plane (Power2) with split rail islands' },
      { src: '/projects/nrf5340/bottom-layer.jpg', caption: 'Bottom layer — ground pour and power routing' },
    ],
  },
  {
    id: 'esp32p4-gateway',
    title: 'ESP32-P4 Solar IoT Gateway (DeepSense V2)',
    subtitle: 'ESP32-P4 + ESP32-C6 + LoRa gateway with solar charging and audio input',
    category: 'IoT / RF',
    cover: '/projects/esp32p4/3d-top.jpg',
    summary:
      'Custom gateway board built around the ESP32-P4 high-performance MCU. An ESP32-C6 module provides Wi-Fi 6 / BLE, and an SX1262 LoRa module provides long-range links. It runs from solar power with two battery inputs and records audio from an I²S microphone to microSD. Assembled through a turnkey PCBA service.',
    specs: [
      ['Host MCU', 'Espressif ESP32-P4 (dual-core RISC-V)'],
      ['Wireless', 'ESP32-C6 module (Wi-Fi 6, BLE 5)'],
      ['Sub-GHz', 'eByte E22-900M22S (SX1262 LoRa) + U.FL'],
      ['Audio', 'I²S MEMS microphone connector'],
      ['Storage', 'microSD card slot'],
      ['Power', 'Solar input, CN3791 MPPT charger, 2 × battery'],
      ['Regulation', 'MP1584 + TLV625xx buck converters'],
      ['I/O', 'USB-C, I²C sensor header, UART/programming header'],
      ['Size', '≈ 75 × 75 mm'],
    ],
    highlights: [
      'Power path designed for unattended outdoor use: solar MPPT charging, dual battery inputs, input TVS and fuse protection.',
      'Two radio modules (ESP32-C6 and LoRa) placed at opposite board edges with copper keep-outs under the antennas to limit coupling.',
      'ESP32-P4 central, with short, direct routes to the microSD, I²S microphone and crystal, and a dense GND via array under the exposed pad.',
      'Wide copper pours for high-current battery and solar paths, with fan-out on both sides to keep the top layer clean.',
      'BOM chosen from in-stock JLCPCB parts so the board could go straight to turnkey assembly.',
    ],
    tools: ['Altium Designer', 'Low-power design', 'Solar / battery charging', 'LoRa', 'PCBA / DFM'],
    gallery: [
      { src: '/projects/esp32p4/3d-top.jpg', caption: '3D render — top side with ESP32-P4, ESP32-C6 and LoRa module' },
      { src: '/projects/esp32p4/layout.jpg', caption: 'Layout — top and bottom routing with board dimensions' },
      { src: '/projects/esp32p4/copper.jpg', caption: 'Copper pours — power paths and ground under the ESP32-P4' },
      { src: '/projects/esp32p4/3d-bottom.jpg', caption: '3D render — bottom side with battery, solar and I²C connections' },
      { src: '/projects/esp32p4/assembly.jpg', caption: 'Turnkey PCBA review — part placement and BOM' },
    ],
  },
  {
    id: 'pet-tracker',
    title: 'Pet Tracker — GPS & Activity Firmware + Web App',
    subtitle: 'ESP32-C6 GPS/IMU tracker streaming live telemetry to an Angular map dashboard',
    category: 'IoT / RF',
    kind: 'Firmware + Web',
    links: [
      { label: 'Source code', url: 'https://github.com/devengineer0312/Pet-tracker' },
      { label: 'Live demo', url: 'https://pet-tracker-production.up.railway.app/' },
    ],
    summary:
      'End-to-end connected-pet tracker. An ESP32-C6 reads a NEO-6M GPS and an MPU6050 six-axis IMU, classifies the animal’s activity and adapts how often it reports. Telemetry streams over secure WebSockets to a Node.js / Express service on Railway, and an Angular + Mapbox dashboard shows live position, routes, activity and device status.',
    specs: [
      ['MCU', 'Espressif ESP32-C6 (Wi-Fi)'],
      ['Positioning', 'u-blox NEO-6M GPS with patch antenna'],
      ['Motion', 'MPU6050 accelerometer + gyroscope (I²C)'],
      ['Link', 'Secure WebSocket (WSS) with reconnect handling'],
      ['Backend', 'Node.js / Express on Railway'],
      ['Frontend', 'Angular 20 + Mapbox GL JS'],
    ],
    highlights: [
      'Activity recognition fuses GPS speed with IMU acceleration / rotation thresholds: lying, standing, walking, running, playing.',
      'Adaptive reporting — 30 s when stationary, 5 s when moving, 2 s when moving fast — to save power and data.',
      'Route recording starts and stops automatically with movement, with distance and duration summaries.',
      'Battery, satellite count, signal quality and sensor readings reported alongside position.',
      'Dashboard with live map, route history and light / dark themes.',
    ],
    tools: ['ESP32-C6', 'GPS', 'IMU', 'WebSocket', 'Node.js', 'Angular'],
    gallery: [
      { src: '/projects/pet-tracker/dog-collar.jpg', caption: 'Use case — GPS tracker worn on a dog collar (photo: Uusijani, CC0)' },
      { src: '/projects/pet-tracker/pcb.jpg', caption: 'Compact tracker board — ESP32-C6, NEO-6M GPS + patch antenna, MPU6050 (concept render)' },
      { src: '/projects/pet-tracker/map.jpg', caption: 'Live tracking dashboard — Angular + Mapbox' },
      { src: '/projects/pet-tracker/firmware.jpg', caption: 'Firmware — activity recognition from GPS speed and IMU data' },
    ],
  },
  {
    id: 'vanguard-telemetry',
    title: 'Vanguard Telemetry — GPS Fleet Tracking Platform',
    subtitle: 'Real-time GPS telemetry ingestion, geofencing and live fleet map',
    category: 'IoT / RF',
    kind: 'Web / Cloud',
    links: [{ label: 'Source code', url: 'https://github.com/devengineer0312/Vanguard-Telemetry-Enterprise-IoT-Fleet-Tracking' }],
    summary:
      'Full-stack IoT fleet-monitoring platform for GPS trackers. Devices report over MQTT or HMAC-signed webhooks; a telemetry pipeline validates each fix, a geofence engine detects enter / exit events, and positions and alerts are pushed live over Socket.io to a React command center. A built-in fleet simulator runs hundreds of moving assets for demos without hardware.',
    specs: [
      ['Ingestion', 'MQTT broker + HMAC-signed HTTP webhooks'],
      ['Geofencing', 'Polygon point-in-polygon, enter / exit events'],
      ['Real-time', 'Socket.io push to all connected clients'],
      ['Storage', 'Redis live state, Prisma ORM database'],
      ['Security', 'JWT authentication, role-based access, API keys, IP allow-list'],
      ['Stack', 'TypeScript, Node.js, React'],
    ],
    highlights: [
      'Modular, event-driven backend: ingestion, device registry, geofence engine, persistence and push layer are separate modules.',
      'Per-device state turns point-in-polygon checks into clean ENTER / EXIT events.',
      'Map-based command center to draw and edit geofences and watch the fleet live.',
      'Repository pattern over Prisma keeps persistence independent of application logic.',
      'Device and fleet simulators for development and demonstrations.',
    ],
    tools: ['TypeScript', 'Node.js', 'React', 'Redis', 'Prisma', 'Socket.io', 'MQTT'],
    gallery: [
      { src: '/projects/vanguard/architecture.jpg', caption: 'System architecture — from GPS tracker to live command center' },
      { src: '/projects/vanguard/geofence-code.jpg', caption: 'Backend — geofence enter / exit detection' },
    ],
  },
  {
    id: 'openeew-sensor',
    title: 'OpenEEW Earthquake Sensor',
    subtitle: 'ESP32 seismic sensor with Ethernet, Wi-Fi and precision accelerometer',
    category: 'IoT / RF',
    cover: '/projects/openeew/assembled.jpg',
    summary:
      'Earthquake early-warning sensor node for the OpenEEW network. An ESP32 reads a low-noise 3-axis MEMS accelerometer and streams the data over Wi-Fi or wired Ethernet. RGB LEDs and a buzzer give local alerts. Designed in KiCad, assembled, and fitted in a wall-mount enclosure.',
    specs: [
      ['MCU', 'Espressif ESP32-WROOM-32D (Wi-Fi / BT)'],
      ['Sensing', 'Low-noise 3-axis MEMS accelerometer'],
      ['Ethernet', 'LAN8720A 10/100 PHY + HanRun RJ45 w/ magnetics'],
      ['USB', 'USB-C, CP2102N USB-UART with auto-reset'],
      ['Alerts', '3 × RGB LEDs + buzzer'],
      ['Expansion', 'GPS (UART + PPS) and I²C headers'],
      ['Board', '2 layers, 75 × 50 mm, 106 nets, 338 vias'],
    ],
    highlights: [
      'Accelerometer placed near a mounting screw and away from the Ethernet magnetics and LDO, so the board couples well to the wall and sensor noise stays low.',
      '5 mm copper keep-out around the ESP32 PCB antenna, with the module overhanging the board edge.',
      'RMII Ethernet routed as a tight group between the ESP32 and LAN8720A with a continuous ground return on the bottom layer.',
      'Ground pours on both layers stitched with a regular via grid, and fully routed with 0 unrouted nets.',
      'Board outline shaped around the enclosure bosses, with LEDs centred under the light-diffusing lid.',
    ],
    tools: ['KiCad', 'Sensor layout', 'Ethernet (RMII)', 'Enclosure fit'],
    gallery: [
      { src: '/projects/openeew/assembled.jpg', caption: 'Assembled board in its enclosure' },
      { src: '/projects/openeew/layout-top.jpg', caption: 'KiCad layout with antenna keep-out and board dimensions' },
      { src: '/projects/openeew/copper-top.jpg', caption: 'Top copper — routing and ground pour' },
      { src: '/projects/openeew/copper-bottom.jpg', caption: 'Bottom copper — ground return and signal routing' },
      { src: '/projects/openeew/schematic.jpg', caption: 'Schematic — USB, serial, controller, Ethernet, LEDs and headers' },
      { src: '/projects/openeew/enclosure.gif', caption: 'Installed unit — LED alert test' },
    ],
  },
  {
    id: 'robocup-mainboard',
    title: 'RoboCup Robot Control Mainboard',
    subtitle: 'STM32 main board for autonomous soccer robots — 4 BLDC drives, IMU and dual RF',
    category: 'Robotics & Vision',
    cover: '/projects/robocup/assembled.jpg',
    summary:
      'Multilayer PCB and firmware for autonomous soccer robots in the RoboCup Small Size League. An STM32 runs closed-loop control of four 50 W BLDC motors using encoder and IMU sensor fusion. The board also carries dual 2.4 GHz RF transceivers, IR ball detection, an OLED display and power monitoring, in a compact battery-powered design built to competition rules.',
    specs: [
      ['MCU', 'STM32F7 (ARM Cortex-M7, LQFP-144)'],
      ['Motor drive', '4 × 50 W BLDC driver stages with encoder inputs'],
      ['Sensing', 'IMU, IR ball detection, current / voltage monitoring'],
      ['Wireless', 'Dual 2.4 GHz nRF transceivers (TX / RX) with PA'],
      ['UI', 'OLED display, navigation buttons, buzzer, status LEDs'],
      ['Power', 'Battery input, dual switches, relay, DC-DC + LDO'],
      ['Debug', 'SWD header, reset button'],
    ],
    highlights: [
      'Four identical motor-driver blocks placed at the board corners, close to each motor connector, keeping high-current loops short and away from the MCU.',
      'Separate power and logic grounds (PGND / LGND) keep motor switching noise out of the IMU and RF.',
      'TX and RX radios on separate modules at the top edge for full-duplex links with the base station.',
      'Board outline matched to the robot chassis, with battery entry and power switches at the rear.',
      'Firmware handles real-time motor control, wireless communication and navigation; Roll / Pitch / Yaw from the IMU show live on the OLED.',
    ],
    tools: ['Altium Designer', 'BLDC motor drive', 'Embedded C', 'Sensor fusion', 'RF'],
    gallery: [
      { src: '/projects/robocup/assembled.jpg', caption: 'Assembled board running — IMU attitude on the OLED' },
      { src: '/projects/robocup/3d-top.jpg', caption: '3D render — top side component placement' },
      { src: '/projects/robocup/layout.jpg', caption: 'Layout — all layers with motor-driver blocks at the corners' },
    ],
  },
  {
    id: 'core3566-carrier',
    title: 'Core3566 Robot Body Carrier Board',
    subtitle: 'Rockchip RK3566 SoM carrier with 15 servo ports, CSI camera, IMU and 2S battery power',
    category: 'Robotics & Vision',
    cover: '/projects/core3566/3d-top.jpg',
    summary:
      'Four-layer, 130 × 110 mm carrier board ("MicroDuck Body") for a Core3566 Linux compute module, used as the main body controller of a small legged robot. It drives 15 serial-bus servos on three fused power groups. It also brings out a CSI camera, BNO055 orientation IMU, ADS1115 ADC for battery and signal monitoring, microSD boot storage and USB-C. Everything runs from a 2S Li-ion battery with protection and an onboard 5 V / 4 A buck.',
    specs: [
      ['Compute', 'Core3566 SoM (Rockchip RK3566), 55 × 40 mm, board-to-board'],
      ['Servos', '15 serial-bus servo ports in 3 fused groups'],
      ['Camera', 'CSI camera on 15-pin flex (IMX219-class)'],
      ['Sensing', 'BNO055 9-axis IMU, ADS1115 16-bit ADC'],
      ['Storage', 'microSD boot / storage'],
      ['USB', 'USB-C with ESD protection, boot & reset buttons'],
      ['Power', '2S battery input, MOSFET protection + fuses, 5 V / 4 A buck'],
      ['Board', '4 layers, 130 × 110 mm, KiCad 10'],
    ],
    highlights: [
      'Servo power (VSERVO) runs on wide copper pours across inner layers, kept separate from logic power, and split into three fused groups so one stalled servo cannot drop the whole bus.',
      'Battery path through MOSFET protection and fuses before the servo rails and the 5 V / 4 A buck that feeds the compute module.',
      'SoM placed centrally with short, matched routes to the CSI camera flex and microSD; camera and storage grouped at one edge.',
      'Servo connectors around three board edges and labelled G / V / D with port numbers for fast wiring.',
      'Hierarchical schematic split into nine sheets (SoM contacts, USB-C / boot, IMU, microSD / camera, servo ports, head signals / battery monitor, battery protection, buck).',
    ],
    tools: ['KiCad', '4-layer PCB', 'Power distribution', 'SoM carrier', 'MIPI CSI'],
    gallery: [
      { src: '/projects/core3566/3d-top.jpg', caption: '3D render — servo ports, power stage, SoM connectors, camera and microSD' },
      { src: '/projects/core3566/layout-top.jpg', caption: 'Top layer — servo power groups and battery protection pours' },
      { src: '/projects/core3566/layout-all.jpg', caption: 'All layers — VSERVO / VBAT power routing on inner layers' },
      { src: '/projects/core3566/schematic.jpg', caption: 'Schematic — microSD, camera flex and module power sheet' },
      { src: '/projects/core3566/3d-bottom.jpg', caption: '3D render — bottom side' },
    ],
  },
  {
    id: 'iris-camera',
    title: 'IRIS Stereo Camera Board',
    subtitle: 'STM32F4 dual-CMOS-camera board with IR distance sensing',
    category: 'Robotics & Vision',
    cover: '/projects/iris/assembled.jpg',
    summary:
      'Vision board with two CMOS camera modules on flex connectors, set apart for stereo capture, plus a Sharp IR distance sensor between them. An STM32F407 on the back captures the image data. The board also has micro-USB, status LEDs, an LCD connector and a 22-pin expansion header. Taken from 3D design to assembled hardware.',
    specs: [
      ['MCU', 'STM32F407VET6 (Cortex-M4, LQFP-100)'],
      ['Cameras', '2 × CMOS camera modules on FPC connectors'],
      ['Ranging', 'Sharp GP2Y0A21 IR distance sensor'],
      ['Interfaces', 'Micro-USB, LCD connector, 22-pin header, UART'],
      ['Indicators', '3 status LEDs'],
      ['Revision', 'CMOS Camera V2.0'],
    ],
    highlights: [
      'Cameras mounted at a fixed baseline at opposite ends of the board, with the IR ranging sensor centred between them for depth cross-checks.',
      'Camera buses routed as tight groups from the FPC connectors to the MCU on the back side, keeping the front clean for optics.',
      'Mounting holes around each camera footprint so lens holders can be fixed and aligned mechanically.',
      'MCU, crystal and USB interface placed on the bottom side to keep the board footprint to the camera spacing.',
    ],
    tools: ['STM32', 'Camera interface', '2-sided assembly', 'Board bring-up'],
    gallery: [
      { src: '/projects/iris/assembled.jpg', caption: 'Assembled board — dual cameras and IR distance sensor' },
      { src: '/projects/iris/3d-top.jpg', caption: '3D render — top side' },
      { src: '/projects/iris/back.jpg', caption: 'Bottom side — STM32F407, crystal and USB interface' },
      { src: '/projects/iris/detail.jpg', caption: 'Detail — camera module and IR sensor' },
    ],
  },
  {
    id: 'eeg-64ch',
    title: 'Modular 64-Channel EEG Acquisition System',
    subtitle: '8 × ADS1299 analog front end, Lattice ECP5 FPGA, STM32 and Ethernet',
    category: 'Medical / Biosignal',
    cover: '/projects/eeg64/stack.jpg',
    summary:
      'Modular EEG data-acquisition system built from scratch around the TI ADS1299 24-bit biopotential front end. Each module has eight ADS1299s for 64 channels. A Lattice ECP5 FPGA collects the channels in parallel, keeps them synchronised and buffers the data. An STM32 handles system control and monitoring, and Ethernet streams the data to a PC. The design is split into analog, digital, power and I/O boards so each can be tested alone and modules can be combined (target: 256 channels). Currently in hardware bring-up, tested only with safe test signals.',
    specs: [
      ['Analog front end', '8 × TI ADS1299 (24-bit), 64 channels per module'],
      ['FPGA', 'Lattice ECP5-25F on a 200-pin SO-DIMM module'],
      ['Controller', 'STM32 (system control & monitoring)'],
      ['Data link', 'Ethernet PHY + RJ45 I/O board'],
      ['Inputs', '8 × D-sub electrode connectors'],
      ['Architecture', 'Stacked analog, digital, power and I/O boards'],
      ['Scalability', 'Up to 4 synchronised modules (256 ch)'],
      ['Status', 'Bring-up — STM32↔FPGA link and Ethernet under test'],
    ],
    highlights: [
      'Octagonal analog board: each ADS1299 sits next to its own D-sub connector, keeping high-impedance electrode traces as short as possible.',
      'Analog, digital and power functions on separate stacked boards joined by board-to-board connectors, so noisy digital and switching circuitry stays off the analog board.',
      'FPGA on a standard SO-DIMM module, so the logic device can be swapped or upgraded without re-spinning the carrier.',
      'Dedicated AFE supply rails (AFE_DVDD, 3V3_AFE) separate from the digital 3.3 V and 5 V domains.',
      'Full mechanical stack modelled with the enclosure to check connector access and board spacing before fabrication.',
    ],
    tools: ['Altium Designer', 'Low-noise analog', 'FPGA', 'STM32', 'Ethernet', 'Board stacking'],
    gallery: [
      { src: '/projects/eeg64/stack.jpg', caption: 'Exploded 3D view — analog, digital, power and I/O boards' },
      { src: '/projects/eeg64/enclosure.jpg', caption: 'Board stack with enclosure' },
      { src: '/projects/eeg64/analog-board.jpg', caption: 'Analog board — 8 × ADS1299 around the octagon, one per D-sub connector' },
      { src: '/projects/eeg64/digital-board.jpg', caption: 'Digital board — STM32, ECP5 SO-DIMM socket, Ethernet PHY and stack connectors' },
      { src: '/projects/eeg64/digital-assembled.jpg', caption: 'Assembled digital board with the ECP5 FPGA module' },
      { src: '/projects/eeg64/bring-up.jpg', caption: 'Bench bring-up — power supply, J-Link and oscilloscope' },
    ],
  },
  {
    id: 'eeg-headband',
    title: 'EEG Headband Acquisition Firmware',
    subtitle: '6-channel EEG streaming with electrode impedance testing over Bluetooth',
    category: 'Medical / Biosignal',
    kind: 'Firmware',
    links: [{ label: 'Source code', url: 'https://github.com/devengineer0312/Headband_EEG_Firmware' }],
    summary:
      'Firmware for a wearable 6-channel EEG headband built on an ATmega1284. It configures an MCP3913 six-channel 24-bit delta-sigma analog front-end, streams samples to a host application over a Bluetooth serial link, and runs an electrode impedance test that injects a DAC signal and measures the return current to flag good, poor or disconnected leads.',
    specs: [
      ['MCU', 'Microchip ATmega1284'],
      ['Analog front-end', 'MCP3913, 6-channel 24-bit ΔΣ ADC (SPI)'],
      ['Sample rate', 'Selectable 25 – 3200 SPS'],
      ['Impedance test', 'AD5621 DAC injection + shunt current sense'],
      ['Link', 'Bluetooth serial (SPP) to the host app'],
      ['Language', 'C++ (Arduino toolchain)'],
    ],
    highlights: [
      'AFE set up for 24-bit conversions with dithering, programmable gain and a selectable sample rate.',
      'Host command set: start / stop streaming, channel on / off, sample-rate change, square-wave test signal, soft reset.',
      'Per-lead impedance classification (good / bad / unconnected) so electrode contact can be fixed before recording.',
      'Low-power sleep with button wake-up for a battery-powered headband.',
    ],
    tools: ['ATmega1284', 'MCP3913', 'C++', 'Bluetooth', 'Biosignal'],
    gallery: [
      { src: '/projects/eeg-headband/architecture.jpg', caption: 'Firmware architecture — electrodes, AFE, MCU and Bluetooth link' },
      { src: '/projects/eeg-headband/adc-code.jpg', caption: 'ADC driver — MCP3913 analog front-end initialisation' },
    ],
  },
  {
    id: 'esp32s3-wearable',
    title: 'ESP32-S3 Wearable Audio & Haptics Device',
    subtitle: 'Four-layer wearable with I²S mic, speaker amp, vibration motor and Li-Po charging',
    category: 'IoT / RF',
    cover: '/projects/wearable/3d-top.jpg',
    summary:
      'Compact four-layer wearable built around the ESP32-S3. It records audio from an I²S MEMS microphone and plays it through a MAX98357A Class-D amplifier. It also drives a vibration motor and runs from a Li-Po cell with USB-C charging and a fuel gauge. The organic board outline was designed to fit a custom enclosure, with an antenna keep-out at the top.',
    specs: [
      ['MCU', 'ESP32-S3-WROOM-1 (Wi-Fi / BLE, PSRAM)'],
      ['Audio in', 'SPH0645LM4H I²S MEMS microphone'],
      ['Audio out', 'MAX98357A I²S Class-D amplifier + speaker connector'],
      ['Haptics', 'DC vibration motor via AO3400A MOSFET + flyback diode'],
      ['Charging', 'USB-C, MCP73831 Li-Po charger (125 mA)'],
      ['Battery', 'MAX17048 fuel gauge, power switch'],
      ['Regulation', 'AP2112K-3.3 LDO'],
      ['Board', '4 layers, enclosure-shaped outline, KiCad'],
    ],
    highlights: [
      'Board outline traced from the enclosure model so the PCB, USB-C port, buttons and slide switch line up with the case openings.',
      'Antenna keep-out zone above the ESP32-S3 module, with the module at the board edge for clean RF.',
      'Microphone placed away from the motor and speaker amplifier to limit acoustic and electrical noise coupling.',
      'Battery fuel gauge with alert line to the MCU, so the device can warn about low battery before brown-out.',
      'Separate buttons for boot, reset and start recording, plus status LEDs for charge and power.',
    ],
    tools: ['KiCad', 'Wearable design', 'Audio (I²S)', 'Battery management', 'Enclosure fit'],
    gallery: [
      { src: '/projects/wearable/3d-top.jpg', caption: '3D render — ESP32-S3, microphone, USB-C and switches' },
      { src: '/projects/wearable/layout.jpg', caption: 'Layout — routing with antenna keep-out' },
      { src: '/projects/wearable/enclosure-fit.jpg', caption: 'Enclosure fit check next to the board layout' },
      { src: '/projects/wearable/schematic.jpg', caption: 'Schematic — MCU, charger, fuel gauge, mic, amplifier and motor driver' },
      { src: '/projects/wearable/3d-bottom.jpg', caption: '3D render — bottom side with battery and speaker connectors' },
    ],
  },
  {
    id: 'ultra-mini',
    title: 'Ultra-Miniature Coin-Size Wireless PCB',
    subtitle: 'Coin-sized round ESP32 board with USB-C, display flex and custom enclosure',
    category: 'IoT / RF',
    cover: '/projects/mini/assembled.jpg',
    summary:
      'Ultra-compact round PCB for a space-critical device, only a little larger than a coin, that still keeps full functionality. An Espressif ESP32 wireless module, USB-C, power circuitry and a flex connection to the module below share one tightly packed multilayer board. Designed around a custom enclosure, then manufactured and assembled with precision SMT processes.',
    specs: [
      ['MCU', 'Espressif ESP32 mini module (Wi-Fi / BLE)'],
      ['USB', 'USB-C receptacle at the board edge'],
      ['Interconnect', 'Flex (FPC) link to the stacked lower assembly'],
      ['Form factor', 'Round, coin-sized outline fitted to the enclosure'],
      ['Technology', 'Multilayer, micro-vias, fine-pitch components'],
      ['Assembly', 'Precision SMT'],
    ],
    highlights: [
      'High-density placement on a coin-sized round outline: the module antenna overhangs the edge, keeping the copper area free for components.',
      'Micro-vias and fine-pitch parts to escape signals in very little space while keeping clean power delivery and return paths.',
      'Board, battery and flex connection designed together with the enclosure, so the stack closes with the sealing lid.',
      'USB-C placed on the outline so it lines up with the enclosure opening for charging and programming.',
      'Thermal and power paths checked so the wireless module and charging circuitry fit within the small footprint.',
    ],
    tools: ['Miniaturisation', 'HDI / micro-vias', 'Enclosure co-design', 'SMT assembly'],
    gallery: [
      { src: '/projects/mini/assembled.jpg', caption: 'Assembled board next to a coin for scale' },
      { src: '/projects/mini/enclosure.jpg', caption: 'Exploded 3D render — board inside the custom enclosure' },
    ],
  },
  {
    id: 'isolated-control',
    title: '4-Layer Isolated Dual-Loop Control Board',
    subtitle: 'Industrial plug-in card with two MCU control loops, isolation and high-current switching',
    category: 'Industrial / Production',
    cover: '/projects/iso-control/assembled.jpg',
    summary:
      'Complex 4-layer isolated, dual-loop industrial control card, laid out in OrCAD PCB Editor from an OrCAD Capture schematic. Two microcontroller-based control loops run in isolated domains. The card also carries on-board power management and high-current switching stages, and plugs into a backplane through gold edge connectors. Taken from schematic through layout to assembled, working hardware.',
    specs: [
      ['Control', '2 × MCU control loops (QFP microcontrollers)'],
      ['Isolation', 'Isolated domains with isolation transformer'],
      ['Power', 'On-board regulation, bulk capacitance, switching stages'],
      ['Switching', 'High-current MOSFET output stages'],
      ['Interface', 'Gold-finger backplane edge connectors, debug header'],
      ['Config', 'DIP switch, status LEDs, test points'],
      ['Stack-up', '4 layers'],
    ],
    highlights: [
      'Board partitioned into isolated regions with clear creepage gaps between domains, crossed only by the isolation components.',
      'Large copper pours on power and switching nets to carry high current and spread heat from the MOSFET stages.',
      'Each control loop kept in its own area with its MCU, crystal and support circuitry, to avoid cross-coupling.',
      'Bulk capacitors and the isolation transformer grouped at one end, away from the sensitive MCU sections.',
      'Edge-connector fingers placed to match the backplane slot, with test points and LEDs for production test.',
    ],
    tools: ['OrCAD Capture', 'OrCAD PCB Editor', 'Isolation design', 'High-current layout'],
    gallery: [
      { src: '/projects/iso-control/assembled.jpg', caption: 'Assembled control card' },
      { src: '/projects/iso-control/layout.jpg', caption: 'Layout — power pours and isolated domains' },
      { src: '/projects/iso-control/copper.jpg', caption: 'Copper layer — high-current pours and isolation gaps' },
    ],
  },
  {
    id: 'industrial-interface',
    title: 'Industrial Control & Communication Board Set',
    subtitle: 'Multi-board system — controller, power, I/O and sensor boards, built in volume',
    category: 'Industrial / Production',
    cover: '/projects/industrial/2.jpg',
    summary:
      'A family of interconnected boards for an industrial control system: Wi-Fi controller boards with precision ADC front-ends and on-board buck regulators, power/driver boards, connector-matrix I/O boards and ring-shaped sensor boards. Designed as a set and taken through a full assembly batch.',
    specs: [
      ['Controller', 'Wi-Fi MCU module + 16-bit ADC front-end'],
      ['Power', 'Dual buck converters (12 V / 5 V) from 19 V input'],
      ['Outputs', 'MOSFET-switched loads, fan and actuator ports'],
      ['I/O', 'Keyed wire-to-board connectors, connector-matrix boards'],
      ['Sensor boards', 'Ring-shaped boards around a central aperture'],
      ['Build', 'Multiple variants, assembled & tested as a batch'],
    ],
    highlights: [
      'Board partitioning: controller, power and I/O functions split across boards so each can be revised and replaced independently.',
      'Keyed, polarised connectors on every interconnect to prevent mis-cabling during installation.',
      'Custom board outlines (ring / D-shaped) to fit the mechanical assembly.',
      'Designed for hand and machine assembly: consistent footprints, clear silkscreen and labelled connectors.',
    ],
    tools: ['System partitioning', 'Power design', 'Mechanical fit', 'Production build'],
    gallery: [
      {
        src: '/projects/industrial/2.jpg',
        caption: 'Assembled batch — all board variants',
      },
      { src: '/projects/industrial/1.jpg', caption: 'Bench view — batch after assembly' },
      { src: '/projects/industrial/3.jpg', caption: 'Board variants laid out for inspection' },
    ],
  },
]

// Professional work. Each job shows its commercial products as cards:
// `image` = 16:10 product image shown at the top of the card (`credit` says
// whose photo it is, or "Illustration"); without one, `icon` is drawn. `related` = ids of portfolio albums with similar
// work, shown as "Related portfolio work" links that open the album.
export const experience = [
  {
    role: 'Hardware Engineer',
    company: 'TRACTIAN',
    focus: 'Industrial IoT & Predictive Maintenance',
    products: [
      {
        name: 'Smart Trac Ultra (Gen 2)',
        kind: 'Wireless condition-monitoring sensor',
        image: '/products/smart-trac-ultra-studio.jpg',
        credit: 'Image © TRACTIAN',
        link: 'https://tractian.com/en/smart-trac-ultra',
        pitch: 'Led hardware development and multilayer PCB optimisation of an advanced industrial condition-monitoring sensor.',
        facts: ['Vibration, temperature & RPM sensing', 'ATEX / IECEx hazardous-location certified', 'Sub-GHz link to the Smart Receiver'],
        contribution: ['−15% device size', '+20% battery life'],
        related: ['openeew-sensor', 'ultra-mini'],
      },
      {
        name: 'Smart Receiver Pro (SR-PRO)',
        kind: 'Industrial wireless gateway',
        image: '/products/smart-receiver-pro.jpg',
        credit: 'Illustration',
        link: 'https://fccid.io/2BCIS-SR-PRO',
        linkLabel: 'FCC ID 2BCIS-SR-PRO',
        pitch: 'Gateway hardware: Sub-GHz RF communication, component selection and signal-integrity validation.',
        facts: ['Sub-GHz sensor network, up to 100 sensors', '4G/LTE or Wi-Fi backhaul to the cloud', 'Three-antenna design'],
        contribution: ['50+ industrial sites', 'FCC certified'],
        related: ['multi-radio-iot', 'esp32p4-gateway'],
      },
    ],
    location: 'São Paulo, Brazil',
    period: 'Nov 2023 — Oct 2026',
    items: [
      { title: 'Advanced hardware development', text: 'Designed complex 4/6-layer HDI PCBs in Altium Designer, reducing BOM cost and supporting FCC, CE and Anatel EMI/EMC compliance.', metrics: ['−12% BOM cost', 'FCC', 'CE', 'Anatel'] },
      { title: 'Lab validation', text: 'Validation with oscilloscopes, spectrum and logic analysers; found and fixed noise issues in high-vibration environments.', metrics: [] },
      { title: 'Embedded test automation', text: 'STM32/ESP32 firmware in embedded C and Python-driven test rigs.', metrics: ['−30% HIL test time'] },
      { title: 'Mechanical & firmware co-design', text: 'Shielding design for an IP68 enclosure with mechanical engineering; edge-compute data paths aligned with firmware for the AI platform.', metrics: ['IP68'] },
    ],
  },
  {
    role: 'Embedded Systems Engineer',
    company: 'Carmel Tecnologia',
    focus: 'Embedded Systems & Industrial Electronics',
    location: 'Barroso, Brazil',
    period: 'Apr 2021 — Sep 2023',
    products: [
      {
        name: 'ARM Cortex SoM & Carrier Boards',
        kind: 'Linux edge-computing platform',
        image: '/products/arm-som-carrier.jpg',
        credit: 'Illustration',
        pitch: 'Linux-enabled embedded hardware platforms for industrial edge computing and protocol conversion.',
        facts: ['DDR memory, USB 3.0 and Ethernet', 'High-speed controlled-impedance routing', 'Modbus / MQTT / HTTP gateways'],
        contribution: ['Embedded Linux', 'USB 3.0', 'DDR'],
        related: ['am625-carrier', 'core3566-carrier'],
      },
      {
        name: 'Industrial Data Acquisition Modules (PCD)',
        kind: 'Industrial monitoring & data capture',
        image: '/products/pcd-daq-module.jpg',
        credit: 'Illustration',
        pitch: 'High-density circuits, sensor interfaces and power subsystems for industrial monitoring.',
        facts: ['Interfaces for a wide range of industrial sensors', 'High-density mixed-signal layout', 'Dedicated power subsystems'],
        contribution: ['High-density design'],
        related: ['industrial-interface', 'isolated-control'],
      },
      {
        name: 'Industrial IoT Energy Meter',
        kind: 'Connected energy metering',
        image: '/products/iot-energy-meter.jpg',
        credit: 'Illustration',
        pitch: 'Optimised the analog and mixed-signal circuitry for EMI protection and measurement reliability.',
        facts: ['Analog front-end hardening', 'EMI protection of metering circuits', 'Improved measurement reliability'],
        contribution: ['EMI hardening'],
        related: ['isolated-control'],
      },
      {
        name: 'M2M Industrial Telemetry Dataloggers',
        kind: 'Cellular & Wi-Fi telemetry',
        image: '/products/m2m-datalogger.jpg',
        credit: 'Illustration',
        pitch: 'Integrated 4G LTE, NB-IoT and Wi-Fi and optimised the power distribution network.',
        facts: ['4G LTE / NB-IoT / Wi-Fi RF routing', 'Redesigned power distribution network', 'Low-power sleep architecture'],
        contribution: ['−18% sleep power'],
        related: ['multi-radio-iot'],
      },
    ],
    items: [
      { title: 'Automotive interfaces', text: 'Low-level embedded C drivers between the SoM and CAN J1939 / OBD-II peripherals.', metrics: ['CAN', 'J1939'] },
      { title: 'HIL test design', text: 'Python-automated hardware-in-the-loop testing with oscilloscopes and logic analysers.', metrics: ['−35% physical testing'] },
    ],
  },
]

export const education = {
  degree: 'B.Eng. Electrical Engineering',
  school: 'Polytechnic School of the University of São Paulo (Poli-USP)',
  period: '2016 — 2021',
}

export const skills = [
  { group: 'PCB & Hardware Design', items: ['4–14 layer PCB', 'HDI', 'Schematic capture', 'High-speed digital', 'Analog / mixed-signal', 'Signal integrity', 'Power integrity', 'EMI/EMC mitigation', 'DFM / DFA', 'BOM optimisation'] },
  { group: 'Embedded Systems', items: ['STM32', 'ESP32', 'ARM Cortex SoM', 'FPGA systems', 'Embedded Linux', 'C / C++', 'Python', 'Low-level drivers'] },
  { group: 'Interfaces', items: ['DDR', 'USB 2.0 / 3.0', 'Ethernet', 'SPI', 'I²C', 'UART', 'CAN / J1939', 'OBD-II', 'Modbus', 'MQTT', 'Wi-Fi', '4G LTE', 'NB-IoT', 'Sub-GHz / LoRa', 'BLE'] },
  { group: 'EDA, CAD & Simulation', items: ['Altium Designer', 'OrCAD', 'KiCad', 'EasyEDA', 'SolidWorks', 'Ansys', 'STEP / IDF 3D', 'ECAD–MCAD', 'Git'] },
  { group: 'Lab & Validation', items: ['Board bring-up', 'Oscilloscope', 'Spectrum analyser', 'Logic analyser', 'HIL testing', 'Python test automation', 'FCC / CE / Anatel', 'Production support'] },
  { group: 'Mechanical & Leadership', items: ['3D enclosure co-design (SolidWorks)', 'Simulation (Ansys)', 'IP68 shielding', 'Thermal layout', 'Hardware architecture', 'Technical leadership', 'Rapid prototyping', 'PLM'] },
]

// Tools section. `logo` = SVG in public/tools (brand logos from the open-source
// Simple Icons set). `icon` = built-in drawn icon for tools without a logo.
// `color` = brand colour for the tile; optional `color2` turns the mark into a
// two-tone gradient. `wide: true` makes a group span the full row.
export const tools = [
  {
    group: 'EDA, CAD & Simulation',
    wide: true,
    items: [
      { name: 'Altium Designer', logo: 'altiumdesigner', color: '#C9A961', color2: '#F1DDAA', level: 'Primary' },
      { name: 'OrCAD', icon: 'monogram', mono: 'Or', color: '#E0393F' },
      { name: 'KiCad', logo: 'kicad', color: '#4D6BE0', color2: '#9DB0FF' },
      { name: 'EasyEDA', logo: 'easyeda', color: '#2F7BFF', color2: '#7FB0FF' },
      { name: 'SolidWorks', icon: 'monogram', mono: 'SW', color: '#E2231A', color2: '#FF7A6E' },
      { name: 'Ansys', icon: 'fea', color: '#FFB71B' },
      { name: 'STEP / IDF 3D', icon: 'cube', color: '#46C58A' },
    ],
  },
  {
    group: 'Platforms & Silicon',
    items: [
      { name: 'STM32', logo: 'stmicroelectronics', color: '#3CB4E6', color2: '#FFD200' },
      { name: 'ESP32', logo: 'espressif', color: '#E7352C', color2: '#FF8A80' },
      { name: 'ARM Cortex', logo: 'arm', color: '#14B8E6', color2: '#7DE3FF' },
      { name: 'Embedded Linux', logo: 'linux', color: '#FCC624', color2: '#FFF1B0' },
      { name: 'FPGA', icon: 'chip', color: '#D4924F' },
    ],
  },
  {
    group: 'Firmware & Software',
    items: [
      { name: 'Embedded C', logo: 'c', color: '#5C8DD6', color2: '#A8B9CC' },
      { name: 'C++', logo: 'cplusplus', color: '#3B8FE0', color2: '#9CC8F5' },
      { name: 'Python', logo: 'python', color: '#4B8BD4', color2: '#FFD43B' },
      { name: 'Git', logo: 'git', color: '#F05032', color2: '#FF9A7F' },
      { name: 'MQTT', logo: 'mqtt', color: '#B65FB1', color2: '#E3A6E0' },
    ],
  },
  {
    group: 'Lab & Validation',
    wide: true,
    items: [
      { name: 'Oscilloscope', icon: 'scope', color: '#F5C842' },
      { name: 'Spectrum Analyzer', icon: 'spectrum', color: '#38C6F4' },
      { name: 'Logic Analyzer', icon: 'logic', color: '#B57CF2' },
      { name: 'HIL Test Rigs', icon: 'hil', color: '#FF9548' },
      { name: 'EMC Pre-compliance', icon: 'emc', color: '#46C58A' },
    ],
  },
]

export const process = [
  { step: '01', title: 'Requirements & architecture', text: 'Block diagram, power budget, interface list, cost and certification targets agreed before schematic work starts.' },
  { step: '02', title: 'Schematic & component selection', text: 'Hierarchical schematics, lifecycle-checked parts with second sources, design review against datasheets and reference designs.' },
  { step: '03', title: 'Stack-up & layout', text: 'Impedance-controlled stack-up with the fab, placement driven by SI/PI and mechanics, length-matched high-speed groups.' },
  { step: '04', title: 'Verification & DFM', text: 'DRC, SI/PI checks, 3D/MCAD fit check, fab and assembly DFM review; full manufacturing package (Gerber/ODB++, BOM, pick-and-place, drawings).' },
  { step: '05', title: 'Bring-up & validation', text: 'Power-up sequencing, rail and signal measurements, firmware bring-up, automated test scripts.' },
  { step: '06', title: 'Compliance & production', text: 'Pre-compliance EMI/EMC, FCC / CE / Anatel support, production test fixtures and design-for-test.' },
]
