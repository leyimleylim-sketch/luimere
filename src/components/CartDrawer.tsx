import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, t, setIsCheckoutOpen } = useAppContext();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-dark-surface z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
              <h2 className="text-xl font-serif font-bold italic flex items-center gap-2">
                <ShoppingBag size={20} />
                {t.cart.title}
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} className="mb-4 stroke-[1]" />
                  <p className="font-medium uppercase tracking-widest text-xs">{t.cart.empty}</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-gray-100 dark:bg-white/5 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between font-serif font-bold italic mb-1">
                        <h3>{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-gold mb-4">{item.category}</p>
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center border border-gray-100 dark:border-white/10 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-white/5"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-50 dark:hover:bg-white/5"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-xs font-bold">{(item.price * item.quantity).toLocaleString()} UZS</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-black/20">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">{t.cart.total}</span>
                  <span className="text-2xl font-serif font-bold italic">{total.toLocaleString()} UZS</span>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-premium-dark dark:bg-white dark:text-premium-dark text-white py-5 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gold dark:hover:bg-gold transition-all shadow-xl"
                >
                  {t.cart.checkout}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
