import { Users } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUser = async (userData: Users) => {
  const result = await prisma.users.create({
    data: userData,
  });
  return result;
};

export const userService = {
  createUser,
};
