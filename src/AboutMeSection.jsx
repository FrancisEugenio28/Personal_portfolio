import { motion } from "framer-motion";
import Formal_Pic from "./assets/aboutme/formal-pic.jpg";
import Vector1 from "./assets/aboutme/vector-2.svg";

export const AboutMeSection = () => {
  return (
    <section className="flex w-full min-h-[750px] relative items-center gap-[100px] px-[150px] py-[60px] bg-white">
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-[450px] h-[450px] aspect-[1] rounded-full object-cover border-2 border-x1st-primary"
        alt="Profile picture"
        src={Formal_Pic}
      />

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-[1000px] gap-2.5 flex flex-col items-start relative"
      >
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[60px] tracking-[0] leading-[normal]">
          About Me
        </h2>

        <img
          className="relative w-[1000.02px] h-2 ml-[-0.01px] mr-[-0.01px]"
          alt=""
          src={Vector1}
          role="presentation"
        />

        <p className="relative self-stretch [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[25px] text-justify tracking-[0] leading-[normal]">
          Currently a Computer Engineering student at PUP, I&apos;m a system
          development enthusiast who loves the &#34;magic&#34; of creating
          something out of nothing—be it a webpage, a mobile app, or a complex
          backend system.
          <br />
          <br />
          My daily routine? Learn something new, build something better, and
          drink way too much coffee. I&apos;m always down to chat about geeky
          topics, system architecture, or the best brew in town. Let&apos;s
          connect and explore the future of tech together!
        </p>
      </motion.div>
    </section>
  );
};