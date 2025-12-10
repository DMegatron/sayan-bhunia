import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Security Trainer, Vigilance Department',
      company: 'Muthoot Finance',
      location: 'India', 
      period: '08th November 2021 - Present',
      description: [
        'Conducting comprehensive security training for staff to enhance vigilance and safety protocols.',
        'Overseeing security operations and ensuring compliance with organizational safety standards.',
        'Implementing effective security protocols to ensure operational excellence.',
        'Monitoring CCTV and surveillance systems to maintain a secure environment.',
        'Developing and leading high-performing security teams.'
      ]
    },
    {
      title: 'Havildar',
      company: 'Indian Armed Forces',
      location: 'India',
      period: '28th March 2001 – 01st November 2019',
      description: [
        'Served with distinction for over 18 years, maintaining high standards of discipline and professionalism.',
        'Executed critical security operations and protocols in challenging environments.',
        'Lead teams in physical training, drill, and security operations.',
        'Awarded 9 Years Good Service Medal and medals in firing competitions.',
        'Active participation in sports including football, basketball, and swimming.'
      ]
    }
  ];

  return (
    <section id="experience" className="section relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-800 dark:text-emerald-400"
        >
          SERVICE_RECORD
        </motion.h2>

        <div className="max-w-6xl mx-auto relative border-l-2 border-emerald-500/20 ml-2 md:ml-12 pl-6 md:pl-16 space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[75px] top-0 w-6 h-6 bg-slate-100 dark:bg-slate-900 border-4 border-emerald-500 rounded-full z-10"></div>
              
              {/* Card - Log Entry */}
              <div className="glass-panel p-5 md:p-8 rounded-sm hud-border group hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 border-b border-slate-200 dark:border-emerald-900/30 pb-4">
                  <div className="flex items-center">
                    <div className="p-2 md:p-3 bg-emerald-500/10 rounded-sm mr-3 md:mr-4 text-emerald-600 dark:text-emerald-400">
                      <FaBriefcase className="text-lg md:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-slate-800 dark:text-slate-100 uppercase tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-600 dark:text-emerald-500 font-mono text-xs sm:text-sm tracking-wider mt-1">
                        {exp.company} // {exp.location}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0 font-mono text-xs sm:text-sm font-bold text-slate-600 dark:text-emerald-400 bg-slate-100 dark:bg-emerald-900/20 px-3 py-1 rounded border border-slate-200 dark:border-emerald-500/30 shadow-sm inline-block w-max">
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2 md:space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                      <span className="text-emerald-500 mr-2 md:mr-3 mt-1.5 text-xs">▶</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
