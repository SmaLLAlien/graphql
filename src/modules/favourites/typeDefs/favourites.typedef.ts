import { gql } from 'apollo-server-express';

export default gql`
  type Favourite {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
  extend type Query {
    favourites: Favourite
  }
  extend type Mutation {
    addTrackToFavourites(id: String): Favourite
    addBandToFavourites(id: String): Favourite
    addGenreToFavourites(id: String): Favourite
    addArtistToFavourites(id: String): Favourite
    removeTrackToFavourites(id: String): Favourite
    removeBandToFavourites(id: String): Favourite
    removeGenreToFavourites(id: String): Favourite
    removeArtistToFavourites(id: String): Favourite
  }
`;
