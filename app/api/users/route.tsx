import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import schema from './schema';

export async function GET(req: NextRequest) {
    const user = await prisma.user.findMany();
    return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const valid = schema.safeParse(body);
    if (!valid.success) 
        return NextResponse.json(valid.error.errors, { status: 400 })
    const user = await prisma.user.findUnique({
        where: {email : body.email}
    })
    if(user) return NextResponse.json({error: "User already exists!"}, {status: 400})
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })
    return NextResponse.json(newUser, {status: 201});
}

