import express from "express";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: (req: express.Request, res: express.Response) => {
      res.send("Hello, this is the root route.");
    },
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
