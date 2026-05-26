import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavigationShowcase = () => {
  const items = [
    { name: "Radar / ARPA", desc: "Advanced radar systems for maritime safety." },
    { name: "ECDIS", desc: "Electronic Chart Display and Information System." },
    { name: "Gyro Compass", desc: "High-precision heading reference." },
    { name: "Autopilot", desc: "Reliable automated steering control." },
    { name: "GPS / DGPS", desc: "Global positioning systems for vessels." },
    { name: "AIS", desc: "Automatic Identification System." },
    { name: "Speed Log", desc: "Accurate speed and distance measurement." },
    { name: "Echo Sounder", desc: "Depth measurement systems." }
  ];

  return (
    <section className="py-24 bg-marine-950 relative border-t border-white/5">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h4 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4">Product Showcase</h4>
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Marine Navigation Equipment</h2>
            <p className="text-slate-400">
              Supply and support for critical bridge navigation systems ensuring compliance and safe vessel operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-right">
              <span className="block text-sm text-slate-500 uppercase tracking-widest mb-1">Brands</span>
              <span className="text-slate-300 font-medium text-sm">Furuno • JRC • Sperry • Raytheon</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to="/services/navigation"
                className={`glass-card p-6 rounded-xl group relative overflow-hidden block h-full nav-showcase-card ${index === 0 ? 'nav-showcase-first' : ''}`}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 nav-showcase-bg" />

                <h3 className="text-lg font-semibold text-white mb-2 relative z-10 nav-showcase-title">{item.name}</h3>
                <p className="text-slate-400 text-xs relative z-10 nav-showcase-desc">{item.desc}</p>

                <div className="mt-4 flex items-center text-teal-400 text-xs font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 nav-showcase-view">
                  View Specifications
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NavigationShowcase;
