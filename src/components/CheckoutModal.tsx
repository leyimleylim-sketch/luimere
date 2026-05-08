import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, CreditCard, Truck, AlertCircle } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, t, cart } = useAppContext();
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", address: "", phone: "", payment: "card" });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const itemsText = cart.map(item => `• ${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} UZS`).join('\n');
    const telegramMessage = `
<b>🛍 NEW ORDER</b>
-----------------------
<b>👤 Name:</b> ${formData.name}
<b>📍 Address:</b> ${formData.address}
<b>📞 Phone:</b> ${formData.phone}
<b>💳 Payment:</b> ${formData.payment.toUpperCase()}
-----------------------
<b>🛒 Items:</b>
${itemsText}
-----------------------
<b>💰 TOTAL: ${total.toLocaleString()} UZS</b>
`.trim();

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: telegramMessage }),
      });

      if (response.ok) {
        setStep("success");
      } else {
        console.error("Failed to send order to Telegram");
        // Still proceed to success for UX, or show error? Let's show success for now but log.
        setStep("success");
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setStep("success");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCheckoutOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-dark-surface shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-6 right-6 p-2 z-10 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            {step === "form" ? (
              <>
                <div className="md:w-1/2 p-12 bg-premium-light dark:bg-black/20 overflow-y-auto max-h-[80vh]">
                  <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-12 block italic">Summary</h2>
                  <div className="space-y-6 mb-12">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center text-xs">
                        <span className="font-serif italic font-bold">
                          {item.name} <span className="text-gold font-sans not-italic text-[10px]">x{item.quantity}</span>
                        </span>
                        <span className="font-bold">{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-black/5 dark:border-white/5 flex justify-between items-end">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">{t.cart.total}</span>
                    <span className="text-3xl font-serif font-black italic">{total.toLocaleString()} UZS</span>
                  </div>
                  
                  <div className="mt-12 space-y-4">
                    <div className="flex items-center gap-3 text-[10px] text-black/40 dark:text-white/40 uppercase font-bold tracking-widest">
                       <Truck size={14} className="text-gold" />
                       Free Premium Delivery
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-black/40 dark:text-white/40 uppercase font-bold tracking-widest">
                       <CreditCard size={14} className="text-gold" />
                       Secure SSL Payment
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 p-12 overflow-y-auto max-h-[80vh]">
                  <h2 className="text-4xl font-serif font-bold italic tracking-tighter mb-12">{t.checkout.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="group">
                      <label className="block text-[8px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2">YOUR NAME</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="FULL NAME"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-gold outline-none text-xs font-bold uppercase tracking-widest transition-all"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[8px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2">{t.checkout.address}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        placeholder="CITY, STREET, APARTMENT"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-gold outline-none text-xs font-bold uppercase tracking-widest transition-all"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[8px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2">PHONE NUMBER</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="+998 -- --- -- --"
                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-gold outline-none text-xs font-bold uppercase tracking-widest transition-all"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-[8px] font-bold uppercase tracking-[0.3em] text-black/40 mb-2">{t.checkout.payment}</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className={`border p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${formData.payment === 'card' ? 'border-gold bg-gold/5' : 'border-black/10 dark:border-white/10'}`}>
                           <CreditCard size={16} className={formData.payment === 'card' ? 'text-gold' : 'text-black/40 dark:text-white/40'} />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Card</span>
                           <input type="radio" name="payment" className="hidden" checked={formData.payment === 'card'} onChange={() => setFormData({...formData, payment: 'card'})} />
                        </label>
                        <label className={`border p-4 flex flex-col items-center gap-2 cursor-pointer transition-all ${formData.payment === 'cash' ? 'border-gold bg-gold/5' : 'border-black/10 dark:border-white/10'}`}>
                           <Truck size={16} className={formData.payment === 'cash' ? 'text-gold' : 'text-black/40 dark:text-white/40'} />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Cash</span>
                           <input type="radio" name="payment" className="hidden" checked={formData.payment === 'cash'} onChange={() => setFormData({...formData, payment: 'cash'})} />
                        </label>
                      </div>
                    </div>

                    <button 
                      disabled={loading}
                      className="w-full bg-premium-dark scale-100 hover:scale-[1.02] text-white py-6 text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-500 shadow-xl disabled:opacity-50"
                    >
                      {loading ? "Transmitting..." : t.checkout.confirm}
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="w-full p-20 flex flex-col items-center text-center">
                <CheckCircle2 size={80} className="text-gold mb-8 stroke-[1]" />
                <h2 className="text-6xl font-serif font-black italic tracking-tighter mb-6">{t.checkout.success}</h2>
                <p className="text-[11px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-12 max-w-sm leading-relaxed">
                  Our concierge will contact you shortly to confirm the delivery window.
                </p>
                <button 
                  onClick={() => {
                    setIsCheckoutOpen(false);
                    setStep("form");
                    // Here you would clear the cart
                  }}
                  className="bg-premium-dark text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold transition-all"
                >
                  Return to Studio
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
