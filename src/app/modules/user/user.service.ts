import { Users } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUser = async (userData: Users) => {
  const result = await prisma.users.create({
    data: userData,
  });
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await prisma.users.findMany({});
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// Update user
const updateUserFromDB = async (id: string, payload: Partial<Users>) => {
  const result = await prisma.users.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

export const userService = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
};
