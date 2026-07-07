import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-bg.jpg";


const TARGET_DATE = new Date("2026-11-03T09:00:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET_DATE - now);
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    secondes: Math.floor((diff / 1000) % 60),
  };
}

const HeroSlider = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl"
        >
          <div className="flex flex-col items-center text-center text-primary-foreground gap-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-lg">
                <img src="/logo-foceen.png" alt="FOCEEN" className="h-48 md:h-64 lg:h-80 w-auto" width={640} height={640} loading="eager" decoding="async" fetchPriority="high" />
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold uppercase tracking-wide leading-relaxed text-primary-foreground">
                <span className="relative inline-block px-3 py-1 mb-2">
                  <span className="absolute inset-0 top-[40%] bg-cyan/80 -skew-x-1" />
                  <span className="relative">PLUS GRAND</span>
                </span>
                <br />
                <span className="relative inline-block px-3 py-1 mb-2">
                  <span className="absolute inset-0 top-[40%] bg-cyan/80 -skew-x-1" />
                  <span className="relative">FORUM INGENIEUR</span>
                </span>
                <br />
                <span className="relative inline-block px-3 py-1">
                  <span className="absolute inset-0 top-[40%] bg-cyan/80 -skew-x-1" />
                  <span className="relative">DE LA REGION SUD-EST</span>
                </span>
              </h1>
            </div>

            {/* Countdown — centered below */}
            <p className="text-sm md:text-base font-heading tracking-widest uppercase text-primary-foreground/80">
              Nous nous retrouvons dans :
            </p>
            <div className="flex gap-4 md:gap-6 justify-center">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-heading font-bold tabular-nums">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-xs md:text-sm font-body uppercase tracking-wider text-primary-foreground/70 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;
