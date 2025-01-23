import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    const body = await req.json();
    const valid = schema.safeParse(body);
    if (!valid.success) 
        return NextResponse.json(valid.error.errors, { status: 400 })
    const updatedUser = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: body.name,
            email: body.email
        }
    });
    return NextResponse.json(updatedUser);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
    await prisma.user.delete({
        where: {id: parseInt(params.id)}
    })
    return NextResponse.json({});
}