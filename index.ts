import { gql } from "apollo-server-core";
import resolvers from "./src/graphql/resolvers";
import typeDefs from "./src/graphql/typeDefs";
import express from "express";

// const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const API_PORT = 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }: { req: express.Request }) => {
  //   return {
  //     user: "USUARIO",
  //     param: req.headers.authorization,
  //   };
  // },
});

server.start().then(() => {
  server.applyMiddleware({ app });

  app.listen({ port: API_PORT || 4000 }, () => {
    console.log(
      `Server ready at http://localhost:${API_PORT || 4000}${
        server.graphqlPath
      }`
    );
  });
});
