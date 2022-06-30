import {gql} from 'apollo-server-express';

export default gql`
    type Artist {
        _id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        instruments: String
    }
    extend type Query {
        artists(limit: Int, offset: Int): [Artist]
        artist(id: ID!): Artist
    }
`


