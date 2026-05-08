import React from "react";
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-premium-dark/5 dark:border-white/5 pt-32 pb-10 transition-colors">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-xl font-serif font-black tracking-tighter text-premium-dark dark:text-white mb-8 block grayscale dark:grayscale-0">
              LUMIÈRE<span className="text-gold">.</span>
            </a>
            <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 leading-relaxed max-w-xs mb-8">
              Curated skincare and fragrances for those who demand ethical luxury and botanical excellence.
            </p>
            <div className="flex space-x-6 text-premium-dark dark:text-white">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-gold transition-all">Instagram</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-gold transition-all">Facebook</a>
            </div>
          </div>
          
          <div className="text-premium-dark dark:text-white">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-gold italic">Collections</h4>
            <ul className="space-y-4">
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Face Care</span><a href="#" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Radiance Serum</a></div></li>
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Rituals</span><a href="#" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Evening Repair</a></div></li>
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Essence</span><a href="#" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Limited Perfume</a></div></li>
            </ul>
          </div>
          
          <div className="text-premium-dark dark:text-white">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-gold italic">Experience</h4>
            <ul className="space-y-4">
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">History</span><a href="#about" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Our Studio</a></div></li>
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Location</span><a href="#branches" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Global Boutiques</a></div></li>
              <li><div className="flex flex-col"><span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Assistance</span><a href="#contact" className="text-[10px] font-bold uppercase hover:text-gold transition-colors">Concierge</a></div></li>
            </ul>
          </div>
          
          <div className="text-premium-dark dark:text-white">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-10 text-gold italic">Concierge</h4>
            <div className="space-y-8">
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Global HQ</span>
                <span className="text-[10px] font-bold uppercase">Amir Temur Ave, 12, Tashkent</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Inquiries</span>
                <span className="text-[10px] font-bold uppercase">+998 71 200 00 00</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest opacity-40 mb-1">Email</span>
                <span className="text-[10px] font-bold uppercase">hello@lumiere.uz</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-premium-dark/5 dark:border-white/5 flex flex-col md:flex-row justify-end items-center text-[9px] font-bold uppercase tracking-[0.3em] opacity-30 dark:text-white">
          <div className="flex space-x-12">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
