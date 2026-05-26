import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import shipImage from '../../assets/ship.jpg';

const QuoteBlock = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${shipImage})` }}
      />
      
      {/* Theme-aware Overlay to ensure text contrast */}
      <div className="absolute inset-0 bg-marine-900/90 z-0" />

      {/* Wave pattern subtle background */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-screen pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #00b4d8 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Quote className="w-16 h-16 text-teal-500/20 mx-auto mb-8 transform rotate-180" />
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-12">
            "Precision, reliability, and <span className="font-semibold text-teal-400">rapid response</span> are essential in modern marine operations."
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-12" />

          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto italic">
            "Keeping vessels operational with dependable marine automation and navigation support worldwide."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteBlock;
