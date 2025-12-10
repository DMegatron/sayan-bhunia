import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Add timestamp dynamically as EmailJS variable
    const timeStamp = new Date().toLocaleString();

    // Inject timestamp into hidden form field
    formRef.current.time.value = timeStamp;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', message: '' });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container mx-auto px-6">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-800 dark:text-emerald-400"
        >
          SECURE_COMMS
        </motion.h2>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="p-6 border-l-2 border-emerald-500 bg-emerald-500/5 mb-8">
              <h3 className="text-xl font-bold font-mono text-slate-700 dark:text-emerald-500 mb-2 uppercase tracking-widest">
                Transmitter_Status: ONLINE
              </h3>
              <p className="text-sm font-mono text-slate-500 dark:text-emerald-800/70">
                Frequency: ENCRYPTED // Awaiting Input
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-sans border-l border-slate-300 dark:border-slate-700 pl-4">
              I am currently seeking better opportunities in the financial services industry. 
              Direct transmission lines are open.
            </p>

            <div className="space-y-6">
              <div className="glass-panel p-4 flex items-center border border-slate-200 dark:border-emerald-900/30">
                <FaEnvelope className="text-emerald-600 dark:text-emerald-500 text-xl mr-4" />
                <a 
                  href="mailto:sayanbhunia82@gmail.com" 
                  className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-sm break-all"
                >
                  sayanbhunia82@gmail.com
                </a>
              </div>

              <div className="glass-panel p-4 flex items-center border border-slate-200 dark:border-emerald-900/30">
                <FaPhone className="text-emerald-600 dark:text-emerald-500 text-xl mr-4" />
                <a 
                  href="tel:+917975518528" 
                  className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 font-mono text-sm"
                >
                  +91 7975518528 / 9481783472
                </a>
              </div>

              <div className="glass-panel p-4 flex items-start border border-slate-200 dark:border-emerald-900/30">
                <FaMapMarkerAlt className="text-emerald-600 dark:text-emerald-500 text-xl mr-4 mt-1" />
                <div className="flex flex-col">
                   <span className="text-xs font-mono text-emerald-600 dark:text-emerald-500 uppercase mb-1">Base of Operations</span>
                   <span className="text-slate-700 dark:text-slate-200 font-sans text-sm">
                    Vill+PO: Bhekutia, PS: Nandigram, Purba Medinipur, WB - 721656
                   </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="glass-panel p-6 md:p-8 rounded-sm hud-border">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-500 mb-6 border-b border-dashed border-emerald-500/30 pb-2">
                // COMPOSE_MESSAGE
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                {/* HIDDEN TIMESTAMP FIELD */}
                <input type="hidden" name="time" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">ID (Name)</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-emerald-900/50 rounded-none p-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm text-slate-800 dark:text-emerald-100"
                      placeholder="Ident"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Comms (Email)</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-emerald-900/50 rounded-none p-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm text-slate-800 dark:text-emerald-100"
                      placeholder="Frequency"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Subject</label>
                  <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-emerald-900/50 rounded-none p-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm text-slate-800 dark:text-emerald-100"
                    placeholder="Topic"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">Transmission</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-emerald-900/50 rounded-none p-3 h-32 resize-none focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all font-mono text-sm text-slate-800 dark:text-emerald-100"
                    placeholder="Enter payload..."
                    required
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-500 text-emerald-800 dark:text-emerald-400 text-sm font-mono"
                  >
                    <FaCheckCircle />
                    <span>TRANSMISSION_COMPLETE</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 border border-red-500 text-red-800 dark:text-red-400 text-sm font-mono"
                  >
                    <FaExclamationCircle />
                    <span>TRANSMISSION_FAILED</span>
                  </motion.div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-slate-900 font-bold font-mono uppercase tracking-widest py-4 hover:bg-emerald-500 transition-all disabled:opacity-50 border border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'INITIATE_PROTOCOL'}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
