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

export const CategoryServices = {
  createCategory,
  getAllCategories,
};
