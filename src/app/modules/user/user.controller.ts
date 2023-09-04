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

export const userController = {
  createUser,
};
