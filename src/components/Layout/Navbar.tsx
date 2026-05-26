import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logow.png';
import logoLight from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Products & Services', 
      path: '/services',
      hasDropdown: true
    },
    { name: 'Supported Brands', path: '/brands' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesDropdown = [
    { name: 'Navigation Equipment', path: '/services/navigation' },
    { name: 'Automation Systems', path: '/services/automation' },
    { name: 'Communication Systems', path: '/services/communication' },
    { name: 'Electrical & Electronic', path: '/services/electrical' },
    { name: 'Safety Equipment', path: '/services/safety' },
    { name: 'Hydraulic & Mechanical', path: '/services/hydraulic' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] flex flex-col">
      {/* Top Bar */}
      <div className={`bg-[#D85F26] text-[#ffffff] w-full flex justify-center sm:justify-between items-center px-6 lg:px-8 text-xs font-medium transition-all duration-300 overflow-hidden ${
        isScrolled ? 'h-0 opacity-0' : 'h-[35px] opacity-100'
      }`}>
        <div className="hidden sm:block">
          Welcome to Alpha Sense Marine Solutions
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="tel:+971557310414" className="flex items-center gap-2 hover:text-[#ffffff]/80 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>(+971) 55 731 0414</span>
          </a>
          <a href="mailto:admin@alphasense.in" className="flex items-center gap-2 hover:text-[#ffffff]/80 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>admin@alphasense.in</span>
          </a>
        </div>
      </div>

      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled ? 'bg-marine-950/95 backdrop-blur-md shadow-lg' : 'bg-marine-950/90 backdrop-blur-sm shadow-md'
        }`}
      >
      <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={isLightMode ? logoLight : logo} 
              alt="Alpha Sense Marine Solutions" 
              className="h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services'))
                      ? 'text-teal-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown for Services */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 w-64">
                    <div className="bg-marine-900 border border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-lg">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-6 py-3 text-sm text-slate-300 hover:text-teal-400 hover:bg-white/5 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact#enquiry-form"
              className="bg-[#0B9193] text-[#ffffff] hover:bg-[#097577] px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-[0_0_15px_rgba(0,128,128,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)]"
            >
              Request a Quote
            </Link>
            
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="p-2 rounded-full text-slate-300 hover:text-teal-400 bg-white/5 hover:bg-white/10 transition-colors ml-2"
              aria-label="Toggle theme"
            >
              {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className="p-2 rounded-full text-slate-300 hover:text-white"
            >
              {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              className="text-slate-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-marine-900 border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="block text-base font-medium text-slate-300 hover:text-white py-2"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4 border-l border-white/10 ml-2 mt-2 space-y-2">
                      {servicesDropdown.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block text-sm text-slate-400 hover:text-teal-400 py-1"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact#enquiry-form"
                className="block w-full text-center bg-[#0B9193] text-[#ffffff] hover:bg-[#097577] px-6 py-3 rounded-lg text-sm font-medium mt-4"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
