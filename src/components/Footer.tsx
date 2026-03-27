import { motion } from "framer-motion";
import {  Facebook, ArrowUpLeft } from "lucide-react";

const logoImg = "/logo.png";
const facebookUrl = "https://www.facebook.com/share/14RuLDk5V8W/";
const whatsappUrl = "https://wa.me/201148618451";

const quickLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "من نحن", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "أعمالنا", href: "#portfolio" },
  { name: "اطلب الآن", href: "#order" },
];

const serviceLinks = [
  "التصميم الجرافيكي",
  "الهوية البصرية",
  "تطوير المواقع",
  "تصميم المطبوعات",
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background pt-20 pb-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.10),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={logoImg}
                alt="Virtix Studio"
                className="h-12 w-12 rounded-2xl object-cover"
              />
              <div>
                <span className="font-tajawal text-xl font-black text-white">
                  Virtix
                </span>
                <span className="mr-2 font-tajawal text-xl font-black text-primary">
                  Studio
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/60 font-cairo">
              استوديو بصري يهتم بأن يخرج كل مشروع بشكل أقوى، أوضح، وأكثر
              احترافية، من الهوية البصرية إلى المواقع والمحتوى الرقمي.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl 
  border border-[#25D366]/20 
  bg-[#25D366]/10 
  text-[#25D366] 
  backdrop-blur-xl 
  transition-all duration-300 
  hover:bg-[#25D366] hover:text-white hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                >
                  <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.7 2.188 8.18L0 32l7.625-2.152a15.944 15.944 0 0 0 8.375 2.385c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.1a13.01 13.01 0 0 1-6.64-1.83l-.475-.28-4.52 1.275 1.207-4.405-.31-.455A12.93 12.93 0 0 1 3.39 16.396C3.39 9.28 8.96 3.71 16.075 3.71s12.685 5.57 12.685 12.686-5.57 12.685-12.685 12.685zm7.27-9.53c-.397-.198-2.35-1.158-2.714-1.29-.364-.133-.63-.198-.896.198-.264.396-1.027 1.29-1.26 1.554-.232.264-.463.297-.86.1-.397-.198-1.678-.618-3.195-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.173-.808.178-.177.397-.463.595-.694.198-.232.264-.396.396-.66.133-.264.067-.496-.033-.694-.1-.198-.896-2.158-1.227-2.954-.322-.77-.65-.665-.896-.678l-.763-.014c-.264 0-.694.1-1.058.496-.364.396-1.39 1.36-1.39 3.312s1.422 3.84 1.62 4.104c.198.264 2.8 4.276 6.787 5.997.948.41 1.688.654 2.266.837.952.303 1.82.26 2.507.158.765-.114 2.35-.96 2.683-1.886.33-.925.33-1.72.232-1.886-.1-.165-.364-.264-.76-.463z" />
                </svg>
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl 
  border border-[#1877F2]/20 
  bg-[#1877F2]/10 
  text-[#1877F2] 
  backdrop-blur-xl 
  transition-all duration-300 
  hover:bg-[#1877F2] hover:text-white hover:scale-105"
              >
                <Facebook
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-tajawal text-xl font-bold text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-primary"
                  >
                    <ArrowUpLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-tajawal text-xl font-bold text-white">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/60 font-cairo leading-relaxed"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact note */}
          <div>
            <h3 className="mb-5 font-tajawal text-xl font-bold text-white">
              تواصل مباشر
            </h3>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
              <p className="text-sm leading-relaxed text-white/60 font-cairo">
                للطلبات والاستفسارات، التواصل المباشر عبر واتساب هو الأسرع.
                ويمكنك أيضًا متابعة الصفحة على فيسبوك لرؤية الجديد.
              </p>

              <div className="mt-5 space-y-3">
                <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center justify-between rounded-2xl 
  border border-[#25D366]/20 
  bg-[#25D366]/10 
  px-4 py-3 text-sm text-[#25D366] 
  transition-all duration-300 
  hover:bg-[#25D366]/20 hover:text-white hover:border-[#25D366]/40"
>
  <span className="font-medium">واتساب</span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="16"
    height="16"
    fill="currentColor"
    className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
  >
    <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.7 2.188 8.18L0 32l7.625-2.152a15.944 15.944 0 0 0 8.375 2.385c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.1a13.01 13.01 0 0 1-6.64-1.83l-.475-.28-4.52 1.275 1.207-4.405-.31-.455A12.93 12.93 0 0 1 3.39 16.396C3.39 9.28 8.96 3.71 16.075 3.71s12.685 5.57 12.685 12.686-5.57 12.685-12.685 12.685zm7.27-9.53c-.397-.198-2.35-1.158-2.714-1.29-.364-.133-.63-.198-.896.198-.264.396-1.027 1.29-1.26 1.554-.232.264-.463.297-.86.1-.397-.198-1.678-.618-3.195-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.173-.808.178-.177.397-.463.595-.694.198-.232.264-.396.396-.66.133-.264.067-.496-.033-.694-.1-.198-.896-2.158-1.227-2.954-.322-.77-.65-.665-.896-.678l-.763-.014c-.264 0-.694.1-1.058.496-.364.396-1.39 1.36-1.39 3.312s1.422 3.84 1.62 4.104c.198.264 2.8 4.276 6.787 5.997.948.41 1.688.654 2.266.837.952.303 1.82.26 2.507.158.765-.114 2.35-.96 2.683-1.886.33-.925.33-1.72.232-1.886-.1-.165-.364-.264-.76-.463z" />
  </svg>
</a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl 
  border border-[#1877F2]/20 
  bg-[#1877F2]/10 
  px-4 py-3 text-sm text-[#1877F2] 
  transition-all duration-300 
  hover:bg-[#1877F2]/20 hover:text-white hover:border-[#1877F2]/40"
                >
                  <span className="font-medium">فيسبوك</span>

                  <Facebook className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/45 font-cairo">
            © {new Date().getFullYear()} Virtix Studio. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};