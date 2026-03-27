import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Users, Clock, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "مشروع منجز",
    desc: "تنفيذات متنوعة بهوية قوية ولمسة بصرية حديثة",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "عميل سعيد",
    desc: "تجارب ناجحة ونتائج صنعت فرقًا حقيقيًا",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "سنوات خبرة",
    desc: "فهم أعمق للسوق والتصميم وبناء الصورة البصرية",
  },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return (
    <span
      ref={ref}
      className="font-tajawal text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white"
    >
      {count}
      <span className="bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent">
        {suffix}
      </span>
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.12),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent,rgba(255,255,255,0.02))]" />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:58px_58px]" />

      {/* Glow blobs */}
      <div className="absolute top-10 left-[-80px] h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              أرقام تعكس جودة العمل
            </div>

            <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
              نتائج تتكلم
              <span className="mx-2 bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent">
                عنّا
              </span>
              قبل الكلام
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
              مش مجرد أرقام محطوطة للزينة، دي مؤشرات على شغل متراكم،
              وثقة اتبنت، وتنفيذ يطلع بشكل يليق بالبراند.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.25)]"
              >
                {/* top glow */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary backdrop-blur-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <stat.icon className="h-6 w-6" />
                  </div>

                  <span className="text-sm text-white/35 font-medium">
                    0{i + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-tajawal">
                  {stat.label}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/60 font-cairo">
                  {stat.desc}
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-white/40">Virtix Studio</span>
                  <span className="text-sm text-primary/80">Premium Quality</span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};