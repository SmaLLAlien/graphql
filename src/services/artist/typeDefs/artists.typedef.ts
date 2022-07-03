import { gql } from 'apollo-server-express';

export default gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }
  input CreateArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]!
    instruments: [String]!
  }
  input UpdateArtistInput {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]!
    instruments: [String]!
  }
  type Deleted {
    deletedCount: Int
    id: ID
  }
  extend type Query {
    artists(limit: Int, offset: Int): [Artist]
    artist(id: ID!): Artist
  }
  extend type Mutation {
    createArtist(artist: CreateArtistInput): Artist
    deleteArtist(id: ID!): Deleted
    updateArtist(artist: UpdateArtistInput): Artist
  }
`;
