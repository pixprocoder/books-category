import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { BookRoutes } from "../modules/book/book.route";
import { OrderRoutes } from "../modules/order/order.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth/signup",
    route: userRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },

  // category routes
  {
    path: "/categories/create-category",
    route: CategoryRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },

  // Book Routes
  {
    path: "/books/create-book",
    route: BookRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },

  // Order Routes
  {
    path: "/orders/create-order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
