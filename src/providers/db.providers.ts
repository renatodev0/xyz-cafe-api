import { Sequelize } from 'sequelize-typescript';
import { Order } from 'src/models/order.entity';
import { Product } from 'src/models/product.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_cafe',
        timezone:"-03:00"
      });
      sequelize.addModels([Product]);
      sequelize.addModels([Order]);
      await sequelize.sync();
      return sequelize;
    },
  },
];