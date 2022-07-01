import {login, register} from "../user.service";

export default {
    Query: {
        register: async (_, args) => {
            return await register(args)
        },
        login: async (parent, {email, password}, context) => {
            return await login(email, password)
        }
    }
}


