import { NextResponse } from 'next/server';
import { verifyPassword } from '@/lib/hash_password';
import generateToken from '@/lib/generate_token';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const admin = await prisma.administrator.findUnique({
    where: { email },
  });

  if (!admin) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }


  const isPasswordValid = await verifyPassword(admin.password, password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }


  const token = generateToken();
  const name = admin.name;
  


  await prisma.administrator.update({
    where: { id: admin.id },
    data: { token },
  });

  return NextResponse.json({ token, name, email }, { status: 200 });
}
