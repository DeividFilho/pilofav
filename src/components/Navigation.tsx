import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Início" },
  { id: "senna", label: "Senna" },
  { id: "hamilton", label: "Hamilton" },
  { id: "leclerc", label: "Leclerc" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((n) => document.getElementById(n.id));
      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 200 && rect.bottom > 200;
      });
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const getActiveColor = () => {
    switch (active) {
      case "senna":
        return "#FFD700";
      case "hamilton":
        return "#00D2BE";
      case "leclerc":
        return "#DC0000";
      default:
        return "#ffffff";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div
            className="w-8 h-8 rounded-full border-2 transition-colors duration-300"
            style={{ borderColor: getActiveColor() }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
              style={{ color: getActiveColor() }}
            >
              F1
            </div>
          </div>
          <span className="font-serif text-lg font-semibold tracking-wide hidden sm:block">
            Lendas da F1
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
              style={{
                color: active === item.id ? getActiveColor() : "#888",
              }}
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                  style={{ backgroundColor: getActiveColor(), width: "60%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: getActiveColor(),
              transform: mobileOpen
                ? "rotate(45deg) translateY(4px)"
                : "none",
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: getActiveColor(),
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: getActiveColor(),
              transform: mobileOpen
                ? "rotate(-45deg) translateY(-4px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-6 py-3 text-sm font-medium transition-colors cursor-pointer"
                style={{
                  color: active === item.id ? getActiveColor() : "#888",
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
