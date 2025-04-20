"use client";
import { MoveRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  status: string;
  image: string;
}

type ProjectProps = {
  projects: Project[];
  showTitle?: boolean;
  shwAllProjects?: boolean;
  onClick?: () => void;
};

export const SectionProject = ({
  projects,
  showTitle = true,
  onClick,
  shwAllProjects = true,
}: ProjectProps) => {
  const router = useRouter();
  // Project filter options
  const filterOptions = [
    { id: "tous", label: "TOUS", value: "tous" },
    { id: "en-cours", label: "EN COURS", value: "En cours" },
    { id: "a-venir", label: "A VENIR", value: "A venir" },
  ];

  const [activeFilter, setActiveFilter] = useState("tous");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "tous" ? true : project.status === activeFilter
  );
  const goToProject = () => {
    router.push(`/projects`);
  };
  return (
    <main className="w-full max-w-[1440px] mx-auto min-h-screen bg-[#d9954108] py-4 px-6">
      {/* Header */}
      <header className="text-center mt-4 mb-16">
        {showTitle && (
          <h1 className="font-['Elza_Trial-Black',Helvetica] text-[50px] tracking-[3.50px] leading-[87px]">
            <span className="font-black text-[#1f3359] tracking-[1.75px]">
              NOS{" "}
            </span>
            <span className="font-black text-[#d99541] tracking-[1.75px]">
              PROJETS
            </span>
          </h1>
        )}
      </header>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={activeFilter === option.value ? "default" : "outline"}
            className={`rounded-[46px] shadow-[0px_0px_14px_3px_#00000024] h-[43px] px-6 font-bold font-['Raleway',Helvetica] text-[15px] tracking-[0.75px] cursor-pointer ${
              activeFilter === option.value
                ? "bg-[#1f3359] text-white"
                : "border-[#1f3359] text-[#bd7b2a]"
            }`}
            onClick={() => setActiveFilter(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            className="w-full h-[535px] rounded-[21px] overflow-hidden relative shadow-lg shadow-[#00000040] border-none"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1f335980] to-transparent z-[1]"></div>
            <Badge className="absolute top-0 left-0 w-[119px] h-[47px] bg-[#c78432] rounded-[21px_0px_0px_0px] flex items-center justify-center font-semibold text-[19px] text-white z-10">
              {project.status}
            </Badge>

            <CardContent
              onClick={onClick}
              className="absolute bottom-0 left-0 right-0 h-[122px] p-0 cursor-pointer"
            >
              <div className="flex items-center justify-between px-6 pt-11">
                <div className="absolute h-[125px] right-0 left-0 bottom-0 rounded-[0px_0px_21px_21px] bg-gradient-to-t from-[#1f3359] via-[rgba(31,51,89,0.56)] to-[rgba(31,51,89,0.05)]" />
                <h2 className="z-20 font-['Inter',Helvetica] font-bold text-white text-[34px] flex items-center gap-2">
                  {project.title}
                  <img
                    src="/assets/svgs/arrowGrup.svg"
                    alt="Immeuble"
                    className="object-cover size-[30px]"
                  />
                </h2>
                <MoveRightIcon className="w-8 h-[30px] text-white cursor-pointer" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View all projects button */}
      {shwAllProjects && (
        <div className="flex justify-center mb-12">
          <Button
            className="rounded-[46px] shadow-[0px_0px_11px_2px_#00000040] h-[43px] px-6 bg-gradient-to-r from-[#d99541] to-[#c78432] font-bold font-['Raleway',Helvetica] text-[15px] tracking-[0.75px] text-white cursor-pointer"
            onClick={goToProject}
          >
            VOIR TOUS LES PROJETS
          </Button>
        </div>
      )}
    </main>
  );
};
