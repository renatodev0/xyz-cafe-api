import { Order } from "src/models/order.entity";
export declare const ordersProviders: {
    provide: string;
    useValue: typeof Order;
}[];
