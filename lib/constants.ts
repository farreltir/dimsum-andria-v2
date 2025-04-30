import { MenuCategory, SocialLink } from "./types";

export const RESTAURANT_NAME = "Dimsum Andria";
export const RESTAURANT_DESCRIPTION =
  "Authentic and delicious dimsum in a warm, welcoming atmosphere. Experience the exquisite flavors of our handcrafted dim sum, prepared with traditional techniques and the finest ingredients.";

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/dimsumandria/",
    icon: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@dimsumandria",
    icon: "tiktok",
  },
  {
    name: "WhatsApp",
    href: "https://www.whatsapp.com/channel/0029VaOvmVDJZg4DYF8ShE13",
    icon: "whatsapp",
  },
  {
    name: "Email",
    href: "dimsumandria@gmail.com",
    icon: "email",
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "steamed-dimsum",
    name: "Steamed Dimsum",
    description: "Traditional steamed dumplings with various fillings",
    image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg",
    items: [
      {
        id: "ha-gao",
        name: "Ha Gao (Shrimp Dumpling)",
        description:
          "Delicate translucent dumplings filled with fresh shrimp and bamboo shoots",
        price: 8.99,
        image:
          "https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg",
      },
      {
        id: "siu-mai",
        name: "Siu Mai (Pork & Shrimp Dumpling)",
        description:
          "Open-faced dumplings with savory pork, shrimp, and mushroom filling",
        price: 7.99,
        image:
          "https://images.pexels.com/photos/9332325/pexels-photo-9332325.jpeg",
      },
      {
        id: "chicken-dumpling",
        name: "Chicken & Vegetable Dumpling",
        description:
          "Tender chicken mixed with fresh vegetables in a thin wheat wrapper",
        price: 6.99,
        image:
          "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg",
      },
      {
        id: "crystal-dumpling",
        name: "Crystal Vegetable Dumpling",
        description:
          "Transparent dumplings filled with a medley of fresh vegetables",
        price: 6.99,
        image:
          "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg",
      },
    ],
  },
  {
    id: "steamed-bakpao",
    name: "Steamed Bakpao",
    description: "Fluffy steamed buns with delicious fillings",
    image: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg",
    items: [
      {
        id: "char-siu-bao",
        name: "Char Siu Bao",
        description: "Fluffy steamed buns filled with sweet barbecued pork",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/3606800/pexels-photo-3606800.jpeg",
      },
      {
        id: "custard-bao",
        name: "Custard Bao",
        description: "Sweet steamed buns with creamy custard filling",
        price: 5.49,
        image:
          "https://images.pexels.com/photos/9339970/pexels-photo-9339970.jpeg",
      },
      {
        id: "red-bean-bao",
        name: "Red Bean Bao",
        description:
          "Traditional steamed buns with sweet red bean paste filling",
        price: 5.49,
        image:
          "https://images.pexels.com/photos/9339982/pexels-photo-9339982.jpeg",
      },
      {
        id: "vegetable-bao",
        name: "Vegetable & Mushroom Bao",
        description: "Savory steamed buns with mixed vegetables and mushrooms",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/6941029/pexels-photo-6941029.jpeg",
      },
    ],
  },
  {
    id: "fried-dimsum",
    name: "Fried Dimsum",
    description: "Crispy and golden fried dim sum specialties",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
    items: [
      {
        id: "spring-rolls",
        name: "Spring Rolls",
        description:
          "Crispy rolls filled with vegetables and your choice of chicken or vegetarian",
        price: 6.49,
        image:
          "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
      },
      {
        id: "fried-wontons",
        name: "Fried Wontons",
        description:
          "Crispy wontons filled with seasoned pork and served with sweet chili sauce",
        price: 7.49,
        image:
          "https://images.pexels.com/photos/9339958/pexels-photo-9339958.jpeg",
      },
      {
        id: "sesame-balls",
        name: "Sesame Balls",
        description:
          "Chewy rice balls with sweet red bean filling, coated with sesame seeds",
        price: 5.99,
        image:
          "https://images.pexels.com/photos/6941050/pexels-photo-6941050.jpeg",
      },
      {
        id: "taro-puffs",
        name: "Taro Puffs",
        description: "Crispy, flaky puffs filled with mashed taro and pork",
        price: 7.99,
        image:
          "https://images.pexels.com/photos/5900805/pexels-photo-5900805.jpeg",
      },
    ],
  },
  {
    id: "frozen-menu",
    name: "Frozen Menu",
    description: "Take home our specialties to enjoy anytime",
    image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg",
    items: [
      {
        id: "frozen-dumplings",
        name: "Frozen Dumplings (12 pcs)",
        description:
          "Assorted dumplings available in pork, shrimp, chicken, or vegetable varieties",
        price: 15.99,
        image:
          "https://images.pexels.com/photos/6941045/pexels-photo-6941045.jpeg",
      },
      {
        id: "frozen-bao",
        name: "Frozen Bao Buns (6 pcs)",
        description: "Ready-to-steam bao buns in various flavors",
        price: 12.99,
        image:
          "https://images.pexels.com/photos/6941096/pexels-photo-6941096.jpeg",
      },
      {
        id: "frozen-spring-rolls",
        name: "Frozen Spring Rolls (10 pcs)",
        description: "Ready-to-fry spring rolls with dipping sauce",
        price: 10.99,
        image:
          "https://images.pexels.com/photos/3626809/pexels-photo-3626809.jpeg",
      },
      {
        id: "dim-sum-combo",
        name: "Dim Sum Combo Pack",
        description:
          "Assortment of our most popular dim sum items, frozen for your convenience",
        price: 24.99,
        image:
          "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg",
      },
    ],
  },
];

export const FEATURED_ITEMS = [
  MENU_CATEGORIES[0].items[0], // Ha Gao
  MENU_CATEGORIES[1].items[0], // Char Siu Bao
  MENU_CATEGORIES[2].items[0], // Spring Rolls
];

export const ABOUT_CONTENT = {
  story:
    "Dimsum Andria was founded with a passion for authentic Chinese cuisine and a desire to share the art of dimsum with our community. Our journey began when our chef, who trained in Hong Kong for over a decade, decided to bring traditional dimsum techniques to this location. Every dish is handcrafted with care, using traditional methods passed down through generations.",
  mission:
    "Our mission is to provide an authentic dimsum experience using only the freshest ingredients and traditional cooking techniques. We believe in honoring culinary traditions while adding our own creative touch to each dish.",
  philosophy:
    "At Dimsum Andria, we believe that food brings people together. Our philosophy centers on creating a warm, welcoming environment where friends and family can gather to enjoy delicious food and create lasting memories.",
};

export const BUSINESS_HOURS = [
  { day: "Monday - Saturday", hours: "05:00 AM - 12:00 AM" },
  { day: "Sunday", hours: "09:30 AM - 12:00 AM" },
];

export const LOCATION = {
  address: "Melati Mas Regency G5/17,",
  city: "South Tangerang",
  zipCode: "15323",
  country: "Indonesia",
  mapUrl: "https://maps.app.goo.gl/jTauA4SWywFvzUTv8",
};
