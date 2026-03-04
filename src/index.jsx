import { AboutMeSection } from "./AboutMeSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";
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
import Menu_icon from "./assets/index/menu-icon.svg";

export const Homepage = () => {
  const techLogos = [
    {
      src: Autocad_icon,
      alt: "Autocad logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: HTML_icon,
      alt: "HTML logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: CSS_icon,
      alt: "CSS logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: JavaScript_icon,
      alt: "JavaScript logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: Flutter_icon,
      alt: "Flutter logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: Laravel_icon,
      alt: "Laravel logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: PHP_icon,
      alt: "PHP logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: Python_icon,
      alt: "Python logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: C_icon,
      alt: "C logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: CPP_icon,
      alt: "C++ logo",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
  ];

  return (
    <div className="bg-bg w-full flex flex-col">
      <header className="flex w-full min-h-[99px] relative flex-col items-center justify-center gap-2.5 p-2.5 bg-x2nd-primary">
        <nav className="w-full h-[82px] items-center justify-between px-20 py-2.5 mt-[-1.50px] mb-[-1.50px] flex relative">
          <h1 className="text-x1st-primary relative w-fit [font-family:'Geologica-Bold',Helvetica] font-bold text-[40px] tracking-[0] leading-[normal]">
            francis.
          </h1>

          <button
            className="relative w-[50px] h-[50px] aspect-[1]"
            aria-label="Menu"
          >
            <img
              className="absolute w-[87.50%] h-[75.00%] top-[25.00%] left-[12.50%]"
              alt=""
              src={Menu_icon}
            />
          </button>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <section
          className="flex w-full min-h-[180px] relative items-center justify-center gap-[90px] px-0 py-10 bg-breaker"
          aria-label="Technologies"
        >
          {techLogos.map((logo, index) => (
            <img
              key={index}
              className={`${logo.width} ${logo.aspectRatio} relative h-[100px] object-cover`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </section>

        <ProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};
