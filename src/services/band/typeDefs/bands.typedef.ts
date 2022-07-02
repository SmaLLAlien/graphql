import {gql} from 'apollo-server-express';

export default gql`
    type Band {
        _id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }
    input CreateBandInput {
        name: String
        origin: String
        website: String
        genresIds: [String]
    }
    input UpdateBandInput {
        id: ID!
        name: String
        origin: String
        website: String
        genresIds: [String]
    }
    extend type Query {
        bands(limit: Int, offset: Int): [Band]
        band(id: ID!): Band
    }
    extend type Mutation {
        createBand(band: CreateBandInput): Band
        deleteBand(id: ID!): Deleted
        updateBand(band: UpdateBandInput): Band
    }
`


