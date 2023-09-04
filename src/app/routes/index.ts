import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
