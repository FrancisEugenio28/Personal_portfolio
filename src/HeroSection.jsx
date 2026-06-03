import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Facebook from "./assets/hero/facebook_hero.svg";
import Instagram from "./assets/hero/instagram_hero.svg";
import Github from "./assets/hero/github_hero.svg";
import LinkedIn from "./assets/hero/linkedin_hero.svg";
import HeroBg from "./assets/hero/hero-bg.jpg";

export const HeroSection = () => {
  const socialLinks = [
    { href: "https://web.facebook.com/balong.eugenio/", icon: Facebook, alt: "Facebook" },
    { href: "https://www.instagram.com/oninoninoninoninonin/", icon: Instagram, alt: "Instagram" },
    { href: "https://github.com/FrancisEugenio28", icon: Github, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/", icon: LinkedIn, alt: "LinkedIn" },
  ];

  return (
    <section
      className="flex w-full min-h-screen relative items-center justify-start px-10 md:px-40 py-20 bg-cover bg-center bg-no-repeat transition-all duration-500 overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundColor: "rgba(217,218,204,0.45)",
        backgroundBlendMode: "overlay",
      }}
      aria-label="Hero Section"
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/60 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col max-w-4xl gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-x1st-primary text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            Hi, I&apos;m <br />
            <span className="text-white drop-shadow-lg">Francis Niño.</span>
          </h1>
          
          <p className="text-x1st-primary dark:text-gray-300 text-xl md:text-2xl font-bold max-w-2xl leading-relaxed">
            A Computer Engineer building robust hardware and software systems. 
            I turn complex problems into elegant, functional solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-4"
        >
          <Link
            to="/resume"
            className="px-10 py-5 bg-x1st-primary text-x2nd-primary rounded-2xl font-black text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all no-underline text-center"
          >
            check my resume
          </Link>

          <div className="flex flex-col gap-3">
            <span className="text-x1st-primary dark:text-gray-300 font-bold uppercase tracking-widest text-sm">
              Connect with me
            </span>
            <div className="flex gap-5">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/40 transition-all dark:invert"
                  aria-label={link.alt}
                >
                  <img src={link.icon} alt={link.alt} className="w-8 h-8 object-contain" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
