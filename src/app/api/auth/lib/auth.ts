import prisma from "@/app/data/prisma";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import credentials from "next-auth/providers/credentials";
import { validationSchema } from "@/app/zod/validationSchema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    credentials({
      async authorize(credentials) {
        const { email, password } = validationSchema.parse(credentials);
        const user = await prisma.user.findUnique({ where: { email: email } });
        if (!user) {
          throw new Error("No user found");
        }
        const isvalid = bcrypt.compare(password, user.password);
        if (!isvalid) {
          throw new Error("password is wrong");
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "../../../signin/page",
    newUser: "../../../signup/page",
  },
  callbacks: {
    //@ts-ignore
    session: ({ user, token, session }) => {
      return {
        email: token.email,
        id: token.id,
      };
    },
  },
});
