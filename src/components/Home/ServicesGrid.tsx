import { motion } from 'framer-motion';
import { Compass, Radio, Cpu, Zap, Map, LifeBuoy, Anchor, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import radarImage from '../../assets/Radar.png';
import communicationImage from '../../assets/communication.png';
import lsaffaImage from '../../assets/LSAFFA.webp';
import hydraulicImage from '../../assets/Hydraulic.jpg';

const ServicesGrid = () => {
  const services = [
    {
      title: "Navigation Systems",
      desc: "Radar, ECDIS, Gyro Compass, and DGPS systems.",
      icon: Compass,
      path: "/services/navigation",
      image: radarImage
    },
    {
      title: "Communication Systems",
      desc: "GMDSS, VDR, VSAT, and onboard network solutions.",
      icon: Radio,
      path: "/services/communication",
      image: communicationImage
    },
    {
      title: "Marine Automation",
      desc: "Alarm monitoring, PMS, and steering control systems.",
      icon: Cpu,
      path: "/services/automation",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80"
    },
    {
      title: "Electrical & Electronic",
      desc: "Sensors, switchgears, and power management units.",
      icon: Zap,
      path: "/services/electrical",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80"
    },
    {
      title: "Nautical Charts & Pubs",
      desc: "Digital and paper navigation publications.",
      icon: Map,
      path: "/services/navigation",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
    },
    {
      title: "LSA & Safety Equipment",
      desc: "Life-saving appliances and fire-fighting equipment.",
      icon: LifeBuoy,
      path: "/services/safety",
      image: lsaffaImage
    },
    {
      title: "Yachting & Fishing",
      desc: "Specialized equipment for leisure and fishing vessels.",
      icon: Anchor,
      path: "/services",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80"
    },
    {
      title: "Hydraulic & Mechanical",
      desc: "Pumps, valves, winches, and heavy machinery spares.",
      icon: Settings,
      path: "/services/hydraulic",
      image: hydraulicImage
    }
  ];

  return (
    <section className="py-24 bg-marine-900 relative">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4">Core Competencies</h4>
            <h2 className="text-2xl lg:text-5xl font-bold text-white mb-6">Complete Marine Solutions</h2>
            <p className="text-slate-400 text-lg">
              Delivering high-quality marine equipment and replacement spares tailored to the demanding standards of the global maritime industry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-56 sm:h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-[#0b1528]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0B9193]/50 rounded-2xl transition-colors duration-300 z-20" />

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end z-30">
                  <div className="bg-[#ffffff]/10 group-hover:bg-[#ffffff]/90 backdrop-blur-md w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 transform group-hover:-translate-y-2 transition-all duration-300">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#18b3b5]" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-[#ffffff] mb-1 md:mb-2 transform group-hover:-translate-y-2 transition-transform duration-300">{service.title}</h3>
                  <p className="text-[#cbd5e1] text-xs md:text-sm mb-2 md:mb-4 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto group-hover:-translate-y-2 transition-all duration-300">
                    {service.desc}
                  </p>
                  
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-teal-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
