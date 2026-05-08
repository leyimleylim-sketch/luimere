import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Star, AlertCircle } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { products } from "../products";

const Products: React.FC = () => {
  const { t, addToCart, searchQuery } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t.products.categories.all },
    { id: "face", label: t.products.categories.face },
    { id: "hair", label: t.products.categories.hair },
    { id: "lips", label: t.products.categories.lips },
    { id: "fragrance", label: t.products.categories.fragrance },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-32 bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-6 block italic underline decoration-gold/30 underline-offset-8 transition-colors">
              {t.products.title}
            </h2>
            <p className="text-5xl md:text-7xl font-serif text-premium-dark dark:text-white leading-none tracking-tighter">
              {t.products.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] pb-1 border-b-2 transition-all ${
                  activeCategory === cat.id 
                  ? "border-gold text-gold" 
                  : "border-transparent text-black/30 dark:text-white/30 hover:text-premium-dark dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center opacity-30">
            <AlertCircle size={48} strokeWidth={1} className="mb-4" />
            <p className="text-xs uppercase tracking-[0.3em] font-bold">No items found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-premium-dark/5 dark:border-white/5">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border-r border-b border-premium-dark/5 dark:border-white/5 p-8 lg:p-12 hover:bg-premium-light dark:hover:bg-white/5 transition-colors duration-500"
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-10 bg-gray-50 dark:bg-black/10">
                    {!product.available && (
                      <div className="absolute top-4 right-4 z-10 bg-black/40 backdrop-blur-sm text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                        Out of Stock
                      </div>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className={`w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 ${!product.available ? "opacity-50 grayscale" : "grayscale-[0.3] group-hover:grayscale-0"}`}
                    />
                    <div className="absolute inset-0 bg-premium-dark/0 group-hover:bg-premium-dark/5 transition-colors"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/30">
                      <span>{product.category}</span>
                      <span className="text-gold">ID_{String(product.id).padStart(3, '0')}</span>
                    </div>
                    <div className="h-20">
                      <h3 className="text-2xl font-serif font-black italic leading-[1.1] text-premium-dark dark:text-white group-hover:text-gold transition-colors">{product.name}</h3>
                      <p className="text-[10px] text-black/50 dark:text-white/40 line-clamp-2 mt-2 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="flex justify-between items-end pt-6 border-t border-premium-dark/5 dark:border-white/5">
                       <p className="text-sm font-black tracking-tight">{product.price.toLocaleString()} UZS</p>
                       <button 
                        disabled={!product.available}
                        onClick={() => addToCart(product)}
                        className="text-[10px] font-black uppercase tracking-[0.15em] text-gold hover:text-premium-dark dark:hover:text-white transition-all disabled:opacity-30 underline decoration-gold/20 underline-offset-4"
                       >
                         {t.products.addToCart}
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
