import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Project3 from "./assets/projects/dostgemms_pic.svg";
import Project1 from "./assets/projects/covid_pic.svg";
import Project2 from "./assets/projects/registration_pic.svg";
import Project6 from "./assets/projects/soundtherapy3D_pic.svg";
import Project4 from "./assets/projects/sleeptherapy_pic.svg";
import Project5 from "./assets/projects/kumpas_pic.svg";
import vector2 from "./assets/projects/vector2.svg";

export const ProjectsSection = () => {
  // 1. Refs for the container and drag state
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 2. Mouse Wheel Scroll Logic
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault(); 
          el.scrollBy({
            left: e.deltaY,
            behavior: "smooth",
          });
        }
      };
      
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, []);

  // 3. Click-and-Drag Mouse Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const projects = [
    {
      title: "COVID Contact Tracing Software",
      image: Project1,
      description:
        "A Python-based desktop application for COVID-19 contact tracing that allows users to register their personal health and contact information, which is stored locally in a CSV file. It also provides a search feature where users can verify their registration using either a reference number or by filling in their personal details.",
      link: "https://github.com/FrancisEugenio28/COVID_Contact_Tracing_Program",
    },
    {
      title: "Simple Registration form",
      image: Project2,
      description:
        "A PHP and HTML web application that allows users to register with their personal, contact, and address information stored in a MySQL database. It includes a secure login system with password hashing and session management for user authentication.",
      link: "https://github.com/Flere2134/registration-form",
    },
    {
      title: "DOST General Maintenance Management System",
      image: Project3,
      description:
        "A Laravel-based facility management system that enables organizations to track assets, schedule maintenance tasks, and coordinate staff through a centralized dashboard. It features role-based access control to manage personnel assignments and streamline overall building operations.",
      link: "https://devhub.dost.gov.ph/smdcanega/dost_gemms/src/branch/Francis_Eugenio",
    },
    {
      title: "Sleep Sound Therapy Mobile Application",
      image: Project4,
      description:
        "A Flutter mobile app that improves sleep quality through sound therapy, offering various audio categories like classical, nature, and binaural beats. It also allows users to track sleep data and connect to smart devices via Bluetooth for an integrated sleep therapy experience.",
      link: "https://github.com/FrancisEugenio28/Sleep-Sound-Therapy-Mobile-App",
    },
    {
      title: "KUMPAS: Camera-based Proximity Controlled Music Synthesizer",
      image: Project5,
      description:
        "A Python app that turns your webcam into a virtual piano by tracking your index finger using MediaPipe, mapping its horizontal position to musical notes and vertical position to volume in real time.",
      link: "https://github.com/FrancisEugenio28/KUMPAS",
    },
    {
      title: "Sleep Sound Therapy 3D Model Casing",
      image: Project6,
      description:
        'A 3D model for our thesis project "Embedded Sound Therapy: Engineering Smart Devices for Sleep Quality Improvement".',
      link: "https://www.printables.com/model/1616011-sleep-sound-therapy-3d-model",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="flex w-full relative flex-col items-start gap-8 px-10 md:px-[150px] py-[70px] bg-white">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full relative mt-[-5.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[60px] md:text-[60px] tracking-[0] leading-[normal]"
      >
        My Projects
      </motion.h2>

      <motion.img
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[3px] object-cover mb-4 origin-left"
        alt="Divider"
        src={vector2}
      />

      <motion.div 
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex items-stretch gap-10 px-0 relative self-stretch w-full overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing select-none"
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            className="flex flex-col w-[550px] min-h-[250px] bg-bg rounded-[30px] border-[5px] border-solid border-black overflow-hidden shrink-0"
          >
            <header className="flex items-center gap-6 px-8 py-4 bg-x-3rd border-b-[5px] border-black shrink-0 h-[70px]">
              <div className="flex gap-2 shrink-0">
                <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
                <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
                <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
              </div>
              <h3 className="flex-1 text-center [font-family:'Geologica-Bold',Helvetica] font-bold text-black text-xl leading-snug line-clamp-3">
                {project.title}
              </h3>
            </header>

            <div className="w-full h-[125px] border-b-[5px] border-black shrink-0 bg-white">
              <img
                className="w-full h-full object-cover pointer-events-none"
                draggable="false"
                alt={project.title}
                src={project.image}
              />
            </div>

            <div className="flex flex-col grow justify-between p-6 gap-6">
              <p className="[font-family:'Geologica-Regular',Helvetica] font-normal text-black text-[15px] leading-relaxed">
                {project.description}
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-x1st-primary rounded-[10px] self-start transition-opacity hover:opacity-90 pointer-events-auto"
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`View ${project.title} project`}
              >
                <span className="[font-family:'Geologica-Bold',Helvetica] font-bold text-x2nd-primary text-l">
                  View Project
                </span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};