import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Menu, X, Search, Moon, Sun, Globe } from "lucide-react";
import { useAppContext } from "../context/AppContext";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cart, setIsCartOpen, lang, setLang, theme, setTheme, t, searchQuery, setSearchQuery } = useAppContext();

  const navLinks = [
    { name: t.nav.collections, href: "#products" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.branches, href: "#branches" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md py-4 border-premium-dark/5 dark:border-white/5 shadow-sm" : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        {/* Left: Branding */}
        <a href="#home" className="text-2xl font-serif font-black tracking-[-0.05em] text-premium-dark dark:text-white uppercase">
          LUMIÈRE<span className="text-gold">.</span>
        </a>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex space-x-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-premium-dark/70 dark:text-white/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Search Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  placeholder={t.nav.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-b border-premium-dark/10 dark:border-white/10 outline-none text-[10px] font-bold uppercase tracking-widest py-1"
                />
              )}
            </AnimatePresence>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-1 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6 border-l border-premium-dark/10 dark:border-white/10 pl-6">
            {/* Lang Switch */}
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity cursor-pointer relative group">
              <Globe size={14} />
              <span>{lang}</span>
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-dark-surface shadow-xl border border-black/5 dark:border-white/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 min-w-[80px]">
                {["uz", "ru", "en"].map(l => (
                   <button 
                    key={l}
                    onClick={() => setLang(l as any)}
                    className={`p-2 text-left hover:bg-gold/10 transition-colors ${lang === l ? "text-gold" : ""}`}
                   >
                     {l.toUpperCase()}
                   </button>
                ))}
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-1 opacity-60 hover:opacity-100 transition-opacity"
            >
              {theme === "light" ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
            </button>

            {/* Cart */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-1 opacity-60 hover:opacity-100 transition-opacity relative"
            >
               <ShoppingBag size={18} strokeWidth={1.5} />
               {cartCount > 0 && (
                 <span className="absolute -top-1 -right-1 bg-gold text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
                   {cartCount}
                 </span>
               )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsCartOpen(true)} className="p-1 opacity-60 relative">
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-gold text-white text-[8px] w-3 h-3 rounded-full" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white dark:bg-dark-bg z-[60] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-serif font-black tracking-tighter">LUMIÈRE<span className="text-gold">.</span></span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif font-bold italic hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-black/5 flex flex-col space-y-8">
               <div className="flex justify-around">
                  {["uz", "ru", "en"].map(l => (
                    <button 
                      key={l}
                      onClick={() => setLang(l as any)}
                      className={`text-[10px] font-bold uppercase tracking-widest ${lang === l ? "text-gold" : "opacity-40"}`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
               </div>
               <button 
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center justify-center space-x-2 text-[10px] font-bold uppercase tracking-widest"
               >
                 {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                 <span>{theme.toUpperCase()} MODE</span>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
