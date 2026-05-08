import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../products";
import { translations, Translation } from "../translations";

interface CartItem extends Product {
  quantity: number;
}

interface AppContextType {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  lang: "uz" | "ru" | "en";
  setLang: (l: "uz" | "ru" | "en") => void;
  t: Translation;
  cart: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, q: number) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (o: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (o: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"uz" | "ru" | "en">("uz");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const t = translations[lang];

  return (
    <AppContext.Provider
      value={{
        theme, setTheme,
        lang, setLang,
        t,
        cart, addToCart, removeFromCart, updateQuantity,
        searchQuery, setSearchQuery,
        isCartOpen, setIsCartOpen,
        isCheckoutOpen, setIsCheckoutOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
