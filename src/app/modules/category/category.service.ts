import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createCategory = async (categoryData: Category) => {
  const result = await prisma.category.create({
    data: categoryData,
  });
  return result;
};

// get all categories
const getAllCategories = async () => {
  const result = await prisma.category.findMany({});
  return result;
};

// get single category
const getSingleCategory = async (id: string) => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// update category
const updateCategory = async (id: string, payload: Partial<Category>) => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

// delete category
const deleteCategory = async (id: string) => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryServices = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
