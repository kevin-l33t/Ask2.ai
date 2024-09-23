import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { AskResolvers } from "./resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Create an executable schema
import { makeExecutableSchema } from "@graphql-tools/schema";
const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [AskResolvers],
});

// Initialize ApolloServer
const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
