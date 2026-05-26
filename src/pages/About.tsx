
import { motion } from 'framer-motion';
import { Target, Compass, Anchor, ShieldCheck, Globe, Clock } from 'lucide-react';
import GlobalSupportCTA from '../components/Home/GlobalSupportCTA';
import PageBanner from '../components/Layout/PageBanner';
import marineTeamImg from '../assets/marine_engineering_team.png';
import aboutImg from '../assets/about.jpg';
import StatsHighlights from '../components/Home/StatsHighlights';

const About = () => {
  return (
    <div className="bg-marine-950 min-h-screen">
      
      <PageBanner 
        title={<>Our <span className="text-teal-400">Company Profile</span></>}
        subtitle="Alpha Sense Marine Solutions LLC is a premier technical spare parts provider and engineering support company based in Dubai, serving the global maritime industry."
        bgImage={aboutImg}
      />

     

      {/* Image & Core Values */}
      <section className="py-24 bg-marine-900 border-y border-white/5">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4">Core Values</h3>
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8">Engineering Excellence</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Quality Assurance</h4>
                    <p className="text-slate-400 text-sm">Every spare part and system we supply is rigorously vetted for quality, whether OEM or equivalent, ensuring absolute reliability at sea.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Anchor className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Marine Expertise</h4>
                    <p className="text-slate-400 text-sm">Founded by marine engineers, our team understands the critical nature of vessel operations and technical troubleshooting.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Global Reach</h4>
                    <p className="text-slate-400 text-sm">With a vast logistics network, we deliver critical marine spares and technical support to vessels worldwide, anywhere, anytime.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">24/7 Rapid Response</h4>
                    <p className="text-slate-400 text-sm">Maritime operations never sleep, and neither do we. Our technical support team is available around the clock to assist with urgent requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src={marineTeamImg} 
                alt="Marine Engineering Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


 {/* Vision & Mission */}
      <section className="py-24 relative">
        <div className="max-w-[1536px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 rounded-2xl relative overflow-hidden"
            >
              <Target className="w-12 h-12 text-teal-400 mb-6 relative z-10" />
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Our Mission</h2>
              <p className="text-slate-300 relative z-10 leading-relaxed">
                To provide unparalleled technical solutions, rapid spare parts sourcing, and expert marine engineering support, ensuring our clients' vessels operate with maximum efficiency and minimum downtime.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 rounded-2xl relative overflow-hidden"
            >
              <Compass className="w-12 h-12 text-teal-400 mb-6 relative z-10" />
              <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Our Vision</h2>
              <p className="text-slate-300 relative z-10 leading-relaxed">
                To be the most trusted and technically proficient marine partner globally, recognized for our commitment to quality, responsiveness, and deep engineering expertise.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>


<StatsHighlights />
      {/* Global Support CTA reusing the component from Home */}
      <GlobalSupportCTA />

    </div>
  );
};

export default About;
