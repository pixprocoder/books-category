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

export const CategoryControllers = {
  createCategory,
  getAllCategories,
};
