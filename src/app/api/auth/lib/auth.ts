import prisma from "@/app/database/prisma";
import { signinSchema } from "@/app/validation/signinSchema"
import NextAuth from "next-auth"
import credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { PrismaAdapter } from "@auth/prisma-adapter"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
       async authorize(credentials){
        const {email,password}=signinSchema.parse(credentials);
        const user=await prisma.user.findUnique(
          {where:{email:email}});
          if(!user){
            throw new Error("No user found");
          }
      const isvalid=bcrypt.compare(password,user.password)
      if(!isvalid){
        throw new Error ("password is wrong");
      } return user;
      }
      
    })
  ],
  session:{
    strategy:"jwt"
  },
  pages:{
    signIn:"../../../signin/page",
    newUser:"../../../signup/page",
      },
      callbacks:{
    //@ts-ignore
    // signIn:({user})=>{
    //   const includesGoogle=user.email?.endsWith("gmail.com")
    //   return includesGoogle
    // },
    //@ts-ignore
    session:({user,token,session})=>{
      return{

        email:token.email,
        id:token.id
      }
    }
      }
})