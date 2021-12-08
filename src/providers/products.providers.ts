import { Product } from "src/models/product.entity";

export const productsProviders = [
  {
    provide: 'PRODUCTS_REPOSITORY',
    useValue: Product,
  },
];