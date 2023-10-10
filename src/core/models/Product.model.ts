export type Product = {
  readonly id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  availablity: boolean;
  product_img: string;
  readonly cloudinary_id?: string;
  categoryId?: number;
  readonly salesPerDay?: number;
  rating?: number;
  readonly sales: number;
};
