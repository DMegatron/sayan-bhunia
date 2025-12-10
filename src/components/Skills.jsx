import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'TECHNICAL_OPS',
      skills: ['CCTV & Surveillance', 'Fire Safety', 'Industrial Safety', 'Physical Training', 'Drill', 'Computer Proficiency']
    },
    {
      title: 'COMMAND_SKILLS',
      skills: ['Team Leadership', 'Vigilance', 'Communication', 'Attention to Detail', 'Analytical Thinking', 'Adaptability']
    },
    {
      title: 'LINGUISTICS',
      skills: ['English', 'Hindi', 'Bengali', 'Oria']
    }
  ];

  return (
    <section id="skills" className="section bg-slate-300 dark:bg-slate-950/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-800 dark:text-emerald-400"
        >
          SKILL_MATRIX
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel p-6 rounded-sm border-t-2 border-slate-400 dark:border-emerald-600 hover:border-emerald-500 transition-colors"
            >
              <h3 className="text-base md:text-lg font-bold font-mono text-slate-700 dark:text-emerald-500 mb-6 pb-2 border-b border-dashed border-slate-300 dark:border-emerald-900/50 flex justify-between">
                {category.title}
                <span className="text-xs opacity-50 self-end">v.2.0</span>
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{skill}</span>
                      <span className="text-xs text-slate-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity text-emerald-500">100%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="h-full bg-slate-400 dark:bg-emerald-600/50 group-hover:bg-emerald-500 transition-colors"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
