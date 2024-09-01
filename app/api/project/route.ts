import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/lib/prisma";



export async function GET(req: NextRequest) {
  try {
    const projects = await Prisma.project.findMany({
      include: {
        images: true,
        technologies: true,
      },
    });
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
