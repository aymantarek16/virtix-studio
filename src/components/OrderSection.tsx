import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  MessageSquareText,
  Phone,
  Palette,
} from "lucide-react";
import { Reveal } from "./Reveal";

const serviceTypes = [
  "تصميم جرافيكي",
  "تطوير موقع",
  "هوية بصرية",
  "تصميم مطبوعات",
  "إدارة محتوى سوشيال ميديا",
  "أخرى",
];

const highlights = [
  "رد سريع على الطلبات",
  "تنسيق واضح قبل التنفيذ",
  "اهتمام بالشكل والتفاصيل",
];

export const OrderSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    desc: "",
  });

  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      form.phone.trim().length >= 8 &&
      form.service.trim().length > 0
    );
  }, [form]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const phone = form.phone.trim();
    const service = form.service.trim();
    const desc = form.desc.trim();

    if (!name || !phone || !service) return;

    const message = encodeURIComponent(
      [
        "مرحبًا، أريد طلب خدمة من Virtix Studio",
        "",
        `الاسم: ${name}`,
        `رقم الهاتف: ${phone}`,
        `الخدمة المطلوبة: ${service}`,
        `تفاصيل الطلب: ${desc || "لم يتم إضافة تفاصيل"}`,
      ].join("\n")
    );

    window.open(`https://wa.me/201148618451?text=${message}`, "_blank");
  };

  return (
    <section
      id="order"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(6,182,212,0.12),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:58px_58px]" />

      {/* Glow */}
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-[-90px] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left content */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                ابدأ طلبك
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.3] text-white ">
                خلّينا نحول فكرتك إلى{" "}
                <span className="inline-block whitespace-nowrap bg-gradient-to-r from-fuchsia-400 via-primary to-cyan-400 bg-clip-text text-transparent">
                  تنفيذ
                </span>{" "}
                يلفت الانتباه
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
                املأ البيانات الأساسية، واكتب باختصار ما تحتاجه، وسيتم فتح
                رسالة واتساب جاهزة ومنظمة لتسهيل بدء التواصل بسرعة ووضوح.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {highlights.map((item, index) => (
                <Reveal key={item} delay={0.25 + index * 0.08}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-sm sm:text-base text-white/75 font-cairo">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45}>
              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                    <MessageSquareText className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-tajawal text-lg font-bold text-white">
                      تواصل مباشر وواضح
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/60 font-cairo">
                      بدل فورم معقد أو خطوات كثيرة، سيتم تجهيز رسالة مرتبة فيها
                      اسمك، رقمك، نوع الخدمة، ووصف مختصر لطلبك.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} direction="left">
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />

              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                  <Palette className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-tajawal text-2xl font-black text-white">
                    اطلب خدمتك الآن
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    أدخل بياناتك الأساسية وسنبدأ من هنا
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/65">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                    placeholder="اكتب اسمك"
                    required
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/65">
                    رقم الهاتف
                  </label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] pr-11 pl-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                      placeholder="مثال: 01012345678"
                      required
                      maxLength={20}
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/65">
                    نوع الخدمة
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                    required
                  >
                    <option value="" className="bg-[#0b0b0f] text-white/60">
                      اختر الخدمة
                    </option>
                    {serviceTypes.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#0b0b0f] text-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/65">
                    تفاصيل الطلب
                  </label>
                  <textarea
                    value={form.desc}
                    onChange={(e) =>
                      setForm({ ...form, desc: e.target.value })
                    }
                    className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white placeholder:text-white/30 outline-none transition-all duration-300 resize-none focus:border-primary/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-primary/20"
                    placeholder="اكتب المطلوب بشكل مختصر وواضح..."
                    maxLength={1000}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  // className="group mt-2 inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 text-base font-bold text-white shadow-[0_12px_36px_rgba(139,92,246,0.30)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_16px_42px_rgba(139,92,246,0.38)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
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
                  أرسل عبر واتساب
                </button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};