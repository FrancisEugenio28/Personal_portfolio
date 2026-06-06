import React from 'react';
import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const ResumePage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-6 md:py-10 px-4 md:px-5 bg-[#f0eee4] dark:bg-[#121212] transition-colors duration-300">
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-x1st-primary hover:opacity-70 transition-opacity self-start md:self-auto"
        >
          <ArrowLeft size={20} />
          <span className="font-bold">Back to Portfolio</span>
        </Link>
        
        <a 
          href="/resume.pdf" 
          download 
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-x1st-primary text-x2nd-primary rounded-xl font-bold shadow-lg hover:scale-105 transition-all"
        >
          <Download size={20} />
          Download PDF
        </a>
      </div>

      <div className="w-full max-w-4xl mb-6">
        <h2 className="text-3xl font-bold text-x1st-primary text-center md:text-left">Resume Preview</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl max-h-dvh bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[1/1.41] md:aspect-[1/1.4] relative"
      >
        <iframe 
          src="resume.pdf" 
          className="w-full h-full border-none"
          title="Resume Preview"
        />
      </motion.div>
    </div>
  );
};
