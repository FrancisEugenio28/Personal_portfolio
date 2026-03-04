import Instagram_foot from "./assets/footer/instagram-icon.svg";
import Linkedin_foot from "./assets/footer/linkedin-icon.svg";
import Facebook_foot from "./assets/footer/facebook-icon.svg";
import Github_foot from "./assets/footer/github-icon.svg";


export const FooterSection = () => {
  const socialLinks = [
    {
      href: "https://web.facebook.com/balong.eugenio/",
      icon: Facebook_foot,
      alt: "Facebook",
      width: "w-[25px]",
      height: "h-[24.94px]",
    },
    {
      href: "https://www.instagram.com/oninoninoninoninonin/",
      icon: Instagram_foot,
      alt: "Instagram",
      width: "w-[22.5px]",
      height: "h-[24.75px]",
    },
    {
      href: "https://github.com/FrancisEugenio28",
      icon: Github_foot,
      alt: "GitHub",
      width: "w-[30px]",
      height: "h-[30px]",
    },
    {
      href: "https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/",
      icon: Linkedin_foot,
      alt: "LinkedIn",
      width: "w-[24.85px]",
      height: "h-[25px]",
    },
  ];

  return (
    <footer className="flex w-full min-h-[100px] relative items-center justify-between py-5 bg-x1st-primary">
      <div className="flex w-[233px] items-center gap-2.5 p-2.5 relative">
        <p className="relative w-fit ml-5 mt-[-1.00px] [font-family:'Geologica-Regular',Helvetica] font-normal text-x2nd-primary text-[15px] tracking-[0] leading-[normal]">
          © Eugenio, 2026
        </p>
      </div>

      <div className="mt-[-1.00px] text-x2nd-primary relative w-fit [font-family:'Geologica-Bold',Helvetica] font-bold text-[25px] tracking-[0] leading-[normal]">
        francis.
      </div>

      <nav
        className="mr-10 mb-[-10.00px] inline-flex items-center gap-10 relative flex-[0_0_auto]"
        aria-label="Social media links"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.alt}
            className={
              link.isBackground
                ? `relative ${link.width} ${link.height} bg-[url(/clip-path-group.png)] bg-[100%_100%]`
                : undefined
            }
          >
            {link.icon && (
              <img
                className={`relative ${link.width} ${link.height} block`}
                alt={link.alt}
                src={link.icon}
              />
            )}
          </a>
        ))}
      </nav>
    </footer>
  );
};
