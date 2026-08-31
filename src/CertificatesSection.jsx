import { motion as Motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";

export const CertificatesSection = () => {
  const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

  const credentials = [
    {
      title: "IBM Generative AI in Action",
      issuer: "IBM SkillsBuild",
      issued: "August 2026",
      badge: publicAsset("awards/IBM_generativeAI.jpg"),
      link: "https://www.credly.com/badges/7eeebaf6-a91c-48e1-a1ee-33267f209077/public_url",
    },
    {
      title: "AWS Fundamentals of Generative AI",
      issuer: "AWS Skill Builder",
      issued: "August 2026",
      badge: publicAsset("awards/AWS_fundamentalAI.jpg"),
      link: "https://skillbuilder.aws/learn/FKXM21R555/fundamentals-of-generative-ai/ZFX96NREH4",
    }
  ];

  return (
    <section
      id="certificates"
      className="py-16 md:py-16 px-6 md:px-20 bg-bg dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16"
        >
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-x1st-primary/60 dark:text-gray-400 mb-3">
              <BadgeCheck size={18} /> Professional development
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-x1st-primary">
              Certificates &amp; Badges
            </h2>
          </div>
          <p className="max-w-md text-x1st-primary/75 dark:text-gray-300 leading-relaxed">
            A growing collection of verified learning milestones and technical achievements.
          </p>
        </Motion.div>

        {credentials.length > 0 ? (
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 gap-6 md:gap-8"
          >
            {credentials.map((credential) => (
              <Motion.article
                key={credential.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className="w-full p-5 md:p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-lg border border-transparent hover:border-x1st-primary/20 transition-all"
              >
                <div className="flex items-start gap-6 md:gap-20">
                  {credential.badge ? (
                    <img
                      src={credential.badge}
                      alt={`${credential.title} badge`}
                      className="w-45 h-45 md:w-47 md:h-44 shrink-0 object-contain rounded-2xl"
                    />
                  ) : (
                    <div className="w-32 h-32 md:w-50 md:h-50 shrink-0 flex items-center justify-center rounded-2xl bg-bg dark:bg-gray-700">
                      <Award className="w-12 h-12 text-x1st-primary" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="pt-2 text-xl md:text-2xl font-bold text-x1st-primary dark:text-white leading-tight">{credential.title}</h3>
                    <p className="mt-2 font-semibold text-x1st-primary/70 dark:text-gray-300">{credential.issuer}</p>
                    <p className="mt-1 text-sm text-x1st-primary/60 dark:text-gray-400">Issued {credential.issued}</p>
                    {credential.link && (
                      <a
                        href={credential.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 font-bold text-x1st-primary dark:text-white hover:opacity-70 transition-opacity"
                      >
                        View credential <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.article>
            ))}
          </Motion.div>
        ) : (
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 md:p-10 bg-white/60 dark:bg-gray-800 rounded-3xl border border-x1st-primary/10"
          >
            <div className="shrink-0 p-4 bg-x1st-primary text-x2nd-primary rounded-2xl">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-x1st-primary dark:text-white">Credential highlights coming soon</h3>
              <p className="mt-2 text-x1st-primary/75 dark:text-gray-300 leading-relaxed">
                This space is ready for verified certificates, digital badges, and links to their issuers.
              </p>
            </div>
          </Motion.div>
        )}
      </div>
    </section>
  );
};
