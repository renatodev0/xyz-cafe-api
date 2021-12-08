import { Injectable, Inject } from '@nestjs/common';
import { Order } from 'src/models/order.entity';

@Injectable()
export class OrderService {
    constructor(
        @Inject('ORDERS_REPOSITORY')
        private productsRepository: typeof Order
    ) { }

    async findAll(): Promise<Order[]> {
        return this.productsRepository.findAll<Order>();
    }

    async createProduct(req, body, res) {
        console.log(body)
        const { products, price, observation, table } = body

        const create_order = {
            products,
            price,
            observation,
            table
        }

        Order.create(create_order)
            .then(order => {
                console.log(order)
                res.status(200).json({})
            })
            .catch(err => {
                console.log(err)
                res.status(409).json({})
            })

    }
}