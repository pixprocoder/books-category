"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const category_route_1 = require("../modules/category/category.route");
const book_route_1 = require("../modules/book/book.route");
const order_route_1 = require("../modules/order/order.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // user routes
    {
        path: "/auth/signup",
        route: user_route_1.userRoutes,
    },
    {
        path: "/users",
        route: user_route_1.userRoutes,
    },
    {
        path: "/profile",
        route: user_route_1.userRoutes,
    },
    // category routes
    {
        path: "/categories/create-category",
        route: category_route_1.CategoryRoutes,
    },
    {
        path: "/categories",
        route: category_route_1.CategoryRoutes,
    },
    // Book Routes
    {
        path: "/books/create-book",
        route: book_route_1.BookRoutes,
    },
    {
        path: "/books",
        route: book_route_1.BookRoutes,
    },
    // Order Routes
    {
        path: "/orders/create-order",
        route: order_route_1.OrderRoutes,
    },
    {
        path: "/orders",
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
