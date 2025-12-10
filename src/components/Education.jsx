import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Diploma in Fire and Industrial Safety',
      institution: 'Royal Institute of Fire and Safety',
      year: '2019',
      status: 'COMPLETED'
    },
    {
      degree: 'Higher Secondary (Class 12)',
      institution: 'Asadtala Binode Vidyapith',
      year: '2000',
      status: 'COMPLETED'
    },
    {
      degree: 'Secondary (Class 10)',
      institution: 'Manuchak Milan Vidyaniketan',
      year: '1998',
      status: 'COMPLETED'
    }
  ];

  return (
    <section id="education" className="section bg-slate-200 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-800 dark:text-emerald-400"
        >
          TRAINING_LOGS
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-sm border border-slate-300 dark:border-emerald-900/50 relative overflow-hidden group hover:bg-white dark:hover:bg-slate-800 transition-all"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-slate-200 dark:bg-emerald-900/20 -mr-4 -mt-4 transform rotate-45"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="p-2 border border-slate-300 dark:border-emerald-800 rounded-sm bg-slate-100 dark:bg-slate-900">
                   <FaGraduationCap className="text-slate-600 dark:text-emerald-500 text-lg md:text-xl" />
                </div>
                <span className="text-[10px] font-mono border border-emerald-500 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-sm bg-emerald-100 dark:bg-emerald-900/20">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 font-mono leading-tight min-h-[3rem] md:min-h-[3.5rem] flex items-center">
                {edu.degree}
              </h3>
              
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-emerald-900/30 flex justify-between items-end">
                <p className="text-xs md:text-sm font-sans text-slate-600 dark:text-slate-400 font-medium max-w-[70%]">
                  {edu.institution}
                </p>
                <div className="font-mono text-xs md:text-sm font-bold text-slate-600 dark:text-emerald-400 bg-slate-100 dark:bg-emerald-900/20 px-2 md:px-3 py-1 rounded border border-slate-200 dark:border-emerald-500/30 shadow-sm">
                  {edu.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
