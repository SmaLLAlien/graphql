import {getFavourites} from "../favourites.service";

export default {
    Query: {
        favourites: async (_, {limit, offset}) => {
            return await getFavourites(limit, offset)
        }
    }
}
