import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "user created successfully",
    data: result,
  });
};

const getAllUsersFromDB = async (req: Request, res: Response) => {
  const result = await userService.getAllUsersFromDB();
  res.send({
    success: true,
    statusCode: 200,
    message: "fetched successfully",
    data: result,
  });
};

const getSingleUserFromDB = async (req: Request, res: Response) => {
  const result = await userService.getSingleUserFromDB(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: "Single User fetched successfully",
    data: result,
  });
};

const updateUserFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await userService.updateUserFromDB(id, req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: " User updated successfully",
    data: result,
  });
};
// delete user
const deleteUserFromDB = async (req: Request, res: Response) => {
  const result = await userService.deleteUserFromDB(req.params.id);
  res.send({
    success: true,
    statusCode: 200,
    message: " User deleted successfully",
    data: result,
  });
};

export const userController = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
