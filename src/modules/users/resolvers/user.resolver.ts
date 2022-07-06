import { login, register } from '../user.service';

export default {
  Query: {
    jwt: async (parent, { email, password }) => {
      return await login(email, password);
    },
  },
  Mutation: {
    register: async (_, args) => {
      return await register(args);
    },
  },
};
