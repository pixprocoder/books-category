import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBook = async (bookData: Book) => {
  const result = await prisma.book.create({
    data: bookData,
  });
  return result;
};

// Get All Books
const getAllBooks = async () => {
  const result = await prisma.book.findMany({});
  return result;
};

// Get Book by categoryId
const bookByCategory = async (id: string) => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
  bookByCategory,
};
