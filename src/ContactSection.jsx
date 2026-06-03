import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // NOTE: You need to replace these with your actual EmailJS IDs
    // service_id, template_id, public_key
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section className="py-20 px-10 md:px-20 bg-[#f0eee4] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[60px] font-bold text-x1st-primary mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-x1st-primary font-bold ml-2">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  placeholder="Your Name"
                  className="px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-2xl focus:ring-2 focus:ring-x1st-primary outline-none transition-all text-x1st-primary dark:text-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-x1st-primary font-bold ml-2">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  placeholder="your@email.com"
                  className="px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-2xl focus:ring-2 focus:ring-x1st-primary outline-none transition-all text-x1st-primary dark:text-white"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-x1st-primary font-bold ml-2">Message</label>
              <textarea 
                name="message" 
                rows="5" 
                required
                placeholder="How can I help you?"
                className="px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-2xl focus:ring-2 focus:ring-x1st-primary outline-none transition-all text-x1st-primary dark:text-white resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={status === 'sending'}
              className="mt-4 flex items-center justify-center gap-3 px-10 py-5 bg-x1st-primary text-x2nd-primary rounded-2xl font-bold text-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : (
                <>
                  Send Message
                  <Send size={24} />
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-600 font-bold justify-center">
                <CheckCircle /> Message sent successfully!
              </motion.div>
            )}
            
            {status === 'error' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-600 font-bold justify-center">
                <AlertCircle /> Something went wrong. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
