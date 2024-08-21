import { userService } from "../../prisma/services/userServices";
import { parseNumberOrNull } from "../../utils/parseNumberOrNull";

const service = userService;

const queries = {
  getUsers: () => {
    return service.getAllUsers();
  },
  getUser: (parent: any, args: { id: string }, context: any) => {
    const id = parseNumberOrNull(args.id);
    if (id) {
      return service.getUserById(id);
    }
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
    const id = parseNumberOrNull(args.id);
    if (id) {
      const data = {
        name: args.name,
        email: args.email,
      };
      return service.updateUser(id, data);
    }
  },

  deleteUser: (parent: any, args: { id: string }, context: any) => {
    const id = parseNumberOrNull(args.id);
    if (id) {
      return service.deleteUserById(id);
    }
  },
};

export const resolvers = { queries, mutations };
