import { useMemo, useState } from "react";
import { MessageSquareText, Clock3, Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const supportPoints = [
  {
    icon: Clock3,
    title: "رد واضح وسريع",
    desc: "نرتب التواصل بشكل مباشر بدون تعقيد أو خطوات كثيرة.",
  },
  {
    icon: ShieldCheck,
    title: "تواصل باحترام ووضوح",
    desc: "نهتم بفهم الطلب أو الملاحظة بدقة قبل أي خطوة.",
  },
  {
    icon: MessageSquareText,
    title: "استفسارات وملاحظات خاصة",
    desc: "مناسب لأي سؤال، ملاحظة، أو طلب مختلف عن الخدمات المعروضة.",
  },
];

export const ComplaintSection = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const isValid = useMemo(() => {
    return form.name.trim().length >= 2 && form.message.trim().length >= 8;
  }, [form]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const contact = form.contact.trim();
    const message = form.message.trim();

    if (!name || !message) return;

    const text = encodeURIComponent(
      [
        "مرحبًا، لدي استفسار / ملاحظة خاصة",
        "",
        `الاسم: ${name}`,
        `وسيلة التواصل: ${contact || "غير مذكورة"}`,
        `التفاصيل: ${message}`,
      ].join("\n")
    );

    window.open(`https://wa.me/201148618451?text=${text}`, "_blank");
    setForm({ name: "", contact: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.10),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative z-10 mx-auto px-4">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              تواصل إضافي
            </div>

            <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
              لديك   استفسار خاص
              <br />
              أو ملاحظة؟
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
              إذا كان لديك سؤال إضافي، ملاحظة، أو طلب مختلف عن الخدمات الموجودة،
              يمكنك إرساله مباشرة وسنطلع عليه بشكل واضح ومنظم.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-10">
          {supportPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-2xl">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-tajawal text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 font-cairo">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            whileHover={{ y: -3 }}
            className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/65">
                  الاسم
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                  placeholder="اكتب اسمك"
                  required
                  maxLength={100}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/65">
                  وسيلة تواصل
                </label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                  placeholder="واتساب أو بريد إلكتروني"
                  maxLength={255}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-white/65">
                الرسالة
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 resize-none focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                placeholder="اكتب استفسارك أو ملاحظتك بشكل واضح..."
                required
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className="group relative overflow-hidden mt-2 inline-flex h-14 w-full items-center justify-center gap-3 
rounded-2xl 
bg-gradient-to-r from-[#25D366] via-[#20c45a] to-[#1da851]
text-base font-bold text-white 
shadow-[0_12px_30px_rgba(37,211,102,0.35)] 
transition-all duration-300 
hover:scale-[1.01] 
hover:shadow-[0_16px_40px_rgba(37,211,102,0.45)] 
before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 before:opacity-0 before:transition 
group-hover:before:opacity-100
disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              <svg
                viewBox="0 0 32 32"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.7 2.188 8.18L0 32l7.625-2.152a15.944 15.944 0 0 0 8.375 2.385c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.1a13.01 13.01 0 0 1-6.64-1.83l-.475-.28-4.52 1.275 1.207-4.405-.31-.455A12.93 12.93 0 0 1 3.39 16.396C3.39 9.28 8.96 3.71 16.075 3.71s12.685 5.57 12.685 12.686-5.57 12.685-12.685 12.685zm7.27-9.53c-.397-.198-2.35-1.158-2.714-1.29-.364-.133-.63-.198-.896.198-.264.396-1.027 1.29-1.26 1.554-.232.264-.463.297-.86.1-.397-.198-1.678-.618-3.195-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.173-.808.178-.177.397-.463.595-.694.198-.232.264-.396.396-.66.133-.264.067-.496-.033-.694-.1-.198-.896-2.158-1.227-2.954-.322-.77-.65-.665-.896-.678l-.763-.014c-.264 0-.694.1-1.058.496-.364.396-1.39 1.36-1.39 3.312s1.422 3.84 1.62 4.104c.198.264 2.8 4.276 6.787 5.997.948.41 1.688.654 2.266.837.952.303 1.82.26 2.507.158.765-.114 2.35-.96 2.683-1.886.33-.925.33-1.72.232-1.886-.1-.165-.364-.264-.76-.463z" />
              </svg>

              إرسال عبر واتساب
            </button>
          </motion.form>
        </Reveal>
      </div>
    </section>
  );
};