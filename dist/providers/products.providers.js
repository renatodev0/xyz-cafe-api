"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsProviders = void 0;
const product_entity_1 = require("../models/product.entity");
exports.productsProviders = [
    {
        provide: 'PRODUCTS_REPOSITORY',
        useValue: product_entity_1.Product,
    },
];
//# sourceMappingURL=products.providers.js.map