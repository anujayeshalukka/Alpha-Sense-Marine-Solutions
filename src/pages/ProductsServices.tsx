
import { motion } from 'framer-motion';
import { Compass, Radio, Cpu, Zap, LifeBuoy, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import aboutImg from '../assets/about.jpg';

const ProductsServices = () => {
  const categories = [
    {
      id: 'navigation',
      title: "Marine Navigation Equipment",
      icon: Compass,
      desc: "Comprehensive navigation solutions including Radar, ECDIS, Gyro Compass, Autopilot, and GPS systems.",
      items: ["Radar / ARPA", "ECDIS", "Gyro Compass", "Autopilot", "Speed Log", "Echo Sounder"]
    },
    {
      id: 'automation',
      title: "Marine Automation Systems",
      icon: Cpu,
      desc: "Advanced control systems, alarm monitoring, and power management solutions for modern vessels.",
      items: ["Alarm Monitoring (AMS)", "Power Management (PMS)", "Tank Level Gauging", "Fire Detection"]
    },
    {
      id: 'communication',
      title: "Communication Systems",
      icon: Radio,
      desc: "Reliable GMDSS, satellite communication, and internal vessel networking equipment.",
      items: ["GMDSS", "VDR / S-VDR", "VSAT", "Inmarsat C", "UHF / VHF Radios"]
    },
    {
      id: 'electrical',
      title: "Electrical & Electronic",
      icon: Zap,
      desc: "Power distribution, sensors, and electronic components for harsh marine environments.",
      items: ["Switchgears", "Sensors & Transmitters", "Power Supplies", "Cables & Accessories"]
    },
    {
      id: 'safety',
      title: "Safety Equipment (LSA)",
      icon: LifeBuoy,
      desc: "Life-saving appliances and critical safety gear compliant with international maritime regulations.",
      items: ["Life Rafts", "Life Jackets", "EEBD", "Pyrotechnics", "Gas Detectors"]
    },
    {
      id: 'hydraulic',
      title: "Hydraulic & Mechanical",
      icon: Settings,
      desc: "Heavy machinery spares, pumps, valves, and hydraulic system components.",
      items: ["Hydraulic Pumps", "Valves", "Winches", "Cranes", "Compressors"]
    }
  ];

  return (
    <div className="bg-marine-950 min-h-screen">
      <PageBanner 
        title={<>Products <span className="text-teal-400">&</span> Services</>}
        subtitle="Alpha Sense provides a complete portfolio of marine equipment, spare parts, and technical services tailored for global maritime operations."
        bgImage={aboutImg}
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-2xl group flex flex-col h-full hover:border-teal-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-teal-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                    {cat.desc}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-teal-500 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/services/${cat.id}`}
                    className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300 transition-colors mt-auto group/link"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;
