"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_entity_1 = require("../models/order.entity");
const product_entity_1 = require("../models/product.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'db_cafe',
                timezone: "-03:00"
            });
            sequelize.addModels([product_entity_1.Product]);
            sequelize.addModels([order_entity_1.Order]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=db.providers.js.map