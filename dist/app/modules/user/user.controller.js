"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.createUser(req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: "user created successfully",
        data: result,
    });
});
const getAllUsersFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getAllUsersFromDB();
    res.send({
        success: true,
        statusCode: 200,
        message: "fetched successfully",
        data: result,
    });
});
const getSingleUserFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getSingleUserFromDB(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: "Single User fetched successfully",
        data: result,
    });
});
const updateUserFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.userService.updateUserFromDB(id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: " User updated successfully",
        data: result,
    });
});
// delete user
const deleteUserFromDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.deleteUserFromDB(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: " User deleted successfully",
        data: result,
    });
});
exports.userController = {
    createUser,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserFromDB,
    deleteUserFromDB,
};
