import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Branches from "./components/Branches";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import { useAppContext } from "./context/AppContext";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === "dark" ? "dark bg-dark-bg text-white" : "bg-premium-light text-premium-dark"}`}>
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        <Products />
        <About />
        <Branches />
        <Contact />
      </main>

      <Footer />

      {/* Overlays */}
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
}
