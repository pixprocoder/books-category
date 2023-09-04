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
  console.log(req.body.categoryId);
  const result = await BookServices.bookByCategory(req.params.categoryId);
  res.send({
    success: true,
    statusCode: 200,
    message: "Book Fetched with category id successfully",
    data: result,
  });
};

export const BookControllers = {
  createBook,
  getAllBooks,
  bookByCategory,
};
