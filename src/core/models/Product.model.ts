export type Product = {
  readonly id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  product_imgs: any[];
  weight: number;
  length: number;
  breadth: number;
  rating?: number;
};
