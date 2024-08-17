import { signinSchema } from "@/app/validation/signinSchema";

import { z } from "zod";
export async function Post(request:Request){
    try{const body=await request.json();
        const{email,password}=signinSchema.parse(body);
        return Response.json(body);
    }
    catch (error:any){
    if (error instanceof z.ZodError){
        return Response.json({errors:error.errors},{status:400});
    }return Response.json({error:error.message},{status:500})
    }  
}