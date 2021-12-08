import { Model } from 'sequelize-typescript';
export declare class Product extends Model {
    name: string;
    price: number;
    photo: string;
    createdAt: Date;
    updatedAt: Date;
}
