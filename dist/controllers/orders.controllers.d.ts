import { Order } from 'src/models/order.entity';
import { OrderService } from 'src/services/order.service';
export declare class OrdersControllers {
    private orderServices;
    constructor(orderServices: OrderService);
    findAll(): Promise<Order[]>;
    createProduct(req: any, body: any, res: any): Promise<void>;
}
