import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import DriverSection from "./components/DriverSection";
import { drivers } from "./data/drivers";

function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {drivers.map((driver) => (
            <div key={driver.id} className="text-center">
              <div className="text-2xl mb-2">{driver.emoji}</div>
              <h4
                className="font-serif text-lg font-semibold mb-1"
                style={{ color: driver.colors.primary }}
              >
                {driver.name}
              </h4>
              <p className="text-white/20 text-xs">
                {driver.championships > 0
                  ? `${driver.championships}x Campeão Mundial`
                  : "Ferrari Driver"}
              </p>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-[8px] font-bold text-white/30">
              F1
            </div>
            <span className="text-white/20 text-xs">
              Lendas da F1 — Um tributo aos maiores pilotos
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/15 text-xs">
            <span>Feito com ❤️ para fãs da Fórmula 1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </motion.button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/10">
      <Navigation />
      <HeroSection />

      {/* Section dividers between drivers */}
      {drivers.map((driver, index) => (
        <div key={driver.id}>
          {/* Transition gradient */}
          <div
            className="h-px"
            style={{
              background: `linear-gradient(to right, transparent, ${driver.colors.primary}30, transparent)`,
            }}
          />

          <DriverSection driver={driver} />

          {index < drivers.length - 1 && (
            <div className="section-divider" />
          )}
        </div>
      ))}

      <Footer />
      <ScrollToTop />
    </div>
  );
}
