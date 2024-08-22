import { z } from "zod";
export const signinValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, "too short"),
});
