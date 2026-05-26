import { motion } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cargoShipImage from '../../assets/cargoship.jpg';
import contractImage from '../../assets/contract.jpg';
import commercialImage from '../../assets/commercial.jpg';
import offshoreImage from '../../assets/offshore.jpg';
import tankersImage from '../../assets/tankers.jpg';
import cargoImage from '../../assets/cargo.jpg';
import vesselsImage from '../../assets/vessels.jpg';
import yachtImage from '../../assets/yatch.avif';

const IndustriesWeSupport = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  
  const animationFrameRef = useRef<number>(0);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const industries = [
    { name: 'Commercial Vessels', img: commercialImage },
    { name: 'Offshore Installations', img: offshoreImage },
    { name: 'Tankers', img: tankersImage },
    { name: 'Cargo Ships', img: cargoImage },
    { name: 'Fishing Vessels', img: vesselsImage },
    { name: 'Yachts', img: yachtImage },
    { name: 'Shipyards', img: cargoShipImage },
    { name: 'Marine Contractors', img: contractImage }
  ];

  // Duplicate items for seamless infinite scrolling
  const displayIndustries = [...industries, ...industries];

  const animate = useCallback(() => {
    if (scrollRef.current && isAutoScrolling && !isHovered) {
      scrollRef.current.scrollLeft += 1; // Smooth pixel-by-pixel scrolling
      
      const { scrollLeft, scrollWidth } = scrollRef.current;
      // If we've scrolled past the first set of items, reset seamlessly
      if (scrollLeft >= scrollWidth / 2) {
        scrollRef.current.scrollLeft -= scrollWidth / 2;
      }
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isAutoScrolling, isHovered]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [animate]);

  const scroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false); // Pause auto-scrolling
    
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      
      let targetLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      // Handle edge cases to maintain infinite illusion during manual scrolling
      if (direction === 'left' && targetLeft < 0) {
        scrollRef.current.scrollLeft += scrollWidth / 2;
        targetLeft += scrollWidth / 2;
      }

      scrollRef.current.scrollTo({
        left: targetLeft,
        behavior: 'smooth'
      });
      
      // Resume auto-scrolling shortly after navigation
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1500); 
    }
  };

  return (
    <section className="py-24 bg-marine-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Industries We Support</h2>
            <div className="w-20 h-1 bg-teal-500 rounded-full" />
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-marine-800 border border-white/10 hover:bg-teal-500 hover:border-teal-400 transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-marine-800 border border-white/10 hover:bg-teal-500 hover:border-teal-400 transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Track */}
        <div 
          className="relative -mx-6 lg:-mx-8 px-6 lg:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef}
            // Removed snap-x and snap-mandatory so continuous smooth scrolling works perfectly
            className="flex gap-6 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {displayIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[220px] md:w-[350px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${ind.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1528] via-[#0b1528]/40 to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                  <div className="w-10 md:w-12 h-1 bg-teal-500 mb-3 md:mb-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                  <h3 className="text-base md:text-xl font-bold text-[#ffffff] tracking-wide">{ind.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeSupport;
