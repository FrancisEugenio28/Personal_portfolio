import { motion } from "framer-motion";
import Formal_Pic from "./assets/aboutme/formal-pic.jpg";

export const AboutMeSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[700px] relative items-center bg-white dark:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden">
      <div className="w-full md:w-1/2 h-[500px] md:h-screen relative overflow-hidden group">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          alt="Francis Niño - Computer Engineer"
          src={Formal_Pic}
        />
        <div className="absolute inset-0 bg-x1st-primary/10 mix-blend-multiply" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center px-10 md:px-24 py-20 gap-8"
      >
        <div className="flex flex-col gap-2">
            <span className="text-x1st-primary dark:text-gray-400 font-bold tracking-[0.2em] uppercase text-sm">Get to know me</span>
            <h2 className="text-[60px] font-bold text-x1st-primary dark:text-white leading-tight">
                About Me
            </h2>
            <div className="w-24 h-2 bg-x1st-primary rounded-full" />
        </div>

        <p className="text-x1st-primary/90 dark:text-gray-300 text-xl md:text-2xl font-medium leading-relaxed text-justify max-w-2xl">
          I am a Computer Engineering student at PUP and a dedicated system development enthusiast. 
          I love the &quot;magic&quot; of creating something out of nothing—be it a minimalist webpage, 
          a mobile app, or a complex backend architecture.
          <br />
          <br />
          My focus is blending robust technical architecture with intuitive user experiences. 
          When I&apos;m not coding, you&apos;ll find me experimenting with 3D modeling, 
          exploring system architecture, or hunting for the best coffee brew in town.
        </p>

        <div className="flex gap-10 mt-4">
            <div className="flex flex-col">
                <span className="text-4xl font-black text-x1st-primary dark:text-white">PUP</span>
                <span className="text-sm font-bold uppercase tracking-widest text-x1st-primary/50">Education</span>
            </div>
            <div className="flex flex-col">
                <span className="text-4xl font-black text-x1st-primary dark:text-white">6+</span>
                <span className="text-sm font-bold uppercase tracking-widest text-x1st-primary/50">Projects</span>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
