import { Users } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createUser = async (userData: Users) => {
  const result = await prisma.users.create({
    data: userData,
  });
  return result;
};

// Get All users
const getAllUsersFromDB = async () => {
  const result = await prisma.users.findMany({});
  return result;
};

// Get Single users
const getSingleUserFromDB = async (id: string) => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
  });
  return result;
};

// Get user profile
// const getUserProfile = async() =>{
//   const result = await prisma.users.findUnique({
//     where:{

//     }
//   })
// }

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

// Delete user
const deleteUserFromDB = async (id: string) => {
  const result = await prisma.users.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  createUser,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserFromDB,
  deleteUserFromDB,
};
