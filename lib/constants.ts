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
    image: "images/steamed-dimsum.png",
    items: [
      {
        id: "dimsum-ori",
        name: "Dimsum Original 10 pcs / 20 pcs / 40 pcs / 100 pcs",
        description:
          "Dimsum Chicken Topping Mix Tuna Carrot Beef Shrimp Mushroom",
        price: 2.34,
        image: "images/dimsum-ori.png",
      },
      {
        id: "dimsum-kuning",
        name: "Dimsum Kulit Kuning 10 pcs",
        description: "Chicken Dimsum With Caviar Topping",
        price: 2.34,
        image: "images/dimsum-kuning.png",
      },
      {
        id: "dimsum-nori",
        name: "Dimsum Rumput Laut / Nori 10 pcs",
        description: "Chicken Dimsum With Seaweed Skin",
        price: 2.11,
        image: "images/dimsum-nori.png",
      },
      {
        id: "lumpia-ayam",
        name: "Dimsum Lumpia Ayam Kulit Tahu 10pcs",
        description: "Chicken Spring Rolls Wrapped in Tofu Skin",
        price: 2.34,
        image: "images/lumpia-ayam.png",
      },
      {
        id: "hakau-udang",
        name: "Hakau udang 10 pcs",
        description:
          "Shrimp hakau contains 10 pieces, using fresh whole shrimp",
        price: 3.32,
        image: "images/hakau-udang.png",
      },
      {
        id: "siomay-udang",
        name: "Siomay Udang (bite size) 10 pcs",
        description: "BITE SIZE Full Shrimp Siomay 10 Pcs",
        price: 1.81,
        image: "images/siomay-udang.png",
      },
      {
        id: "ceker-tausi",
        name: "Ceker Bumbu tausi 500gr",
        description:
          "Tender Chicken Feet With Premium Tausi Sauce Contains 3 Pcs",
        price: 3.62,
        image: "images/ceker-tausi.png",
      },
      {
        id: "lomaikai",
        name: "Lomaikai isi 6 pcs",
        description:
          "6 Pcs Lo Mai Kai Sticky Rice. Wrapped in Lotus Leaf with Chicken and Salted Egg Filling",
        price: 3.01,
        image: "images/lomaikai.png",
      },
    ],
  },
  {
    id: "steamed-bakpao",
    name: "Steamed Bakpao",
    description: "Fluffy steamed buns with delicious fillings",
    image: "images/steamed-bakpao.png",
    items: [
      {
        id: "bakpao-coklat",
        name: "Bakpao Coklat LUMER BESTSELLER",
        description:
          "Premium chocolate filled buns, melt inside and melt in your mouth",
        price: 1.63,
        image: "images/bakpao-coklat.png",
      },
      {
        id: "telur-asin",
        name: "Bakpao Telur Asin",
        description: "3 Pcs Bakpao With Melted Salted Egg Filling",
        price: 1.69,
        image: "images/telur-asin.png",
      },
      {
        id: "bakpao-ayam",
        name: "Bakpao Ayam Cashiu",
        description: "3 Pcs Cashiu Chicken Filled Buns Like In Restaurants",
        price: 1.69,
        image: "images/bakpao-ayam.png",
      },
      {
        id: "bakpao-tausa",
        name: "Bakpao Tausa / Kacang Merah",
        description: "Warm Steamed Buns Filled with Red Beans 3 Pcs",
        price: 1.63,
        image: "images/bakpao-tausa.png",
      },
      {
        id: "bakpao-durian",
        name: "Bapao Durian (New)",
        description: "3 pcs Durian Bapao with durian sauce filling",
        price: 1.69,
        image: "images/bakpao-durian.png",
      },
    ],
  },
  {
    id: "fried-dimsum",
    name: "Fried Dimsum",
    description: "Crispy and golden fried dim sum specialties",
    image: "images/fried-dimsum.png",
    items: [
      {
        id: "lumpia-udang",
        name: "Lumpia Udang Kulit Tahu (8pcs)",
        description:
          "Medium Size Shrimp Filled Spring Rolls Like In Restaurants",
        price: 2.59,
        image: "images/lumpia-udang.png",
      },
      {
        id: "pangsit-udang",
        name: "Pangsit Udang Goreng Mayonaise (8pcs)",
        description: "Shrimp Filled Dumplings",
        price: 2.59,
        image: "images/pangsit-udang.png",
      },
      {
        id: "cakwe-udang",
        name: "Cakwe Udang Goreng Mayonaise (3pcs)",
        description:
          "Fried Shrimp Cakwe Ready to Eat with Sambal and Mayonnaise",
        price: 3.73,
        image: "images/cakwe-udang.png",
      },
      {
        id: "ekkado-ayam",
        name: "Ekkado Ayam (8 pcs)",
        description: "Fried Ekkado With Chicken And Quail Egg Filling",
        price: 2.59,
        image: "images/ekkado-ayam.png",
      },
      {
        id: "pizza-pie",
        name: "Pizza Pie (6 pcs)",
        description: "Fried Pizza Pie filled with sausage and chicken 6 Pcs",
        price: 3.01,
        image: "images/pizza-pie.png",
      },
      {
        id: "choco-banana",
        name: "Choco Banana Pie (6 pcs)",
        description:
          "Fried choco banana pie contains 2 pcs. Suitable for those who like sweet snacks",
        price: 3.01,
        image: "images/choco-banana.png",
      },
      {
        id: "melted-mozza",
        name: "Melted Mozzarella (10 pcs)",
        description: "Fried mozzarella sticks 10 pcs",
        price: 2.11,
        image: "images/melted-mozza.png",
      },
    ],
  },
  {
    id: "frozen-menu",
    name: "Frozen Menu",
    description: "Take home our specialties to enjoy anytime",
    image: "images/frozen-menu.png",
    items: [
      {
        id: "frozen-ori",
        name: "Dimsum Original Frozen 10 pcs",
        description:
          "Steam for 8 minutes. In the freezer it will last for 1 month, Original Dimsum with Carrot Beef Shrimp Mushroom Tuna Topping",
        price: 3.02,
        image: "images/frozen-ori.png",
      },
      {
        id: "frozen-nori",
        name: "Dimsum Nori Frozen 10 pcs",
        description: "Steam for 8 minutes. Chicken Dimsum Wrapped in Seaweed",
        price: 3.02,
        image: "images/frozen-nori.png",
      },
      {
        id: "frozen-lumpiaayam",
        name: "Lumpia Ayam Kulit Tahu Frozen 10 pcs",
        description:
          "Chicken Spring Rolls Wrapped in Tofu Skin, Perfect for Frying or Steaming",
        price: 3.02,
        image: "images/frozen-lumpiaayam.png",
      },
      {
        id: "frozen-kuning",
        name: "Dimsum Kulit Kuning Frozen 10 pcs",
        description: "Frozen Yellow Skin Dimsum 10 pcs",
        price: 3.02,
        image: "images/frozen-kuning.png",
      },
      {
        id: "frozen-ori50",
        name: "Dimsum Original Frozen 50 pcs",
        description:
          "Suitable for stock at home, heated for only 8 minutes. Will be sent with a mix of shrimp, mushroom, carrot, beef toppings",
        price: 13.9,
        image: "images/frozen-ori50.png",
      },
      {
        id: "frozen-siomay10",
        name: "Siomay Udang Frozen 10 pcs",
        description: "Frozen Shrimp Siomay Already With Sauce",
        price: 2.84,
        image: "images/frozen-siomay10.png",
      },
      {
        id: "frozen-telurasin",
        name: "Bakpao Telur Asin Frozen 6 pcs",
        description:
          "Keeps in the freezer for 1 month, steam for 6 minutes and ready to eat",
        price: 3.31,
        image: "images/frozen-telurasin.png",
      },
      {
        id: "frozen-cashiu",
        name: "Bakpao Ayam Cashiu Frozen 6 pcs",
        description:
          "Steam for 6 minutes and eat immediately. Lasts for 1 month in the freezer",
        price: 3.25,
        image: "images/frozen-cashiu.png",
      },
      {
        id: "frozen-coklat",
        name: "Bakpao Coklat Frozen 6 pcs",
        description: "Chocolate Buns Steamed for 8 Minutes and Ready to Serve",
        price: 3.24,
        image: "images/frozen-coklat.png",
      },
      {
        id: "frozen-tausa",
        name: "Bakpao Tausa Frozen 6 pcs",
        description: "Frozen Buns with Red Bean Filling 6 Pcs",
        price: 1.6,
        image: "images/frozen-tausa.png",
      },
      {
        id: "frozen-lumpia",
        name: "Lumpia Udang Kulit Tahu Frozen isi 8 pcs",
        description: "Shrimp Spring Rolls Can Be Fried Immediately",
        price: 3.37,
        image: "images/frozen-lumpia.png",
      },
      {
        id: "frozen-ekkado",
        name: "Ekkado Ayam Frozen 8 pcs",
        description: "Fried Ekkado With Chicken And Quail Egg Filling",
        price: 3.25,
        image: "images/frozen-ekkado.png",
      },
      {
        id: "frozen-mozza",
        name: "Melted Mozzarella Frozen Isi 10 pcs",
        description: "Delicious melted mozzarella, 10 pcs ready to cook",
        price: 3.0,
        image: "images/frozen-mozza.png",
      },
      {
        id: "frozen-ceker",
        name: "Ceker Ayam Frozen 500gr",
        description:
          "Frozen Chicken Feet 500gr Equivalent to 3 Cooked Portions",
        price: 5.16,
        image: "images/frozen-ceker.png",
      },
      {
        id: "frozen-mayo",
        name: "Pangsit Udang Mayonaise Frozen 8 pcs",
        description: "Frozen Mayonnaise Shrimp Dumplings 8 pcs",
        price: 3.32,
        image: "images/frozen-mayo.png",
      },
    ],
  },
];

export const FEATURED_ITEMS = [
  MENU_CATEGORIES[0].items[2], // Dimsum Nori
  MENU_CATEGORIES[0].items[4], // Hakau Udang
  MENU_CATEGORIES[0].items[5], // Siomay Udang
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
