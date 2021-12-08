import { Order } from "src/models/order.entity";

export const ordersProviders = [
  {
    provide: 'ORDERS_REPOSITORY',
    useValue: Order,
  },
];