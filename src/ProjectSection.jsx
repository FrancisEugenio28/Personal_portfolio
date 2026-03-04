import Project3 from "./assets/projects/dostgemms_pic.svg";
import Project1 from "./assets/projects/covid_pic.svg";
import Project2 from "./assets/projects/registration_pic.svg";
import Project6 from "./assets/projects/soundtherapy3D_pic.svg";
import Project4 from "./assets/projects/sleeptherapy_pic.svg";
import Project5 from "./assets/projects/kumpas_pic.svg";
import vector2 from "./assets/projects/vector2.svg";

export const ProjectsSection = () => {

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

  return (
    <section className="flex w-full relative flex-col items-start gap-8 px-10 md:px-[150px] py-[70px] bg-white">
      <h2 className="w-full relative mt-[-40.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[60px] md:text-[60px] tracking-[0] leading-[normal]">
        My Projects
      </h2>

      <img
        className="relative w-full h-[3px] object-cover mb-4"
        alt="Divider"
        src={vector2}
      />

      <div className="flex items-center gap-10 px-0 py-[-1000px] relative self-stretch w-full overflow-hidden overflow-x-auto pb-8">
        <div className="inline-flex items-stretch gap-10 relative">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col w-[550px] min-h-[250px] bg-bg rounded-[30px] border-[5px] border-solid border-black overflow-hidden shrink-0"
            >
              <header className="flex items-center gap-6 px-8 py-4 bg-x-3rd border-b-[5px] border-black shrink-0 h-[70px]">
                <div className="flex gap-2 shrink-0">
                  <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
                  <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
                  <div className="w-6 h-6 bg-[#d9d9d9] rounded-full border-[4px] border-black opacity-60" />
                </div>
                <h3 className="[font-family:'Geologica-Bold',Helvetica] font-bold text-black text-xl text-center leading-snug line-clamp-3">
                  {project.title}
                </h3>
              </header>

              <div className="w-full h-[125px] border-b-[5px] border-black shrink-0 bg-white">
                <img
                  className="w-full h-full object-cover"
                  alt={project.title}
                  src={project.image}
                />
              </div>

              <div className="flex flex-col grow justify-between p-6 gap-6">
                <p className="[font-family:'Geologica-Regular',Helvetica] font-normal text-black text-[15px] leading-relaxed">
                  {project.description}
                </p>

                <a
                  className="inline-flex items-center justify-center px-6 py-3 bg-x1st-primary rounded-[10px] self-start transition-opacity hover:opacity-90"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`View ${project.title} project`}
                >
                  <span className="[font-family:'Geologica-Bold',Helvetica] font-bold text-x2nd-primary text-l">
                    View Project
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};