import { motion } from "framer-motion";
import { Code2, Layout, Database, Cpu, Users, Zap } from "lucide-react";

export const SkillsSection = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["C/C++", "Python", "JavaScript", "PHP", "SQL", "TypeScript"],
    },
    {
      title: "Frameworks & Web",
      icon: <Layout className="w-8 h-8" />,
      skills: ["React", "Laravel", "Flutter", "Tailwind CSS", "HTML/CSS", "Supabase", "Vite"],
    },
    {
      title: "Engineering & Hardware",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["AutoCAD", "IoT Systems", "Embedded Systems", "Hardware Prototyping"],
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Team Leadership", "Adaptive Learning", "User-Centered Design", "Clear Communication"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-20 bg-white dark:bg-[#1a1a1a] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-x1st-primary mb-12 md:mb-16"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-6 md:p-8 bg-bg dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent hover:border-x1st-primary/20 transition-all flex flex-col gap-6"
            >
              <div className="text-x1st-primary dark:text-gray-200">
                {cat.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-x1st-primary dark:text-white">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full text-xs md:text-sm font-semibold text-x1st-primary dark:text-gray-300 border border-black/5 dark:border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16 p-6 md:p-8 bg-x1st-primary rounded-3xl text-x2nd-primary flex items-center gap-6"
        >
          <Zap size={40} className="shrink-0 hidden sm:block" />
          <p className="text-lg md:text-xl font-bold italic leading-relaxed">
            &quot;I&apos;m dedicated to mastering new technologies in the ever-evolving engineering landscape, 
            focused on delivering precise, user-centered results.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};
