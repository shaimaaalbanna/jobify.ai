import {z} from "zod"
export const signinSchema=z.object({
    email:z.string().email(),
    password:z.string().min(8,"too short"),
    confirmPassword:z.string().min(8,"confirm password")
})