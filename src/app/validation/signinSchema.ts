import {z} from "zod"
export const signinschema=z.object({
    email:z.string().email(),
    password:z.string().min(6)


})