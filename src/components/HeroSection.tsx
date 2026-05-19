import { motion } from "framer-motion";
import { drivers } from "../data/drivers";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left corner accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-32 left-8 w-24 h-24 border-l-2 border-t-2 border-white/10 rounded-tl-lg"
        />
        {/* Bottom right corner accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-8 w-24 h-24 border-r-2 border-b-2 border-white/10 rounded-br-lg"
        />

        {/* Floating racing numbers */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] text-8xl font-black text-white/[0.02] select-none"
        >
          12
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-[10%] text-8xl font-black text-white/[0.02] select-none"
        >
          44
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-[15%] text-8xl font-black text-white/[0.02] select-none"
        >
          16
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-white/20" />
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
            Fórmula 1
          </span>
          <div className="h-px w-12 bg-white/20" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-6"
        >
          <span className="block text-white">Lendas</span>
          <span className="block text-white/40">da F1</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/30 text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light"
        >
          A trajetória, os momentos e o legado de três pilotos que marcaram a
          história do automobilismo
        </motion.p>

        {/* Driver pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {drivers.map((driver, i) => (
            <motion.button
              key={driver.id}
              onClick={() => scrollTo(driver.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: driver.colors.primary + "40",
                color: driver.colors.primary,
                backgroundColor: driver.colors.primary + "10",
              }}
            >
              {driver.emoji} {driver.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs tracking-widest uppercase">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-white/30" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
