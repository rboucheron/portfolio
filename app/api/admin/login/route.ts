import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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


  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }


  const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });


  await prisma.administrator.update({
    where: { id: admin.id },
    data: { token },
  });

  return NextResponse.json({ token }, { status: 200 });
}
