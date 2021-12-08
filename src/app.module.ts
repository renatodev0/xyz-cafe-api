import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModules } from './modules/products.modules';
import { OrderModules } from './modules/orders.modules';

@Module({
  imports: [ProductsModules, OrderModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
