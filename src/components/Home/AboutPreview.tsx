import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import vesselImage from '../../assets/vessel.png';

const AboutPreview = () => {
  const features = [
    "Global sourcing capability",
    "Critical and hard-to-find spare supply",
    "OEM and equivalent replacement solutions",
    "Technical expertise & repair support",
    "Reduced vessel downtime",
    "Support for shipowners and shipyards"
  ];

  return (
    <section className="py-24 bg-marine-950 relative">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Collage */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20"
            >
              <img 
                src={vesselImage} 
                alt="Offshore engineering vessel" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-transparent to-transparent opacity-80" />
            </motion.div>
            
            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-[#112140]/80 backdrop-blur-md border border-[#ffffff]/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-6 rounded-xl w-64 hidden md:block z-20"
            >
              <div className="text-4xl font-bold text-[#18b3b5] mb-2">15+</div>
              <div className="text-[#ffffff] font-medium text-sm">Years of Marine Excellence</div>
              <div className="mt-3 w-full h-1 bg-[#ffffff]/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#0B9193] w-3/4 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4">About Alpha Sense</h4>
            <h2 className="text-2xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Engineering Reliability for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">Modern Marine Operations</span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Alpha Sense Marine Solutions LLC specializes in marine automation systems, navigation equipment, electrical and electronic systems, hydraulic and mechanical spare parts, and technical support for vessels and offshore installations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 btn-about border border-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors group"
            >
              Discover Our Capabilities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
