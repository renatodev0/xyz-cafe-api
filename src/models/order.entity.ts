import { Table, Column, Model, HasMany, AllowNull } from 'sequelize-typescript';
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
    payment: boolean;

    @Column
    status: string;

    @AllowNull
    @Column
    observation: string;

    @Column
    table: string;
}