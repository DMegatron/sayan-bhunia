import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-slate-200 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-800 dark:text-emerald-400"
        >
          MISSION_BRIEFING
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-stretch gap-12">
          
          {/* Text Content - Briefing Style */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 glass-panel p-6 md:p-8 rounded-sm hud-border relative"
          >
            {/* Decorative Header */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <h3 className="text-xl font-mono font-bold text-slate-700 dark:text-emerald-500 mb-6 border-b border-slate-200 dark:border-emerald-900/30 pb-2">
              &gt; OPERATIONAL_PROFILE
            </h3>

            <div className="font-sans text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed space-y-6">
              <p>
                As a <span className="font-bold text-emerald-600 dark:text-emerald-400">Senior Security Trainer</span> with the Vigilance Department at Muthoot Finance, I lead corporate security initiatives with military precision.
              </p>
              <p>
                My foundation is built on 18+ years of distinguished service as a <span className="font-bold text-emerald-600 dark:text-emerald-400">Havildar in the Indian Armed Forces</span>. This experience has honed my ability to develop disciplined teams and ensure flawless operational execution in high-stakes environments.
              </p>
              <p>
                Specializing in CCTV surveillance, threat assessment, and fire safety, I translate complex security protocols into actionable training for personnel, ensuring a fortress-like approach to organizational safety.
              </p>
            </div>

            <div className="mt-8 font-mono text-xs text-slate-400 dark:text-emerald-500/50">
              // END BRIEFING //
            </div>
          </motion.div>

          {/* Image - Tactical Display */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-dashed border-slate-400/30 dark:border-emerald-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Core Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <img 
                  src="/bubun.webp" 
                  alt="Sayan Bhunia" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Data Overlays */}
              <div className="absolute -right-4 top-1/2 bg-slate-900 text-emerald-500 text-xs font-mono p-2 border-l-2 border-emerald-500 shadow-lg">
                <p>TARGET: SECURE</p>
                <p>CODE: VIGILANCE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
