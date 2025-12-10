import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-8 text-center border-t border-slate-300 dark:border-emerald-900/30 transition-colors duration-300 font-mono text-xs">
      <p className="text-slate-500 dark:text-emerald-500/60 uppercase tracking-widest mb-2">
        // SYSTEM_END_OF_FILE
      </p>
      <p className="text-slate-400 dark:text-slate-600">
        &copy; {new Date().getFullYear()} Sayan Bhunia | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
