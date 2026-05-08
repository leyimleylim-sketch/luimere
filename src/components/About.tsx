import React from "react";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const About: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="about" className="py-32 bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto px-10 text-premium-dark dark:text-white">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 pt-20">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="overflow-hidden aspect-[3/4] bg-premium-light border border-premium-dark/5"
                >
                  <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600" alt="Process" className="w-full h-full object-cover grayscale-[0.2]" />
                </motion.div>
              </div>
              <div className="col-span-5 flex flex-col space-y-4">
                <motion.div 
                   initial={{ opacity: 0, y: -30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="overflow-hidden aspect-square border border-premium-dark/5"
                >
                  <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=400" alt="Ingredients" className="w-full h-full object-cover" />
                </motion.div>
                <div className="bg-gold p-8 text-white aspect-square flex flex-col justify-end">
                   <p className="text-4xl font-serif font-black mb-2">15</p>
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Years of Artistic Beauty Selection</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.3em] mb-8 block italic">{t.nav.about}</h2>
              <h3 className="text-5xl md:text-7xl font-serif text-premium-dark dark:text-white leading-[0.9] tracking-tighter mb-10">
                Crafting <br />
                Pure <br />
                <span className="italic font-normal">Authenticity.</span>
              </h3>
              <div className="space-y-8 text-black/60 dark:text-white/60 leading-relaxed text-sm max-w-lg">
                <p>
                  LUMIÈRE is not merely a brand. It is a curated experience for those who seek the intersection of nature and refinement. Since 2009, our studio has been dedicated to the pursuit of radiant health.
                </p>
                <p className="italic font-serif text-premium-dark dark:text-gold text-lg border-l-2 border-gold pl-6 py-2">
                  "Go'zallik — bu san'at, biz esa uning mualliflarimiz."
                </p>
                <p>
                  Every product in our collection is a result of rigorous scientific research and a deep respect for organic botanical sources. We believe in the power of simplicity.
                </p>
              </div>
              
              <div className="mt-16 flex items-center space-x-12">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gold">Origin</span>
                  <span className="text-sm font-serif italic text-premium-dark dark:text-white">French Riviera</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gold">Ethics</span>
                  <span className="text-sm font-serif italic text-premium-dark dark:text-white">Cruelty Free</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
