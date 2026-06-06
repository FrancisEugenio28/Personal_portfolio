import { motion } from "framer-motion";
import Formal_Pic from "./assets/aboutme/formal-pic.jpg";

export const AboutMeSection = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row w-full min-h-[700px] relative items-center bg-white dark:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden">
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
        className="flex-1 flex flex-col justify-center px-6 md:px-24 py-16 md:py-20 gap-8"
      >
        <div className="flex flex-col gap-2">
            <span className="text-x1st-primary dark:text-gray-400 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">Get to know me</span>
            <h2 className="text-4xl md:text-6xl font-bold text-x1st-primary dark:text-white leading-tight">
                About Me
            </h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-x1st-primary rounded-full" />
        </div>

        <p className="text-x1st-primary/90 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed text-justify max-w-2xl">
          I am a Computer Engineering student at Polytechnic University of the Philippines and a dedicated developer focused on building end-to-end systems. 
          I love the "magic" of creating something out of nothing—whether that means architecting a robust backend, 
          developing cross-platform mobile apps, or engineering hardware prototypes.
          <br />
          <br />
          My focus is blending robust technical architecture with intuitive user experiences. To deliver the highest quality results,
          I continuously adapt to modern tech trends by implementing Artificial Intelligence into my workflow, making my development
          process highly efficient, precise, and on point.
        </p>

        <div className="flex gap-8 md:gap-10 mt-4">
            <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-x1st-primary dark:text-white">PUP</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-x1st-primary/50">Education</span>
            </div>
            <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-x1st-primary dark:text-white">6+</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-x1st-primary/50">Projects</span>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
