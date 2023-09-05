"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
// user routes
router.post("/", user_controller_1.userController.createUser);
router.get("/", user_controller_1.userController.getAllUsersFromDB);
router.get("/:id", user_controller_1.userController.getSingleUserFromDB);
router.patch("/:id", user_controller_1.userController.updateUserFromDB);
router.delete("/:id", user_controller_1.userController.deleteUserFromDB);
exports.userRoutes = router;
