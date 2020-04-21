export interface ProductInterface {
  name: string;
  description: string;
  cardImage: string;
  images: Array<string>;
  price: Number;
  currency: string;
  discount: Number;
  rating: Number;
  variation: Array<string>;
}
