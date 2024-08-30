import { NextResponse } from "next/server";
import { hashPassword} from "@/lib/hash_password";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, name, password } = await req.json();

  const existingAdmin = await prisma.administrator.findUnique({
    where: { email },
  });

  if (existingAdmin) {
    return NextResponse.json(
      { error: "Admin already exists" },
      { status: 400 }
    );
  }

  const hashedPassword = await hashPassword(password);

  const newAdmin = await prisma.administrator.create({
    data: {
      email,
      name,
      password: hashedPassword,
      token: "",
    },
  });

  return NextResponse.json(newAdmin, { status: 201 });
}
