import React from 'react';
import { motion } from "framer-motion";
import { FooterSection } from "./FooterSection";
import Menu_icon from "./assets/index/menu-icon.svg";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="bg-bg min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-300">
      <header className="flex w-full min-h-[60px] md:min-h-[70px] relative flex-col items-center justify-center p-2 bg-x2nd-primary sticky top-0 z-50 shadow-sm transition-all duration-300">
        <nav className="w-full h-full items-center justify-between px-6 md:px-20 py-2 flex relative">
          <Link to="/" className="text-x1st-primary no-underline relative w-fit [font-family:'Geologica-Bold',Helvetica] font-extrabold text-xl md:text-2xl tracking-[0] leading-[normal]">
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

      <main className="flex-grow">
        {children}
      </main>

      <FooterSection />
    </div>
  );
};
