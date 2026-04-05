import { motion } from "framer-motion";
import {
  Palette,
  Fingerprint,
  Megaphone,
  Sparkles,
  ArrowUpLeft,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "التصميم الجرافيكي",
    desc: "تصميمات جذابة ومصقولة بصريًا تساعد البراند على الظهور بشكل أقوى وأكثر احترافية.",
    points: ["بوستات سوشيال ميديا", "بنرات وإعلانات", "تصاميم دعائية حديثة"],
  },
  {
    number: "02",
    icon: Fingerprint,
    title: "الهوية البصرية",
    desc: "بناء هوية بصرية متماسكة تمنح مشروعك شكلًا واضحًا ومميزًا يسهل تذكره.",
    points: ["تصميم شعارات", "ألوان وخطوط", "دليل بصري متكامل"],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "التسويق الرقمي",
    desc: "محتوى وتسويق بصري يدعم الانتشار، ويجعل البراند أكثر حضورًا أمام الجمهور المستهدف.",
    points: ["محتوى بصري", "تصميم إعلانات", "تحسين الظهور الرقمي"],
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.14),transparent_26%),radial-gradient(circle_at_85%_25%,rgba(6,182,212,0.12),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:58px_58px]" />

      {/* Glow blobs */}
      <div className="absolute left-[-80px] top-20 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-[-90px] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              خدماتنا
            </div>

            <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.3] text-white text-center">
              خدمات مصممة لتمنح
              <br />
              <span className="inline-block mx-2 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]">
                البراند
              </span>
              حضورًا أقوى
            </h2>

          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8 lg:p-9 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                {/* top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <span className="font-tajawal text-sm font-bold tracking-[0.2em] text-white/30">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-tajawal text-2xl sm:text-3xl font-black text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60 font-cairo">
                  {service.desc}
                </p>

                <div className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-sm sm:text-base text-white/75 font-cairo">
                        {point}
                      </span>
                      <ArrowUpLeft className="h-4 w-4 text-primary/80 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  ))}
                </div>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-white/35">Virtix Studio</span>
                  <span className="text-sm text-primary/80">Creative Service</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};