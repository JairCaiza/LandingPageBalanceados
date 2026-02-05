import { motion } from "framer-motion";
/* 👉 AQUÍ VA */
const images = [
  "/images/huevos.jpg",
  "/images/fabrica.jpg",
  "/images/maiz.jpg",
  "/images/soya.jpg",
  "/images/trigo.jpg",
  "/images/afrecho.jpg",
  "/images/selectofino.jpg",
  "/images/maiz-ensacado.jpg",
];
const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[var(--black-bacground)]/50 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen grid md:grid-cols-2 items-center gap-12">
        {/* TEXTO */}
        {/* LUCES ANIMADAS */}

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-5 left-[-20px] w-40 h-40  bg-[var(--agro-green)]/30 rounded-full blur-2xl z-0 pointer-events-none "
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-5 left-[-20px] w-40 h-40 bg-[var(--agro-green)]/30 rounded-full blur-2xl z-0 pointer-events-none"
        />

        {/* Luz inferior izquierda */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--maize)]/30 rounded-full blur-3xl z-10 pointer-events-none"
        />

        <div>
          <motion.div
            animate={{ x: [100, -100, 0] }} // movimiento horizontal
            transition={{ duration: 2, repeat: Infinity }}
            className="
    absolute top-70 right-200
    w-140 h-20
    bg-[var(--white-pure)]/50
    rounded-full
    blur-xl
    z-20 pointer-events-none
  "
          />

          <h1 className="animate__animated animate__backInDown animate__slow text-4xl md:text-6xl font-bold text-[var(--white-pure)] mb-6 leading-tight">
            Materia prima
            <br />
            <span className="text-[var(--maize)]">para Balanceados</span>
          </h1>

          <p className="animate__animated animate__fadeInUp animate__delay-1s text-gray-300 text-lg md:text-xl mb-10">
            Comercializamos maíz, soya, trigo y derivados para la industria,
            alimentación animal y comercio mayorista.
          </p>

          <div className="flex gap-4 flex-wrap animate__animated animate__fadeInUp animate__delay-2s">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[var(--maize)]
                hover:bg-[var(--maize-dark)]
                text-black
                px-8 py-3 rounded-xl
                font-semibold shadow-lg
              "
            >
              Ver productos
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-[var(--agro-green)]
                hover:bg-[var(--agro-green)]/90
                text-white
                px-8 py-3 rounded-xl
                font-semibold shadow-lg
              "
            >
              Contáctanos
            </motion.button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative flex justify-center md:justify-end">
          {/* LUZ FRONTAL MAÍZ */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="
              absolute -top-32 right-20
              w-72 h-72
              bg-[var(--maize)]/30
              rounded-full blur-3xl
              z-20 pointer-events-none
            "
          />

          {/* LUZ LATERAL VERDE */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="
              absolute top-28 -right-36
              w-40 h-40
              bg-[var(--agro-green)]/30
              rounded-full blur-2xl
              z-0 pointer-events-none
            "
          />

          {/* DESTELLO PEQUEÑO */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="
              absolute bottom-16 right-1
              w-16 h-16
              bg-[var(--maize-light)]/40
              rounded-full blur-xl
              z-20 pointer-events-none
            "
          />

          {/* IMAGEN */}
          <div className=" scale-105 rotate-x-15 -rotate-y-30 relative w-[500px] sm:w-[360px] md:w-[420px] h-[370px] overflow-hidden rounded-2xl shadow-2xl z-10">
            <motion.div
              className="flex h-full gap-4" // <-- gap entre imágenes
              animate={{ x: ["0%", "-400%"] }} // Ajusta según el total
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover flex-shrink-0 rounded-2xl "
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
