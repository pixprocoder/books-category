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
exports.CategoryControllers = void 0;
const category_service_1 = require("./category.service");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryServices.createCategory(req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: "category created successfully",
        data: result,
    });
});
// get all categories
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryServices.getAllCategories();
    res.send({
        success: true,
        statusCode: 200,
        message: "All categories fetched successfully",
        data: result,
    });
});
// get single category
const getSingleCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryServices.getSingleCategory(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: "Category fetched successfully",
        data: result,
    });
});
// update category
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield category_service_1.CategoryServices.updateCategory(id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: "Category updated successfully",
        data: result,
    });
});
// delete category
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield category_service_1.CategoryServices.deleteCategory(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: "Category Deleted successfully",
        data: result,
    });
});
exports.CategoryControllers = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
