import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, ChevronDown } from 'lucide-react';
import PageBanner from '../components/Layout/PageBanner';
import { countryCodes } from '../data/countryCodes';
import aboutImg from '../assets/about.jpg';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#enquiry-form') {
      setTimeout(() => {
        const element = document.getElementById('enquiry-form');
        if (element) {
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Inquiry submitted! We will contact you shortly.");
  };

  return (
    <div className="bg-marine-950 min-h-screen">
      
      <PageBanner 
        title={<>Contact <span className="text-teal-400">Us</span></>}
        subtitle="Get in touch with our technical team for global spare parts supply, service inquiries, or emergency engineering assistance."
        bgImage={aboutImg}
      />

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6">Global Headquarters</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Address</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Meydan Grandstand, 6th Floor<br />
                        Meydan Road, Nad Al Sheba<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Phone (24/7 Support)</h4>
                      <a href="tel:+971557310414" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">(+971) 55 731 0414</a>
                      <a href="tel:+971557402411" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors mt-1">(+971) 55 740 2411</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:admin@alphasense.in" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors">admin@alphasense.in</a>
                      <a href="mailto:sales@alphasense.in" className="block text-slate-400 text-sm hover:text-teal-400 transition-colors mt-1">sales@alphasense.in</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-white/10 pt-6">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Emergency Inquiries</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        For critical vessel downtime, please call our 24/7 hotline directly or use WhatsApp for immediate response.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://wa.me/971557310414"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-marine-800 hover:bg-marine-700 border border-teal-500/30 p-6 rounded-2xl flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp Chat</h4>
                    <p className="text-xs text-slate-400">Typical reply in minutes</p>
                  </div>
                </div>
                <Send className="w-5 h-5 text-teal-400 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

            {/* Form */}
            <motion.div
              id="enquiry-form"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 md:p-10 rounded-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
                <p className="text-slate-400 text-sm mb-8">Please provide your requirements, including maker, model, and part numbers if available.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Full Name / Company</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-marine-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-marine-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                    <div className="flex gap-3 md:gap-4">
                      <div className="relative shrink-0">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-[110px] md:w-[130px] appearance-none bg-marine-950 border border-white/10 rounded-lg pl-3 md:pl-4 pr-10 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors cursor-pointer"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.country + c.code} value={c.code}>
                              {c.code} ({c.country})
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Number"
                        className="w-full bg-marine-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Message & Requirements</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-marine-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full -[#ffffff] px-8 py-4 rounded-lg font-semibold transition-all shadow-[0_0_15px_rgba(0,128,128,0.3)] hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] flex items-center justify-center gap-2"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Display */}
      <section className="h-[400px] w-full bg-marine-900 border-t border-white/5 relative">
        <iframe
          src="https://maps.google.com/maps?q=25.1568958,55.3005168&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Interactive Map"
          className="absolute inset-0"
        />
      </section>

    </div>
  );
};

export default Contact;
