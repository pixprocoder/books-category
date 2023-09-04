import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

// user routes
router.post("/", userController.createUser);
router.get("/", userController.getAllUsersFromDB);
router.get("/:id", userController.getSingleUserFromDB);
router.patch("/:id", userController.updateUserFromDB);
router.delete("/:id", userController.deleteUserFromDB);

export const userRoutes = router;
