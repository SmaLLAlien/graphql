import {gql} from 'apollo-server-express';

export default gql`
    type Track {
        _id: ID!
        title: String
        album: String
        artists: [Artist]
        bands: [Band]!
        duration: Int
        released: Int
        genres: [Genre]!
    }
    input CreateTrackInput {
        title: String
        albumId: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }
    input UpdateTackInput {
        id: ID!
        title: String
        albumId: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }
    extend type Query {
        tracks(limit: Int, offset: Int): [Track]
        track(id: ID!): Track
    }
    extend type Mutation {
        createTrack(track: CreateTrackInput): Track
        deleteTrack(id: ID!): Deleted
        updateTrack(track: UpdateTackInput): Track
    }
`


