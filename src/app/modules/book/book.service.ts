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

// Get single book
const singleBook = async (id: string) => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// Update single book
const updateBook = async (id: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

// Delete single book
const deleteBook = async (id: string) => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });
  return result;
};

export const BookServices = {
  createBook,
  getAllBooks,
  bookByCategory,
  singleBook,
  updateBook,
  deleteBook,
};
