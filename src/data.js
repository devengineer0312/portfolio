// All site content lives here. Edit text, add projects or images without touching components.
// Image paths are relative to /public.

export const profile = {
  name: 'Maria Monica Liola',
  firstName: 'Maria',
  role: 'Mechanical & Mechatronics Engineer',
  location: 'Brazil',
  photo: 'profile.jpg',
  headline: 'I turn mechanical and electromechanical concepts into reliable, manufacturable, production-ready products.',
  intro:
    'SolidWorks and Ansys specialist working across the full development cycle: concept, 3D CAD, simulation, prototyping, manufacturing documentation and production support. I combine mechanical engineering with electronics, embedded systems, sensors and automation controls, so I deliver complete systems rather than isolated parts.',
  stats: [
    { value: '5+', label: 'Years in industry' },
    { value: '6', label: 'Engineering disciplines' },
    { value: 'B.Sc.', label: 'Mechanical Engineering' },
  ],
};

export const projects = [
  {
    id: 'food-processor',
    title: 'Industrial Food Processing Machine',
    subtitle: 'Twin ribbon mixer & screw conveyor',
    category: 'Process Equipment',
    role: 'Mechanical & Mechatronics Engineer',
    cover: 'projects/food-processor/hero.png',
    summary:
      'A multi-purpose machine for Faloodeh, starch-based desserts, thick milkshakes and frozen beverages. Dual horizontal ribbon mixers, independent gearmotor drives, a screw conveyor, an extrusion mechanism and a fluid distribution manifold.',
    focus: [
      'Uniform mixing of high-viscosity materials',
      'Consistent material transport via screw conveyor',
      'Hygienic stainless construction',
      'Maintenance accessibility',
      'Electromechanical drive integration',
    ],
    specs: [
      ['Mixers', '2 × horizontal ribbon'],
      ['Drives', 'Independent gearmotors'],
      ['Transport', 'Screw conveyor + extruder'],
      ['Outlet', 'Multi-valve manifold'],
    ],
    tags: ['SolidWorks', 'Machine Design', 'Industrial Automation', 'Manufacturing Engineering'],
    images: [
      'projects/food-processor/hero.png',
      'projects/food-processor/view-1.png',
      'projects/food-processor/view-2.png',
      'projects/food-processor/view-3.png',
      'projects/food-processor/view-4.png',
      'projects/food-processor/view-5.png',
      'projects/food-processor/view-6.png',
      'projects/food-processor/view-7.png',
      'projects/food-processor/view-8.png',
      'projects/food-processor/view-9.png',
      'projects/food-processor/view-10.jpg',
      'projects/food-processor/view-11.jpg',
      'projects/food-processor/view-12.jpg',
      'projects/food-processor/view-13.jpg',
      'projects/food-processor/view-14.jpg',
    ],
  },
  {
    id: 'meat-slicer',
    title: 'Semi-Automatic Meat Slicing Machine',
    subtitle: 'Commercial portioning equipment',
    category: 'Machine Design',
    role: 'Mechanical & Mechatronics Engineer',
    cover: 'projects/meat-slicer/hero.png',
    summary:
      'A semi-automatic sausage and meat slicer for commercial food processing and portioning. Curved cutting blade, mechanical linkage drive, product feeding chute, sheet metal safety guards and a stainless support frame, with provisions for electrical control and automation.',
    focus: [
      'Cutting consistency',
      'Mechanical reliability of the linkage drive',
      'Operator accessibility and guarding',
      'Hygienic construction',
      'Manufacturability',
    ],
    specs: [
      ['Blade', 'Curved rotary'],
      ['Drive', 'Mechanical linkage'],
      ['Frame', 'Stainless tube stand'],
      ['Guards', 'Sheet metal, hinged'],
    ],
    tags: ['SolidWorks', 'Machine Design', 'Sheet Metal', 'Industrial Automation'],
    images: [
      'projects/meat-slicer/hero.png',
      'projects/meat-slicer/view-1.png',
      'projects/meat-slicer/view-2.png',
      'projects/meat-slicer/view-3.png',
      'projects/meat-slicer/view-4.jpg',
      'projects/meat-slicer/view-5.jpg',
      'projects/meat-slicer/view-6.jpg',
      'projects/meat-slicer/view-7.jpg',
      'projects/meat-slicer/view-8.jpg',
      'projects/meat-slicer/view-9.jpg',
    ],
  },
  {
    id: 'retro-console',
    title: 'ESP32-S3 Handheld Game Console',
    subtitle: 'Enclosure & embedded integration',
    category: 'Mechatronics',
    role: 'Mechanical & Mechatronics Engineer',
    cover: 'projects/retro-console/photo-1.jpg',
    summary:
      'A portable ESP32-S3 retro gaming console with a custom 3D-printable enclosure and integrated embedded electronics. Designed in CAD, printed and assembled into a working prototype.',
    focus: [
      'Ergonomic control layout',
      'LCD mounting and PCB supports',
      'Battery packaging and speaker integration',
      'USB-C accessibility',
      'Clearances, tolerances and fastening for additive manufacturing',
    ],
    specs: [
      ['MCU', 'ESP32-S3'],
      ['Enclosure', 'FDM 3D printed'],
      ['Power', 'Li-ion + USB-C charging'],
      ['Stage', 'Working prototype'],
    ],
    tags: ['Mechatronics', '3D CAD', 'Product Design', '3D Printing'],
    images: [
      'projects/retro-console/photo-1.jpg',
      'projects/retro-console/cad-1.png',
      'projects/retro-console/cad-2.png',
      'projects/retro-console/photo-2.jpg',
      'projects/retro-console/photo-3.jpg',
      'projects/retro-console/photo-4.jpg',
      'projects/retro-console/photo-5.jpg',
      'projects/retro-console/photo-6.jpg',
    ],
  },
  {
    id: 'phone-mount',
    title: 'Universal Tablet & Smartphone Mount',
    subtitle: 'Modular mechanism design',
    category: 'Product Design',
    role: 'Mechanical Design Engineer',
    cover: 'projects/phone-mount/render-1.png',
    summary:
      'A modular mounting system for automotive, desktop and industrial use. Adjustable sliding jaws on dual guide rods, an articulated ball-joint, and interchangeable bases: desk clamp, tube clamp, suction mount and fixed plate.',
    focus: [
      'Mechanical stability under vibration',
      'Ergonomic one-hand adjustment',
      'Component tolerances on sliding jaws',
      'Assembly efficiency across base variants',
      'Design for manufacturing',
    ],
    specs: [
      ['Grip', 'Sliding jaws, dual rods'],
      ['Joint', 'Articulated ball'],
      ['Bases', '4 interchangeable'],
      ['Use', 'Car · desk · industrial'],
    ],
    tags: ['SolidWorks', 'Product Design', '3D Modeling', 'DFM'],
    video: 'projects/phone-mount/animation.mp4',
    images: [
      'projects/phone-mount/render-1.png',
      'projects/phone-mount/render-2.png',
      'projects/phone-mount/render-3.png',
      'projects/phone-mount/render-4.png',
      'projects/phone-mount/render-5.png',
      'projects/phone-mount/render-6.png',
    ],
  },
  {
    id: 'solar-station',
    title: '4.05 kW Solar Scooter Charging Station',
    subtitle: 'Mechanical & electrical system design',
    category: 'Renewable Energy',
    role: 'Mechanical & Mechatronics Engineer',
    cover: 'projects/solar-station/assembly.png',
    summary:
      'A solar-powered charging station for six electric scooters. Ten 405 W panels on a self-supporting canopy, MPPT-based power management, a central charging enclosure and multiple battery docking interfaces.',
    focus: [
      'Renewable energy utilisation',
      'Structural stability of the canopy',
      'Outdoor durability',
      'Efficient power distribution',
      'Mechanical–electrical integration',
    ],
    specs: [
      ['PV array', '10 × 405 W = 4.05 kW'],
      ['Capacity', '6 scooters'],
      ['Power mgmt', 'MPPT'],
      ['Structure', 'Self-supporting canopy'],
    ],
    tags: ['SolidWorks', 'Electrical Engineering', 'Solar Energy', 'Mechatronics'],
    images: ['projects/solar-station/assembly.png', 'projects/solar-station/battery-dock.png'],
  },
  {
    id: 'cabinet',
    title: 'Industrial Electrical Control Cabinet',
    subtitle: 'Sheet metal enclosure design',
    category: 'Sheet Metal',
    role: 'Mechanical Design Engineer',
    cover: 'projects/cabinet/render-1.png',
    summary:
      'A floor-standing cabinet for control electronics, power distribution and automation equipment. Sheet metal enclosure with a full-height hinged door, ventilation louvers, cable entry slots and a reinforced mounting base.',
    focus: [
      'Component accessibility',
      'Structural rigidity',
      'Thermal management via louvers',
      'Assembly efficiency',
      'Sheet metal manufacturability',
    ],
    specs: [
      ['Type', 'Floor-standing'],
      ['Door', 'Full-height, hinged'],
      ['Cooling', 'Side louvers'],
      ['Cabling', 'Bottom entry slots'],
    ],
    tags: ['Sheet Metal', 'Mechanical Design', 'Industrial Engineering', 'DFM'],
    images: ['projects/cabinet/render-1.png'],
  },
];

