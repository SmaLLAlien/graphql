import baseDef from "./baseDef";
import genre from "../../services/genre/typeDefs/genre.typedef";
import artists from "../../services/artist/typeDefs/artists.typedef";
import bands from "../../services/band/typeDefs/bands.typedef";
import favourites from "../../services/favourites/typeDefs/favourites.typedef";
import user from "../../services/users/typeDefs/user.typedef";
export default [baseDef, genre, artists, bands, favourites, user];
