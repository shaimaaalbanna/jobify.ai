import prisma from "@/app/database/prisma";

export async function Get(){
   const data=await prisma.user.findMany()
   return new Response(JSON.stringify(data))
}
