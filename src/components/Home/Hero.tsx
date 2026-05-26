import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Globe, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import testimonialVideo from '../../assets/testimonial.mp4';
import testimonialPoster from '../../assets/testimonial_poster.jpg';


const Hero = () => {
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 1000], ['0%', '25%']);
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 bg-marine-950 z-0" />
      <motion.video
        className="absolute z-0 w-full h-[125%] -top-[12.5%] left-0 object-cover hero-image"
        style={{ y: videoY }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={testimonialPoster}
        src={testimonialVideo}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-[#0b1528]/60 to-transparent opacity-90 z-0 hero-overlay-top" />
      <div className="absolute inset-0 bg-gradient-to-l from-marine-950 via-marine-900/60 to-transparent z-0 hero-overlay-left" />

      {/* Animated Technical Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-0" />

      {/* Radar Sweep Effect (CSS overlay) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="badge-alpha inline-block border border-teal-500/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
              <span className="text-teal-400 text-sm font-medium tracking-wide uppercase">
                Alpha Sense Marine Solutions LLC
              </span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Reliable Marine Spares &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                 Technical Solutions
              </span> Worldwide
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Supporting vessels and offshore operations with marine navigation systems, automation spare parts, communication equipment, electrical systems, and 24/7 global technical support.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact#enquiry-form"
                className="bg-[#0B9193] text-[#ffffff] hover:bg-[#097577] px-8 py-4 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(0,128,128,0.4)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] flex items-center gap-2 group"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="btn-explore backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stat Cards */}
        <div className="lg:col-span-4 relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-panel rounded-xl p-6 transform translate-x-8">
              <ShieldCheck className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">OEM & Equivalent Solutions</h3>
              <p className="text-slate-400 text-sm">High-quality spare parts ensuring zero vessel downtime.</p>
            </div>

            <div className="glass-panel rounded-xl p-6 transform -translate-x-4">
              <Globe className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">Global Supply Network</h3>
              <p className="text-slate-400 text-sm">Rapid dispatch to major ports and shipyards worldwide.</p>
            </div>

            <div className="glass-panel rounded-xl p-6 transform translate-x-4">
              <Wrench className="w-10 h-10 text-teal-400 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Technical Support</h3>
              <p className="text-slate-400 text-sm">Expert engineering assistance for critical requirements.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
