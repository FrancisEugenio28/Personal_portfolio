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
      <header className="flex w-full min-h-[60px] relative flex-col items-center justify-center gap-1 p-2 bg-x2nd-primary sticky top-0 z-50 shadow-sm">
        <nav className="w-full h-[50px] items-center justify-between px-10 md:px-20 py-0.5 flex relative">
          <Link to="/" className="text-x1st-primary no-underline relative w-fit [font-family:'Geologica-Bold',Helvetica] font-extrabold text-[22px] tracking-[0] leading-[normal]">
            francis.
          </Link>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-x1st-primary"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button
              className="relative w-[30px] h-[30px] aspect-[1]"
              aria-label="Menu"
            >
              <img
                className="absolute w-[87.50%] h-[50.00%] top-[25.00%] left-[20%] dark:invert"
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
