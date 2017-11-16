export interface Product {
  itemId: string;
  name: string;
  desc: string;
  price: number;
  availability: { itemId: string, quantity: number, location: string, link: string };
  rating: { itemId: string, rating: number, count: number };
}
