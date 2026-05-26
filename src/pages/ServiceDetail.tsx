import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import GlobalSupportCTA from '../components/Home/GlobalSupportCTA';
import PageBanner from '../components/Layout/PageBanner';
import marineImg from '../assets/marine.jpg';
import commImg from '../assets/communication.jpg';
import safetyImg from '../assets/safety.jpg';
import mechImg from '../assets/mechanical.jpg';

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
    brands: ["ABB", "Siemens", "Wärtsilä", "Schneider Electric", "Emerson", "Kongsberg"]
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
