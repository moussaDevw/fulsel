"use client";
import { MoveRightIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  title: string;
  slug: string;
  status: string;
  image: string;
}

type ProjectProps = {
  projects: Project[];
  showTitle?: boolean;
  shwAllProjects?: boolean;
  onClick?: () => void;
  className?: string;
};

export const SectionProject = ({
  projects,
  showTitle = true,
  onClick,
  shwAllProjects = true,
  className = "bg-[#D99541]/3",
}: ProjectProps) => {
  const router = useRouter();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  const goToDetailProject = (slug: string) => {
    router.push(`/projets/${slug}`);
  };

  const goToProject = () => {
    router.push(`/projets`);
  };

  return (
    <main className={`min-h-screen py-4 ${className}`}>
      {/* Header */}
      <header className="text-center">
        {showTitle && (
          <h1 className="font-['Elza_Trial-Black',Helvetica] text-2xl sm:text-3xl md:text-4xl lg:text-[30px] xl:text-[40px] tracking-[3.50px] leading-[87px] animate-fade-in">
            <span className="font-black text-[#1f3359] tracking-[1.75px] inline-block hover:scale-110 transition-transform duration-300">
              NOS{" "}
            </span>
            <span className="font-black text-[#d99541] tracking-[1.75px] inline-block hover:scale-110 transition-transform duration-300">
              PROJETS
            </span>
          </h1>
        )}
      </header>

      {/* Filter buttons */}
      <div className="flex justify-center gap-4 mb-12 mt-6">
        {filterOptions.map((option, index) => (
          <Button
            key={option.id}
            variant={activeFilter === option.value ? "default" : "outline"}
            className={`rounded-[46px] shadow-[0px_0px_14px_3px_#00000024] h-[43px] px-6 font-bold font-['Raleway',Helvetica] text-[15px] tracking-[0.75px] cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up ${
              activeFilter === option.value
                ? "bg-[#1f3359] text-white hover:bg-[#1f3359]/90"
                : "border-[#1f3359] text-[#bd7b2a] hover:bg-[#1f3359] hover:text-white"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setActiveFilter(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-10 mb-5 lg:mb-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-index={index}
            className={`transform transition-all duration-700 ease-out ${
              visibleCards.includes(index)
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Card className="w-full max-w-[630px] h-[651px] rounded-[21px] overflow-hidden relative shadow-lg shadow-[#00000040] border-none mb-10 group hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:rotate-1">
              <div className="relative overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-90 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Effet de brillance animé au survol */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-br from-white/40 via-transparent to-transparent transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#1f335980] to-transparent z-[1] group-hover:from-[#1f3359aa] transition-all duration-500"></div>
              </div>

              <Badge className="absolute top-0 left-0 w-[119px] h-[47px] bg-[#c78432] rounded-[21px_0px_0px_0px] flex items-center justify-center font-semibold text-[19px] text-white z-10 group-hover:bg-[#d99541] transition-colors duration-300 group-hover:scale-110 transform origin-top-left">
                {project.status}
              </Badge>

              <CardContent
                onClick={onClick}
                className="absolute bottom-0 left-0 right-0 h-[122px] p-0 cursor-pointer group-hover:h-[140px] transition-all duration-300"
              >
                <div className="flex items-center justify-between px-6 pt-11 group-hover:pt-8 transition-all duration-300">
                  <div className="absolute h-[125px] right-0 left-0 bottom-0 rounded-[0px_0px_21px_21px] bg-gradient-to-t from-[#1f3359] via-[rgba(31,51,89,0.56)] to-[rgba(31,51,89,0.05)] group-hover:from-[#1f3359] group-hover:via-[rgba(31,51,89,0.8)] group-hover:to-[rgba(31,51,89,0.2)] transition-all duration-500" />
                  <h2
                    className="z-20 font-['Inter',Helvetica] font-bold text-white text-[24px] md:text-xl xl:text-[34px] flex items-center gap-2 group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => goToDetailProject(project.slug)}
                  >
                    <span className="group-hover:text-[#d99541] transition-colors duration-300">
                      {project.title}
                    </span>
                    <img
                      src="/assets/svgs/arrowGrup.svg"
                      alt="Immeuble"
                      className="object-cover size-[30px] group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </h2>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* View all projects button */}
      {shwAllProjects && (
        <div className="flex justify-center mb-5">
          <Button
            className="rounded-[46px] shadow-[0px_0px_11px_2px_#00000040] h-[43px] px-6 bg-gradient-to-r from-[#d99541] to-[#c78432] font-bold font-['Raleway',Helvetica] text-[15px] tracking-[0.75px] text-white cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            onClick={goToProject}
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              VOIR TOUS LES PROJETS
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f3359] to-[#d99541] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
          animation-fill-mode: both;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(300%) skewX(-12deg);
          }
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shine 2s infinite;
        }
      `}</style>
    </main>
  );
};
