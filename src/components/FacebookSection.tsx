import { Facebook, Sparkles, ArrowUpLeft } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const facebookUrl = "https://www.facebook.com/share/14RuLDk5V8W/";

export const FacebookSection = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

      {/* Glow blobs */}
      <div className="absolute left-[-90px] top-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-[-90px] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Content */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                  <Sparkles className="h-4 w-4 text-primary" />
                  تابعنا على فيسبوك
                </div>

                <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.4] text-white">
                  <span className="block">شاهد أحدث</span>

                  <span className="block mx-2 bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent">
                    أعمالنا
                  </span>

                  <span className="block">ومحتوانا</span>
                </h2>

                <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
                  على صفحتنا ننشر نماذج من الشغل، تحديثات جديدة، وأفكار بصرية
                  تساعدك تشوف مستوى التنفيذ بشكل أوضح قبل ما تبدأ.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["نماذج أعمال", "تحديثات جديدة", "محتوى بصري احترافي"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75 backdrop-blur-xl"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-8">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 rounded-2xl 
bg-gradient-to-r from-[#1877F2] via-[#166FE5] to-[#0d5bd7]
px-7 py-4 text-base sm:text-lg font-bold text-white 
shadow-[0_12px_30px_rgba(24,119,242,0.35)]
transition-all duration-300 
hover:scale-[1.02] 
hover:shadow-[0_16px_40px_rgba(24,119,242,0.45)]"
                    // className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 px-7 py-4 text-base sm:text-lg font-bold text-white shadow-[0_12px_36px_rgba(139,92,246,0.30)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_42px_rgba(139,92,246,0.38)]"
                  >
                    <Facebook className="h-5 w-5" />
                    زيارة الصفحة على فيسبوك
                    <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>

              {/* Visual card */}
              <div className="relative">
                <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-tajawal text-lg font-bold text-white">
                        Virtix Studio
                      </p>
                      <p className="text-sm text-white/45">Facebook Presence</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/70 leading-relaxed font-cairo">
                        محتوى يعرض مستوى التنفيذ الحقيقي بدل الكلام الكثير.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/70 leading-relaxed font-cairo">
                        تابع الجديد أولًا بأول وشاهد الأعمال المنشورة بشكل مباشر.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-sm text-white/70 leading-relaxed font-cairo">
                        الصفحة مناسبة لو تريد تأخذ فكرة أسرع عن الأسلوب والجودة.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};