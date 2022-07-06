import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }
  type JWT {
    jwt: String!
  }
  input UserInput {
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  extend type Query {
    jwt(email: String!, password: String!): JWT
  }
  extend type Mutation {
    register(user: UserInput): User
  }
`;
