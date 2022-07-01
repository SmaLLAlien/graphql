import {gql} from 'apollo-server-express';

export default gql`
    type User {
        _id: ID!
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
        register(user: UserInput): User
        login(email: String!, password: String!): JWT
    }
`
