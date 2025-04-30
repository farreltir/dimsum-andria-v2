export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}