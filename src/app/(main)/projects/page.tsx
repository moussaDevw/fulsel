"use client";
import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import { useRouter } from "next/navigation";
import { SectionProject } from "@/app/components/SectionProject";
export default function NosProjectPage() {
  // Project data for mapping
  const router = useRouter();
  const allProjects = [
    {
      id: 1,
      title: "Keur Marieme, Mermoz",
      image: "/assets/images/img9.jpg",
      status: "En cours",
    },
    {
      id: 2,
      title: "Buur sine, Point E",
      image: "/assets/images/img9.jpg",
      status: "A venir",
    },
    {
      id: 3,
      title: "Keur Marieme, Mermoz",
      image: "/assets/images/img9.jpg",
      status: "En cours",
    },
    {
      id: 4,
      title: "Buur sine, Point E",
      image: "/assets/images/img9.jpg",
      status: "A venir",
    },
  ];

  const goToProject = (id: number) => {
    router.push(`/projects/${id}`);
  };
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <HeroSection
          title="Keur Marieme Mermoz"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Projets", link: "/projects", isActive: true },
          ]}
        />

        {/* Projects Section */}
        <section className="w-full bg-[#d9954108] py-16 max-w-[1440px] mx-auto">
          {/* Projects Grid */}

          <SectionProject
            projects={allProjects}
            showTitle={false}
            shwAllProjects={false}
            onClick={() => goToProject(1)}
          />

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-5">
            {/* <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-[0px_0px_3px_#00000040] border-none"
            > */}
            <img className="" alt="Previous" src="/assets/svgs/arrowLeft.svg" />
            {/* </Button> */}
            {/* <Button
              variant="outline"
              size="icon"
              className=" shadow-[0px_0px_3px_#00000040] border-none"
            > */}
            <img
              // className="w-2 h-[15px]"
              alt="Next"
              src="/assets/svgs/arrowRigth.svg"
            />
            {/* </Button> */}
          </div>
        </section>

        <FinanceSimulator />

        <Footer />
      </div>
    </div>
  );
}