export const services = [
  {
    code: '01',
    title: 'Mechanical Design & 3D CAD',
    items: [
      'SolidWorks modeling, complex assemblies, technical drawings',
      'Product development and industrial equipment design',
      'Sheet metal, machined parts, plastic parts, enclosures',
      'Parametric modeling, reverse engineering, optimisation',
      'GD&T, tolerance analysis, DFM / DFA / DFMA',
    ],
  },
  {
    code: '02',
    title: 'Simulation & Analysis',
    items: [
      'FEA: static, dynamic, vibration and modal',
      'Thermal analysis, heat transfer, cooling optimisation',
      'CFD with Ansys Fluent',
      'Fatigue, deformation and stress evaluation',
      'Electromagnetic & multiphysics, EDEM, MSC Adams',
    ],
  },
  {
    code: '03',
    title: 'Mechatronics & Electromechanical',
    items: [
      'Complete electromechanical product and machine design',
      'Motor, actuator, gearbox and transmission integration',
      'Sensors, control electronics, embedded hardware',
      'Robotic mechanisms and automated machinery',
      'Hydraulic and pneumatic integration',
    ],
  },
  {
    code: '04',
    title: 'Industrial Automation & PLC',
    items: [
      'Automated machine and production line development',
      'PLC: Siemens, Allen-Bradley, Mitsubishi',
      'HMI and SCADA integration',
      'Drives, sensors, actuators and motion control',
      'Control panels and troubleshooting',
    ],
  },
  {
    code: '05',
    title: 'CNC Manufacturing & CAM',
    items: [
      'Fusion 360 CAM and SolidWorks CAM',
      '3-axis / 4-axis milling and turning',
      'Toolpath strategies and optimisation',
      'Post-processing and NC code verification',
      'CNC, 3D printing and rapid prototyping support',
    ],
  },
  {
    code: '06',
    title: 'Electronics Integration',
    items: [
      'Mechanical integration of custom PCBs',
      'Altium Designer and KiCad support',
      'Multilayer PCB packaging and enclosures',
      'Battery integration, EMI/EMC, thermal design',
      'Hardware / firmware integration',
    ],
  },
];

