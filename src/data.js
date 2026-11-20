// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  text, projects, links and annotations — no component changes
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

// Annotation hotspots use percentage coordinates (x, y) on the image.
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
        hotspots: [
          { x: 51, y: 49, label: 'STM32 host MCU', note: 'Central placement shortens SPI/UART runs to all three radios.' },
          { x: 76, y: 43, label: 'LTE-M / NB-IoT module', note: 'Cellular modem with dedicated U.FL feed (A3).' },
          { x: 24, y: 46, label: 'LoRa module', note: 'Sub-GHz transceiver fed to U.FL A1 on the opposite edge from the modem.' },
          { x: 52, y: 29, label: 'BLE SoC + crystal', note: 'Short RF path up to antenna port A2; 32 MHz / 32 kHz crystals placed tight to the SoC.' },
          { x: 51, y: 82, label: 'Nano-SIM holder', note: 'Placed next to the modem section, ESD-protected.' },
          { x: 35, y: 83, label: 'SPI NOR flash', note: 'Local buffering of readings when connectivity drops.' },
          { x: 70, y: 14, label: 'USB header', note: 'Power and data for lab use.' },
          { x: 25, y: 17, label: 'UART debug header', note: '3.3 V console for firmware bring-up.' },
        ],
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
        hotspots: [
          { x: 52, y: 44, label: 'AM625 SoM (10-layer)', note: 'Processor, LPDDR and PMIC on a castellated module.' },
          { x: 28, y: 12, label: 'HDMI output', note: 'Driven from the LVDS→RGB bridge and HDMI transmitter.' },
          { x: 42, y: 24, label: 'SN75LVDS82 bridge', note: 'LVDS receiver converting to parallel RGB.' },
          { x: 61, y: 79, label: 'GbE port 1', note: 'RTL8211F PHY over RGMII, 100 Ω MDI pairs.' },
          { x: 82, y: 79, label: 'GbE port 2', note: 'Second independent Gigabit interface.' },
          { x: 75, y: 15, label: 'Audio jack', note: 'TLV320AIC3106 codec input/output.' },
          { x: 36, y: 85, label: 'USB 2.0 Type-A', note: 'Host port, 90 Ω differential pair.' },
          { x: 19, y: 89, label: 'USB-C power input', note: 'Input protection ahead of the DC-DC converter.' },
          { x: 26, y: 70, label: 'DC-DC stage', note: 'TLV62595 buck with shielded inductor.' },
          { x: 51, y: 10, label: 'Expansion headers', note: 'UART / SPI / I²C / CAN and boot straps.' },
        ],
      },
      { src: '/projects/am625/block-diagram.jpg', caption: 'System block diagram' },
      { src: '/projects/am625/layout.jpg', caption: 'Top-layer routing with ground pours and fan-out' },
      { src: '/projects/am625/3d-bottom.jpg', caption: '3D render — bottom side with eMMC and microSD' },
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
        hotspots: [
          { x: 47, y: 61, label: 'Controller board', note: 'Wi-Fi MCU module with 16-bit ADC front-end.' },
          { x: 51, y: 53, label: 'Dual buck regulators', note: '12 V and 5 V rails from a 19 V barrel input.' },
          { x: 34, y: 40, label: 'Power / driver board', note: 'Linear and switching stages, TO-220 devices.' },
          { x: 17, y: 42, label: 'Connector-matrix board', note: 'Distribution of I/O to field wiring.' },
          { x: 64, y: 24, label: 'Ring sensor boards', note: 'Custom outline around a central aperture.' },
        ],
      },
      { src: '/projects/industrial/1.jpg', caption: 'Bench view — batch after assembly' },
      { src: '/projects/industrial/3.jpg', caption: 'Board variants laid out for inspection' },
    ],
  },
]

