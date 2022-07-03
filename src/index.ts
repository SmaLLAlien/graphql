import express from 'express';
import { PORT } from './utils/enviroment';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/typedefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (socket) => {
    const { req, res } = socket;
    return { req, res };
  },
});
const app = express();
const startApp = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
};

startApp();
