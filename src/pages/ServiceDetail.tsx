import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle2, Image } from 'lucide-react';
import GlobalSupportCTA from '../components/Home/GlobalSupportCTA';
import PageBanner from '../components/Layout/PageBanner';
import marineImg from '../assets/marine.jpg';
import commImg from '../assets/communication.jpg';
import safetyImg from '../assets/safety.jpg';
import mechImg from '../assets/mechanical.jpg';
import gpsImg1 from '../assets/equipments/New Project (1).jpg';
import gpsImg2 from '../assets/equipments/New Project (2).jpg';
import gpsImg3 from '../assets/equipments/New Project (3).jpg';
import gpsImg4 from '../assets/equipments/New Project (4).jpg';
import eq2 from '../assets/equipments/eq2.jpg';
import eq3 from '../assets/equipments/eq3.jpg';
import eq4 from '../assets/equipments/eq4.jpg';
import gy1 from '../assets/equipments/gy1.jpg';
import gy2 from '../assets/equipments/gy2.jpg';
import gy3 from '../assets/equipments/gy3.jpg';
import gy4 from '../assets/equipments/gy4.jpg';
import mc1 from '../assets/equipments/mc1.jpg';
import mc2 from '../assets/equipments/mc2.jpg';
import mc3 from '../assets/equipments/mc3.jpg';
import ec1 from '../assets/equipments/ec1.jpg';
import ec2 from '../assets/equipments/ec2.jpg';
import ec3 from '../assets/equipments/ec3.jpg';
import ec4 from '../assets/equipments/ec4.jpg';
import mr1 from '../assets/equipments/mr1.jpg';
import mr2 from '../assets/equipments/mr2.jpg';
import mr3 from '../assets/equipments/mr3.jpg';
import mr4 from '../assets/equipments/mr4.jpg';
import mr5 from '../assets/equipments/mr5.jpg';
import ais1 from '../assets/equipments/ais1.jpg';
import ais2 from '../assets/equipments/ais2.jpg';
import ais3 from '../assets/equipments/ais3.jpg';
import auto1 from '../assets/equipments/auto1.jpg';
import auto2 from '../assets/equipments/auto2.jpg';
import auto3 from '../assets/equipments/auto3.jpg';
import auto4 from '../assets/equipments/auto4.jpg';
import speed1 from '../assets/equipments/speed1.jpg';
import speed2 from '../assets/equipments/speed2.jpg';
import speed3 from '../assets/equipments/speed3.jpg';
import speed4 from '../assets/equipments/speed4.jpg';
import echo1 from '../assets/equipments/echo1.jpg';
import echo2 from '../assets/equipments/echo2.jpg';
import echo3 from '../assets/equipments/echo3.jpg';
import bn1 from '../assets/equipments/bn1.jpg';
import bn2 from '../assets/equipments/bn2.jpg';
import nav1 from '../assets/equipments/nav1.jpg';
import nav2 from '../assets/equipments/nav2.jpg';
import nav3 from '../assets/equipments/nav3.jpg';
import alarmImg from '../assets/marine/alarm.jpg';

import alarmImg3 from '../assets/marine/alarm.png';
import cargoImg from '../assets/marine/cargo.jpg';
import pmsImg1 from '../assets/marine/pms.jpg';
import pmsImg2 from '../assets/marine/pms2.jpg';
import engineImg from '../assets/marine/engine.jpg';
import tankImg from '../assets/marine/tank.jpg';
import tankImg2 from '../assets/marine/tank.jpeg';
import tankImg3 from '../assets/marine/tank.png';
import stImg from '../assets/marine/st.jpg';
import stImg2 from '../assets/marine/steering.jpeg';
import stImg3 from '../assets/marine/steering.png';
import fireImg1 from '../assets/marine/fire (1).jpeg';
import fireImg2 from '../assets/marine/fire (2).jpeg';
import fireImg3 from '../assets/marine/fire (1).webp';
import marineLightImg1 from '../assets/marine/marine.jpg';
import marineLightImg2 from '../assets/marine/marine2.jpg';
import cctvImg from '../assets/marine/cctv.jpg';

