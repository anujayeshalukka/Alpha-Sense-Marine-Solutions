import { motion } from 'framer-motion';
import { Clock, Award, Anchor, Users } from 'lucide-react';

const StatsHighlights = () => {
  const stats = [
    { value: '35+', label: 'Years of Experience', icon: Clock },
    { value: '20+', label: 'World Leading Brand', icon: Award },
    { value: '70+', label: 'Ports World-Wide', icon: Anchor },
    { value: '90+', label: 'Global Clients', icon: Users }
  ];

  return (
    <section className="py-16 bg-[#0b1528] border-t border-b border-[#ffffff]/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#112140]/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[#0B9193]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 lg:divide-x divide-[#ffffff]/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1a3059]/50 border border-[#ffffff]/5 flex items-center justify-center mb-6 text-[#0B9193] group-hover:scale-110 group-hover:bg-[#0B9193]/20 group-hover:text-[#18b3b5] group-hover:border-[#0B9193]/30 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-5xl font-bold text-[#ffffff] mb-3 font-sans tracking-tight text-glow group-hover:text-[#18b3b5] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[#94a3b8] font-medium text-sm uppercase tracking-widest group-hover:text-[#e2e8f0] transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsHighlights;
