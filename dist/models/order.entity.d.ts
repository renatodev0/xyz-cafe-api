import { Model } from 'sequelize-typescript';
export declare class Order extends Model {
    products: string;
    price: string;
    observation: string;
    table: string;
}
