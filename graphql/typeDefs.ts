import { gql } from "apollo-server-express";
import { Users } from "./users";

const typeDefs = gql`
  ${Users.types}

  type Query {
    ${Users.queries}
  }

  type Mutation {
    ${Users.mutations}
  }
`;

export default typeDefs;
