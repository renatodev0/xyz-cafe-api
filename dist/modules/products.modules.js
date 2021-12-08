"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModules = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("../controllers/products.controller");
const products_service_1 = require("../services/products.service");
const products_providers_1 = require("../providers/products.providers");
const db_modules_1 = require("./db.modules");
let ProductsModules = class ProductsModules {
};
ProductsModules = __decorate([
    (0, common_1.Module)({
        imports: [db_modules_1.DatabaseModule],
        controllers: [products_controller_1.ProductsController],
        providers: [
            products_service_1.ProductsService,
            ...products_providers_1.productsProviders,
        ],
    })
], ProductsModules);
exports.ProductsModules = ProductsModules;
//# sourceMappingURL=products.modules.js.map