import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FooterSection } from "./FooterSection";
import Menu_icon from "./assets/index/menu-icon.svg";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import GithubIcon from "./assets/hero/github_hero.svg";
import LinkedinIcon from "./assets/hero/linkedin_hero.svg";

export const Layout = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-bg min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-300">
      <header className="flex w-full min-h-[40px] md:min-h-[50px] relative flex-col items-center justify-center bg-x2nd-primary sticky top-0 z-50 shadow-sm transition-all duration-300">
        <nav className="w-full h-full items-center justify-between px-6 md:px-20 py-2 flex relative">
          <Link to="/" className="text-x1st-primary no-underline relative w-fit [font-family:'Geologica-Bold',Helvetica] font-extrabold text-lg md:text-2xl tracking-[0] leading-[normal]">
            francis.
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-x1st-primary"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} className="md:w-6 md:h-6" /> : <Moon size={20} className="md:w-6 md:h-6" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="relative w-8 h-8 md:w-[30px] md:h-[30px] aspect-[1]"
              aria-label="Menu"
            >
              <img
                className="absolute w-[80%] h-[50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:invert"
                alt=""
                src={Menu_icon}
              />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[300px] md:w-[400px] bg-bg dark:bg-[#1a1a1a] z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-3xl font-black text-x1st-primary">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-x1st-primary hover:rotate-90 transition-all duration-300"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="text-xl font-bold text-x1st-primary text-left hover:translate-x-4 transition-transform duration-300"
                  >
                    {link.name}
                  </button>
                ))}
                <Link
                  to="/resume"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl font-bold text-x1st-primary no-underline hover:translate-x-4 transition-transform duration-300"
                >
                  Resume
                </Link>
              </div>

              <div className="mt-auto flex flex-col gap-6">
                <div className="h-px bg-x1st-primary/10 w-full" />
                <div className="flex gap-4">
                  <a
                    href="https://github.com/FrancisEugenio28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-x1st-primary text-x2nd-primary rounded-xl hover:scale-110 transition-all flex items-center justify-center"
                  >
                    <img src={GithubIcon} alt="GitHub" className="w-6 h-6 dark:invert transition-all" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-x1st-primary text-x2nd-primary rounded-xl hover:scale-110 transition-all flex items-center justify-center"
                  >
                    <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6 dark:invert transition-all" />
                  </a>
                </div>
                <p className="text-xs font-bold text-x1st-primary/40 uppercase tracking-widest">
                  © 2024 Francis Niño
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        {children}
      </main>

      <FooterSection />
    </div>
  );
};

