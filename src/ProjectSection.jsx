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
      titleFontSize: "text-[28px]",
      titleFontFamily: "[font-family:'Geologica-Regular',Helvetica]",
      titleFontWeight: "font-normal",
      gap: "gap-[55px]",
      imageAspect: "aspect-[1.29]",
      imageHeight: "h-[731px]",
      dotsCount: 2,
      titleGap: "gap-[120px]",
    },
    {
      title: "Simple Registration form",
      image: Project2,
      description:
        "A PHP and HTML web application that allows users to register with their personal, contact, and address information stored in a MySQL database. It includes a secure login system with password hashing and session management for user authentication.",
      link: "https://github.com/Flere2134/registration-form",
      titleFontSize: "text-[28px]",
      titleFontFamily: "[font-family:'Geologica-Bold',Helvetica]",
      titleFontWeight: "font-bold",
      gap: "gap-[55px]",
      imageAspect: "aspect-[2.18]",
      imageHeight: "h-[432px]",
      dotsCount: 2,
      titleGap: "gap-[150px]",
    },
    {
      title: "DOST General Maintenance Management System",
      image: Project3,
      description:
        "A Laravel-based facility management system that enables organizations to track assets, schedule maintenance tasks, and coordinate staff through a centralized dashboard. It features role-based access control to manage personnel assignments and streamline overall building operations.",
      link: "https://devhub.dost.gov.ph/smdcanega/dost_gemms/src/branch/Francis_Eugenio",
      titleFontSize: "text-[21px]",
      titleFontFamily: "[font-family:'Geologica-Regular',Helvetica]",
      titleFontWeight: "font-normal",
      gap: "gap-[55px]",
      imageAspect: "aspect-[2.17]",
      imageHeight: "h-[433px]",
      dotsCount: 3,
      titleGap: "gap-[120px]",
      titleWidth: "w-[445px]",
      titleMargin: "mt-[-5.00px]",
      titleAlign: "text-center",
    },
    {
      title: "Sleep Sound Therapy Mobile Application",
      image: Project4,
      description:
        "A Flutter mobile app that improves sleep quality through sound therapy, offering various audio categories like classical, nature, and binaural beats. It also allows users to track sleep data and connect to smart devices via Bluetooth for an integrated sleep therapy experience.",
      link: "https://github.com/FrancisEugenio28/Sleep-Sound-Therapy-Mobile-App",
      titleFontSize: "text-[23px]",
      titleFontFamily: "[font-family:'Geologica-Regular',Helvetica]",
      titleFontWeight: "font-normal",
      gap: "gap-[55px]",
      imageAspect: "aspect-[1.77]",
      imageHeight: "",
      dotsCount: 3,
      titleGap: "gap-[120px]",
      titleWidth: "w-[471px]",
      titleAlign: "text-center",
      imageWrapper: true,
    },
    {
      title: "KUMPAS: Camera-based Proximity Controlled Music Synthesizer",
      image: Project5,
      description:
        "A Python app that turns your webcam into a virtual piano by tracking your index finger using MediaPipe, mapping its horizontal position to musical notes and vertical position to volume in real time.",
      link: "https://github.com/FrancisEugenio28/KUMPAS",
      titleFontSize: "text-[21px]",
      titleFontFamily: "[font-family:'Geologica-Regular',Helvetica]",
      titleFontWeight: "font-normal",
      gap: "gap-[65px]",
      imageAspect: "aspect-[1.77]",
      imageHeight: "",
      dotsCount: 3,
      titleGap: "gap-[120px]",
      titleWidth: "w-[471px]",
      titleMargin: "mt-[-5.00px]",
      titleAlign: "text-center",
      imageWrapper: true,
    },
    {
      title: "Sleep Sound Therapy 3D Model Casing",
      image: Project6,
      description:
        'A 3D model for our thesis project "Embedded Sound Therapy: Engineering Smart Devices for Sleep Quality Improvement".',
      link: "https://www.printables.com/model/1616011-sleep-sound-therapy-3d-model",
      titleFontSize: "text-[21px]",
      titleFontFamily: "[font-family:'Geologica-Regular',Helvetica]",
      titleFontWeight: "font-normal",
      gap: "gap-[65px]",
      imageAspect: "aspect-[1.55]",
      imageHeight: "",
      dotsCount: 3,
      titleGap: "gap-[120px]",
      titleWidth: "w-[471px]",
      titleAlign: "text-center",
      imageWrapper: true,
    },
  ];

  return (
    <section className="flex w-full min-h-[990px] relative flex-col items-start gap-[30px] px-[157px] py-20 bg-white overflow-x-scroll">
      <h2 className="w-[1690px] relative mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[80px] tracking-[0] leading-[normal]">
        My Projects
      </h2>

      <img
        className="relative w-[1620px] h-[3px]"
        alt="Divider"
        src={vector2}
      />

      <div className="flex items-center gap-2.5 px-0 py-2 relative self-stretch w-full flex-[0_0_auto] overflow-hidden overflow-x-scroll">
        <div className="overflow-x-scroll inline-flex items-center gap-10 relative flex-[0_0_auto]">
          {projects.map((project, index) => (
            <article
              key={index}
              className="flex flex-col w-[941px] h-[650px] items-start relative bg-bg rounded-[30px] overflow-hidden border-[5px] border-solid border-black"
            >
              <header
                className={`${project.dotsCount === 2 ? "gap-[150px]" : "flex"} ${project.dotsCount === 3 ? `items-center ${project.titleGap} px-[35px] py-[26px]` : "w-[941px] gap-[120px] flex items-center px-[35px] py-[26px]"} relative self-stretch w-full flex-[0_0_auto] bg-x-3rd border-[5px] border-solid border-black`}
              >
                <div className="relative w-[170px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#d9d9d9] rounded-[25px] border-[5px] border-solid border-black aspect-[1] opacity-50" />
                  <div className="absolute top-0 left-[120px] w-[50px] h-[50px] bg-[#d9d9d9] rounded-[25px] border-[5px] border-solid border-black aspect-[1] opacity-50" />
                  {project.dotsCount === 3 && (
                    <div className="absolute top-0.5 left-[60px] w-[50px] h-[50px] bg-[#d9d9d9] rounded-[25px] border-[5px] border-solid border-black aspect-[1] opacity-50" />
                  )}
                </div>

                <h3
                  className={`relative ${project.titleWidth || "w-fit"} ${project.titleMargin || ""} ${project.titleFontFamily} ${project.titleFontWeight} text-black ${project.titleFontSize} ${project.titleAlign || ""} tracking-[0] leading-[normal]`}
                >
                  {project.title}
                </h3>

                {project.dotsCount === 2 && (
                  <div className="absolute top-[26px] left-[95px] w-[50px] h-[50px] bg-[#d9d9d9] rounded-[25px] border-[5px] border-solid border-black aspect-[1] opacity-50" />
                )}
              </header>

              <div className="flex flex-col h-[290px] items-start gap-2.5 relative self-stretch w-full overflow-hidden">
                {project.imageWrapper ? (
                  <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <img
                      className={`${project.imageHeight ? "" : "object-cover"} relative self-stretch w-full ${project.imageAspect}`}
                      alt={project.title}
                      src={project.image}
                    />
                  </div>
                ) : (
                  <img
                    className={`relative w-[941px] ${project.imageHeight} ${project.imageAspect} object-cover`}
                    alt={project.title}
                    src={project.image}
                  />
                )}
              </div>

              <div
                className={`flex flex-col h-[227px] items-start ${project.gap} px-[78px] py-[34px] relative self-stretch w-full`}
              >
                <p className="relative w-[785px] mt-[-1.00px] [font-family:'Geologica-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                  {project.description}
                </p>

                <a
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-[0_0_auto] bg-x1st-primary rounded-[10px]"
                  href={project.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`View ${project.title} project`}
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x2nd-primary text-2xl tracking-[0] leading-[normal]">
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
