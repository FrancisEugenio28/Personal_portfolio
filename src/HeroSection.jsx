import Facebook from "./assets/hero/facebook_hero.svg";
import Instagram from "./assets/hero/instagram_hero.svg";
import Github from "./assets/hero/github_hero.svg";
import LinkedIn from "./assets/hero/linkedin_hero.svg";

export const HeroSection = () => {
  const socialLinks = [
    {
      href: "https://web.facebook.com/balong.eugenio/",
      icon: Facebook,
      alt: "Facebook",
      width: "w-[50px]",
      position: "left-0",
    },
    {
      href: "https://www.instagram.com/oninoninoninoninonin/",
      icon: Instagram,
      alt: "Instagram",
      width: "w-[45px]",
      position: "left-40",
    },
    {
      href: "https://github.com/FrancisEugenio28",
      icon: Github,
      alt: "GitHub",
      width: "w-[60px]",
      position: "left-80",

    },
    {
      href: "https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/",
      icon: LinkedIn,
      alt: "LinkedIn",
      width: "w-[49.7px]",
      position: "left-[480px]",
    },
  ];

  return (
    <section
      className="flex self-end w-full min-h-[890px] relative items-center gap-[280px] px-[150px] py-[120px] bg-bg"
      aria-label="Hero Section"
    >
      <div className="flex flex-col w-[800px] items-end justify-center gap-2.5 relative mt-[-87.00px] mb-[-87.00px]">
        <div className="flex-col h-[824px] items-start gap-5 pt-20 pb-0 px-0 self-stretch w-full flex relative">
          <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x1st-primary text-8xl tracking-[0] leading-[normal]">
            Hello.
            <br />
            I&apos;m Francis Niño.
          </h1>

          <p className="relative self-stretch [font-family:'Geologica-Medium',Helvetica] font-medium text-x1st-primary text-base tracking-[0] leading-[normal]">
            Every new thing you learn is a fresh color on your palette. Explore
            endlessly, so you can create without limits.
          </p>

          <div className="flex flex-col w-[427px] items-start justify-end gap-[190px] pl-0 pr-2.5 pt-5 pb-2.5 relative flex-[0_0_auto]">
            <a
              href="#resume"
              className="inline-flex items-center justify-center gap-2.5 p-5 relative flex-[0_0_auto] bg-x1st-primary rounded-[20px] no-underline transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-x1st-primary focus:ring-offset-2"
              aria-label="Check my resume"
            >
              <span className="relative w-[279px] mt-[-1.00px] [font-family:'Geologica-Bold',Helvetica] font-bold text-x2nd-primary text-[32px] tracking-[0] leading-[normal]">
                check my resume
              </span>
            </a>

            <div className="justify-center gap-3.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Geologica-SemiBold',Helvetica] font-semibold text-x1st-primary text-[32px] tracking-[0] leading-[normal]">
                Connect with me:
              </h2>

              <nav
                className="relative w-[540px] h-[60px] mr-[-123.00px]"
                aria-label="Social media links"
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    className={`absolute top-0 ${link.position} w-[60px] h-[60px] ${link.isBackground ? "aspect-[1] bg-[url(/group.png)] bg-[100%_100%]" : "flex aspect-[1]"} transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-x1st-primary focus:ring-offset-2 rounded-lg`}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={link.alt}
                  >
                    {link.icon && (
                      <img
                        className={`flex-1 ${link.width}`}
                        alt={link.alt}
                        src={link.icon}
                      />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
