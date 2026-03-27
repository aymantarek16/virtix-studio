import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const phone = "201148618451";
  const message = encodeURIComponent("مرحبا، حابب أستفسر عن خدماتكم");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full 
      bg-[#25D366] 
      flex items-center justify-center 
      text-white 
      shadow-[0_8px_25px_rgba(37,211,102,0.4)] 
      transition-all duration-300 
      hover:shadow-[0_12px_35px_rgba(37,211,102,0.6)]"
      aria-label="تواصل عبر واتساب"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.885.755 5.7 2.188 8.18L0 32l7.625-2.152a15.944 15.944 0 0 0 8.375 2.385c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.1a13.01 13.01 0 0 1-6.64-1.83l-.475-.28-4.52 1.275 1.207-4.405-.31-.455A12.93 12.93 0 0 1 3.39 16.396C3.39 9.28 8.96 3.71 16.075 3.71s12.685 5.57 12.685 12.686-5.57 12.685-12.685 12.685zm7.27-9.53c-.397-.198-2.35-1.158-2.714-1.29-.364-.133-.63-.198-.896.198-.264.396-1.027 1.29-1.26 1.554-.232.264-.463.297-.86.1-.397-.198-1.678-.618-3.195-1.97-1.18-1.052-1.977-2.35-2.21-2.746-.232-.396-.025-.61.173-.808.178-.177.397-.463.595-.694.198-.232.264-.396.396-.66.133-.264.067-.496-.033-.694-.1-.198-.896-2.158-1.227-2.954-.322-.77-.65-.665-.896-.678l-.763-.014c-.264 0-.694.1-1.058.496-.364.396-1.39 1.36-1.39 3.312s1.422 3.84 1.62 4.104c.198.264 2.8 4.276 6.787 5.997.948.41 1.688.654 2.266.837.952.303 1.82.26 2.507.158.765-.114 2.35-.96 2.683-1.886.33-.925.33-1.72.232-1.886-.1-.165-.364-.264-.76-.463z" />
        </svg>
      </motion.div>
    </motion.a>
  );
};