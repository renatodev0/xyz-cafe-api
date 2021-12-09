import { Injectable, Inject } from '@nestjs/common';
import { Product } from 'src/models/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private productsRepository: typeof Product
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.findAll<Product>();
  }

  async createProduct(req, body, res) {
    const { name, price, photo } = body

    const create_product = {
      name,
      price,
      photo
    }

    Product.create(create_product)
      .then(product => {
        res.status(200).json({})
      })
      .catch(err => {
        res.status(409).json({})
      })

  }
}