export type Product = {
  id?: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  availablity: boolean;
  product_img: string;
  cloudinary_id?: string;
  categoryId?: number;
  salesPerDay?: number;
  rating?: number;
};
