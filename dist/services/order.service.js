"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_entity_1 = require("../models/order.entity");
let OrderService = class OrderService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async findAll() {
        return this.productsRepository.findAll();
    }
    async createProduct(req, body, res) {
        console.log(body);
        const { products, price, observation, table } = body;
        const create_order = {
            products,
            price,
            observation,
            table
        };
        order_entity_1.Order.create(create_order)
            .then(order => {
            console.log(order);
            res.status(200).json({});
        })
            .catch(err => {
            console.log(err);
            res.status(409).json({});
        });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ORDERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map