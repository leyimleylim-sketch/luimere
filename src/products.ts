export interface Product {
  id: number;
  name: string;
  category: "face" | "hair" | "lips" | "fragrance";
  price: number;
  image: string;
  description: string;
  available: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Lumière Radiance Cream",
    category: "face",
    price: 450000,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    description: "Premium gold-infused eye cream for total hydration and anti-aging effect.",
    available: true,
  },
  {
    id: 2,
    name: "Velvet Rose Serum",
    category: "face",
    price: 780000,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600",
    description: "Concentrated rose essence for smooth and glowing morning skin.",
    available: true,
  },
  {
    id: 3,
    name: "Satin Silk Shampoo",
    category: "hair",
    price: 120000,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600",
    description: "Luxury shampoo for damaged hair with keratin and organic oils.",
    available: true,
  },
  {
    id: 5,
    name: "Pure Essence Gold",
    category: "fragrance",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600",
    description: "Majestic floral fragrance with notes of jasmine and white truffle.",
    available: true,
  },
  {
    id: 6,
    name: "Midnight Repair Mask",
    category: "face",
    price: 550000,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600",
    description: "Overnight mask for deep cell regeneration and moisture lock.",
    available: false,
  },
  {
    id: 7,
    name: "Argan Shine Conditioner",
    category: "hair",
    price: 135000,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=600",
    description: "Natural argan oil conditioner for extra volume and silkiness.",
    available: true,
  },
  {
    id: 8,
    name: "Glossy Bloom Pink",
    category: "lips",
    price: 280000,
    image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&q=80&w=600",
    description: "High-shine lip gloss for a natural, plump look.",
    available: true,
  }
];
