// import { Users } from "@graphql/users";
import { Users } from "./users";

const resolvers = {
  Query: {
    ...Users.resolvers.queries,
  },
  Mutation: {
    ...Users.resolvers.mutations,
  },
};

export default resolvers;
