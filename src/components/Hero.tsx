import React from "react";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const Hero: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto px-10 h-full flex items-center justify-center">
        {/* Center Content */}
        <div className="w-full max-w-3xl flex flex-col justify-center items-center text-center py-20 lg:py-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-8 block italic">
              {t.hero.badge}
            </span>
            <h1 className="text-6xl md:text-9xl font-serif font-black leading-[0.9] tracking-tighter mb-12 text-premium-dark dark:text-white">
              {t.hero.title.split(' ')[0]} <br />
              <span className="italic font-normal">{t.hero.title.split(' ')[1] || "Radiance."}</span>
            </h1>
            <p className="text-base leading-relaxed text-black/60 dark:text-white/60 mb-16 max-w-lg">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-12">
              <a 
                href="#products"
                className="bg-premium-dark dark:bg-white dark:text-premium-dark text-white px-16 py-6 text-[12px] uppercase tracking-[0.3em] font-bold hover:bg-gold dark:hover:bg-gold transition-all duration-500 shadow-2xl scale-100 hover:scale-105"
              >
                {t.hero.buy} — $124
              </a>
              <a 
                href="#contact"
                className="border-b-2 border-premium-dark dark:border-white/40 text-[11px] uppercase tracking-[0.2em] font-bold pb-2 hover:text-gold hover:border-gold transition-all duration-300"
              >
                {t.hero.contact}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
