import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const Contact: React.FC = () => {
  const { t } = useAppContext();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const telegramMessage = `
<b>📧 NEW CONTACT INQUIRY</b>
-----------------------
<b>👤 Name:</b> ${formData.name}
<b>✉️ Email:</b> ${formData.email}
-----------------------
<b>💬 Message:</b>
${formData.message}
`.trim();

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: telegramMessage })
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-bg border-t border-premium-dark/5 dark:border-white/5 transition-colors">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row border border-premium-dark/5 dark:border-white/5">
          <div className="lg:w-1/2 p-12 lg:p-20 border-r border-premium-dark/5 dark:border-white/5 bg-premium-light dark:bg-white/5 transition-colors">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[10px] font-bold text-gold uppercase tracking-[0.4em] mb-12 block italic">{t.nav.contact}</h2>
              <h3 className="text-4xl md:text-7xl font-serif leading-[0.9] tracking-tighter mb-12 text-premium-dark dark:text-white">
                Personal <br />
                Inquiry <br />
                <span className="italic font-normal">Expertise.</span>
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60 mb-16 max-w-sm leading-relaxed">
                Connect with our beauty experts for a tailored consultation or assistance with your online selection.
              </p>

              <div className="space-y-10">
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Direct Line</span>
                  <span className="text-lg font-serif italic text-premium-dark dark:text-gold">+998 71 200 00 00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-widest text-black/40 dark:text-white/40 mb-2">Electronic Mail</span>
                  <span className="text-lg font-serif italic text-premium-dark dark:text-gold">concierge@lumiere.uz</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20 bg-white dark:bg-dark-surface transition-colors">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="group">
                  <label className="block text-[8px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2 group-focus-within:text-gold transition-colors">Your Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="FULL NAME"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-premium-dark/10 dark:border-white/10 py-4 focus:border-gold outline-none transition-colors text-xs font-bold uppercase tracking-widest placeholder:text-black/10 dark:text-white dark:placeholder:text-white/5"
                  />
                </div>
                <div className="group">
                  <label className="block text-[8px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2 group-focus-within:text-gold transition-colors">Digital Point</label>
                  <input 
                    required
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-premium-dark/10 dark:border-white/10 py-4 focus:border-gold outline-none transition-colors text-xs font-bold uppercase tracking-widest placeholder:text-black/10 dark:text-white dark:placeholder:text-white/5"
                  />
                </div>
                <div className="group">
                  <label className="block text-[8px] font-bold uppercase tracking-widest text-black/40 dark:text-white/40 mb-2 group-focus-within:text-gold transition-colors">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="HOW MAY WE ASSIST YOU?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-premium-dark/10 dark:border-white/10 py-4 focus:border-gold outline-none transition-colors text-xs font-bold uppercase tracking-widest placeholder:text-black/10 dark:text-white dark:placeholder:text-white/5 resize-none leading-relaxed"
                  ></textarea>
                </div>
                
                <button 
                  disabled={status === "loading"}
                  className="w-full bg-premium-dark dark:bg-white dark:text-premium-dark text-white py-6 text-[10px] uppercase tracking-[0.3em] font-bold flex items-center justify-center space-x-3 hover:bg-gold transition-all duration-500 disabled:opacity-50 shadow-xl"
                >
                  {status === "loading" ? "Transmitting..." : (
                    <>
                      <Send size={14} />
                      <span>Request Consultation</span>
                    </>
                  )}
                </button>
                
                {status === "success" && (
                  <p className="text-center text-gold text-[10px] mt-8 font-bold uppercase tracking-widest">Message received. Our experts will connect shortly.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
