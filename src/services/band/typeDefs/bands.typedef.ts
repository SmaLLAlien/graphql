import {gql} from 'apollo-server-express';

export default gql`
    type Band {
        _id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }
    extend type Query {
        bands(limit: Int, offset: Int): [Band]
        band(id: ID!): Band
    }
`


