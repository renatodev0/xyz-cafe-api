import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Product } from './product.entity';

@Table({
    timestamps: true
})
export class Order extends Model {

    @Column
    products: string;

    @Column
    price: string;

    @Column
    observation: string;

    @Column
    table: string;
}