import { motion } from "framer-motion";
import vector1 from "./assets/vector-1.svg";

export const SkillsSection = () => {
  const technicalSkills = [
    "Knowledgeable in building robust applications using C/C++, Python, and JavaScript, with a focus on logic and efficiency.",
    "Experienced in developing data-driven web solutions using PHP and the Laravel Framework.",
    "Knowledgeable in creating cross-platform mobile experiences with Flutter.",
    "Knowledgeable in AutoCAD for precise 3D modeling and hardware prototyping.",
  ];

  const softSkills = [
    "A proactive team player dedicated to shared goals and effective communication.",
    "Highly adaptive and committed to mastering new technologies in the ever-evolving engineering landscape.",
    "Focused on understanding complex requirements to deliver precise, user-centered results.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="flex w-full min-h-[450px] relative flex-col items-start gap-[250px] pt-[45px] pb-[30px] px-[150px] bg-breaker overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="relative w-full max-w-[1620px] h-[695px] mb-[-26.00px]"
      >
        <div className="flex flex-col w-full h-[695px] items-start gap-2.5 relative">
          <motion.h2
            variants={titleVariants}
            className="self-stretch relative mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[60px] tracking-[0] leading-[normal]"
          >
            My Skills
          </motion.h2>

          <motion.img
            variants={lineVariants}
            style={{ originX: 0 }}
            className="relative w-full object-cover h-2"
            alt=""
            src={vector1}
            role="presentation"
          />

          <div className="relative self-stretch h-[688px] mb-[-115.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-4xl text-justify tracking-[0] leading-[50px]">
            <motion.h3
              variants={itemVariants}
              className="[font-family:'Geologica-Bold',Helvetica] font-bold text-[#5b4c33] text-4xl tracking-[0] leading-[50px]"
            >
              Technical Skills:
            </motion.h3>

            <ul className="text-[21px] list-disc pl-8">
              {technicalSkills.map((skill, index) => (
                <motion.li
                  key={`tech-${index}`}
                  variants={itemVariants}
                  className="leading-[50px]"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            <div className="text-[28px] leading-[50px]">
              <br />
            </div>

            <motion.h3
              variants={itemVariants}
              className="[font-family:'Geologica-Bold',Helvetica] font-bold text-[#5b4c33] text-4xl tracking-[0] leading-[50px]"
            >
              Soft Skills:
            </motion.h3>

            <ul className="text-[21px] list-disc pl-8">
              {softSkills.map((skill, index) => (
                <motion.li
                  key={`soft-${index}`}
                  variants={itemVariants}
                  className="leading-[50px]"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
