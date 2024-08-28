import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const admins = await prisma.administrator.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return NextResponse.json({ admins }, { status: 200 });
}
