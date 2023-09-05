import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  const result = await OrderServices.createOrder(req.body);
  res.send({
    success: true,
    statusCode: 200,
    message: "Order placed successfully",
    data: result,
  });
};

export const OrderController = {
  createOrder,
};
