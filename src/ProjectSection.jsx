import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Project3 from "./assets/projects/dostgemms_pic.svg";
import Project1 from "./assets/projects/covid_pic.svg";
import Project2 from "./assets/projects/registration_pic.svg";
import Project6 from "./assets/projects/soundtherapy3D_pic.svg";
import Project4 from "./assets/projects/sleeptherapy_pic.svg";
import Project5 from "./assets/projects/kumpas_pic.svg";

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "COVID Contact Tracing Software",
      category: "Desktop",
      image: Project1,
      tech: ["Python", "CSV", "Tkinter"],
      description: "A desktop application for COVID-19 contact tracing with local data storage and search features.",
      link: "https://github.com/FrancisEugenio28/COVID_Contact_Tracing_Program",
    },
    {
      title: "Simple Registration form",
      category: "Web",
      image: Project2,
      tech: ["PHP", "MySQL", "HTML/CSS"],
      description: "Secure web registration system with password hashing and session management.",
      link: "https://github.com/Flere2134/registration-form",
    },
    {
      title: "DOST General Maintenance Management System",
      category: "Web",
      image: Project3,
      tech: ["Laravel", "MySQL", "PHP"],
      description: "Enterprise facility management system for asset tracking and maintenance scheduling.",
      link: "https://devhub.dost.gov.ph/smdcanega/dost_gemms/src/branch/Francis_Eugenio",
    },
    {
      title: "Sleep Sound Therapy Mobile Application",
      category: "Mobile",
      image: Project4,
      tech: ["Flutter", "Dart", "Bluetooth"],
      description: "Mobile app improving sleep quality through sound therapy and smart device integration.",
      link: "https://github.com/FrancisEugenio28/Sleep-Sound-Therapy-Mobile-App",
    },
    {
      title: "KUMPAS: Music Synthesizer",
      category: "Desktop",
      image: Project5,
      tech: ["Python", "MediaPipe", "OpenCV"],
      description: "Camera-based synthesizer that turns hand movements into musical notes in real-time.",
      link: "https://github.com/FrancisEugenio28/KUMPAS",
    },
    {
      title: "Sleep Sound Therapy 3D Casing",
      category: "Hardware",
      image: Project6,
      tech: ["AutoCAD", "3D Modeling"],
      description: "Precision engineered 3D casing for an embedded sleep therapy device.",
      link: "https://www.printables.com/model/1616011-sleep-sound-therapy-3d-model",
    },
  ];

  const categories = ["All", "Web", "Mobile", "Desktop", "Hardware"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-24 px-10 md:px-20 bg-[#f0eee4] dark:bg-[#121212] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[60px] font-bold text-x1st-primary"
          >
            My Projects
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? "bg-x1st-primary text-x2nd-primary shadow-lg" 
                    : "bg-white/50 dark:bg-white/5 text-x1st-primary dark:text-gray-400 hover:bg-white dark:hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-x1st-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-bold text-lg">{project.category}</span>
                  </div>
                </div>

                <div className="flex flex-col grow p-8 gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold text-x1st-primary dark:text-white leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-bold uppercase tracking-widest text-x1st-primary/60 dark:text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-x1st-primary/80 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-2 px-6 py-4 bg-x1st-primary text-x2nd-primary rounded-xl font-bold shadow-md hover:scale-105 active:scale-95 transition-all no-underline"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
