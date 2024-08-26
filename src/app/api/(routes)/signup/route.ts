import { SigninSchema } from '../../../validation/signupSchema';
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";
import prisma from '../../../database/prisma'
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = SigninSchema.parse(body);
    
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}