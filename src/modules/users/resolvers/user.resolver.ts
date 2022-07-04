import { login, register } from '../user.service';

export default {
  Query: {
    login: async (parent, { email, password }, context) => {
      return await login(email, password);
    },
  },
  Mutation: {
    register: async (_, args) => {
      return await register(args);
    },
  },
};
