import { AboutMeSection } from "./AboutMeSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";
import { SkillsSection } from "./SkillsSection";
import image1 from "./assets/image-1.png";
import image2 from "./assets/image-2.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";
import image5 from "./assets/image-5.png";
import image8 from "./assets/image-8.png";
import image9 from "./assets/image-9.png";
import image16 from "./assets/image-16.png";
import image17 from "./assets/image-17.png";
import image18 from "./assets/image-18.png";
import vector7 from "./assets/vector-7.svg";

export const Homepage = () => {
  const techLogos = [
    {
      src: image1,
      alt: "Technology logo 1",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image2,
      alt: "Technology logo 2",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image3,
      alt: "Technology logo 3",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image9,
      alt: "Technology logo 4",
      aspectRatio: "aspect-[0.88]",
      width: "w-[88px]",
    },
    {
      src: image4,
      alt: "Technology logo 5",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image5,
      alt: "Technology logo 6",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image16,
      alt: "Technology logo 7",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image8,
      alt: "Technology logo 8",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image18,
      alt: "Technology logo 9",
      aspectRatio: "aspect-[1]",
      width: "w-[100px]",
    },
    {
      src: image17,
      alt: "Technology logo 10",
      aspectRatio: "aspect-[0.89]",
      width: "w-[89px]",
    },
  ];

  return (
    <div className="bg-[#ffffff] w-full min-w-[1920px] min-h-[4015px] flex flex-col">
      <header className="flex w-[1920px] h-[99px] relative flex-col items-center justify-center gap-2.5 p-2.5 bg-x2nd-primary">
        <nav className="w-[1920px] h-[82px] items-center gap-[1550px] px-20 py-2.5 mt-[-1.50px] mb-[-1.50px] ml-[-10.00px] mr-[-10.00px] flex relative">
          <h1 className="text-x1st-primary relative w-fit [font-family:'Geologica-Bold',Helvetica] font-bold text-[40px] tracking-[0] leading-[normal]">
            francis.
          </h1>

          <button
            className="relative w-[50px] h-[50px] aspect-[1]"
            aria-label="Menu"
          >
            <img
              className="absolute w-[87.50%] h-[75.00%] top-[25.00%] left-[12.50%]"
              alt=""
              src={vector7}
            />
          </button>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <section
          className="flex w-[1920px] h-[180px] relative items-center justify-center gap-[90px] px-0 py-10 bg-breaker"
          aria-label="Technologies"
        >
          {techLogos.map((logo, index) => (
            <img
              key={index}
              className={`${logo.width} ${logo.aspectRatio} relative h-[100px] object-cover`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </section>

        <ProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};
