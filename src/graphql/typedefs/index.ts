import baseDef from "./baseDef";
import genre from "../../services/genre/typeDefs/genre.typedef";
import artists from "../../services/artist/typeDefs/artists.typedef";
import bands from "../../services/band/typeDefs/bands.typedef";
import favourites from "../../services/favourites/typeDefs/favourites.typedef";
import tracks from "../../services/tracks/typeDefs/tracks.typedef";
import albums from "../../services/albums/typeDefs/album.typedef";
import user from "../../services/users/typeDefs/user.typedef";
export default [baseDef, genre, artists, bands, favourites, tracks, albums, user];