export const process = [
  { step: 'Concept', text: 'Requirements, sketches, mechanism and architecture choices.' },
  { step: 'CAD', text: 'Parametric parts, assemblies and design reviews in SolidWorks.' },
  { step: 'Simulate', text: 'FEA, CFD, thermal and motion studies to validate before cutting metal.' },
  { step: 'Prototype', text: 'CNC, 3D printing and electronics bring-up for a working unit.' },
  { step: 'Produce', text: 'Drawings, BOMs, flat patterns and CAM files ready for the shop.' },
];

export const experience = [
  {
    period: 'Nov 2023 — Oct 2026',
    title: 'Hardware Engineer',
    org: 'Tractian',
    type: 'Employment',
  },
  {
    period: 'Apr 2021 — Sep 2023',
    title: 'Mechanical Engineer',
    org: 'IEME Brazil Consulting Engineering',
    type: 'Employment',
  },
  {
    period: '2016 — 2021',
    title: 'B.Sc. Mechanical Engineering',
    org: 'Bachelor of Science',
    type: 'Education',
  },
];

export const tools = [
  { group: 'CAD & Product Design', items: ['SolidWorks', 'AutoCAD', 'Fusion 360', 'Blender', '3ds Max'] },
  { group: 'Simulation & CAE', items: ['Ansys Mechanical', 'Ansys Fluent', 'Ansys HFSS', 'EDEM', 'MSC Adams'] },
  { group: 'CAM & Manufacturing', items: ['Fusion 360 CAM', 'SolidWorks CAM', 'CNC Toolpaths'] },
  { group: 'Electronics', items: ['Altium Designer', 'KiCad'] },
  { group: 'Automation & Control', items: ['Siemens PLC', 'Allen-Bradley', 'Mitsubishi', 'HMI / SCADA', 'Motion Control'] },
];

export const deliverables = [
  'Editable 3D models & assemblies — SLDPRT, SLDASM, STEP, IGES, F3D',
  '2D manufacturing drawings — DWG, DXF, PDF',
  'Sheet metal flat patterns & CNC files',
  'FEA, CFD, thermal & motion simulation reports',
  'CAM toolpaths & machining documentation',
  'PLC programs & automation documentation',
  'Assembly instructions, exploded views & BOMs',
  'Prototype-ready & manufacturing-ready packages',
];