// Mock database for service details
const serviceData: Record<string, any> = {
  navigation: {
    title: "Marine Navigation Equipment",
    heroImage: marineImg,
    desc: "Complete navigation solutions for safe and compliant vessel operations. We supply, install, and service a wide range of bridge equipment.",
    features: [
      "Radar / ARPA Systems (X-Band & S-Band)",
      "ECDIS (Electronic Chart Display)",
      "Gyro Compasses and Repeaters",
      "Autopilot Systems",
      "GPS / DGPS Receivers",
      "AIS (Automatic Identification System)",
      "Speed Logs & Echo Sounders",
      "BNWAS & NAVTEX"
    ],
    brands: ["Furuno", "JRC", "Sperry Marine", "Raytheon Anschütz", "Kongsberg", "Simrad"]
  },
  automation: {
    title: "Marine Automation Systems",
    heroImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80",
    desc: "Advanced control systems, alarm monitoring, and power management solutions to ensure optimal performance and safety of marine vessels.",
    features: [
      "Alarm Monitoring Systems (AMS)",
      "Power Management Systems (PMS)",
      "Integrated Automation Systems (IAS)",
      "Tank Level Gauging Systems",
      "Fire Detection & Alarm Systems",
      "Main Engine Remote Control",
      "Boiler Control Systems"
    ],
    brands: ["ABB", "Kongsberg Maritime", "Wärtsilä", "Schneider Electric", "Siemens", "Emerson"]
  },
  communication: {
    title: "Communication Systems",
    heroImage: commImg,
    desc: "Reliable internal and external communication systems for vessels, ensuring seamless connectivity and distress signaling.",
    features: [
      "GMDSS Equipment (A1, A2, A3, A4)",
      "VDR / S-VDR (Voyage Data Recorder)",
      "VSAT & Inmarsat FleetBroadband",
      "VHF / MF / HF Radios",
      "Public Address & General Alarm (PAGA)",
      "Sound Powered Telephones",
      "Satellite TV Systems (TVRO)"
    ],
    brands: ["Sailor (Cobham)", "Jotron", "Intellian", "Cobham", "Zenitel", "Iridium"]
  },
  electrical: {
    title: "Electrical & Electronic Systems",
    heroImage: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80",
    desc: "Comprehensive electrical engineering support and spare parts supply for all types of marine installations.",
    features: [
      "Main Switchboards & Distribution Boards",
      "Marine Cables and Accessories",
      "Sensors, Transmitters & Controllers",
      "Circuit Breakers and Contactors",
      "Marine Batteries and Chargers",
      "Lighting Systems (LED, Ex-proof)",
      "Electric Motors and Starters"
    ],
    brands: ["Schneider Electric", "Danfoss", "Trafag", "Sarel", "Omron", "Vaf Instruments"]
  },
  safety: {
    title: "Safety Equipment (LSA & FFA)",
    heroImage: safetyImg,
    desc: "SOLAS approved life-saving appliances and fire-fighting equipment for immediate dispatch.",
    features: [
      "Life Rafts and Accessories",
      "Life Jackets and Immersion Suits",
      "EEBD (Emergency Escape Breathing Devices)",
      "Pyrotechnics and Distress Signals",
      "Portable Gas Detectors",
      "Fire Extinguishers & Hoses",
      "BA Sets and Spares"
    ],
    brands: ["Dräger", "MSA", "Viking", "Comet", "Pains Wessex", "Survitec"]
  },
  hydraulic: {
    title: "Hydraulic & Mechanical Systems",
    heroImage: mechImg,
    desc: "Heavy machinery spares and complete hydraulic system components for deck machinery and engine rooms.",
    features: [
      "Hydraulic Pumps and Motors",
      "Directional Control Valves",
      "Mooring Winch Spares",
      "Crane Hydraulic Spares",
      "Air Compressors and Spares",
      "Purifiers and Separators",
      "Heat Exchangers"
    ],
    brands: ["Rexroth", "Danfoss", "Vickers", "Parker", "Sauer Danfoss", "Alfa Laval"]
  }
};

