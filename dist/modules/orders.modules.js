"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModules = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../services/order.service");
const orders_controllers_1 = require("../controllers/orders.controllers");
const orders_providers_1 = require("../providers/orders.providers");
const db_modules_1 = require("./db.modules");
let OrderModules = class OrderModules {
};
OrderModules = __decorate([
    (0, common_1.Module)({
        imports: [db_modules_1.DatabaseModule],
        controllers: [orders_controllers_1.OrdersControllers],
        providers: [
            order_service_1.OrderService,
            ...orders_providers_1.ordersProviders,
        ],
    })
], OrderModules);
exports.OrderModules = OrderModules;
//# sourceMappingURL=orders.modules.js.map