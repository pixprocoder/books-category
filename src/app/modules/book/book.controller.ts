import { Request, Response } from "express";
import { BookServices } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const result = await BookServices.createBook(req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book created successfully",
    data: result,
  });
};

// Get All Books
const getAllBooks = async (req: Request, res: Response) => {
  const result = await BookServices.getAllBooks();
  res.send({
    success: true,
    statusCode: 200,
    message: "Books Fetched successfully",
    data: result,
  });
};

// Get Book by categoryId
const bookByCategory = async (req: Request, res: Response) => {
  const result = await BookServices.bookByCategory(req.params.categoryId);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book Fetched with category id successfully",
    data: result,
  });
};

// Get single book
const singleBook = async (req: Request, res: Response) => {
  const result = await BookServices.singleBook(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book Fetched successfully",
    data: result,
  });
};

// Update book
const updateBook = async (req: Request, res: Response) => {
  const result = await BookServices.updateBook(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book Updated successfully",
    data: result,
  });
};

// Delete book
const deleteBook = async (req: Request, res: Response) => {
  const result = await BookServices.deleteBook(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book Deleted successfully",
    data: result,
  });
};

export const BookControllers = {
  createBook,
  getAllBooks,
  bookByCategory,
  singleBook,
  updateBook,
  deleteBook,
};