const navigationEquipments = [
  {
    name: "GPS / DGPS",
    description: "Marine GPS/DGPS systems provide accurate vessel position, speed, and time data for integration with Radar, AIS, ECDIS, Autopilot and other bridge navigation systems.",
    models: [
      "Furuno – GP-170, GP-39, GP-3700",
      "JRC – JLR-7600, JLR-7900, JLR-8400, JLR-8600",
      "Koden – KGP-922",
      "Garmin – GPSMAP Series"
    ],
    photoCount: 4,
    photos: [gpsImg1, gpsImg2, gpsImg3, gpsImg4]
  },
  {
    name: "Satellite Compass",
    description: "Satellite compass systems provide precise heading and position data using multiple GNSS satellites for radar overlay, autopilot steering and dynamic positioning.",
    models: [
      "Furuno – SCX-20, SCX-21",
      "JRC – JLR-21 GNSS Compass",
      "Garmin – MSC-10"
    ],
    photoCount: 3,
    photos: [eq2, eq3, eq4]
  },
  {
    name: "Gyro Compass",
    description: "Gyrocompasses provide true north heading reference independent of magnetic interference and are essential for modern navigation systems.",
    models: [
      "Furuno – SC-70, SC-130",
      "Tokyo Keiki – TG-8000",
      "Raytheon Anschütz – Standard 22 NX",
      "Simrad GC80/85"
    ],
    photoCount: 4,
    photos: [gy1, gy2, gy3, gy4]
  },
  {
    name: "Magnetic Compass",
    description: "Magnetic compasses serve as SOLAS-required backup navigation instruments for safe vessel navigation.",
    models: [
      "Cassens & Plath – Marine Compass",
      "Ritchie – Navigator Series",
      "Plastimo – Offshore Series",
      "Tokyo Keiki – Standard Marine Compass"
    ],
    photoCount: 3,
    photos: [mc1, mc2, mc3]
  },
  {
    name: "ECDIS",
    description: "Electronic Chart Display & Information Systems provide electronic chart navigation, route planning, monitoring and integration with radar, AIS and GPS sensors.",
    models: [
      "Furuno – FMD-3100, FMD-3200, FMD-3300",
      "JRC – JAN-9201, JAN-7201"
    ],
    photoCount: 4,
    photos: [ec1, ec2, ec3, ec4]
  },
  {
    name: "Marine Radar",
    description: "Marine radar systems detect targets and assist with collision avoidance and navigation in poor visibility.",
    models: [
      "Furuno – FAR-3000 Series, 1835, 1935, 1945",
      "JRC – JMA-5200 Series, JMR-9200 Series",
      "Raymarine – Quantum Radar"
    ],
    photoCount: 5,
    photos: [mr1, mr2, mr3, mr4, mr5]
  },
  {
    name: "AIS",
    description: "Automatic Identification Systems transmit vessel identity, position, speed and navigation status to nearby ships and coastal stations.",
    models: [
      "Furuno – FA-170, FA-150",
      "JRC – JHS-182, JHS-183",
      "SAAB – R5 AIS",
      "Raymarine – AIS700",
      "Jodron"
    ],
    photoCount: 3,
    photos: [ais1, ais2, ais3]
  },
  {
    name: "Autopilot",
    description: "Autopilot systems automatically control vessel steering using heading data from gyro or satellite compass.",
    models: [
      "Furuno – NAVpilot-300, NAVpilot-711C",
      "Raymarine – Evolution Autopilot",
      "Garmin – Reactor Autopilot"
    ],
    photoCount: 4,
    photos: [auto1, auto2, auto3, auto4]
  },
  {
    name: "Speed Log",
    description: "Speed log systems measure vessel speed through water or over ground for voyage monitoring and navigation.",
    models: [
      "Furuno – DS-80, DS-85",
      "JRC – JLN-740",
      "SAL -R1",
      "JMC"
    ],
    photoCount: 4,
    photos: [speed1, speed2, speed3, speed4]
  },
  {
    name: "Echo Sounder",
    description: "Echo sounders measure water depth beneath the vessel for safe navigation in shallow waters.",
    models: [
      "Furuno – FE-800",
      "JRC – JFE-400, JFE-700",
      "Simrad – S3009"
    ],
    photoCount: 3,
    photos: [echo1, echo2, echo3]
  },
  {
    name: "BNWAS",
    description: "Bridge Navigation Watch Alarm System ensures the officer on watch remains alert on the bridge.",
    models: [
      "Furuno – BR-500",
      "JRC – JCY-1700",
      "Raytheon Anschütz – NautoWatch, many others"
    ],
    photoCount: 2,
    photos: [bn1, bn2]
  },
  {
    name: "NAVTEX",
    description: "NAVTEX receivers automatically receive maritime safety information, weather forecasts and navigational warnings.",
    models: [
      "Furuno – NX-700",
      "JRC – NCR-333"
    ],
    photoCount: 3,
    photos: [nav1, nav2, nav3]
  }
];

