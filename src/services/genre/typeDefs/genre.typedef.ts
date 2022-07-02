import {gql} from 'apollo-server-express';

export default gql`
    type Genre {
        _id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    input CreateGenreInput {
        name: String
        description: String
        country: String
        year: Int
    }
    input UpdateGenreInput {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    type Deleted {
        deletedCount: Int,
        _id: ID
    }
    extend type Query {
        genres(limit: Int, offset: Int): [Genre]
        genre(id: ID!): Genre
    }
    extend type Mutation {
        createGenre(genre: CreateGenreInput): Genre
        deleteGenre(id: ID!): Deleted
        updateGenre(genre: UpdateGenreInput): Genre
    }
`
