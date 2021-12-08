import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products.controller';
import { ProductsService } from 'src/services/products.service';
import { productsProviders } from 'src/providers/products.providers';
import { DatabaseModule } from './db.modules';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    ...productsProviders,
  ],
})
export class ProductsModules {}