const automationEquipments = [
  {
    name: "Alarm Monitoring & Control System",
    description: "Alarm monitoring systems supervise all critical shipboard systems including engines, pumps, tanks, and safety equipment.",
    models: [
      "Alarm panels and HMIs",
      "Processor and control cards",
      "I/O and signal conditioning modules",
      "Communication and network interfaces"
    ],
    photoCount: 2,
    photos: [alarmImg, alarmImg3]
  },
  {
    name: "Ballast Water & Cargo Control Systems",
    description: "These systems control ballast water treatment, cargo tank monitoring, and cargo valve operations.",
    models: [
      "Cargo automation controllers",
      "Ballast control system PLCs",
      "Tank level monitoring modules",
      "Valve control interface cards"
    ],
    photoCount: 1,
    photos: [cargoImg]
  },
  {
    name: "Power Management System (PMS)",
    description: "PMS controls generator load sharing, blackout prevention, and automatic generator start/stop operations.",
    models: [
      "PMS controller boards and modules",
      "Generator protection and sync relays",
      "Interface and communication modules",
      "PMS PLC modules and CPU cards"
    ],
    photoCount: 2,
    photos: [pmsImg1, pmsImg2]
  },
  {
    name: "Engine Room Automation & Control Systems",
    description: "Engine room automation systems monitor propulsion engines, auxiliary machinery, and engine room safety systems.",
    models: [
      "Main engine remote control cards",
      "PLC modules (CPU, I/O, Power)",
      "Operator panels and HMI displays",
      "Machinery control interfaces"
    ],
    photoCount: 1,
    photos: [engineImg]
  },
  {
    name: "Tank Level Gauging and VRCS System",
    description: "Tank level systems measure cargo, ballast, and fuel tank levels using radar, pressure, or float sensors.",
    models: [
      "Radar level transmitters",
      "Hydrostatic pressure sensors",
      "Float level transmitters and switches",
      "Signal converters and barrier modules"
    ],
    photoCount: 3,
    photos: [tankImg, tankImg2, tankImg3]
  },
  {
    name: "Fire Detection & Gas Detection Systems",
    description: "Safety systems detect fire, smoke, and hazardous gas levels onboard vessels.",
    models: [
      "Gas and toxic vapor detectors",
      "Flame and optical smoke detectors",
      "Central fire control panels and cards",
      "Intrinsically safe barriers and modules"
    ],
    photoCount: 3,
    photos: [fireImg1, fireImg2, fireImg3]
  },
  {
    name: "Steering Control System",
    description: "Steering control systems manage rudder movement and autopilot functions.",
    models: [
      "Steering control cards and modules",
      "Rudder angle feedback units",
      "Autopilot interface modules",
      "Solenoid valve driver cards"
    ],
    photoCount: 3,
    photos: [stImg, stImg2, stImg3]
  },
  {
    name: "Marine Lighting & Navigation Signal Lights",
    description: "Marine lighting systems include navigation lights, searchlights, and signal lights used for safe vessel operation.",
    models: [
      "Navigation signal lights and panels",
      "Searchlights and halogen/LED fixtures",
      "Explosion-proof light fittings",
      "Emergency lighting controllers"
    ],
    photoCount: 2,
    photos: [marineLightImg1, marineLightImg2]
  },
  {
    name: "CCTV & Thermal Imaging Systems",
    description: "These systems provide monitoring of deck operations, engine rooms, and security areas.",
    models: [
      "Marine-grade PTZ cameras",
      "Thermal imaging and night vision cameras",
      "Digital Video Recorders (DVR/NVR)",
      "Video matrix switchers and network cards"
    ],
    photoCount: 1,
    photos: [cctvImg]
  }
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    if (id && serviceData[id]) {
      setService(serviceData[id]);
    }
  }, [id]);

  if (!service) {
    return <div className="min-h-screen bg-marine-950 pt-32 text-center text-white">Loading or Service not found...</div>;
  }

  return (
    <div className="bg-marine-950 min-h-screen">
      {/* Breadcrumb & Navigation */}
      <div className="border-b border-white/5 bg-marine-800 py-4">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8 flex items-center gap-2 text-sm">
          <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          <span className="text-slate-600">|</span>
          <span className="text-teal-400 font-medium">{service.title}</span>
        </div>
      </div>

      <PageBanner 
        title={service.title}
        subtitle={service.desc}
        bgImage={service.heroImage}
      >
        <Link 
          to="/contact" 
          className="inline-block bg-teal-500 hover:bg-teal-400 text-[#ffffff] px-8 py-3.5 rounded-lg font-medium transition-colors shadow-[0_0_15px_rgba(0,128,128,0.3)] mt-4"
        >
          Inquire Now
        </Link>
      </PageBanner>

     









      {/* Navigation Equipment Showcase Section */}
      {id === 'navigation' && (
        <section className="py-20 bg-marine-950 border-t border-white/5 relative overflow-hidden">
          {/* Subtle glow effects */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">Equipment Catalog</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Explore our comprehensive portfolio of marine navigation systems. We supply, test, install, and support these systems globally with a guarantee of original spares and technical excellence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {navigationEquipments.map((equip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-card equip-catalog-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 text-sm font-bold border border-teal-500/20">
                        {idx + 1}
                      </span>
                      {equip.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {equip.description}
                    </p>

                    <div className="mb-2">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Typical Makes & Models:</h4>
                      <ul className="space-y-2">
                        {equip.models.map((model, mIdx) => (
                          <li key={mIdx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                            <span>{model}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Equipment Photos ({equip.photoCount} slots):</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {Array.from({ length: equip.photoCount }).map((_, pIdx) => {
                        const hasPhoto = 'photos' in equip && equip.photos && equip.photos[pIdx];
                        return hasPhoto ? (
                          <div
                            key={pIdx}
                            className="aspect-[4/3] relative overflow-hidden rounded-xl border border-white/10 hover:border-teal-500/30 transition-all select-none cursor-pointer group animate-fade-in"
                          >
                            <img
                              src={(equip.photos as string[])[pIdx]}
                              alt={`${equip.name} Photo ${pIdx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div
                            key={pIdx}
                            className="aspect-[4/3] bg-marine-900/50 backdrop-blur-sm border border-dashed border-white/10 hover:border-teal-500/30 transition-colors rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 text-slate-500 hover:text-teal-400 select-none cursor-pointer group"
                          >
                            <Image className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                            <span className="text-[10px] font-medium text-slate-600 group-hover:text-teal-500 transition-colors">Slot {pIdx + 1}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}







      {/* Automation Equipment Showcase Section */}
      {id === 'automation' && (
        <section className="py-20 bg-marine-950 border-t border-white/5 relative overflow-hidden">
          {/* Subtle glow effects */}
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
            {/* Overview / Introduction Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-teal-500/20 mb-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Marine Automation & Electrical Spare Parts
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-sm md:text-base leading-relaxed">
                <div>
                  <p className="mb-4">
                    At Alphasense Marine Solutions LLC, we support and supply spare parts for all major marine automation and electrical brands, serving vessels worldwide with reliable products, practical solutions, and fast technical support.
                  </p>
                  <p>
                    We provide spare parts for cargo tank level, pressure and temperature monitoring systems, cargo and ballast valve control systems, engine room controllers, alarm monitoring systems, purifier control systems, switchboards and switchgear components, Power Management Systems (PMS), Integrated Automation Systems (IAS), and all electrical and automation-related spare parts.
                  </p>
                </div>
                <div>
                  <p className="mb-6">
                    When original spare parts are unavailable or have long lead times, our technical team provides equivalent solutions available in the market, ensuring minimal downtime and uninterrupted vessel operations.
                  </p>
                  <div className="p-4 bg-teal-950/40 border border-teal-500/30 rounded-xl">
                    <h4 className="text-teal-400 font-semibold text-sm mb-1">Global Spares & 24/7 Technical Support</h4>
                    <p className="text-xs text-slate-400">
                      Our mission is to support shipowners, ship managers, and shipyards with reliable OEM spare parts or high-quality equivalent alternatives to ensure safe and efficient vessel operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">Automation Equipment Catalog</span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Explore our comprehensive spare parts portfolio for marine automation and control systems. We source, supply, and support these systems globally with a guarantee of original spares and technical excellence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {automationEquipments.map((equip, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="glass-card equip-catalog-card rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 text-sm font-bold border border-teal-500/20">
                        {idx + 1}
                      </span>
                      {equip.name}
                    </h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {equip.description}
                    </p>

                    <div className="mb-2">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Spare Parts & Components:</h4>
                      <ul className="space-y-2">
                        {equip.models.map((model, mIdx) => (
                          <li key={mIdx} className="text-slate-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                            <span>{model}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Equipment Photos ({equip.photoCount} slots):</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {Array.from({ length: equip.photoCount }).map((_, pIdx) => {
                        const hasPhoto = 'photos' in equip && equip.photos && equip.photos[pIdx];
                        return hasPhoto ? (
                          <div
                            key={pIdx}
                            className="aspect-[4/3] relative overflow-hidden rounded-xl border border-white/10 hover:border-teal-500/30 transition-all select-none cursor-pointer group animate-fade-in"
                          >
                            <img
                              src={(equip.photos as string[])[pIdx]}
                              alt={`${equip.name} Photo ${pIdx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <div
                            key={pIdx}
                            className="aspect-[4/3] bg-marine-900/50 backdrop-blur-sm border border-dashed border-white/10 hover:border-teal-500/30 transition-colors rounded-xl flex flex-col items-center justify-center gap-1.5 p-2 text-slate-500 hover:text-teal-400 select-none cursor-pointer group"
                          >
                            <Image className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                            <span className="text-[10px] font-medium text-slate-600 group-hover:text-teal-500 transition-colors">Slot {pIdx + 1}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}



 {/* Features & Brands */}
      <section className="py-20 bg-marine-900 border-t border-white/5">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-4">Equipment & Capabilities</h2>
              <div className="grid sm:grid-cols-1 gap-4">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="glass-card p-4 rounded-xl flex items-center gap-3 feature-card cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-slate-300 text-sm font-medium feature-text transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-teal-500 pl-4">Supported Brands</h2>
              <div className="flex flex-wrap gap-3">
                {service.brands.map((brand: string, idx: number) => (
                  <span key={idx} className={`px-4 py-2 bg-marine-950 border border-white/10 rounded-lg text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:text-teal-400 transition-colors cursor-default brand-box ${idx === 0 ? 'brand-box-first' : ''}`}>
                    {brand}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-marine-950 border border-teal-500/20 rounded-2xl relative overflow-hidden sourcing-box">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-[50px] pointer-events-none" />
                <h3 className="text-xl font-bold text-white mb-3">Looking for a specific part?</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Our extensive global network allows us to source hard-to-find, obsolete, or highly specific marine spares. Provide us with the maker, model, and serial number.
                </p>
                <Link to="/contact" className="text-teal-400 font-semibold hover:text-teal-300 flex items-center gap-2 text-sm group">
                  Contact Sourcing Team <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      <GlobalSupportCTA />
    </div>
  );
};

export default ServiceDetail;
