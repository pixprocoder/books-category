import { Order } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createOrder = async (orderData: Order) => {
  const result = await prisma.order.create({
    data: orderData,
  });
  return result;
};

// Get all orders
const getAllOrders = async () => {
  const result = await prisma.order.findMany({});
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
};
