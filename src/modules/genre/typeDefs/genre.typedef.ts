import { gql } from 'apollo-server-express';

export default gql`
  type Genre {
    id: ID!
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
  input FilterGenreInput {
    limit: Int
    offset: Int
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
    deletedCount: Int
    id: ID
  }
  extend type Query {
    genres(filter: FilterGenreInput): [Genre]
    genre(id: ID!): Genre
  }
  extend type Mutation {
    createGenre(genre: CreateGenreInput): Genre
    deleteGenre(id: ID!): Deleted
    updateGenre(genre: UpdateGenreInput): Genre
  }
`;
