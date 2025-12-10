import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:pt-20 md:pb-10 md:px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text Info */}
        <div className="text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 border border-emerald-500/30 bg-emerald-500/10 rounded-sm"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-sm tracking-widest uppercase">
              Clearance: Verified
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter"
          >
            Sayan<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Bhunia.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-l-4 border-emerald-500 pl-6"
          >
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 font-mono mb-2">
              SENIOR SECURITY TRAINER
            </h2>
            <p className="text-slate-500 dark:text-emerald-500/60 font-mono text-xs sm:text-sm">
              INDIAN ARMED FORCES (RET.) // 18+ YEARS SERVICE
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg font-sans"
          >
            Specialist in high-level security protocols, tactical team leadership, and operational surveillance. Dedicated to enhancing organizational safety through disciplined training and vigilance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#contact"
              className="px-6 py-3 sm:px-8 bg-emerald-600 text-slate-900 font-bold font-mono tracking-wider hover:bg-emerald-500 transition-all border border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] text-sm sm:text-base"
            >
              INITIATE_CONTACT
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 bg-transparent text-emerald-600 dark:text-emerald-400 font-bold font-mono tracking-wider border border-emerald-600 dark:border-emerald-400 hover:bg-emerald-600/10 transition-all text-sm sm:text-base"
            >
              VIEW_DOSSIER
            </a>
          </motion.div>
        </div>

        {/* Right Column: ID Card Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-72 h-[22rem] sm:w-80 sm:h-96 md:w-[400px] md:h-[500px] border border-slate-300 dark:border-emerald-900/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-500"></div>

            {/* Image Container */}
            <div className="w-full h-full relative overflow-hidden">
               <img 
                 src="/bubun.webp"
                 alt="Sayan Bhunia"
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-80"></div>
               
               {/* Overlay Details */}
               <div className="absolute bottom-6 left-6 font-mono text-xs text-emerald-400">
                 <p>STATUS: ACTIVE</p>
                 <p>LOC: INDIA</p>
               </div>
            </div>
            
            {/* Scan Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/50 shadow-[0_0_10px_#10b981] animate-scan opacity-50 pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
