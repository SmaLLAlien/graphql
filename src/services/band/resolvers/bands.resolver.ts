import {getBand, getBands} from "../bands.service";

export default {
    Query: {
        bands: async (_, {limit, offset}) => {
            console.log(await getBands(limit, offset))
            return await getBands(limit, offset)
        },
        band: async (parent, args, context) => {
            return await getBand(args.id)
        }
    }
}
