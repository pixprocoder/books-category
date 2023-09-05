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
exports.BookControllers = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.createBook(req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: "Book created successfully",
        data: result,
    });
});
// Get All Books
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.getAllBooks();
    res.send({
        success: true,
        statusCode: 200,
        message: "Books Fetched successfully",
        data: result,
    });
});
// Get Book by categoryId
const bookByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.bookByCategory(req.params.categoryId);
    res.send({
        success: true,
        statusCode: 200,
        message: "Book Fetched with category id successfully",
        data: result,
    });
});
// Get single book
const singleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.singleBook(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: "Book Fetched successfully",
        data: result,
    });
});
// Update book
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.updateBook(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: 200,
        message: "Book Updated successfully",
        data: result,
    });
});
// Delete book
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.deleteBook(req.params.id);
    res.send({
        success: true,
        statusCode: 200,
        message: "Book Deleted successfully",
        data: result,
    });
});
exports.BookControllers = {
    createBook,
    getAllBooks,
    bookByCategory,
    singleBook,
    updateBook,
    deleteBook,
};
