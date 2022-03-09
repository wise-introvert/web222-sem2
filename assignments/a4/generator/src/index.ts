import { data } from "./data";

export interface Product {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: any;
  image: string;
}

export interface Category {
  id: string;
  name: string;
}

const products: Product[] = data.products.map(
  (product: Product): Product => ({
    ...product,
    category: [product.category],
  })
);

console.log(JSON.stringify({ categories: data.categories, products }, null, 2));
