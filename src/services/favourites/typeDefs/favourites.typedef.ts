import {gql} from 'apollo-server-express';

export default gql`
    type Favourite {
        _id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
    }
    extend type Query {
        favourites(limit: Int, offset: Int): [Favourite]
    }
`


// TODO [TRACK]
