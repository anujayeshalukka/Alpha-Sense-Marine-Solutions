import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Zap, Target, Search, Anchor } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: Globe, title: "Global Spare Supply", desc: "Access to an international network of marine spares and equipment." },
    { icon: Clock, title: "Rapid Technical Response", desc: "24/7 immediate assistance for critical vessel requirements." },
    { icon: Zap, title: "Equivalent Solutions", desc: "High-quality aftermarket alternatives to reduce costs without compromising safety." },
    { icon: ShieldCheck, title: "OEM Support", desc: "Genuine parts directly from manufacturers." },
    { icon: Target, title: "Reduced Vessel Downtime", desc: "Efficient logistics ensuring parts arrive precisely when needed." },
    { icon: Search, title: "Hard-to-Find Spares", desc: "Specialized sourcing for obsolete or rare marine components." }
  ];

  // Need to import Globe since it wasn't in the destructure
  return (
    <section className="py-24 bg-marine-950 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-marine-900 rounded-l-[100px] opacity-50" />
      
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4">Our Advantage</h4>
            <h2 className="text-2xl lg:text-5xl font-bold text-white mb-6">Why Marine Operators Trust Alpha Sense</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon || Anchor;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Assuming Globe was missed in imports, defining a quick workaround or just fixing the import string
import { Globe } from 'lucide-react';

export default WhyChooseUs;
