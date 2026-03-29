import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpLeft, X } from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  { id: "all", name: "الكل" },
  { id: "branding", name: "الهوية البصرية" },
  { id: "invitations", name: "الدعوات" },
  { id: "photo-transformation", name: "تحويل الصور" },
  { id: "print-design", name: "التصميمات المطبوعة" },
  { id: "social-media", name: "السوشيال ميديا" },
  { id: "web-design", name: "تصميم المواقع" },
];

const portfolioItems = [
  {
    id: 1,
    image: "/Portfolio/Social Media/Luminix.png",
    category: "social-media",
    title: "Luminix Campaign",
  },
  {
    id: 2,
    image: "/Portfolio/Social Media/Nebula.png",
    category: "social-media",
    title: "Nebula Campaign",
  },
  {
    id: 3,
    image: "/Portfolio/Social Media/Tidal Rush.png",
    category: "social-media",
    title: "Tidal Rush Campaign",
  },

  {
    id: 4,
    image: "/Portfolio/Branding/Elbiet Elmasry.jpg",
    category: "branding",
    title: "Elbiet Elmasry",
  },
  {
    id: 5,
    image: "/Portfolio/Branding/Gawhara.jpg",
    category: "branding",
    title: "Gawhara",
  },
  {
    id: 6,
    image: "/Portfolio/Invitations/Khaled_Mariem.jpg",
    category: "invitations",
    title: "Khaled & Mariem Invitation",
  },
  {
    id: 7,
    image: "/Portfolio/Invitations/Ahmed_Zinab.jpg",
    category: "invitations",
    title: "Ahmed & Zinab Invitation",
  },
  {
    id: 8,
    image: "/Portfolio/Photo Transformation/Before & After.png",
    category: "photo-transformation",
    title: "Before & After",
  },
  {
    id: 9,
    image: "/Portfolio/Print Design/Nova.jpg",
    category: "print-design",
    title: "Nova Print Design",
  },
  {
    id: 10,
    image: "/Portfolio/Print Design/Virtix.jpg",
    category: "print-design",
    title: "Virtix Print Design",
  },
  {
    id: 11,
    image: "/Portfolio/Social Media/Vortex.png",
    category: "social-media",
    title: "Vortex Campaign",
  },
  {
    id: 12,
    image: "/Portfolio/Social Media/Magic baker.jpg",
    category: "social-media",
    title: "Magic Baker",
  },
  {
    id: 13,
    image: "/Portfolio/Social Media/Koshary.jpg",
    category: "social-media",
    title: "Koshary Campaign",
  },
  {
    id: 14,
    image: "/Portfolio/Web Design/Baber shop.png",
    category: "web-design",
    title: "Barber Shop Website",
  },
  {
    id: 15,
    image: "/Portfolio/Web Design/Clinic ar.png",
    category: "web-design",
    title: "Clinic Arabic Website",
  },
  {
    id: 16,
    image: "/Portfolio/Web Design/Clinic Mocup.png",
    category: "web-design",
    title: "Clinic Mockup",
  },
];

export const PortfolioSection = () => {
  const [active, setActive] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (active === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === active);
  }, [active]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <section
        id="portfolio"
        className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.12),transparent_24%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="container relative z-10 mx-auto px-4">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                معرض الأعمال
              </div>

              <h2 className="font-tajawal text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.3] text-white text-center">
                أعمال
                <span className="mx-3 inline-block bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
                  تعكس
                </span>
                المستوى
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/65 font-cairo">
                نماذج مختارة من أعمالنا في الهوية البصرية، السوشيال ميديا،
                المطبوعات، وتصميم المواقع.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => {
                const isActive = active === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActive(cat.id)}
                    className={`rounded-2xl px-5 py-3 text-sm sm:text-base font-medium transition-all duration-300 ${isActive
                        ? "bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 text-white shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
                        : "border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl hover:bg-white/[0.07] hover:text-white"
                      }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  <div className="relative overflow-hidden rounded-[1.25rem]">
                    <div className="aspect-[4/5] overflow-hidden bg-black/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
                          {categories.find((c) => c.id === item.category)?.name}
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedItem(item)}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white/20 hover:text-white"
                          aria-label={`عرض ${item.title}`}
                        >
                          <ArrowUpLeft className="h-4 w-4" />
                        </button>
                      </div>

                      <h3 className="font-tajawal text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-xl transition hover:scale-105 hover:bg-white/15"
                aria-label="إغلاق الصورة"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
                {/* Title + Name */}
                {/* <div className="flex items-center justify-between border-b border-white/10 bg-black/30 px-5 py-4">
                  <div>
                    <p className="font-tajawal text-xl font-bold text-white">
                      {selectedItem.title}
                    </p>
                    <span className="mt-1 inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/75">
                      {
                        categories.find((c) => c.id === selectedItem.category)
                          ?.name
                      }
                    </span>
                  </div>
                </div> */}

                <div className="flex max-h-[85vh] items-center justify-center bg-black/40 p-3 sm:p-5">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};