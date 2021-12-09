import { Injectable, Inject } from '@nestjs/common';
import { Order } from 'src/models/order.entity';
import { Product } from 'src/models/product.entity';
import { Op } from 'sequelize';

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
        const { products, price, payment, status, observation, table } = body

        const create_order = {
            products,
            price,
            payment,
            status,
            observation,
            table
        }

        Order.create(create_order)
            .then(order => {
                res.status(200).json({})
            })
            .catch(err => {
                res.status(409).json({})
            })

    }

    async getProductsOfOrder(req, body, res) {
        const order_id = req.query.order

        const order = await Order.findOne({
            where: {
                id: order_id
            }
        })

        let orderProducts = order.products.split(',');

        let query = {
            where: {
                id: {
                    [Op.or]: []
                }
            }
        }

        for (let i = 0, length = orderProducts.length; i < length; i++) {
            query.where.id[Op.or].push(orderProducts[i])
        }

        const products = await Product.findAll(query)
        
        res.status(200).json({
            products
        })
    }


    async getOrdersForTable(req, body, res) {
        const table = req.query.table

        const orders = await Order.findAll({
            where: {
                [Op.and]: [
                    {table: table},
                    {status: 
                        {
                            [Op.not]: 'finish'
                        }
                    }
                ]
            }
        })
        
        res.status(200).json({
            orders
        })
    }
}