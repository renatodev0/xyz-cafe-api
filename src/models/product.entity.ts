import { Table, Column, Model, CreatedAt, UpdatedAt, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column({
    type: DataType.FLOAT
  })
  price: number;

  @Column
  photo: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}