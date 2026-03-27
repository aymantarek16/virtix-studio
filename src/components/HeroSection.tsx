import { motion } from "framer-motion";
import { ChevronDown, Sparkles, ArrowUpRight } from "lucide-react";
import NeonTrail from "./NeonTrail";

const heroBg = "/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <NeonTrail />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Virtix Studio Background"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.18),transparent_30%),linear-gradient(to_top,rgba(0,0,0,0.88),rgba(0,0,0,0.45),rgba(0,0,0,0.7))]" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating glow blobs */}
      <div className="absolute -top-10 left-[-5%] w-72 h-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-[32rem] h-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-xl px-4 py-2 text-sm sm:text-base text-white/90 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <Sparkles className="w-4 h-4 text-primary" />
              نصمم هويات بصرية ومحتوى يخطف الانتباه
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <h1 className="font-tajawal font-black leading-[0.95] tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem]">
              نصنع حضورًا
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.35)]">
                  بصريًا لا يُنسى
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-white/70 font-cairo leading-relaxed"
          >
            نحول فكرتك إلى هوية رقمية قوية بتصميمات عصرية، جذابة،
            ومبنية لتترك انطباعًا حقيقيًا من أول نظرة.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#order"
              className="group inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 shadow-[0_10px_40px_rgba(139,92,246,0.35)] hover:scale-[1.03] transition-all duration-300"
            >
              ابدأ مشروعك الآن
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="rounded-2xl border border-white/15 bg-white/8 backdrop-blur-xl px-8 py-4 text-lg font-bold text-white hover:bg-white/12 hover:border-white/25 transition-all duration-300"
            >
              تصفح أعمالنا
            </a>
          </motion.div>

          {/* Stats / trust pills */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              "تصاميم عصرية",
              "هوية بصرية احترافية",
              "سرعة في التنفيذ",
              "نتائج تلفت الانتباه",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm sm:text-base text-white/75 backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <ChevronDown className="text-white/70" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};