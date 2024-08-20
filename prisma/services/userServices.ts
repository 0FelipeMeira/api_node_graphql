import { PrismaClient } from "@prisma/client";
import { createUserType, updateUserType } from "../types/userTypes";

const prisma = new PrismaClient();

export const userService = {
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },
  getUserById: async (id: number) => {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  createUser: async (data: createUserType) => {
    return await prisma.user.create({ data });
  },
  updateUser: async (id: string, data: updateUserType) => {
    const intId = Number(id);
    return await prisma.user.update({
      where: { id: intId },
      data,
    });
  },
  deleteUserById: async (id: string) => {
    const intId = Number(id);
    return await prisma.user.delete({
      where: { id: intId },
    });
  },
};
