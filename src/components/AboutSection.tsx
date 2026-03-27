import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Layers3, PenTool, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const servicesImg = "/services-main.jpg";

const features = [
  {
    icon: PenTool,
    title: "تصميم مدروس",
    text: "مش شغل شكله حلو فقط، لكن تصميم يخدم الهدف ويوصل الرسالة بوضوح.",
  },
  {
    icon: Layers3,
    title: "هوية متماسكة",
    text: "نبني حضور بصري ثابت وقوي يدي البراند شكل احترافي في كل نقطة ظهور.",
  },
  {
    icon: Rocket,
    title: "تنفيذ يلفت النظر",
    text: "نهتم بالتفاصيل، الحركة، والإخراج النهائي بحيث النتيجة تطلع أقوى من المتوقع.",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.10),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                من نحن
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.05] text-white">
                نصمم حضورًا
                <br />
                <span className="bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent">
                  بصريًا يترك أثرًا
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
                في Virtix Studio لا نتعامل مع التصميم كزينة، بل كأداة تبني
                الانطباع، وتوضح القيمة، وتمنح البراند شكلًا أقوى وأكثر ثقة.
                ندمج بين الذوق البصري والفهم العملي لنصنع نتائج تليق بالحضور
                الذي تريد الوصول إليه.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {features.map((item, i) => (
                <Reveal key={item.title} delay={0.25 + i * 0.1}>
                  <motion.div
                    whileHover={{ x: -4 }}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-tajawal text-lg sm:text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm sm:text-base leading-relaxed text-white/60 font-cairo">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Visual */}
          <Reveal direction="left" delay={0.2}>
            <div className="relative">
              {/* main glow */}
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />

              <motion.div
                whileHover={{ scale: 1.015, y: -4 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <img
                  src={servicesImg}
                  alt="Virtix Studio"
                  className="h-full w-full rounded-[1.4rem] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />

                {/* dark image overlay */}
                <div className="pointer-events-none absolute inset-3 rounded-[1.4rem] bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>

              {/* floating card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="absolute -bottom-6 right-4 sm:right-8 rounded-2xl border border-white/10 bg-black/55 px-5 py-4 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-tajawal text-base font-bold text-white">
                      جودة بصرية محسوبة
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/60 font-cairo">
                      نركز على الشكل، الرسالة، والانطباع النهائي معًا.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};