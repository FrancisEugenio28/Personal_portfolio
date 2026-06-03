import { motion } from "framer-motion";
import { AboutMeSection } from "./AboutMeSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";
import { ContactSection } from "./ContactSection";
import Autocad_icon from "./assets/index/autocad-icon.svg";
import HTML_icon from "./assets/index/html-icon.svg";
import CSS_icon from "./assets/index/css-icon.svg";
import JavaScript_icon from "./assets/index/javascript-icon.svg";
import Flutter_icon from "./assets/index/flutter-icon.svg";
import Laravel_icon from "./assets/index/laravel-icon.svg";
import PHP_icon from "./assets/index/php-icon.svg";
import Python_icon from "./assets/index/python-icon.svg";
import C_icon from "./assets/index/c-icon.svg";
import CPP_icon from "./assets/index/cpp-icon.svg";

export const Homepage = () => {
  const techLogos = [
    { src: Autocad_icon, alt: "Autocad logo" },
    { src: HTML_icon, alt: "HTML logo" },
    { src: CSS_icon, alt: "CSS logo" },
    { src: JavaScript_icon, alt: "JavaScript logo" },
    { src: Flutter_icon, alt: "Flutter logo" },
    { src: Laravel_icon, alt: "Laravel logo" },
    { src: PHP_icon, alt: "PHP logo" },
    { src: Python_icon, alt: "Python logo" },
    { src: C_icon, alt: "C logo" },
    { src: CPP_icon, alt: "C++ logo" },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex w-full min-h-[100px] relative items-center overflow-hidden gap-[90px] py-16 bg-breaker dark:bg-gray-900 transition-colors duration-300"
        aria-label="Technologies"
      >
        <div 
          className="flex shrink-0 items-center gap-[90px] animate-marquee"
          style={{ "--gap": "90px", "--duration": "25s" }}
        >
          {techLogos.map((logo, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="w-[70px] h-[70px] aspect-square relative object-contain cursor-pointer dark:brightness-110 dark:contrast-125"
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>

        <div 
          className="flex shrink-0 items-center gap-[90px] animate-marquee"
          style={{ "--gap": "90px", "--duration": "25s" }}
          aria-hidden="true"
        >
          {techLogos.map((logo, index) => (
            <motion.img
              key={`dup-${index}`}
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="w-[70px] h-[70px] aspect-square relative object-contain cursor-pointer dark:brightness-110 dark:contrast-125"
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </motion.section>

      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};
