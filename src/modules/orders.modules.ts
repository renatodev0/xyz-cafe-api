import { Module } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';
import { OrdersControllers } from 'src/controllers/orders.controllers';
import { ordersProviders } from 'src/providers/orders.providers';
import { DatabaseModule } from './db.modules';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersControllers],
  providers: [
    OrderService,
    ...ordersProviders,
  ],
})
export class OrderModules {}