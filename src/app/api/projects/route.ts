import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const project = await prisma.project.create({
      data: {
        title: data.title,
        slug: data.slug,
        status: data.status,
        startDate: data.startDate,
        endDate: data.endDate,
        image: data.image,
        description: data.description,
        apartmentTypes: data.apartmentTypes,
        amenities: data.amenities,
        brochureUrl: data.brochureUrl,
        location: data.location,
        gallery: data.gallery,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;

    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.project.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
