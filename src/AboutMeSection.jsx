import ellipse1 from "./assets/ellipse-1.png";
import vector2 from "./assets/vector-2.svg";

export const AboutMeSection = () => {
  return (
    <section className="flex w-[1920px] h-[837px] relative items-center gap-[100px] px-[150px] py-20 bg-[#f7f5f2]">
      <img
        className="relative w-[500px] h-[500px] aspect-[1]"
        alt="Profile picture"
        src={ellipse1}
      />

      <div className="w-[1000px] gap-2.5 flex flex-col items-start relative">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[80px] tracking-[0] leading-[normal]">
          About Me
        </h2>

        <img
          className="relative w-[1000.02px] h-2 ml-[-0.01px] mr-[-0.01px]"
          alt=""
          src={vector2}
          role="presentation"
        />

        <p className="relative self-stretch [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-[32px] text-justify tracking-[0] leading-[normal]">
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
      </div>
    </section>
  );
};