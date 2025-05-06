"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  upcomingProjects: number;
  totalUsers: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    activeProjects: 0,
    upcomingProjects: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    // Ici, nous ferons l'appel à l'API pour récupérer les statistiques
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/dashboard/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des statistiques:",
          error
        );
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#1f3359] mb-8">
        Tableau de bord
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600">Total Projets</h3>
          <p className="text-3xl font-bold text-[#1f3359] mt-2">
            {stats.totalProjects}
          </p>
        </Card>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600">
            Projets en cours
          </h3>
          <p className="text-3xl font-bold text-[#B77625] mt-2">
            {stats.activeProjects}
          </p>
        </Card>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600">
            Projets à venir
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {stats.upcomingProjects}
          </p>
        </Card>

        <Card className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-gray-600">Utilisateurs</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">
            {stats.totalUsers}
          </p>
        </Card>
      </div>
    </div>
  );
}
