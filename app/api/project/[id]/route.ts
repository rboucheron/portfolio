import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/lib/prisma"



export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const project = await Prisma.project.findUnique({
      where: { id: Number(id) }, 
      include: {
        images: true,
        technologies: true,
      },
    });

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}
