import { PrismaClient } from "@prisma/client";
import { userService } from "../../../prisma/services/userServices";

const prisma = new PrismaClient();
const service = userService;

const queries = {
  getUsers: () => {
    return service.getAllUsers();
  },
  getUser: (parent: any, args: { id: number }, context: any) => {
    const id = args.id;
    return prisma.user.findUnique({
      where: { id },
    });
  },
};

const mutations = {
  createUser: (
    parent: any,
    args: { name: string; email: string },
    context: any
  ) => {
    return service.createUser(args);
  },
  updateUser: (
    parent: any,
    args: { id: string; name?: string; email?: string },
    context: any
  ) => {
    const data = {
      name: args.name,
      email: args.email,
    };
    return service.updateUser(args.id, data);
  },
  deleteUser: (parent: any, args: { id: string }, context: any) => {
    return service.deleteUserById(args.id);
  },
};

export const resolvers = { queries, mutations };
