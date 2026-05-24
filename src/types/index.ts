export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  details: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  isSale?: boolean;
  stockCount?: number;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export type Category =
  | "dresses"
  | "sets"
  | "tops"
  | "corsets"
  | "jumpsuits"
  | "heels"
  | "accessories"
  | "clubwear";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  image?: string;
}
