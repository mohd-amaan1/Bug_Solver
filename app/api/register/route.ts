import bcrypt  from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(5)
})

export async function POST(req: NextRequest) {
    const body = await req.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })
    if(user) return NextResponse.json("User already exist!", {status: 400})
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword
        }
    })
    return NextResponse.json({email: newUser.email}, { status: 201 });
}



