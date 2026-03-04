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

  return (
    <section className="flex w-full min-h-[809px] relative flex-col items-start gap-[250px] pt-20 pb-[60px] px-[150px] bg-breaker">
      <div className="relative w-[1620px] h-[695px] mb-[-26.00px]">
        <div className="flex flex-col w-full h-[695px] items-start gap-2.5 relative">
          <h2 className="self-stretch relative mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[80px] tracking-[0] leading-[normal]">
            My Skills
          </h2>

          <img
            className="relative w-[1620.01px] h-2"
            alt=""
            src={vector1}
            role="presentation"
          />

          <div className="relative self-stretch h-[688px] mb-[-115.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-4xl text-justify tracking-[0] leading-[50px]">
            <h3 className="[font-family:'Geologica-Bold',Helvetica] font-bold text-[#5b4c33] text-4xl tracking-[0] leading-[50px]">
              Technical Skills:
            </h3>

            <ul className="text-[28px] list-none">
              {technicalSkills.map((skill, index) => (
                <li key={index} className="leading-[50px]">
                  {skill}
                </li>
              ))}
            </ul>

            <div className="text-[28px] leading-[50px]">
              <br />
            </div>

            <h3 className="[font-family:'Geologica-Bold',Helvetica] font-bold text-[#5b4c33] text-4xl tracking-[0] leading-[50px]">
              Soft Skills:
            </h3>

            <ul className="text-[28px] list-none">
              {softSkills.map((skill, index) => (
                <li key={index} className="leading-[50px]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
