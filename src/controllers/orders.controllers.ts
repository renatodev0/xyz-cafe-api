import { Controller, Get, HttpCode, Post, Request, Body, Response } from '@nestjs/common';
import { Order } from 'src/models/order.entity';
import { OrderService } from 'src/services/order.service';

@Controller('orders')
export class OrdersControllers {
    constructor(private orderServices: OrderService) { }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderServices.findAll();
    }

    @Post()
    async createProduct(@Request() req, @Body() body, @Response() res) {
        await this.orderServices.createProduct(req, body, res);
    }

}