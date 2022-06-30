import {gql} from 'apollo-server-express';

export default gql`
    type Genre {
        _id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    extend type Query {
        genres(limit: Int, offset: Int): [Genre]
        genre(id: ID!): Genre
    }
`
