import { Order } from 'src/models/order.entity';
export declare class OrderService {
    private productsRepository;
    constructor(productsRepository: typeof Order);
    findAll(): Promise<Order[]>;
    createProduct(req: any, body: any, res: any): Promise<void>;
}
