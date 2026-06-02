import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import logo from '../../assets/logow.png';

const Footer = () => {
  return (
    <footer className="bg-[#0b1528] border-t border-[#ffffff]/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#134e4a]/20 to-transparent pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6 group">
              <img 
                src={logo} 
                alt="Alpha Sense Marine Solutions" 
                className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-105" 
              />
            </Link>
            <p className="text-[#94a3b8] text-sm mb-6 leading-relaxed">
              Global marine engineering and technical spare parts solutions serving vessels, offshore installations, shipowners, and marine procurement teams worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-[#94a3b8] hover:text-[#ffffff] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-[#94a3b8] hover:text-[#ffffff] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#ffffff]/5 flex items-center justify-center text-[#94a3b8] hover:text-[#ffffff] transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Products & Services</Link></li>
              <li><Link to="/brands" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Supported Brands</Link></li>
              <li><Link to="/contact" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Core Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/navigation" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Navigation Equipment</Link></li>
              <li><Link to="/services/automation" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Marine Automation</Link></li>
              <li><Link to="/services/communication" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Communication Systems</Link></li>
              <li><Link to="/services/electrical" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Electrical Systems</Link></li>
              <li><Link to="/services/safety" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">Safety Equipment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#ffffff] font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#18b3b5] shrink-0 mt-0.5" />
                <span className="text-[#94a3b8] text-sm">Meydan Grandstand, 6th Floor<br />Meydan Road, Nad Al Sheba<br />Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#18b3b5] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+971557310414" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">(+971) 55 731 0414</a>
                  <a href="tel:+971557402411" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">(+971) 55 740 2411</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#18b3b5] shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:admin@alphasense.in" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">admin@alphasense.in</a>
                  <a href="mailto:sales@alphasense.in" className="text-[#94a3b8] hover:text-[#18b3b5] text-sm transition-colors">sales@alphasense.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#ffffff]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-sm">
            &copy; {new Date().getFullYear()} Alpha Sense Marine Solutions LLC. All rights reserved.
          </p>
          {/* Floating WhatsApp Button (Visual representation here, actual floating button in PageLayout) */}
          <a
            href="https://wa.me/971562569801"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#18b3b5] hover:text-[#5eead4] text-sm font-medium transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            24/7 Support via WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
