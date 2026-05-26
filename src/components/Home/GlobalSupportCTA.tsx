import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, PhoneCall, Mail } from 'lucide-react';

const GlobalSupportCTA = () => {
  return (
    <section className="py-24 relative bg-marine-950 overflow-hidden">
      {/* Map Background */}
      <div 
        className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-marine-950 via-marine-950/80 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-teal-500/20">
            <Map className="w-10 h-10 text-teal-400" />
          </div>
          
          <h2 className="text-2xl lg:text-6xl font-bold text-white mb-6">
            Keeping Marine Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Running Worldwide
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            24/7 technical assistance, rapid spare sourcing, and reliable marine engineering support for vessels across global waters.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact#enquiry-form" 
              className="bg-[#0B9193] text-[#ffffff] px-8 py-4 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(0,128,128,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] flex items-center justify-center gap-3 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Send Enquiry
            </Link>
            <a 
              href="tel:+971557310414"
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-3 group"
            >
              <PhoneCall className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform" />
              Contact Technical Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalSupportCTA;
