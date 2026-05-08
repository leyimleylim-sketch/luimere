export interface Translation {
  nav: {
    collections: string;
    about: string;
    branches: string;
    contact: string;
    search: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    buy: string;
    contact: string;
  };
  products: {
    title: string;
    subtitle: string;
    viewAll: string;
    addToCart: string;
    categories: {
      all: string;
      face: string;
      hair: string;
      lips: string;
      fragrance: string;
    };
  };
  cart: {
    title: string;
    empty: string;
    total: string;
    checkout: string;
  };
  checkout: {
    title: string;
    address: string;
    payment: string;
    confirm: string;
    success: string;
  };
}

export const translations: Record<string, Translation> = {
  uz: {
    nav: {
      collections: "To'plamlar",
      about: "Biz haqimizda",
      branches: "Filiallar",
      contact: "Aloqa",
      search: "Qidiruv...",
    },
    hero: {
      badge: "Premium Teri Parvarishi",
      title: "Sof Go'zallik",
      subtitle: "Botanika fanlari va hashamatning uyg'unligini his eting.",
      buy: "Sotib olish",
      contact: "Ekspert bilan bog'lanish",
    },
    products: {
      title: "Sara To'plam",
      subtitle: "Abadiy Go'zallik Belglari",
      viewAll: "Barchasini ko'rish",
      addToCart: "Savatchaga",
      categories: {
        all: "Hamma",
        face: "Yuz",
        hair: "Soch",
        lips: "Lab",
        fragrance: "Atir",
      },
    },
    cart: {
      title: "Sizning Savatchangiz",
      empty: "Savatchangiz bo'sh",
      total: "Jami",
      checkout: "Buyurtma berish",
    },
    checkout: {
      title: "Rasmiylashtirish",
      address: "Manzil",
      payment: "To'lov usuli",
      confirm: "Tasdiqlash",
      success: "Buyurtmangiz qabul qilindi!",
    },
  },
  ru: {
    nav: {
      collections: "Коллекции",
      about: "О нас",
      branches: "Филиалы",
      contact: "Контакт",
      search: "Поиск...",
    },
    hero: {
      badge: "Премиальный Уход",
      title: "Чистое Сияние",
      subtitle: "Ощутите слияние ботанической науки и роскоши.",
      buy: "Купить",
      contact: "Связаться с экспертом",
    },
    products: {
      title: "Избранная Коллекция",
      subtitle: "Иконы Вечной Красоты",
      viewAll: "Смотреть все",
      addToCart: "В корзину",
      categories: {
        all: "Все",
        face: "Лицо",
        hair: "Волосы",
        lips: "Губы",
        fragrance: "Ароматы",
      },
    },
    cart: {
      title: "Ваша Корзина",
      empty: "Корзина пуста",
      total: "Итого",
      checkout: "Оформить заказ",
    },
    checkout: {
      title: "Оформление",
      address: "Адрес",
      payment: "Способ оплаты",
      confirm: "Подтвердить",
      success: "Ваш заказ принят!",
    },
  },
  en: {
    nav: {
      collections: "Collections",
      about: "About Us",
      branches: "Branches",
      contact: "Contact",
      search: "Search...",
    },
    hero: {
      badge: "Premium Skincare",
      title: "Pure Radiance",
      subtitle: "Experience the fusion of botanical science and luxury.",
      buy: "Buy Now",
      contact: "Contact Expert",
    },
    products: {
      title: "Selected Collection",
      subtitle: "Timeless Beauty Icons",
      viewAll: "View All",
      addToCart: "Add to Bag",
      categories: {
        all: "All",
        face: "Face",
        hair: "Hair",
        lips: "Lips",
        fragrance: "Fragrance",
      },
    },
    cart: {
      title: "Your Bag",
      empty: "Your bag is empty",
      total: "Total",
      checkout: "Checkout Now",
    },
    checkout: {
      title: "Checkout",
      address: "Delivery Address",
      payment: "Payment Method",
      confirm: "Confirm Order",
      success: "Order placed successfully!",
    },
  },
};
