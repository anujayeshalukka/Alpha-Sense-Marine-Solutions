
const BrandsScroll = () => {
  const brands = [
    "ABB", "Kongsberg Maritime", "Wärtsilä", "Furuno", "JRC", 
    "Garmin", "Raymarine", "Schneider Electric", "Siemens", 
    "Emerson", "Simrad", "SAAB", "SAM Electronics", "Anschütz", 
    "Rexroth", "MAN B&W", "Sulzer"
  ];

  // Duplicate for seamless scroll
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="md:py-16 py-10 bg-[#ffffff] relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 text-center md:mb-10 mb-4">
        <h4 className="text-slate-700 font-semibold tracking-wider uppercase text-xs">Supported Manufacturers & Brands</h4>
      </div>

      <div className="flex w-fit animate-scroll hover:[animation-play-state:paused]">
        {scrollBrands.map((brand, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center w-max px-6 md:px-8 h-10 md:h-24 mx-2 filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            {/* In a real project, replace these with actual brand logo SVGs/PNGs */}
            <span className="text-lg md:text-2xl font-bold text-slate-800 tracking-tight">{brand}</span>
          </div>
        ))}
      </div>
      
      {/* Add custom CSS for scrolling animation if not using Tailwind arbitrary variants or standard config */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />
    </section>
  );
};

export default BrandsScroll;
