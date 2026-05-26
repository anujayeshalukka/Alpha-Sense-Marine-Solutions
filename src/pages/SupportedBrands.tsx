import { useState } from 'react';
import { motion } from 'framer-motion';
import GlobalSupportCTA from '../components/Home/GlobalSupportCTA';
import PageBanner from '../components/Layout/PageBanner';
import aboutImg from '../assets/about.jpg';

const SupportedBrands = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Navigation', 'Automation', 'Communication', 'Electrical'];

  const brands = [
    { name: "ABB", category: "Automation", logo: "ABB" },
    { name: "Kongsberg Maritime", category: "Automation", logo: "KONGSBERG" },
    { name: "Wärtsilä", category: "Automation", logo: "WÄRTSILÄ" },
    { name: "Furuno", category: "Navigation", logo: "FURUNO" },
    { name: "JRC", category: "Navigation", logo: "JRC" },
    { name: "Garmin", category: "Navigation", logo: "GARMIN" },
    { name: "Raymarine", category: "Navigation", logo: "Raymarine" },
    { name: "Schneider Electric", category: "Electrical", logo: "Schneider" },
    { name: "Siemens", category: "Automation", logo: "SIEMENS" },
    { name: "Emerson", category: "Automation", logo: "EMERSON" },
    { name: "Simrad", category: "Navigation", logo: "SIMRAD" },
    { name: "SAAB", category: "Navigation", logo: "SAAB" },
    { name: "SAM Electronics", category: "Navigation", logo: "SAM" },
    { name: "Anschütz", category: "Navigation", logo: "Anschütz" },
    { name: "Rexroth", category: "Automation", logo: "Rexroth" },
    { name: "Danfoss", category: "Electrical", logo: "Danfoss" },
    { name: "Sailor", category: "Communication", logo: "SAILOR" },
    { name: "Jotron", category: "Communication", logo: "JOTRON" },
    { name: "Cobham", category: "Communication", logo: "COBHAM" },
    { name: "Intellian", category: "Communication", logo: "Intellian" },
  ];

  const filteredBrands = filter === 'All' ? brands : brands.filter(b => b.category === filter);

  return (
    <div className="bg-marine-950 min-h-screen">
      
      <PageBanner 
        title={<>Supported <span className="text-teal-400">Brands</span></>}
        subtitle="We supply OEM and equivalent replacement spares from the world's leading marine equipment manufacturers."
        bgImage={aboutImg}
      />

      {/* Brands Grid */}
      <section className="py-24">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-[#0B9193] text-white shadow-[0_0_15px_rgba(0,128,128,0.4)]' 
                    : 'bg-marine-900 text-slate-400 hover:text-white border border-white/10 hover:border-teal-500/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {filteredBrands.map((brand) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={brand.name}
                className="glass-card p-8 rounded-xl flex flex-col items-center justify-center aspect-[4/3] group"
              >
                {/* Brand Logo Placeholder */}
                <div className="text-2xl font-bold text-slate-300 group-hover:text-white transition-colors tracking-tight text-center mb-4 filter grayscale group-hover:grayscale-0">
                  {brand.logo}
                </div>
                <div className="text-xs text-[#94a3b8] group-hover:text-[#0B9193] font-medium uppercase tracking-widest text-center transition-all">
                  {brand.category}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <GlobalSupportCTA />
    </div>
  );
};

export default SupportedBrands;
