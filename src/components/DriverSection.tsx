import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Driver } from "../data/drivers";

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TimelineItem({
  event,
  index,
  color,
}: {
  event: Driver["timeline"][0];
  index: number;
  color: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-14 pb-8 last:pb-0 group"
    >
      {/* Line */}
      <div
        className="absolute left-[19px] top-0 bottom-0 w-px"
        style={{
          background: `linear-gradient(to bottom, ${color}40, ${color}10)`,
        }}
      />
      {/* Dot */}
      <div
        className="absolute left-3 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125"
        style={{ borderColor: color, backgroundColor: color + "20" }}
      >
        <div
          className="absolute inset-1 rounded-full animate-pulse-glow"
          style={{ backgroundColor: color, opacity: 0.4 }}
        />
      </div>
      {/* Content */}
      <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-bold tracking-wider px-2 py-0.5 rounded"
            style={{ backgroundColor: color + "15", color }}
          >
            {event.year}
          </span>
        </div>
        <h4 className="text-white font-semibold text-sm mb-1">
          {event.title}
        </h4>
        <p className="text-white/40 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  color,
  delay = 0,
}: {
  label: string;
  value: string | number;
  color: string;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <div className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300 group">
        <div
          className="text-3xl sm:text-4xl font-bold mb-1 transition-colors duration-300"
          style={{ color }}
        >
          {value}
        </div>
        <div className="text-white/30 text-xs uppercase tracking-widest">
          {label}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function DriverSection({ driver }: { driver: Driver }) {
  const glowClass =
    driver.id === "senna"
      ? "glow-yellow"
      : driver.id === "hamilton"
      ? "glow-red"
      : "glow-red";

  const textGradientClass =
    driver.id === "senna"
      ? "text-gradient-senna"
      : driver.id === "hamilton"
      ? "text-gradient-hamilton"
      : "text-gradient-leclerc";

  return (
    <section id={driver.id} className="relative py-24 sm:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large number watermark */}
        <div className="driver-number select-none" style={{ color: driver.colors.primary }}>
          {driver.number}
        </div>

        {/* Subtle color glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px] opacity-[0.03]"
          style={{ backgroundColor: driver.colors.primary }}
        />

        {/* Racing stripe */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 opacity-20"
          style={{
            background: `linear-gradient(to bottom, transparent, ${driver.colors.primary}, transparent)`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Driver Header */}
        <AnimatedSection>
          <div className="mb-16">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-8 h-0.5"
                style={{ backgroundColor: driver.colors.primary }}
              />
              <span
                className="text-xs tracking-[0.3em] uppercase font-medium"
                style={{ color: driver.colors.primary }}
              >
                {driver.nationality} · #{driver.number}
              </span>
            </div>

            {/* Name */}
            <h2
              className={`font-serif text-4xl sm:text-6xl md:text-7xl font-bold mb-4 ${textGradientClass}`}
            >
              {driver.name}
            </h2>

            {/* Full name & birth */}
            <div className="flex flex-wrap items-center gap-4 text-white/30 text-sm">
              <span>{driver.fullName}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{driver.birthPlace}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>{driver.birthDate}</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Quote */}
        <AnimatedSection delay={0.1}>
          <div
            className={`relative rounded-2xl p-8 mb-16 border overflow-hidden ${glowClass}`}
            style={{
              borderColor: driver.colors.primary + "15",
              background: `linear-gradient(135deg, ${driver.colors.primary}05, transparent)`,
            }}
          >
            <div
              className="absolute top-4 left-6 text-6xl font-serif opacity-10"
              style={{ color: driver.colors.primary }}
            >
              "
            </div>
            <p
              className="font-serif text-lg sm:text-xl italic leading-relaxed relative z-10"
              style={{ color: driver.colors.primary + "cc" }}
            >
              {driver.quote}
            </p>
          </div>
        </AnimatedSection>

        {/* Biography */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-4"
              style={{ color: driver.colors.primary }}
            >
              Biografia
            </h3>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-3xl">
              {driver.biography}
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.1}>
          <div className="mb-20">
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-6"
              style={{ color: driver.colors.primary }}
            >
              Números & Records
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard
                label="Títulos"
                value={driver.championships}
                color={driver.colors.primary}
                delay={0.1}
              />
              <StatCard
                label="Vitórias"
                value={driver.wins}
                color={driver.colors.primary}
                delay={0.15}
              />
              <StatCard
                label="Pole Positions"
                value={driver.poles}
                color={driver.colors.primary}
                delay={0.2}
              />
              <StatCard
                label="Número"
                value={`#${driver.number}`}
                color={driver.colors.primary}
                delay={0.25}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Timeline */}
        <AnimatedSection>
          <div className="mb-20">
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-8"
              style={{ color: driver.colors.primary }}
            >
              Trajetória
            </h3>
            <div className="max-w-2xl">
              {driver.timeline.map((event, i) => (
                <TimelineItem
                  key={i}
                  event={event}
                  index={i}
                  color={driver.colors.primary}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="section-divider mb-20" />

        {/* Opinions */}
        <AnimatedSection>
          <div>
            <h3
              className="text-sm font-semibold tracking-wider uppercase mb-8"
              style={{ color: driver.colors.primary }}
            >
              Opinião & Legado
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Fans */}
              <AnimatedSection delay={0.1}>
                <div
                  className="opinion-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
                  style={{
                    borderTopColor: driver.colors.primary + "30",
                    borderTopWidth: "2px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        backgroundColor: driver.colors.primary + "15",
                        color: driver.colors.primary,
                      }}
                    >
                      🏁
                    </div>
                    <span className="text-sm font-semibold text-white/70">
                      Fãs
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {driver.opinions.byFans}
                  </p>
                </div>
              </AnimatedSection>

              {/* Experts */}
              <AnimatedSection delay={0.2}>
                <div
                  className="opinion-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
                  style={{
                    borderTopColor: driver.colors.primary + "30",
                    borderTopWidth: "2px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        backgroundColor: driver.colors.primary + "15",
                        color: driver.colors.primary,
                      }}
                    >
                      📋
                    </div>
                    <span className="text-sm font-semibold text-white/70">
                      Especialistas
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {driver.opinions.byExperts}
                  </p>
                </div>
              </AnimatedSection>

              {/* Legacy */}
              <AnimatedSection delay={0.3}>
                <div
                  className="opinion-card rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
                  style={{
                    borderTopColor: driver.colors.primary + "30",
                    borderTopWidth: "2px",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                      style={{
                        backgroundColor: driver.colors.primary + "15",
                        color: driver.colors.primary,
                      }}
                    >
                      🏆
                    </div>
                    <span className="text-sm font-semibold text-white/70">
                      Legado
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {driver.opinions.legacy}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
