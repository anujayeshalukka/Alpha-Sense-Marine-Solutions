import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Shield, Settings2 } from 'lucide-react';

const AutomationSystems = () => {
  return (
    <section className="py-24 bg-[#050B14] relative overflow-hidden border-t border-teal-500/10">
      {/* Background glowing lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
      </div>

      <div className="max-w-[1536px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase">Advanced Diagnostics</span>
            </div>
            
            <h2 className="text-2xl lg:text-5xl font-bold text-[#ffffff] mb-6">
              Marine Automation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                & Control Systems
              </span>
            </h2>
            
            <p className="text-[#ffffff] text-lg mb-8 leading-relaxed">
              We supply critical automation spares and provide technical repair services for Alarm Monitoring, Power Management, and Integrated Automation Systems (IAS) to prevent operational failures.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {['Alarm Monitoring (AMS)', 'Power Management (PMS)', 'Tank Level Gauging', 'Fire Detection Systems'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 border border-white/5 bg-white/5 rounded-lg p-3">
                  <Settings2 className="w-4 h-4 text-teal-800" />
                  <span className="text-[#cbd5e1] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-500 mb-3 uppercase tracking-wider">Supported Platforms</p>
              <div className="flex flex-wrap gap-3">
                {['ABB', 'Siemens', 'Wärtsilä', 'Kongsberg', 'Schneider Electric', 'Emerson'].map((brand, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-marine-900 border border-white/10 text-slate-400 text-xs font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {/* Dashboard Mockup Layout */}
            <div className="absolute inset-0 bg-marine-900 border border-teal-500/20 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,128,128,0.15)]">
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-marine-950 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-teal-500 text-xs font-mono">SYS_OK // ALPHASENSE_01</div>
              </div>
              
              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-4 h-[calc(100%-3rem)]">
                {/* Main Graph Panel */}
                <div className="col-span-2 border border-white/5 bg-marine-950 rounded-lg p-4 flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="text-xs text-slate-400 font-mono">MAIN ENGINE TEMP</span>
                    <span className="text-xs text-teal-400 font-mono">NORMAL</span>
                  </div>
                  {/* Fake graph lines */}
                  <div className="mt-auto h-24 flex items-end gap-1 relative z-10">
                    {[40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 90, 100, 95, 80, 85, 70, 75, 60].map((h, i) => (
                      <div key={i} className="flex-1 bg-teal-500/20 rounded-t-sm" style={{ height: `${h}%` }}>
                        <div className="w-full h-1 bg-teal-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Panels */}
                <div className="border border-white/5 bg-marine-950 rounded-lg p-4 flex flex-col justify-between">
                  <Activity className="w-6 h-6 text-orange-500 mb-2" />
                  <span className="text-[10px] text-slate-500 font-mono">POWER MGT</span>
                  <div className="text-xl font-mono text-white mt-1">450<span className="text-sm text-slate-400"> kW</span></div>
                </div>
                
                <div className="border border-white/5 bg-marine-950 rounded-lg p-4 flex flex-col justify-between">
                  <AlertTriangle className="w-6 h-6 text-red-500/50 mb-2" />
                  <span className="text-[10px] text-slate-500 font-mono">ACTIVE ALARMS</span>
                  <div className="text-xl font-mono text-white mt-1">0<span className="text-sm text-slate-400"> SYS</span></div>
                </div>

                <div className="col-span-2 border border-white/5 bg-marine-950 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-green-500" />
                    <div>
                      <div className="text-sm text-white font-mono">SYSTEM SECURE</div>
                      <div className="text-[10px] text-slate-500 font-mono">LAST SCAN: 2 SEC AGO</div>
                    </div>
                  </div>
                  <div className="w-16 h-8 rounded-full border border-teal-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AutomationSystems;
