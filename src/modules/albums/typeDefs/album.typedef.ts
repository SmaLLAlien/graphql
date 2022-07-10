import { gql } from 'apollo-server-express';

export default gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  input CreateAlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }
  input FilterAlbumInput {
    limit: Int
    offset: Int
    name: String
    released: Int
  }
  input UpdateAlbumInput {
    id: String
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }
  type Deleted {
    deletedCount: Int
    id: ID
  }
  extend type Query {
    albums(filter: FilterAlbumInput): [Album]
    album(id: ID!): Album
  }
  extend type Mutation {
    createAlbum(album: CreateAlbumInput): Album
    deleteAlbum(id: ID!): Deleted
    updateAlbum(album: UpdateAlbumInput): Album
  }
`;
