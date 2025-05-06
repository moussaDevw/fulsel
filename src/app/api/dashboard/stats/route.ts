import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const [totalProjects, activeProjects, upcomingProjects, totalUsers] =
      await Promise.all([
        prisma.project.count(),
        prisma.project.count({
          where: {
            status: "En cours",
          },
        }),
        prisma.project.count({
          where: {
            status: "A venir",
          },
        }),
        prisma.user.count(),
      ]);

    return NextResponse.json({
      totalProjects,
      activeProjects,
      upcomingProjects,
      totalUsers,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des statistiques:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
