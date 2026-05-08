import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const locations = [
  {
    city: "Toshkent",
    name: "Lumière Flagship Store",
    address: "Amir Temur ko'chasi, 12, Tashkent City Mall",
    phone: "+998 71 200 00 01",
    hours: "10:00 - 22:00"
  },
  {
    city: "Toshkent",
    name: "Lumière Chilonzor",
    address: "Qatortol ko'chasi, 24, Parus SKM",
    phone: "+998 71 200 00 02",
    hours: "10:00 - 21:00"
  },
  {
    city: "Samarqand",
    name: "Lumière Registon",
    address: "Registon ko'chasi, 5, Family Park Mall",
    phone: "+998 66 200 00 03",
    hours: "09:00 - 20:00"
  }
];

const Branches: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="branches" className="py-24 bg-white dark:bg-dark-bg overflow-hidden border-t border-premium-dark/5 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t border-premium-dark/5 dark:border-white/5">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-12 border-r border-b border-premium-dark/5 dark:border-white/5 hover:bg-premium-light dark:hover:bg-white/5 transition-colors duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-12">
                 <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">{loc.city}</p>
                 <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <MapPin size={14} />
                 </div>
              </div>
              
              <h4 className="text-3xl font-serif font-bold text-premium-dark dark:text-white mb-10 italic leading-tight">{loc.name}</h4>
              
              <div className="space-y-6 mt-auto">
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Address</span>
                  <span className="text-xs font-medium dark:text-white/70 leading-relaxed">{loc.address}</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Inquiries</span>
                   <span className="text-xs font-medium dark:text-white/70">{loc.phone}</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-premium-dark/5 dark:border-white/5">
                   <div className="flex flex-col">
                      <span className="text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-1">Status</span>
                      <span className="text-[10px] font-bold text-gold uppercase tracking-widest">Open until {loc.hours.split(' - ')[1]}</span>
                   </div>
                   <button className="text-[10px] font-bold uppercase tracking-widest border-b border-premium-dark dark:border-white dark:hover:text-gold dark:hover:border-gold pb-0.5">Explore</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
