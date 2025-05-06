"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="w-64 bg-[#1f3359] h-screen fixed left-0 top-0 text-white p-6">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Fulser Admin</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className={`block p-2 rounded ${
                isActive("/dashboard")
                  ? "bg-[#B77625]"
                  : "hover:bg-[#B77625]/50"
              }`}
            >
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/projets"
              className={`block p-2 rounded ${
                isActive("/dashboard/projets")
                  ? "bg-[#B77625]"
                  : "hover:bg-[#B77625]/50"
              }`}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/utilisateurs"
              className={`block p-2 rounded ${
                isActive("/dashboard/utilisateurs")
                  ? "bg-[#B77625]"
                  : "hover:bg-[#B77625]/50"
              }`}
            >
              Utilisateurs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-8">{children}</div>
    </div>
  );
}
