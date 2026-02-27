import image from "./assets/image.svg";
import vector3 from "./assets/vector-3.svg";
import vector from "./assets/vector.svg";

export const FooterSection = () => {
  const socialLinks = [
    {
      href: "https://web.facebook.com/balong.eugenio/",
      icon: vector,
      alt: "Facebook",
      width: "w-[50px]",
      height: "h-[49.88px]",
    },
    {
      href: "https://www.instagram.com/oninoninoninoninonin/",
      icon: image,
      alt: "Instagram",
      width: "w-[45px]",
      height: "h-[49.5px]",
    },
    {
      href: "https://github.com/FrancisEugenio28",
      icon: null,
      alt: "GitHub",
      width: "w-[60px]",
      height: "h-[60px]",
      isBackground: true,
    },
    {
      href: "https://www.linkedin.com/in/eugenio-francis-ni%C3%B1o-a-164b76359/",
      icon: vector3,
      alt: "LinkedIn",
      width: "w-[49.7px]",
      height: "h-[50px]",
    },
  ];

  return (
    <footer className="flex w-[1920px] h-[210px] relative items-start gap-[515px] p-20 bg-x1st-primary">
      <div className="flex w-[233px] items-center gap-2.5 p-2.5 relative">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Geologica-Regular',Helvetica] font-normal text-x2nd-primary text-2xl tracking-[0] leading-[normal]">
          © Eugenio, 2026
        </p>
      </div>

      <div className="mt-[-1.00px] text-x2nd-primary relative w-fit [font-family:'Geologica-Bold',Helvetica] font-bold text-[40px] tracking-[0] leading-[normal]">
        francis.
      </div>

      <nav
        className="mb-[-10.00px] inline-flex items-center gap-10 relative flex-[0_0_auto]"
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
