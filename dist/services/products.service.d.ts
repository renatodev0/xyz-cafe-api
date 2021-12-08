import { Product } from 'src/models/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: typeof Product);
    findAll(): Promise<Product[]>;
    createProduct(req: any, body: any, res: any): Promise<void>;
}
