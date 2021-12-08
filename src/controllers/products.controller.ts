import { Controller, Get, HttpCode, Post, Request, Body, Response } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { Product } from 'src/models/product.entity';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Post()
    async createProduct(@Request() req, @Body() body, @Response() res) {
        await this.productsService.createProduct(req, body, res);
    }

}