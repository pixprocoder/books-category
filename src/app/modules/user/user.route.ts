import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getAllUsersFromDB);
router.get("/:id", userController.getSingleUserFromDB);
router.patch("/:id", userController.updateUserFromDB);

export const userRoutes = router;
