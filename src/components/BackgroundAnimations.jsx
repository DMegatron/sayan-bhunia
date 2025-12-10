import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-20" />
      
      {/* Radar Scan Line */}
      <div className="absolute inset-x-0 h-[4px] bg-emerald-500/50 blur-sm animate-scan shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
      <div className="absolute inset-x-0 h-[100px] bg-gradient-to-b from-emerald-500/10 to-transparent animate-scan" style={{ animationDelay: '0.1s' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-500/10 dark:bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen" />

      {/* Random Data Points / Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimations;
