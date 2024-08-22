import prisma from "../.././../datab/prisma";
import { signinschema } from "../../../validation/signinSchema";
import bcrypt from "bcrypt"
 
export async function Post(req:Request){
    const body=await req.json();
    const {email,password}=signinschema.parse(body)
    const user=await prisma.user.findUnique({where:{email}});
    if (user){return new Response (JSON.stringify({error:"user already exists"}),{status:401})}
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await prisma.user.create({
        data:{email,
            password:hashedPassword
        }
    })
    return new Response(JSON.stringify({sucess:true}),{status:200})
}