// Professional work described in the resume. Shown as text case studies
// (no images, to respect employer confidentiality).
export const experience = [
  {
    role: 'Hardware Engineer',
    company: 'TRACTIAN',
    focus: 'Industrial IoT & Predictive Maintenance',
    // Commercial products shown at the top of this job. `image` is optional;
    // without one, a device icon is drawn instead.
    products: [
      {
        name: 'Smart Trac Ultra',
        kind: 'Wireless condition-monitoring sensor',
        image: '/products/smart-trac-ultra-installed.jpg',
        imageFit: 'photo', // fills the tile; use 'cutout' for transparent PNG renders
        credit: 'Image © TRACTIAN',
        link: 'https://tractian.com/en/smart-trac-ultra',
        facts: ['Vibration, temperature & RPM sensing', 'ATEX / IECEx hazardous-location certified', 'Sub-GHz link to the Smart Receiver'],
        contribution: ['−15% device size', '+20% battery life'],
      },
      {
        name: 'Smart Receiver Pro (SR-PRO)',
        kind: 'Industrial wireless gateway',
        icon: 'gateway',
        link: 'https://fccid.io/2BCIS-SR-PRO',
        linkLabel: 'FCC ID 2BCIS-SR-PRO',
        facts: ['Sub-GHz sensor network, up to 100 sensors', '4G/LTE or Wi-Fi backhaul to the cloud', 'Three-antenna design'],
        contribution: ['50+ industrial sites', 'FCC certified'],
      },
    ],
    location: 'São Paulo, Brazil',
    period: 'Nov 2023 — Oct 2026',
    items: [
      { title: 'Smart Trac Ultra (Gen 2)', text: 'Led hardware development and multilayer PCB optimisation for an advanced industrial condition-monitoring sensor.', metrics: ['−15% device size', '+20% battery life'] },
      { title: 'Smart Receiver Pro (SR-PRO)', text: 'Industrial wireless gateway hardware: Sub-GHz RF communication, component selection and signal-integrity validation for reliable data collection.', metrics: ['50+ industrial sites'] },
      { title: 'Advanced hardware development', text: 'Complex 4/6-layer HDI PCBs in Altium Designer with BOM optimisation, supporting EMI/EMC compliance.', metrics: ['−12% BOM cost'] },
      { title: 'Lab validation & compliance', text: 'Validation with oscilloscopes, spectrum and logic analysers; found and fixed noise issues in high-vibration environments.', metrics: ['FCC', 'CE', 'Anatel'] },
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
    items: [
      { title: 'SoM architecture', text: 'Led hardware design of Linux-capable ARM Cortex Systems-on-Module and custom carrier boards for edge computing and protocol conversion (Modbus / MQTT / HTTP).', metrics: ['Embedded Linux'] },
      { title: 'High-speed PCB design', text: 'Controlled impedance, differential pairs and length matching for USB 2.0/3.0, Ethernet and DDR.', metrics: ['USB 3.0', 'DDR', 'GbE'] },
      { title: 'Industrial data capture', text: 'High-density circuitry and power subsystems for PCD data-capture modules interfacing a wide range of industrial sensors.', metrics: [] },
      { title: 'IoT energy meter', text: 'Design changes to protect analog metering circuitry from EMI.', metrics: ['EMI hardening'] },
      { title: 'M2M telemetry dataloggers', text: 'Improved 4G LTE / NB-IoT and Wi-Fi RF routing; redesigned the power distribution network.', metrics: ['−18% sleep current'] },
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
  { group: 'EDA & CAD', items: ['Altium Designer', 'OrCAD', 'KiCad', 'EasyEDA', 'STEP / IDF 3D', 'ECAD–MCAD', 'Git'] },
  { group: 'Lab & Validation', items: ['Board bring-up', 'Oscilloscope', 'Spectrum analyser', 'Logic analyser', 'HIL testing', 'Python test automation', 'FCC / CE / Anatel', 'Production support'] },
  { group: 'Mechanical & Leadership', items: ['3D enclosure co-design', 'IP68 shielding', 'Thermal layout', 'Hardware architecture', 'Technical leadership', 'Rapid prototyping', 'PLM'] },
]

// Tools section. `logo` = SVG in public/tools (brand logos from the open-source
// Simple Icons set). `icon` = built-in drawn icon for tools without a logo.
export const tools = [
  {
    group: 'EDA & CAD',
    items: [
      { name: 'Altium Designer', logo: 'altiumdesigner', color: '#A5915F', level: 'Primary' },
      { name: 'OrCAD', icon: 'monogram', mono: 'Or', color: '#C4262E' },
      { name: 'KiCad', logo: 'kicad', color: '#314CB0' },
      { name: 'EasyEDA', logo: 'easyeda', color: '#1765F6' },
      { name: 'STEP / IDF 3D', icon: 'cube', color: '#46c58a' },
    ],
  },
  {
    group: 'Platforms & Silicon',
    items: [
      { name: 'STM32', logo: 'stmicroelectronics', color: '#3CB4E6' },
      { name: 'ESP32', logo: 'espressif', color: '#E7352C' },
      { name: 'ARM Cortex', logo: 'arm', color: '#0091BD' },
      { name: 'Embedded Linux', logo: 'linux', color: '#FCC624' },
      { name: 'FPGA', icon: 'chip', color: '#d4924f' },
    ],
  },
  {
    group: 'Firmware & Software',
    items: [
      { name: 'Embedded C', logo: 'c', color: '#A8B9CC' },
      { name: 'C++', logo: 'cplusplus', color: '#00599C' },
      { name: 'Python', logo: 'python', color: '#3776AB' },
      { name: 'Git', logo: 'git', color: '#F05032' },
      { name: 'MQTT', logo: 'mqtt', color: '#9B4F96' },
    ],
  },
  {
    group: 'Lab & Validation',
    items: [
      { name: 'Oscilloscope', icon: 'scope', color: '#46c58a' },
      { name: 'Spectrum Analyzer', icon: 'spectrum', color: '#46c58a' },
      { name: 'Logic Analyzer', icon: 'logic', color: '#46c58a' },
      { name: 'HIL Test Rigs', icon: 'hil', color: '#46c58a' },
      { name: 'EMC Pre-compliance', icon: 'emc', color: '#46c58a' },
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
