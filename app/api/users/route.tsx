import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';

export async function GET(req: NextRequest) {
    const user = await prisma.user.findMany();
    return NextResponse.json(user);
}

