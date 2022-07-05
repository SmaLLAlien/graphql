import { gql } from 'apollo-server-express';

export default gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }
  type Member {
    artist: Artist
    instrument: String
    years: [String]
  }
  input CreateMemberInput {
    artist: ID
    instrument: String
    years: [String]
  }
  input UpdateMemberInput {
    artist: ID
    instrument: String
    years: [String]
  }
  input CreateBandInput {
    name: String
    origin: String
    members: [CreateMemberInput]
    website: String
    genresIds: [String]
  }
  input FilterBandInput {
    limit: Int
    offset: Int
    name: String
    origin: String
    website: String
  }
  input UpdateBandInput {
    id: ID!
    name: String
    origin: String
    members: [UpdateMemberInput]
    website: String
    genresIds: [String]
  }
  type Deleted {
    deletedCount: Int
    id: ID
  }
  extend type Query {
    bands(filter: FilterBandInput): [Band]
    band(id: ID!): Band
  }
  extend type Mutation {
    createBand(band: CreateBandInput): Band
    deleteBand(id: ID!): Deleted
    updateBand(band: UpdateBandInput): Band
  }
`;
