import { ProductsService } from 'src/services/products.service';
import { Product } from 'src/models/product.entity';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    createProduct(req: any, body: any, res: any): Promise<void>;
}
