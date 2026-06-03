import Instagram_foot from "./assets/footer/instagram-icon.svg";
import Linkedin_foot from "./assets/footer/linkedin-icon.svg";
import Facebook_foot from "./assets/footer/facebook-icon.svg";
import Github_foot from "./assets/footer/github-icon.svg";
import { motion } from "framer-motion";

export const FooterSection = () => {
  const socialLinks = [
    { href: "https://web.facebook.com/balong.eugenio/", icon: Facebook_foot, alt: "Facebook" },
    { href: "https://www.instagram.com/oninoninoninoninonin/", icon: Instagram_foot, alt: "Instagram" },
    { href: "https://github.com/FrancisEugenio28", icon: Github_foot, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/", icon: Linkedin_foot, alt: "LinkedIn" },
  ];

  return (
    <footer className="w-full py-12 px-10 md:px-20 bg-x2nd-primary dark:bg-[#0a0a0a] border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-3xl font-black text-x1st-primary dark:text-white">francis.</h2>
            <p className="text-x1st-primary/50 dark:text-gray-500 font-medium tracking-wider text-sm">
                © {new Date().getFullYear()} Francis Niño Eugenio. All rights reserved.
            </p>
        </div>

        <nav className="flex items-center gap-6" aria-label="Social media links">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-x1st-primary/5 dark:bg-white/5 hover:bg-x1st-primary/10 dark:hover:bg-white/10 transition-all dark:invert"
                    aria-label={link.alt}
                >
                    <img src={link.icon} alt={link.alt} className="w-5 h-5 opacity-70" />
                </motion.a>
            ))}
        </nav>
      </div>
    </footer>
  );
};
