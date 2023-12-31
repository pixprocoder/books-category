import { Request, Response } from "express";
import { CategoryServices } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  const result = await CategoryServices.createCategory(req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "category created successfully",
    data: result,
  });
};

// get all categories
const getAllCategories = async (req: Request, res: Response) => {
  const result = await CategoryServices.getAllCategories();
  res.send({
    success: true,
    statusCode: 200,
    message: "All categories fetched successfully",
    data: result,
  });
};

// get single category
const getSingleCategory = async (req: Request, res: Response) => {
  const result = await CategoryServices.getSingleCategory(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: "Category fetched successfully",
    data: result,
  });
};

// update category
const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await CategoryServices.updateCategory(id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "Category updated successfully",
    data: result,
  });
};

// delete category
const deleteCategory = async (req: Request, res: Response) => {
  const result = await CategoryServices.deleteCategory(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: "Category Deleted successfully",
    data: result,
  });
};

export const CategoryControllers = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
